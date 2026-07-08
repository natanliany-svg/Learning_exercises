import fs from 'fs';

let content = fs.readFileSync('app.js', 'utf8');

// 1. Add README.md to the file tree
if (!content.includes("switchIdeFile('README.md')")) {
    const fileTreeInsertion = `                    <div class="ide-file" onclick="switchIdeFile('README.md')"><span style="color:#60a5fa">📘</span> הסבר הפרויקט</div>\n                    <div class="ide-file" onclick="switchIdeFile('utils.js')">`;
    content = content.replace(`<div class="ide-file" onclick="switchIdeFile('utils.js')">`, fileTreeInsertion);
}

// 2. Add README.md content to fileContents
const readmeHtml = `
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

if (!content.includes("'README.md':")) {
    const fileContentsInsertion = `const fileContents = {
    'README.md': \`${readmeHtml}\`,`;
    content = content.replace(`const fileContents = {`, fileContentsInsertion);
}

// 3. Update switchIdeFile to render README.md as pure HTML
const oldSwitchFunction = `    const content = fileContents[filename] || '<span class="comment">// אין תוכן</span>';
    const stories = storyMap[filename] || [];`;

const newSwitchFunction = `    const content = fileContents[filename] || '<span class="comment">// אין תוכן</span>';
    const stories = storyMap[filename] || [];
    
    if (filename === 'README.md') {
        document.getElementById('ideEditorContent').innerHTML = \`<div class="readme-content" style="padding: 30px; color: #e2e8f0; font-family: system-ui, -apple-system, sans-serif; line-height: 1.8; overflow-y: auto; height: 100%; direction: rtl;">\${content}</div>\`;
        return;
    }`;

if (!content.includes("if (filename === 'README.md')")) {
    content = content.replace(oldSwitchFunction, newSwitchFunction);
}

// 4. Update the default file to README.md instead of main.js
if (content.includes("switchIdeFile('main.js')")) {
    // Actually let's just make sure README.md is available. We don't have to make it default, but it's nice.
    // Replace the setTimeout load
    content = content.replace(`setTimeout(() => switchIdeFile('main.js'), 50);`, `setTimeout(() => switchIdeFile('README.md'), 50);`);
    // Fix the 'active' class on load
    content = content.replace(`<div class="ide-file active" onclick="switchIdeFile('main.js')">`, `<div class="ide-file" onclick="switchIdeFile('main.js')">`);
    content = content.replace(`<div class="ide-file" onclick="switchIdeFile('README.md')">`, `<div class="ide-file active" onclick="switchIdeFile('README.md')">`);
}

fs.writeFileSync('app.js', content, 'utf8');
console.log('README document injected successfully into app.js');
