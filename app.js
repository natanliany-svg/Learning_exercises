// --- Steigen On The Go Mode ---
let isSteigenMode = false;
function toggleSteigenMode() {
    isSteigenMode = !isSteigenMode;
    if (isSteigenMode) {
        document.body.classList.add('steigen-mode');
        document.querySelector('.island-text').innerText = 'מצב רגיל';
    } else {
        document.body.classList.add('removing-steigen');
        setTimeout(() => {
            document.body.classList.remove('steigen-mode', 'removing-steigen');
            document.querySelector('.island-text').innerText = 'שטייגען בדרכים';
        }, 500);
    }
}

function scrollToSection(id) {
    const sectionMap = {
        'basics': 'section-basics', 'loops': 'section-basics', 'functions': 'section-basics',
        'closures': 'section-advanced', 'factories': 'section-advanced', 'modules': 'section-advanced', 'destructuring': 'section-advanced',
        'dom': 'section-web', 'async': 'section-web', 'fetch': 'section-web',
        'arrayMethods': 'section-methods', 'stringMethods': 'section-methods', 'objectMethods': 'section-methods',
        'syntaxWarehouse': 'section-tools', 'pythonVsJs': 'section-tools', 'ironRules': 'section-tools', 'keyboard': 'section-tools', 'libraries': 'section-tools',
        'bank': 'section-projects'
    };
    
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => {
        const onClickAttr = el.getAttribute('onclick');
        if (onClickAttr && onClickAttr.includes(`'${id}'`)) {
            el.classList.add('active');
        }
    });
    
    const targetId = sectionMap[id] || id;
    const targetElement = document.getElementById(targetId);
    if(targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// --- Bank IDE Data ---
const bankIdeData = {
    title: "Bank Account Simulator 🏦 (IDE Mode)",
    content: `
        <div class="ide-container">
            <div class="ide-top">
                <div class="ide-sidebar">
                    <div class="ide-sidebar-header">BANK_ACCOUNT... 📄 📁 🔄 ⚙</div>
                    <div class="ide-folder" onclick="toggleFolder('folder-git', this)">▸ .git</div>
                    <div id="folder-git" style="display:none;"></div>
                    
                    <div class="ide-folder" onclick="toggleFolder('folder-modules', this)">▾ node_modules</div>
                    <div id="folder-modules">
                        <div class="ide-folder indented" onclick="toggleFolder('folder-readline', this)">▸ readline-sync</div>
                        <div id="folder-readline" style="display:none;"></div>
                        <div class="ide-file indented"><span style="color:#34d399">{}</span> .package-lock.json</div>
                    </div>
                    
                                        <div class="ide-file active" onclick="switchIdeFile('README.md')"><span style="color:#60a5fa">📘</span> הסבר הפרויקט</div>
                    <div class="ide-file" onclick="switchIdeFile('utils.js')"><span style="color:#f7df1e">JS</span> utils.js</div>
                    <div class="ide-file" onclick="switchIdeFile('bankFactory.js')"><span style="color:#f7df1e">JS</span> bankFactory.js</div>
                    <div class="ide-file" onclick="switchIdeFile('bankManager.js')"><span style="color:#f7df1e">JS</span> bankManager.js</div>
                    <div class="ide-file" onclick="switchIdeFile('main.js')"><span style="color:#f7df1e">JS</span> main.js</div>
                    <div class="ide-file" onclick="switchIdeFile('package-lock.json')"><span style="color:#34d399">{}</span> package-lock.json</div>
                    <div class="ide-file" onclick="switchIdeFile('package.json')"><span style="color:#34d399">{}</span> package.json</div>
                </div>
                
                <div class="ide-editor" id="ideEditorContent">
                    <!-- Dynamic content -->
                </div>
            </div>
            <div class="ide-terminal">
                <div class="term-header"><span>bash - bankFactory</span></div>
                <div class="term-output" id="terminalOutput">
                    <p>> המערכת מאותחלת. הקלד 'help' כדי לראות פקודות אפשריות.</p>
                </div>
                <div class="term-input-wrapper">
                    <span class="term-prompt">natan@ubuntu:~/bank$</span>
                    <input type="text" class="term-input" id="terminalInput" autocomplete="off" spellcheck="false" onkeypress="handleTerminal(event)">
                </div>
            </div>
        </div>
    `
};

// --- Merge Content ---
const modalData = {
    ...contentPart1,
    ...contentPart2,
    ...contentPart3,
    bank: bankIdeData
};

// --- Modal Logic ---
function openModal(topic) {
    const data = modalData[topic];
    if (!data) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${data.title}</h2>
        </div>
        ${data.content}
    `;

    document.getElementById('fullPageModal').classList.add('open');
    document.body.style.overflow = 'hidden';
    
    if (topic === 'bank') {
        setTimeout(() => switchIdeFile('README.md'), 50);
    }
}

function closeModal() {
    document.getElementById('fullPageModal').classList.remove('open');
    document.body.style.overflow = 'auto';
}

// --- IDE Logic ---
const fileContents = {
    'README.md': `
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
`,
    'utils.js': `<span class="comment">// 1. שלב ראשון: קובץ כלי עזר ותפריט (Utilities)</span>
<span class="keyword">import</span> rl <span class="keyword">from</span> <span class="string">'readline-sync'</span>;

<span class="keyword">export const</span> formatCurrency = (amount) => \`$\${amount.toFixed(2)}\`;

<span class="keyword">export function</span> menu() {
    console.log(\`
=====================תפריט מערכת ניהול החשבון=====================
1. הוספת לקוח חדש   (קלט נדרש : שם, סוג חשבון, יתרה התחלתית)    
2. הצגת רשימת כלל לקוחות הבנק                                  
3. הפקדת כסף   (קלט נדרש : מזהה יחודי , סכום)                    
4. משיכת כסף   (קלט נדרש : מזהה יחודי , סכום)                    
5. חיפוש לקוח  (קלט נדרש : מזהה ייחודי או שם)                    
6. סגירת חשבון  (קלט נדרש : מזהה ייחודי)                         
7. הצגת סטטיסטיקות                                              
8. יציאה                                                           
===================================================================\`);
    <span class="keyword">return</span> rl.questionInt(<span class="string">'     =================Choose (1-8)!=================\n'</span>);
}`,

    'bankFactory.js': `<span class="comment">// 2. שלב שני: יצירת המבנה הבסיסי (Factory)</span>
<span class="keyword">export function</span> createAccount(type, initialBalance) {
    <span class="keyword">let</span> balance = initialBalance;
    <span class="keyword">let</span> isActive = <span class="keyword">true</span>;

    <span class="keyword">return</span> {
        deposit(amount) {
            <span class="keyword">if</span> (!isActive) {
                console.log(<span class="string">"החשבון סגור!"</span>);
                <span class="keyword">return</span>;
            }
            <span class="keyword">if</span> (amount > <span class="number">0</span>) balance += amount;
        },
        withdraw(amount) {
            <span class="keyword">if</span> (!isActive) {
                console.log(<span class="string">"החשבון סגור!"</span>);
                <span class="keyword">return</span>;
            }
            <span class="keyword">if</span> (amount > <span class="number">0</span> && amount <= balance) {
                balance -= amount;
            } <span class="keyword">else</span> {
                console.log(<span class="string">"אין מספיק יתרה!"</span>);
            }
        },
        getBalance() { <span class="keyword">return</span> balance; },
        getType() { <span class="keyword">return</span> type; },
        closeAccount() { isActive = <span class="keyword">false</span>; },
        getIsActive() { <span class="keyword">return</span> isActive; }
    };
}

<span class="keyword">export function</span> createCustomer(name, id, accountType, initialBalance) {
    <span class="keyword">return</span> {
        name,
        id,
        account: createAccount(accountType, initialBalance)
    };
}`,

    'bankManager.js': `<span class="comment">// 3. שלב שלישי: מנהל הבנק - מנהל את כל הלקוחות</span>
<span class="keyword">import</span> { createCustomer } <span class="keyword">from</span> <span class="string">'./bankFactory.js'</span>;

<span class="keyword">export const</span> bankManager = {
    customers: [],
    
    addCustomer(name, id, type, balance) {
        <span class="keyword">const</span> customer = createCustomer(name, id, type, balance);
        <span class="keyword">this</span>.customers.push(customer);
        <span class="keyword">return</span> customer;
    },
    
    getAllCustomers() {
        <span class="keyword">return this</span>.customers;
    },
    
    findCustomer(query) {
        <span class="keyword">return this</span>.customers.find(c => c.id == query || c.name === query);
    },
    
    closeCustomerAccount(id) {
        <span class="keyword">const</span> customer = <span class="keyword">this</span>.findCustomer(id);
        <span class="keyword">if</span> (customer) customer.account.closeAccount();
    },
    
    getStats() {
        <span class="keyword">let</span> total = <span class="number">0</span>;
        <span class="keyword">let</span> activeCount = <span class="number">0</span>;
        <span class="keyword">for</span> (<span class="keyword">let</span> c <span class="keyword">of this</span>.customers) {
            <span class="keyword">if</span> (c.account.getIsActive()) {
                total += c.account.getBalance();
                activeCount++;
            }
        }
        <span class="keyword">return</span> { total, activeCount };
    }
};`,

    'main.js': `<span class="comment">// 4. שלב רביעי ואחרון: המנוע שמחבר הכל</span>
<span class="keyword">import</span> { bankManager } <span class="keyword">from</span> <span class="string">'./bankManager.js'</span>;
<span class="keyword">import</span> { menu, formatCurrency } <span class="keyword">from</span> <span class="string">'./utils.js'</span>;
<span class="keyword">import</span> rl <span class="keyword">from</span> <span class="string">'readline-sync'</span>;

<span class="keyword">function</span> handle_menu(choice) {
    <span class="keyword">if</span> (choice === <span class="number">8</span>) {
        console.log(<span class="string">"להתראות!"</span>);
        process.exit(<span class="number">0</span>);
    }
    <span class="keyword">else if</span> (choice === <span class="number">1</span>) {
        <span class="keyword">const</span> name = rl.question(<span class="string">"שם: "</span>);
        <span class="keyword">const</span> type = rl.question(<span class="string">"סוג חשבון: "</span>);
        <span class="keyword">const</span> bal = rl.questionFloat(<span class="string">"יתרה התחלתית: "</span>);
        <span class="keyword">const</span> id = Date.now().toString();
        bankManager.addCustomer(name, id, type, bal);
        console.log(<span class="string">"לקוח נוצר! המזהה שלו: "</span> + id);
    }
    <span class="keyword">else if</span> (choice === <span class="number">2</span>) {
        console.log(bankManager.getAllCustomers());
    }
    <span class="keyword">else if</span> (choice === <span class="number">3</span>) {
        <span class="keyword">const</span> id = rl.question(<span class="string">"מזהה: "</span>);
        <span class="keyword">const</span> c = bankManager.findCustomer(id);
        <span class="keyword">if</span> (c) c.account.deposit(rl.questionFloat(<span class="string">"סכום: "</span>));
    }
    <span class="keyword">else if</span> (choice === <span class="number">4</span>) {
        <span class="keyword">const</span> id = rl.question(<span class="string">"מזהה: "</span>);
        <span class="keyword">const</span> c = bankManager.findCustomer(id);
        <span class="keyword">if</span> (c) c.account.withdraw(rl.questionFloat(<span class="string">"סכום: "</span>));
    }
    <span class="keyword">else if</span> (choice === <span class="number">5</span>) {
        <span class="keyword">const</span> query = rl.question(<span class="string">"מזהה או שם: "</span>);
        console.log(bankManager.findCustomer(query) || <span class="string">"לא נמצא"</span>);
    }
    <span class="keyword">else if</span> (choice === <span class="number">6</span>) {
        <span class="keyword">const</span> id = rl.question(<span class="string">"מזהה: "</span>);
        bankManager.closeCustomerAccount(id);
        console.log(<span class="string">"חשבון נסגר."</span>);
    }
    <span class="keyword">else if</span> (choice === <span class="number">7</span>) {
        <span class="keyword">const</span> stats = bankManager.getStats();
        console.log(\`כסף בבנק: \${formatCurrency(stats.total)}, חשבונות פעילים: \${stats.activeCount}\`);
    }
}

<span class="keyword">while</span> (<span class="keyword">true</span>) {
    <span class="keyword">const</span> choice = menu();
    handle_menu(choice);
}`,
    'package.json': `{
  <span class="string">"type"</span>: <span class="string">"module"</span>,
  <span class="string">"dependencies"</span>: {
    <span class="string">"readline-sync"</span>: <span class="string">"^1.4.10"</span>
  }
}`,
    'package-lock.json': `{}`
};

const storyMap = {
    'utils.js': [
        "הסיפור שלנו מתחיל מהבסיס הקטן ביותר. לפני שבונים בנק, צריך 'כלי עבודה' (Utils). למה התחלנו פה? כי אלו פונקציות קטנות ועצמאיות שלא תלויות בכלום, ונוכל להשתמש בהן בכל מקום בפרויקט.",
        "מייבאים את ספריית readline-sync כי היא זו שתאפשר לנו לעצור ולהמתין לבחירת המשתמש בתפריט.",
        "",
        "פונקציה קטנטנה שלוקחת מספר (למשל 5) והופכת אותו לטקסט יפה עם דולר ונקודה עשרונית ($5.00). המילה export אומרת שקבצים אחרים יוכלו להשתמש בה.",
        "",
        "וכאן אנחנו מגדירים את ה-menu! למה פה? כי תפריט הוא בסך הכל כלי שמציג טקסט למשתמש ואוסף את הבחירה שלו, הוא לא 'לוגיקה בנקאית'.",
        "מדפיסים בעזרת console.log את התפריט הענק והיפהפה שבנית.",
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
        "אחרי שהתפריט הודפס, משתמשים בפונקציה מיוחדת (questionInt) שקולטת אך ורק מספר מהמשתמש. ברגע שהמשתמש מקליד, הפונקציה מיד מחזירה (return) את המספר הזה חזרה למי שקרא לה."
    ],
    'bankFactory.js': [
        "התחנה השניה בסיפור: יצירת ה-'תבניות' שלנו (Factory). עכשיו שיש לנו תפריט, אנחנו צריכים להגדיר מה זה בכלל חשבון בנק. למה קובץ נפרד? כי פה אנחנו מגדירים 'איך נראה חשבון' בלי לערבב עם שאר הפרויקט.",
        "פונקציה שמייצרת חשבון. הפעם היא מקבלת סוג חשבון ויתרה התחלתית שנקבעו דרך התפריט.",
        "המשתנים הללו נשמרים בסוד בתוך הפונקציה (Closure). הוספנו גם משתנה isActive כדי שנוכל לסגור חשבונות בלי למחוק אותם לגמרי מההיסטוריה.",
        "",
        "מחזירים אובייקט שמייצג את החשבון עצמו, עם כל הפעולות המותרות:",
        "הפקדה: פעולה ראשונה ופשוטה.",
        "רגע, לפני שמפקידים חייבים לבדוק: האם החשבון פעיל (isActive)? הפקודת '!isActive' אומרת 'אם ה-isActive הוא הפוך מ-true, כלומר false'.",
        "אם סגור - מדפיסים שגיאה ויוצאים (return מסיים את הפעולה מיד). פשוט ונקי.",
        "",
        "אם החשבון פתוח, והסכום חיובי - מוסיפים ליתרה. זה הכל.",
        "",
        "משיכה: אותה לוגיקה בדיוק.",
        "בודקים שהחשבון פתוח, אחרת יוצאים.",
        "",
        "",
        "ואז מוודאים שיש לנו מספיק כסף (הסכום קטן או שווה ליתרה), ושאנחנו לא מושכים מינוס.",
        "אם הכל תקין, מורידים מהיתרה. ואם לא...",
        "אומרים יפה שאין מספיק כסף. זהו.",
        "",
        "",
        "פעולות 'שליפה' (Getters): היות והמשתנים הם סודיים, זו הדרך היחידה להוציא אותם החוצה כדי להדפיס אותם אחר כך.",
        "",
        "הפעולה של סגירת החשבון! היא בסך הכל משנה את המשתנה הסודי מ-true ל-false. מאותו רגע, אי אפשר למשוך או להפקיד.",
        "",
        "",
        "",
        "עכשיו כשיש תבנית לחשבון, ניצור תבנית ללקוח. למה אותה פונקציה? כי לקוח מגיע עם חשבון בילט-אין.",
        "פונקציה שמקבלת את כל הפרטים שהוקלדו...",
        "מחזירה אובייקט שמייצג לקוח אמיתי:",
        "",
        "",
        "וכאן הקסם הגדול: אנחנו מפעילים אוטומטית את createAccount(), וככה הלקוח מקבל מיד חשבון בנק פרטי משלו שמקושר רק אליו!"
    ],
    'bankManager.js': [
        "התחנה השלישית: המנהל. התבניות יודעות לייצר לקוח בודד, אבל אנחנו צריכים לנהל בנק שלם! כאן נשמור את הרשימה (המערך) של כולם. סדר וארגון מופתי.",
        "מייבאים את הפונקציה שמייצרת לקוח בודד.",
        "",
        "בונים אובייקט אחד יחיד (const) שמנהל את הכל.",
        "זהו הלב של הבנק: מערך customers שבו נאחסן כל לקוח שנייצר.",
        "",
        "פעולת הוספה: כשהתפריט ישלח לנו פרטים (כולל סוג ויתרה)...",
        "המנהל יקרא ל-Factory (שייבאנו קודם), ימסור לו את הנתונים, ויקבל חזרה לקוח טרי.",
        "המנהל דוחף (push) את הלקוח למערך.",
        "ומחזיר אותו.",
        "",
        "",
        "פעולה פשוטה שמחזירה את כל המערך, כדי שנוכל להדפיס אותו באופציה 2 בתפריט.",
        "",
        "",
        "חיפוש חכם! המשתמש הקליד מזהה או שם? אנחנו משתמשים ב-find כדי לעבור על כל הלקוחות. ה-'||' אומר: 'אם המזהה שווה למה שחיפשו, או שהשם שווה למה שחיפשו'.",
        "",
        "",
        "סגירת חשבון (אופציה 6):",
        "המנהל משתמש בפונקציית החיפוש שלו עצמו (this.findCustomer) כדי למצוא את הלקוח.",
        "אם הלקוח אכן קיים, המנהל פונה לחשבון שלו (account) ומפעיל את פעולת closeAccount(). החשבון לא נמחק, רק ננעל!",
        "",
        "",
        "סטטיסטיקות (אופציה 7): אנחנו צריכים לחשב סכום כולל וכמות חשבונות פעילים.",
        "מכינים משתנה לסכום (total) ומונה לחשבונות פעילים (activeCount).",
        "לולאת for..of עוברת על כל הלקוחות בבנק (this.customers).",
        "לפני שמוסיפים כסף, בודקים אם החשבון בכלל פעיל! (getIsActive).",
        "אם הוא פעיל, מוסיפים את היתרה שלו לסכום הכולל, ומגדילים את מונה החשבונות ב-1.",
        "",
        "",
        "מחזירים אובייקט שמכיל את שני הנתונים כדי שנוכל להדפיס אותם בחלון הראשי."
    ],
    'main.js': [
        "והנה התחנה האחרונה! חלון הראווה. פה הכל מתחבר. למה התחלנו דווקא בסוף? כי בדרך כלל מתכננים קודם את הכלים (Utils), את הבסיס (Factory), את הניהול (Manager), ורק בסוף את הממשק.",
        "מייבאים את מנהל הבנק כדי שנוכל לפקוד עליו מה לעשות.",
        "מייבאים את התפריט ואת מעצב המטבע שבנינו בקובץ העזר.",
        "מייבאים את ספריית הקלט.",
        "",
        "כאן בנינו את הפונקציה handle_menu בדיוק כמו שעשית בקוד שלך! היא מקבלת את הבחירה (1-8).",
        "אם בחר 8 - סוגרים את הבאסטה. process.exit מסיים את ריצת התוכנית לחלוטין.",
        "",
        "",
        "אם בחר 1 (הוספת לקוח):",
        "קולטים שם...",
        "קולטים סוג חשבון...",
        "קולטים יתרה בעזרת questionFloat (שמאפשר מספר עשרוני כמו 50.5)...",
        "טריק מדהים: Date.now() מביא לנו את הזמן המדויק באלפיות שניה, וזה נותן לנו 'מזהה ייחודי' אוטומטי במקום לבקש מהמשתמש להמציא מזהה!",
        "מוסרים הכל למנהל (addCustomer) שמייצר ושומר במערך.",
        "מדפיסים הודעת הצלחה שמחה.",
        "",
        "אם בחר 2 (הצגת כלל הלקוחות) - פשוט מדפיסים את המערך שהמנהל מחזיר.",
        "",
        "",
        "אם בחר 3 (הפקדה) - קולטים מזהה...",
        "מבקשים מהמנהל לחפש את הלקוח...",
        "ואם מצאנו (if c), ניגשים לחשבון ומפעילים deposit. מיד קולטים את הסכום בשורה אחת!",
        "",
        "אם בחר 4 (משיכה) - אותה לוגיקה בדיוק, רק עם withdraw.",
        "",
        "",
        "",
        "",
        "אם בחר 5 (חיפוש לקוח) - קולטים טקסט שיכול להיות או שם או מזהה.",
        "המנהל מחפש (לפי שם או מזהה) ומדפיס. ה-'||' אומר: 'אם המנהל לא מצא כלום, תדפיס 'לא נמצא'.",
        "",
        "אם בחר 6 (סגירת חשבון) - שולחים למנהל את המזהה כדי שיסגור (יעביר ל-false).",
        "",
        "",
        "",
        "אם בחר 7 (סטטיסטיקות) - לוקחים מהמנהל את נתוני הסטטיסטיקה שחישב...",
        "ומדפיסים בצורה יפהפיה בעזרת formatCurrency מה-utils!",
        "",
        "",
        "",
        "וכאן הקסם קורה! לולאת while(true) אינסופית: אנחנו קוראים לפונקציה menu() שמדפיסה הכל ומחזירה לנו את הבחירה (1-8)...",
        "מיד מעבירים את הבחירה ל-handle_menu() שמבצעת, וחוזר חלילה עד יציאה!"
    ]
};


function switchIdeFile(filename) {
    document.querySelectorAll('.ide-file').forEach(el => {
        el.classList.remove('active');
        if (el.innerText.includes(filename)) {
            el.classList.add('active');
        }
    });

    const content = fileContents[filename] || '<span class="comment">// קובץ ריק</span>';
    const stories = storyMap[filename] || [];
    
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
        output.innerHTML += `<p><span class="term-prompt">natan@ubuntu:~/bank$</span> ${input}</p>`;
        
        const args = input.split(' ');
        const cmd = args[0].toLowerCase();
        
        if (cmd === 'help') {
            output.innerHTML += `<p>פקודות: add_customer [id] [name], deposit [id] [amount], show_all, clear</p>`;
        } else if (cmd === 'clear') {
            output.innerHTML = '';
        } else if (cmd === 'add_customer') {
            if (args.length < 3) {
                output.innerHTML += `<p class="term-error">Error: Missing arguments.</p>`;
            } else {
                customers.push({ id: args[1], name: args[2], balance: 0 });
                output.innerHTML += `<p class="term-success">Customer ${args[2]} added successfully.</p>`;
            }
        } else if (cmd === 'deposit') {
            const c = customers.find(x => x.id === args[1]);
            if (!c) {
                output.innerHTML += `<p class="term-error">Error: Customer not found.</p>`;
            } else {
                c.balance += Number(args[2] || 0);
                output.innerHTML += `<p class="term-success">Deposited ${args[2]} to ${c.name}. New balance: ${c.balance}</p>`;
            }
        } else if (cmd === 'show_all') {
            output.innerHTML += `<p>Total customers: ${customers.length}</p>`;
            customers.forEach(c => {
                output.innerHTML += `<p>- [${c.id}] ${c.name}: $${c.balance}</p>`;
            });
        } else if (cmd !== '') {
            output.innerHTML += `<p class="term-error">bash: ${cmd}: command not found</p>`;
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

// Initial setup (removed window.onload to prevent null errors)

// --- Sidebar Toggle ---
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('collapsed');
    document.querySelector('.content').classList.toggle('expanded');
}
