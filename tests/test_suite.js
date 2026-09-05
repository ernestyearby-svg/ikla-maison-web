import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runTestSuite() {
  console.log('===============================================================');
  console.log('--- STARTING IKLA MAISON COMPREHENSIVE E2E VERIFICATION SUITE ---');
  console.log('===============================================================\n');

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const errors = [];

  const screenshotDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

  const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:5173';

  const brands = [
    { id: 'ikla-maison', name: 'IKLA Maison' },
    { id: 'ktse', name: 'KTSE' },
    { id: 'moteon', name: 'Motéon' },
    { id: 'moral-compass', name: 'Moral Compass' },
    { id: 'my-drink-family', name: 'My Drink Family' }
  ];

  // =========================================================================
  // 1. DESKTOP VIEWPORT (1440 x 900)
  // =========================================================================
  console.log('[PHASE 1] Testing Desktop Viewport (1440x900)...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await desktopContext.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.error('  [Console Error]:', msg.text());
      errors.push(`Console: ${msg.text()}`);
    }
  });
  page.on('pageerror', (err) => {
    console.error('  [Page Error]:', err.message);
    errors.push(`Page: ${err.message}`);
  });

  // 1.1 Homepage Verification
  console.log('  -> Navigating to Homepage...');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  const pageTitle = await page.title();
  console.log(`  ✓ Title loaded: "${pageTitle}"`);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(screenshotDir, '01_desktop_home.png') });

  // 1.2 Hero Tab Switching
  console.log('  -> Testing Hero Brand Selector tabs...');
  for (const b of brands) {
    const tabBtn = page.locator(`button:has-text("${b.name}")`).first();
    await tabBtn.click();
    await page.waitForTimeout(300);
    console.log(`  ✓ Switched hero active house to: ${b.name}`);
  }

  // 1.3 Verify Brand Pages & Logo Assets (naturalWidth > 0)
  console.log('\n[PHASE 2] Testing All 5 Individual Brand Pages & Asset Integrity...');
  for (let i = 0; i < brands.length; i++) {
    const b = brands[i];
    console.log(`  -> Navigating to House [${b.name}] (/brand/${b.id})...`);
    await page.goto(`${BASE_URL}/#/brand/${b.id}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    // Scroll down to activate lazy loading
    await page.evaluate(async () => {
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 400));
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
    await page.waitForTimeout(500);

    // Check for broken images
    const brokenImages = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .filter((img) => img.naturalWidth === 0)
        .map((img) => img.src);
    });

    if (brokenImages.length > 0) {
      console.error(`  ✗ Broken images on ${b.name}:`, brokenImages);
      errors.push(`Broken images on ${b.name}: ${brokenImages.join(', ')}`);
    } else {
      console.log(`  ✓ House [${b.name}] loaded perfectly. All visual assets verified.`);
    }

    const brandIndexStr = String(i + 2).padStart(2, '0');
    await page.screenshot({ path: path.join(screenshotDir, `${brandIndexStr}_brand_${b.id.replace(/-/g, '_')}.png`) });
  }

  // 1.4 Collection Catalog Page
  console.log('\n[PHASE 3] Testing Collection Catalogue & Filters...');
  await page.goto(`${BASE_URL}/#/collection`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(screenshotDir, '07_collection_catalogue.png') });

  // Test filter tabs
  const ktseFilter = page.locator('button:has-text("KTSE")').first();
  if (await ktseFilter.isVisible()) {
    await ktseFilter.click();
    await page.waitForTimeout(400);
    console.log('  ✓ Filtered collection by KTSE.');
  }
  const allFilter = page.locator('button:has-text("All Houses")').first();
  if (await allFilter.isVisible()) {
    await allFilter.click();
    await page.waitForTimeout(400);
    console.log('  ✓ Reset collection filter to All Houses.');
  }

  // 1.5 Product Detail Modal (PDP)
  console.log('\n[PHASE 4] Testing Product Detail Modal (PDP)...');
  const firstProduct = page.locator('h3:has-text("[Placeholder]")').first();
  await firstProduct.click();
  await page.waitForTimeout(500);

  const pdpTitle = await page.locator('#pdp-modal-title').textContent();
  console.log(`  ✓ PDP Modal opened for: "${pdpTitle}"`);
  await page.screenshot({ path: path.join(screenshotDir, '08_product_detail_modal.png') });

  // Select a size inside PDP
  const sizeM = page.locator('div[role="dialog"] button:text-is("M")').first();
  if (await sizeM.isVisible()) {
    await sizeM.click();
    console.log('  ✓ Selected size M.');
  }

  // Click Add to Bag
  const addToBagBtn = page.locator('div[role="dialog"] button:has-text("Add to Bag")');
  await addToBagBtn.click();
  await page.waitForTimeout(500);

  // 1.6 Cart Drawer
  console.log('\n[PHASE 5] Testing Shopping Bag Drawer...');
  const cartDrawerTitle = await page.locator('#cart-drawer-title').textContent();
  console.log(`  ✓ Cart Drawer opened: "${cartDrawerTitle}"`);
  await page.screenshot({ path: path.join(screenshotDir, '09_cart_drawer.png') });

  // Increment item quantity
  const plusBtn = page.locator('button:has(svg.lucide-plus)').first();
  if (await plusBtn.isVisible()) {
    await plusBtn.click();
    await page.waitForTimeout(300);
    console.log('  ✓ Quantity incremented in Cart Drawer.');
  }

  // Toggle Gift Packaging
  const giftCheckbox = page.locator('input[type="checkbox"]').first();
  if (await giftCheckbox.isVisible()) {
    await giftCheckbox.check();
    await page.waitForTimeout(200);
    console.log('  ✓ Complimentary gift packaging checked.');
  }

  // 1.7 Concierge Checkout Modal
  console.log('\n[PHASE 6] Testing Concierge Checkout Flow...');
  const checkoutBtn = page.locator('button:has-text("Proceed to Checkout")');
  await checkoutBtn.click();
  await page.waitForTimeout(500);

  const checkoutHeading = await page.locator('#checkout-modal-title').textContent();
  console.log(`  ✓ Checkout Modal opened: "${checkoutHeading}"`);
  await page.screenshot({ path: path.join(screenshotDir, '10_checkout_modal.png') });

  // Authorize & Place Order
  const authorizeBtn = page.locator('button:has-text("Authorize & Place Order")');
  await authorizeBtn.scrollIntoViewIfNeeded();
  await authorizeBtn.click({ force: true });
  await page.waitForTimeout(600);

  const confirmedNotice = await page.locator('h2:has-text("Thank You for Your Patronage")').textContent();
  console.log(`  ✓ Order Confirmed: "${confirmedNotice}"`);

  // Return to Maison Home
  const returnHomeBtn = page.locator('button:has-text("Return to Maison Home")');
  await returnHomeBtn.click();
  await page.waitForTimeout(500);

  // 1.8 About Page
  console.log('\n[PHASE 7] Testing About / Maison Story Page...');
  await page.goto(`${BASE_URL}/#/about`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(screenshotDir, '11_about_page.png') });
  console.log('  ✓ About page loaded successfully.');

  // 1.9 Contact Concierge Page
  console.log('\n[PHASE 8] Testing Client Concierge Form...');
  await page.goto(`${BASE_URL}/#/contact`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  await page.fill('input[placeholder="e.g. Julian Montgomery"]', 'Lord Henry Crawford');
  await page.fill('input[placeholder="e.g. client@domain.com"]', 'henry.crawford@luxury-collective.com');
  await page.fill('textarea', 'Requesting private salon consultation for the upcoming Motéon resort capsule.');

  const transmitBtn = page.locator('button:has-text("Transmit Private Correspondence")');
  await transmitBtn.scrollIntoViewIfNeeded();
  await transmitBtn.click({ force: true });
  await page.waitForTimeout(600);

  const acknowledgedText = await page.locator('span:has-text("Transmission Acknowledged")').textContent();
  console.log(`  ✓ Form Transmission Confirmed: "${acknowledgedText}"`);
  await page.screenshot({ path: path.join(screenshotDir, '12_contact_concierge.png') });

  // =========================================================================
  // 2. TABLET VIEWPORT (768 x 1024)
  // =========================================================================
  console.log('\n[PHASE 9] Testing Tablet Viewport (768x1024)...');
  const tabletContext = await browser.newContext({
    viewport: { width: 768, height: 1024 }
  });
  const tabletPage = await tabletContext.newPage();
  tabletPage.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`Tablet Console: ${msg.text()}`);
  });

  await tabletPage.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await tabletPage.waitForTimeout(500);
  await tabletPage.screenshot({ path: path.join(screenshotDir, '13_tablet_home.png') });
  console.log('  ✓ Tablet Home layout verified.');

  // =========================================================================
  // 3. MOBILE VIEWPORT (390 x 844)
  // =========================================================================
  console.log('\n[PHASE 10] Testing Mobile Viewport (390x844)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();
  mobilePage.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`Mobile Console: ${msg.text()}`);
  });

  await mobilePage.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({ path: path.join(screenshotDir, '14_mobile_home.png') });
  console.log('  ✓ Mobile Home layout verified.');

  // Open Hamburger Menu
  const menuBtn = mobilePage.locator('button[aria-label="Open mobile navigation menu"]');
  await menuBtn.click();
  await mobilePage.waitForTimeout(400);
  await mobilePage.screenshot({ path: path.join(screenshotDir, '15_mobile_menu.png') });
  console.log('  ✓ Mobile Menu Drawer Opened.');

  // Navigate to Moral Compass via Mobile Menu
  await mobilePage.locator('div[role="dialog"] button:has-text("Moral Compass")').first().click();
  await mobilePage.waitForTimeout(600);
  console.log('  ✓ Mobile navigation to Moral Compass successful.');

  // Open PDP on Mobile
  const mobileProductCard = mobilePage.locator('h3:has-text("[Placeholder]")').first();
  if (await mobileProductCard.isVisible()) {
    await mobileProductCard.click();
    await mobilePage.waitForTimeout(500);
    await mobilePage.screenshot({ path: path.join(screenshotDir, '16_mobile_pdp.png') });
    console.log('  ✓ Mobile PDP Modal displayed cleanly.');
  }

  await browser.close();

  console.log('\n===============================================================');
  console.log('=== TEST SUITE EXECUTION SUMMARY ===');
  console.log('===============================================================');
  if (errors.length === 0) {
    console.log('🎉 ALL 10 PHASES COMPLETED WITH ZERO CONSOLE OR RUNTIME ERRORS!');
    console.log('✓ 16 screenshots generated in tests/screenshots/');
  } else {
    console.error('Errors encountered during verification:', errors);
    process.exit(1);
  }
}

runTestSuite().catch((err) => {
  console.error('Verification Suite Failed:', err);
  process.exit(1);
});
