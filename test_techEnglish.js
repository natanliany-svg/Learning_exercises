const fs = require('fs');

// Fake modalData with techEnglish
eval(fs.readFileSync('content_part3.js', 'utf8').replace('const contentPart3 =', 'global.modalData ='));

const data = global.modalData.techEnglish;
let rawContent = data.content.trim();
let wrappedContent = '';

if (rawContent.startsWith('<div class="card-body"') && rawContent.includes('">')) {
    wrappedContent = rawContent.replace(
        /<div class="card-body[^>]*>/,
        match => match + '<div class="card-body-inner">'
    ).replace(/<\/div>$/, '</div></div>');
} else {
    wrappedContent = <div class="card-body"><div class="card-body-inner"></div></div>;
}

console.log(wrappedContent.substring(0, 150));
console.log('--- END OF FILE ---');
console.log(wrappedContent.substring(wrappedContent.length - 150));
