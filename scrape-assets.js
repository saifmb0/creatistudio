const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---
const BASE_URL = 'https://www.creati.studio';
const DOWNLOAD_DIR = path.join(__dirname, 'public/assets');
const MAP_FILE = path.join(__dirname, 'src/data/asset-map.json');

// Exact paths extracted from your navbar source code
const PATHS_TO_VISIT = [
  '/',
  '/features/image-to-video',
  '/plan',
  '/company',
  '/speak'
];

// Ensure directories exist
if (!fs.existsSync(DOWNLOAD_DIR)) {
  fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

// Helper: Sanitize filenames to be safe
function getSafeFilename(url) {
  try {
    const urlObj = new URL(url);
    const base = path.basename(urlObj.pathname);
    // If no extension or weird filename, add hash
    if (!base.includes('.') || base.length > 50) {
      return `${urlObj.hostname}_${Date.now()}.bin`;
    }
    return base.replace(/[^a-zA-Z0-9._-]/g, '_');
  } catch (e) {
    return `asset_${Date.now()}.bin`;
  }
}

(async () => {
  console.log('🚀 Starting Resilient Asset Scraper (Browser-Context Mode)...');

  const browser = await chromium.launch({
    headless: false, // Must be visible to trigger rendering
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();
  const assetMap = {};
  const processedUrls = new Set();

  // --- THE INTERCEPTOR ---
  // This captures the file DIRECTLY from the browser's response buffer.
  // No external http.get() calls that trigger CORS/403.
  page.on('response', async (response) => {
    const url = response.url();
    const type = response.request().resourceType();
    const status = response.status();

    // Filter for media, images, and fonts from relevant domains
    if ((type === 'image' || type === 'media' || type === 'font') &&
      status === 200 &&
      !processedUrls.has(url)) {

      // Filter out tracking pixels/analytics to keep it clean
      if (url.includes('google') || url.includes('facebook') || url.includes('clarity')) return;

      processedUrls.add(url);
      const filename = getSafeFilename(url);
      const filepath = path.join(DOWNLOAD_DIR, filename);

      // Map global URL to local public path
      assetMap[url] = `/assets/${filename}`;

      try {
        // THE MAGIC: Get the buffer directly from Playwright
        const buffer = await response.body();
        fs.writeFileSync(filepath, buffer);
        console.log(`📥 [${type.toUpperCase()}] Saved: ${filename}`);
      } catch (err) {
        // Sometimes responses are redirects or empty, ignore them
        // console.warn(`⚠️ Could not buffer ${url}: ${err.message}`);
      }
    }
  });

  // --- TRAVERSAL LOOP ---
  for (const route of PATHS_TO_VISIT) {
    const fullUrl = `${BASE_URL}${route}`;
    console.log(`\n🌐 Navigating to: ${fullUrl}`);

    try {
      // Don't wait for 'networkidle' indefinitely. 'domcontentloaded' is faster.
      await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

      // Scroll to bottom to trigger lazy loading
      console.log('⬇️  Scrolling to trigger lazy loads...');
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 300;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 100);
        });
      });

      // Brief pause to let network settle
      await page.waitForTimeout(2000);

    } catch (e) {
      console.error(`❌ Error visiting ${route}:`, e.message);
    }
  }

  // --- SAVE MAP ---
  fs.writeFileSync(MAP_FILE, JSON.stringify(assetMap, null, 2));
  console.log(`\n✅ Scrape Complete.`);
  console.log(`📂 Assets: ${DOWNLOAD_DIR}`);
  console.log(`🗺️  Map: ${MAP_FILE}`);

  await browser.close();
})();