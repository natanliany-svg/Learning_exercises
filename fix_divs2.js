const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');
let lines = content.split('\n');

// Extra div in libraries: around line 438
// Let's find "npm install dotenv" inside libraries and fix the div right before it
let dotenvLine = -1;
for(let i=0; i<600; i++) {
    if (lines[i].includes('npm install dotenv')) {
        dotenvLine = i;
        break;
    }
}
if (dotenvLine !== -1) {
    // The previous line should be <p>...dotenv...</p>
    // The line before that should be </div>
    // We want to replace that </div> with </div>\n<div class="lib-card">\n<h4>dotenv</h4>
    if (lines[dotenvLine-2].includes('</div>')) {
        lines[dotenvLine-2] = '     </div>\n     <div class="lib-card">\n      <h4>dotenv</h4>';
        console.log('Fixed libraries div missing.');
    }
}

// Extra div in expressErrorHandlingClassroom: around line 2182
let postmanLine = -1;
for(let i=2100; i<2300; i++) {
    if (lines[i].includes(', postmanGuide: {')) {
        postmanLine = i;
        break;
    }
}
if (postmanLine !== -1) {
    // Look backwards from postmanLine for the block of </div>\n</div>\n</div>
    let closingDivsFound = 0;
    for (let i = postmanLine - 1; i > postmanLine - 10; i--) {
        if (lines[i].includes('</div>')) {
            closingDivsFound++;
            if (closingDivsFound === 1) { // Remove the very first one we find going upwards (which is the last one in the file)
                lines[i] = ''; // Remove it
                console.log('Fixed expressErrorHandlingClassroom extra div.');
                break;
            }
        }
    }
}

fs.writeFileSync('content_part3.js', lines.join('\n'), 'utf8');
