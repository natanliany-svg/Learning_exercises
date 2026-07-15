const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');

let techStart = content.indexOf('techEnglish: {');
let repeatString = '<h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מושגי Docker ו-Containers 🐳</h3>';

let firstInstance = content.indexOf(repeatString, techStart);

if (firstInstance !== -1) {
    let secondInstance = content.indexOf(repeatString, firstInstance + repeatString.length);
    
    if (secondInstance !== -1) {
        let before = content.slice(0, secondInstance);
        let rest = content.slice(secondInstance);
        
        let endOfTech = rest.indexOf('`');
        
        if (endOfTech !== -1) {
            let finalContent = before.trimEnd() + '\n    </div>\n  `\n }\n};\n';
            fs.writeFileSync('content_part3.js', finalContent);
            console.log('Fixed content_part3.js completely!');
        } else {
            console.log('Could not find end of techEnglish');
        }
    } else {
        console.log('Could not find second instance of repeat string');
    }
} else {
    console.log('Could not find first instance of repeat string');
}
