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
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
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
                    
                    <div class="ide-folder" onclick="toggleFolder('folder-factorys', this)">▾ Factorys</div>
                    <div id="folder-factorys">
                        <div class="ide-file indented" onclick="switchIdeFile('Account_Factory.js')"><span style="color:#f7df1e">JS</span> Account_Factory.js</div>
                        <div class="ide-file indented" onclick="switchIdeFile('Customer_Factory.js')"><span style="color:#f7df1e">JS</span> Customer_Factory.js</div>
                    </div>
                    
                    <div class="ide-folder" onclick="toggleFolder('folder-modules', this)">▾ node_modules</div>
                    <div id="folder-modules">
                        <div class="ide-folder indented" onclick="toggleFolder('folder-readline', this)">▸ readline-sync</div>
                        <div id="folder-readline" style="display:none;"></div>
                        <div class="ide-file indented"><span style="color:#34d399">{}</span> .package-lock.json</div>
                    </div>
                    
                    <div class="ide-file active" onclick="switchIdeFile('BankManager.js')"><span style="color:#f7df1e">JS</span> BankManager.js</div>
                    <div class="ide-file" onclick="switchIdeFile('main.js')"><span style="color:#f7df1e">JS</span> main.js</div>
                    <div class="ide-file" onclick="switchIdeFile('package-lock.json')"><span style="color:#34d399">{}</span> package-lock.json</div>
                    <div class="ide-file" onclick="switchIdeFile('package.json')"><span style="color:#34d399">{}</span> package.json</div>
                    <div class="ide-file" onclick="switchIdeFile('utils.js')"><span style="color:#f7df1e">JS</span> utils.js</div>
                </div>
                
                <div class="ide-editor" id="ideEditorContent">
                    <!-- Dynamic content -->
                </div>
            </div>
            <div class="ide-terminal">
                <div class="term-header"><span>bash - BankManager</span></div>
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
}

function closeModal() {
    document.getElementById('fullPageModal').classList.remove('open');
    document.body.style.overflow = 'auto';
}

// --- IDE Logic ---
const fileContents = {
    'BankManager.js': `<span class="keyword">import</span> { Account } <span class="keyword">from</span> <span class="string">'./Factorys/Account_Factory.js'</span>;
<span class="keyword">import</span> { Customer } <span class="keyword">from</span> <span class="string">'./Factorys/Customer_Factory.js'</span>;

<span class="keyword">export const</span> BankManager = {
    customers: [],
    
    addCustomer(id, name) {
        <span class="keyword">const</span> newCustomer = Customer(id, name);
        <span class="keyword">this</span>.customers.push(newCustomer);
        <span class="keyword">return</span> newCustomer;
    },

    getCustomer(id) {
        <span class="keyword">return this</span>.customers.find(c => c.id === id);
    }
};`,
    'main.js': `<span class="keyword">import</span> { BankManager } <span class="keyword">from</span> <span class="string">'./BankManager.js'</span>;

<span class="comment">// 1. יצירת לקוחות</span>
<span class="keyword">const</span> c1 = BankManager.addCustomer(<span class="number">1</span>, <span class="string">"Natan"</span>);

<span class="comment">// 2. הפקדת כספים באמצעות מתודות</span>
c1.account.deposit(<span class="number">5000</span>);
c1.account.withdraw(<span class="number">200</span>);

<span class="comment">// 3. בדיקת יתרה</span>
console.log(<span class="string">"Balance:"</span>, c1.account.getBalance());`,
    'Account_Factory.js': `<span class="comment">// Factory Function with Closure</span>
<span class="keyword">export function</span> Account(initialBalance = <span class="number">0</span>) {
    <span class="comment">// Private state</span>
    <span class="keyword">let</span> balance = initialBalance;

    <span class="keyword">return</span> {
        deposit(amount) {
            <span class="keyword">if</span> (amount > <span class="number">0</span>) {
                balance += amount;
                <span class="keyword">return true</span>;
            }
            <span class="keyword">return false</span>;
        },
        withdraw(amount) {
            <span class="keyword">if</span> (amount > <span class="number">0</span> && balance >= amount) {
                balance -= amount;
                <span class="keyword">return true</span>;
            }
            <span class="keyword">return false</span>;
        },
        getBalance() {
            <span class="keyword">return</span> balance;
        }
    };
}`,
    'Customer_Factory.js': `<span class="keyword">import</span> { Account } <span class="keyword">from</span> <span class="string">'./Account_Factory.js'</span>;

<span class="keyword">export function</span> Customer(id, name) {
    <span class="keyword">return</span> {
        id,
        name,
        account: Account(<span class="number">0</span>)
    };
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
}`,
    'utils.js': `<span class="keyword">export const</span> isPositive = (num) => num > <span class="number">0</span>;
<span class="keyword">export const</span> formatCurrency = (amount) => \`$\${amount.toFixed(2)}\`;`
};

const storyMap = {
    'BankManager.js': [
        "מייבאים את תבניות הלקוח והחשבון",
        "",
        "המנהל (אובייקט גלובלי) שמחזיק את כל הלקוחות",
        "",
        "",
        "פונקציה ליצירת לקוח חדש",
        "שימוש ב-Factory ליצירת האובייקט",
        "שמירת הלקוח במערך",
        "החזרת הלקוח שנוצר",
        "",
        "",
        "פונקציית חיפוש לקוח",
        "שימוש במתודת מערך find עם פונקציית חץ",
        ""
    ],
    'main.js': [
        "מייבאים את אובייקט הניהול המרכזי",
        "",
        "",
        "יוצרים לקוח מספר 1",
        "",
        "",
        "הפקדת 5000",
        "משיכת 200",
        "",
        "",
        "הדפסת היתרה הסופית - אין גישה ישירה ל-balance!"
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

    document.getElementById('ideEditorContent').innerHTML = html;
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

// Initial switch to default file
window.onload = () => {
    switchIdeFile('BankManager.js');
};
