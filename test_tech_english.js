const fs = require('fs');
let html = fs.readFileSync('tech_english_temp.txt', 'utf8');

let lines = html.split('\n');
let openCount = 0;
for(let i=0; i<lines.length; i++) {
    openCount += (lines[i].match(/<div/g) || []).length;
    openCount -= (lines[i].match(/<\/div>/g) || []).length;
}
console.log('Final openCount: ' + openCount);
