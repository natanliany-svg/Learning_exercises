const fs = require('fs');
global.modalData = {};
eval('var window = global;\n' + fs.readFileSync('content_part3.js', 'utf8') + '\nObject.assign(global.modalData, contentPart3);');

console.log('postmanGuide has content?', !!global.modalData.postmanGuide.content);
if (global.modalData.postmanGuide.content) {
    console.log(global.modalData.postmanGuide.content.substring(0, 100));
}
