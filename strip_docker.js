const fs = require('fs');

global.modalData = {};
eval('var window = global;\n' + fs.readFileSync('content_part3.js', 'utf8') + '\nObject.assign(global.modalData, contentPart3);');

// The string we want to search for to CHOP OFF
const dockerHeader = '<h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מושגי יסוד Docker ו-Containers (מבוא)</h3>';
const dockerHeaderEncoded = '<h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">&#1501;&#1493;&#1513;&#1490;&#1497; &#1497;&#1505;&#1493;&#1491; Docker &#1493;-Containers (&#1502;&#1492;&#1493;&#1488;)</h3>'; // Just in case

// We will just replace in the raw string file to avoid reconstructing the whole file from objects!

let content = fs.readFileSync('content_part3.js', 'utf8');

// We know the Docker garbage starts with:
// <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מושגי יסוד Docker
// And goes until the end of the string backtick 

// Let's use a regex to match from <h3 ... Docker ... to the end of the backtick, for each occurrence!
// Wait, regex might be tricky with multiple lines.
// Let's do it by lines!

let lines = content.split('\n');
let newLines = [];
let skip = false;

for(let i=0; i<lines.length; i++) {
    if (lines[i].includes('מושגי יסוד Docker ו-Containers (מבוא)') || lines[i].includes('??? ?c?\\\'?T Docker ? -Containers')) {
        // We hit the Docker garbage!
        skip = true;
    }
    
    // If we are skipping, we wait until we see the end of the topic string 
    if (skip && lines[i].includes('')) {
        // We reached the end of the string!
        // But we MUST close the main container div properly!
        // For techEnglish, it was wrapped in a <div class="card-body"> and we need </div>
        // Let's just output the correct closing divs.
        // Actually, techEnglish has <div class="card-body">
        // postmanGuide has <div style="direction: rtl; ...>
        newLines.push('   </div>');
        newLines.push(lines[i]); // Push the line with the backtick 
        skip = false;
        continue;
    }
    
    if (!skip) {
        newLines.push(lines[i]);
    }
}

fs.writeFileSync('content_part3.js', newLines.join('\n'), 'utf8');
