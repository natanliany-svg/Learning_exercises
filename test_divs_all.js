const fs = require('fs');

// Load all modalData
global.modalData = {};
function loadFile(file, varName) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace('const ' + varName + ' =', 'Object.assign(global.modalData,');
    content += ');';
    try { eval(content); } catch(e) { console.log('Error evaluating ' + file + ': ' + e.message); }
}

loadFile('content_part1.js', 'contentPart1');
loadFile('content_part2.js', 'contentPart2');
loadFile('content_part3.js', 'contentPart3');
loadFile('content_servers.js', 'contentServers');
loadFile('content_async_projects.js', 'contentAsyncProjects');
loadFile('content_docker_basic.js', 'contentDockerBasic');
loadFile('content_docker_advanced.js', 'contentDockerAdvanced');
loadFile('content_docker_compose.js', 'contentDockerCompose');
loadFile('content_docker_images_deep.js', 'contentDockerImagesDeepDive');
loadFile('content_docker_compose_advanced.js', 'contentDockerComposeAdvanced');

let allBalanced = true;
for (let topic in global.modalData) {
    if (!global.modalData[topic].content) continue;
    let html = global.modalData[topic].content;
    let openCount = 0;
    let lines = html.split('\n');
    for(let i=0; i<lines.length; i++) {
        openCount += (lines[i].match(/<div/g) || []).length;
        openCount -= (lines[i].match(/<\/div>/g) || []).length;
    }
    if (openCount !== 0) {
        console.log('Unbalanced topic: ' + topic + ' (openCount: ' + openCount + ')');
        allBalanced = false;
    }
}
if (allBalanced) console.log('All topics are perfectly balanced.');
