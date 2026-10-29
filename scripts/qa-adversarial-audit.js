import puppeteer from 'puppeteer-core';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.toString());
  });

  console.log('--- 1. Desktop Audit (1440x900) ---');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5176', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: '/tmp/audit-01-home-desktop.png' });

  console.log('--- 2. Navigation to Catalog ---');
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('nav button')).find(b => b.textContent?.includes('PERFUMES'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: '/tmp/audit-02-catalog.png' });

  console.log('--- 3. Testing Filters ---');
  // Click Pria filter
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('aside button')).find(b => b.textContent?.trim() === 'Pria');
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: '/tmp/audit-03-filter-pria.png' });

  console.log('--- 4. Navigation to Product Detail ---');
  await page.evaluate(() => {
    const card = document.querySelector('main .group');
    if (card) card.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: '/tmp/audit-04-product-detail.png' });

  console.log('--- 5. Adding to Cart & Testing Drawer ---');
  await page.evaluate(() => {
    const addBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent?.includes('AÑADIR'));
    if (addBtn) addBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: '/tmp/audit-05-cart-drawer.png' });

  console.log('--- 6. Mobile Audit (375x812) ---');
  await page.setViewport({ width: 375, height: 812 });
  await page.evaluate(() => {
    const homeLink = Array.from(document.querySelectorAll('button, a')).find(b => b.textContent?.includes('sasmita'));
    if (homeLink) homeLink.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: '/tmp/audit-06-home-mobile.png' });

  await browser.close();

  console.log('Console Errors caught:', consoleErrors);
  if (consoleErrors.length === 0) {
    console.log('AUDIT PASSED: ZERO CONSOLE ERRORS');
  } else {
    console.error('AUDIT FAILED: CONSOLE ERRORS DETECTED');
    process.exit(1);
  }
})();
