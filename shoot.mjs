import puppeteer from "puppeteer";
const url = "https://www.djellalco.com";
const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
async function shot(name, viewport, ua) {
  const page = await browser.newPage();
  if (ua) await page.setUserAgent(ua);
  await page.setViewport(viewport);
  await page.goto(url, { waitUntil: "networkidle2", timeout: 90000 });
  // مرّر الصفحة كلها حتى تظهر العناصر التي تنتظر التمرير، ثم ارجع للأعلى
  for (let y = 0; y < 6000; y += 400) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await new Promise((r) => setTimeout(r, 250));
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 6000));
  await page.screenshot({ path: `shots/${name}.png` });
  await page.screenshot({ path: `shots/${name}-full.png`, fullPage: true });
  await page.close();
}
await shot("djellalco-desktop", { width: 1440, height: 900, deviceScaleFactor: 2 });
await shot("djellalco-mobile", { width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1");
await browser.close();
