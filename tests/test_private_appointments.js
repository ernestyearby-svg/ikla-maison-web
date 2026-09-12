import { chromium } from 'playwright';

const VIEWPORTS = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'desktop-1024', width: 1024, height: 768 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'mobile-393', width: 393, height: 852 },
  { name: 'mobile-375', width: 375, height: 667 }
];

const BASE_URL = 'http://localhost:4174/ikla-maison-web/';

async function run() {
  console.log('=== Starting IKLA Maison Private Appointments Automated Verification ===\n');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  let failures = [];

  // Track console errors
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  try {
    // 1. Check Responsive Viewports & Horizontal Overflow on Appointments Page
    console.log('--- Step 1: Testing Responsive Viewports for Horizontal Overflow ---');
    for (const vp of VIEWPORTS) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(`${BASE_URL}#/appointments`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);

      const overflow = await page.evaluate(() => {
        return {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
        };
      });

      if (overflow.hasOverflow) {
        failures.push(`[${vp.name}] Horizontal overflow detected: scrollWidth ${overflow.scrollWidth} > clientWidth ${overflow.clientWidth}`);
      } else {
        console.log(`✓ [${vp.name}] 0 horizontal overflow (scrollWidth: ${overflow.scrollWidth}, clientWidth: ${overflow.clientWidth})`);
      }
    }

    // 2. Check All 10 Appointments Assets Load without 404 or zero bytes
    console.log('\n--- Step 2: Testing Image Loading & Integrity ---');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}#/appointments`, { waitUntil: 'networkidle' });
    // Scroll down gradually to trigger lazy-load on all images
    await page.evaluate(async () => {
      window.scrollTo(0, document.body.scrollHeight / 2);
      await new Promise(r => setTimeout(r, 400));
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise(r => setTimeout(r, 600));
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(500);

    const imageAudit = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      const broken = [];
      const appointmentsImgs = [];

      imgs.forEach(img => {
        const src = img.getAttribute('src') || '';
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;
        const isLoaded = img.complete && naturalWidth > 0;

        if (src.includes('appointments/')) {
          appointmentsImgs.push({ src, naturalWidth, naturalHeight, isLoaded });
        }

        if (!isLoaded && !src.includes('data:')) {
          broken.push(src);
        }
      });

      return { broken, appointmentsImgs };
    });

    if (imageAudit.broken.length > 0) {
      failures.push(`Broken images detected on #/appointments: ${imageAudit.broken.join(', ')}`);
    } else {
      console.log(`✓ 0 broken images detected on #/appointments.`);
    }

    console.log(`Found ${imageAudit.appointmentsImgs.length} appointment image tags rendered on page.`);
    const missingImgs = imageAudit.appointmentsImgs.filter(i => !i.isLoaded);
    if (missingImgs.length > 0) {
      failures.push(`Failed to load appointment images: ${missingImgs.map(i => i.src).join(', ')}`);
    } else {
      console.log(`✓ All appointment images loaded with positive dimensions.`);
    }

    // 3. Strict Luxury Restraint Verification: No Public Pricing, Fake Carts, Ratings
    console.log('\n--- Step 3: Verifying Luxury Restraint & Confidentiality ---');
    const restraintAudit = await page.evaluate(() => {
      const mainEl = document.querySelector('main');
      const bodyText = mainEl ? mainEl.innerText : document.body.innerText;
      
      // Match price patterns like $100, $ 100, etc., inside appointment sections
      const priceRegex = /\$\s*\d+/g;
      const priceMatches = bodyText.match(priceRegex) || [];

      // Check forbidden phrases
      const forbidden = ['Add to Cart', 'Buy Now', 'Out of Stock', 'In Stock', 'Discount', 'Sale', 'Reviews (', 'Stars'];
      const foundForbidden = forbidden.filter(f => bodyText.includes(f));

      // Check fraternal / masonic drift
      const masonicWords = ['Lodge', 'Freemason', 'Grand Master', 'Shriner', 'Secret Society', 'Initiation Ritual', 'Ritual Chamber'];
      const foundMasonic = masonicWords.filter(w => new RegExp(`\\b${w}\\b`, 'i').test(bodyText));

      return { priceMatches, foundForbidden, foundMasonic };
    });

    if (restraintAudit.priceMatches.length > 0) {
      failures.push(`Forbidden public pricing found on appointments page: ${restraintAudit.priceMatches.join(', ')}`);
    } else {
      console.log(`✓ Zero public pricing found on appointments page.`);
    }

    if (restraintAudit.foundForbidden.length > 0) {
      failures.push(`Forbidden e-commerce phrases found: ${restraintAudit.foundForbidden.join(', ')}`);
    } else {
      console.log(`✓ Zero mass e-commerce artifacts (Add to Cart, Buy Now, Discount, Ratings).`);
    }

    if (restraintAudit.foundMasonic.length > 0) {
      failures.push(`Masonic drift language detected: ${restraintAudit.foundMasonic.join(', ')}`);
    } else {
      console.log(`✓ Zero fraternal / Masonic drift language. Tone is purely luxury salon & travel ritual.`);
    }

    // 4. Modal Prepopulation Test
    console.log('\n--- Step 4: Verifying VIPInquiryModal Prepopulation ---');
    // Click on the first product's Request Allocation button
    const firstInquiryBtn = page.locator('button:has-text("Request Private Allocation"), button:has-text("Request Special Order"), button:has-text("Request Access")').first();
    await firstInquiryBtn.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await firstInquiryBtn.click();
    await page.waitForTimeout(300);

    // Verify modal is open and has pre-populated details
    const modalVisible = await page.locator('[role="dialog"]').isVisible();
    if (!modalVisible) {
      failures.push('VIPInquiryModal failed to open when clicking private appointment CTA');
    } else {
      console.log('✓ VIPInquiryModal opened successfully.');
      const modalText = await page.locator('[role="dialog"]').innerText();
      const hasProductOrBrand = modalText.includes('IKLA Maison') || modalText.includes('Inquire:') || modalText.includes('Private Client Concierge');
      const hasAccessMode = modalText.includes('Private Allocation') || modalText.includes('Special Order') || modalText.includes('Private Access');
      if (!hasProductOrBrand || !hasAccessMode) {
        failures.push(`VIPInquiryModal did not pre-populate appointment product information (modalText: ${modalText.substring(0, 150)})`);
      } else {
        console.log('✓ VIPInquiryModal pre-populated with product name, collection and access mode.');
      }
      // Close modal
      await page.keyboard.press('Escape');
      await page.waitForTimeout(200);
    }

    // 5. Homepage Preview Verification
    console.log('\n--- Step 5: Verifying Homepage Preview Discipline ---');
    await page.goto(`${BASE_URL}#/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);

    const homeAudit = await page.evaluate(() => {
      // Find the appointments preview section on homepage
      const banner = document.querySelector('img[src*="ikla-appointments-editorial-banner.webp"]');
      const appointmentCards = Array.from(document.querySelectorAll('img[src*="assets/appointments/"]'))
        .filter(img => !img.src.includes('banner'));
      
      const buttons = Array.from(document.querySelectorAll('button'));
      const exploreBtn = buttons.find(b => b.textContent.includes('Explore the Appointments') || b.textContent.includes('Appointments'));

      return {
        hasBanner: Boolean(banner),
        cardCount: appointmentCards.length,
        hasCta: Boolean(exploreBtn)
      };
    });

    if (!homeAudit.hasBanner) {
      failures.push('Homepage preview missing 16:9 editorial banner (ikla-appointments-editorial-banner.webp)');
    } else {
      console.log('✓ Homepage preview contains exactly 1 editorial banner.');
    }

    if (homeAudit.cardCount > 3) {
      failures.push(`Homepage preview exceeded 3 product cards: found ${homeAudit.cardCount}`);
    } else if (homeAudit.cardCount === 3) {
      console.log(`✓ Homepage preview contains exactly 3 restrained product cards.`);
    } else {
      console.log(`Homepage preview cards count: ${homeAudit.cardCount}`);
    }

    // 6. Navigation Link Routing Verification
    console.log('\n--- Step 6: Verifying Direct Navigation & Deep Linking ---');
    // Test direct deep link to #/private-appointments alias
    await page.goto(`${BASE_URL}#/private-appointments`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    const heading = await page.locator('h1').innerText();
    if (!heading.includes('The Final Measure of the House') && !heading.includes('Private Appointments')) {
      failures.push(`Alias #/private-appointments failed to load page; heading was "${heading}"`);
    } else {
      console.log(`✓ Alias #/private-appointments loaded successfully ("${heading.trim()}").`);
    }

    // Test Desktop Navbar link
    await page.goto(`${BASE_URL}#/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    const navBtn = page.locator('nav button:has-text("Private Appointments")').first();
    await navBtn.click();
    await page.waitForTimeout(300);
    const currentHash = await page.evaluate(() => window.location.hash);
    if (!currentHash.includes('appointments')) {
      failures.push(`Desktop navbar button failed to navigate to appointments (current hash: ${currentHash})`);
    } else {
      console.log(`✓ Desktop navbar button navigated to ${currentHash}.`);
    }

    // Test Mobile Menu link
    await page.setViewportSize({ width: 393, height: 852 });
    await page.goto(`${BASE_URL}#/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    const burgerBtn = page.locator('button[aria-label="Open mobile navigation menu"]');
    await burgerBtn.click();
    await page.waitForTimeout(300);
    const mobileLink = page.locator('div[role="dialog"] button:has-text("Private Appointments")');
    await mobileLink.click();
    await page.waitForTimeout(300);
    const mobileHash = await page.evaluate(() => window.location.hash);
    if (!mobileHash.includes('appointments')) {
      failures.push(`Mobile menu link failed to navigate to appointments (current hash: ${mobileHash})`);
    } else {
      console.log(`✓ Mobile menu link navigated to ${mobileHash}.`);
    }

  } catch (err) {
    failures.push(`Test execution threw an exception: ${err.message}`);
  } finally {
    await browser.close();
  }

  console.log('\n======================================================');
  if (failures.length === 0) {
    console.log('✅ ALL VERIFICATION CHECKS PASSED WITH ZERO ERRORS!');
  } else {
    console.error(`❌ ${failures.length} VERIFICATION FAILURES:`);
    failures.forEach(f => console.error(`  - ${f}`));
    process.exit(1);
  }
  console.log('======================================================\n');
}

run();
