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
        title: "🏦 Bank Account Simulator",
        content: `
            <div class="modal-grid">
                <div class="modal-card" style="grid-column: 1 / -1;">
                    <h4>סימולטור טרמינל מקומי</h4>
                    <p>פרויקט הבנק שפותח ב-Node.js שוחזר כאן במלואו כסימולטור ווב!</p>
                    <div class="terminal-container">
                        <div class="terminal-header">
                            <span class="btn red"></span>
                            <span class="btn yellow"></span>
                            <span class="btn green"></span>
                            <span class="title">bash - BankManager</span>
                        </div>
                        <div class="terminal-body" id="terminalOutput">
                            <p>> המערכת מאותחלת...</p>
                        </div>
                        <div class="terminal-controls">
                            <button id="btnShowAll">הצג את כל הלקוחות</button>
                            <button id="btnStats">הצג סטטיסטיקות</button>
                            <button id="btnDeposit">הפקד ₪1500</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

function openModal(topic) {
    const data = modalData[topic];
    if(!data) return;

    document.getElementById('modalBody').innerHTML = \`
        <div class="modal-header">
            <h2>\${data.title}</h2>
        </div>
        \${data.content}
    \`;
    
    document.getElementById('fullPageModal').classList.add('open');

    // Attach Bank Simulator logic if bank modal is opened
    if(topic === 'bank') {
        initBankSimulator();
    }
}

function closeModal() {
    document.getElementById('fullPageModal').classList.remove('open');
}

// --- Bank Simulator Logic ---
function initBankSimulator() {
    const BankManager = (function() {
        let customers = [];
        function createAccount() {
            let balance = 0;
            let isActive = true;
            return {
                getBalance: () => balance,
                getStatus: () => isActive,
                deposit: (amount) => {
                    if (!isActive) throw new Error("Account closed.");
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
                throw new Error("Customer not found.");
            },
            getStats: () => {
                const total = customers.reduce((sum, c) => sum + c.account.getBalance(), 0);
                return { count: customers.length, total };
            }
        };
    })();

    BankManager.addCustomer('123', 'ישראל ישראלי');
    BankManager.addCustomer('456', 'משה כהן');
    BankManager.deposit('123', 5000);

    const termOut = document.getElementById('terminalOutput');
    function logToTerminal(msg, isError = false) {
        const p = document.createElement('p');
        p.innerText = '> ' + msg;
        if(isError) p.style.color = '#ff5f56';
        termOut.appendChild(p);
        termOut.scrollTop = termOut.scrollHeight;
    }

    document.getElementById('btnShowAll').addEventListener('click', () => {
        const custs = BankManager.getCustomers();
        logToTerminal(\`--- רשימת לקוחות (\${custs.length}) ---\`);
        custs.forEach(c => {
            logToTerminal(\`[\${c.id}] \${c.fullName} - יתרה: ₪\${c.account.getBalance()}\`);
        });
    });

    document.getElementById('btnStats').addEventListener('click', () => {
        const stats = BankManager.getStats();
        logToTerminal(\`סה"כ לקוחות: \${stats.count} | סה"כ כסף: ₪\${stats.total}\`);
    });

    document.getElementById('btnDeposit').addEventListener('click', () => {
        try {
            const newBal = BankManager.deposit('456', 1500);
            logToTerminal(\`הופקדו ₪1500 ללקוח משה כהן. יתרה: ₪\${newBal}\`);
        } catch (e) {
            logToTerminal(e.message, true);
        }
    });
}

// Sidebar Navigation UI Update
function openSubject(targetId) {
    // Just highlights the sidebar menu, the main view is handled by bubbles
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    event.target.classList.add('active');
    
    // Auto open the modal for the selected topic (except for overview which is the bubbles themselves)
    if(targetId !== 'overview' && targetId !== 'cleancode') {
        openModal(targetId);
    }
}
