import fs from 'fs';

let content = fs.readFileSync('app.js', 'utf8');

// 1. Remove README.md from the file tree
content = content.replace(/<div class="ide-file(?: active)?" onclick="switchIdeFile\('README\.md'\)">.*?<\/div>\n?/, '');

// 2. Change the setTimeout to load utils.js initially instead of README.md
content = content.replace(/setTimeout\(\(\) => switchIdeFile\('README\.md'\), 50\);/, "setTimeout(() => switchIdeFile('utils.js'), 50);");

// 3. Extract the readmeHtml from fileContents and remove it from there
const readmeStartStr = "'README.md': `";
let readmeHtml = "";
if (content.includes(readmeStartStr)) {
    const startIndex = content.indexOf(readmeStartStr);
    const endIndex = content.indexOf("`,", startIndex) + 2;
    const readmeBlock = content.substring(startIndex, endIndex);
    
    // Extract just the HTML content
    readmeHtml = readmeBlock.replace("'README.md': `", "").slice(0, -2);
    
    // Remove it from fileContents
    content = content.replace(readmeBlock + "\n", "");
    content = content.replace(readmeBlock, "");
} else {
    console.error("README.md block not found in fileContents!");
}

// 4. Update the switchIdeFile function to remove the README.md special case
const specialCaseStart = "if (filename === 'README.md') {";
if (content.includes(specialCaseStart)) {
    const startIndex = content.indexOf(specialCaseStart);
    const endIndex = content.indexOf("return;\n    }", startIndex) + "return;\n    }".length;
    const specialCaseBlock = content.substring(startIndex, endIndex);
    content = content.replace(specialCaseBlock + "\n", "");
    content = content.replace(specialCaseBlock, "");
}

// 5. Inject the overlay and button into bankIdeData
if (!content.includes('id="explanationOverlay"')) {
    const buttonHtml = `
        <button onclick="document.getElementById('explanationOverlay').style.display='flex'" style="position:absolute; top:20px; left:20px; background:#3b82f6; color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:bold; font-family:Heebo,sans-serif; z-index:10; box-shadow:0 4px 6px rgba(0,0,0,0.3); transition:0.2s;">
            📘 הסבר הפרויקט
        </button>
    `;
    
    const overlayHtml = `
        <div id="explanationOverlay" style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(15,23,42,0.95); z-index:20; flex-direction:column; align-items:center; justify-content:center; padding:40px;">
            <div style="background:#1e293b; width:100%; max-width:900px; height:90%; border-radius:12px; position:relative; display:flex; flex-direction:column; box-shadow:0 10px 25px rgba(0,0,0,0.5); border:1px solid #334155;">
                <button onclick="document.getElementById('explanationOverlay').style.display='none'" style="position:absolute; top:15px; right:15px; background:none; border:none; color:#cbd5e1; font-size:24px; cursor:pointer; z-index:30;">✕</button>
                <div style="padding:40px; overflow-y:auto; color:#f8fafc; font-family:Heebo,sans-serif; line-height:1.8; direction:rtl;">
                    \${bankExplanationHtml}
                </div>
            </div>
        </div>
    `;

    // Inject the variable definition above bankIdeData
    const bankIdeDataStart = "const bankIdeData = {";
    content = content.replace(bankIdeDataStart, `const bankExplanationHtml = \`${readmeHtml}\`;\n\nconst bankIdeData = {`);

    // Inject button and overlay into the content of bankIdeData
    content = content.replace('<div class="ide-container">', `<div class="ide-container" style="position:relative;">\n${buttonHtml}\n${overlayHtml}`);
}

fs.writeFileSync('app.js', content, 'utf8');
console.log('Restructured explanation successfully.');
