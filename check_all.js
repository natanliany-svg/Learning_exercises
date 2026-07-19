const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.startsWith('content_') && f.endsWith('.js'));
files.forEach(file => {
    const c = fs.readFileSync(file, 'utf8');
    const regex = /([a-zA-Z0-9_]+)\s*:\s*\{[\s\S]*?content:\s*`([\s\S]*?)`/g;
    let match;
    while ((match = regex.exec(c)) !== null) {
        const key = match[1];
        const html = match[2];
        const opens = (html.match(/<div/g)||[]).length;
        const closes = (html.match(/<\/div>/g)||[]).length;
        if (opens !== closes) {
            console.log(file, 'Mismatch in', key, 'opens=', opens, 'closes=', closes);
        }
    }
});
