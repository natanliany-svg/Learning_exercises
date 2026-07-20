const fs = require('fs');

// 1. Fix app.js sectionsList
let appJs = fs.readFileSync('C:/Users/natan/Desktop/Learning_exercises/app.js', 'utf8');

appJs = appJs.replace(
    /topics: \['gitBasic', 'gitBranches', 'githubRemote', 'gitMerge', 'gitWorkflow', 'gitTeamProject'\]/,
    "topics: ['gitInit', 'gitStatus', 'gitAdd', 'gitCommit', 'gitPush', 'gitPull']"
);

appJs = appJs.replace(
    /topics: \['dockerBasic', 'dockerfile', 'dockerCompose'\]/,
    "topics: ['dockerIntro', 'dockerfile', 'dockerfileInstructions', 'dockerCompose', 'dockerVolumes', 'dockerArchitecture', 'dockerCliMastery', 'dockerPortMapping', 'dockerImagesDeepDive', 'dockerMultiStage', 'dockerComposeAdvanced']"
);

fs.writeFileSync('C:/Users/natan/Desktop/Learning_exercises/app.js', appJs);

// 2. Generate new sidebar HTML for index.html based on sectionsList
const sectionsMatch = appJs.match(/const sectionsList = (\[[\s\S]*?\]);/);
const sectionsList = eval(sectionsMatch[1]);

let newSidebarHtml = `<nav class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <h1>📚 Natan Study</h1>
        <p>תוכן העניינים והתקדמות למידה</p>
      </div>
`;

const iconMap = {
    installations: '⚙️', basics: '📐', conditions: '🚦', loops: '🔄', arraysObjects: '🗂️', functions: '🎯',
    stringMethods: '📝', objectMethods: '📦', arrayMethods: '📊', closures: '🔒', factories: '🏭', debugging: '🐛', modules: '📦', cleanCode: '🧹', projectBank: '🏦',
    singleThread: '🧵', blocking: '🛑', eventLoop: '🔄', callbacks: '📞', fetch: '🌐', promises: '🤝', asyncAwait: '⏳', asyncProject: '🚀', studyPlannerProject: '📅', movieManagerProject: '🎬',
    gitInit: '🌱', gitStatus: '🔍', gitAdd: '➕', gitCommit: '📦', gitPush: '🚀', gitPull: '📥',
    httpBasics: '🌐', httpVanillaRouting: '🛣️', httpGetData: '📥', vigilArchive: '📁', expressBasic: '🚀', expressBody: '📦', expressParamsQuery: '🔍', expressRouter: '🚦', dotenv: '🔐', expressShop: '🛒', expressMiddleware: '👮', expressErrorHandling: '🚑', restaurantApi: '🍔', ironDomeOps: '🛡️',
    dockerIntro: '🐳', dockerfile: '📄', dockerfileInstructions: '📝', dockerCompose: '🐙', dockerVolumes: '💾', dockerArchitecture: '🧠', dockerCliMastery: '💻', dockerPortMapping: '🔌', dockerImagesDeepDive: '🖼️', dockerMultiStage: '🏗️', dockerComposeAdvanced: '🚀',
    sqlBasics: '🏗️', mysql: '🐬', sqlJoins: '🔗', sqlNode: '🔌', dbCrudProject: '🚀', dbDesign: '📐', supabase: '⚡', relationalVsNosql: '⚖️', mongodb: '🍃', mongodbOperators: '🎛️', mongodbCompass: '🧭', dbMongoose: '🦦', mongodbAtlas: '☁️', mongodbProject1: '🛠️', mongodbProject2: '🚀',
    testingBasic: '🧪', serverTesting: '🖥️', testingProject: '🚀',
    weeklyFeedback: '📝', syllabus: '📋', zoomLinks: '🎥', pitStopQueue: '🏎️', techEnglish: '🔤', quiz: '📝'
};

const titleMap = {
    installations: 'התקנות וסביבה', basics: 'יסודות ומשתנים', conditions: 'תנאים', loops: 'לולאות', arraysObjects: 'מערכים ואובייקטים', functions: 'פונקציות', stringMethods: 'מתודות מחרוזות', objectMethods: 'מתודות אובייקטים', arrayMethods: 'מתודות מערכים', closures: 'קלוז\'רים', factories: 'פונקציות מפעל', debugging: 'דיבאגינג', modules: 'מודולים', cleanCode: 'קוד נקי', projectBank: 'פרויקט בנק',
    singleThread: 'Single Thread', blocking: 'חסימה (Blocking)', eventLoop: 'Event Loop', callbacks: 'Callbacks', fetch: 'Fetch', promises: 'Promises', asyncAwait: 'Async / Await', asyncProject: 'פרויקט אסינכרוני', studyPlannerProject: 'מתכנן לימודים', movieManagerProject: 'מנהל סרטים',
    gitInit: 'Git Init', gitStatus: 'Git Status', gitAdd: 'Git Add', gitCommit: 'Git Commit', gitPush: 'Git Push', gitPull: 'Git Pull',
    httpBasics: 'HTTP Basics', httpVanillaRouting: 'Vanilla Routing', httpGetData: 'Get Data', vigilArchive: 'Vigil Archive', expressBasic: 'Express Basic', expressBody: 'Express Body', expressParamsQuery: 'Params & Query', expressRouter: 'Express Router', dotenv: 'Dotenv', expressShop: 'Express Shop', expressMiddleware: 'Middleware', expressErrorHandling: 'Error Handling', restaurantApi: 'Restaurant API', ironDomeOps: 'Iron Dome Ops',
    dockerIntro: 'Docker Intro', dockerfile: 'Dockerfile', dockerfileInstructions: 'Dockerfile Instructions', dockerCompose: 'Docker Compose', dockerVolumes: 'Volumes', dockerArchitecture: 'Architecture', dockerCliMastery: 'CLI Mastery', dockerPortMapping: 'Port Mapping', dockerImagesDeepDive: 'Images Deep Dive', dockerMultiStage: 'Multi Stage', dockerComposeAdvanced: 'Compose Advanced',
    sqlBasics: 'SQL Basics', mysql: 'MySQL', sqlJoins: 'SQL Joins', sqlNode: 'SQL in Node', dbCrudProject: 'DB CRUD Project', dbDesign: 'DB Design', supabase: 'Supabase', relationalVsNosql: 'Relational vs NoSQL', mongodb: 'MongoDB', mongodbOperators: 'MongoDB Operators', mongodbCompass: 'MongoDB Compass', dbMongoose: 'Mongoose', mongodbAtlas: 'MongoDB Atlas', mongodbProject1: 'MongoDB Project 1', mongodbProject2: 'MongoDB Project 2',
    testingBasic: 'Testing Basic', serverTesting: 'Server Testing', testingProject: 'Testing Project',
    weeklyFeedback: 'משוב שבועי', syllabus: 'סילבוס', zoomLinks: 'קישורי זום', pitStopQueue: 'תור לעמדת תמיכה', techEnglish: 'אנגלית טכנית', quiz: 'סימולטור מבחן'
};

let num = 1;
for (const section of sectionsList) {
    newSidebarHtml += `\n      <div class="nav-section">\n        <span class="nav-label">${section.title.substring(section.title.indexOf(' ') + 1)}</span>\n`;
    for (const topic of section.topics) {
        const icon = iconMap[topic] || '🔹';
        const title = titleMap[topic] || topic;
        const special = topic === 'quiz' || topic.toLowerCase().includes('project') ? ' special' : '';
        newSidebarHtml += `        <div class="nav-item${special}" onclick="scrollToSection('${topic}')">${icon} ${title} <span class="qm-num">${num++}</span></div>\n`;
    }
    newSidebarHtml += `      </div>\n`;
}

// IDE Projects Section
newSidebarHtml += `
      <div class="nav-section">
        <span class="nav-label">פרויקטי IDE אינטראקטיביים</span>
        <div class="nav-item special" onclick="openIDE('bank')">🏦 Bank Account IDE</div>
        <div class="nav-item special" onclick="openIDE('asyncFiles')">📂 Async Files IDE</div>
        <div class="nav-item special" onclick="openIDE('studyPlanner')">📅 Study Planner IDE</div>
        <div class="nav-item special" onclick="openIDE('movieCollection')">🎬 Movie Collection IDE</div>
        <div class="nav-item special" onclick="openIDE('storeOnlineServer')">🛒 Store Server Express IDE</div>
      </div>
`;

// Big Picture Section
newSidebarHtml += `
      <div class="nav-section">
        <span class="nav-label">סיכום והרחבה</span>
        <div class="nav-item special" onclick="scrollToSection('bigPicture')">🌍 התמונה הגדולה (Full Stack)</div>
      </div>
`;

// Freezer button
newSidebarHtml += `
      <!-- Freezer Button -->
      <button class="freezer-btn" onclick="openFreezer()">
        <span>🧊</span>
        <span>המקפיא (פייתון ו-SQL)</span>
      </button>
    </nav>
`;

let indexHtml = fs.readFileSync('C:/Users/natan/Desktop/Learning_exercises/index.html', 'utf8');

// Replace the old sidebar with the new one
const sidebarRegex = /<nav class="sidebar" id="sidebar">[\s\S]*?<\/nav>/;
indexHtml = indexHtml.replace(sidebarRegex, newSidebarHtml);

fs.writeFileSync('C:/Users/natan/Desktop/Learning_exercises/index.html', indexHtml);
console.log('Sidebar updated successfully in index.html!');
