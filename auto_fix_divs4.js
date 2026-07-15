const fs = require('fs');

let content = fs.readFileSync('content_part3.js', 'utf8');
let lines = content.split('\n');

global.modalData = {};
eval('var window = global;\n' + content + '\nObject.assign(global.modalData, contentPart3);');

let topicBounds = [];
let keys = Object.keys(global.modalData);
for(let k=0; k<keys.length; k++) {
    let topic = keys[k];
    let startIdx = -1;
    for(let i=0; i<lines.length; i++) {
        let regex = new RegExp('^\\s*(,\\s*)?' + topic + '\\s*:\\s*\\{');
        if (regex.test(lines[i])) {
            startIdx = i;
            break;
        }
    }
    
    if (startIdx === -1) {
        console.log('Could not find start of ' + topic);
        // let's try broader match
        for(let i=0; i<lines.length; i++) {
            if (lines[i].includes(topic + ':')) {
                startIdx = i;
                break;
            }
        }
    }
    
    if (startIdx !== -1) {
        topicBounds.push({name: topic, start: startIdx});
    }
}

topicBounds.sort((a,b) => a.start - b.start);

for(let k=0; k<topicBounds.length; k++) {
    let start = topicBounds[k].start;
    let end = (k === topicBounds.length - 1) ? lines.length : topicBounds[k+1].start;
    
    let openCount = 0;
    for(let i=start; i<end; i++) {
        if (lines[i] === undefined) continue;
        let openMatches = (lines[i].match(/<div/g) || []).length;
        let closeMatches = (lines[i].match(/<\/div>/g) || []).length;
        
        for(let c=0; c<closeMatches; c++) {
            if (openCount <= 0) {
                // DELETE IT!
                lines[i] = lines[i].replace(/<\/div>/, '<!-- removed extra div -->');
            } else {
                openCount--;
            }
        }
        openCount += openMatches;
    }
    
    if (openCount > 0) {
        for(let i=end-1; i>=start; i--) {
            if (lines[i] === undefined) continue;
            if (lines[i].includes('}') || lines[i].includes('`')) {
                let divs = '';
                for(let c=0; c<openCount; c++) divs += '</div>';
                lines.splice(i, 0, '    ' + divs + ' <!-- auto added divs -->');
                for(let m=k+1; m<topicBounds.length; m++) topicBounds[m].start++;
                end++;
                break;
            }
        }
    }
}

fs.writeFileSync('content_part3_autofixed.js', lines.join('\n'), 'utf8');
console.log('Autofix complete.');
