const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');
let start = content.indexOf('techEnglish: {');
let end = content.indexOf(', expressKids: {', start);
let techEnglish = content.substring(start, end);

let openCount = 0;
let lines = techEnglish.split('\n');
for(let i=0; i<lines.length; i++) {
    openCount += (lines[i].match(/<div/g) || []).length;
    openCount -= (lines[i].match(/<\/div>/g) || []).length;
}
console.log('Final openCount:', openCount);
