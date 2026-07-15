const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');
let lines = content.split('\n');

for(let i=1000; i<3000; i++) {
    if (lines[i] && lines[i].includes('techEnglish: {')) {
        // We know techEnglish starts here.
        // Let's look backwards to find the last 3 closing divs
        let closingDivsFound = 0;
        for (let j = i - 1; j > i - 20; j--) {
            if (lines[j].includes('</div>')) {
                closingDivsFound++;
                if (closingDivsFound === 1) { // We delete the very first closing div we find going upwards
                    lines[j] = lines[j].replace('</div>', '');
                    console.log('Fixed postmanGuide extra div at line ' + j);
                    break;
                }
            }
        }
        break;
    }
}

fs.writeFileSync('content_part3.js', lines.join('\n'), 'utf8');
