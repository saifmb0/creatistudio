/**
 * Comprehensive Creati.studio Scraper
 * Extracts: HTML, CSS, images, videos, fonts, SVGs
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const OUTPUT_DIR = './scraped';
const ASSETS_DIR = path.join(OUTPUT_DIR, 'assets');

// Create directories
[OUTPUT_DIR, ASSETS_DIR,
    path.join(ASSETS_DIR, 'images'),
    path.join(ASSETS_DIR, 'videos'),
    path.join(ASSETS_DIR, 'fonts'),
    path.join(ASSETS_DIR, 'icons')
].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function downloadFile(url, filepath) {
    return new Promise((resolve, reject) => {
        if (!url || url.startsWith('data:')) {
            resolve(null);
            return;
        }

        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(filepath);

        protocol.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0' },
            timeout: 30000
        }, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(filepath);
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            resolve(null);
        });
    });
}

function getFilename(url, prefix = '') {
    try {
        const urlObj = new URL(url);
        let name = path.basename(urlObj.pathname);
        if (!name || name === '/') name = 'file_' + Date.now();
        return prefix + name.replace(/[^a-zA-Z0-9._-]/g, '_');
    } catch {
        return prefix + 'file_' + Date.now();
    }
}

async function scrape() {
    console.log('🚀 Starting comprehensive scrape of creati.studio...\n');

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    });
    const page = await context.newPage();

    // Collect all network requests
    const assets = {
        images: new Set(),
        videos: new Set(),
        fonts: new Set(),
        styles: new Set()
    };

    page.on('response', async (response) => {
        const url = response.url();
        const contentType = response.headers()['content-type'] || '';

        if (contentType.includes('image') || /\.(webp|png|jpg|jpeg|gif|svg)(\?|$)/i.test(url)) {
            assets.images.add(url);
        }
        if (contentType.includes('video') || /\.(mp4|webm|mov)(\?|$)/i.test(url)) {
            assets.videos.add(url);
        }
        if (contentType.includes('font') || /\.(woff2?|ttf|otf|eot)(\?|$)/i.test(url)) {
            assets.fonts.add(url);
        }
    });

    console.log('📄 Loading page...');
    await page.goto('https://creati.studio', { waitUntil: 'networkidle', timeout: 60000 });

    // Scroll to load all lazy content
    console.log('📜 Scrolling to load all content...');
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 300;
            const timer = setInterval(() => {
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= document.body.scrollHeight) {
                    clearInterval(timer);
                    window.scrollTo(0, 0);
                    resolve();
                }
            }, 100);
        });
    });

    await page.waitForTimeout(2000);

    // Extract HTML
    console.log('📝 Extracting HTML...');
    const html = await page.content();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), html);

    // Extract all inline styles
    const styles = await page.evaluate(() => {
        const styleSheets = [];
        document.querySelectorAll('style').forEach(s => styleSheets.push(s.textContent));
        return styleSheets.join('\n\n');
    });
    fs.writeFileSync(path.join(OUTPUT_DIR, 'extracted-styles.css'), styles);

    // Extract computed styles for key elements
    console.log('🎨 Extracting computed styles...');
    const computedStyles = await page.evaluate(() => {
        const elements = {
            navbar: document.querySelector('header, nav, [class*="nav"]'),
            hero: document.querySelector('[class*="hero"], main > section:first-child'),
            heroInput: document.querySelector('textarea, [class*="input"]'),
            grid: document.querySelector('[class*="grid"], [class*="masonry"]'),
        };

        const result = {};
        for (const [name, el] of Object.entries(elements)) {
            if (el) {
                const computed = window.getComputedStyle(el);
                result[name] = {
                    className: el.className,
                    background: computed.background,
                    backgroundColor: computed.backgroundColor,
                    backdropFilter: computed.backdropFilter,
                    borderRadius: computed.borderRadius,
                    padding: computed.padding,
                    margin: computed.margin,
                    fontSize: computed.fontSize,
                    fontFamily: computed.fontFamily,
                    color: computed.color,
                    border: computed.border,
                    boxShadow: computed.boxShadow,
                    width: computed.width,
                    maxWidth: computed.maxWidth,
                };
            }
        }
        return result;
    });
    fs.writeFileSync(path.join(OUTPUT_DIR, 'computed-styles.json'), JSON.stringify(computedStyles, null, 2));

    // Extract all image URLs from page
    const pageImages = await page.evaluate(() => {
        const imgs = [];
        document.querySelectorAll('img').forEach(img => {
            if (img.src) imgs.push(img.src);
            if (img.dataset.src) imgs.push(img.dataset.src);
        });
        document.querySelectorAll('[style*="background"]').forEach(el => {
            const match = el.style.backgroundImage?.match(/url\(['"]?([^'"]+)['"]?\)/);
            if (match) imgs.push(match[1]);
        });
        document.querySelectorAll('video').forEach(v => {
            if (v.src) imgs.push(v.src);
            if (v.poster) imgs.push(v.poster);
            v.querySelectorAll('source').forEach(s => {
                if (s.src) imgs.push(s.src);
            });
        });
        return imgs;
    });

    pageImages.forEach(url => {
        if (url.includes('.mp4') || url.includes('.webm')) {
            assets.videos.add(url);
        } else {
            assets.images.add(url);
        }
    });

    // Take full page screenshot
    console.log('📸 Taking screenshots...');
    await page.screenshot({ path: path.join(OUTPUT_DIR, 'fullpage.png'), fullPage: true });

    // Close browser
    await browser.close();

    // Download assets
    console.log(`\n📥 Downloading ${assets.images.size} images...`);
    let downloaded = 0;
    for (const url of assets.images) {
        const filename = getFilename(url, 'img_');
        const filepath = path.join(ASSETS_DIR, 'images', filename);
        const result = await downloadFile(url, filepath);
        if (result) downloaded++;
    }
    console.log(`   ✓ Downloaded ${downloaded} images`);

    console.log(`\n📥 Downloading ${assets.videos.size} videos...`);
    downloaded = 0;
    for (const url of assets.videos) {
        const filename = getFilename(url, 'vid_');
        const filepath = path.join(ASSETS_DIR, 'videos', filename);
        const result = await downloadFile(url, filepath);
        if (result) downloaded++;
    }
    console.log(`   ✓ Downloaded ${downloaded} videos`);

    console.log(`\n📥 Downloading ${assets.fonts.size} fonts...`);
    downloaded = 0;
    for (const url of assets.fonts) {
        const filename = getFilename(url, 'font_');
        const filepath = path.join(ASSETS_DIR, 'fonts', filename);
        const result = await downloadFile(url, filepath);
        if (result) downloaded++;
    }
    console.log(`   ✓ Downloaded ${downloaded} fonts`);

    // Write asset manifest
    const manifest = {
        images: Array.from(assets.images),
        videos: Array.from(assets.videos),
        fonts: Array.from(assets.fonts),
        scrapedAt: new Date().toISOString()
    };
    fs.writeFileSync(path.join(OUTPUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));

    console.log('\n✅ Scraping complete!');
    console.log(`   Output: ${OUTPUT_DIR}/`);
    console.log(`   - index.html`);
    console.log(`   - extracted-styles.css`);
    console.log(`   - computed-styles.json`);
    console.log(`   - manifest.json`);
    console.log(`   - fullpage.png`);
    console.log(`   - assets/images/`);
    console.log(`   - assets/videos/`);
    console.log(`   - assets/fonts/`);
}

scrape().catch(console.error);
