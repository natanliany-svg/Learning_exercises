const fs = require('fs');

let appContent = fs.readFileSync('app.js', 'utf8');

const startMarker = '// Normalize modalData formats';
const endMarker = '    }\n});';

const startIndex = appContent.indexOf(startMarker);
const endIndex = appContent.indexOf(endMarker, startIndex) + endMarker.length;

if (startIndex !== -1 && endIndex !== -1) {
    const newLogic = `// Normalize modalData formats
Object.keys(modalData).forEach(key => {
    const data = modalData[key];
    
    // Build HTML string explicitly for complex custom objects
    let html = '';
    
    if (data.styles) html += data.styles + '\\n';
    if (data.htmlContent) html += data.htmlContent + '\\n';
    if (data.description) html += '<div class="content-description">' + data.description + '</div>\\n';
    
    // Handle analogy objects/strings
    if (data.analogy) {
        if (typeof data.analogy === 'string') {
            html += '<div class="analogy-section">' + data.analogy + '</div>\\n';
        } else {
            html += '<div class="analogy-section"><h4>' + (data.analogy.concept || 'אנלוגיה') + '</h4>';
            if (data.analogy.entities) {
                html += '<ul>' + data.analogy.entities.map(e => '<li>' + e + '</li>').join('') + '</ul>';
            }
            if (data.analogy.explanation) {
                html += '<p>' + data.analogy.explanation + '</p>';
            }
            html += '</div>\\n';
        }
    }
    
    // Handle SQL sections array
    if (data.sections && Array.isArray(data.sections)) {
        data.sections.forEach(sec => {
            html += '<div class="sql-section">';
            if (sec.title) html += '<h3>' + sec.title + '</h3>';
            if (sec.content) html += sec.content;
            html += '</div>\\n';
        });
    }
    
    // Handle SQL joins array
    if (data.joins && Array.isArray(data.joins)) {
        html += '<div class="joins-list">';
        data.joins.forEach(j => {
            html += '<div class="join-item"><h4>' + j.type + '</h4>';
            html += '<p><strong>תיאור:</strong> ' + j.description + '</p>';
            html += '<p><strong>אנלוגיה:</strong> ' + j.analogyExplanation + '</p></div>';
        });
        html += '</div>\\n';
    }

    // Handle content object specifically for things like sql_basics coreConcepts
    if (data.content && typeof data.content === 'object') {
        if (data.content.introduction) html += data.content.introduction + '\\n';
        if (data.content.coreConcepts && Array.isArray(data.content.coreConcepts)) {
            html += '<div class="core-concepts">';
            data.content.coreConcepts.forEach(c => {
                html += '<div class="concept-item"><h4>' + c.term + '</h4>';
                html += '<p><strong>אנלוגיה:</strong> ' + c.analogy + '</p>';
                html += '<p>' + c.description + '</p></div>';
            });
            html += '</div>\\n';
        }
    } else if (data.content && typeof data.content === 'string') {
        // If content was already a string, prepend it or append it
        // Depending on existing structure, usually it's the main thing
        if (html === '') {
            html = data.content; // No other special fields
        } else {
            html += data.content; // Append to styles/description
        }
    }
    
    // Generic fallback for any other objects that don't match known schemas to avoid [object Object] or JSON raw output in UI
    // We only use this if nothing else produced html
    if (!html) {
        for (let subKey in data) {
            if (subKey !== 'title' && subKey !== 'id' && subKey !== 'metadata' && subKey !== 'content' && subKey !== 'visualizerSteps') {
                const val = data[subKey];
                if (typeof val === 'string') {
                    html += val;
                } else if (typeof val === 'object') {
                    // We purposefully skip stringifying raw JSON for the user UI unless strictly necessary.
                }
            }
        }
    }
    
    data.content = html || '<div>No content provided.</div>';
});`;

    appContent = appContent.substring(0, startIndex) + newLogic + appContent.substring(endIndex);
    fs.writeFileSync('app.js', appContent);
    console.log('app.js fallback logic successfully rewritten.');
} else {
    console.log('Could not find the target block in app.js');
}
