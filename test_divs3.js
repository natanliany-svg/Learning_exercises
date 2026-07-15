const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');
let lines = content.split('\n');
let inTechEnglish = false;
let openCount = 0;
for(let i=0; i<lines.length; i++) {
    if (lines[i].includes('techEnglish: {')) inTechEnglish = true;
    if (inTechEnglish) {
        let openMatches = (lines[i].match(/<div/g) || []).length;
        let closeMatches = (lines[i].match(/<\/div>/g) || []).length;
        openCount += openMatches;
        openCount -= closeMatches;
        if (openCount < 0) {
            console.log('Extra closing div at file line: ' + (i+1));
            console.log(lines.slice(i-5, i+6).join('\n'));
            break;
        }
    }
}
