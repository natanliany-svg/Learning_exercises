const fs = require('fs');
let lines = fs.readFileSync('content_part3.js', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<!-- extra div removed -->')) {
        lines[i] = '';
    }
}

fs.writeFileSync('content_part3.js', lines.join('\n'), 'utf8');
