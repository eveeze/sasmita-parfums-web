import puppeteer from 'puppeteer-core';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Snapshot Home
  console.log('Snapping Home...');
  await page.goto('http://localhost:5176', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: '/tmp/sasmita-01-home.png' });
  await page.screenshot({ path: '/tmp/sasmita-01-home-full.png', fullPage: true });

  // 2. Click on "PERFUMES" in nav to go to Catalog
  console.log('Snapping Catalog...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('nav button'));
    const perfumesBtn = buttons.find(b => b.textContent?.includes('PERFUMES'));
    if (perfumesBtn) perfumesBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: '/tmp/sasmita-02-catalog.png' });

  // 3. Click first product card
  console.log('Snapping Product Detail...');
  await page.evaluate(() => {
    const card = document.querySelector('main .group');
    if (card) card.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: '/tmp/sasmita-03-detail.png' });

  // 4. Click Add to cart
  console.log('Snapping Cart...');
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent?.includes('AÑADIR') || b.textContent?.includes('KERANJANG'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: '/tmp/sasmita-04-cart.png' });

  await browser.close();
  console.log('All Sasmita snapshots done.');
})();
