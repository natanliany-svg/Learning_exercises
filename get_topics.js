const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');
let lines = content.split('\n');
for(let i=0; i<lines.length; i++) {
    if (lines[i].match(/^\s*[a-zA-Z]+:\s*\{/)) {
        console.log('Topic at line ' + (i+1) + ': ' + lines[i].trim());
    }
}
