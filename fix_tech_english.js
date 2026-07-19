const fs = require('fs');
let lines = fs.readFileSync('content_part3.js', 'utf8').split('\n');

// 1. Remove the </div> at line 1490 (index 1489)
if (lines[1489].trim() === '</div>') {
    lines.splice(1489, 1);
    console.log('Removed </div> at line 1490');
}

// 2. Insert </div> before the backtick at the end of techEnglish
let expressKidsLine = lines.findIndex(l => l.includes('expressKids: {'));
if (expressKidsLine !== -1) {
    let backtickLine = expressKidsLine - 1;
    while(backtickLine > 0 && !lines[backtickLine].includes('`')) {
        backtickLine--;
    }
    if (lines[backtickLine].includes('`')) {
        lines.splice(backtickLine, 0, '    </div>');
        console.log('Inserted </div> at line ' + (backtickLine + 1));
    }
}

fs.writeFileSync('content_part3.js', lines.join('\n'), 'utf8');
console.log('Fixed content_part3.js successfully.');
