const fs = require('fs');
global.modalData = {};
eval('var window = global;\n' + fs.readFileSync('content_part3.js', 'utf8') + '\nObject.assign(global.modalData, contentPart3);');

let html = global.modalData.postmanGuide.content;
console.log('postmanGuide length:', html.length);
let lines = html.split('\n');
console.log('Last 20 lines of postmanGuide content:');
console.log(lines.slice(-20).join('\n'));
