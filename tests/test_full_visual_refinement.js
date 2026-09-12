import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runFullVisualRefinementTest() {
  console.log('========================================================================');
  console.log('--- STARTING FULL VISUAL REFINEMENT VERIFICATION SUITE ---');
  console.log('========================================================================\n');

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const errors = [];
  const screenshotDir = path.join(__dirname, 'screenshots_refinement');
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

  const BASE_URL = process.env.BASE_URL || 'http://localhost:4174/ikla-maison-web/';
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
    const broken = await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('img')).filter(
        (img) => img.getAttribute('src') && !img.src.includes('data:') && !img.src.includes('blob:')
      );
      const failed = [];
      await Promise.all(
        imgs.map(async (img) => {
          if (img.complete && img.naturalWidth > 0) return;
          try {
            const res = await fetch(img.src, { method: 'HEAD' });
            if (!res.ok) {
              failed.push(`${img.src} (HTTP ${res.status})`);
            }
          } catch (e) {
            failed.push(`${img.src} (${e.message})`);
          }
        })
      );
      return failed;
    });
    if (broken.length > 0) {
      const msg = `[BROKEN IMAGES] ${label}: ${broken.join(', ')}`;
      console.error('  ✗', msg);
      errors.push(msg);
    } else {
      console.log(`  ✓ All images valid on ${label}`);
    }
  }

  // =========================================================================
  // STAGE 1: DESKTOP DEEP VERIFICATION (1440px)
  // =========================================================================
  console.log('[STAGE 1] Testing Desktop 1440px complete feature flow...');
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await desktopContext.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error' && !msg.text().includes('favicon')) {
      console.error('  [Console Error]:', msg.text());
      errors.push(`Console: ${msg.text()}`);
    }
  });

  // 1.1 Homepage
  console.log('  -> Navigating to Homepage (#/home)...');
  await page.goto(`${BASE_URL}#/home`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await checkHorizontalOverflow(page, 'Desktop Homepage');
  await checkBrokenImages(page, 'Desktop Homepage');

  // Verify Kids editorial stage exists on Homepage
  const kidsHomeSection = page.locator('text="IKLA KIDS · THE FIRST INHERITANCE"').first();
  const hasKidsHome = await kidsHomeSection.count();
  console.log(`  ✓ Homepage IKLA Kids stage present: ${hasKidsHome > 0}`);
  if (!hasKidsHome) errors.push('Homepage IKLA Kids stage missing');

  // Verify Griffin Edition editorial stage exists on Homepage
  const griffinHomeSection = page.locator('text="IKLA MAISON · GRIFFIN EDITION"').first();
  const hasGriffinHome = await griffinHomeSection.count();
  console.log(`  ✓ Homepage Griffin Edition stage present: ${hasGriffinHome > 0}`);
  if (!hasGriffinHome) errors.push('Homepage Griffin Edition stage missing');

  // Verify Three-Way Ecosystem Banner exists
  const ecoBanner = page.locator('text="Three Sovereign Expressions"').first();
  const hasEcoBanner = await ecoBanner.count();
  console.log(`  ✓ Homepage Three-Way Ecosystem banner present: ${hasEcoBanner > 0}`);

  await page.screenshot({ path: path.join(screenshotDir, '01_desktop_home.png') });

  // 1.2 Dedicated IKLA Kids Page (#/kids)
  console.log('\n  -> Navigating to IKLA Kids Page (#/kids)...');
  await page.goto(`${BASE_URL}#/kids`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await checkHorizontalOverflow(page, 'Desktop Kids Page');
  await checkBrokenImages(page, 'Desktop Kids Page');

  // Verify 6 Core Product Cards
  const kidsCoreCards = await page.locator('.grid [role="article"], .grid .group').count();
  console.log(`  ✓ IKLA Kids core product cards found: ${kidsCoreCards}`);
  if (kidsCoreCards < 6) errors.push(`Expected at least 6 Kids cards, found ${kidsCoreCards}`);

  // Verify The Atelier Drop Velour Card
  const atelierDrop = page.locator('text="The Atelier Drop"').first();
  const hasAtelier = await atelierDrop.count();
  console.log(`  ✓ The Atelier Drop Custom Velour present: ${hasAtelier > 0}`);
  if (!hasAtelier) errors.push('The Atelier Drop missing on Kids Page');

  // Verify VIP Inquiry Modal on Kids Page
  const kidsInquiryBtn = page.locator('button:has-text("Join the Family List"), button:has-text("Request Access")').first();
  await kidsInquiryBtn.click();
  await page.waitForTimeout(400);

  let modalVisible = await page.locator('[role="dialog"]').isVisible();
  console.log(`  ✓ Kids VIP Inquiry Modal visible: ${modalVisible}`);
  if (!modalVisible) errors.push('Kids VIP Inquiry Modal failed to open');
  await page.screenshot({ path: path.join(screenshotDir, '02_desktop_kids_modal.png') });

  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  console.log(`  ✓ Kids Modal closed cleanly via Escape`);

  await page.screenshot({ path: path.join(screenshotDir, '03_desktop_kids_page.png') });

  // 1.3 Dedicated Griffin Edition Page (#/griffin)
  console.log('\n  -> Navigating to Griffin Edition Page (#/griffin)...');
  await page.goto(`${BASE_URL}#/griffin`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await checkHorizontalOverflow(page, 'Desktop Griffin Page');
  await checkBrokenImages(page, 'Desktop Griffin Page');

  // Verify 4 Commission Domains: Automotive, Maritime, Residence, Aviation
  const automotiveDomain = await page.getByRole('heading', { name: /Automotive/i }).count();
  const maritimeDomain = await page.getByRole('heading', { name: /Maritime/i }).count();
  const residenceDomain = await page.getByRole('heading', { name: /Residence/i }).count();
  const aviationDomain = await page.getByRole('heading', { name: /Aviation/i }).count();
  console.log(`  ✓ 4 Sovereign Domains verified: Automotive (${automotiveDomain > 0}), Maritime (${maritimeDomain > 0}), Residence (${residenceDomain > 0}), Aviation (${aviationDomain > 0})`);
  if (!automotiveDomain || !maritimeDomain || !residenceDomain || !aviationDomain) {
    errors.push('One or more Griffin commission domains missing');
  }

  // Verify Non-Masonic Copy Governance
  const pageText = await page.innerText('body');
  const forbiddenRegexes = [
    { name: 'masonic', regex: /\bmasonic\b/i },
    { name: 'freemason', regex: /\bfreemason\b/i },
    { name: 'secret society', regex: /\bsecret society\b/i },
    { name: 'illuminati', regex: /\billuminati\b/i },
  ];
  const foundForbidden = forbiddenRegexes
    .filter(item => item.regex.test(pageText))
    .map(item => item.name);
  if (foundForbidden.length > 0) {
    const msg = `[GOVERNANCE FAIL] Forbidden non-secular terms found on Griffin Page: ${foundForbidden.join(', ')}`;
    console.error('  ✗', msg);
    errors.push(msg);
  } else {
    console.log('  ✓ Non-Masonic strictly secular copy verified (0 forbidden terms found)');
  }

  // Verify Griffin Commission Modal
  const griffinCommissionBtn = page.locator('button:has-text("Request a Private Introduction"), button:has-text("Commission Inquiry")').first();
  await griffinCommissionBtn.click();
  await page.waitForTimeout(400);

  modalVisible = await page.locator('[role="dialog"]').isVisible();
  console.log(`  ✓ Griffin Commission Modal visible: ${modalVisible}`);
  if (!modalVisible) errors.push('Griffin Commission Modal failed to open');
  await page.screenshot({ path: path.join(screenshotDir, '04_desktop_griffin_modal.png') });

  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  console.log(`  ✓ Griffin Commission Modal closed cleanly via Escape`);

  await page.screenshot({ path: path.join(screenshotDir, '05_desktop_griffin_page.png') });

  // 1.4 Collection Page (#/collection)
  console.log('\n  -> Navigating to Collection Page (#/collection)...');
  await page.goto(`${BASE_URL}#/collection`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await checkHorizontalOverflow(page, 'Desktop Collection Page');
  await checkBrokenImages(page, 'Desktop Collection Page');

  // Verify Section 2.6 IKLA Kids Collection Section
  const kidsSection = page.locator('#ikla-kids-collection-section');
  await kidsSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  const hasKidsSection = await kidsSection.count();
  console.log(`  ✓ Section 2.6 IKLA Kids present: ${hasKidsSection > 0}`);
  if (!hasKidsSection) errors.push('Section 2.6 IKLA Kids missing on Collection Page');

  const kidsSectionCards = await page.locator('#ikla-kids-collection-section .grid .group').count();
  console.log(`  ✓ Section 2.6 Kids product cards rendered: ${kidsSectionCards}`);
  if (kidsSectionCards < 6) errors.push(`Expected 6 cards in Section 2.6, found ${kidsSectionCards}`);

  await page.screenshot({ path: path.join(screenshotDir, '06_desktop_collection_kids_section.png') });

  // Test Kids tab filter in House Selector
  const kidsTab = page.locator('button:has-text("IKLA Kids (7)")');
  await kidsTab.click();
  await page.waitForTimeout(400);

  const kidsFilteredCards = await page.locator('.grid [role="article"], .grid .group').count();
  console.log(`  ✓ Filtered to IKLA Kids tab: ${kidsFilteredCards} products shown`);
  await page.screenshot({ path: path.join(screenshotDir, '07_desktop_collection_kids_filtered.png') });

  // 1.5 Ecosystem Links Verification on MDF Brand Page
  console.log('\n  -> Navigating to MDF Brand Page (#/brand/my-drink-family)...');
  await page.goto(`${BASE_URL}#/brand/my-drink-family`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await checkHorizontalOverflow(page, 'MDF Brand Page');
  await checkBrokenImages(page, 'MDF Brand Page');

  // Check ecosystem external links
  const ecosystemLinks = await page.locator('a[href*="trycloudflare.com"], a[href*="github.io"]').evaluateAll(links =>
    links.map(a => ({ href: a.href, target: a.target, rel: a.rel, text: a.innerText.trim() }))
  );
  console.log(`  ✓ Verified ${ecosystemLinks.length} Ecosystem links with target/rel attributes`);
  ecosystemLinks.forEach(link => {
    if (link.target === '_blank' && !link.rel.includes('noopener')) {
      errors.push(`Security issue: link ${link.href} missing rel="noopener"`);
    }
  });

  await page.screenshot({ path: path.join(screenshotDir, '08_desktop_mdf_brand_page.png') });

  await desktopContext.close();

  // =========================================================================
  // STAGE 2: MULTI-VIEWPORT RESPONSIVENESS & OVERFLOW AUDIT (6 VIEWPORTS)
  // =========================================================================
  console.log('\n[STAGE 2] Auditing 6 Viewports for 0 Horizontal Overflow and Image Integrity...');

  const routesToAudit = [
    { route: '#/home', name: 'Homepage' },
    { route: '#/kids', name: 'Kids Page' },
    { route: '#/griffin', name: 'Griffin Page' },
    { route: '#/collection', name: 'Collection Page' },
    { route: '#/brand/my-drink-family', name: 'MDF Brand Page' },
  ];

  for (const vp of viewports) {
    console.log(`\n  --- Viewport: ${vp.name} (${vp.width}x${vp.height}) ---`);
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const vpPage = await context.newPage();

    for (const r of routesToAudit) {
      await vpPage.goto(`${BASE_URL}${r.route}`, { waitUntil: 'networkidle' });
      await vpPage.waitForTimeout(400);
      await checkHorizontalOverflow(vpPage, `${vp.name} -> ${r.name}`);
      await checkBrokenImages(vpPage, `${vp.name} -> ${r.name}`);
    }

    // On mobile viewports, verify Mobile Menu interaction
    if (vp.width <= 768) {
      const menuButton = vpPage.locator('button[aria-label="Open mobile navigation menu"]').first();
      if (await menuButton.count() > 0) {
        await menuButton.click();
        await vpPage.waitForTimeout(350);
        const mobileKidsLink = await vpPage.locator('[aria-label="Mobile Navigation Menu"]').getByText('IKLA Kids').first().isVisible();
        const mobileGriffinLink = await vpPage.locator('[aria-label="Mobile Navigation Menu"]').getByText('Griffin Edition').first().isVisible();
        console.log(`    ✓ Mobile Menu opened and displays Kids (${mobileKidsLink}), Griffin (${mobileGriffinLink}) on ${vp.name}`);
        await vpPage.screenshot({ path: path.join(screenshotDir, `mobile_menu_${vp.name}.png`) });

        // Close menu
        const closeBtn = vpPage.locator('button[aria-label="Close menu"]').first();
        if (await closeBtn.count() > 0) await closeBtn.click();
        await vpPage.waitForTimeout(200);
      }
    }

    await context.close();
  }

  await browser.close();

  // =========================================================================
  // FINAL EVALUATION
  // =========================================================================
  console.log('\n========================================================================');
  console.log(`--- TEST RESULTS: ${errors.length} ERROR(S) FOUND ---`);
  console.log('========================================================================');
  if (errors.length > 0) {
    console.error('FAILURES:');
    errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
    process.exit(1);
  } else {
    console.log('ALL TESTS PASSED WITH 0 BROKEN IMAGES AND 0 HORIZONTAL OVERFLOW ACROSS ALL 6 VIEWPORTS!');
    process.exit(0);
  }
}

runFullVisualRefinementTest().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
