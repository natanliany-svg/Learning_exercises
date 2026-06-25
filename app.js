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
                    
                    <div class="ide-file active" onclick="switchIdeFile('bankFactory.js')"><span style="color:#f7df1e">JS</span> bankFactory.js</div>
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
        setTimeout(() => switchIdeFile('bankFactory.js'), 50);
    }
}

function closeModal() {
    document.getElementById('fullPageModal').classList.remove('open');
    document.body.style.overflow = 'auto';
}

// --- IDE Logic ---
const fileContents = {
    'bankFactory.js': `<span class="comment">// פונקציית Factory ליצירת חשבון</span>
<span class="keyword">export function</span> createAccount() {
    <span class="keyword">let</span> balance = <span class="number">0</span>;

    <span class="keyword">return</span> {
        deposit(amount) {
            balance += amount;
            <span class="keyword">return</span> balance;
        },
        withdraw(amount) {
            <span class="keyword">if</span> (amount <= balance) {
                balance -= amount;
            } <span class="keyword">else</span> {
                console.log(<span class="string">"אין מספיק יתרה בחשבון!"</span>);
            }
            <span class="keyword">return</span> balance;
        },
        getBalance() {
            <span class="keyword">return</span> balance;
        }
    };
}

<span class="comment">// פונקציית Factory ליצירת לקוח</span>
<span class="keyword">export function</span> createCustomer(name, id) {
    <span class="keyword">return</span> {
        name,
        id,
        account: createAccount()
    };
}`,
    'main.js': `<span class="keyword">import</span> { createCustomer } <span class="keyword">from</span> <span class="string">'./bankFactory.js'</span>;
<span class="keyword">import</span> readlineSync <span class="keyword">from</span> <span class="string">'readline-sync'</span>;

<span class="keyword">const</span> customers = [];

<span class="keyword">while</span> (<span class="keyword">true</span>) {
    console.log(<span class="string">"\\n--- מערכת בנק ---"</span>);
    console.log(<span class="string">"1. הוסף לקוח"</span>);
    console.log(<span class="string">"2. הפקדת כסף"</span>);
    console.log(<span class="string">"3. משיכת כסף"</span>);
    console.log(<span class="string">"4. יציאה"</span>);
    
    <span class="keyword">const</span> choice = readlineSync.question(<span class="string">"בחר אפשרות: "</span>);
    
    <span class="keyword">if</span> (choice === <span class="string">'4'</span>) {
        console.log(<span class="string">"להתראות!"</span>);
        <span class="keyword">break</span>;
    }
    
    <span class="keyword">if</span> (choice === <span class="string">'1'</span>) {
        <span class="keyword">const</span> name = readlineSync.question(<span class="string">"הכנס שם: "</span>);
        <span class="keyword">const</span> id = readlineSync.question(<span class="string">"הכנס ת.ז: "</span>);
        <span class="keyword">const</span> newCustomer = createCustomer(name, id);
        customers.push(newCustomer);
        console.log(<span class="string">"הלקוח נוצר בהצלחה!"</span>);
    }
    <span class="keyword">else if</span> (choice === <span class="string">'2'</span>) {
        <span class="keyword">const</span> id = readlineSync.question(<span class="string">"הכנס ת.ז: "</span>);
        <span class="keyword">const</span> customer = customers.find(c => c.id === id);
        <span class="keyword">if</span> (customer) {
            <span class="keyword">const</span> amount = Number(readlineSync.question(<span class="string">"סכום להפקדה: "</span>));
            customer.account.deposit(amount);
            console.log(<span class="string">"הופקד בהצלחה! יתרה נוכחית: "</span> + customer.account.getBalance());
        } <span class="keyword">else</span> {
            console.log(<span class="string">"לקוח לא נמצא."</span>);
        }
    }
    <span class="keyword">else if</span> (choice === <span class="string">'3'</span>) {
        <span class="keyword">const</span> id = readlineSync.question(<span class="string">"הכנס ת.ז: "</span>);
        <span class="keyword">const</span> customer = customers.find(c => c.id === id);
        <span class="keyword">if</span> (customer) {
            <span class="keyword">const</span> amount = Number(readlineSync.question(<span class="string">"סכום למשיכה: "</span>));
            customer.account.withdraw(amount);
            console.log(<span class="string">"יתרה נוכחית: "</span> + customer.account.getBalance());
        } <span class="keyword">else</span> {
            console.log(<span class="string">"לקוח לא נמצא."</span>);
        }
    }
}`,
    'package.json': `{
  <span class="string">"name"</span>: <span class="string">"bank-simulator"</span>,
  <span class="string">"version"</span>: <span class="string">"1.0.0"</span>,
  <span class="string">"type"</span>: <span class="string">"module"</span>,
  <span class="string">"dependencies"</span>: {
    <span class="string">"readline-sync"</span>: <span class="string">"^1.4.10"</span>
  }
}`,
    'package-lock.json': `<span class="comment">// קובץ אוטומטי המכיל את גרסאות העץ המדויקות של התלויות.</span>
<span class="comment">// אין לערוך קובץ זה ידנית!</span>
{
  <span class="string">"name"</span>: <span class="string">"bank-simulator"</span>,
  <span class="string">"lockfileVersion"</span>: <span class="number">3</span>,
  <span class="string">"requires"</span>: <span class="keyword">true</span>,
  <span class="string">"packages"</span>: { ... }
}`
};

const storyMap = {
    'bankFactory.js': [
        "מגדירים את פונקציית הייצור הראשונה: יצירת חשבון",
        "",
        "משתנה פרטי (Private Variable) השומר את היתרה. אי אפשר לגשת אליו מבחוץ!",
        "",
        "הפונקציה מחזירה אובייקט עם מתודות שמסוגלות לשנות את היתרה (Closure)",
        "מתודת הפקדה פשוטה",
        "מוסיפה כסף ליתרה",
        "",
        "",
        "מתודת משיכה פשוטה",
        "תנאי פשוט שמוודא שלא נמשוך יותר ממה שיש",
        "אם יש מספיק - מורידים מהיתרה",
        "",
        "אחרת מדפיסים שגיאה (פשוט וברור)",
        "",
        "",
        "",
        "מתודה להחזרת היתרה הנוכחית. זו הדרך היחידה לראות כמה כסף יש!",
        "",
        "",
        "",
        "",
        "פונקציית ייצור שניה: יצירת לקוח",
        "מקבלת שם ותעודת זהות",
        "מחזירה אובייקט שמכיל את פרטי הלקוח",
        "",
        "",
        "וכאן הקסם: היא מפעילה את יצירת החשבון ומצמידה אותו ללקוח באופן אוטומטי!",
        ""
    ],
    'main.js': [
        "מייבאים את פונקציית יצירת הלקוח מתוך קובץ הפקטורי",
        "מייבאים את ספריית קבלת הקלט מהמשתמש",
        "",
        "מערך גלובלי לאחסון כל הלקוחות שלנו",
        "",
        "לולאה אינסופית שמריצה את התפריט שוב ושוב",
        "הדפסת תפריט אפשרויות פשוט",
        "",
        "",
        "",
        "",
        "",
        "קבלת בחירת המשתמש באמצעות שאלה פשוטה",
        "",
        "תנאי יציאה מהלולאה במקרה של בחירה במספר 4",
        "",
        "",
        "",
        "",
        "אם נבחר 1 - קולטים פרטים",
        "",
        "",
        "יוצרים לקוח בעזרת הפקטורי, יחד עם החשבון שלו",
        "שומרים את הלקוח החדש במערך שלנו",
        "",
        "",
        "אם נבחר 2 - משיכת/הפקדת כסף",
        "קולטים תעודת זהות ומחפשים במערך",
        "שימוש בפונקציית החץ find כדי למצוא את הלקוח",
        "אם מצאנו את הלקוח במערך...",
        "קולטים את הסכום וממירים אותו למספר",
        "מפעילים את הפקדת הכסף על החשבון הפרטי של הלקוח!",
        "",
        "",
        "טיפול במקרה של לקוח לא קיים",
        "",
        "",
        "אם נבחר 3 - משיכת כסף (אותה לוגיקה כמו ההפקדה)",
        "",
        "",
        "",
        "",
        "מפעילים משיכה. החשבון עצמו כבר יבדוק אם יש מספיק יתרה",
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
