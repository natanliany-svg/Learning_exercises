// --- Steigen On The Go Mode ---
let isSteigenMode = false;
function toggleSteigenMode() {
    isSteigenMode = !isSteigenMode;
    if (isSteigenMode) {
        document.body.classList.add('steigen-mode');
        document.querySelector('.island-text').innerText = "יציאה משטייגען";
    } else {
        document.body.classList.remove('steigen-mode');
        document.querySelector('.island-text').innerText = "שטייגען בדרכים";
    }
}

// --- Python Freezer ---
function openFreezer() {
    document.getElementById('freezerModal').classList.add('open');
}
function closeFreezer() {
    document.getElementById('freezerModal').classList.remove('open');
}

// --- Main Bubble Modals Data ---
const modalData = {
    closures: {
        title: "🔒 Closures (סגירות)",
        content: `
            <div class="modal-grid">
                <div class="modal-card">
                    <h4>📝 מה זה בכלל?</h4>
                    <p>פונקציה ש"זוכרת" את סביבת היצירה שלה גם אחרי שהיא סיימה לרוץ. זה מאפשר ליצור משתנים "פרטיים" שלא נגישים מבחוץ.</p>
                </div>
                <div class="modal-card">
                    <h4>💻 דוגמת קוד (Syntax)</h4>
                    <pre>
function createCounter() {
    let count = 0; // State is protected!
    return function() {
        count++;
        return count;
    }
}
const myCounter = createCounter();
console.log(myCounter()); // 1</pre>
                </div>
                <div class="modal-card">
                    <h4>💡 טיפ למקצוענים</h4>
                    <p>קלוז'ר הוא התחליף של JavaScript לתכנות מונחה עצמים קלאסי עם <code>private</code> attributes.</p>
                </div>
            </div>
        `
    },
    factories: {
        title: "🏭 Factory Functions",
        content: `
            <div class="modal-grid">
                <div class="modal-card">
                    <h4>📝 מה זה בכלל?</h4>
                    <p>פונקציה שפשוט בונה ומחזירה אובייקט. ללא שימוש במחלקה (Class) וללא שימוש במילה <code>new</code>.</p>
                </div>
                <div class="modal-card">
                    <h4>💻 דוגמת קוד (Syntax)</h4>
                    <pre>
function createUser(name, age) {
    return {
        name: name,
        age: age,
        greet: () => console.log('Hi ' + name)
    };
}
const user1 = createUser('Natan', 25);</pre>
                </div>
                <div class="modal-card">
                    <h4>❓ חידון מהיר</h4>
                    <p><strong>למה לא Class?</strong> כי ב-Factory אין בעיות עם המילה <code>this</code> שמצביעה בטעות לאובייקט אחר!</p>
                </div>
            </div>
        `
    },
    modules: {
        title: "📦 ES6 Modules",
        content: `
            <div class="modal-grid">
                <div class="modal-card">
                    <h4>📝 מה זה בכלל?</h4>
                    <p>פיצול קוד לקבצים נפרדים. ב-Node השתמשנו ב-<code>require</code> (CommonJS), היום ב-JS מודרני משתמשים ב-<code>import/export</code>.</p>
                </div>
                <div class="modal-card">
                    <h4>💻 דוגמת קוד (Syntax)</h4>
                    <pre>
// Exporting (file1.js)
export const apiURL = 'https://...';
export function fetchData() { ... }

// Importing (file2.js)
import { apiURL, fetchData } from './file1.js';</pre>
                </div>
                <div class="modal-card">
                    <h4>⚠️ מקרה קצה (Edge Case)</h4>
                    <p>כדי שזה יעבוד בדפדפן או ב-Node, חובה להגדיר <code>"type": "module"</code> בקובץ ה-package.json שלך!</p>
                </div>
            </div>
        `
    },
    bank: {
        title: "Bank Account Simulator 🏦 (IDE Mode)",
        content: `
            <div class="ide-container">
                <div class="ide-top">
                    <!-- File Explorer Sidebar -->
                    <div class="ide-sidebar">
                        <div class="ide-sidebar-header">Files</div>
                        <div class="ide-file active" onclick="switchIdeFile('BankManager.js')">📄 BankManager.js</div>
                        <div class="ide-file" onclick="switchIdeFile('Customer_Factory.js')">📄 Customer_Factory.js</div>
                        <div class="ide-file" onclick="switchIdeFile('main.js')">📄 main.js</div>
                    </div>
                    
                    <!-- Code Editor View with Story -->
                    <div class="ide-editor" id="ideEditorContent">
                        <!-- Content dynamically injected here -->
                    </div>
                </div>
                
                <!-- Interactive Terminal -->
                <div class="ide-terminal">
                    <div class="term-header">
                        <span>bash - BankManager</span>
                    </div>
                    <div class="term-output" id="terminalOutput">
                        <p>> המערכת מאותחלת. הקלד 'help' כדי לראות פקודות אפשריות.</p>
                    </div>
                    <div class="term-input-wrapper">
                        <span class="term-prompt">❯</span>
                        <input type="text" class="term-input" id="terminalInput" autocomplete="off" spellcheck="false" placeholder="Type command... (e.g. 'deposit')">
                    </div>
                </div>
            </div>
        `
    }
};

function openModal(topic) {
    const data = modalData[topic];
    if(!data) return;

    document.getElementById('modalBody').innerHTML = `
        <div class="modal-header" style="${topic === 'bank' ? 'margin-bottom: 10px;' : ''}">
            <h2>${data.title}</h2>
        </div>
        ${data.content}
    `;
    
    document.getElementById('fullPageModal').classList.add('open');

    // Attach Bank Simulator logic if bank modal is opened
    if(topic === 'bank') {
        initBankSimulator();
    }
}

function closeModal() {
    document.getElementById('fullPageModal').classList.remove('open');
}

// --- Bank Simulator IDE Logic ---

const ideFiles = {
    'BankManager.js': `
<div class="code-line"><span class="line-num">1</span><span class="line-code"><span class="keyword">import</span> { createCustomer } <span class="keyword">from</span> <span class="string">'./Customer_Factory.js'</span>;</span><span class="line-story">כאן אנחנו מייבאים את פונקציית המפעל שלנו. במקום לכתוב הכל בקובץ אחד ענק ומבולגן, אנחנו עובדים חכם עם Modules!</span></div>
<div class="code-line"><span class="line-num">2</span><span class="line-code"></span></div>
<div class="code-line"><span class="line-num">3</span><span class="line-code"><span class="keyword">let</span> <span class="variable">customers</span> = [];</span><span class="line-story">זהו ה"מסד נתונים" הזמני שלנו. זה מערך פשוט שבו נשמור את כל הלקוחות. הוא לא נגיש מבחוץ ישירות, רק דרך הפונקציות שאנחנו מייצאים.</span></div>
<div class="code-line"><span class="line-num">4</span><span class="line-code"></span></div>
<div class="code-line"><span class="line-num">5</span><span class="line-code"><span class="keyword">export function</span> <span class="function">addCustomer</span>(id, fullName) {</span><span class="line-story">הנה הפונקציה שאחראית להוסיף לקוח חדש. המילה 'export' אומרת: "מי שיטען את הקובץ הזה, יוכל להשתמש בפונקציה הזו!".</span></div>
<div class="code-line"><span class="line-num">6</span><span class="line-code">    <span class="keyword">const</span> newCustomer = <span class="function">createCustomer</span>(id, fullName);</span><span class="line-story">אנחנו קוראים ל-Factory שהבאנו מקודם, נותנים לו תעודת זהות ושם, ומקבלים חזרה אובייקט לקוח מוכן עם חשבון בנק מצורף.</span></div>
<div class="code-line"><span class="line-num">7</span><span class="line-code">    customers.<span class="function">push</span>(newCustomer);</span><span class="line-story">ודוחפים אותו למערך שלנו!</span></div>
<div class="code-line"><span class="line-num">8</span><span class="line-code">}</span></div>
<div class="code-line"><span class="line-num">9</span><span class="line-code"></span></div>
<div class="code-line"><span class="line-num">10</span><span class="line-code"><span class="keyword">export function</span> <span class="function">getCustomers</span>() {</span><span class="line-story">פונקציה פשוטה שמחזירה את המערך כדי שנוכל להדפיס אותו בטרמינל שלנו בהמשך.</span></div>
<div class="code-line"><span class="line-num">11</span><span class="line-code">    <span class="keyword">return</span> customers;</span></div>
<div class="code-line"><span class="line-num">12</span><span class="line-code">}</span></div>
    `,
    'Customer_Factory.js': `
<div class="code-line"><span class="line-num">1</span><span class="line-code"><span class="keyword">import</span> { createAccount } <span class="keyword">from</span> <span class="string">'./Account_Factory.js'</span>;</span><span class="line-story">כמו לגו! הלקוח צריך חשבון, אז אנחנו מביאים את המפעל שמייצר חשבונות.</span></div>
<div class="code-line"><span class="line-num">2</span><span class="line-code"></span></div>
<div class="code-line"><span class="line-num">3</span><span class="line-code"><span class="keyword">export function</span> <span class="function">createCustomer</span>(id, fullName) {</span><span class="line-story">זו הפונקציה שאחראית לייצר את אובייקט הלקוח. תשים לב שאין פה שימוש במחלקה (Class), הכל פשוט וברור!</span></div>
<div class="code-line"><span class="line-num">4</span><span class="line-code">    <span class="keyword">return</span> {</span><span class="line-story">אנחנו מחזירים אובייקט JS טהור.</span></div>
<div class="code-line"><span class="line-num">5</span><span class="line-code">        id: id,</span></div>
<div class="code-line"><span class="line-num">6</span><span class="line-code">        fullName: fullName,</span></div>
<div class="code-line"><span class="line-num">7</span><span class="line-code">        account: <span class="function">createAccount</span>()</span><span class="line-story">וכאן הקסם! בתוך הלקוח אנחנו יוצרים אובייקט נוסף של 'חשבון', עם יתרה ופעולות של הפקדה.</span></div>
<div class="code-line"><span class="line-num">8</span><span class="line-code">    };</span></div>
<div class="code-line"><span class="line-num">9</span><span class="line-code">}</span></div>
    `,
    'main.js': `
<div class="code-line"><span class="line-num">1</span><span class="line-code"><span class="comment">// קובץ ההרצה הראשי (Entry Point)</span></span></div>
<div class="code-line"><span class="line-num">2</span><span class="line-code"><span class="keyword">import</span> * <span class="keyword">as</span> BankManager <span class="keyword">from</span> <span class="string">'./BankManager.js'</span>;</span><span class="line-story">כאן אנחנו מייבאים את כל מה שהבנק מציע תחת משתנה אחד שקוראים לו BankManager.</span></div>
<div class="code-line"><span class="line-num">3</span><span class="line-code"></span></div>
<div class="code-line"><span class="line-num">4</span><span class="line-code">BankManager.<span class="function">addCustomer</span>(<span class="string">'123'</span>, <span class="string">'ישראל ישראלי'</span>);</span><span class="line-story">בדיוק כמו בפייתון, אנחנו משתמשים בפונקציות כדי לאתחל את המערכת עם נתוני דמה לבדיקה.</span></div>
<div class="code-line"><span class="line-num">5</span><span class="line-code">BankManager.<span class="function">addCustomer</span>(<span class="string">'456'</span>, <span class="string">'משה כהן'</span>);</span></div>
<div class="code-line"><span class="line-num">6</span><span class="line-code"></span></div>
<div class="code-line"><span class="line-num">7</span><span class="line-code"><span class="comment">// הטרמינל מאזין לפקודות שאתה מקליד כאן...</span></span><span class="line-story">במציאות זה נעשה על ידי 'readline-sync', אבל פה סימלצנו את זה על המסך! תנסה לכתוב בטרמינל למטה :)</span></div>
    `
};

function switchIdeFile(fileName) {
    // Update active tab
    document.querySelectorAll('.ide-file').forEach(f => {
        if(f.innerText.includes(fileName)) {
            f.classList.add('active');
        } else {
            f.classList.remove('active');
        }
    });
    
    // Update content
    const content = ideFiles[fileName] || 'File not found.';
    document.getElementById('ideEditorContent').innerHTML = content;
}

function initBankSimulator() {
    switchIdeFile('BankManager.js'); // Initial file load

    // Bank Logic Setup
    const BankManager = (function() {
        let customers = [];
        function createAccount() {
            let balance = 0;
            return {
                getBalance: () => balance,
                deposit: (amount) => {
                    balance += amount;
                    return balance;
                }
            };
        }
        function createCustomer(id, fullName) {
            return { id, fullName, account: createAccount() };
        }
        return {
            addCustomer: (id, name) => { customers.push(createCustomer(id, name)); },
            getCustomers: () => customers,
            deposit: (id, amount) => {
                const c = customers.find(c => c.id === id);
                if(c) return c.account.deposit(amount);
                throw new Error("Customer not found. (ת" + "ז לא קיימת)");
            },
            getStats: () => {
                const total = customers.reduce((sum, c) => sum + c.account.getBalance(), 0);
                return { count: customers.length, total };
            }
        };
    })();

    // Init some data
    BankManager.addCustomer('123', 'ישראל ישראלי');
    BankManager.addCustomer('456', 'משה כהן');
    BankManager.deposit('123', 5000);

    const termOut = document.getElementById('terminalOutput');
    const termInput = document.getElementById('terminalInput');

    function print(msg, type = '') {
        const p = document.createElement('p');
        p.innerText = '> ' + msg;
        if(type === 'error') p.classList.add('term-error');
        if(type === 'success') p.classList.add('term-success');
        termOut.appendChild(p);
        termOut.scrollTop = termOut.scrollHeight;
    }

    const availableCommands = ['help', 'show_all', 'stats', 'deposit', 'add_customer', 'clear'];

    termInput.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            e.preventDefault(); // Prevent focus shift
            const val = termInput.value.trim();
            const match = availableCommands.find(cmd => cmd.startsWith(val));
            if (match) termInput.value = match + ' ';
            return;
        }

        if (e.key === 'Enter') {
            const rawCmd = termInput.value.trim();
            if (!rawCmd) return;
            
            print(rawCmd); // Echo command
            termInput.value = '';
            
            const args = rawCmd.split(' ');
            const cmd = args[0].toLowerCase();

            try {
                if (cmd === 'help') {
                    print('--- פקודות זמינות ---', 'success');
                    print('show_all : הצג את כל הלקוחות');
                    print('stats : הצג סטטיסטיקות מנהל');
                    print('deposit [id] [amount] : הפקדת כסף');
                    print('add_customer [id] [name] : הוספת לקוח (ללא רווחים בשם)');
                    print('clear : ניקוי מסך');
                } 
                else if (cmd === 'clear') {
                    termOut.innerHTML = '';
                }
                else if (cmd === 'show_all') {
                    const custs = BankManager.getCustomers();
                    print(`--- רשימת לקוחות (${custs.length}) ---`, 'success');
                    custs.forEach(c => {
                        print(`[${c.id}] ${c.fullName} - יתרה: ₪${c.account.getBalance()}`);
                    });
                }
                else if (cmd === 'stats') {
                    const stats = BankManager.getStats();
                    print(`סה"כ לקוחות: ${stats.count} | סה"כ כסף בבנק: ₪${stats.total}`, 'success');
                }
                else if (cmd === 'deposit') {
                    if(args.length < 3) throw new Error("Usage: deposit [id] [amount]");
                    const id = args[1];
                    const amount = Number(args[2]);
                    if(isNaN(amount) || amount <= 0) throw new Error("Amount must be a positive number.");
                    
                    const newBal = BankManager.deposit(id, amount);
                    print(`הופקדו ₪${amount} בהצלחה. יתרה חדשה: ₪${newBal}`, 'success');
                }
                else if (cmd === 'add_customer') {
                    if(args.length < 3) throw new Error("Usage: add_customer [id] [name_without_spaces]");
                    BankManager.addCustomer(args[1], args[2]);
                    print(`לקוח ${args[2]} נוצר בהצלחה עם ת"ז ${args[1]}!`, 'success');
                }
                else {
                    print(`פקודה לא חוקית: ${cmd}. הקלד 'help'.`, 'error');
                }
            } catch (err) {
                print(err.message, 'error');
            }
        }
    });
}

// Sidebar Navigation UI Update
function openSubject(targetId) {
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    event.target.classList.add('active');
    if(targetId !== 'overview' && targetId !== 'cleancode') {
        openModal(targetId);
    }
}
