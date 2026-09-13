import { chromium } from 'playwright';

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:4173';

const failures = [];
const verify = (condition, message) => {
  if (!condition) failures.push(message);
};

const browser = await chromium.launch({ channel: 'msedge', headless: true });

try {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const desktopErrors = [];
  desktop.on('pageerror', (error) => desktopErrors.push(error.message));
  desktop.on('console', (message) => message.type() === 'error' && desktopErrors.push(message.text()));

  await desktop.goto(`${BASE_URL}/#/collection`, { waitUntil: 'networkidle' });
  const paired = desktop.locator('[data-product-media="paired"]').first();
  await paired.scrollIntoViewIfNeeded();
  verify(await paired.getAttribute('data-media-state') === 'product', 'Desktop card should begin on the product image.');

  await paired.hover();
  await desktop.waitForTimeout(800);
  verify(await paired.getAttribute('data-media-state') === 'styled', 'Desktop hover should reveal the styled image.');

  const pairedImagesLoaded = await paired.locator('img').evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0));
  verify(pairedImagesLoaded, 'Both desktop product-card images should load.');
  verify(await desktop.locator('[data-product-media="single"]').count() > 0, 'Unmatched objects should remain single-image cards.');
  verify(desktopErrors.length === 0, `Desktop emitted errors: ${desktopErrors.join(' | ')}`);

  const mobileContext = await browser.newContext({
    viewport: { width: 393, height: 852 },
    isMobile: true,
    hasTouch: true,
  });
  const mobile = await mobileContext.newPage();
  const mobileErrors = [];
  mobile.on('pageerror', (error) => mobileErrors.push(error.message));
  mobile.on('console', (message) => message.type() === 'error' && mobileErrors.push(message.text()));

  await mobile.goto(`${BASE_URL}/#/collection`, { waitUntil: 'networkidle' });
  const mobilePaired = mobile.locator('[data-product-media="paired"]').first();
  await mobilePaired.scrollIntoViewIfNeeded();
  const mediaButton = mobilePaired.locator('button').first();

  await mediaButton.tap();
  await mobile.waitForTimeout(800);
  verify(await mobilePaired.getAttribute('data-media-state') === 'styled', 'Mobile tap should reveal the styled image.');

  await mobilePaired.getByRole('button', { name: 'Item' }).tap();
  await mobile.waitForTimeout(150);
  verify(await mobilePaired.getAttribute('data-media-state') === 'product', 'Mobile Item control should restore the product image.');

  await mediaButton.evaluate((element) => {
    const touch = (identifier, clientX) => new Touch({
      identifier,
      target: element,
      clientX,
      clientY: 200,
      pageX: clientX,
      pageY: 200,
      screenX: clientX,
      screenY: 200,
      radiusX: 1,
      radiusY: 1,
      rotationAngle: 0,
      force: 1,
    });
    element.dispatchEvent(new TouchEvent('touchstart', {
      bubbles: true,
      cancelable: true,
      touches: [touch(1, 280)],
      targetTouches: [touch(1, 280)],
    }));
    element.dispatchEvent(new TouchEvent('touchend', {
      bubbles: true,
      cancelable: true,
      touches: [],
      targetTouches: [],
      changedTouches: [touch(1, 90)],
    }));
  });
  await mobile.waitForTimeout(150);
  verify(await mobilePaired.getAttribute('data-media-state') === 'styled', 'Mobile swipe left should reveal the styled image.');

  verify(mobileErrors.length === 0, `Mobile emitted errors: ${mobileErrors.join(' | ')}`);
  await mobileContext.close();
} finally {
  await browser.close();
}

if (failures.length) {
  console.error('\nProduct image-swap verification failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Product image-swap verification passed on desktop and mobile.');
