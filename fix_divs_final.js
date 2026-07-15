const fs = require('fs');
let lines = fs.readFileSync('content_part3.js', 'utf8').split('\n');

for (let i = 400; i < 450; i++) {
    if (lines[i].includes('npm install dotenv')) {
        if (lines[i-2].includes('</div>')) {
            lines[i-2] = '     </div>\n     <div class="lib-card">\n      <h4>dotenv</h4>';
            console.log('Fixed libraries div missing at line ' + (i-2));
            break;
        }
    }
}

for (let i = 1500; i < 1600; i++) {
    if (lines[i].includes('expressKids: {')) {
        for (let j = i - 1; j > i - 20; j--) {
            if (lines[j].includes('</div>')) {
                lines[j] = '    <!-- extra div removed -->';
                console.log('Fixed techEnglish extra div at line ' + j);
                break;
            }
        }
        break;
    }
}

// For postmanGuide, the extra div is at the end of the file.
for (let i = lines.length - 1; i > lines.length - 10; i--) {
    if (lines[i].includes('</div>')) {
        lines[i] = '   <!-- extra div removed -->';
        console.log('Fixed postmanGuide extra div at line ' + i);
        break;
    }
}

fs.writeFileSync('content_part3.js', lines.join('\n'), 'utf8');
