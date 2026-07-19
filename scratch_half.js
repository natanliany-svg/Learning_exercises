const fs = require('fs');
const c = fs.readFileSync('content_part3.js', 'utf8');
const start = c.indexOf('techEnglish: {');
const end = c.indexOf('expressKids: {');
let text = c.slice(start, end);
const m = text.match(/content:\s*`([\s\S]*?)`/);
if(m){
    let rawContent = m[1].trim();
    let lines = rawContent.split('\n');
    let open = 0, close = 0;
    for(let i=1046; i<=1528; i++) {
        if(lines[i]) {
            open += (lines[i].match(/<div/g)||[]).length;
            close += (lines[i].match(/<\/div>/g)||[]).length;
        }
    }
    console.log('Lines 1046-1528: Opens:', open, 'Closes:', close);
}
