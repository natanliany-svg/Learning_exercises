document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navigation Logic ---
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            // Add active class to clicked
            item.classList.add('active');
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // --- Closures Example (Counter) ---
    function createCounter() {
        let count = 0;
        return function() {
            count++;
            return count;
        }
    }
    const myCounter = createCounter();
    
    document.getElementById('runCounterBtn').addEventListener('click', () => {
        const res = myCounter();
        document.getElementById('counterResult').innerText = res;
    });

    // --- Bank Account Manager Simulation ---
    // Simulating the logic from C:\Bank_Account_Manager
    
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
                },
                withdraw: (amount) => {
                    if (!isActive) throw new Error("Account closed.");
                    if (amount > balance) throw new Error("Insufficient funds.");
                    balance -= amount;
                    return balance;
                }
            };
        }

        function createCustomer(id, fullName) {
            return {
                id,
                fullName,
                account: createAccount()
            };
        }

        return {
            addCustomer: (id, name) => {
                customers.push(createCustomer(id, name));
            },
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

    // Initial Data
    BankManager.addCustomer('123', 'ישראל ישראלי');
    BankManager.deposit('123', 5000);
    BankManager.addCustomer('456', 'משה כהן');

    // Terminal Logic
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
        logToTerminal(`--- רשימת לקוחות (${custs.length}) ---`);
        custs.forEach(c => {
            logToTerminal(`[${c.id}] ${c.fullName} - יתרה: ₪${c.account.getBalance()}`);
        });
    });

    document.getElementById('btnStats').addEventListener('click', () => {
        const stats = BankManager.getStats();
        logToTerminal(`--- סטטיסטיקות ---`);
        logToTerminal(`סה"כ לקוחות: ${stats.count}`);
        logToTerminal(`סה"כ כסף בבנק: ₪${stats.total}`);
    });

    document.getElementById('btnDeposit').addEventListener('click', () => {
        try {
            const newBal = BankManager.deposit('456', 1500);
            logToTerminal(`הופקדו ₪1500 ללקוח 456. יתרה חדשה: ₪${newBal}`);
        } catch (e) {
            logToTerminal(e.message, true);
        }
    });

});
