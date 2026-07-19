const fs = require('fs');
const c = fs.readFileSync('content_part3.js', 'utf8');
const start = c.indexOf('techEnglish: {');
const end = c.indexOf('expressKids: {');
let text = c.slice(start, end);
const m = text.match(/content:\s*`([\s\S]*?)`/);
if(m){
    let rawContent = m[1].trim();
    let lines = rawContent.split('\n');
    let depth = 0;
    for(let i=0; i<lines.length; i++) {
        let open = (lines[i].match(/<div/g)||[]).length;
        let close = (lines[i].match(/<\/div>/g)||[]).length;
        depth += open - close;
        if (depth === 0 && open - close !== 0) {
            console.log('Div depth reached 0 at line', i, lines[i]);
        } else if (depth < 0) {
            console.log('Negative depth at line', i, lines[i]);
        }
    }
    console.log('Final depth:', depth);
}
