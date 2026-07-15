const fs = require('fs');
eval(fs.readFileSync('content_part3.js', 'utf8').replace('const contentPart3 =', 'global.modalData ='));
const data = global.modalData.techEnglish;
const html = data.content;
const openDivs = (html.match(/<div/g) || []).length;
const closeDivs = (html.match(/<\/div>/g) || []).length;
console.log('Open divs:', openDivs);
console.log('Close divs:', closeDivs);
