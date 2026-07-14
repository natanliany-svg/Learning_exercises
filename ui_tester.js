const puppeteer = require('puppeteer');
const path = require('path');

const agentId = process.argv[2] || 'Agent';

async function runTest() {
    const browser = await puppeteer.launch({ 
        headless: true,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    });
    const page = await browser.newPage();
    const filePath = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');
    console.log(`${agentId}: Testing URL:`, filePath);
    
    try {
        await page.goto(filePath, { waitUntil: 'networkidle0' });
        
        console.log(`${agentId}: Page loaded. Starting clickability tests for 5 minutes...`);
        
        // Loop test for 5 minutes (300,000 ms)
        const endTime = Date.now() + 5 * 60 * 1000;
        let cycles = 0;
        let issuesFound = [];
        let clickedElements = 0;
        
        while (Date.now() < endTime) {
            cycles++;
            
            // Get all topic cards
            const cards = await page.$$('.card');
            for (let i = 0; i < cards.length; i++) {
                if (Date.now() >= endTime) break;
                try {
                    await cards[i].click();
                    clickedElements++;
                    await new Promise(r => setTimeout(r, 50)); // wait for transition
                    
                    // Inside the card, try to click the animation controls if they exist
                    const pauseBtn = await page.$$('.play-pause-btn');
                    for (let btn of pauseBtn) {
                        try {
                            await btn.click();
                            clickedElements++;
                        } catch (e) {
                            issuesFound.push(`${agentId}: Pause button unclickable: ${e.message}`);
                        }
                    }
                    
                    // Checkboxes in tech english / quiz
                    const checkboxes = await page.$$('input[type="checkbox"]');
                    for (let cb of checkboxes) {
                        try {
                            await cb.evaluate(el => el.click());
                            clickedElements++;
                        } catch (e) {
                            issuesFound.push(`${agentId}: Checkbox unclickable: ${e.message}`);
                        }
                    }
                    
                } catch (e) {
                    issuesFound.push(`${agentId}: Card ${i} unclickable: ${e.message}`);
                }
            }
            
            // Get all nav items
            const navItems = await page.$$('.nav-item');
            for (let i = 0; i < navItems.length; i++) {
                if (Date.now() >= endTime) break;
                try {
                    await navItems[i].click();
                    clickedElements++;
                    await new Promise(r => setTimeout(r, 20));
                } catch (e) {
                    issuesFound.push(`${agentId}: Nav item ${i} unclickable: ${e.message}`);
                }
            }
        }
        
        console.log(`\n--- ${agentId} Test Complete ---`);
        console.log(`${agentId}: Completed cycles:`, cycles);
        console.log(`${agentId}: Total clicked elements:`, clickedElements);
        if (issuesFound.length > 0) {
            console.log(`${agentId}: Issues found:`);
            [...new Set(issuesFound)].forEach(i => console.log(i));
        } else {
            console.log(`${agentId}: No clickability issues found during continuous testing.`);
        }
        
    } catch (e) {
        console.error(`${agentId}: Test script crashed:`, e.message);
    } finally {
        await browser.close();
    }
}

runTest();
