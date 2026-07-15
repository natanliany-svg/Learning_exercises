const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');

// Fix libraries
content = content.replace(
    /<\/div>\s*<p>טוען משתני סביבה מתוך קובץ <code>\.env<\/code> לתוך התוכנית \(לשמירת סיסמאות וטוקנים מוסתרים\)\.<\/p>\s*<div class="install-cmd">npm install dotenv<\/div>\s*<\/div>/,
    '</div>\n     <div class="lib-card">\n      <h4>dotenv</h4>\n      <p>טוען משתני סביבה מתוך קובץ <code>.env</code> לתוך התוכנית (לשמירת סיסמאות וטוקנים מוסתרים).</p>\n      <div class="install-cmd">npm install dotenv</div>\n     </div>'
);

// Fix expressErrorHandlingClassroom
// We know there's an extra div around line 2182. Let's just remove the first </div>\n   </div>\n  \n } we find that has 3 closing divs in a row at the end of the modal.
content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*\s*\}\s*, postmanGuide/g, '</div>\n    </div>\n  \n }\n , postmanGuide');

fs.writeFileSync('content_part3.js', content);
console.log('Fixed extra divs.');
