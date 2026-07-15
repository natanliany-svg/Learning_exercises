const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');

// The dotenv block in libraries has English words:
// <div class="install-cmd">npm install express</div>
// </div>
// <p>... <code>.env</code> ...</p>
// <div class="install-cmd">npm install dotenv</div>
// </div>

content = content.replace(
    /<\/div>\s*<p>[^<]*<code>\.env<\/code>[^<]*<\/p>\s*<div class="install-cmd">npm install dotenv<\/div>\s*<\/div>/,
    '</div>\n     <div class="lib-card">\n      <h4>dotenv</h4>\n      <p>טוען משתני סביבה מתוך קובץ <code>.env</code> לתוך התוכנית (לשמירת סיסמאות וטוקנים מוסתרים).</p>\n      <div class="install-cmd">npm install dotenv</div>\n     </div>'
);

// Now fix postmanGuide which also has openCount: -1
// Let's look for the end of postmanGuide
content = content.replace(
    /<\/div>\s*<\/div>\s*<\/div>\s*\s*\}\s*$/m, // Wait, postmanGuide is the last topic in content_part3.js?
    '</div>\n    </div>\n  \n }'
);

fs.writeFileSync('content_part3.js', content, 'utf8');
