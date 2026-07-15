const fs = require('fs');

global.modalData = {};
function loadFile(file, varName) {
    let content = fs.readFileSync(file, 'utf8');
    // Remove the trailing '};' or whatever so we can eval it
    // Better way: just regex extract everything inside the object literal!
    // But since they are all valid JS scripts, let's just append them to window
    content = 'var window = global;\n' + content + '\nObject.assign(global.modalData, ' + varName + ');';
    try { eval(content); } catch(e) { }
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

let anyBroken = false;
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
        anyBroken = true;
    }
}
if (!anyBroken) console.log('All topics are balanced.');
