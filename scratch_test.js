const fs = require('fs');
const c = fs.readFileSync('content_part3.js', 'utf8');
const start = c.indexOf('techEnglish: {');
const end = c.indexOf('expressKids: {');
let text = c.slice(start, end);
const m = text.match(/content:\s*`([\s\S]*?)`/);
if(m){
    let rawContent = m[1].trim();
    let openCount = (rawContent.match(/<div/g)||[]).length;
    let closeCount = (rawContent.match(/<\/div>/g)||[]).length;
    console.log('Raw open:', openCount, 'Raw close:', closeCount);
}
