const puppeteer = require('C:/Users/ernes/OneDrive/Documents/MyDrinkFamily/node_modules/puppeteer-core');
const fs = require('fs');
const path = require('path');

function getChromePath() {
  const candidates = [
    process.env.CHROME_BIN,
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    path.join(process.env.LOCALAPPDATA || '', 'Google\\Chrome\\Application\\chrome.exe'),
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  ].filter(Boolean);

  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  throw new Error('No compatible Chrome/Edge browser binary found.');
}

(async () => {
  console.log('=== STARTING LIVE NETLIFY IKLA MAISON QA ===');
  const netlifyUrl = 'https://ikla-maison.netlify.app';
  const ghPagesUrl = 'https://ernestyearby-svg.github.io/ikla-maison-web';

  const browser = await puppeteer.launch({
    executablePath: getChromePath(),
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const artifactsDir = 'C:\\Users\\ernes\\.gemini\\antigravity\\brain\\cf107d58-191c-47a8-83d4-bf433415b344';
  const page = await browser.newPage();
  const consoleErrors = [];
  const failedRequests = [];

  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  page.on('requestfailed', req => {
    failedRequests.push(`${req.method()} ${req.url()} (${req.failure() ? req.failure().errorText : 'failed'})`);
  });

  await page.setViewport({ width: 1440, height: 900 });

  // 1. Test Netlify Homepage
  console.log(`Navigating to Netlify: ${netlifyUrl}/ ...`);
  const res = await page.goto(`${netlifyUrl}/`, { waitUntil: 'networkidle0' });
  console.log('Netlify Status:', res.status());
  const netlifyTitle = await page.title();
  console.log('Netlify Title:', netlifyTitle);

  await page.screenshot({
    path: path.join(artifactsDir, 'ikla_netlify_01_homepage.png'),
    fullPage: false
  });
  console.log('Saved: ikla_netlify_01_homepage.png');

  // 2. Test Key Views on Netlify
  const views = [
    { name: 'Maison Brand', hash: '#/brand/ikla-maison', file: 'ikla_netlify_02_brand.png' },
    { name: 'Collections', hash: '#/collection', file: 'ikla_netlify_03_collections.png' },
    { name: 'About / Story', hash: '#/about', file: 'ikla_netlify_04_about.png' },
    { name: 'Griffin Edition', hash: '#/griffin', file: 'ikla_netlify_05_griffin.png' },
    { name: 'Private Appointments', hash: '#/appointments', file: 'ikla_netlify_06_appointments.png' }
  ];

  for (const v of views) {
    console.log(`Navigating to Netlify view: ${v.name} (${v.hash})...`);
    await page.goto(`${netlifyUrl}/${v.hash}`, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({
      path: path.join(artifactsDir, v.file),
      fullPage: false
    });
    console.log(`Saved: ${v.file}`);
  }

  // 3. Test Mobile Viewport on Netlify
  console.log('\nTesting mobile viewport (390x844) on Netlify...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(`${netlifyUrl}/`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({
    path: path.join(artifactsDir, 'ikla_netlify_07_mobile_home.png'),
    fullPage: false
  });
  console.log('Saved: ikla_netlify_07_mobile_home.png');

  // 4. Parity check with GitHub Pages
  console.log(`\nChecking GitHub Pages baseline: ${ghPagesUrl}/ ...`);
  await page.setViewport({ width: 1440, height: 900 });
  const ghRes = await page.goto(`${ghPagesUrl}/`, { waitUntil: 'networkidle0' });
  console.log('GitHub Pages Status:', ghRes.status());
  const ghTitle = await page.title();
  console.log('GitHub Pages Title:', ghTitle);

  await page.screenshot({
    path: path.join(artifactsDir, 'ikla_ghpages_baseline.png'),
    fullPage: false
  });
  console.log('Saved: ikla_ghpages_baseline.png');

  console.log('\n--- NETLIFY LIVE AUDIT SUMMARY ---');
  console.log('Console Errors:', consoleErrors.length, consoleErrors);
  console.log('Failed Requests:', failedRequests.length, failedRequests);
  console.log('Title Match:', netlifyTitle === ghTitle);

  await browser.close();
  console.log('=== NETLIFY LIVE QA COMPLETE ===');
})();
