const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');

global.modalData = {};
eval('var window = global;\n' + content + '\nObject.assign(global.modalData, contentPart3);');

let anyBroken = false;
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
        anyBroken = true;
    }
}
if (!anyBroken) console.log('All topics are balanced.');
