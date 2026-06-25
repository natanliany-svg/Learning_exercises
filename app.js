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
                    
                    <div class="ide-file" onclick="switchIdeFile('utils.js')"><span style="color:#f7df1e">JS</span> utils.js</div>
                    <div class="ide-file" onclick="switchIdeFile('bankFactory.js')"><span style="color:#f7df1e">JS</span> bankFactory.js</div>
                    <div class="ide-file" onclick="switchIdeFile('bankManager.js')"><span style="color:#f7df1e">JS</span> bankManager.js</div>
                    <div class="ide-file active" onclick="switchIdeFile('main.js')"><span style="color:#f7df1e">JS</span> main.js</div>
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
        setTimeout(() => switchIdeFile('main.js'), 50);
    }
}

function closeModal() {
    document.getElementById('fullPageModal').classList.remove('open');
    document.body.style.overflow = 'auto';
}

// --- IDE Logic ---
const fileContents = {
    'utils.js': `<span class="comment">// 1. שלב ראשון: קובץ כלי עזר (Utilities)</span>
<span class="keyword">export const</span> formatCurrency = (amount) => \`$\${amount.toFixed(2)}\`;
<span class="keyword">export const</span> isPositive = (num) => num > <span class="number">0</span>;`,

    'bankFactory.js': `<span class="comment">// 2. שלב שני: יצירת המבנה הבסיסי (Factory)</span>
<span class="keyword">import</span> { isPositive } <span class="keyword">from</span> <span class="string">'./utils.js'</span>;

<span class="keyword">export function</span> createAccount() {
    <span class="keyword">let</span> balance = <span class="number">0</span>;

    <span class="keyword">return</span> {
        deposit(amount) {
            <span class="keyword">if</span> (isPositive(amount)) {
                balance += amount;
            }
            <span class="keyword">return</span> balance;
        },
        withdraw(amount) {
            <span class="keyword">if</span> (isPositive(amount) && amount <= balance) {
                balance -= amount;
            } <span class="keyword">else</span> {
                console.log(<span class="string">"שגיאה: אין מספיק יתרה או סכום שלילי!"</span>);
            }
            <span class="keyword">return</span> balance;
        },
        getBalance() {
            <span class="keyword">return</span> balance;
        }
    };
}

<span class="keyword">export function</span> createCustomer(name, id) {
    <span class="keyword">return</span> {
        name,
        id,
        account: createAccount()
    };
}`,

    'bankManager.js': `<span class="comment">// 3. שלב שלישי: מנהל הבנק - מנהל את כל הלקוחות</span>
<span class="keyword">import</span> { createCustomer } <span class="keyword">from</span> <span class="string">'./bankFactory.js'</span>;

<span class="keyword">export const</span> bankManager = {
    customers: [],
    
    addCustomer(name, id) {
        <span class="keyword">const</span> newCustomer = createCustomer(name, id);
        <span class="keyword">this</span>.customers.push(newCustomer);
        <span class="keyword">return</span> newCustomer;
    },
    
    findCustomer(id) {
        <span class="keyword">return this</span>.customers.find(c => c.id === id);
    }
};`,

    'main.js': `<span class="comment">// 4. שלב רביעי ואחרון: ממשק המשתמש הראשי</span>
<span class="keyword">import</span> { bankManager } <span class="keyword">from</span> <span class="string">'./bankManager.js'</span>;
<span class="keyword">import</span> { formatCurrency } <span class="keyword">from</span> <span class="string">'./utils.js'</span>;
<span class="keyword">import</span> readlineSync <span class="keyword">from</span> <span class="string">'readline-sync'</span>;

<span class="keyword">while</span> (<span class="keyword">true</span>) {
    console.log(<span class="string">"\\n--- מערכת בנק ---"</span>);
    console.log(<span class="string">"1. הוסף לקוח"</span>);
    console.log(<span class="string">"2. הפקדת כסף"</span>);
    console.log(<span class="string">"3. יציאה"</span>);
    
    <span class="keyword">const</span> choice = readlineSync.question(<span class="string">"בחר: "</span>);
    
    <span class="keyword">if</span> (choice === <span class="string">'3'</span>) <span class="keyword">break</span>;
    
    <span class="keyword">if</span> (choice === <span class="string">'1'</span>) {
        <span class="keyword">const</span> name = readlineSync.question(<span class="string">"שם: "</span>);
        <span class="keyword">const</span> id = readlineSync.question(<span class="string">"ת.ז: "</span>);
        bankManager.addCustomer(name, id);
        console.log(<span class="string">"לקוח נוצר!"</span>);
    } <span class="keyword">else if</span> (choice === <span class="string">'2'</span>) {
        <span class="keyword">const</span> id = readlineSync.question(<span class="string">"ת.ז: "</span>);
        <span class="keyword">const</span> customer = bankManager.findCustomer(id);
        <span class="keyword">if</span> (customer) {
            <span class="keyword">const</span> amount = Number(readlineSync.question(<span class="string">"סכום: "</span>));
            customer.account.deposit(amount);
            console.log(<span class="string">"יתרה: "</span> + formatCurrency(customer.account.getBalance()));
        } <span class="keyword">else</span> {
            console.log(<span class="string">"לא נמצא."</span>);
        }
    }
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
        "פונקציה ראשונה: מקבלת מספר ומוסיפה לו סימן של דולר ונקודה עשרונית. 'export' אומר: 'אני מרשה לקבצים אחרים להשתמש בזה'.",
        "פונקציה שניה: בודקת האם מספר הוא גדול מאפס. זה יעזור לנו למנוע הפקדות של סכום שלילי."
    ],
    'bankFactory.js': [
        "אחרי שיש לנו כלים, אנחנו צריכים 'מפעל' (Factory). למה קובץ נפרד? כי פה אנחנו מגדירים 'איך נראה חשבון' ו'איך נראה לקוח', מבלי לערבב את זה עם ניהול של אלפי לקוחות. הפרדת תפקידים!",
        "כאן אנחנו מייבאים את פונקציית העזר שלנו (isPositive) מתוך קובץ ה-utils.js. הקשר מתחיל להירקם.",
        "",
        "מתחילים: יצירת 'מפעל' לחשבונות בנק.",
        "המשתנה 'balance' הוא לב הסיפור שלנו. הוא מוגדר בתוך הפונקציה (Closure) ולכן אף אחד בעולם לא יכול לגשת אליו ישירות ולשנות אותו. ככה שומרים על אבטחה בבנק!",
        "",
        "אנחנו מחזירים 'אובייקט'. האובייקט הזה הוא בעצם החשבון עצמו, ויש לו 'כפתורים' (מתודות) שבעזרתם אפשר לתקשר איתו.",
        "כפתור ראשון: הפקדה. מקבל סכום.",
        "אנחנו משתמשים בפונקציית העזר isPositive. אם הסכום חיובי, ורק אם הוא חיובי...",
        "אנחנו מוסיפים את הסכום ליתרה הסודית שלנו.",
        "",
        "ומחזירים את היתרה המעודכנת.",
        "",
        "כפתור שני: משיכה. מקבל סכום.",
        "תנאי כפול! גם מוודאים שהסכום חיובי, וגם שהסכום המבוקש קטן או שווה ליתרה הנוכחית (אי אפשר למשוך יותר ממה שיש!).",
        "אם הכל תקין, מחסרים מהיתרה.",
        "אחרת (אם התנאי לא התקיים)...",
        "מדפיסים הודעת שגיאה ברורה. פשוט, נקי, ובלי לזרוק שגיאות שקורסות (Errors).",
        "",
        "מחזירים את היתרה (בין אם משכנו ובין אם לא).",
        "",
        "כפתור שלישי: בדיקת יתרה. הדרך היחידה 'להציץ' לתוך היתרה הסודית שלנו מבלי לשנות אותה.",
        "פשוט מחזיר את המספר.",
        "",
        "",
        "",
        "עכשיו כשיש חשבון, אנחנו צריכים 'מפעל' שני - יצירת לקוח. פונקציה שמקבלת שם ותעודת זהות.",
        "מחזירה אובייקט שמייצג לקוח אמיתי:",
        "השם שלו...",
        "תעודת הזהות שלו...",
        "וכאן הקסם הגדול: ברגע שלקוח נוצר, אנחנו מפעילים אוטומטית את createAccount(), וככה הלקוח מקבל מיד חשבון בנק פרטי משלו, מחובר אליו ישירות!",
        ""
    ],
    'bankManager.js': [
        "השלב השלישי: יש לנו מפעל, אבל אנחנו צריכים 'מנהל'. מנהל הבנק הוא זה שיחזיק את כל הלקוחות במקום אחד. למה קובץ נפרד? כי ה-Factory רק מייצר, וה-Manager רק מנהל. סדר וארגון מופתי.",
        "כדי שהמנהל יוכל להוסיף לקוחות, הוא חייב לייבא את פונקציית הייצור (createCustomer) מהקובץ הקודם שבנינו.",
        "",
        "אנחנו מייצאים אובייקט אחד יחיד שנקרא bankManager. הוא המוח של המערכת.",
        "בתוכו יש 'מערך' (רשימה) שנקרא customers. כרגע הוא ריק, אבל פה יישמרו כל הלקוחות.",
        "",
        "פעולה ראשונה של המנהל: הוספת לקוח חדש. מקבלת שם ותעודת זהות.",
        "המנהל לוקח את השם והת.ז, מוסר אותם ל-Factory (שייבאנו קודם), ומקבל חזרה אובייקט לקוח מוכן עם חשבון בנק!",
        "המנהל שומר את הלקוח החדש בתוך הרשימה שלו (push).",
        "ומחזיר לנו את הלקוח (למקרה שנרצה להשתמש בו מיד).",
        "",
        "",
        "פעולה שניה: מציאת לקוח קיים לפי תעודת זהות. חובה כדי שנוכל להפקיד לו כסף אחר כך.",
        "אנחנו עוברים על רשימת הלקוחות שלנו (find), ומחפשים לקוח שה-id שלו שווה בדיוק ל-id שחיפשנו. מחזירים אותו אם מצאנו.",
        ""
    ],
    'main.js': [
        "השלב הרביעי והאחרון: חלון הראווה שלנו (Main). פה המשתמש מפעיל את הכל. למה קובץ נפרד? כי פה אין 'לוגיקה בנקאית', יש רק ממשק - תפריטים והדפסות.",
        "אנחנו מייבאים את המנהל שבנינו בשלב הקודם.",
        "מייבאים את כלי העזר formatCurrency מהקובץ הראשון הראשון שבנינו (utils), כדי להדפיס כסף יפה.",
        "ומייבאים את readline-sync - ספריה חיצונית שתאפשר לנו לשאול את המשתמש שאלות.",
        "",
        "מתחילים בלולאת 'while (true)' אינסופית. היא תרוץ לנצח עד שהמשתמש יבחר לצאת.",
        "מדפיסים כותרת...",
        "אפשרות 1 בתפריט...",
        "אפשרות 2...",
        "אפשרות ליציאה...",
        "",
        "משתמשים ב-question מתוך readline-sync כדי לעצור את התוכנית, להציג שאלה למשתמש, ולחכות שיקליד תשובה. התשובה נשמרת ב-choice.",
        "",
        "בודקים: אם המשתמש בחר '3' - אנחנו 'שוברים' (break) את הלולאה האינסופית, והתוכנית מסתיימת.",
        "",
        "אם המשתמש בחר '1' (הוספת לקוח)...",
        "שואלים אותו מה השם (קלט 1)...",
        "שואלים אותו מה התעודת זהות (קלט 2)...",
        "קוראים למנהל שלנו (bankManager) ומבקשים ממנו להוסיף את הלקוח עם הפרטים שקלטנו. הכל קורה מאחורי הקלעים בקבצים האחרים!",
        "ומדפיסים הודעת הצלחה שמחה.",
        "אחרת, אם בחר '2' (הפקדה)...",
        "שואלים מה תעודת הזהות של הלקוח שרוצה להפקיד...",
        "מבקשים מהמנהל לחפש את הלקוח הספציפי הזה. הוא יחזיר אובייקט לקוח (או שום דבר אם לא מצא).",
        "אם מצאנו לקוח כזה...",
        "שואלים כמה כסף להפקיד, ועושים 'Number' כדי להמיר את הטקסט למספר אמיתי.",
        "ניגשים לחשבון של הלקוח שמצאנו (customer.account), ומפעילים את כפתור ההפקדה שלו (deposit) עם הסכום.",
        "מדפיסים הודעת הצלחה. שימו לב ליופי: אנחנו משתמשים ב-formatCurrency (מה-utils!) על היתרה החדשה, כדי להדפיס '$50.00' במקום סתם '50'.",
        "אבל, אם לא מצאנו את הלקוח קודם לכן...",
        "אנחנו פשוט מדפיסים שגיאה מובנת. הלולאה תתחיל מהתחלה מיד אחר כך.",
        "",
        ""
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
