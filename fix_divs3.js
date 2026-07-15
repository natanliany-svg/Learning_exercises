const fs = require('fs');
let lines = fs.readFileSync('content_part3.js', 'utf8').split('\n');

// 1. Fix libraries
// The missing div is right before <p>טוענת משתני סביבה which is around line 434
for (let i = 400; i < 450; i++) {
    if (lines[i].includes('npm install dotenv')) {
        // The line before the <p> is at i-2
        if (lines[i-2].includes('</div>')) {
            lines[i-2] = '     </div>\n     <div class="lib-card">\n      <h4>dotenv</h4>';
            console.log('Fixed libraries div missing at line ' + (i-2));
            break;
        }
    }
}

// 2. Fix techEnglish
// Extra div at end of techEnglish, around line 1528
for (let i = 1500; i < 1600; i++) {
    if (lines[i].includes('expressKids: {')) {
        for (let j = i - 1; j > i - 20; j--) {
            if (lines[j].includes('</div>')) {
                lines[j] = '';
                console.log('Fixed techEnglish extra div at line ' + j);
                break;
            }
        }
        break;
    }
}

// 3. Fix postmanGuide
// Extra div at end of postmanGuide, which is around line 1765? No wait, postmanGuide ends where?
for (let i = 1700; i < 1800; i++) {
    if (lines[i].includes('postmanGuide: {')) {
        for (let j = i - 1; j > i - 20; j--) {
            if (lines[j].includes('</div>')) {
                lines[j] = '';
                console.log('Fixed expressErrorHandlingClassroom extra div at line ' + j);
                break;
            }
        }
        break;
    }
}

fs.writeFileSync('content_part3.js', lines.join('\n'), 'utf8');
