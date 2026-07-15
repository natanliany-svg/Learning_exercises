const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');
let lines = content.split('\n');
let openCount = 0;
for(let i=0; i<lines.length; i++) {
    openCount += (lines[i].match(/<div/g) || []).length;
    openCount -= (lines[i].match(/<\/div>/g) || []).length;
    if (openCount < 0) {
        console.log('Extra closing div at file line: ' + (i+1));
        console.log(lines.slice(Math.max(0, i-2), i+3).join('\n'));
        openCount = 0; // reset to find the next one
    }
}
