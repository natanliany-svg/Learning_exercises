const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');

// The end of postmanGuide has:
// </div>
// </div>
// </div>
// 
// },
// techEnglish: {

// Let's remove the extra </div> right before techEnglish
content = content.replace(
    /<\/div>\s*<\/div>\s*<\/div>\s*\s*\}\s*,\s*techEnglish: \{/m,
    '</div>\n    </div>\n  \n },\n techEnglish: {'
);

fs.writeFileSync('content_part3.js', content, 'utf8');
