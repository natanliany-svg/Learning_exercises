const fs = require('fs');
const c = fs.readFileSync('content_part3.js', 'utf8');
const start = c.indexOf('techEnglish: {');
const end = c.indexOf('expressKids: {');
let text = c.slice(start, end);
const m = text.match(/content:\s*`([\s\S]*?)`/);
if(m){
    let rawContent = m[1].trim();
    let lines = rawContent.split('\n');
    for(let i=1035; i<=1045; i++) console.log(i, lines[i]);
}
