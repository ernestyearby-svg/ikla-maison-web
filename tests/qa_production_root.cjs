const puppeteer = require('C:/Users/ernes/OneDrive/Documents/MyDrinkFamily/node_modules/puppeteer-core');
const fs = require('fs');
const path = require('path');
const http = require('http');

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

// Simple static server for dist
function startStaticServer(distDir, port) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf',
  };

  const server = http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];
    if (reqUrl === '/') reqUrl = '/index.html';
    let filePath = path.join(distDir, reqUrl);

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(distDir, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  });

  return new Promise(resolve => {
    server.listen(port, () => resolve(server));
  });
}

(async () => {
  console.log('=== STARTING LOCAL IKLA MAISON PRODUCTION QA ===');
  const distDir = path.resolve(__dirname, '..', 'dist');
  const port = 4175;
  const server = await startStaticServer(distDir, port);
  const baseUrl = `http://localhost:${port}`;
  console.log(`Static server running on ${baseUrl}`);

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

  const routes = [
    { name: 'Homepage', hash: '#/', file: 'ikla_qa_01_homepage.png' },
    { name: 'Maison Brand', hash: '#/brand/ikla-maison', file: 'ikla_qa_02_brand.png' },
    { name: 'Collections', hash: '#/collection', file: 'ikla_qa_03_collections.png' },
    { name: 'About / Story', hash: '#/about', file: 'ikla_qa_04_about.png' },
    { name: 'Griffin Edition', hash: '#/griffin', file: 'ikla_qa_05_griffin.png' },
    { name: 'Private Appointments', hash: '#/appointments', file: 'ikla_qa_06_appointments.png' },
    { name: 'Contact', hash: '#/contact', file: 'ikla_qa_07_contact.png' }
  ];

  await page.setViewport({ width: 1440, height: 900 });

  for (const r of routes) {
    console.log(`Testing desktop route: ${r.name} (${r.hash})...`);
    await page.goto(`${baseUrl}/${r.hash}`, { waitUntil: 'networkidle0' });
    await new Promise(res => setTimeout(res, 300));
    await page.screenshot({
      path: path.join(artifactsDir, r.file),
      fullPage: false
    });
    console.log(`Saved: ${r.file}`);
  }

  // Mobile QA
  console.log('\nTesting mobile viewport (390x844)...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(`${baseUrl}/#/`, { waitUntil: 'networkidle0' });
  await new Promise(res => setTimeout(res, 300));
  await page.screenshot({
    path: path.join(artifactsDir, 'ikla_qa_08_mobile_home.png'),
    fullPage: false
  });

  // Open mobile menu
  const menuBtn = await page.$('header button[aria-label*="menu" i], button.mobile-menu-trigger, header button');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(res => setTimeout(res, 400));
    await page.screenshot({
      path: path.join(artifactsDir, 'ikla_qa_09_mobile_menu.png'),
      fullPage: false
    });
    console.log('Saved: ikla_qa_09_mobile_menu.png');
  }

  console.log('\n--- QA RESULTS ---');
  console.log('Console Errors:', consoleErrors.length, consoleErrors);
  console.log('Failed Asset Requests:', failedRequests.length, failedRequests);

  await browser.close();
  server.close();
  console.log('=== LOCAL QA COMPLETE ===');
})();
