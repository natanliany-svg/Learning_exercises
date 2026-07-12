// --- Global Declarations & State ---
let activeProject = 'bank';
let isPlanSaved = false;

const modalData = {
    ...contentPart1,
    ...contentPart2,
    ...contentPart3,
    ...asyncLearningContent,
    ...serversContent
};

const sectionsList = [
  {
    id: 'section-basics',
    title: '📚 יסודות ומתקדם',
    subtitle: 'הבסיס ונושאים מתקדמים ב-JavaScript',
    topics: ['basics', 'loops', 'functions', 'closures', 'factories', 'modules', 'destructuring']
  },
  {
    id: 'section-web',
    title: '🖥️ שרתים ו-Web',
    subtitle: 'הדפדפן, שרתי HTTP מבוססי Node ו-Express',
    topics: ['dom', 'vanillaServer', 'httpParams', 'express', 'expressKids', 'expressMiddlewaresClassroom', 'expressValidationsClassroom', 'expressErrorHandlingClassroom', 'postmanGuide']
  },
  {
    id: 'section-async-full',
    title: '⚡ אסינכרוניות מקיפה',
    subtitle: 'מנוע ה-Event Loop, קולבקים, הבטחות ותהליכים אסינכרוניים',
    topics: ['eventLoop', 'callbacksAsync', 'promisesFetch', 'asyncAwait']
  },
  {
    id: 'section-methods',
    title: '🛠️ מתודות מובנות',
    subtitle: 'מניפולציות של מערכים, מחרוזות ואובייקטים',
    topics: ['arrayMethods', 'stringMethods', 'objectMethods']
  },
  {
    id: 'section-tools',
    title: '🔧 עזרים וסימולטורים',
    subtitle: 'מחסנים, השוואות, קיצורים, ספריות וסימולציות למבחן',
    topics: ['syntaxWarehouse', 'pythonVsJs', 'ironRules', 'keyboard', 'libraries', 'quiz', 'techEnglish']
  }
];

function scrollToSection(id) {
    const card = document.getElementById(`card-${id}`);
    if (card) {
        // Highlight active nav-item
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(el => {
            const onClickAttr = el.getAttribute('onclick');
            if (onClickAttr && onClickAttr.includes(`'${id}'`)) {
                el.classList.add('active');
            }
        });

        if (window.innerWidth <= 1024) {
            document.getElementById('sidebar').classList.remove('open');
        }

        // Close other unpinned cards
        document.querySelectorAll('.card').forEach(other => {
            if (other !== card && other.classList.contains('open') && other.getAttribute('data-pinned') !== 'true') {
                other.classList.remove('open');
            }
        });

        card.classList.add('open');
        
        setTimeout(() => {
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 150);
    }
    updateProgressBar();
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

function togglePinCard(topicKey, event) {
    event.stopPropagation(); // prevent card toggle
    event.preventDefault();
    const card = document.getElementById(`card-${topicKey}`);
    const btn = event.currentTarget;
    if (card && btn) {
        const isPinned = card.getAttribute('data-pinned') === 'true';
        card.setAttribute('data-pinned', !isPinned ? 'true' : 'false');
        btn.classList.toggle('pinned', !isPinned);
        btn.innerHTML = !isPinned ? '📌' : '📍';
        btn.setAttribute('title', !isPinned ? 'בטל נעיצת כרטיסיה' : 'נעץ כרטיסיה פתוחה');
    }
}

function initScrollspy() {
    window.addEventListener('scroll', () => {
        updateProgressBar();
        const scrollPos = window.scrollY || window.pageYOffset;
        let activeKey = '';
        
        const elements = document.querySelectorAll('.section-header, .card');
        elements.forEach(el => {
            const top = el.offsetTop - 120;
            if (scrollPos >= top) {
                if (el.classList.contains('section-header')) {
                    activeKey = el.id.replace('section-', '');
                } else if (el.classList.contains('card')) {
                    activeKey = el.id.replace('card-', '');
                }
            }
        });
        
        if (activeKey) {
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
                const onClick = nav.getAttribute('onclick');
                if (onClick && onClick.includes(`'${activeKey}'`)) {
                    nav.classList.add('active');
                }
            });
        }
    });
}

function updateProgressBar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = `${progressPercent}%`;
    }
}

function onCardClick(topicKey) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => {
        const onClickAttr = el.getAttribute('onclick');
        if (onClickAttr && onClickAttr.includes(`'${topicKey}'`)) {
            el.classList.add('active');
        }
    });

    const card = document.getElementById(`card-${topicKey}`);
    if (card) {
        const isOpening = !card.classList.contains('open');
        
        if (isOpening) {
            const cardRectBefore = card.getBoundingClientRect();
            const initialTop = cardRectBefore.top;

            // Close other unpinned cards
            document.querySelectorAll('.card').forEach(other => {
                if (other !== card && other.classList.contains('open') && other.getAttribute('data-pinned') !== 'true') {
                    other.classList.remove('open');
                }
            });
            
            card.classList.add('open');
            
            // Smoothly maintain scroll position so the card doesn't jump
            const startTime = performance.now();
            function lockScroll(time) {
                const currentTop = card.getBoundingClientRect().top;
                const diff = currentTop - initialTop;
                
                // Adjust scroll to keep card at same screen Y
                if (Math.abs(diff) > 0.5) {
                    window.scrollBy(0, diff);
                }
                
                // Also smoothly update progress bar during the transition
                updateProgressBar();
                
                if (time - startTime < 850) { // 850ms to cover the 800ms CSS transition safely
                    requestAnimationFrame(lockScroll);
                }
            }
            requestAnimationFrame(lockScroll);
        } else {
            card.classList.remove('open');
        }
    }
    updateProgressBar();
}

function renderAllContent() {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    
    let html = '';
    sectionsList.forEach(sec => {
        html += `
            <div class="section-header" id="${sec.id}">
                <div class="sec-head">
                    <span class="idx">${sec.title.split(' ')[0]}</span>
                    <h2>${sec.title.substring(sec.title.indexOf(' ') + 1)}</h2>
                </div>
                <p class="sec-tag">${sec.subtitle}</p>
            </div>
            <div class="cards-grid">
        `;
        
        sec.topics.forEach(topicKey => {
            if (topicKey === 'quiz') {
                html += `
                    <div class="card" id="card-quiz" data-pinned="false">
                        <div class="card-header">
                            <span class="dot" style="background:#4ade80;"></span>
                            <span>📝 סימולטור מבחן JS אינטראקטיבי</span>
                            <button class="pin-card-btn" onclick="togglePinCard('quiz', event)" title="נעץ כרטיסיה פתוחה">📍</button>
                            <span class="chev">▼</span>
                        </div>
                        <div class="card-body">
                            <div class="card-body-inner">
                                <div class="quiz-modal-container" style="direction: rtl; text-align: right; color: var(--ink); font-family: inherit; padding: 10px;">
                                    <div id="quizContainer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                const data = modalData[topicKey];
                if (data) {
                    let wrappedContent = '';
                    const rawContent = data.content.trim();
                    if (rawContent.startsWith('<div class="card-body">')) {
                        wrappedContent = rawContent.replace(
                            '<div class="card-body">',
                            '<div class="card-body"><div class="card-body-inner">'
                        ).replace(/<\/div>$/, '</div></div>');
                    } else {
                        wrappedContent = `<div class="card-body"><div class="card-body-inner">${rawContent}</div></div>`;
                    }
                    
                    html += `
                        <div class="card" id="card-${topicKey}" data-pinned="false">
                            <div class="card-header">
                                <span class="dot"></span>
                                <span>${data.title}</span>
                                <button class="pin-card-btn" onclick="togglePinCard('${topicKey}', event)" title="נעץ כרטיסיה פתוחה">📍</button>
                                <span class="chev">▼</span>
                            </div>
                            ${wrappedContent}
                        </div>
                    `;
                }
            }
        });
        
        html += `</div>`; // Close cards-grid
    });
    
    mainContent.innerHTML = html;
    setTimeout(initTechEnglishCheckboxes, 100);
    
    // Bind click events to headers
    document.querySelectorAll('.card-header').forEach(header => {
        header.addEventListener('click', (e) => {
            if (e.target.closest('.pin-card-btn')) return;
            const card = header.parentElement;
            const topicKey = card.id.replace('card-', '');
            onCardClick(topicKey);
        });
    });
    
    initQuiz();
    updateProgressBar();
}

// Render content and initialize Scrollspy on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderAllContent();
    initScrollspy();
    
    // Smoothly update progress bar and scrollspy when document height changes (e.g. accordion open/close)
    const resizeObserver = new ResizeObserver(() => {
        window.dispatchEvent(new Event('scroll'));
    });
    resizeObserver.observe(document.documentElement);
});

// --- Bank IDE Data ---
const bankExplanationHtml = `
<h1>📖 מדריך הפרויקט: סימולטור ניהול בנק</h1>
<p>ברוך הבא לפרויקט ניהול הבנק! במסמך זה נסביר צעד-אחר-צעד את המבנה, ההיגיון, והקוד מאחורי הקלעים, בדיוק לפי סדר הפעולות הנדרש.</p>

<hr style="border-color:#333; margin: 20px 0;">

<h2>📂 למה חילקנו את הפרויקט ל-4 קבצים?</h2>
<p>כתיבת קוד בקובץ אחד ענק היא מתכון לאסון. כשמחלקים את הקוד (מודולריות), קל יותר למצוא באגים, לבדוק פונקציות בנפרד, ולהבין את זרימת המידע (Story).</p>
<ul>
    <li><strong><code>utils.js</code> (ארגז הכלים)</strong>: מכיל פונקציות עזר שלא קשורות לבנק עצמו, אלא משמשות ככלי עבודה (כמו עיצוב מטבע והצגת תפריט למשתמש).</li>
    <li><strong><code>bankFactory.js</code> (פס הייצור)</strong>: פה אנחנו רק <em>מגדירים</em> מה זה לקוח ומה זה חשבון. אין פה נתונים חיים, רק התבניות!</li>
    <li><strong><code>bankManager.js</code> (המנהל)</strong>: הלב הפועם. כאן נמצא מסד הנתונים שלנו (רשימת הלקוחות), ורק הוא רשאי לחפש, להוסיף או להוציא סטטיסטיקות על כולם.</li>
    <li><strong><code>main.js</code> (המסוף הראשי)</strong>: הקובץ היחיד שהמשתמש באמת פוגש. הוא קורא לתפריט ומפעיל את כל הקבצים האחרים לפי הבחירה.</li>
</ul>

<hr style="border-color:#333; margin: 20px 0;">

<h2>🧩 תיאור המטלות והפונקציות - לאן כל דבר שייך?</h2>

<h3>1. מנהל הבנק (bankManager.js)</h3>
<ul>
    <li><strong>יצירת רשימה של אובייקטים עם נתוני לקוחות:</strong> מתבצע במערך <code>customers: []</code>. זהו מסד הנתונים שלנו ששומר את כל האובייקטים.</li>
    <li><strong>פונקציית הצגת הלקוחות (2):</strong> מתבצעת על ידי המתודה <code>getAllCustomers()</code> שפשוט שולפת את כל המערך.</li>
    <li><strong>פונקציית החיפוש (5):</strong> מתבצעת על ידי המתודה <code>findCustomer()</code>. היא עוברת על המערך עם הפונקציה המובנית <code>find()</code> ומחפשת התאמה לפי <code>id</code> או <code>name</code>.</li>
    <li><strong>פונקציית סגירת החשבון (6):</strong> מתבצעת ב-<code>closeCustomerAccount()</code>. המנהל קודם מחפש את הלקוח, ואם מצא, קורא לפעולת הסגירה שלו.</li>
    <li><strong>פונקציית הצגת הסטטיסטיקות (7):</strong> מתבצעת ב-<code>getStats()</code>. המנהל עובר בלולאה על כולם, סוכם את היתרות של חשבונות פעילים בלבד, וסופר כמה יש.</li>
</ul>

<h3>2. המפעל (bankFactory.js)</h3>
<ul>
    <li><strong>יצירת מבנה של לקוח סטנדרטי:</strong> הפונקציה <code>createCustomer()</code> מקבלת (name, id, accountType, initialBalance) ומחזירה אובייקט לקוח.</li>
    <li><strong>פונקציית הייצור של חשבון:</strong> הפונקציה הסודית <code>createAccount()</code>. היא שומרת את היתרה (balance) בתוך <em>Closure</em> כדי שאף אחד לא יוכל לשנות אותה מבחוץ בלי לעבור בפונקציות ההפקדה.</li>
    <li><strong>פונקציית הפקדה (3) ומשיכה (4):</strong> מתבצעות ב-<code>deposit()</code> וב-<code>withdraw()</code>. שתיהן בודקות קודם כל את סוג החשבון והאם הוא בכלל פעיל (<code>isActive</code>). במידה והוא סגור, הפעולה נדחית מיד (Return).</li>
</ul>

<h3>3. ממשק המשתמש (main.js)</h3>
<ul>
    <li><strong>כיצד יוצגו הנתונים הנדרשים:</strong> קובץ ה-main מריץ לולאת <code>while(true)</code> אינסופית. כל סיבוב הוא קורא ל-<code>menu()</code> שיציג את האפשרויות, וממתין לתשובה.</li>
    <li><strong>הבדיקות הנדרשות לכל פונקציה:</strong> בכל פעם שהמשתמש בוחר פעולה (כמו הפקדה), הקובץ קורא למנהל. אם המנהל מוצא את הלקוח, מבקשים קלט נוסף (כמו סכום) ורק אז מבצעים.</li>
</ul>

<hr style="border-color:#333; margin: 20px 0;">

<h2>🔒 רגע, מה זה בעצם Closure ולמה צריך את זה פה?</h2>
<p>
<strong>Closure (סגירה)</strong> הוא מנגנון מיוחד ב-JavaScript שמאפשר לפונקציה "לזכור" את המשתנים שהיו בסביבה שלה כשהיא נוצרה, גם אחרי שהסביבה הזו סיימה לרוץ!
</p>
<p>
<strong>איך זה עובד אצלנו?</strong><br>
בקובץ <code>bankFactory.js</code>, בפונקציה <code>createAccount</code>, הגדרנו משתנה <code>let balance</code>. המשתנה הזה <strong>לא</strong> הוחזר (returned) כמאפיין של האובייקט, אלא רק הפונקציות <code>deposit</code> ו-<code>withdraw</code> קיבלו "גישה אישית" אליו.<br>
<br>
<strong>למה דווקא כאן? (אבטחת מידע)</strong><br>
אם היתרה הייתה מאפיין רגיל בלקוח, פצקר פשוט היה יכול לכתוב: <br><code>customer.account.balance = 10000000;</code><br> ולקבל מיליונים בלי לעבור בפונקציית הפקדה.<br>
הודות ל-Closure, המשתנה נשאר <strong>פרטי ומוסתר</strong>. הדרך היחידה לגעת בכסף היא דרך הפונקציות הרשמיות שייצרנו, אשר מבצעות בדיקות תקינות (האם החשבון פעיל? האם יש מספיק יתרה למשיכה?)!
</p>

<hr style="border-color:#333; margin: 20px 0;">

<h2>🚀 סדר הדברים: מאיפה מתחילים בבניית פרויקט כזה?</h2>
<ol>
    <li><strong>הגדרת הכלים (utils):</strong> קודם כל בונים את מה שלא תלוי בכלום (התפריט שמודפס למסך).</li>
    <li><strong>הגדרת התבניות (Factory):</strong> בונים מודל מדויק של חשבון ולקוח. מחליטים אילו משתנים יהיו גלויים ואילו יוחבאו ב-Closure.</li>
    <li><strong>בניית המנהל (Manager):</strong> יוצרים את המוח שמרכז את הלקוחות, ובו כותבים את הפונקציות שמנהלות את המערך.</li>
    <li><strong>חיבור הכל (Main):</strong> כותבים לולאה שמפעילה את התפריט, ו"מחברת את הצינורות" בין מה שהמשתמש הקליד לבין פונקציות המנהל.</li>
</ol>
`;

// Redundant Merge and Declarations Removed (Defined at top of file)

function getIdeHtml(projectKey) {
    const project = projectKey === 'bank' ? { title: "Bank Account Simulator 🏦" } : projectsData[projectKey];
    const title = project.title || "IDE Mode";
    
    // Build sidebar files list
    let sidebarHtml = '';
    if (projectKey === 'bank') {
        sidebarHtml = `
            <div class="ide-sidebar-header">BANK_ACCOUNT... 📄 📁 🔄 ⚙</div>
            <div class="ide-folder" onclick="toggleFolder('folder-git', this)">▸ .git</div>
            <div id="folder-git" style="display:none;"></div>
            
            <div class="ide-folder" onclick="toggleFolder('folder-modules', this)">▾ node_modules</div>
            <div id="folder-modules">
                <div class="ide-folder indented" onclick="toggleFolder('folder-readline', this)">▸ readline-sync</div>
                <div id="folder-readline" style="display:none;"></div>
                <div class="ide-file indented"><span style="color:#34d399">{}</span> .package-lock.json</div>
            </div>
            
            <div class="ide-file" onclick="switchIdeFile('utils.js')"><span style="color:#f7df1e">JS</span> utils.js</div>
            <div class="ide-file" onclick="switchIdeFile('bankFactory.js')"><span style="color:#f7df1e">JS</span> bankFactory.js</div>
            <div class="ide-file" onclick="switchIdeFile('bankManager.js')"><span style="color:#f7df1e">JS</span> bankManager.js</div>
            <div class="ide-file" onclick="switchIdeFile('main.js')"><span style="color:#f7df1e">JS</span> main.js</div>
            <div class="ide-file" onclick="switchIdeFile('package-lock.json')"><span style="color:#34d399">{}</span> package-lock.json</div>
            <div class="ide-file" onclick="switchIdeFile('package.json')"><span style="color:#34d399">{}</span> package.json</div>
        `;
    } else if (projectKey === 'asyncFiles') {
        sidebarHtml = `
            <div class="ide-sidebar-header">ASYNC_FILES 📂 📄 📁</div>
            <div class="ide-folder" onclick="toggleFolder('folder-git', this)">▸ .git</div>
            <div id="folder-git" style="display:none;"></div>
            
            <div class="ide-file" onclick="switchIdeFile('async-files.js')"><span style="color:#f7df1e">JS</span> async-files.js</div>
            <div class="ide-file" onclick="switchIdeFile('input.txt')"><span style="color:#38bdf8">TXT</span> input.txt</div>
            <div class="ide-file" onclick="switchIdeFile('output.txt')"><span style="color:#38bdf8">TXT</span> output.txt</div>
            <div class="ide-file" onclick="switchIdeFile('output-upper.txt')"><span style="color:#38bdf8">TXT</span> output-upper.txt</div>
        `;
    } else if (projectKey === 'studyPlanner') {
        sidebarHtml = `
            <div class="ide-sidebar-header">STUDY_PLANNER 📅 📄 📁</div>
            <div class="ide-folder" onclick="toggleFolder('folder-git', this)">▸ .git</div>
            <div id="folder-git" style="display:none;"></div>
            
            <div class="ide-file" onclick="switchIdeFile('package.json')"><span style="color:#34d399">{}</span> package.json</div>
            <div class="ide-file" onclick="switchIdeFile('data.js')"><span style="color:#f7df1e">JS</span> data.js</div>
            <div class="ide-file" onclick="switchIdeFile('callbacks.js')"><span style="color:#f7df1e">JS</span> callbacks.js</div>
            <div class="ide-file" onclick="switchIdeFile('promises.js')"><span style="color:#f7df1e">JS</span> promises.js</div>
            <div class="ide-file" onclick="switchIdeFile('asyncAwait.js')"><span style="color:#f7df1e">JS</span> asyncAwait.js</div>
            <div class="ide-file" onclick="switchIdeFile('storage.js')"><span style="color:#f7df1e">JS</span> storage.js</div>
            <div class="ide-file" onclick="switchIdeFile('main.js')"><span style="color:#f7df1e">JS</span> main.js</div>
            <div class="ide-file" onclick="switchIdeFile('saved-plan.json')"><span style="color:#34d399">{}</span> saved-plan.json</div>
        `;
    } else if (projectKey === 'movieCollection') {
        sidebarHtml = `
            <div class="ide-sidebar-header">MOVIE_COLLECTION 🎬 📄 📁</div>
            <div class="ide-folder" onclick="toggleFolder('folder-git', this)">▸ .git</div>
            <div id="folder-git" style="display:none;"></div>
            
            <div class="ide-file" onclick="switchIdeFile('package.json')"><span style="color:#34d399">{}</span> package.json</div>
            <div class="ide-file" onclick="switchIdeFile('data/movies.json')"><span style="color:#34d399">{}</span> movies.json</div>
            <div class="ide-file" onclick="switchIdeFile('utils/validator.js')"><span style="color:#f7df1e">JS</span> validator.js</div>
            <div class="ide-file" onclick="switchIdeFile('services/file.service.js')"><span style="color:#f7df1e">JS</span> file.service.js</div>
            <div class="ide-file" onclick="switchIdeFile('services/movie.service.js')"><span style="color:#f7df1e">JS</span> movie.service.js</div>
            <div class="ide-file" onclick="switchIdeFile('app.js')"><span style="color:#f7df1e">JS</span> app.js</div>
        `;
    } else if (projectKey === 'storeOnlineServer') {
        sidebarHtml = `
            <div class="ide-sidebar-header">STORE_SERVER 🛒 📄 📁</div>
            <div class="ide-folder" onclick="toggleFolder('folder-git', this)">▸ .git</div>
            <div id="folder-git" style="display:none;"></div>
            
            <div class="ide-file" onclick="switchIdeFile('.env')"><span style="color:#a78bfa">ENV</span> .env</div>
            <div class="ide-file" onclick="switchIdeFile('package.json')"><span style="color:#34d399">{}</span> package.json</div>
            <div class="ide-file" onclick="switchIdeFile('data/products.json')"><span style="color:#34d399">{}</span> products.json</div>
            <div class="ide-file" onclick="switchIdeFile('data/customers.json')"><span style="color:#34d399">{}</span> customers.json</div>
            <div class="ide-file" onclick="switchIdeFile('data/orders.json')"><span style="color:#34d399">{}</span> orders.json</div>
            <div class="ide-file" onclick="switchIdeFile('services/file.service.js')"><span style="color:#f7df1e">JS</span> file.service.js</div>
            <div class="ide-file" onclick="switchIdeFile('routes/products.js')"><span style="color:#f7df1e">JS</span> products.js</div>
            <div class="ide-file" onclick="switchIdeFile('routes/cart.js')"><span style="color:#f7df1e">JS</span> cart.js</div>
            <div class="ide-file" onclick="switchIdeFile('routes/account.js')"><span style="color:#f7df1e">JS</span> account.js</div>
            <div class="ide-file" onclick="switchIdeFile('routes/orders.js')"><span style="color:#f7df1e">JS</span> orders.js</div>
            <div class="ide-file" onclick="switchIdeFile('routes/health.js')"><span style="color:#f7df1e">JS</span> health.js</div>
            <div class="ide-file" onclick="switchIdeFile('index.js')"><span style="color:#f7df1e">JS</span> index.js</div>
        `;
    } else if (projectKey === 'restaurantOrdersApi') {
        sidebarHtml = `
            <div class="ide-sidebar-header">RESTAURANT_API 🍔 📄 📁</div>
            <div class="ide-folder" onclick="toggleFolder('folder-git', this)">▸ .git</div>
            <div id="folder-git" style="display:none;"></div>
            
            <div class="ide-file" onclick="switchIdeFile('package.json')"><span style="color:#34d399">{}</span> package.json</div>
            <div class="ide-file" onclick="switchIdeFile('data/orders.json')"><span style="color:#34d399">{}</span> orders.json</div>
            <div class="ide-file" onclick="switchIdeFile('middlewares/auth.middleware.js')"><span style="color:#f7df1e">JS</span> auth.middleware.js</div>
            <div class="ide-file" onclick="switchIdeFile('middlewares/error.middleware.js')"><span style="color:#f7df1e">JS</span> error.middleware.js</div>
            <div class="ide-file" onclick="switchIdeFile('services/orders.service.js')"><span style="color:#f7df1e">JS</span> orders.service.js</div>
            <div class="ide-file" onclick="switchIdeFile('routes/orders.route.js')"><span style="color:#f7df1e">JS</span> orders.route.js</div>
            <div class="ide-file" onclick="switchIdeFile('index.js')"><span style="color:#f7df1e">JS</span> index.js</div>
        `;
    }

    const prompt = projectKey === 'bank' ? 'natan@ubuntu:~/bank$' : (projectKey === 'asyncFiles' ? 'natan@ubuntu:~/async-files$' : (projectKey === 'studyPlanner' ? 'natan@ubuntu:~/study-planner$' : (projectKey === 'movieCollection' ? 'natan@ubuntu:~/movie-manager$' : (projectKey === 'restaurantOrdersApi' ? 'natan@ubuntu:~/restaurant-api$' : 'natan@ubuntu:~/store-server$'))));
    const initialTermOutput = projectKey === 'bank' 
        ? "> המערכת מאותחלת. הקלד 'help' כדי לראות פקודות אפשריות." 
        : (projectKey === 'asyncFiles' 
            ? "> פרויקט עיבוד קבצים מוכן. הקלד 'node async-files.js' להרצה או 'help' לעזרה." 
            : (projectKey === 'studyPlanner'
                ? "> פרויקט מתכנן לימודים מוכן. הקלד 'node main.js' להרצה או 'help' לעזרה."
                : (projectKey === 'movieCollection'
                    ? "> פרויקט ניהול סרטים מוכן. הקלד 'node app.js' להרצה או 'help' לעזרה."
                    : (projectKey === 'restaurantOrdersApi'
                        ? "> מסעדת API מוכנה. הקלד 'npm start' להפעלת השרת או 'help' לעזרה."
                        : "> שרת Express מוכן. הקלד 'npm start' להפעלת השרת או 'help' לעזרה."))));

    return `
        <div class="ide-container" style="position:relative;">
            <button onclick="document.getElementById('explanationOverlay').style.display='flex'" style="position:absolute; top:20px; left:20px; background:var(--gold); color:#11131a; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:bold; font-family:inherit; z-index:10; box-shadow:0 4px 15px rgba(245,197,24,0.35); transition:0.2s;">
                📘 הסבר הפרויקט
            </button>
        
            <div id="explanationOverlay" style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(17,19,26,0.97); z-index:20; flex-direction:column; align-items:center; justify-content:center; padding:20px;">
                <div style="background:var(--surface); width:100%; max-width:900px; height:95%; border-radius:var(--radius); position:relative; display:flex; flex-direction:column; box-shadow:0 10px 30px rgba(0,0,0,0.6); border:1px solid var(--line);">
                    <button onclick="document.getElementById('explanationOverlay').style.display='none'" style="position:absolute; top:15px; right:15px; background:none; border:none; color:var(--ink-soft); font-size:24px; cursor:pointer; z-index:30;">✕</button>
                    <div id="explanationContent" style="padding:40px 30px; overflow-y:auto; color:var(--ink); font-family:inherit; line-height:1.8; direction:rtl;">
                        ${projectKey === 'bank' ? bankExplanationHtml : project.floatingExplanation}
                    </div>
                </div>
            </div>
        
            <div class="ide-top">
                <div class="ide-sidebar">
                    ${sidebarHtml}
                </div>
                
                <div class="ide-editor" id="ideEditorContent">
                    <!-- Dynamic content -->
                </div>
            </div>
            <div class="ide-terminal">
                <div class="term-header"><span>bash - ${projectKey}</span></div>
                <div class="term-output" id="terminalOutput">
                    <p>${initialTermOutput}</p>
                </div>
                <div class="term-input-wrapper">
                    <span class="term-prompt">${prompt}</span>
                    <input type="text" class="term-input" id="terminalInput" autocomplete="off" spellcheck="false" onkeypress="handleTerminal(event)">
                </div>
            </div>
        </div>
    `;
}

function openIDE(projectKey) {
    activeProject = projectKey;
    const modal = document.getElementById('fullPageModal');
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = getIdeHtml(projectKey);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Close sidebar on mobile
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');
    
    const defaultFile = projectKey === 'bank' ? 'utils.js' : (projectKey === 'asyncFiles' ? 'async-files.js' : (projectKey === 'studyPlanner' ? 'main.js' : (projectKey === 'movieCollection' ? 'app.js' : 'index.js')));
    setTimeout(() => switchIdeFile(defaultFile), 50);
}

function closeModal() {
    document.getElementById('fullPageModal').classList.remove('open');
    document.body.style.overflow = 'auto';
    document.getElementById('modalBody').innerHTML = '';
}

// --- IDE Logic ---
const bankFileContents = {
    'utils.js': `<span class="comment">// 1. קובץ לפונקציות חישוב ועזר למערכת</span>
import rl from 'readline-sync';

export const formatCurrency = (amount) => \`₪\${amount.toFixed(2)}\`;

export function isPositive(num) {
    return num > 0;
}

export function menu() {
    console.log(\`
========== מערכת ניהול חשבונות בנק ==========
1. הוסף לקוח חדש
2. הפקד כסף
3. משוך כסף
4. חפש לקוח
5. סגור חשבון
6. הצג את כל הלקוחות
7. סטטיסטיקות הבנק
8. הרצת תרגיל קלוז'ר / פילטר לדוגמה (utils)
9. יציאה
=============================================\`);
    return rl.question('בחר פעולה (1-9): ');
}`,

    'bankFactory.js': `<span class="comment">// 2. שלב שני: יצירת המבנה הבסיסי (Factory)</span>
export function createAccount() {
    let balance = 0;
    let isActive = true;

    return {
        getBalance: () => balance,
        getStatus: () => isActive,
        deposit: (amount) => {
            if (!isActive) throw new Error("Account is closed.");
            if (amount <= 0) throw new Error("Deposit amount must be positive.");
            balance += amount;
            return balance;
        },
        withdraw: (amount) => {
            if (!isActive) throw new Error("Account is closed.");
            if (amount <= 0) throw new Error("Withdraw amount must be positive.");
            if (amount > balance) throw new Error("Insufficient funds.");
            balance -= amount;
            return balance;
        },
        close: () => {
            isActive = false;
        }
    };
}

export function createCustomer(id, fullName, accountType) {
    const validTypes = ['Regular', 'Premium', 'Student'];
    if (!validTypes.includes(accountType)) {
        throw new Error('Invalid account type. Must be Regular, Premium, or Student.');
    }
    if (!fullName || fullName.trim() === '') {
        throw new Error('Full name cannot be empty.');
    }
    if (!id || id.trim() === '') {
        throw new Error('ID cannot be empty.');
    }

    const account = createAccount();

    return {
        id,
        fullName,
        accountType,
        account
    };
}`,

    'bankManager.js': `<span class="comment">// 3. שלב שלישי: מנהל הבנק - מנהל את כל הלקוחות</span>
import { createCustomer } from './bankFactory.js';

const customers = [];

export const bankManager = {
    addCustomer(id, fullName, accountType) {
        const customer = createCustomer(id, fullName, accountType);
        customers.push(customer);
        return customer;
    },
    
    getNextId() {
        if (customers.length === 0) return 100;
        const ids = customers.map(c => Number(c.id));
        return Math.max(...ids) + 1;
    },
    
    deposit(idOrName, amount) {
        const c = bankManager.searchCustomer(idOrName);
        if (!c) throw new Error("Customer not found.");
        return c.account.deposit(amount);
    },
    
    withdraw(idOrName, amount) {
        const c = bankManager.searchCustomer(idOrName);
        if (!c) throw new Error("Customer not found.");
        return c.account.withdraw(amount);
    },
    
    searchCustomer(query) {
        const q = query.trim().toLowerCase();
        return customers.find(c => c.id.toLowerCase() === q || c.fullName.toLowerCase() === q);
    },
    
    closeAccount(id) {
        const c = bankManager.searchCustomer(id);
        if (!c) throw new Error("Customer not found.");
        c.account.close();
    },
    
    showCustomers() {
        return customers;
    },
    
    showStatistics() {
        const totalCustomers = customers.length;
        const active = customers.filter(c => c.account.getStatus());
        const totalMoney = active.reduce((sum, c) => sum + c.account.getBalance(), 0);
        const average = active.length > 0 ? totalMoney / active.length : 0;
        const highest = active.reduce((max, c) => {
            const bal = c.account.getBalance();
            return bal > max ? bal : max;
        }, 0);
        return { totalCustomers, activeCount: active.length, totalMoney, average, highest };
    }
};`,

    'main.js': `<span class="comment">// 4. שלב רביעי ואחרון: המנוע שמחבר הכל</span>
import { bankManager } from './bankManager.js';
import { menu, formatCurrency } from './utils.js';
import rl from 'readline-sync';

function handleMenu(choice) {
    switch (choice.trim()) {
        case '1': {
            const id = rl.question('הכנס תעודת זהות: ');
            const name = rl.question('הכנס שם מלא: ');
            const type = rl.question('סוג חשבון (Regular/Premium/Student): ');
            
            let isOnlyDigits = true;
            for (let i = 0; i < id.length; i++) {
                const char = id[i];
                if (char < "0" || char > "9") {
                    isOnlyDigits = false;
                }
            }
            const idNum = Number(id);
            if (!isOnlyDigits || idNum < 100) {
                console.log("שגיאה: מזהה חייב להיות מספר גדול או שווה ל-100!");
                break;
            }
            if (bankManager.searchCustomer(id)) {
                console.log("שגיאה: מזהה לקוח כבר קיים במערכת!");
                break;
            }
            try {
                bankManager.addCustomer(id, name, type);
                console.log(\`לקוח \${name} נוסף בהצלחה!\`);
            } catch (e) {
                console.log('שגיאה:', e.message);
            }
            break;
        }
        case '2': {
            const id = rl.question('הכנס תעודת זהות או שם: ');
            const amount = rl.question('סכום להפקדה: ');
            try {
                const newBalance = bankManager.deposit(id, Number(amount));
                console.log(\`ההפקדה בוצעה. יתרה עדכנית: ₪\${newBalance}\`);
            } catch (e) {
                console.log(\`שגיאה:\`, e.message);
            }
            break;
        }
        case '3': {
            const id = rl.question('הכנס תעודת זהות או שם: ');
            const amount = rl.question('סכום למשיכה: ');
            try {
                const newBalance = bankManager.withdraw(id, Number(amount));
                console.log(\`המשיכה בוצעה. יתרה עדכנית: ₪\${newBalance}\`);
            } catch (e) {
                console.log(\`שגיאה:\`, e.message);
            }
            break;
        }
        case '4': {
            const query = rl.question('הכנס תעודת זהות או שם לחיפוש: ');
            const c = bankManager.searchCustomer(query);
            if (c) {
                console.log(\`נמצא: \${c.fullName} | ת.ז: \${c.id} | סוג: \${c.accountType} | יתרה: \${formatCurrency(c.account.getBalance())} | פעיל: \${c.account.getStatus()}\`);
            } else {
                console.log('לקוח לא נמצא.');
            }
            break;
        }
        case '5': {
            const id = rl.question('הכנס תעודת זהות לסגירת חשבון: ');
            try {
                bankManager.closeAccount(id);
                console.log('חשבון נסגר בהצלחה.');
            } catch (e) {
                console.log('שגיאה:', e.message);
            }
            break;
        }
        case '6':
            console.table(bankManager.showCustomers());
            break;
        case '7': {
            const stats = bankManager.showStatistics();
            console.log(\`===== Statistics =====\`);
            console.log(\`Total Customers: \${stats.totalCustomers}\`);
            console.log(\`Active Accounts: \${stats.activeCount}\`);
            console.log(\`Total Money: \${formatCurrency(stats.totalMoney)}\`);
            console.log(\`Average Balance: \${formatCurrency(stats.average)}\`);
            console.log(\`Highest Balance: \${formatCurrency(stats.highest)}\`);
            break;
        }
        case '8': {
            console.log('הרצת תרגיל קלוז\\'ר / פילטר לדוגמה...');
            break;
        }
        case '9':
            console.log('להתראות!');
            process.exit(0);
        default:
            console.log('בחירה לא תקינה.');
            break;
    }
}

while (true) {
    const choice = menu();
    handleMenu(choice);
}`,
    'package.json': `{
  "type": "module",
  "dependencies": {
    "readline-sync": "^1.4.10"
  }
}`,
    'package-lock.json': `{}`
};

const bankStoryMap = {
    'utils.js': [
        "הסיפור שלנו מתחיל מהבסיס הקטן ביותר. לפני שבונים בנק, צריך 'כלי עבודה' (Utils). למה התחלנו פה? כי אלו פונקציות קטנות ועצמאיות שלא תלויות בכלום.",
        "מייבאים את ספריית readline-sync כי היא זו שתאפשר לנו לעצור ולהמתין לבחירת המשתמש בתפריט.",
        "",
        "פונקציה קטנטנה שלוקחת מספר (למשל 5) והופכת אותו לטקסט יפה עם שקלים ונקודה עשרונית (₪5.00). המילה export אומרת שקבצים אחרים יוכלו להשתמש בה.",
        "",
        "פונקציית עזר הבודקת אם מספר הוא חיובי (גדול מ-0).",
        "מחזירה true אם חיובי, false אחרת.",
        "",
        "",
        "וכאן אנחנו מגדירים את ה-menu! למה פה? כי תפריט הוא בסך הכל כלי שמציג טקסט למשתמש ואוסף את הבחירה שלו.",
        "מדפיסים את התפריט למסך בצורה יפה.",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "ממתינים לקלט הבחירה מהמשתמש ומחזירים את התשובה כפי שהיא.",
        ""
    ],
    'bankFactory.js': [
        "פס הייצור שלנו (Factory). פה אנו מייצרים אובייקט של חשבון בנק ושל לקוח.",
        "פונקציה שמייצרת חשבון בנק חדש.",
        "יתרת החשבון נשמרת כמשתנה מקומי (balance) בתוך Closure כדי שלא תהיה גישה ישירה אליה מבחוץ.",
        "דגל פעילות החשבון (isActive) - מוגדר גם הוא כמשתנה מקומי סודי.",
        "",
        "מחזירים אובייקט שמכיל פונקציות גישה ועדכון (Getters/Setters) בלבד.",
        "פונקציה לקבלת היתרה הנוכחית.",
        "פונקציה לקבלת סטטוס הפעילות של החשבון (פעיל/סגור).",
        "פעולת הפקדת כסף לחשבון.",
        "ולידציה: אם החשבון סגור, נזרוק שגיאה מתאימה.",
        "ולידציה: לא ניתן להפקיד סכום שלילי או אפס.",
        "עדכון היתרה הנסתרת.",
        "מחזירים את היתרה החדשה.",
        "",
        "פעולת משיכת כסף מהחשבון.",
        "ולידציה: אם החשבון סגור, נזרוק שגיאה.",
        "ולידציה: לא ניתן למשוך סכום שלילי או אפס.",
        "ולידציה: לא ניתן למשוך יותר מהיתרה הקיימת בחשבון.",
        "עדכון היתרה הנסתרת.",
        "מחזירים את היתרה החדשה.",
        "",
        "פעולה לסגירת החשבון לצמיתות.",
        "מעבירים את דגל הפעילות ל-false.",
        "",
        "",
        "",
        "",
        "פונקציה שמייצרת לקוח בודד המכיל מזהה, שם מלא, סוג חשבון וחשבון בנק מובנה.",
        "רשימה של סוגי חשבונות חוקיים במערכת (Regular, Premium, Student).",
        "ולידציה: אם סוג החשבון אינו חוקי, נזרוק שגיאה.",
        "",
        "",
        "ולידציה: אם השם המלא ריק או לא תקין, נזרוק שגיאה.",
        "",
        "",
        "ולידציה: אם מזהה הלקוח ריק, נזרוק שגיאה.",
        "",
        "",
        "",
        "מפעילים את createAccount() כדי לייצר חשבון בנק ייחודי ללקוח זה.",
        "",
        "מחזירים אובייקט לקוח שלם ומובנה.",
        "מזהה הלקוח.",
        "שם מלא.",
        "סוג החשבון.",
        "חשבון הבנק המובנה שלו.",
        "",
        ""
    ],
    'bankManager.js': [
        "מנהל הבנק. התבניות יודעות לייצר לקוח בודד, אבל המנהל מנהל את רשימת כל הלקוחות במערכת.",
        "מייבאים את פונקציית הייצור של הלקוח.",
        "",
        "זהו הלב של הבנק: מערך customers שבו נאחסן כל לקוח שנייצר. שים לב: הוא מוגדר כמשתנה מקומי בקובץ ללא שימוש ב-this או OOP מורכב.",
        "",
        "מייצאים אובייקט אחד יחיד שמנהל את הכל (Singleton pattern).",
        "פעולת הוספה: המנהל יקבל את פרטי הלקוח החדש...",
        "המנהל יקרא ל-Factory, ימסור לו את הנתונים, ויקבל חזרה לקוח טרי.",
        "המנהל דוחף (push) את הלקוח למערך המקומי.",
        "ומחזיר אותו.",
        "",
        "",
        "פונקציית עזר לחישוב מזהה עוקב אוטומטי ללקוח הבא.",
        "אם אין לקוחות עדיין, נתחיל ממספר 100.",
        "נשתמש ב-map שלמדנו כדי ליצור מערך חדש המכיל רק את המזהים כמספרים תקינים.",
        "נמצא את המזהה הגבוה ביותר באמצעות Math.max ואופרטור ה-Spread (...), ונוסיף 1.",
        "",
        "",
        "פעולת הפקדה דרך המנהל.",
        "מחפשים את הלקוח לפי מזהה או שם.",
        "אם הלקוח לא נמצא, נזרוק שגיאה.",
        "מפעילים את מתודת ההפקדה בחשבון ומחזירים את היתרה העדכנית.",
        "",
        "",
        "פעולת משיכה דרך המנהל.",
        "מחפשים את הלקוח לפי מזהה או שם.",
        "אם הלקוח לא נמצא, נזרוק שגיאה.",
        "מפעילים את מתודת המשיכה בחשבון ומחזירים את היתרה העדכנית.",
        "",
        "",
        "חיפוש לקוח (case-insensitive) לפי מזהה או שם מלא.",
        "ננקה רווחים בקצוות ונהפוך לאותיות קטנות בעזרת trim ו-toLowerCase.",
        "נשתמש ב-find שלמדנו כדי למצוא התאמה מושלמת.",
        "",
        "",
        "סגירת חשבון לקוח.",
        "מחפשים את הלקוח במערכת.",
        "אם לא נמצא, נזרוק שגיאה.",
        "מפעילים את מתודת הסגירה של החשבון.",
        "",
        "",
        "פעולה פשוטה שמחזירה את כל מערך הלקוחות להצגה.",
        "מחזירים את המערך.",
        "",
        "",
        "סטטיסטיקות (אופציה 7): מציג דוח נתונים מלא על כל הבנק.",
        "סופר את סך כל הלקוחות בבנק (פעילים ושאינם פעילים).",
        "משתמשים ב-filter כדי לסנן ולשמור רק את הלקוחות שחשבונם פעיל.",
        "משתמשים ב-reduce כדי לסכם את כל היתרות של החשבונות הפעילים.",
        "מחשבים יתרה ממוצעת לחשבון פעיל.",
        "משתמשים ב-reduce נוסף כדי למצוא את היתרה הגבוהה ביותר בבנק.",
        "שולפים את היתרה של החשבון הנוכחי.",
        "אם היא גדולה מהמקסימום שמצאנו עד כה, נחזיר אותה.",
        "",
        "מחזירים אובייקט עם כל הנתונים הסטטיסטיים.",
        "",
        ""
    ],
    'main.js': [
        "חלון הראווה. פה הכל מתחבר. למה התחלנו דווקא בסוף? כי בדרך כלל מתכננים קודם את הכלים (Utils), את הבסיס (Factory), את הניהול (Manager), ורק בסוף את הממשק.",
        "מייבאים את מנהל הבנק כדי שנוכל לפקוד עליו מה לעשות.",
        "מייבאים את התפריט ואת מעצב המטבע שבנינו בקובץ העזר.",
        "מייבאים את ספריית הקלט.",
        "",
        "כאן בנינו את הפונקציה handleMenu בדיוק כמו שעשית בקוד שלך! היא מקבלת את הבחירה.",
        "נשתמש ב-switch-case כדי לנתב כל בחירה לפעולה המתאימה.",
        "מקרה 1: הוספת לקוח חדש.",
        "קולטים תעודת זהות.",
        "קולטים שם מלא.",
        "קולטים סוג חשבון (Regular/Premium/Student).",
        "",
        "וולידציה: נוודא שכל התווים שהוקלדו במזהה הם ספרות בלבד.",
        "לולאת סריקת תווים בסיסית.",
        "בודקים אם התו הוא ספרה תקינה.",
        "",
        "",
        "",
        "",
        "ממירים למספר.",
        "אם יש תווים שאינם ספרות, או שהמספר קטן מ-100...",
        "נדפיס הודעת שגיאה.",
        "ונעצור את הריצה של מקרה זה בעזרת break.",
        "",
        "נבדוק בעזרת המנהל אם המזהה הזה כבר קיים במערכת.",
        "נדפיס שגיאה אם קיים.",
        "ונעצר.",
        "",
        "ננסה ליצור את הלקוח.",
        "שולחים למנהל את הפרטים כדי ליצור ולשמור.",
        "מדפיסים הודעת הצלחה.",
        "במידה ונזרקה שגיאה באחד המפעלים...",
        "נדפיס אותה בצורה מסודרת.",
        "",
        "סיום המקרה הראשון.",
        "",
        "מקרה 2: הפקדת כסף.",
        "קולטים מזהה או שם של לקוח.",
        "קולטים סכום להפקדה.",
        "מנסים לבצע את ההפקדה.",
        "קוראים למתודה של המנהל ומקבלים יתרה חדשה.",
        "מדפיסים הודעת הצלחה עם היתרה המעודכנת.",
        "במידה והלקוח לא נמצא או שהחשבון סגור...",
        "נדפיס את השגיאה.",
        "",
        "סיום המקרה.",
        "",
        "מקרה 3: משיכת כסף.",
        "קולטים מזהה או שם.",
        "קולטים סכום למשיכה.",
        "מנסים לבצע את המשיכה.",
        "קוראים למתודה של המנהל ומקבלים יתרה חדשה.",
        "מדפיסים יתרה עדכנית.",
        "במידה ואין מספיק כסף או שהחשבון סגור...",
        "נדפיס את השגיאה.",
        "",
        "סיום המקרה.",
        "",
        "מקרה 4: חיפוש לקוח.",
        "קולטים מזהה או שם לחיפוש.",
        "מבקשים מהמנהל לחפש.",
        "אם מצאנו את הלקוח...",
        "מדפיסים את כל הפרטים שלו בצורה יפה ומסודרת, כולל סטטוס הפעילות של החשבון.",
        "אחרת, אם לא מצאנו...",
        "מדפיסים הודעת 'לא נמצא'.",
        "",
        "סיום המקרה.",
        "",
        "מקרה 5: סגירת חשבון.",
        "קולטים מזהה לסגירת חשבון.",
        "מנסים לסגור.",
        "קוראים לפעולת המנהל לסגור את החשבון.",
        "מדפיסים הודעת הצלחה.",
        "במידה ויש שגיאה...",
        "נדפיס אותה.",
        "",
        "סיום המקרה.",
        "",
        "מקרה 6: הצגת כלל הלקוחות.",
        "משתמשים ב-console.table שלמדנו כדי להדפיס טבלה מובנית של כל הלקוחות!",
        "סיום המקרה.",
        "מקרה 7: סטטיסטיקות הבנק.",
        "מבקשים מהמנהל את אובייקט הסטטיסטיקות.",
        "מדפיסים כותרת לדוח.",
        "מדפיסים את סך הלקוחות.",
        "מדפיסים את החשבונות הפעילים.",
        "מדפיסים את סך הכסף הכללי בבנק.",
        "מדפיסים את יתרת החשבון הממוצעת.",
        "מדפיסים את היתרה הגבוהה ביותר שנמצאה.",
        "סיום המקרה.",
        "",
        "מקרה 8: הרצת תרגיל קלוז'ר לדוגמה.",
        "מדפיסים הודעת הרצה.",
        "מדפיסים הודעת הרצה.",
        "סיום המקרה.",
        "",
        "מקרה 9: יציאה מהתוכנית.",
        "מדפיסים הודעת פרידה.",
        "קוראים ל-process.exit כדי לסיים את התהליך.",
        "ברירת מחדל: אם הוקלד משהו אחר.",
        "מדפיסים הודעת בחירה לא תקינה.",
        "סיום המבנה.",
        "",
        "",
        "",
        "הלולאה הראשית של התוכנית - while(true) אינסופית.",
        "קוראים לפונקציה menu() שמציגה את התפריט ומחזירה את הקלט.",
        "שולחים את הבחירה לטיפול handleMenu.",
        ""
    ]
};


// --- IDE Operations ---
function switchIdeFile(filename) {
    document.querySelectorAll('.ide-file').forEach(el => {
        el.classList.remove('active');
        if (el.innerText.includes(filename)) {
            el.classList.add('active');
        }
    });

    let content = '';
    let stories = [];
    
    if (activeProject === 'bank') {
        content = bankFileContents[filename] || '<span class="comment">// קובץ ריק</span>';
        stories = bankStoryMap[filename] || [];
    } else if (projectsData[activeProject]) {
        content = projectsData[activeProject].files[filename] || '<span class="comment">// קובץ ריק</span>';
        stories = projectsData[activeProject].stories[filename] || [];
    }
    
    const lines = content.split('\n');
    let html = '';
    
    lines.forEach((line, index) => {
        const storyHtml = stories[index] ? `<div class="line-story">${stories[index]}</div>` : '';
        html += `<div class="code-line"><div class="line-num">${index + 1}</div><div class="line-code">${line}</div>${storyHtml}</div>`;
    });

    const editorContent = document.getElementById('ideEditorContent');
    if (editorContent) {
        editorContent.innerHTML = html;
    }
}

function toggleFolder(folderId, element) {
    const folder = document.getElementById(folderId);
    if (folder.style.display === 'none') {
        folder.style.display = 'block';
        element.innerText = element.innerText.replace('▸', '▾');
    } else {
        folder.style.display = 'none';
        element.innerText = element.innerText.replace('▾', '▸');
    }
}

// --- Terminal Simulator ---
let customers = [];
function handleTerminal(event) {
    if (event.key === 'Enter') {
        const input = event.target.value.trim();
        event.target.value = '';
        
        const output = document.getElementById('terminalOutput');
        const prompt = activeProject === 'bank' ? 'natan@ubuntu:~/bank$' : (activeProject === 'asyncFiles' ? 'natan@ubuntu:~/async-files$' : (activeProject === 'studyPlanner' ? 'natan@ubuntu:~/study-planner$' : (activeProject === 'movieCollection' ? 'natan@ubuntu:~/movie-manager$' : 'natan@ubuntu:~/store-server$')));
        output.innerHTML += `<p><span class="term-prompt">${prompt}</span> ${input}</p>`;
        
        const args = input.split(' ');
        const cmd = args[0].toLowerCase();
        
        if (activeProject === 'bank') {
            if (cmd === 'help') {
                output.innerHTML += `<p>פקודות: add_customer [id] [name], deposit [id] [amount], show_all, clear</p>`;
            } else if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'add_customer') {
                if (args.length < 3) {
                    output.innerHTML += `<p class="term-error">Error: Missing arguments.</p>`;
                } else {
                    const idStr = args[1];
                    let isOnlyDigits = true;
                    for (let i = 0; i < idStr.length; i++) {
                        const char = idStr[i];
                        if (char < "0" || char > "9") {
                            isOnlyDigits = false;
                        }
                    }
                    const idVal = Number(idStr);
                    if (!isOnlyDigits || idVal < 100) {
                        output.innerHTML += `<p class="term-error">Error: ID must be a number greater than or equal to 100.</p>`;
                    } else if (customers.some(c => c.id === args[1])) {
                        output.innerHTML += `<p class="term-error">Error: ID already exists.</p>`;
                    } else {
                        customers.push({ id: args[1], fullName: args[2], accountType: args[3] || 'Regular', balance: 0 });
                        output.innerHTML += `<p class="term-success">Customer ${args[2]} added successfully.</p>`;
                    }
                }
            } else if (cmd === 'deposit') {
                const c = customers.find(x => x.id === args[1]);
                if (!c) {
                    output.innerHTML += `<p class="term-error">Error: Customer not found.</p>`;
                } else {
                    c.balance += Number(args[2] || 0);
                    output.innerHTML += `<p class="term-success">Deposited ${args[2]} to ${c.fullName}. New balance: ${c.balance}</p>`;
                }
            } else if (cmd === 'show_all') {
                output.innerHTML += `<p>Total customers: ${customers.length}</p>`;
                customers.forEach(c => {
                    output.innerHTML += `<p>- [${c.id}] ${c.fullName}: $${c.balance}</p>`;
                });
            } else if (cmd !== '') {
                output.innerHTML += `<p class="term-error">bash: ${cmd}: command not found</p>`;
            }
        } else if (activeProject === 'movieCollection') {
            if (cmd === 'help') {
                output.innerHTML += `<p>Available commands: node app.js, npm start, cat data/movies.json, cat report.json, clear</p>`;
            } else if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'node' || cmd === 'npm') {
                if (args[1] === 'app.js' || args[0] === 'npm') {
                    isPlanSaved = true;
                    output.innerHTML += `
                        <p class="term-success">> Running app.js...</p>
                        <p>==============================</p>
                        <p style="color: #f5c518; font-weight: bold;">Movie Collection Manager</p>
                        <p>==============================</p>
                        <p>1. Show all movies<br>2. Show by id<br>3. Create new movie<br>4. Delete movie<br>5. Update rate<br>6. Search by name<br>7. Sort by genre (Show by genre)<br>8. Show statistics<br>9. Sort movies (Bonus 1)<br>10. Show top 3 movies (Bonus 2)<br>11. Undo delete movie (Bonus 3)<br>12. Export report to JSON (Bonus 4)<br>13. Search movies by year range (Bonus 5)<br>14. Exit</p>
                        <p>==============================</p>
                        <p>Choose an option: <span style="color: #38bdf8;">1</span></p>
                        <p>All movies in collection:</p>
                        <p style="color: #34d399;">1. Inception<br>2. Interstellar<br>3. Titanic</p>
                        <p>Choose an option: <span style="color: #38bdf8;">8</span></p>
                        <p>Statistics Report:</p>
                        <p style="color: #38bdf8;">- Total Movies: 3<br>- Average Rating: 8.40<br>- Best Movie: "Inception" (Rating: 8.8)</p>
                        <p>Choose an option: <span style="color: #38bdf8;">12</span></p>
                        <p class="term-success">Report exported to report.json successfully:</p>
                        <pre style="color: #a78bfa; font-family: monospace;">{
  "totalMovies": 3,
  "averageRating": 8.4,
  "bestMovie": {
    "title": "Inception",
    "rating": 8.8
  },
  "availableGenres": [
    "Sci-Fi",
    "Drama"
  ]
}</pre>
                        <p>Choose an option: <span style="color: #38bdf8;">14</span></p>
                        <p>Goodbye!</p>
                    `;
                } else {
                    output.innerHTML += `<p class="term-error">Error: Cannot find module '\${args[1]}'</p>`;
                }
            } else if (cmd === 'cat') {
                const filename = args[1];
                if (filename === 'data/movies.json') {
                    output.innerHTML += `
                        <pre style="color: #38bdf8; font-family: monospace;">[
  {
    "id": 1,
    "title": "Inception",
    "genre": "Sci-Fi",
    "year": 2010,
    "rating": 8.8
  },
  {
    "id": 2,
    "title": "Interstellar",
    "genre": "Sci-Fi",
    "year": 2014,
    "rating": 8.6
  },
  {
    "id": 3,
    "title": "Titanic",
    "genre": "Drama",
    "year": 1997,
    "rating": 7.8
  }
]</pre>
                    `;
                } else if (filename === 'report.json') {
                    if (isPlanSaved) {
                        output.innerHTML += `
                            <pre style="color: #a78bfa; font-family: monospace;">{
  "totalMovies": 3,
  "averageRating": 8.4,
  "bestMovie": {
    "title": "Inception",
    "rating": 8.8
  },
  "availableGenres": [
    "Sci-Fi",
    "Drama"
  ]
}</pre>
                        `;
                    } else {
                        output.innerHTML += `<p class="term-error">cat: report.json: No such file or directory</p>`;
                    }
                } else {
                    output.innerHTML += `<p class="term-error">cat: \${filename}: No such file or directory</p>`;
                }
            } else if (cmd !== '') {
                output.innerHTML += `<p class="term-error">bash: \${cmd}: command not found</p>`;
            }
        } else if (activeProject === 'asyncFiles') {
            if (cmd === 'help') {
                output.innerHTML += `<p>Available commands: node async-files.js, cat input.txt, cat output.txt, cat output-upper.txt, clear</p>`;
            } else if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'node') {
                if (args[1] === 'async-files.js') {
                    output.innerHTML += `
                        <p class="term-success">> Running async-files.js...</p>
                        <p>תוכן הקובץ input.txt:</p>
                        <p style="color: #60a5fa;">שלום עולם<br>זה קובץ הקלט שלי<br>Node.js מגניב</p>
                        <p class="term-success">הקובץ output.txt נכתב בהצלחה</p>
                        <p class="term-success">הכל הסתיים בהצלחה! (משימה 3)</p>
                        <p>קראתי עם Promise:</p>
                        <p style="color: #60a5fa;">שלום עולם<br>זה קובץ הקלט שלי<br>Node.js מגניב</p>
                        <p class="term-success">הכל הסתיים בהצלחה בשרשור Promises!</p>
                        <p>אורך קובץ קלט: 36</p>
                        <p>אורך קובץ פלט: 27</p>
                    `;
                } else {
                    output.innerHTML += `<p class="term-error">Error: Cannot find module '${args[1]}'</p>`;
                }
            } else if (cmd === 'cat') {
                const filename = args[1];
                if (filename === 'input.txt') {
                    output.innerHTML += `<p style="color: #cbd5e1;">שלום עולם<br>זה קובץ הקלט שלי<br>Node.js מגניב</p>`;
                } else if (filename === 'output.txt') {
                    output.innerHTML += `<p style="color: #cbd5e1;">נכתב בהצלחה על ידי Node.js!</p>`;
                } else if (filename === 'output-upper.txt') {
                    output.innerHTML += `<p style="color: #cbd5e1;">שלום עולם<br>זה קובץ הקלט שלי<br>NODE.JS מגניב</p>`;
                } else if (filename === 'async-files.js') {
                    output.innerHTML += `<p>Error: Use the editor window to read code files!</p>`;
                } else {
                    output.innerHTML += `<p class="term-error">cat: ${filename}: No such file or directory</p>`;
                }
            } else if (cmd !== '') {
                output.innerHTML += `<p class="term-error">bash: ${cmd}: command not found</p>`;
            }
        } else if (activeProject === 'studyPlanner') {
            if (cmd === 'help') {
                output.innerHTML += `<p>Available commands: node main.js, cat saved-plan.json, clear</p>`;
            } else if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'node') {
                if (args[1] === 'main.js') {
                    const loadMsg = isPlanSaved 
                        ? `<p style="color: #34d399;">[טעינה] נמצאה תוכנית קודמת עבור נתן. סה"כ זמן: 105 דקות.</p>`
                        : `<p style="color: #fb7185;">[טעינה] לא נמצאה תוכנית לימודים קודמת שמורה.</p>`;
                    isPlanSaved = true;
                    output.innerHTML += `
                        <p class="term-success">> Running main.js...</p>
                        <p>=== תחילת ריצת האפליקציה Study Planner ===</p>
                        <p>[סינכרוני] קוד רגיל ממשיך לרוץ מייד ללא המתנה!</p>
                        ${loadMsg}
                        <p>[קולבק] ברוך הבא, נתן! מוכן לתכנן את יום הלימודים שלך?</p>
                        <p style="color: #fb7185;">[פרומיס שגיאה מתוכננת] משימה בשם "משימה דמיונית" לא נמצאה במאגר</p>
                        <p>[קולבק] נמצא סטודנט: נתן</p>
                        <p>[פרומיס] מתחיל לבנות תוכנית לימודים...</p>
                        <p style="color: #fb7185;">[קולבק שגיאה מתוכננת] סטודנט עם מזהה 99 לא נמצא במערכת</p>
                        <p style="color: #a78bfa;">[אסינכרוני ברקע] משימה מושהית הסתיימה!</p>
                        <p>[פרומיס] תוכנית הלימודים נבנתה עבור נתן:</p>
                        <p> - תרגול קולבקים ב-JS (45 דקות)</p>
                        <p> - לימוד פרומיסים ו-Fetch (60 דקות)</p>
                        <p>[פרומיס] סה"כ זמן לימוד: 105 דקות.</p>
                        <p class="term-success">[שמירה] תוכנית הלימודים נשמרה בהצלחה לקובץ saved-plan.json</p>
                        <p>[פרומיס Finally] בניית התוכנית הסתיימה.</p>
                        <p style="color: #34d399;">[Async/Await] תזכורת נשלחה אל נתן למספר 050-1234567</p>
                        <p style="color: #fb7185;">[Async/Await שגיאה מתוכננת] לא ניתן להכין תזכורת עבור משה - חסרים פרטי קשר!</p>
                    `;
                } else {
                    output.innerHTML += `<p class="term-error">Error: Cannot find module '${args[1]}'</p>`;
                }
            } else if (cmd === 'cat') {
                if (args[1] === 'saved-plan.json') {
                    if (isPlanSaved) {
                        output.innerHTML += `
                            <pre style="color: #38bdf8; font-family: monospace;">{
  "studentName": "נתן",
  "totalDuration": 105,
  "tasks": [
    "תרגול קולבקים ב-JS",
    "לימוד פרומיסים ו-Fetch"
  ]
}</pre>
                        `;
                    } else {
                        output.innerHTML += `<p class="term-error">cat: saved-plan.json: No such file or directory</p>`;
                    }
                } else {
                    output.innerHTML += `<p class="term-error">cat: ${args[1]}: No such file or directory</p>`;
                }
            } else if (cmd !== '') {
                output.innerHTML += `<p class="term-error">bash: ${cmd}: command not found</p>`;
            }
        } else if (activeProject === 'storeOnlineServer') {
            if (cmd === 'help') {
                output.innerHTML += `<p>Available commands: npm start, node index.js, curl [url], cat [filename], clear</p>`;
            } else if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'npm' || cmd === 'node') {
                if ((cmd === 'npm' && args[1] === 'start') || (cmd === 'node' && args[1] === 'index.js')) {
                    isPlanSaved = true;
                    output.innerHTML += `
                        <p class="term-success">> starting store_online_server_express...</p>
                        <p style="color: #34d399;">[Express] Server running on port 3000</p>
                        <p style="color: #60a5fa;">[Database] Connected to JSON files base path: ./data/</p>
                    `;
                } else {
                    output.innerHTML += `<p class="term-error">Error: Command not recognized. Did you mean 'npm start' or 'node index.js'?</p>`;
                }
            } else if (cmd === 'curl') {
                if (!isPlanSaved) {
                    output.innerHTML += `<p class="term-error">curl: (7) Failed to connect to localhost port 3000: Connection refused. Did you run the server first?</p>`;
                } else {
                    const urlStr = args[1] || '';
                    if (urlStr.includes('/health')) {
                        output.innerHTML += `<p>All is good</p>`;
                    } else if (urlStr.includes('/products')) {
                        if (urlStr.includes('inStock=true') && urlStr.includes('maxPrice=15')) {
                            output.innerHTML += `
                                <pre style="color: #34d399; font-family: monospace;">{
  "success": true,
  "data": [
    {
      "id": "book_003",
      "name": "The Hitchhiker's Guide to the Galaxy - Douglas Adams",
      "price": 14.95,
      "stock": 12
    },
    {
      "id": "book_004",
      "name": "1984 - George Orwell",
      "price": 11.99,
      "stock": 50
    },
    {
      "id": "book_005",
      "name": "To Kill a Mockingbird - Harper Lee",
      "price": 13.25,
      "stock": 8
    }
  ]
}</pre>
                            `;
                        } else {
                            output.innerHTML += `
                                <pre style="color: #34d399; font-family: monospace;">{
  "success": true,
  "data": [
    { "id": "book_001", "name": "The Hobbit - J.R.R. Tolkien", "price": 19.99, "stock": 45 },
    { "id": "book_002", "name": "Sapiens: A Brief History - Yuval Noah Harari", "price": 24.5, "stock": 30 },
    { "id": "book_003", "name": "The Hitchhiker's Guide - Douglas Adams", "price": 14.95, "stock": 12 }
  ]
}</pre>
                            `;
                        }
                    } else if (urlStr.includes('/cart')) {
                        output.innerHTML += `
                            <pre style="color: #38bdf8; font-family: monospace;">{
  "success": true,
  "data": {
    "customerId": "cust_101",
    "items": [
      { "productId": "book_001", "name": "The Hobbit - J.R.R. Tolkien", "price": 19.99, "quantity": 1, "subtotal": 19.99 }
    ],
    "total": 19.99
  }
}</pre>
                        `;
                    } else {
                        output.innerHTML += `<p>{"success": true, "message": "Welcome to Natan's Online Store API"}</p>`;
                    }
                }
            } else if (cmd === 'cat') {
                const filename = args[1];
                if (filename === '.env') {
                    output.innerHTML += `
                        <pre style="color: #a78bfa; font-family: monospace;">PORT=3000
DATA_BASE=./data/
STARTING_BALANCE=500</pre>
                    `;
                } else if (filename === 'package.json') {
                    output.innerHTML += `
                        <pre style="color: #a78bfa; font-family: monospace;">{
  "name": "store_online_server_express",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "dependencies": {
    "express": "^5.2.1"
  }
}</pre>
                    `;
                } else {
                    output.innerHTML += `<p class="term-error">cat: ${filename}: No such file or directory. Try '.env' or 'package.json'</p>`;
                }
            } else if (cmd !== '') {
                output.innerHTML += `<p class="term-error">bash: ${cmd}: command not found</p>`;
            }
        }
        
        output.scrollTop = output.scrollHeight;
    }
}

// --- Freezer Logic ---
function openFreezer() {
    document.getElementById('freezerModal').classList.add('open');
}
function closeFreezer() {
    document.getElementById('freezerModal').classList.remove('open');
}




// --- Interactive Theme Switcher Logic ---
function toggleThemeMenu() {
    const menu = document.getElementById('themeMenu');
    if (menu) {
        menu.classList.toggle('open');
    }
}

function changeTheme(themeName) {
    document.body.setAttribute('data-theme', themeName);
    localStorage.setItem('natan_study_theme', themeName);
    
    const menu = document.getElementById('themeMenu');
    if (menu) {
        menu.classList.remove('open');
    }
}

// Close theme menu when clicking outside
document.addEventListener('click', (e) => {
    const btn = document.getElementById('themeBtn');
    const menu = document.getElementById('themeMenu');
    if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
    }
});

function initTheme() {
    changeTheme('ocean');
}


// --- Interactive Quiz Simulator (14 Exams & 14 Questions) ---
const examTopics = {
    basics: { name: '📐 יסודות ומשתנים', desc: 'משתני var, let, const, Temporal Dead Zone, Hoisting, טיפוסי נתונים ו-typeof' },
    loops: { name: '🔄 תנאים ולולאות', desc: 'תנאי if-else, switch, לולאות for/while/do-while, אופרטורים לוגיים ו-Nullish' },
    functions: { name: '🎯 פונקציות', desc: 'הצהרה לעומת ביטוי פונקציה, פונקציות חץ, arguments, return וקונטקסט this' },
    closures: { name: '🔒 קלוז\'רים וסקופ לקסיקלי', desc: 'Lexical Scope, closures, IIFE, שימושים מעשיים ושימור משתנים בזיכרון' },
    factories: { name: '🏭 פונקציות מפעל ואובייקטים', desc: 'Factory Functions, Property Shorthand, Object.create, העתקה רדודה/עמוקה' },
    modules: { name: '📦 מודולים (ES6 & CommonJS)', desc: 'require ו-module.exports לעומת import ו-export, טעינה סטטית ודינמית' },
    destructuring: { name: '🧩 פירוק והשמה', desc: 'Destructuring של מערכים ואובייקטים, Rest, Spread וערכי ברירת מחדל' },
    promises: { name: '🤝 פרומיסים ואסינק-אוויט', desc: 'Promise Lifecycle, then/catch, async/await, Promise.all/race/allSettled' },
    eventLoop: { name: '🔄 מנוע ה-Event Loop', desc: 'Call Stack, Callback Queue, Microtasks Queue, nextTick וחסמי Thread' },
    vanillaServer: { name: '🖥️ שרת HTTP בסיסי (Node)', desc: 'http.createServer, Request, Response, writeHead, statusCodes, streams ו-buffers' },
    express: { name: '🚀 שרתי Express ופרויקט VIGIL', desc: 'Routing, middleware, req.params, req.query, req.body וטיפול בשגיאות' },
    arrayMethods: { name: '📊 מתודות מערכים', desc: 'map, filter, reduce, find, findIndex, splice, slice ואיטרציות' },
    stringMethods: { name: '📝 מתודות מחרוזות', desc: 'indexOf, split, slice, replace, replaceAll, trim וחיפושי תווים' },
    objectMethods: { name: '🗂️ מתודות אובייקטים', desc: 'Object.keys/values/entries, Object.freeze/seal וסריקת מאפיינים' }
};

let currentExamTopic = '';
let currentExamQuestions = [];
let currentExamAnswers = [];
let currentExamScore = 0;
let currentQuestionIndex = 0;

function getQuizHtml() {
    return `
        <div class="modal-header" style="border-bottom: 1px solid var(--line); padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="font-family: 'Rubik', sans-serif; font-weight: 800; color: var(--gold); text-shadow: 0 0 10px rgba(245,197,24,0.15); margin:0;">📝 סימולטור מבחני JS אינטראקטיבי</h2>
        </div>
        <div class="quiz-modal-container" style="direction: rtl; text-align: right; color: var(--ink); font-family: inherit; max-height: 78vh; overflow-y: auto;">
            <div id="quizContainer"></div>
        </div>
    `;
}

function initQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;

    const savedScores = JSON.parse(localStorage.getItem('natan_study_scores') || '{}');
    
    let html = `
        <div style="margin-bottom: 20px; background: rgba(245, 197, 24, 0.05); border: 1px solid var(--line); border-radius: 12px; padding: 18px;">
            <p style="font-size: 15.5px; line-height: 1.6; margin-bottom: 12px; color: var(--ink-soft);">
                ברוכים הבאים לסימולטור המבחנים המשודרג של נתן! לפניך <strong>14 מבחנים ממוקדים</strong> המכסים את כל החומר הנדרש למבחן במדעי המחשב. לכל מבחן יש <strong>14 שאלות</strong> עם פידבק מיידי והסבר מפורט.
            </p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button onclick="resetQuizScores()" style="background: rgba(239, 68, 68, 0.12); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.25); border-radius: 6px; padding: 6px 12px; font-size: 13px; font-weight: bold; cursor: pointer; transition: 0.15s;">🗑️ אפס את כל הציונים</button>
            </div>
        </div>
        <div class="quiz-dashboard">
    `;

    Object.keys(examTopics).forEach(topicKey => {
        const topic = examTopics[topicKey];
        const highScore = savedScores[topicKey];
        const hasTaken = highScore !== undefined;
        
        let scoreBadge = '';
        if (hasTaken) {
            const pct = (highScore / 14) * 100;
            let badgeColor = '#ef4444'; // red
            if (pct >= 80) badgeColor = '#10b981'; // green
            else if (pct >= 50) badgeColor = '#f5c518'; // yellow
            
            scoreBadge = `
                <span class="quiz-score-badge completed" style="color: ${badgeColor}; border-color: ${badgeColor}40; background: ${badgeColor}12;">
                    הושלם: ${highScore}/14 (${pct.toFixed(0)}%)
                </span>
            `;
        } else {
            scoreBadge = `<span class="quiz-score-badge pending">⏳ טרם בוצע</span>`;
        }

        html += `
            <div class="quiz-topic-card">
                <div>
                    <div class="quiz-topic-title">${topic.name}</div>
                    <div class="quiz-topic-desc">${topic.desc}</div>
                </div>
                <div class="quiz-topic-footer">
                    ${scoreBadge}
                    <button class="quiz-start-btn" onclick="startExam('${topicKey}')">
                        ${hasTaken ? 'נסה שוב 🔄' : 'התחל מבחן 🚀'}
                    </button>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    quizContainer.innerHTML = html;
}

function startExam(topicKey) {
    currentExamTopic = topicKey;
    currentExamQuestions = quizDatabase[topicKey] || [];
    currentExamAnswers = new Array(currentExamQuestions.length).fill(null);
    currentExamScore = 0;
    currentQuestionIndex = 0;

    renderQuizQuestion();
}

function renderQuizQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer || currentExamQuestions.length === 0) return;

    const qObj = currentExamQuestions[currentQuestionIndex];
    const topicInfo = examTopics[currentExamTopic];
    const progressPercent = ((currentQuestionIndex + 1) / currentExamQuestions.length) * 100;

    let codeBlock = '';
    if (qObj.code) {
        codeBlock = `
            <pre style="background: #0d0e14; padding: 14px; border-radius: 8px; overflow-x: auto; color: var(--teal); font-family: 'JetBrains Mono', monospace; text-align: left; direction: ltr; margin: 15px 0; border: 1px solid var(--line);"><code style="font-size:14.5px; white-space:pre-wrap;">${qObj.code}</code></pre>
        `;
    }

    let optionsHtml = '';
    qObj.opts.forEach((opt, optIndex) => {
        optionsHtml += `
            <button class="quiz-opt-btn" onclick="selectQuizOption(${optIndex})" id="opt-${optIndex}" style="background: var(--surface-2); border: 1px solid var(--line); border-radius: 8px; color: var(--ink); padding: 14px; font-size: 14.5px; cursor: pointer; text-align: right; direction: ltr; transition: 0.15s; font-family: 'JetBrains Mono', monospace; font-weight: 600; width:100%; margin-bottom: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                ${opt}
            </button>
        `;
    });

    quizContainer.innerHTML = `
        <div style="background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
            <!-- Exam Header -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
                <span style="font-size: 13.5px; color: var(--gold); font-weight: bold;">
                    📚 נושא: ${topicInfo.name}
                </span>
                <span style="font-size: 13px; color: var(--ink-faint); font-weight: bold;">
                    שאלה ${currentQuestionIndex + 1} מתוך ${currentExamQuestions.length}
                </span>
            </div>
            
            <!-- Progress Bar -->
            <div style="width:100%; height:6px; background:var(--line); border-radius:3px; margin-bottom: 20px; overflow:hidden;">
                <div style="width:${progressPercent}%; height:100%; background:var(--gold); transition: width 0.3s ease;"></div>
            </div>

            <!-- Question Code & Text -->
            <div style="font-size: 17px; font-weight: 700; margin-bottom: 15px; font-family: 'Rubik', sans-serif; line-height: 1.5;">
                ${qObj.q}
            </div>
            ${codeBlock}

            <!-- Options -->
            <div class="quiz-options-container" style="margin-top: 15px;">
                ${optionsHtml}
            </div>

            <!-- Explanation Callout -->
            <div class="quiz-explain" id="quizExplain" style="display: none; margin-top: 18px; background: rgba(245, 197, 24, 0.05); border: 1px solid rgba(245, 197, 24, 0.2); border-radius: 8px; padding: 14px; font-size: 14.5px; line-height: 1.6; color: var(--ink-soft);">
                <strong style="color: var(--gold);">💡 הסבר:</strong> ${qObj.explain}
            </div>

            <!-- Next Button -->
            <div style="margin-top: 20px; text-align: left; display:flex; justify-content:space-between; align-items:center;">
                <button onclick="initQuiz()" style="background:none; border:1px solid var(--line); border-radius:6px; color:var(--ink-soft); padding:8px 15px; font-size:13.5px; cursor:pointer; font-weight:bold; transition:0.15s;">
                    ❌ צא מהמבחן
                </button>
                <button id="nextBtn" onclick="nextQuizQuestion()" style="display:none; background:var(--gold); color:#11131a; border:none; border-radius:6px; padding:8px 20px; font-size:14px; font-weight:bold; cursor:pointer; transition:0.15s;">
                    ${currentQuestionIndex === currentExamQuestions.length - 1 ? 'סיים מבחן 🏁' : 'השאלה הבאה ➔'}
                </button>
            </div>
        </div>
    `;
}

function selectQuizOption(optIndex) {
    if (currentExamAnswers[currentQuestionIndex] !== null) return; // Answered already
    
    currentExamAnswers[currentQuestionIndex] = optIndex;
    const qObj = currentExamQuestions[currentQuestionIndex];
    const correct = qObj.correct;

    if (optIndex === correct) {
        currentExamScore++;
    }

    // Color options
    qObj.opts.forEach((opt, idx) => {
        const btn = document.getElementById(`opt-${idx}`);
        if (btn) {
            btn.style.cursor = 'not-allowed';
            if (idx === correct) {
                btn.style.background = 'rgba(74, 222, 128, 0.12)';
                btn.style.borderColor = '#10b981';
                btn.style.color = '#bbf7d0';
                btn.innerHTML += ' <span style="color: #10b981; float:left;">✓</span>';
            } else if (idx === optIndex) {
                btn.style.background = 'rgba(239, 68, 68, 0.1)';
                btn.style.borderColor = '#ef4444';
                btn.style.color = '#fca5a5';
                btn.innerHTML += ' <span style="color: #ef4444; float:left;">✗</span>';
            }
        }
    });

    // Reveal explanation and Next button
    const explain = document.getElementById('quizExplain');
    if (explain) explain.style.display = 'block';
    
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.style.display = 'block';
}

function nextQuizQuestion() {
    if (currentQuestionIndex < currentExamQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuizQuestion();
    } else {
        finishExam();
    }
}

function finishExam() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;

    // Save Score
    const savedScores = JSON.parse(localStorage.getItem('natan_study_scores') || '{}');
    const previousHigh = savedScores[currentExamTopic] || 0;
    
    let isNewHigh = false;
    if (currentExamScore > previousHigh) {
        savedScores[currentExamTopic] = currentExamScore;
        localStorage.setItem('natan_study_scores', JSON.stringify(savedScores));
        isNewHigh = true;
    }

    const pct = (currentExamScore / currentExamQuestions.length) * 100;
    let feedbackColor = '#ef4444'; // red
    let feedbackTitle = 'צריך ללמוד עוד קצת! 📚';
    if (pct >= 80) {
        feedbackColor = '#10b981'; // green
        feedbackTitle = 'מצוין! שליטה פנטסטית בחומר! 🏆';
    } else if (pct >= 50) {
        feedbackColor = '#f5c518'; // yellow
        feedbackTitle = 'עובר! יש מקום לשיפור. ✍️';
    }

    quizContainer.innerHTML = `
        <div style="background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 25px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
            <div style="font-size: 60px; margin-bottom: 15px;">🎉</div>
            <h2 style="color: ${feedbackColor}; font-family: 'Rubik', sans-serif; font-weight: 800; margin-bottom: 10px;">
                ${feedbackTitle}
            </h2>
            <p style="font-size: 16.5px; color: var(--ink-soft); margin-bottom: 20px;">
                סיימת את המבחן בנושא <strong>${examTopics[currentExamTopic].name}</strong>
            </p>
            
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--line); border-radius: 10px; padding: 20px; max-width: 320px; margin: 0 auto 25px;">
                <div style="font-size: 14px; color: var(--ink-faint); margin-bottom: 5px;">הציון שלך במבחן הנוכחי:</div>
                <div style="font-size: 38px; font-weight: 900; color: var(--gold);">${currentExamScore} / 14</div>
                <div style="font-size: 16px; font-weight: bold; color: var(--ink-soft); margin-top: 5px;">(${pct.toFixed(0)}%)</div>
            </div>

            ${isNewHigh ? `
                <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 8px; padding: 10px 15px; color: #10b981; font-weight: bold; font-size: 14px; display: inline-block; margin-bottom: 20px;">
                    🔥 שיא חדש נשמר במערכת!
                </div>
            ` : `
                <div style="font-size:13.5px; color:var(--ink-faint); margin-bottom:20px;">
                    (הציון הגבוה ביותר השמור: ${previousHigh}/14)
                </div>
            `}

            <div style="display:flex; justify-content:center; gap: 15px;">
                <button onclick="startExam('${currentExamTopic}')" style="background:var(--surface-2); border:1px solid var(--line); color:var(--ink); border-radius:8px; padding:10px 20px; font-weight:bold; cursor:pointer; transition:0.15s;">
                    🔄 נסה שוב
                </button>
                <button onclick="initQuiz()" style="background:var(--gold); color:#11131a; border:none; border-radius:8px; padding:10px 20px; font-weight:bold; cursor:pointer; transition:0.15s;">
                    📋 חזור ללוח המבחנים
                </button>
            </div>
        </div>
    `;
}

function resetQuizScores() {
    if (confirm('האם אתה בטוח שברצונך לאפס את כל היסטוריית הציונים של המבחנים?')) {
        localStorage.removeItem('natan_study_scores');
        initQuiz();
    }
}


// --- Tech Dictionary Checkbox System ---
let knownTechWords = JSON.parse(localStorage.getItem('knownTechWords')) || {};

window.toggleTechWord = function(wordId, isChecked) {
    knownTechWords[wordId] = isChecked;
    localStorage.setItem('knownTechWords', JSON.stringify(knownTechWords));
}

window.initTechEnglishCheckboxes = function() {
    const checkboxes = document.querySelectorAll('.tech-word-cb');
    checkboxes.forEach(cb => {
        const wordId = cb.id.replace('cb-', '');
        if (knownTechWords[wordId]) {
            cb.checked = true;
        }
    });
}
