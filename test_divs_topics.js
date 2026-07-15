const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');
content = content.replace('const contentPart3 =', 'global.modalData =');
eval(content);

for (let topic in global.modalData) {
    if (!global.modalData[topic].content) continue;
    let html = global.modalData[topic].content;
    let openCount = 0;
    let lines = html.split('\n');
    for(let i=0; i<lines.length; i++) {
        openCount += (lines[i].match(/<div/g) || []).length;
        openCount -= (lines[i].match(/<\/div>/g) || []).length;
    }
    if (openCount !== 0) {
        console.log('Unbalanced topic: ' + topic + ' (openCount: ' + openCount + ')');
    }
}
console.log('Done checking topics.');
