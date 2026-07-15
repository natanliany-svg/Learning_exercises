const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');

global.modalData = {};
eval('var window = global;\n' + content + '\nObject.assign(global.modalData, contentPart3);');

let data = global.modalData['techEnglish'];
let rawContent = data.content.trim();
let visHtml = '<div class="visualizer-content">VISUALIZER</div>';

console.log('rawContent ends with </div>? ', rawContent.endsWith('</div>'));

let wrappedContent = '';
if (rawContent.startsWith('<div class="card-body') && rawContent.includes('">')) {
    wrappedContent = rawContent.replace(
        /<div class="card-body[^>]*>/,
        match => match + '<div class="card-body-inner">' + visHtml
    ).replace(/<\/div>$/, '</div></div>');
} else {
    wrappedContent = `<div class="card-body"><div class="card-body-inner">${visHtml}${rawContent}</div></div>`;
}

// Let's count divs in wrappedContent!
let openCount = 0;
let lines = wrappedContent.split('\n');
for(let i=0; i<lines.length; i++) {
    openCount += (lines[i].match(/<div/g) || []).length;
    openCount -= (lines[i].match(/<\/div>/g) || []).length;
}

console.log('Wrapped Content openCount: ' + openCount);
console.log('Wrapped Content ends with: ' + wrappedContent.substring(wrappedContent.length - 20));
