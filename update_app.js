import fs from 'fs';

let content = fs.readFileSync('app.js', 'utf8');

const startIndex = content.indexOf('const fileContents = {');
const endIndex = content.indexOf('function switchIdeFile');

if (startIndex === -1 || endIndex === -1) {
    console.error('Error: Could not find start or end block in app.js!');
    process.exit(1);
}

const newBlock = `const fileContents = {
    'utils.js': \`<span class="comment">// 1. קובץ לפונקציות חישוב ועזר למערכת</span>
<span class="keyword">import</span> rl <span class="keyword">from</span> <span class="string">'readline-sync'</span>;

<span class="keyword">export const</span> formatCurrency = (amount) => \\\`₪\\\${amount.toFixed(2)}\\\`;

<span class="keyword">export function</span> isPositive(num) {
    <span class="keyword">return</span> num > <span class="number">0</span>;
}

<span class="keyword">export function</span> menu() {
    console.log(\\\`
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
=============================================\\\`);
    <span class="keyword">return</span> rl.question(<span class="string">'בחר פעולה (1-9): '</span>);
}\`,

    'bankFactory.js': \`<span class="comment">// 2. שלב שני: יצירת המבנה הבסיסי (Factory)</span>
<span class="keyword">export function</span> createAccount() {
    <span class="keyword">let</span> balance = <span class="number">0</span>;
    <span class="keyword">let</span> isActive = <span class="keyword">true</span>;

    <span class="keyword">return</span> {
        getBalance: () => balance,
        getStatus: () => isActive,
        deposit: (amount) => {
            <span class="keyword">if</span> (!isActive) <span class="keyword">throw new</span> Error(<span class="string">"Account is closed."</span>);
            <span class="keyword">if</span> (amount <= <span class="number">0</span>) <span class="keyword">throw new</span> Error(<span class="string">"Deposit amount must be positive."</span>);
            balance += amount;
            <span class="keyword">return</span> balance;
        },
        withdraw: (amount) => {
            <span class="keyword">if</span> (!isActive) <span class="keyword">throw new</span> Error(<span class="string">"Account is closed."</span>);
            <span class="keyword">if</span> (amount <= <span class="number">0</span>) <span class="keyword">throw new</span> Error(<span class="string">"Withdraw amount must be positive."</span>);
            <span class="keyword">if</span> (amount > balance) <span class="keyword">throw new</span> Error(<span class="string">"Insufficient funds."</span>);
            balance -= amount;
            <span class="keyword">return</span> balance;
        },
        close: () => {
            isActive = <span class="keyword">false</span>;
        }
    };
}

<span class="keyword">export function</span> createCustomer(id, fullName, accountType) {
    <span class="keyword">const</span> validTypes = [<span class="string">'Regular'</span>, <span class="string">'Premium'</span>, <span class="string">'Student'</span>];
    <span class="keyword">if</span> (!validTypes.includes(accountType)) {
        <span class="keyword">throw new</span> Error(<span class="string">'Invalid account type. Must be Regular, Premium, or Student.'</span>);
    }
    <span class="keyword">if</span> (!fullName || fullName.trim() === <span class="string">''</span>) {
        <span class="keyword">throw new</span> Error(<span class="string">'Full name cannot be empty.'</span>);
    }
    <span class="keyword">if</span> (!id || id.trim() === <span class="string">''</span>) {
        <span class="keyword">throw new</span> Error(<span class="string">'ID cannot be empty.'</span>);
    }

    <span class="keyword">const</span> account = createAccount();

    <span class="keyword">return</span> {
        id,
        fullName,
        accountType,
        account
    };
}\`,

    'bankManager.js': \`<span class="comment">// 3. שלב שלישי: מנהל הבנק - מנהל את כל הלקוחות</span>
<span class="keyword">import</span> { createCustomer } <span class="keyword">from</span> <span class="string">'./bankFactory.js'</span>;

<span class="keyword">const</span> customers = [];

<span class="keyword">export const</span> bankManager = {
    addCustomer(id, fullName, accountType) {
        <span class="keyword">const</span> customer = createCustomer(id, fullName, accountType);
        customers.push(customer);
        <span class="keyword">return</span> customer;
    },
    
    getNextId() {
        <span class="keyword">if</span> (customers.length === <span class="number">0</span>) <span class="keyword">return</span> <span class="number">100</span>;
        <span class="keyword">const</span> ids = customers.map(c => Number(c.id));
        <span class="keyword">return</span> Math.max(...ids) + <span class="number">1</span>;
    },
    
    deposit(idOrName, amount) {
        <span class="keyword">const</span> c = bankManager.searchCustomer(idOrName);
        <span class="keyword">if</span> (!c) <span class="keyword">throw new</span> Error(<span class="string">"Customer not found."</span>);
        <span class="keyword">return</span> c.account.deposit(amount);
    },
    
    withdraw(idOrName, amount) {
        <span class="keyword">const</span> c = bankManager.searchCustomer(idOrName);
        <span class="keyword">if</span> (!c) <span class="keyword">throw new</span> Error(<span class="string">"Customer not found."</span>);
        <span class="keyword">return</span> c.account.withdraw(amount);
    },
    
    searchCustomer(query) {
        <span class="keyword">const</span> q = query.trim().toLowerCase();
        <span class="keyword">return</span> customers.find(c => c.id.toLowerCase() === q || c.fullName.toLowerCase() === q);
    },
    
    closeAccount(id) {
        <span class="keyword">const</span> c = bankManager.searchCustomer(id);
        <span class="keyword">if</span> (!c) <span class="keyword">throw new</span> Error(<span class="string">"Customer not found."</span>);
        c.account.close();
    },
    
    showCustomers() {
        <span class="keyword">return</span> customers;
    },
    
    showStatistics() {
        <span class="keyword">const</span> totalCustomers = customers.length;
        <span class="keyword">const</span> active = customers.filter(c => c.account.getStatus());
        <span class="keyword">const</span> totalMoney = active.reduce((sum, c) => sum + c.account.getBalance(), <span class="number">0</span>);
        <span class="keyword">const</span> average = active.length > <span class="number">0</span> ? totalMoney / active.length : <span class="number">0</span>;
        <span class="keyword">const</span> highest = active.reduce((max, c) => {
            <span class="keyword">const</span> bal = c.account.getBalance();
            <span class="keyword">return</span> bal > max ? bal : max;
        }, <span class="number">0</span>);
        <span class="keyword">return</span> { totalCustomers, activeCount: active.length, totalMoney, average, highest };
    }
};\`,

    'main.js': \`<span class="comment">// 4. שלב רביעי ואחרון: המנוע שמחבר הכל</span>
<span class="keyword">import</span> { bankManager } <span class="keyword">from</span> <span class="string">'./bankManager.js'</span>;
<span class="keyword">import</span> { menu, formatCurrency } <span class="keyword">from</span> <span class="string">'./utils.js'</span>;
<span class="keyword">import</span> rl <span class="keyword">from</span> <span class="string">'readline-sync'</span>;

<span class="keyword">function</span> handleMenu(choice) {
    <span class="keyword">switch</span> (choice.trim()) {
        <span class="keyword">case</span> <span class="string">'1'</span>: {
            <span class="keyword">const</span> id = rl.question(<span class="string">'הכנס תעודת זהות: '</span>);
            <span class="keyword">const</span> name = rl.question(<span class="string">'הכנס שם מלא: '</span>);
            <span class="keyword">const</span> type = rl.question(<span class="string">'סוג חשבון (Regular/Premium/Student): '</span>);
            
            <span class="keyword">let</span> isOnlyDigits = <span class="keyword">true</span>;
            <span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">0</span>; i < id.length; i++) {
                <span class="keyword">const</span> char = id[i];
                <span class="keyword">if</span> (char < <span class="string">"0"</span> || char > <span class="string">"9"</span>) {
                    isOnlyDigits = <span class="keyword">false</span>;
                }
            }
            <span class="keyword">const</span> idNum = Number(id);
            <span class="keyword">if</span> (!isOnlyDigits || idNum < <span class="number">100</span>) {
                console.log(<span class="string">"שגיאה: מזהה חייב להיות מספר גדול או שווה ל-100!"</span>);
                <span class="keyword">break</span>;
            }
            <span class="keyword">if</span> (bankManager.searchCustomer(id)) {
                console.log(<span class="string">"שגיאה: מזהה לקוח כבר קיים במערכת!"</span>);
                <span class="keyword">break</span>;
            }
            <span class="keyword">try</span> {
                bankManager.addCustomer(id, name, type);
                console.log(\\\`לקוח \\\${name} נוסף בהצלחה!\\\`);
            } <span class="keyword">catch</span> (e) {
                console.log(<span class="string">'שגיאה:'</span>, e.message);
            }
            <span class="keyword">break</span>;
        }
        <span class="keyword">case</span> <span class="string">'2'</span>: {
            <span class="keyword">const</span> id = rl.question(<span class="string">'הכנס תעודת זהות או שם: '</span>);
            <span class="keyword">const</span> amount = rl.question(<span class="string">'סכום להפקדה: '</span>);
            <span class="keyword">try</span> {
                <span class="keyword">const</span> newBalance = bankManager.deposit(id, Number(amount));
                console.log(\\\`ההפקדה בוצעה. יתרה עדכנית: ₪\\\${newBalance}\\\`);
            } <span class="keyword">catch</span> (e) {
                console.log(\\\`שגיאה:\\\`, e.message);
            }
            <span class="keyword">break</span>;
        }
        <span class="keyword">case</span> <span class="string">'3'</span>: {
            <span class="keyword">const</span> id = rl.question(<span class="string">'הכנס תעודת זהות או שם: '</span>);
            <span class="keyword">const</span> amount = rl.question(<span class="string">'סכום למשיכה: '</span>);
            <span class="keyword">try</span> {
                <span class="keyword">const</span> newBalance = bankManager.withdraw(id, Number(amount));
                console.log(\\\`המשיכה בוצעה. יתרה עדכנית: ₪\\\${newBalance}\\\`);
            } <span class="keyword">catch</span> (e) {
                console.log(\\\`שגיאה:\\\`, e.message);
            }
            <span class="keyword">break</span>;
        }
        <span class="keyword">case</span> <span class="string">'4'</span>: {
            <span class="keyword">const</span> query = rl.question(<span class="string">'הכנס תעודת זהות או שם לחיפוש: '</span>);
            <span class="keyword">const</span> c = bankManager.searchCustomer(query);
            <span class="keyword">if</span> (c) {
                console.log(\\\`נמצא: \\\${c.fullName} | ת.ז: \\\${c.id} | סוג: \\\${c.accountType} | יתרה: \\\${formatCurrency(c.account.getBalance())} | פעיל: \\\${c.account.getStatus()}\\\`);
            } <span class="keyword">else</span> {
                console.log(<span class="string">'לקוח לא נמצא.'</span>);
            }
            <span class="keyword">break</span>;
        }
        <span class="keyword">case</span> <span class="string">'5'</span>: {
            <span class="keyword">const</span> id = rl.question(<span class="string">'הכנס תעודת זהות לסגירת חשבון: '</span>);
            <span class="keyword">try</span> {
                bankManager.closeAccount(id);
                console.log(<span class="string">'חשבון נסגר בהצלחה.'</span>);
            } <span class="keyword">catch</span> (e) {
                console.log(<span class="string">'שגיאה:'</span>, e.message);
            }
            <span class="keyword">break</span>;
        }
        <span class="keyword">case</span> <span class="string">'6'</span>:
            console.table(bankManager.showCustomers());
            <span class="keyword">break</span>;
        <span class="keyword">case</span> <span class="string">'7'</span>: {
            <span class="keyword">const</span> stats = bankManager.showStatistics();
            console.log(\\\`===== Statistics =====\\\`);
            console.log(\\\`Total Customers: \\\${stats.totalCustomers}\\\`);
            console.log(\\\`Active Accounts: \\\${stats.activeCount}\\\`);
            console.log(\\\`Total Money: \\\${formatCurrency(stats.totalMoney)}\\\`);
            console.log(\\\`Average Balance: \\\${formatCurrency(stats.average)}\\\`);
            console.log(\\\`Highest Balance: \\\${formatCurrency(stats.highest)}\\\`);
            <span class="keyword">break</span>;
        }
        <span class="keyword">case</span> <span class="string">'8'</span>: {
            console.log(<span class="string">'הרצת תרגיל קלוז\\\'ר / פילטר לדוגמה...'</span>);
            <span class="keyword">break</span>;
        }
        <span class="keyword">case</span> <span class="string">'9'</span>:
            console.log(<span class="string">'להתראות!'</span>);
            process.exit(<span class="number">0</span>);
        <span class="keyword">default</span>:
            console.log(<span class="string">'בחירה לא תקינה.'</span>);
            <span class="keyword">break</span>;
    }
}

<span class="keyword">while</span> (<span class="keyword">true</span>) {
    <span class="keyword">const</span> choice = menu();
    handleMenu(choice);
}\`,
    'package.json': \`{
  <span class="string">"type"</span>: <span class="string">"module"</span>,
  <span class="string">"dependencies"</span>: {
    <span class="string">"readline-sync"</span>: <span class="string">"^1.4.10"</span>
  }
}\`,
    'package-lock.json': \`{}\`
};

const storyMap = {
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

\n`;

content = content.substring(0, startIndex) + newBlock + content.substring(endIndex);

// Update terminal simulator add_customer command in app.js as well
const regexAddCustomer = /\} else if \(cmd === 'add_customer'\) \{[\s\S]*?\}\s*\} else if \(cmd === 'deposit'\)/;

const newAddCustomer = `} else if (cmd === 'add_customer') {
            if (args.length < 3) {
                output.innerHTML += \`<p class="term-error">Error: Missing arguments.</p>\`;
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
                    output.innerHTML += \`<p class="term-error">Error: ID must be a number greater than or equal to 100.</p>\`;
                } else if (customers.some(c => c.id === args[1])) {
                    output.innerHTML += \`<p class="term-error">Error: ID already exists.</p>\`;
                } else {
                    customers.push({ id: args[1], fullName: args[2], accountType: args[3] || 'Regular', balance: 0, account: { getBalance: () => 0, getStatus: () => true } });
                    output.innerHTML += \`<p class="term-success">Customer \${args[2]} added successfully.</p>\`;
                }
            }
        } else if (cmd === 'deposit')`;

if (regexAddCustomer.test(content)) {
    content = content.replace(regexAddCustomer, newAddCustomer);
    console.log('Successfully updated terminal simulator add_customer logic.');
} else {
    console.warn('Warning: Could not find terminal simulator add_customer block in app.js!');
}

fs.writeFileSync('app.js', content, 'utf8');
console.log('Successfully updated app.js with valid UTF8');
