const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
    const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
    const page = await browser.newPage();
    await page.goto('file:///' + path.resolve('index.html').replace(/\\/g, '/'));
    await page.waitForSelector('.card', { timeout: 5000 });
    
    // Check initial heights of all cards
    const initialCards = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.card-body')).map(el => {
            return { height: el.getBoundingClientRect().height, opacity: window.getComputedStyle(el).opacity };
        });
    });
    console.log('Initial (closed) card heights:', initialCards.map(c => Math.round(c.height)));
    
    // Open the last card
    const lastCardHeader = await page.$('.card:last-child .card-header');
    if (lastCardHeader) {
        await lastCardHeader.click();
        await new Promise(r => setTimeout(r, 1000)); // wait for transition
        const openedHeight = await page.evaluate(() => {
            const el = document.querySelector('.card:last-child .card-body');
            return el ? el.getBoundingClientRect().height : null;
        });
        console.log('Opened last card height:', Math.round(openedHeight));
        
        // Close it again
        await lastCardHeader.click();
        await new Promise(r => setTimeout(r, 1000)); // wait for transition
        const closedHeight = await page.evaluate(() => {
            const el = document.querySelector('.card:last-child .card-body');
            return el ? el.getBoundingClientRect().height : null;
        });
        console.log('Closed last card height:', Math.round(closedHeight));
    }
    
    await browser.close();
})();
