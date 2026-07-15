const fs = require('fs');

let content = fs.readFileSync('content_part3.js', 'utf8');
let lines = content.split('\n');

global.modalData = {};
eval('var window = global;\n' + content + '\nObject.assign(global.modalData, contentPart3);');

// We have the topics. For each topic, let's find its start and end lines.
// A topic starts with 	opicName: { and ends with   \\n }, or similar.
// But we don't need to parse the object bounds manually. We can just evaluate the HTML of each topic, fix its HTML, and then write it back to the file using a simple string replacement!
// Wait! If I just fix the HTML string, I can't easily replace it in content_part3.js because of backticks and escapes!

// Better way: Find the exact bounds of each topic in the file by looking for 	opicName: { and the next topic.
let topicBounds = [];
let keys = Object.keys(global.modalData);
for(let k=0; k<keys.length; k++) {
    let topic = keys[k];
    let startIdx = -1;
    for(let i=0; i<lines.length; i++) {
        // regex to match 	opic: { or  , topic: {
        let regex = new RegExp('^\\\\s*(,\\s*)?' + topic + '\\\\s*:\\\\s*\\\\{');
        if (regex.test(lines[i])) {
            startIdx = i;
            break;
        }
    }
    
    // We assume the topic ends where the NEXT topic starts, or at the end of the file.
    topicBounds.push({name: topic, start: startIdx});
}

topicBounds.sort((a,b) => a.start - b.start);

for(let k=0; k<topicBounds.length; k++) {
    let start = topicBounds[k].start;
    let end = (k === topicBounds.length - 1) ? lines.length : topicBounds[k+1].start;
    
    // We only care about fixing unbalanced divs.
    // Let's count open/close divs in this block.
    // Wait, the block includes JS code like isualizerSteps which has multiple HTML strings!
    // It's safer to just balance the whole block.
    let openCount = 0;
    for(let i=start; i<end; i++) {
        let openMatches = (lines[i].match(/<div/g) || []).length;
        let closeMatches = (lines[i].match(/<\\/div>/g) || []).length;
        
        for(let c=0; c<closeMatches; c++) {
            if (openCount <= 0) {
                // We found a close div without an open div!
                // DELETE IT!
                lines[i] = lines[i].replace(/<\\/div>/, '<!-- removed extra div -->');
            } else {
                openCount--;
            }
        }
        openCount += openMatches;
    }
    
    // If openCount > 0 at the end, append closing divs right before the } of the topic.
    if (openCount > 0) {
        // Find the last line of the topic which is usually  }, or };
        for(let i=end-1; i>=start; i--) {
            if (lines[i].includes('}') || lines[i].includes('')) {
                // Insert closing divs before this line
                let divs = '';
                for(let c=0; c<openCount; c++) divs += '</div>';
                lines.splice(i, 0, '    ' + divs + ' <!-- auto added divs -->');
                // Adjust indices since we added a line
                for(let m=k+1; m<topicBounds.length; m++) topicBounds[m].start++;
                end++;
                break;
            }
        }
    }
}

fs.writeFileSync('content_part3_autofixed.js', lines.join('\n'), 'utf8');
console.log('Autofix complete.');
