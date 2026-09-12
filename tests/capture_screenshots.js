import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function capture() {
  const dir = 'C:/Users/ernes/.gemini/antigravity/brain/53f8b5f8-a14a-4d2c-9238-10e702975756/screenshots_appointments';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const baseUrl = 'http://localhost:4174/ikla-maison-web/';

  // 1. Appointments Hero & Intro
  await page.goto(baseUrl + '#/appointments', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(dir, '01_appointments_hero.png') });

  // 2. Maison Appointments Grouping
  const g1 = page.locator('#maison-appointments');
  if (await g1.isVisible()) {
    await g1.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(dir, '02_maison_appointments_group.png') });
  }

  // 3. Editorial Transition & Travel Rituals
  const g2 = page.locator('#travel-rituals');
  if (await g2.isVisible()) {
    await g2.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(dir, '03_private_travel_rituals.png') });
  }

  // 4. Homepage Preview
  await page.goto(baseUrl + '#/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  const homeSection = page.locator('section:has-text("IKLA Maison · Private Appointments")').first();
  if (await homeSection.isVisible()) {
    await homeSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(dir, '04_homepage_appointments_preview.png') });
  }

  // 5. Mobile Viewport (iPhone 14/15 393px)
  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto(baseUrl + '#/appointments', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(dir, '05_mobile_appointments_hero.png') });

  await browser.close();
  console.log('Screenshots captured successfully in ' + dir);
}

capture();
