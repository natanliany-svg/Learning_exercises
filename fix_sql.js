const fs = require('fs');
const path = require('path');

const files = [
  'content_sql_basics.js',
  'content_sql_ddl.js',
  'content_sql_dml.js',
  'content_sql_dql.js',
  'content_sql_joins.js',
  'content_sql_node.js'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // To evaluate the object safely, let's extract the object string
  let objMatch = content.match(/const\s+(\w+)\s*=\s*(\{[\s\S]+\});/);
  if (!objMatch) return;
  
  let varName = objMatch[1];
  let objStr = objMatch[2];
  
  // Safely evaluate it
  let data;
  try {
    data = eval('(' + objStr + ')');
  } catch(e) {
    console.error("Error evaluating " + file, e);
    return;
  }
  
  let keyName = Object.keys(data)[0];
  let item = data[keyName];
  
  let html = '';
  
  // Build HTML from existing properties
  if (item.styles) html += item.styles + '\n';
  if (item.htmlContent) html += item.htmlContent + '\n';
  
  if (item.description) {
    html += `<div class="content-description">${item.description}</div>\n`;
  }
  
  if (item.analogy) {
    if (typeof item.analogy === 'string') {
       html += `<div class="analogy-section">${item.analogy}</div>\n`;
    } else {
       html += `<div class="analogy-section">
         <h4>${item.analogy.concept || 'אנלוגיה'}</h4>
         ${item.analogy.entities ? '<ul>' + item.analogy.entities.map(e => `<li>${e}</li>`).join('') + '</ul>' : ''}
         <p>${item.analogy.explanation || ''}</p>
       </div>\n`;
    }
  }
  
  if (item.sections) {
    item.sections.forEach(sec => {
      html += `<div class="sql-section">
        <h3>${sec.title || ''}</h3>
        ${sec.content || ''}
      </div>\n`;
    });
  }
  
  if (item.joins) {
    html += `<div class="joins-list">`;
    item.joins.forEach(j => {
      html += `<div class="join-item">
        <h4>${j.type}</h4>
        <p><strong>תיאור:</strong> ${j.description}</p>
        <p><strong>אנלוגיה:</strong> ${j.analogyExplanation}</p>
      </div>`;
    });
    html += `</div>\n`;
  }
  
  if (item.visualizerSteps) {
    item.visualizerSteps.forEach(step => {
      html += `<div class="visualizer-step">
         <h4>שלב ${step.step}: ${step.action}</h4>
         <p>${step.details}</p>
      </div>\n`;
    });
  }
  
  if (item.content && typeof item.content === 'object') {
     if (item.content.introduction) html += item.content.introduction + '\n';
     if (item.content.coreConcepts) {
       html += `<div class="core-concepts">`;
       item.content.coreConcepts.forEach(c => {
         html += `<div class="concept-item">
            <h4>${c.term}</h4>
            <p><strong>אנלוגיה:</strong> ${c.analogy}</p>
            <p>${c.description}</p>
         </div>\n`;
       });
       html += `</div>\n`;
     }
  } else if (item.content && typeof item.content === 'string') {
     html += item.content;
  }
  
  let newObj = {
    [keyName]: {
      id: item.id || keyName + '_id',
      title: item.title || keyName,
      metadata: {
        author: "Content Writer",
        category: "SQL"
      },
      content: html
    }
  };
  
  // Format the output
  let outStr = `const ${varName} = {\n  ${keyName}: {\n    id: "${newObj[keyName].id}",\n    title: \`${newObj[keyName].title}\`,\n    metadata: {\n      author: "Content Writer",\n      category: "SQL"\n    },\n    content: \`\n${html.replace(/`/g, '\\`')}\n    \`\n  }\n};\n`;
  
  fs.writeFileSync(file, outStr);
  console.log("Rewrote " + file);
});
