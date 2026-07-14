const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
    const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    await page.goto('file:///' + path.resolve('index.html').replace(/\\/g, '/'));
    await page.waitForSelector('.card', { timeout: 5000 });
    
    // Check for overflowing elements
    const overflows = await page.evaluate(() => {
        const issues = [];
        document.querySelectorAll('*').forEach(el => {
            if (el.scrollWidth > el.clientWidth) {
                issues.push({
                    tag: el.tagName,
                    class: el.className,
                    scrollWidth: el.scrollWidth,
                    clientWidth: el.clientWidth
                });
            }
        });
        return issues;
    });
    console.log("Overflowing elements:", overflows);

    // Expand last card
    const lastCardHeader = await page.$('.card:last-child .card-header');
    if (lastCardHeader) {
        await lastCardHeader.click();
        await new Promise(r => setTimeout(r, 1000));
        await page.screenshot({ path: 'last_card_open.png', fullPage: true });
        console.log("Screenshot saved as last_card_open.png");
    }
    
    await browser.close();
})();
