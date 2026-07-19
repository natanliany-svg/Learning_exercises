const fs = require('fs');
const c = fs.readFileSync('content_part3.js', 'utf8');

// Match all keys that define content. 
// A simplistic approach: look for block starts like `key: {` and ends before the next key.
// But it's easier to just eval or parse it. Since it's not valid JSON (it has functions/backticks), we can use a regex to extract content blocks.
const regex = /([a-zA-Z0-9_]+)\s*:\s*\{[\s\S]*?content:\s*`([\s\S]*?)`/g;
let match;
while ((match = regex.exec(c)) !== null) {
    const key = match[1];
    const html = match[2];
    const opens = (html.match(/<div/g)||[]).length;
    const closes = (html.match(/<\/div>/g)||[]).length;
    if (opens !== closes) {
        console.log(`Mismatch in ${key}: opens=${opens}, closes=${closes}`);
    }
}
