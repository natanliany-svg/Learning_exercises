const puppeteer = require('puppeteer');
const path = require('path');

const agentId = process.argv[2] || 'Agent';

async function runTest() {
    const browser = await puppeteer.launch({ 
        headless: false,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        args: ['--window-size=1200,800'],
        defaultViewport: { width: 1200, height: 800 }
    });
    const page = await browser.newPage();
    const filePath = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');
    console.log(`${agentId}: Testing URL:`, filePath);
    
    try {
        await page.goto(filePath, { waitUntil: 'networkidle0' });
        
        console.log(`${agentId}: Page loaded. Running quick VISIBLE cache verification test for 30 seconds...`);
        
        // Loop test for 30 seconds (30,000 ms)
        const endTime = Date.now() + 30 * 1000;
        let cycles = 0;
        let issuesFound = [];
        
        while (Date.now() < endTime) {
            cycles++;
            
            // Get all topic cards
            const cards = await page.$$('.card');
            for (let i = 0; i < cards.length; i++) {
                if (Date.now() >= endTime) break;
                try {
                    await cards[i].click();
                    await new Promise(r => setTimeout(r, 400)); // wait for transition visibly
                    
                    const pauseBtn = await page.$$('.play-pause-btn');
                    for (let btn of pauseBtn) {
                        try {
                            await btn.click();
                            await new Promise(r => setTimeout(r, 200));
                        } catch (e) {
                            issuesFound.push(`${agentId}: Pause button unclickable: ${e.message}`);
                        }
                    }
                    
                } catch (e) {
                    issuesFound.push(`${agentId}: Card ${i} unclickable: ${e.message}`);
                }
            }
        }
        
        console.log(`\n--- ${agentId} Test Complete ---`);
        console.log(`${agentId}: Completed cycles:`, cycles);
        if (issuesFound.length > 0) {
            console.log(`${agentId}: Issues found:`);
            [...new Set(issuesFound)].forEach(i => console.log(i));
        } else {
            console.log(`${agentId}: No clickability issues found during cache verification.`);
        }
        
    } catch (e) {
        console.error(`${agentId}: Test script crashed:`, e.message);
    } finally {
        await browser.close();
    }
}

runTest();
