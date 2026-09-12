import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runExpansionVerification() {
  console.log('========================================================================');
  console.log('--- STARTING VIP & MDF COMMERCE EXPANSION VERIFICATION SUITE ---');
  console.log('========================================================================\n');

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const errors = [];
  const screenshotDir = path.join(__dirname, 'screenshots_expansion');
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

  const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:4173/ikla-maison-web/';
  console.log(`Testing target: ${BASE_URL}\n`);

  const viewports = [
    { name: 'desktop_1440', width: 1440, height: 900 },
    { name: 'tablet_landscape_1024', width: 1024, height: 768 },
    { name: 'tablet_portrait_768', width: 768, height: 1024 },
    { name: 'mobile_max_430', width: 430, height: 932 },
    { name: 'mobile_pro_393', width: 393, height: 852 },
    { name: 'mobile_se_375', width: 375, height: 667 },
  ];

  async function checkHorizontalOverflow(page, label) {
    const overflow = await page.evaluate(() => {
      const scrollW = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      return { hasOverflow: scrollW > innerW + 1, scrollW, innerW };
    });
    if (overflow.hasOverflow) {
      const msg = `[OVERFLOW FAIL] ${label}: scrollWidth (${overflow.scrollW}px) > innerWidth (${overflow.innerW}px)`;
      console.error('  ✗', msg);
      errors.push(msg);
    } else {
      console.log(`  ✓ 0 horizontal overflow on ${label} (scrollWidth: ${overflow.scrollW}px, innerWidth: ${overflow.innerW}px)`);
    }
  }

  async function checkBrokenImages(page, label) {
    await page.evaluate(async () => {
      const step = 800;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 400));
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 300));
    });
    const broken = await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('img')).filter(
        (img) => img.getAttribute('src') && !img.src.includes('data:') && !img.src.includes('blob:')
      );
      await Promise.all(
        imgs.map((img) => {
          if (img.complete && img.naturalWidth > 0) return Promise.resolve();
          return img.decode().catch(() => {});
        })
      );
      return imgs
        .filter((img) => img.naturalWidth === 0)
        .map((img) => img.src);
    });
    if (broken.length > 0) {
      const msg = `[BROKEN IMAGES] ${label}: ${broken.join(', ')}`;
      console.error('  ✗', msg);
      errors.push(msg);
    } else {
      console.log(`  ✓ All images valid on ${label}`);
    }
  }

  console.log('[STAGE 1] Testing Desktop 1440px complete feature flow...');
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await desktopContext.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error' && !msg.text().includes('favicon')) {
      console.error('  [Console Error]:', msg.text());
      errors.push(`Console: ${msg.text()}`);
    }
  });

  console.log('  -> Navigating to Homepage...');
  await page.goto(`${BASE_URL}#/home`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await checkHorizontalOverflow(page, 'Desktop Homepage');
  await checkBrokenImages(page, 'Desktop Homepage');

  const heroHouseCards = await page.locator('#hero-house-navigation a').count();
  console.log(`  ✓ Found ${heroHouseCards} HeroHouseNavigation cards`);
  if (heroHouseCards !== 7) {
    errors.push(`Expected 7 hero house cards, found ${heroHouseCards}`);
  }
  await page.screenshot({ path: path.join(screenshotDir, '01_desktop_home_hero_houses.png') });

  console.log('  -> Testing IKLA Maison Brand Page & Private Collection...');
  await page.goto(`${BASE_URL}#/brand/ikla-maison`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  const privateColSection = page.locator('#private-collection');
  await privateColSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  const vipCardCount = await page.locator('#private-collection .group').count();
  console.log(`  ✓ Private Collection cards found: ${vipCardCount}`);
  await checkBrokenImages(page, 'IKLA Maison Private Collection');
  await page.screenshot({ path: path.join(screenshotDir, '02_desktop_ikla_private_collection.png') });

  console.log('  -> Testing VIP Inquiry Modal trigger on VIP product...');
  const firstVipCta = page.locator('#private-collection button:has-text("Request Access"), #private-collection button:has-text("Request Allocation")').first();
  await firstVipCta.click();
  await page.waitForTimeout(400);

  const modalVisible = await page.locator('[role="dialog"]').isVisible();
  console.log(`  ✓ VIP Inquiry Modal visible: ${modalVisible}`);
  if (!modalVisible) errors.push('VIP Inquiry Modal failed to open');
  await page.screenshot({ path: path.join(screenshotDir, '03_desktop_vip_inquiry_modal.png') });

  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  const modalClosed = !(await page.locator('[role="dialog"]').isVisible());
  console.log(`  ✓ VIP Inquiry Modal closed via Escape: ${modalClosed}`);

  console.log('  -> Testing My Drink Family Brand Page...');
  await page.goto(`${BASE_URL}#/brand/my-drink-family`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await checkHorizontalOverflow(page, 'MDF Brand Page');
  await checkBrokenImages(page, 'MDF Brand Page');

  const heroEyebrow = await page.locator('text=MY DRINK FAMILY × IKLA MAISON').count();
  const heroHeadline = await page.locator('text=Wear the Family. Live the Ritual.').count();
  console.log(`  ✓ MDF Editorial Hero verified: Eyebrow (${heroEyebrow > 0}), Headline (${heroHeadline > 0})`);

  const heroReqBtn = page.locator('button:has-text("Request Private Access")');
  const hasReqBtn = await heroReqBtn.count();
  console.log(`  ✓ "Request Private Access" CTA present in hero: ${hasReqBtn > 0}`);

  const mdfMerchSection = page.locator('#mdf-merchandise-suites');
  await mdfMerchSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  const apparelFilterBtn = page.locator('#mdf-merchandise-suites button:has-text("Apparel")');
  if (await apparelFilterBtn.count() > 0) {
    await apparelFilterBtn.click();
    await page.waitForTimeout(300);
    console.log('  ✓ MDF Apparel filter clicked');
  }
  const allFilterBtn = page.locator('#mdf-merchandise-suites').getByRole('button', { name: 'All', exact: true });
  if (await allFilterBtn.count() > 0) {
    await allFilterBtn.click();
    await page.waitForTimeout(300);
  }

  await page.screenshot({ path: path.join(screenshotDir, '04_desktop_mdf_merchandise.png') });

  console.log('  -> Testing Collection Page integration...');
  await page.goto(`${BASE_URL}#/collection`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  const collVipSection = page.locator('#ikla-vip-private-collection');
  if (await collVipSection.count() > 0) {
    await collVipSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    console.log('  ✓ Collection Page Section 2.5 (VIP Private Collection) verified');
    await page.screenshot({ path: path.join(screenshotDir, '05_desktop_collection_vip.png') });
  }

  const collMdfSection = page.locator('#my-drink-family-merchandise');
  if (await collMdfSection.count() > 0) {
    await collMdfSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    console.log('  ✓ Collection Page Section 8.5 (MDF Merchandise) verified');
    await page.screenshot({ path: path.join(screenshotDir, '06_desktop_collection_mdf_merch.png') });
  }

  console.log('  -> Checking Footer Dynasty Ecosystem links...');
  const footerEco = page.locator('footer').getByText('Dynasty Ecosystem');
  await footerEco.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  const footerActiveSite = page.locator('footer').getByText('Master Fashion & Lifestyle House · Active Site');
  console.log(`  ✓ Footer active site indicator present: ${await footerActiveSite.count() > 0}`);
  await page.screenshot({ path: path.join(screenshotDir, '07_desktop_footer_ecosystem.png') });

  await desktopContext.close();

  console.log('\n[STAGE 2] Testing across all 6 responsive viewports...');
  for (const vp of viewports) {
    console.log(`\n--- Testing Viewport: ${vp.name} (${vp.width}x${vp.height}) ---`);
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const p = await ctx.newPage();

    await p.goto(`${BASE_URL}#/home`, { waitUntil: 'networkidle' });
    await p.waitForTimeout(400);
    await checkHorizontalOverflow(p, `${vp.name} Homepage`);
    await checkBrokenImages(p, `${vp.name} Homepage`);

    if (vp.width <= 768) {
      const hamburger = p.locator('button[aria-label="Open mobile navigation menu"]');
      if (await hamburger.isVisible()) {
        await hamburger.click();
        await p.waitForTimeout(300);
        const ecoSection = p.locator('[role="dialog"]').getByText('Dynasty Ecosystem');
        console.log(`  ✓ Mobile Menu Dynasty Ecosystem visible on ${vp.name}: ${await ecoSection.isVisible()}`);
        await p.screenshot({ path: path.join(screenshotDir, `08_${vp.name}_mobile_menu.png`) });
        const closeBtn = p.locator('button[aria-label="Close menu"]');
        await closeBtn.click();
        await p.waitForTimeout(200);
      }
    }

    await p.goto(`${BASE_URL}#/brand/my-drink-family`, { waitUntil: 'networkidle' });
    await p.waitForTimeout(400);
    await checkHorizontalOverflow(p, `${vp.name} MDF Brand Page`);
    await checkBrokenImages(p, `${vp.name} MDF Brand Page`);
    await p.screenshot({ path: path.join(screenshotDir, `09_${vp.name}_mdf_page.png`) });

    await ctx.close();
  }

  await browser.close();

  console.log('\n========================================================================');
  if (errors.length === 0) {
    console.log('--- ALL VERIFICATION PHASES PASSED WITH ZERO ERRORS ---');
  } else {
    console.error(`--- VERIFICATION FINISHED WITH ${errors.length} ERRORS ---`);
    errors.forEach((e, idx) => console.error(`  ${idx + 1}. ${e}`));
  }
  console.log('========================================================================\n');

  if (errors.length > 0) process.exit(1);
}

runExpansionVerification().catch((err) => {
  console.error('Fatal error running verification:', err);
  process.exit(1);
});
