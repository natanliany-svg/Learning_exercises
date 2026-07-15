const fs = require('fs');
eval(fs.readFileSync('content_part3.js', 'utf8').replace('const contentPart3 =', 'global.modalData ='));
const html = global.modalData.techEnglish.content;
let openCount = 0;
let lines = html.split('\n');
for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    openCount += (line.match(/<div/g) || []).length;
    openCount -= (line.match(/<\/div>/g) || []).length;
    if (openCount < 0) {
        console.log('Extra closing div at line ' + (i+1) + ': ' + line);
        break;
    }
}
