const contentPart3 = {
 closures: {
  visualizerSteps: [
        {
            html_visual: `
            <div class="stack-visual">
                <div class="stack-item chain-appear delay-2" style="opacity:1;">Inner Function Memory</div>
                <div class="stack-item chain-appear delay-1" style="opacity:0.8; background:var(--primary);">Outer Function Memory</div>
                <div class="stack-item chain-appear" style="opacity:0.5; background:var(--ink);">Global Memory</div>
            </div>
            `,
            text: "<b>שלב 1: שרשרת הסביבות (Scope Chain)</b><br>כמו בובות בבושקה! פונקציה פנימית תמיד נמצאת בתוך פונקציה חיצונית. כשהיא מחפשת משתנה, היא בודקת קודם אצלה, ואז יוצאת החוצה שכבה אחרי שכבה."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#ff0055;">Outer() סיימה<br><span style="font-size:10px;text-decoration:line-through;">נמחקה</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active bounce-in">Inner() חיה<br>ועדיין זוכרת!</div>
            </div>
            `,
            text: "<b>שלב 2: לכידת קלוז'ר</b><br>הקסם מתרחש פה: גם אחרי שהפונקציה החיצונית סיימה לרוץ ונעלמה מהזיכרון, הפונקציה הפנימית 'נועלת' (Closure) אצלה את המשתנים שהיא צריכה מתוכה!"
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced">createCounter()</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">count=0</span></div>
                <div class="flow-node-enhanced active ripple-out">counter() → 1<br>counter() → 2</div>
            </div>
            `,
            text: "<b>שלב 3: שימוש פרקטי - מונה (Counter)</b><br>בעזרת קלוז'ר אנחנו יכולים ליצור 'משתנים פרטיים'. הפונקציה שומרת זיכרון פנימי משלה שאף אחד מבחוץ לא יכול לגעת בו ישירות."
        }
    ],
    title: '🔒 קלוז\'רים (Closures)',
  content: `
   <div class="card-body">
    <p class="lead">קלוז'ר (Closure או סגירה) הוא אחד המושגים העוצמתיים ביותר ב-JavaScript. הוא מאפשר לפונקציה פנימית לזכור ולהמשיך לגשת למשתנים של הפונקציה החיצונית שעטפה אותה — גם לאחר שהפונקציה החיצונית כבר סיימה לרוץ ונעלמה מהזיכרון.</p>
    
    <h4>1. דוגמה בסיסית: מונה פרטי</h4>
    <pre><code><span class="t-key">function</span> <span class="t-fn">makeCounter</span>() {
 <span class="t-key">let</span> count = <span class="t-num">0</span>; <span class="t-com">// משתנה מקומי בתוך הפונקציה</span>

 <span class="t-ctl">return</span> <span class="t-key">function</span>() {
  count++; <span class="t-com">// הפונקציה הפנימית זוכרת את count!</span>
  <span class="t-ctl">return</span> count;
 };
}

<span class="t-key">const</span> counter = <span class="t-fn">makeCounter</span>();
console.<span class="t-fn">log</span>(<span class="t-fn">counter</span>()); <span class="t-com">// 1</span>
console.<span class="t-fn">log</span>(<span class="t-fn">counter</span>()); <span class="t-com">// 2 ← הערך נשמר בין ההרצות!</span></code></pre>
    
    <div class="callout analogy">
     <span class="ico">🎒</span>
     <div class="ct"><b>אנלוגיה:</b> הפונקציה הפנימית יוצאת לדרך החיים שלה עם <b>תרמיל גב</b>. בתוך התרמיל היא ארזה את כל המשתנים שהיו קיימים ב"בית" שבו היא גדלה (הפונקציה העוטפת). גם כשהיא רחוקה מאוד מהבית (הפונקציה החיצונית סיימה לרוץ), היא עדיין יכולה לפתוח את התרמיל ולערוך את המשתנים שבתוכו.</div>
    </div>

    <h4>2. הגנה על נתונים (Encapsulation)</h4>
    <p>באמצעות Closure אנו יכולים ליצור "משתנים פרטיים" שאף אחד מחוץ לפונקציה לא יכול לשנות או לגשת אליהם ישירות, אלא רק דרך הפונקציות שאנו מחזירים (בדומה לקוד של פרויקט הבנק):</p>
    <pre><code><span class="t-key">function</span> <span class="t-fn">createAccount</span>(initialBalance) {
 <span class="t-key">let</span> balance = initialBalance; <span class="t-com">// פרטי לחלוטין!</span>

 <span class="t-ctl">return</span> {
  <span class="t-fn">deposit</span>(amount) {
   <span class="t-ctl">if</span> (amount > <span class="t-num">0</span>) balance += amount;
   <span class="t-ctl">return</span> balance;
  },
  <span class="t-fn">getBalance</span>() {
   <span class="t-ctl">return</span> balance;
  }
 };
}

<span class="t-key">const</span> myAcc = <span class="t-fn">createAccount</span>(<span class="t-num">100</span>);
myAcc.<span class="t-fn">deposit</span>(<span class="t-num">50</span>);
console.<span class="t-fn">log</span>(myAcc.<span class="t-fn">getBalance</span>()); <span class="t-com">// 150</span>
<span class="t-com">// console.log(myAcc.balance); // undefined! אין גישה ישירה לכסף</span></code></pre>
    <div class="callout exam">
     <span class="ico">📌</span>
     <div class="ct"><b>למבחן:</b> Closure נוצר באופן אוטומטי בכל פעם שמוגדרת פונקציה בתוך פונקציה אחרת. הוא מאפשר לנו לנהל "מצב" (State) פרטי ומאובטח. זכרו כי משתנים שנשמרים ב-Closure נשארים בזיכרון, ולכן שימוש לא מבוקר בהם עלול לגרום לעומס זיכרון.</div>
    </div>
   </div>
  `
 },
 factories: {
  visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced">name: "דני"</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active highlight-flash" style="border-color:#ffd700;">🏭 המפעל</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced bounce-in">{ name:"דני", role:"user" }</div>
            </div>
            `,
            text: "<b>שלב 1: תבנית המפעל</b><br>במקום ליצור אובייקטים מאפס כל פעם, אנחנו בונים פונקציה שמקבלת חומרי גלם (פרמטרים) ומייצרת אובייקט שלם ומוכן."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced active">🏭 המפעל</div>
                <div style="display:flex; flex-direction:column; gap:5px;" class="delay-2">
                    <div class="flow-arrow-enhanced" style="flex-direction:row;"><span class="arrow-icon">→</span><div class="flow-node-enhanced slide-in-right">User 1</div></div>
                    <div class="flow-arrow-enhanced" style="flex-direction:row;"><span class="arrow-icon">→</span><div class="flow-node-enhanced slide-in-right delay-1">User 2</div></div>
                </div>
            </div>
            `,
            text: "<b>שלב 2: שעתוק אובייקטים</b><br>המפעל יכול לייצר אינסוף אובייקטים בלתי תלויים, שלכל אחד מהם יש עותק משלו של הנתונים והפונקציות."
        },
        {
            html_visual: `
            <div class="memory-grid fade-slide-up">
                <div class="memory-cell locked"><div class="cell-label">Private Var</div><div class="cell-value">🔒 מוסתר</div></div>
                <div class="memory-cell active"><div class="cell-label">Public Method</div><div class="cell-value">✅ חשוף</div></div>
            </div>
            `,
            text: "<b>שלב 3: כימוס (Encapsulation)</b><br>שילוב מנצח: מפעל + קלוז'ר. אנחנו יכולים להגדיר משתנים שיישארו פרטיים בתוך המפעל (אף אחד לא יכול לשנות אותם מבחוץ), ולחשוף רק את הפונקציות שאנחנו מרשים."
        }
    ],
    title: '🏭 פונקציות מפעל (Factory Functions)',
  content: `
   <div class="card-body">
    <p class="lead">פונקציית מפעל היא פונקציה פשוטה שמחזירה אובייקט חדש. בניגוד למחלקות (Classes) או פונקציות בנאי (Constructor Functions), אין צורך להשתמש במילת המפתח <code>new</code> או להתעסק עם הבלבול של <code>this</code>.</p>
    
    <h4>1. דוגמה ליצירת משתמש עם Factory</h4>
    <pre><code><span class="t-key">function</span> <span class="t-fn">createUser</span>(name, role) {
 <span class="t-key">const</span> createdAt = <span class="t-key">new</span> <span class="t-fn">Date</span>(); <span class="t-com">// משתנה פרטי בזכות Closure!</span>

 <span class="t-ctl">return</span> {
  name,
  role,
  <span class="t-fn">getInfo</span>() {
   <span class="t-com">// גישה ישירה לפרמטרים ללא שימוש ב-this</span>
   <span class="t-ctl">return</span> \`\${name} is an \${role} (Created: \${createdAt.toLocaleDateString()})\`;
  }
 };
}

<span class="t-key">const</span> user1 = <span class="t-fn">createUser</span>(<span class="t-str">"דוד"</span>, <span class="t-str">"מנהל"</span>);
console.<span class="t-fn">log</span>(user1.<span class="t-fn">getInfo</span>()); <span class="t-com">// "דוד is an מנהל"</span></code></pre>

    <h4>2. יתרונות לעומת Classes</h4>
    <ul class="tight">
     <li><b>הימנעות מ-<code>this</code></b> — ב-JS, המצביע <code>this</code> משתנה בהתאם לאופן שבו קראו לפונקציה, מה שיוצר המון שגיאות. ב-Factory עובדים עם Closures והמשתנים זמינים תמיד באופן קבוע וישיר.</li>
     <li><b>הרכבה מול הורשה (Composition over Inheritance)</b> — קל יותר לחבר אובייקטים מתבניות שונות מאשר לבנות היררכיה נוקשה של מחלקות אב ובנות.</li>
    </ul>
    <div class="callout warn">
     <span class="ico">⚠️</span>
     <div class="ct"><b>מקרה קצה והיבט זיכרון:</b> בשימוש ב-Factory, כל אובייקט שמיוצר מקבל עותק חדש משלו של הפונקציות בזיכרון. אם אתם מייצרים מיליוני אובייקטים כאלו בריצה, זה יבזבז יותר זיכרון מאשר שימוש ב-Classes (שם הפונקציות יושבות פעם אחת בלבד על ה-Prototype המשותף). לפרויקטים קטנים-בינוניים, Factory עדיפה בהרבה.</div>
    </div>
   </div>
  `
 },
 modules: {
  visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced">math.js</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">export</span></div>
                <div class="flow-node-enhanced active">add(), sub()</div>
            </div>
            `,
            text: "<b>שלב 1: ייצוא (Export)</b><br>במקום לכתוב את כל הקוד בקובץ אחד ענק ומבולגן, אנחנו מפצלים אותו. קובץ שרוצה לשתף כלים כותב <code>export</code> לפני הפונקציה."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced slide-in-right">
                <div class="flow-node-enhanced active">add(), sub()</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">import</span></div>
                <div class="flow-node-enhanced">app.js</div>
            </div>
            `,
            text: "<b>שלב 2: ייבוא (Import)</b><br>הקובץ הראשי שואב אליו רק את הכלים הספציפיים שהוא צריך, מה שהופך את הקוד לקל משקל, מאורגן, ומונע התנגשויות שמות."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">app.js<br>(האפליקציה)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">←</span></div>
                <div style="display:flex; flex-direction:column; gap:5px;">
                    <div class="flow-node-enhanced" style="border-color:#38bdf8;">UI.js (ממשק)</div>
                    <div class="flow-node-enhanced" style="border-color:#ff0055;">API.js (שרת)</div>
                </div>
            </div>
            `,
            text: "<b>שלב 3: עץ התלויות (Dependency Tree)</b><br>כך נראית אפליקציה מודרנית: קובץ ראשי אחד שמנצח על תזמורת של קבצים קטנים ועצמאיים שכל אחד מהם מומחה בתחומו."
        }
    ],
    title: '📦 מודולים (ES6 Modules)',
  content: `
   <div class="card-body">
    <p class="lead">מודולים (Modules) מאפשרים לנו לפצל את הקוד שלנו למספר קבצים נפרדים, כאשר כל קובץ מנהל את הסביבה שלו, ומצהיר במפורש מה הוא מייצא החוצה ומה הוא מייבא מקבצים אחרים.</p>
    
    <h4>1. ייצוא שמי (Named Export) לעומת ייצוא ברירת מחדל (Default Export)</h4>
    <pre><code><span class="t-com">// --- קובץ math.js ---</span>
<span class="t-com">// ייצוא שמי (אפשר כמה כאלו בקובץ)</span>
<span class="t-key">export</span> <span class="t-key">const</span> PI = <span class="t-num">3.14</span>;
<span class="t-key">export</span> <span class="t-key">const</span> <span class="t-fn">add</span> = (a, b) => a + b;

<span class="t-com">// ייצוא ברירת מחדל (מותר רק אחד כזה בקובץ!)</span>
<span class="t-key">export</span> <span class="t-key">default</span> <span class="t-key">function</span> <span class="t-fn">multiply</span>(a, b) {
 <span class="t-ctl">return</span> a * b;
}

<span class="t-com">// --- קובץ app.js ---</span>
<span class="t-com">// ייבוא: ייצוא Default מחוץ לסוגריים, ייצוא Named בתוך {}</span>
<span class="t-key">import</span> multiply, { PI, add } <span class="t-key">from</span> <span class="t-str">"./math.js"</span>;</code></pre>

    <h4>2. טבלת השוואה: ES Modules לעומת CommonJS</h4>
    <div class="tbl-scroll">
     <table>
      <tr><th>תכונה</th><th>ES Modules (ESM)</th><th>CommonJS (CJS)</th></tr>
      <tr><td><b>מילות מפתח</b></td><td><code>import</code> / <code>export</code></td><td><code>require</code> / <code>module.exports</code></td></tr>
      <tr><td><b>קהל יעד</b></td><td>דפדפנים מודרניים ו-Node.js חדש</td><td>Node.js מבוסס פרויקטים ישנים</td></tr>
      <tr><td><b>אופן הפעולה</b></td><td>אסינכרוני (תומך ב-Top-level await)</td><td>סינכרוני לחלוטין</td></tr>
      <tr><td><b>הגדרה ב-Node</b></td><td>מחייב הגדרת <code>"type": "module"</code> ב-package.json</td><td>ברירת המחדל הישנה של Node.js</td></tr>
     </table>
    </div>
   </div>
  `
 },
 destructuring: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container"><div class="anim-node">{a: 1, b: 2}</div><div class="anim-packet move-right" style="background:#00d2ff; width:50px;">פירוק</div><div class="anim-node">const a = 1</div></div>
            `,
            text: "<b>פירוק מבנה</b><br>במקום לפנות לאובייקט כל פעם (obj.a), פירוק (Destructuring) מאפשר לנו 'לשלוף' את הערך מתוך האובייקט ישירות לתוך משתנה עצמאי בקלי קלות."
        }
    ],

  title: '🧩 פירוק מבנה (Destructuring & Spread)',
  content: `
   <div class="card-body">
    <p class="lead">פירוק מבנה (Destructuring) ואופרטור הפיזור (Spread) הם קיצורי דרך תחביריים מודרניים לעבודה נוחה ונקייה עם אובייקטים ומערכים.</p>
    
    <h4>1. פירוק אובייקטים ומערכים (Destructuring)</h4>
    <pre><code><span class="t-key">const</span> user = { name: <span class="t-str">"אלון"</span>, age: <span class="t-num">22</span> };

<span class="t-com">// שליפה ישירה של מפתחות למשתנים באותו שם:</span>
<span class="t-key">const</span> { name, age } = user; 

<span class="t-com">// שליפה עם שינוי שם המשתנה (Alias) וערך ברירת מחדל:</span>
<span class="t-key">const</span> { name: userName, role = <span class="t-str">"Guest"</span> } = user;
<span class="t-com">// userName = "אלון", role = "Guest"</span>

<span class="t-com">// פירוק מערך (לפי סדר המיקום):</span>
<span class="t-key">const</span> colors = [<span class="t-str">"אדום"</span>, <span class="t-str">"כחול"</span>, <span class="t-str">"ירוק"</span>];
<span class="t-key">const</span> [firstColor, secondColor] = colors; <span class="t-com">// "אדום", "כחול"</span>
<span class="t-key">const</span> [first, , third] = colors; <span class="t-com">// דילוג על איבר: "אדום", "ירוק"</span></code></pre>

    <h4>2. אופרטור הפיזור והאיסוף (...)</h4>
    <ul class="tight">
     <li><b>Spread (פיזור)</b> — פורש איברים של מערך או מפתחות של אובייקט לתוך יעד חדש. משמש ליצירת עותקים ומיזוגים.</li>
     <li><b>Rest (איסוף)</b> — אוסף את שאר האיברים שנשארו לתוך מערך אחד מרוכז.</li>
    </ul>
    <pre><code><span class="t-com">// 1. Spread - מיזוג מערכים ויצירת עותק חדש</span>
<span class="t-key">const</span> original = [<span class="t-num">1</span>, <span class="t-num">2</span>];
<span class="t-key">const</span> copy = [...original, <span class="t-num">3</span>, <span class="t-num">4</span>]; <span class="t-com">// [1, 2, 3, 4]</span>

<span class="t-com">// 2. Rest - איסוף שאריות בתוך Destructuring</span>
<span class="t-key">const</span> [head, ...tail] = [<span class="t-num">10</span>, <span class="t-num">20</span>, <span class="t-num">30</span>, <span class="t-num">40</span>];
<span class="t-com">// head = 10, tail = [20, 30, 40]</span></code></pre>
   </div>
  `
 },
 syntaxWarehouse: {
  title: '🏪 מחסן הסינטקסים הגדול',
  content: `
   <div class="card-body">
    <p class="lead">מאגר של תבניות סינטקס מוכנות לעבודה מהירה. השתמשו בו כרפרנס פתוח בזמן כתיבת קוד.</p>
    
    <div class="legend">
     📖 <b>איך לקרוא:</b> כל חלק שנמצא בתוך <span class="fill">תיבה מקווקוות</span> הוא משתנה שאתם צריכים להחליף בערכים שלכם בהתאם לבעיה.
    </div>

    <div class="modal-grid">
     <div class="modal-card">
      <h4>לולאה ממוקדת מערך (map / filter / reduce)</h4>
      <pre><code><span class="t-com">// map - יצירת מערך מעובד חדש</span>
<span class="t-key">const</span> <span class="fill">newArr</span> = <span class="fill">arr</span>.<span class="t-fn">map</span>(item => <span class="fill">item * 2</span>);

<span class="t-com">// filter - סינון לפריטים שעומדים בתנאי</span>
<span class="t-key">const</span> <span class="fill">filtered</span> = <span class="fill">arr</span>.<span class="t-fn">filter</span>(item => <span class="fill">item.isActive === true</span>);

<span class="t-com">// reduce - צמצום למספר/ערך יחיד</span>
<span class="t-key">const</span> <span class="fill">sum</span> = <span class="fill">arr</span>.<span class="t-fn">reduce</span>((acc, cur) => <span class="fill">acc + cur</span>, <span class="t-num">0</span>);</code></pre>
     </div>

     <div class="modal-card">
      <h4>קריאה וכתיבה של קבצים ב-Node (אסינכרוני)</h4>
      <pre><code><span class="t-key">const</span> fs = <span class="t-fn">require</span>(<span class="t-str">"fs"</span>).promises;

<span class="t-com">// קריאה</span>
<span class="t-key">const</span> rawData = <span class="t-ctl">await</span> fs.<span class="t-fn">readFile</span>(<span class="fill">"./data.json"</span>, <span class="t-str">"utf-8"</span>);
<span class="t-key">const</span> data = JSON.<span class="t-fn">parse</span>(rawData);

<span class="t-com">// כתיבה</span>
<span class="t-ctl">await</span> fs.<span class="t-fn">writeFile</span>(<span class="fill">"./data.json"</span>, JSON.<span class="t-fn">stringify</span>(<span class="fill">data</span>, <span class="t-key">null</span>, <span class="t-num">2</span>));</code></pre>
     </div>

     <div class="modal-card">
      <h4>קריאת בקשת רשת (fetch) ב-try/catch</h4>
      <pre><code><span class="t-ctl">try</span> {
 <span class="t-key">const</span> res = <span class="t-ctl">await</span> <span class="t-fn">fetch</span>(<span class="fill">url</span>);
 <span class="t-ctl">if</span> (!res.ok) <span class="t-ctl">throw</span> <span class="t-key">new</span> <span class="t-fn">Error</span>(<span class="t-str">"Request failed"</span>);
 <span class="t-key">const</span> data = <span class="t-ctl">await</span> res.<span class="t-fn">json</span>();
 console.<span class="t-fn">log</span>(data);
} <span class="t-ctl">catch</span> (err) {
 console.<span class="t-fn">error</span>(err.message);
}</code></pre>
     </div>
    </div>
   </div>
  `
 },
 pythonVsJs: {
  title: '🐍 Python מול JavaScript 🟨',
  content: `
   <div class="card-body">
    <p class="lead">טבלת השוואה מהירה למתכנתים שמגיעים מרקע של Python ללימוד JavaScript המודרני.</p>
    <div class="tbl-scroll">
     <table>
      <thead>
       <tr><th>תכונה</th><th>Python 🐍</th><th>JavaScript 🟨</th></tr>
      </thead>
      <tbody>
       <tr><td>הדפסה לקונסול</td><td><code>print("hello")</code></td><td><code>console.log("hello")</code></td></tr>
       <tr><td>הכרזת משתנים</td><td><code>x = 5</code></td><td><code>const x = 5;</code> / <code>let x = 5;</code></td></tr>
       <tr><td>פונקציות</td><td><code>def greet(n): return n</code></td><td><code>function greet(n) { return n }</code> / <code>const greet = n => n</code></td></tr>
       <tr><td>לולאת איברים</td><td><code>for x in list:</code></td><td><code>for (const x of list) { ... }</code></td></tr>
       <tr><td>לולאה על מפתחות</td><td><code>for k in dict:</code></td><td><code>for (const k in object) { ... }</code></td></tr>
       <tr><td>רשת ומילונים</td><td><code>dict = {"a": 1}</code></td><td><code>const obj = { a: 1 };</code></td></tr>
       <tr><td>ערך ריק</td><td><code>None</code></td><td><code>null</code> / <code>undefined</code></td></tr>
       <tr><td>השוואה מדוייקת</td><td><code>x is y</code></td><td><code>x === y</code></td></tr>
       <tr><td>הכנסת משתנה לטקסט</td><td><code>f"Hi {name}"</code></td><td><code>\`Hi \${name}\`</code></td></tr>
       <tr><td>אורך רשימה</td><td><code>len(arr)</code></td><td><code>arr.length</code></td></tr>
       <tr><td>הוספה למערך</td><td><code>arr.append(x)</code></td><td><code>arr.push(x)</code></td></tr>
      </tbody>
     </table>
    </div>
   </div>
  `
 },
 ironRules: {
  title: '⚔️ עשרת כללי הברזל למבחן',
  content: `
   <div class="card-body">
    <div class="modal-grid">
     <div class="rule-card">
      <h4>1. תמיד להשתמש ב-=== קשוח</h4>
      <p>מנעו המרות טיפוסים בלתי צפויות. לעולם אל תשתמשו ב-<code>==</code>.</p>
      <div class="bad">5 == "5" // true (שגיאה עיצובית!)</div>
      <div class="good">5 === "5" // false (תקין ומדוייק)</div>
     </div>
     
     <div class="rule-card">
      <h4>2. const הוא ברירת המחדל שלכם</h4>
      <p>הגדירו כל משתנה כ-<code>const</code>. רק אם אתם חייבים לשנות את ערכו בהמשך הלוגיקה, שנו אותו ל-<code>let</code>.</p>
     </div>

     <div class="rule-card">
      <h4>3. זהירות עם sort() של מספרים</h4>
      <p>המתודה <code>sort()</code> ללא פרמטרים תמיין את המספרים כטקסט. תמיד ספקו פונקציית השוואה.</p>
      <div class="bad">[10, 2].sort() // [10, 2]</div>
      <div class="good">[10, 2].sort((a,b) => a-b) // [2, 10]</div>
     </div>

     <div class="rule-card">
      <h4>4. res.end() בסיום שרת Vanilla</h4>
      <p>בשרת Vanilla, אם לא תקראו ל-<code>res.end()</code> הדפדפן יישאר תקוע בהמתנה אינסופית.</p>
     </div>

     <div class="rule-card">
      <h4>5. ארבעה פרמטרים ב-Middleware של שגיאות ב-Express</h4>
      <p>מטפל שגיאות מרכזי חייב לקבל בדיוק 4 פרמטרים: <code>(err, req, res, next)</code> כדי ש-Express ידע שהוא מטפל בשגיאות.</p>
     </div>
    </div>
   </div>
  `
 },
 keyboard: {
  title: '⌨️ קיצורי VS Code למתכנתים מהירים',
  content: `
   <div class="card-body">
    <p class="lead">שימוש במקלדת במקום בעכבר יחסוך לכם המון זמן יקר במהלך כתיבת פרויקטים ומבחנים.</p>
    <div class="modal-grid">
     <div class="modal-card">
      <h4>קיצורי עריכה וניווט מהירים</h4>
      <div class="shortcut-row">
       <span class="shortcut-desc">בחירת המופע הבא של הטקסט המסומן (לעריכה מרובה)</span>
       <div class="key-combo"><span class="key">Ctrl</span><span class="key-plus">+</span><span class="key">D</span></div>
      </div>
      <div class="shortcut-row">
       <span class="shortcut-desc">הזזת שורה למעלה/למטה</span>
       <div class="key-combo"><span class="key">Alt</span><span class="key-plus">+</span><span class="key">⬆/⬇</span></div>
      </div>
      <div class="shortcut-row">
       <span class="shortcut-desc">שכפול שורה למטה</span>
       <div class="key-combo"><span class="key">Shift</span><span class="key-plus">+</span><span class="key">Alt</span><span class="key-plus">+</span><span class="key">⬇</span></div>
      </div>
      <div class="shortcut-row">
       <span class="shortcut-desc">פתיחה וסגירה של הטרמינל המובנה</span>
       <div class="key-combo"><span class="key">Ctrl</span><span class="key-plus">+</span><span class="key">\`</span></div>
      </div>
      <div class="shortcut-row">
       <span class="shortcut-desc">חיפוש קובץ מהיר בפרויקט לפי שם</span>
       <div class="key-combo"><span class="key">Ctrl</span><span class="key-plus">+</span><span class="key">P</span></div>
      </div>
     </div>
    </div>
   </div>
  `
 },
 libraries: {
  title: '📚 ספריות צד-שלישי נפוצות ב-Node',
  content: `
   <div class="card-body">
    <p class="lead">ספריות פופולריות הניתנות להתקנה באמצעות מנהל החבילות npm:</p>
    <div class="modal-grid">
     <div class="lib-card">
      <h4>readline-sync</h4>
      <p>משמשת לקבלת קלט מהמשתמש בטרמינל בצורה סינכרונית (עוצרת וממתינה להקלדה).</p>
      <div class="install-cmd">npm install readline-sync</div>
     </div>
     <div class="lib-card">
      <h4>express</h4>
      <p>הספרייה הפופולרית ביותר להקמת שרתים ו-APIs בצורה קלה ומודולרית.</p>
      <div class="install-cmd">npm install express</div>
     </div>
      <p>טוענת משתני סביבה מאובטחים מקובץ <code>.env</code> לתוך האפליקציה (למשל סיסמאות ומפתחות רשת).</p>
      <div class="install-cmd">npm install dotenv</div>
     </div>
    </div>
   </div>
  `
 },
 techEnglish: {
  title: '🔤 אנגלית טכנולוגית המלא (Technology English - 50+ Terms)',
  content: `
   <div class="card-body">
    <p class="lead" style="font-size: 1.1rem; line-height: 1.8;">
    מילון המונחים המורחב! כאן תמצאו הסברים כמו (ופחות כמו לרובוטים 🤖) עבור כל המילים באנגלית שאנחנו שומעים בשיעורים, בהרצאות הזום, ורואים בקוד שלנו. <br>
    <strong>💡 חדש:</strong> תוכלו לסמן "V" על כל מושג שהבנתם כדי לעקוב אחר ההתקדמות שלכם! (הסימונים יישמרו גם מחר).
    </p>

    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מושגי יסוד (Basics)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Variable</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: וֶארִיאַבֶּל | תרגום: משתנה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> קופסה בזיכרון של המחשב שאנחנו שמים בה מידע. כמו קופסת נעליים שכתבנו עליה 'גיל' ושמנו בפנים את המספר 20.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-variable" onchange="toggleTechWord('variable', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">String</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: סטרינג | תרגום: מחרוזת / טקסט</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> טקסט רגיל. נקרא ככה כי זה 'מחרוזת של אותיות'. תמיד יופיע בתוך מירכאות כמו 'שלום'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-string" onchange="toggleTechWord('string', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Integer</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אִינְטֶגֶ'ר | תרגום: מספר שלם</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מספר שאין בו נקודה עשרונית, למשל 5, 10, 42.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-integer" onchange="toggleTechWord('integer', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Float</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פְלוֹאוּט | תרגום: מספר עשרוני</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מספר עם נקודה עשרונית ('צף' על פני הנקודה), למשל 3.14.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-float" onchange="toggleTechWord('float', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Boolean</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: בּוּלִיאַן | תרגום: בוליאני (אמת/שקר)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> סוג נתון שיכול להיות רק אחד משני דברים: אמת (true) או שקר (false). כמו מתג של אור.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-boolean" onchange="toggleTechWord('boolean', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Array</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֲרֵיי | תרגום: מערך / רשימה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> רשימה מסודרת של פריטים. כמו מגירת גרביים שכל זוג גרביים מסודר לפי מספר.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-array" onchange="toggleTechWord('array', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Object</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אוֹבְּגֶ'קְט | תרגום: אובייקט</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מבנה נתונים שמתאר 'דבר' שלם בעזרת תכונות (מפתחות וערכים). כמו תיק אישי של בן אדם שיש בו שם, גיל, וכתובת.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-object" onchange="toggleTechWord('object', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Property</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פְּרוֹפֶּרְטִי | תרגום: מאפיין / תכונה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> משתנה שנמצא בתוך אובייקט. למשל באובייקט אוטו, התכונה יכולה להיות 'צבע'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-property" onchange="toggleTechWord('property', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Method</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: מֶתּוֹד | תרגום: מתודה / פעולה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> פונקציה שנמצאת בתוך אובייקט. למשל באובייקט אוטו, המתודה יכולה להיות 'לסוע()'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-method" onchange="toggleTechWord('method', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Loop</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: לוּפּ | תרגום: לולאה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> פעולה שחוזרת על עצמה כמה פעמים שאנחנו מבקשים, או עד שתנאי מסוים מתקיים.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-loop" onchange="toggleTechWord('loop', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Iteration</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אִיטֶרֵייְשֶׁן | תרגום: איטרציה / סבב</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> פעם אחת מתוך כל הפעמים שהלולאה רצה. 'הלולאה עשתה 5 איטרציות'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-iteration" onchange="toggleTechWord('iteration', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Condition</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קוֹנְדִישֶׁן | תרגום: תנאי</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> משפט לוגי שאומר למחשב: 'רק אם X נכון, תעשה Y'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-condition" onchange="toggleTechWord('condition', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Syntax</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: סִינְטַקְס | תרגום: תחביר</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הדקדוק של שפת התכנות. הכללים איך בדיוק צריך לכתוב את הקוד (איפה שמים נקודה-פסיק, סוגריים וכו').</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-syntax" onchange="toggleTechWord('syntax', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Const</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קוֹנְסְט | תרגום: קבוע</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הצהרה על משתנה שאי אפשר לשנות את הערך שלו אחרי שהגדרנו אותו. כמו חוזה חתום.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-const" onchange="toggleTechWord('const', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Let</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: לֶט | תרגום: משתנה שניתן לשינוי</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הצהרה על משתנה שאנחנו יכולים לעדכן בהמשך.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-let" onchange="toggleTechWord('let', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Var</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: וַאר | תרגום: משתנה (ישן)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הדרך הישנה (לפני ES6) להגדיר משתנים. אנחנו משתדלים לא להשתמש בה יותר כי היא עושה בלאגן עם ה-Scope.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-var" onchange="toggleTechWord('var', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Null</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: נַאל | תרגום: כלום / ריק מכוון</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> ערך שאומר 'אין פה כלום, וזה בכוונה'. אנחנו הכנסנו את הכלום הזה לשם.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-null" onchange="toggleTechWord('null', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Undefined</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אַנְדִיפַיינְד | תרגום: לא מוגדר</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> ערך שאומר 'המחשב לא יודע מה זה'. משתנה שנוצר אבל מעולם לא הכניסו לתוכו שום ערך.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-undefined" onchange="toggleTechWord('undefined', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>
    </div>
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">פונקציות, היקף ומתקדם (Functions & Scope)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Function</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פַאנְקְשֶׁן | תרגום: פונקציה / פעולה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> חתיכת קוד שעושה פעולה מסוימת ויש לה שם. אפשר לקרוא לה מתי שרוצים במקום לכתוב את הקוד מחדש.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-function" onchange="toggleTechWord('function', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Parameter</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פָּרָמֶטֶר | תרגום: פרמטר (בתוך הפונקציה)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> המשתנה (המקום השמור) שאנחנו מגדירים בתוך הסוגריים כשאנחנו בונים את הפונקציה. כמו שלט שאומר 'כאן ייכנס שם'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-parameter" onchange="toggleTechWord('parameter', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Argument</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אַרְגְיוּמֶנְט | תרגום: ארגומנט / ערך נשלח</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הערך האמיתי שאנחנו שולחים לפונקציה כשאנחנו מפעילים אותה. (למשל: נתן, גיל 20).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-argument" onchange="toggleTechWord('argument', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Return</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רִיטֶרְן | תרגום: החזרה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הפקודה שזורקת את התשובה מתוך הפונקציה בחזרה למי שקרא לה.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-return" onchange="toggleTechWord('return', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Arrow Function</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶרוֹ פַאנְקְשֶׁן | תרגום: פונקציית חץ</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> דרך קצרה ומודרנית (ES6) לכתוב פונקציה. בלי המילה function, רק חץ מגניב =&#62; .</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-arrow_function" onchange="toggleTechWord('arrow_function', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Callback</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קוֹלְבֶּק | תרגום: קריאה חוזרת (קולבק)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> פונקציה שאנחנו שולחים לתוך פונקציה אחרת, ואומרים לה: 'תפעילי את זה כשאת מסיימת!'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-callback" onchange="toggleTechWord('callback', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Scope</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: סְקוֹפּ | תרגום: היקף / טווח הכרה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> ה'שטח' שבו משתנה מוכר. משתנה שנכתב בתוך פונקציה (Scope מקומי) לא מוכר בחוץ.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-scope" onchange="toggleTechWord('scope', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Global</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: גְלוֹבַּל | תרגום: גלובלי</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> משתנה שכתוב מחוץ לכל הפונקציות. כולם יכולים לראות אותו ולשנות אותו (כמו שלט חוצות).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-global" onchange="toggleTechWord('global', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Local</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: לוֹקַל | תרגום: מקומי</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> משתנה שחי רק בתוך הפונקציה או הסוגריים המסולסלים שלו (כמו יומן אישי).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-local" onchange="toggleTechWord('local', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Closure</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קְלוֹזֶ'ר | תרגום: סגירה / קלוז'ר</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> קסם ב-JS שבו פונקציה פנימית 'זוכרת' את המשתנים של הפונקציה שעטפה אותה, גם אחרי שהחיצונית סיימה לעבוד.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-closure" onchange="toggleTechWord('closure', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Hoisting</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: הוֹיְסְטִינְג | תרגום: הנפה (משיכה למעלה)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הנטייה של JS לקחת פונקציות ומשתנים (var) ולהרים אותם לראש הקובץ לפני שהקוד רץ.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-hoisting" onchange="toggleTechWord('hoisting', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Destructuring</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דִיסְטְרַקְצְ'רִינְג | תרגום: פירוק</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> חילוץ משתנים מתוך אובייקט או מערך בשורה אחת. למשל const {name} = obj.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-destructuring" onchange="toggleTechWord('destructuring', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>
    </div>
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">אסינכרוניות ואיוונט לופ (Async & Event Loop)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Synchronous</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: סִינְכְּרוֹנִיס | תרגום: סינכרוני / אחד אחרי השני</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הדרך הרגילה שבה קוד רץ - שורה אחרי שורה. אם שורה נתקעת, כל התוכנה נתקעת!</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-synchronous" onchange="toggleTechWord('synchronous', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Asynchronous</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֵסִינְכְּרוֹנִיס | תרגום: א-סינכרוני / עבודה ברקע</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> קוד שמבצע משימות ברקע (כמו לחכות לטיימר או לאינטרנט) ולא עוצר את שאר התוכנה.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-asynchronous" onchange="toggleTechWord('asynchronous', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Event Loop</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אִיוֶונְט לוּפּ | תרגום: לולאת האירועים</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מנוע הקסם של JS שרץ כל הזמן, בודק אם המחסנית (Call Stack) ריקה, ואם כן - דוחף לשם קולבקים שסיימו לחכות.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-event_loop" onchange="toggleTechWord('event_loop', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Call Stack</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קוֹל סְטַאק | תרגום: מחסנית הקריאות</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> השולחן העבודה של JS. כל פונקציה שרצה נערמת שם, וכשהיא מסיימת היא יורדת משם.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-call_stack" onchange="toggleTechWord('call_stack', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Callback Queue</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קוֹלְבֶּק קְיוּ | תרגום: תור הקולבקים</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> חדר ההמתנה! כל משימה שסיימה לחכות ברקע (כמו טיימר שנגמר) נכנסת לתור הזה ומחכה שה-Call Stack יתפנה.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-callback_queue" onchange="toggleTechWord('callback_queue', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Promise</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פְּרוֹמִיס | תרגום: הבטחה (פרומיס)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> אובייקט חכם שאומר 'אני אביא לך את הנתונים בעתיד'. יכול להצליח (Resolve) או להיכשל (Reject).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-promise" onchange="toggleTechWord('promise', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Resolve</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רִיזוֹלְבּ | תרגום: הבטחה קוימה (הצלחה)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> המצב שבו ה-Promise סיים בהצלחה והביא לנו את מה שביקשנו.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-resolve" onchange="toggleTechWord('resolve', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Reject</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רִיגֶ'קְט | תרגום: הבטחה נכשלה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> המצב שבו ה-Promise נתקל בשגיאה (למשל, אין אינטרנט).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-reject" onchange="toggleTechWord('reject', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Async</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֵסִינְק | תרגום: פונקציה אסינכרונית</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מילה ששמים לפני פונקציה כדי להפוך אותה לאסינכרונית. פונקציה כזו תמיד מחזירה Promise.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-async" onchange="toggleTechWord('async', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Await</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אָוֶויְיט | תרגום: המתן</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מילה שאפשר לכתוב רק בתוך Async. היא אומרת: 'תעצור פה ותחכה עד שה-Promise יסיים, ורק אז תמשיך'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-await" onchange="toggleTechWord('await', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Fetch</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פֶצ' | תרגום: תביא / בקשת רשת</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> פונקציה מובנית שמשתמשים בה כדי לבקש מידע משרת אחר דרך האינטרנט (תמיד מחזירה Promise).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-fetch" onchange="toggleTechWord('fetch', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Then</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דֶ'ן | תרגום: ואז (בהצלחה)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> החלק ב-Promise שמופעל ברגע שהוא מצליח (Resolve).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-then" onchange="toggleTechWord('then', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Catch</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קֶאטְצ' | תרגום: תפוס שגיאה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> החלק ב-Promise שמופעל כשיש כישלון (Reject).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-catch" onchange="toggleTechWord('catch', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Timeout</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: טַיְימְאוּט | תרגום: השהייה (טיימר)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> כמו setTimeout - פעולה שקורית פעם אחת אחרי זמן מסוים.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-timeout" onchange="toggleTechWord('timeout', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Interval</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אִינְטֶרְבַל | תרגום: חזרה קבועה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> כמו setInterval - פעולה שקורית שוב ושוב כל כמה שניות.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-interval" onchange="toggleTechWord('interval', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>
    </div>
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">שרתים ו-Web (HTTP & APIs)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Server</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: סֶרְבֶר | תרגום: שרת</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מחשב שרץ כל הזמן ומחכה שאנשים יבקשו ממנו מידע. 'המסעדה'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-server" onchange="toggleTechWord('server', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Client</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קְלַיֶנְט | תרגום: לקוח / צד לקוח</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הדפדפן או האפליקציה בטלפון שמבקשת מידע מהשרת. 'הסועד במסעדה'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-client" onchange="toggleTechWord('client', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Request</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רִיקְוֶוסְט (req) | תרגום: בקשה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> ההודעה שהלקוח שולח לשרת. כוללת את מה שהוא רוצה (Body, URL, Headers).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-request" onchange="toggleTechWord('request', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Response</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רִיסְפּוֹנְס (res) | תרגום: תשובה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> התשובה שהשרת מחזיר ללקוח. (בדרך כלל JSON או HTML).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-response" onchange="toggleTechWord('response', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Header</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: הֶדֶר | תרגום: כותרת הבקשה/תשובה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מידע טכני נסתר שמצורף למעטפה (כמו 'התוכן פה הוא מטיפוס JSON' או 'איזה דפדפן אני').</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-header" onchange="toggleTechWord('header', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Method (HTTP)</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: מֶתּוֹד | תרגום: שיטת הפעולה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הפועל שאומר לשרת מה לעשות: לקבל, למחוק, לשנות... (GET, POST וכו').</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-method_(http)" onchange="toggleTechWord('method_(http)', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">GET</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: גֶט | תרגום: הבא מידע</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> בקשה מהשרת לקבל נתונים בלי לשנות כלום במאגר (כמו להסתכל על תפריט).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-get" onchange="toggleTechWord('get', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">POST</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פּוֹסְט | תרגום: צור חדש</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> בקשה מהשרת ליצור משהו חדש (כמו להוסיף משתמש או לבצע הזמנה). מגיע עם Body.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-post" onchange="toggleTechWord('post', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">PUT</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פּוּט | תרגום: עדכן / דרוס</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> בקשה מהשרת לעדכן מידע קיים לחלוטין. (לדרוס פריט).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-put" onchange="toggleTechWord('put', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">DELETE</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דִילִיט | תרגום: מחק</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> בקשה מהשרת למחוק משהו.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-delete" onchange="toggleTechWord('delete', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">URL</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: יוּ אָר אֶל | תרגום: כתובת רשת</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הכתובת המלאה שאליה אנחנו פונים (כמו הכתובת של המסעדה).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-url" onchange="toggleTechWord('url', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Endpoint</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶנְד־פּוֹיְנְט | תרגום: נקודת קצה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> נתיב ספציפי בשרת שעושה פעולה מסוימת. למשל '/users/login'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-endpoint" onchange="toggleTechWord('endpoint', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Port</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פּוֹרְט | תרגום: שער / פורט</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מספר 'הדלת' בשרת שממנה אנחנו נכנסים (למשל, שרת רץ בדרך כלל על דלת/פורט 3000).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-port" onchange="toggleTechWord('port', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">JSON</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: גֶ'יְיסוֹן | תרגום: שפת נתונים - ג'ייסון</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> פורמט הנתונים המקובל ביותר באינטרנט. נראה ממש כמו אובייקט JS רק שכל המפתחות בתוך מירכאות כפולות.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-json" onchange="toggleTechWord('json', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">DOM</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דוֹם | תרגום: מבנה הדף</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> המבנה של ה-HTML כפי שהדפדפן ו-JS רואים אותו. (עץ של אלמנטים).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-dom" onchange="toggleTechWord('dom', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Node.js</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: נוֹד.גֶ'יְי.אֶס | תרגום: סביבת ההרצה נוד</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> התוכנה שמאפשרת לנו להריץ JS על המחשב או השרת שלנו, ולא רק בתוך הדפדפן.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-node.js" onchange="toggleTechWord('node.js', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">NPM</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶן פִּי אֶם | תרגום: מנהל החבילות</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> החנות החינמית של קוד! מקום שממנו אנחנו מורידים ספריות קוד של אנשים אחרים למחשב שלנו.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-npm" onchange="toggleTechWord('npm', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Package</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פֶּקֶג' | תרגום: חבילת קוד</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> ספריית קוד שמישהו כתב ואנחנו מורידים. (למשל axios, express).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-package" onchange="toggleTechWord('package', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>
    </div>
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">אקספרס וצד שרת (Express & Backend)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Express</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶקְסְפְּרֶס | תרגום: ספריית אקספרס</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הספרייה הפופולרית ביותר ב-Node.js להקמת שרת. קלה ופשוטה כמו לגו.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-express" onchange="toggleTechWord('express', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Route</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רַאוּט | תרגום: נתיב (המלצר)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מסלול שמוגדר בשרת שאומר: 'אם לקוח מבקש את הכתובת הזו, תעשה את הפעולה הזו'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-route" onchange="toggleTechWord('route', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Router</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רַאוּטֶר | תרגום: ראוטר / נתב</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> כלי באקספרס שמאפשר לנו לפצל את הראוטים לקבצים שונים כדי שהקוד יהיה מסודר (אחראי משמרת למלצרים).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-router" onchange="toggleTechWord('router', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Middleware</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: מִידֶל־ווֶר | תרגום: שומר הסף / תווך</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> פונקציה שיושבת *באמצע* (בין הלקוח למלצר). היא יכולה לבדוק, לשנות, או לחסום בקשות לפני שהן מגיעות ליעד.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-middleware" onchange="toggleTechWord('middleware', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Params</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פָּרָאמְז (req.params) | תרגום: פרמטרים בנתיב</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> משתנים שמועברים ממש בתוך כתובת ה-URL עצמה (למשל מספר זהות בתוך /users/1).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-params" onchange="toggleTechWord('params', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Query</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קְווֶרִי (req.query) | תרגום: שורת החיפוש בנתיב</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> פרמטרים אופציונליים לחיפוש וסינון שנכתבים אחרי סימן שאלה.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-query" onchange="toggleTechWord('query', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Body</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: בּוֹדִי (req.body) | תרגום: גוף הבקשה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> התוכן (המעטפה הסגורה) שהלקוח שולח לשרת בבקשות POST או PUT.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-body" onchange="toggleTechWord('body', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Next</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: נֶקְסְט | תרגום: הבא בתור!</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הפקודה שכל Middleware חייב להפעיל כדי להעביר את הבקשה לשומר/למלצר הבא. בלעדיה הלקוח נתקע.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-next" onchange="toggleTechWord('next', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Error Handling</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶרוֹר הֶנְדְלִינְג | תרגום: טיפול בשגיאות</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> Middleware מיוחד בסוף הקובץ עם 4 פרמטרים שתופס שגיאות רעות כדי שהשרת לא יקרוס ויכבה.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-error_handling" onchange="toggleTechWord('error_handling', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Status Code</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: סְטָטוּס קוֹד | תרגום: קוד תשובה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מספר קצר שהשרת מחזיר. 200 = הכל טוב, 400 = הלקוח שגה, 404 = לא נמצא, 500 = השרת נפל.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-status_code" onchange="toggleTechWord('status_code', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">API</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֵיְי פִּי אַיי | תרגום: ממשק התממשקות</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הדרך (התפריט) שבאמצעותה הלקוח והשרת מדברים ביניהם ומחליפים נתונים.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-api" onchange="toggleTechWord('api', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">REST</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רֶסְט | תרגום: תקן API</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> צורת בנייה מוסכמת ל-API. (למשל, שמשתמשים ב-GET להביא נתונים וב-POST ליצור חדש).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-rest" onchange="toggleTechWord('rest', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">CRUD</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קְרַאד | תרגום: 4 פעולות הבסיס</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> ראשי תיבות של Create, Read, Update, Delete. הפעולות הבסיסיות בכל מערכת נתונים.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-crud" onchange="toggleTechWord('crud', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
     </div>
    </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Vanilla HTTP</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: וָנִילָה HTTP | תרגום: שרת טהור ללא ספריות</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> בניית שרת באמצעות מודול ה-<code>http</code> המובנה בלבד, ללא Express או ספריות עזר. כמו לבנות פיצה מאפס בלי תבנית מוכנה.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-vanilla_http" onchange="toggleTechWord('vanilla_http', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Environment Variable (dotenv)</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶנְוַיְרוֹנְמֶנְט וֶרְיָאבְּל | תרגום: משתנה סביבה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מידע רגיש (סיסמאות, מפתחות) שנשמר בקובץ <code>.env</code> ונקרא דרך <code>process.env</code>. כמו כספת סודית שרק הצוות יודע את הקוד שלה.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-env_var" onchange="toggleTechWord('env_var', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">CORS</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קוֹרְז | תרגום: שיתוף משאבים בין מקורות</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> Cross-Origin Resource Sharing. מנגנון אבטחה שהדפדפן מפעיל כדי למנוע מאתר זר לגשת לשרת שלך. כמו שכן שדורש אישור כדי להיכנס לחצר שלך.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-cors" onchange="toggleTechWord('cors', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Payload</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פֵּיְלוֹאַד | תרגום: מטען / תוכן שימושי</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> המידע האמיתי שנשלח בבקשה או בתשובה — בניגוד ל-Headers שהם רק מטא-דאטה. כמו התוכן שבתוך חבילת דואר (לא המעטפה עצמה).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-payload" onchange="toggleTechWord('payload', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

    </div>
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מושגי דוקר (Docker Basics)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אִימֶג' | תרגום: תמונת מצב / שרטוט</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> תבנית סגורה המכילה קוד, ספריות והגדרות שנדרשות להפעלת התוכנה. אי אפשר לשנות אותה אחרי שנוצרה, כמו שרטוט של בית.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-image" onchange="toggleTechWord('image', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קוֹנְטֵיְינֶר | תרגום: מכולה (סביבת ריצה)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> זה מה שקורה כשמפעילים את ה-Image. סביבה מבודדת שבה התוכנה באמת רצה. כמו הבית שנבנה מהשרטוט!</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-container" onchange="toggleTechWord('container', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דִימוֹן | תרגום: שדון רקע / מנוע דוקר</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> השירות של דוקר שרץ ברקע במחשב המארח ומנהל את יצירת המכולות, התמונות והרשתות. הוא "המוח" מאחורי הקלעים.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-daemon" onchange="toggleTechWord('daemon', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Port Mapping</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פּוֹרְט מֵפִּינְג | תרגום: מיפוי פורטים / דלתות</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> הדרך שבה אנחנו מחברים בין הדלת של המחשב שלנו (למשל פורט 8080) לדלת הפנימית של הקונטיינר (למשל פורט 80), כדי שהעולם יוכל לגשת לתוכנה.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-port_mapping" onchange="toggleTechWord('port_mapping', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        סימנתי ב- V (הבנתי!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: בַּיינְד מַאוּנְट | תרגום: חיבור תיקיות</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> חיבור תיקייה במחשב שלנו ישירות לתוך הקונטיינר. שימושי למפתחים שרוצים שכל שמירת קוד במחשב תתעדכן מיד גם בתוך המכולה, מבלי לבנות Image מחדש!</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-bind_mount" onchange="toggleTechWord('bind_mount', this.checked)" style="transform: scale(1.3); cursor: pointer;">
         סימנתי ב- V (הבנתי!)
        </label>
       </div>
      </div>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">🐳 Docker & Containers (CLI)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Run (הפעלת קונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker run -d -p 8080:80 --name web nginx</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-d</code> - Detached (ברקע)</li>
       <li><code>-p 8080:80</code> - Port Mapping (מארח:קונטיינר)</li>
       <li><code>--name</code> - נתינת שם קריא לקונטיינר</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Build (בניית תמונה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker build -t myapp:v1 .</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-t</code> - נותן תגית/שם לאימג'</li>
       <li><code>.</code> - הנקודה מסמלת את התיקייה הנוכחית</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Compose (הפעלת סביבה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker-compose up -d</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li>קורא את הקובץ <code>docker-compose.yml</code> ומדליק את כל השרתים.</li>
       <li><code>down</code> יכבה וימחק את הרשת.</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Exec (כניסה לקונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker exec -it web bash</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-it</code> - אינטראקטיבי (משאיר חלון פתוח)</li>
       <li>פותח טרמינל (bash או sh) בתוך קונטיינר חי.</li>
      </ul>
     </div>
    </div>
   </div>
`
 }
 , expressKids: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container"><div class="anim-node">ילד רעב</div><div class="anim-packet move-right" style="background:#ff9800;">הזמנה לפסטה</div><div class="anim-node">טבח (Express)</div></div>
            `,
            text: "<b>שרתי Express - המחשה לילדים</b><br>Express עובדת כמו מסעדה! המלצר לוקח את ההזמנה שלך (הבקשה), מביא אותה למטבח (הראוטר/הנתיב), והטבח מכין את המנה ומחזיר לך (התשובה)."
        }
    ],

  title: '👶 שרת Express - הסבר מההתחלה בשפה פשוטה',
  content: `
   <div class="card-body">
    <p class="lead" style="font-size: 1.1rem; line-height: 1.8;">
    החבר נתן לך שלד מעולה לפרויקט חנות. אבל איך בכלל ניגשים אליו? איך המחשב חושב? <br>
    בואו נפרק את הכל לגורמים, כמו שמסבירים לילד. בלי מילים מפוצצות.
    </p>
    
    <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">🍔 משל המסעדה (השרת)</h3>
    <p>תדמיין ששרת הוא <b>מסעדה</b>.</p>
    <ul>
     <li><b>הלקוח (Client):</b> זה אתה, מגיע רעב למסעדה (הדפדפן או Postman).</li>
     <li><b>המלצר (Router / Route):</b> אתה לא נכנס ישר למטבח, נכון? המלצר הוא זה שלוקח ממך את ההזמנה. אם ביקשת צ'יפס (Endpoint: <code>/cart</code>), הוא הולך למטבח ואומר לטבח "תכין צ'יפס".</li>
     <li><b>הטבח (Service):</b> המלצר לא מטגן בעצמו. הטבח הוא זה שניגש למקרר (לוקח את חומרי הגלם) ומכין את האוכל בפועל.</li>
     <li><b>המקרר (Database / JSON file):</b> איפה שנמצא האוכל עצמו.</li>
    </ul>

    <div style="background: rgba(245, 197, 24, 0.05); border-left: 4px solid var(--gold); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
     <h4 style="color: var(--gold);">למה החבר חילק ככה את הקבצים?</h4>
     <p>
      אפשר שהמלצר גם ייקח הזמנה, גם יטגן, גם ילך למקרר ויחזור? כן, אבל אז הוא יקרוס מעומס, נכון? <br>
      לכן <b>מפרידים עבודה</b>: <br>
      - קבצי ה-<code>routes</code> (המלצרים) רק מקבלים את הבקשה מהלקוח: <i>"הוא רוצה מוצר"</i>.<br>
      - הם קוראים ל-<code>services</code> (הטבחים): <i>"חבר'ה, לכו לקובץ JSON ותביאו את המוצר"</i>.
     </p>
    </div>

    <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--sky);">🏗️ איך בונים פרויקט מאפס?</h3>
    
    <ol style="line-height: 1.8;">
     <li>
      <b>שלב ראשון - מתחילים מאפס:</b> <br>
      פותחים תיקייה ריקה ב-VSCode, פותחים מסוף (Terminal) וכותבים: <code>npm init -y</code>.
      <br><em>מה זה עשה?</em> זה יצר קובץ <code>package.json</code> שזה כמו "תעודת זהות" של הפרויקט שלך. המחשב כותב שם "הפרויקט הזה קוראים לו חנות, והוא משתמש בספריית אקספרס".
     </li>
     
     <li>
      <b>שלב שני - מביאים את הלגו (Express):</b> <br>
      במסוף כותבים: <code>npm install express</code>. 
      <br><em>מה זה עשה?</em> הוריד קוד מוכן מראש שיחסוך לך לבנות הכל לבד. כמו לקנות בסיס לפיצה במקום לאפות מבצק.
     </li>

     <li>
      <b>שלב שלישי - המנהל (index.js):</b> <br>
      יוצרים קובץ בשם <code>index.js</code>. זה מנהל המסעדה. הוא רק מפעיל את המסעדה ואומר למלצרים איפה לעמוד.<br>
      <pre style="margin-top: 8px; font-size: 0.8rem; padding: 10px;"><code>import express from 'express';
const app = express();
app.listen(3000, () => console.log('המסעדה פתוחה בפורט 3000!'));</code></pre>
     </li>
    </ol>

    <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--emerald);">📄 אבל למה Promises בטבח (file.service)?</h3>
    <p>המרצה שלכם (בזום) הדגיש נקודה חשובה: <b>המקרר נמצא בחדר אחר</b>. כשהטבח הולך להביא משהו מהמקרר (קורא מקובץ <code>movies.json</code>), לוקח לו זמן! אם הוא יעצור את כל המטבח עד שהוא יחזור, אנשים יעזבו את המסעדה.</p>
    <p>בגלל זה קריאה וכתיבה של קבצים ב-Node.js עושים בעזרת <b>Promises</b> (הבטחות).</p>
    <pre style="font-size: 0.8rem; padding: 10px;"><code>// שיטה ישנה (Callback Hell - המלצר מחכה ומזיע)
fs.readFile("movies.json", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// שיטה חדשה של החבר שלך - Promise (הטבח אומר: תמשיכו לעבוד, כשאסיים אני מבטיח להחזיר תשובה)
return new Promise((resolve, reject) => {
  fs.readFile("movies.json", (err, data) => {
   if (err) return reject(err); // משהו השתבש, דוחה!
   resolve(JSON.parse(data)); // הצלחתי! מחזיר מידע למלצר
  });
});</code></pre>

    <div style="background: rgba(52, 211, 153, 0.05); border-left: 4px solid var(--emerald); padding: 15px; border-radius: 8px; margin-top: 20px;">
     <h4 style="color: var(--emerald);">💡 טיפ זהב מהמרצה בזום:</h4>
     <p>
      אל תכתוב את כל הראוטים מכה אחת! תכתוב מלצר אחד (route אחד). למשל, רק את המלצר שמחזיר את כל המלאי של החנות (<code>GET /products</code>).<br>
      פתח Postman, תבדוק שהוא עובד ומחזיר לך רשימה של מוצרים.<br>
      רק אחרי שהוא עובד מושלם - תעבור למלצר הבא!
     </p>
    </div>

   </div>
  `
 }, expressMiddlewaresClassroom: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container">
               <div class="anim-node" style="border-color:#38bdf8;">בקשה נכנסת</div>
               <div class="anim-packet move-right" style="color: #11131a; background:#34d399; box-shadow:0 0 15px #34d399;">Request</div>
               <div class="anim-node" style="border-color:#ff0055;">שומר 1 (Auth)</div>
               <div class="anim-node" style="border-color:#f7df1e;">שומר 2 (Val)</div>
               <div class="anim-node" style="border-color:#00ff88;">המסעדה (Route)</div>
            </div>
            `,
            text: "<b>זרימת Middlewares</b><br>תסתכל על חבילת המידע הירוקה! היא לא מגיעה ישר למסעדה. היא עוברת קודם כל דרך השומר הראשון (למשל, בדיקת אסימון), ואז דרך השומר השני (בדיקת תקינות נתונים), ורק אם היא שורדת – היא מגיעה ליעד."
        }
    ],

  title: '👨‍💼 שומרי הסף והמנהלים (Middlewares) - מהקלאסרום!',
  content: `
   <div style="direction: rtl; text-align: right; padding: 20px; font-family: 'Rubik', sans-serif; line-height: 1.8; color: #333; background-color: #f9f9f9; border-radius: 10px;">
    <h1 style="color: #2c3e50; text-align: center; font-size: 2.5rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">🕵️‍♂️ שומרי הסף של המסעדה (Middlewares)</h1>
    <p style="font-size: 1.3rem;">במסעדה שלנו יש לקוחות (בקשות) שמגיעים לשולחן (הראוט). אבל רגע! מי מברך אותם בכניסה? מי בודק שהם לא מביאים אוכל מבחוץ? כאן נכנסים ה-<strong>Middlewares</strong> - המתווכים ושומרי הסף!</p>
    
    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #3498db; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #3498db; margin-top: 0;">🌐 שומרי סף גלובליים (Global Middleware)</h2>
     <p style="font-size: 1.2rem;">אלו המארחים שעומדים ממש בדלת הראשית ופוגשים <strong>כל לקוח</strong> שנכנס. (תרגילים 1, 16, 24, 25 מהקלאסרום):</p>
     <ul style="font-size: 1.2rem;">
      <li><strong>שעון נוכחות (תרגיל 1):</strong> המארח מדביק לכל לקוח מדבקה עם שעת הכניסה המדויקת שלו (מוסיף <code>req.requestTime</code>).</li>
      <li><strong>מונה כניסות (תרגיל 16):</strong> המארח מחזיק קליקר וסופר "לקוח 1", "לקוח 2" - ככה אנחנו יודעים כמה בקשות השרת קיבל היום.</li>
      <li><strong>יומן אירועים / Logger (תרגיל 24, 25):</strong> מישהו שרושם בפנקס "בשעה 12:00 לקוח נכנס וביקש המבורגר". הוא רושם את ה-Method (כמו GET או POST) ואת ה-URL. ככה יש לנו תיעוד של כל מה שקרה!</li>
     </ul>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #e67e22; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #e67e22; margin-top: 0;">🛑 שומרי סף קשוחים (Security Middlewares)</h2>
     <p style="font-size: 1.2rem;">אלו המאבטחים שמוודאים שרק מי שמותר לו - ייכנס פנימה. (תרגילים 6, 11, 21, 26 מהקלאסרום):</p>
     <ul style="font-size: 1.2rem;">
      <li><strong>הגנת מנהל (תרגיל 6):</strong> מישהו מנסה להיכנס למטבח? המאבטח בודק אם יש לו תג של אדמין (<code>admin=true</code>). אין לו? עף החוצה עם שגיאה 403 (Forbidden)!</li>
      <li><strong>אימות מפתח VIP (תרגיל 26):</strong> רוצה להיכנס לחדר ה-VIP? אתה חייב להראות למאבטח כרטיס סודי (<code>x-auth-token: secret123</code>). הכרטיס מזויף? קבל שגיאה 401 (Unauthorized)!</li>
      <li><strong>חסימת בריונים (תרגיל 11):</strong> הגיע לקוח שעשה לנו צרות אתמול? המאבטח זוכר את הפנים שלו (את כתובת ה-IP שלו) וחוסם אותו מיד בכניסה.</li>
     </ul>
    </div>
   </div>
  `
 },
 expressValidationsClassroom: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container"><div class="anim-packet move-right" style="background:#ff0055;">{age: -5}</div><div class="anim-node" style="border-color:#f7df1e;">שומר (Joi)</div><div class="anim-node" style="border-color:#ff0055;">400 Bad Request</div></div>
            `,
            text: "<b>ולידציות ואימות נתונים</b><br>אי אפשר לסמוך על הלקוח! לפני שהנתונים נכנסים לשרת שלנו, ספריות כמו Joi (השומר בצהוב) בודקות אם הנתונים חוקיים. אם לא - הן זורקות שגיאה ומעיפות את הבקשה."
        }
    ],

  title: '🔍 בדיקות ותקינות נתונים (Validations) - מהקלאסרום!',
  content: `
   <div style="direction: rtl; text-align: right; padding: 20px; font-family: 'Rubik', sans-serif; line-height: 1.8; color: #333; background-color: #f9f9f9; border-radius: 10px;">
    <h1 style="color: #9b59b6; text-align: center; font-size: 2.5rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">📝 בקרת האיכות של המטבח (Validations)</h1>
    <p style="font-size: 1.3rem;">לפני שהשף מתחיל לבשל, מנהל המשמרת בודק את הפתק (הבקשה). האם הכתב קריא? האם הלקוח שכח לבחור תוספת? בדיקות אלו נקראות <strong>ולידציה (Validation)</strong>!</p>
    
    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #2ecc71; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #2ecc71; margin-top: 0;">📦 בדיקות תוכן המעטפה (Body & JSON)</h2>
     <p style="font-size: 1.2rem;">הלקוח שלח מעטפה סגורה (Body), אנחנו חייבים לבדוק אותה! (תרגילים 3, 13, 20 מהקלאסרום):</p>
     <ul style="font-size: 1.2rem;">
      <li><strong>מעטפה ריקה (תרגיל 3):</strong> הלקוח שלח פתק ריק (<code>req.body</code> ריק). המלצר מחזיר לו סטטוס 400: "הפתק ריק אישי, תכתוב משהו!".</li>
      <li><strong>השפה הנכונה (תרגיל 13):</strong> המסעדה מדברת רק בשפת JSON (<code>content-type: application/json</code>). אם מישהו שולח בצרפתית, מחזירים שגיאה 415 (Unsupported Media Type).</li>
      <li><strong>מגבלת גודל (תרגיל 20):</strong> מישהו כתב פתק ארוך כמו ספר? יש לנו מגבלת מילים (למשל 200 תווים). חרגת? שגיאה 413 (Payload too large).</li>
     </ul>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #f1c40f; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #f39c12; margin-top: 0;">🔎 בדיקות פרטניות של נתונים</h2>
     <p style="font-size: 1.2rem;">כדי שההרשמה וההתחברות יעבדו, הנתונים חייבים להיות מדויקים! (תרגילים 5, 12, 14, 17, 30 מהקלאסרום):</p>
     <ul style="font-size: 1.2rem;">
      <li><strong>מילוי חובה (תרגיל 12):</strong> מנסה להתחבר (Login) בלי אימייל וסיסמה? זה כמו להזמין פיצה בלי פיצה! (שגיאה 400).</li>
      <li><strong>תקינות אימייל (תרגיל 30):</strong> בודקים שהאימייל באמת מכיל את התו קרוכית "@". בלי זה, זה סתם מילה ולא אימייל!</li>
      <li><strong>חוקי סיסמה ואורך מזהה (תרגילים 5, 17):</strong> סיסמה חייבת להיות לפחות 8 תווים, והמזהה (ID) חייב להיות בדיוק 5 תווים! אחרת אי אפשר לקבל אותם.</li>
      <li><strong>זה מספר או אות? (תרגילים 14, 27):</strong> כשהשף מבקש "גיל" הוא חייב שזה יהיה מספר גדול מ-0. כשמבקשים לחשב שני מספרים (num1, num2) הם חייבים להיות באמת מספרים. (שגיאה 400 אם שולחים אותיות במקום מספרים).</li>
      <li><strong>מילים אסורות (תרגיל 19):</strong> מישהו ניסה לרשום את המילה "spam" בתגובה שלו? נזרוק לו שגיאה 400: תוכן אסור!</li>
     </ul>
    </div>
   </div>
  `
 },
 expressErrorHandlingClassroom: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container" style="flex-direction: column; justify-content: space-between; height: 180px;">
               <div class="anim-packet move-circle" style="color: #11131a; position: relative; left: 50%; transform: translateX(-50%); background: #ff0055; width: 50px; height: 30px; box-shadow: 0 0 20px #ff0055; z-index: 5;">שגיאה! 🔥</div>
               <div class="anim-node" style="width: 100%; border-color: #f7df1e; border-top-style: dashed; padding-top: 20px; text-align: center; margin-top: auto;">רשת ביטחון (Error Handler)</div>
            </div>
            `,
            text: "<b>טיפול בשגיאות (Error Handling)</b><br>כשהקוד קורס, אנחנו לא רוצים שהאפליקציה תיפול ותכבה! במקום זה, אנחנו פורסים 'רשת ביטחון' (Error Middleware) שתופסת את הבעיה (הקובייה האדומה), מדווחת עליה בעדינות ללקוח, וממשיכה לעבוד כרגיל."
        }
    ],

  title: '🚑 טיפול בשגיאות (Error Handling) - מהקלאסרום!',
  content: `
   <div style="direction: rtl; text-align: right; padding: 20px; font-family: 'Rubik', sans-serif; line-height: 1.8; color: #333; background-color: #f9f9f9; border-radius: 10px;">
    <h1 style="color: #e74c3c; text-align: center; font-size: 2.5rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">🚨 צוות ההצלה של המסעדה (Error Handling)</h1>
    <p style="font-size: 1.3rem;">לפעמים דברים משתבשים. לקוח מבקש משהו שלא קיים, או שהשף מפיל בטעות סיר מרק. אם לא נטפל בזה, כל המסעדה תישרף (השרת יקרוס)! כאן נכנס צוות ההצלה. (תרגילים 8, 9, 22, 23, 28 מהקלאסרום)</p>
    
    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #34495e; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #34495e; margin-top: 0;">❓ שגיאת 404 (Route Not Found)</h2>
     <p style="font-size: 1.2rem;">תרגיל 28 מהקלאסרום עוסק בלקוח שהולך לאיבוד.</p>
     <p style="font-size: 1.2rem;">מה קורה כשלקוח נכנס למסעדה ומבקש לשבת ב"שולחן המרחף על ענן" (כתובת נתיב שלא המצאנו מעולם)? במקום שהמלצר יעמוד מבולבל, בסוף המסעדה (בסוף הקובץ שלנו) עומד <strong>מתווך 404</strong> מיוחד. הוא אומר באדיבות: <code>{ "error": "Route not found" }</code> - הלקוח מבין שהשולחן לא קיים והשרת ממשיך לעבוד כרגיל!</p>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #c0392b; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #c0392b; margin-top: 0;">🛠️ מנהל המשברים המרכזי (Global Error Handler)</h2>
     <p style="font-size: 1.2rem;">תרגיל 9 ותרגיל 29 דורשים מאיתנו להגדיר פונקציית טיפול שגיאות מיוחדת!</p>
     <p style="font-size: 1.2rem;">איך מזהים את הפראמדיק? יש לו תמיד <strong>4 כלי עבודה</strong> (4 פרמטרים): <code>(err, req, res, next)</code>. הוא תמיד ממוקם <strong>בסוף הקובץ</strong>. אם השף המציא שגיאה יזומה בכוונה (<code>throw new Error("משהו השתבש")</code> - תרגיל 8), או התרסקה לו עוגה, הפראמדיק מיד תופס אותה ומגיש ללקוח התנצלות מסודרת ב-JSON כדי שהלקוח לא יראה הודעת קריסה מפחידה.</p>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #d35400; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #d35400; margin-top: 0;">📞 קריאה לפראמדיק: next(error) ושגיאות מותאמות</h2>
     <ul style="font-size: 1.2rem;">
      <li><strong>הקריאה בקשר (תרגיל 23):</strong> אם מלצר בודק לקוח (למשל הגיל שלו קטן מ-18) ומגלה בעיה, הוא לא יכול סתם לזרוק אותה. הוא משתמש בקשר לקרוא לפראמדיק: הוא רושם <code>next(new Error("Too young"))</code> וזה מדלג ישר למנהל המשברים המרכזי!</li>
      <li><strong>שגיאות ולידציה (תרגיל 22):</strong> הפראמדיק כל כך חכם שהוא יכול להסתכל על השגיאה ולראות - אם סוג השגיאה הוא "validation" (כלומר, הלקוח מילא טופס לא טוב), הוא לא מחזיר 500 (שגיאת שרת פנימית), אלא 422 (שגיאת נתונים), כי הבעיה היא אצל הלקוח ולא במטבח!</li>
     </ul>
    </div>
   </div>
  `
 },
 postmanGuide: {

    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram">
               <div class="flow-node active-node">לקוח (Postman)</div>
               <div class="flow-arrow highlight">בקשת HTTP (GET)<br><span>➔</span></div>
               <div class="flow-node">מסעדה (שרת)</div>
            </div>
            `,
            text: "<b>שלב 1: הלקוח (אתה) מבקש</b><br>תחשוב על עצמך כאדם שרעב ורוצה להזמין פיצה. הלקוח שולח בקשה. תוכנת ה-Postman היא בעצם השליח שלנו – היא לוקחת את הבקשה שניסחנו (למשל, GET) ושולחת אותה בדיוק לכתובת של השרת (URL)."
        },
        {
            html_visual: `
            <div class="flow-diagram">
               <div class="flow-node">לקוח (Postman)</div>
               <div class="flow-arrow">ממתין לתשובה...<br><span>➔</span></div>
               <div class="flow-node active-node">מסעדה (שרת)<br><small>מעבד נתונים</small></div>
            </div>
            `,
            text: "<b>שלב 2: השרת מקבל ומעבד</b><br>הבקשה הגיעה למטבח של המסעדה (השרת שלנו). הקוד שלנו בשרת מקבל את הבקשה, בודק אותה (Middlewares), ומחפש את הנתונים הרלוונטיים במסד הנתונים כדי להכין את 'המנה'."
        },
        {
            html_visual: `
            <div class="flow-diagram">
               <div class="flow-node active-node">לקוח (Postman)<br><small>מציג נתונים</small></div>
               <div class="flow-arrow highlight">תגובת HTTP (200 OK)<br><span>←</span></div>
               <div class="flow-node">מסעדה (שרת)</div>
            </div>
            `,
            text: "<b>שלב 3: התשובה חוזרת ללקוח</b><br>השרת סיים! הוא אורז את התשובה (Response) ושולח אותה חזרה. ב-Postman נראה את החבילה הזאת מופיעה במסך התחתון – זו יכולה להיות רשימת המשתמשים שביקשנו או קוד הצלחה (200 OK)."
        }
    ],title: '📭 המדריך השלם ל-Postman (כלי ההזמנות)',
  content: `
   <div style="direction: rtl; text-align: right; padding: 20px; font-family: 'Rubik', sans-serif; line-height: 1.8; color: #333; background-color: #f9f9f9; border-radius: 10px;">
    <h1 style="color: #ff6c37; text-align: center; font-size: 2.5rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">🚀 Postman - אפליקציית המשלוחים שלנו</h1>
    <p style="font-size: 1.3rem;">אם השרת שלנו הוא המסעדה, איך לקוח יזמין אוכל אם עדיין אין למסעדה אתר אינטרנט (Frontend) או אפליקציה? הלקוח ישתמש בטלפון או באפליקציית משלוחים כמו Wolt! תוכנת <strong>Postman</strong> היא בדיוק זה. היא מאפשרת לנו (המפתחים) "להתחזות" ללקוח, להכין הזמנה מושלמת, ולשלוח אותה למטבח (השרת) כדי לראות אם הוא מתמודד איתה נכון.</p>
    
    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #ff6c37; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #ff6c37; margin-top: 0;">🛠️ איך עובדים עם Postman? (אזורי המסך)</h2>
     <p style="font-size: 1.2rem;">המסך ב-Postman מחולק בדיוק כמו דף הזמנה:</p>
     <ul style="font-size: 1.2rem;">
      <li><strong>1. סוג הבקשה (Method):</strong> כאן בוחרים <code>GET</code> (כדי לקבל את התפריט), <code>POST</code> (כדי לשלוח הזמנה חדשה), או <code>DELETE</code> (כדי לבטל הזמנה).</li>
      <li><strong>2. כתובת המסעדה (URL):</strong> לאן אנחנו מתקשרים? למשל, <code>http://localhost:3000/api/users</code>.</li>
      <li><strong>3. מעטפת ההזמנה (Body):</strong> אם בחרנו <code>POST</code>, אנחנו צריכים לכתוב מה אנחנו רוצים! נכנסים ללשונית <code>Body</code> ➔ מסמנים <code>raw</code> ➔ בוחרים ב-<code>JSON</code> מהתפריט הכחול. שם כותבים את הבקשה.</li>
      <li><strong>4. סודות ומפתחות (Headers):</strong> לפעמים צריך להזדהות (למשל כרטיס VIP). נכנסים ללשונית <code>Headers</code> ומוסיפים Key (למשל <code>x-auth-token</code>) ו-Value (למשל <code>12345</code>).</li>
     </ul>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #3498db; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #3498db; margin-top: 0;">💡 טיפים זהב ל-Postman</h2>
     <ul style="font-size: 1.2rem;">
      <li><strong>לשמור עבודות (Collections):</strong> ב-Postman אפשר לאסוף את כל הבקשות ל"תיקיה" (Collection). ככה מחר תוכל ללחוץ על בקשת "Login" בלי לכתוב שוב את האימייל והסיסמה!</li>
      <li><strong>משתנים (Variables):</strong> אפשר לשמור את הכתובת <code>http://localhost:3000</code> בתוך משתנה שנקרא <code>{{url}}</code> וככה הכל מסודר יותר.</li>
      <li><strong>תצוגת התוצאה (Response):</strong> למטה במסך, תראה את מה שהשרת מחזיר. שים לב לסטטוס! ירוק (200 OK) אומר שההזמנה הצליחה, אדום (400 Bad Request / 404 Not Found) אומר שהייתה שגיאה במטבח או בבקשה.</li>
     </ul>
    </div>

    <div style="background-color: #fce4ec; padding: 15px; border-radius: 8px; border-right: 5px solid #e91e63; margin-bottom: 20px;">
     <h3 style="color: #e91e63; margin-top: 0;">📭 איך בודקים מתווכים ב-Postman?</h3>
     <p style="font-size: 1.1rem; margin-bottom: 0;">כדי לעבור מאבטח (Security Middleware), עלינו לשלוח את הכרטיס המזהה. ב-Postman נעבור ללשונית <strong>Headers</strong>, בעמודה Key נרשום <code>x-auth-token</code> (או מה שהמאבטח מבקש), ובעמודה Value נרשום את הסוד (למשל <code>secret123</code>). רק אז נלחץ Send!</p>
    </div>

    <div style="background-color: #e8f5e9; padding: 15px; border-radius: 8px; border-right: 5px solid #4caf50; margin-bottom: 20px;">
     <h3 style="color: #4caf50; margin-top: 0;">📭 איך בודקים תקינות נתונים ב-Postman?</h3>
     <p style="font-size: 1.1rem; margin-bottom: 0;">כדי לשלוח פתק למנהל המשמרת: ב-Postman נבחר בשיטת <strong>POST</strong>, ניכנס ללשונית <strong>Body</strong>, נסמן <strong>raw</strong> ואז נבחר <strong>JSON</strong> מהתפריט הכחול. שם נקליד את הפתק שלנו: <code>{ "email": "test@test.com", "age": 20 }</code>. נסה לשלוח אובייקט ריק <code>{}</code> כדי לראות איך השרת מחזיר שגיאת 400!</p>
    </div>

    <div style="background-color: #fff3e0; padding: 15px; border-radius: 8px; border-right: 5px solid #ff9800; margin-bottom: 20px;">
     <h3 style="color: #ff9800; margin-top: 0;">📭 איך בודקים שגיאות ב-Postman?</h3>
     <p style="font-size: 1.1rem; margin-bottom: 0;">פשוט מאוד! נסה לרשום בשורת ה-URL למעלה ב-Postman כתובת שלא קיימת, למשל <code>http://localhost:3000/api/ghosts</code>. כשתלחץ Send, תסתכל למטה על התשובה: הסטטוס יהפוך לאדום <strong>404 Not Found</strong>, ובגוף התשובה תראה את ה-JSON שצוות ההצלה הכין עבורך (<code>{"error": "Route not found"}</code>).</p>
    </div>
   </div>
  `
 }
};
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מושגי Docker ו-Containers 🐳</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אימג' | תרגום: תמונה / שבלונה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> שרטוט או תבנית לקריאה בלבד שמכילה את הקוד, הספריות ומערכת ההפעלה שדרושים להרצת האפליקציה. זה כמו קובץ התקנה (ISO) שלא ניתן לשנות.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קונטיינר | תרגום: מכולה / מיכל</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מופע חי ורץ של Image. זהו המחשב הקטן והמבודד שלנו בתוך המחשב. יכולים לרוץ עשרות קונטיינרים מאותו Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דימון | תרגום: שדון (שירות רקע)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> המנוע המרכזי של דוקר שרץ ברקע (Docker Engine). הוא זה שמאזין לבקשות של הלקוח ומבצע אותן בפועל.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: ביינד מאונט | תרגום: עיגון / חיבור ישיר</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> חיבור תיקייה ספציפית מהמחשב שלכם לתוך הקונטיינר. כל שינוי בלפטופ ישתקף מיד בתוך הקונטיינר (מושלם לפיתוח).</p>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">🐳 Docker & Containers</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Run (הפעלת קונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker run -d -p 8080:80 --name web nginx</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-d</code> - Detached (ברקע)</li>
       <li><code>-p 8080:80</code> - Port Mapping (מארח:קונטיינר)</li>
       <li><code>--name</code> - נתינת שם קריא לקונטיינר</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Build (בניית תמונה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker build -t myapp:v1 .</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-t</code> - נותן תגית/שם לאימג'</li>
       <li><code>.</code> - הנקודה מסמלת את התיקייה הנוכחית</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Compose (הפעלת סביבה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker-compose up -d</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li>קורא את הקובץ <code>docker-compose.yml</code> ומדליק את כל השרתים.</li>
       <li><code>down</code> יכבה וימחק את הרשת.</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Exec (כניסה לקונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker exec -it web bash</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-it</code> - אינטראקטיבי (משאיר חלון פתוח)</li>
       <li>פותח טרמינל (bash או sh) בתוך קונטיינר חי.</li>
      </ul>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מושגי Docker ו-Containers 🐳</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אימג' | תרגום: תמונה / שבלונה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> שרטוט או תבנית לקריאה בלבד שמכילה את הקוד, הספריות ומערכת ההפעלה שדרושים להרצת האפליקציה. זה כמו קובץ התקנה (ISO) שלא ניתן לשנות.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קונטיינר | תרגום: מכולה / מיכל</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מופע חי ורץ של Image. זהו המחשב הקטן והמבודד שלנו בתוך המחשב. יכולים לרוץ עשרות קונטיינרים מאותו Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דימון | תרגום: שדון (שירות רקע)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> המנוע המרכזי של דוקר שרץ ברקע (Docker Engine). הוא זה שמאזין לבקשות של הלקוח ומבצע אותן בפועל.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: ביינד מאונט | תרגום: עיגון / חיבור ישיר</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> חיבור תיקייה ספציפית מהמחשב שלכם לתוך הקונטיינר. כל שינוי בלפטופ ישתקף מיד בתוך הקונטיינר (מושלם לפיתוח).</p>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">🐳 Docker & Containers</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Run (הפעלת קונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker run -d -p 8080:80 --name web nginx</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-d</code> - Detached (ברקע)</li>
       <li><code>-p 8080:80</code> - Port Mapping (מארח:קונטיינר)</li>
       <li><code>--name</code> - נתינת שם קריא לקונטיינר</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Build (בניית תמונה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker build -t myapp:v1 .</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-t</code> - נותן תגית/שם לאימג'</li>
       <li><code>.</code> - הנקודה מסמלת את התיקייה הנוכחית</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Compose (הפעלת סביבה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker-compose up -d</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li>קורא את הקובץ <code>docker-compose.yml</code> ומדליק את כל השרתים.</li>
       <li><code>down</code> יכבה וימחק את הרשת.</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Exec (כניסה לקונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker exec -it web bash</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-it</code> - אינטראקטיבי (משאיר חלון פתוח)</li>
       <li>פותח טרמינל (bash או sh) בתוך קונטיינר חי.</li>
      </ul>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מושגי Docker ו-Containers 🐳</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אימג' | תרגום: תמונה / שבלונה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> שרטוט או תבנית לקריאה בלבד שמכילה את הקוד, הספריות ומערכת ההפעלה שדרושים להרצת האפליקציה. זה כמו קובץ התקנה (ISO) שלא ניתן לשנות.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קונטיינר | תרגום: מכולה / מיכל</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מופע חי ורץ של Image. זהו המחשב הקטן והמבודד שלנו בתוך המחשב. יכולים לרוץ עשרות קונטיינרים מאותו Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דימון | תרגום: שדון (שירות רקע)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> המנוע המרכזי של דוקר שרץ ברקע (Docker Engine). הוא זה שמאזין לבקשות של הלקוח ומבצע אותן בפועל.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: ביינד מאונט | תרגום: עיגון / חיבור ישיר</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> חיבור תיקייה ספציפית מהמחשב שלכם לתוך הקונטיינר. כל שינוי בלפטופ ישתקף מיד בתוך הקונטיינר (מושלם לפיתוח).</p>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">🐳 Docker & Containers</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Run (הפעלת קונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker run -d -p 8080:80 --name web nginx</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-d</code> - Detached (ברקע)</li>
       <li><code>-p 8080:80</code> - Port Mapping (מארח:קונטיינר)</li>
       <li><code>--name</code> - נתינת שם קריא לקונטיינר</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Build (בניית תמונה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker build -t myapp:v1 .</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-t</code> - נותן תגית/שם לאימג'</li>
       <li><code>.</code> - הנקודה מסמלת את התיקייה הנוכחית</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Compose (הפעלת סביבה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker-compose up -d</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li>קורא את הקובץ <code>docker-compose.yml</code> ומדליק את כל השרתים.</li>
       <li><code>down</code> יכבה וימחק את הרשת.</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Exec (כניסה לקונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker exec -it web bash</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-it</code> - אינטראקטיבי (משאיר חלון פתוח)</li>
       <li>פותח טרמינל (bash או sh) בתוך קונטיינר חי.</li>
      </ul>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מושגי Docker ו-Containers 🐳</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אימג' | תרגום: תמונה / שבלונה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> שרטוט או תבנית לקריאה בלבד שמכילה את הקוד, הספריות ומערכת ההפעלה שדרושים להרצת האפליקציה. זה כמו קובץ התקנה (ISO) שלא ניתן לשנות.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קונטיינר | תרגום: מכולה / מיכל</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מופע חי ורץ של Image. זהו המחשב הקטן והמבודד שלנו בתוך המחשב. יכולים לרוץ עשרות קונטיינרים מאותו Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דימון | תרגום: שדון (שירות רקע)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> המנוע המרכזי של דוקר שרץ ברקע (Docker Engine). הוא זה שמאזין לבקשות של הלקוח ומבצע אותן בפועל.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: ביינד מאונט | תרגום: עיגון / חיבור ישיר</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> חיבור תיקייה ספציפית מהמחשב שלכם לתוך הקונטיינר. כל שינוי בלפטופ ישתקף מיד בתוך הקונטיינר (מושלם לפיתוח).</p>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">🐳 Docker & Containers</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Run (הפעלת קונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker run -d -p 8080:80 --name web nginx</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-d</code> - Detached (ברקע)</li>
       <li><code>-p 8080:80</code> - Port Mapping (מארח:קונטיינר)</li>
       <li><code>--name</code> - נתינת שם קריא לקונטיינר</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Build (בניית תמונה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker build -t myapp:v1 .</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-t</code> - נותן תגית/שם לאימג'</li>
       <li><code>.</code> - הנקודה מסמלת את התיקייה הנוכחית</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Compose (הפעלת סביבה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker-compose up -d</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li>קורא את הקובץ <code>docker-compose.yml</code> ומדליק את כל השרתים.</li>
       <li><code>down</code> יכבה וימחק את הרשת.</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Exec (כניסה לקונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker exec -it web bash</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-it</code> - אינטראקטיבי (משאיר חלון פתוח)</li>
       <li>פותח טרמינל (bash או sh) בתוך קונטיינר חי.</li>
      </ul>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מושגי Docker ו-Containers 🐳</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אימג' | תרגום: תמונה / שבלונה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> שרטוט או תבנית לקריאה בלבד שמכילה את הקוד, הספריות ומערכת ההפעלה שדרושים להרצת האפליקציה. זה כמו קובץ התקנה (ISO) שלא ניתן לשנות.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קונטיינר | תרגום: מכולה / מיכל</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מופע חי ורץ של Image. זהו המחשב הקטן והמבודד שלנו בתוך המחשב. יכולים לרוץ עשרות קונטיינרים מאותו Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דימון | תרגום: שדון (שירות רקע)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> המנוע המרכזי של דוקר שרץ ברקע (Docker Engine). הוא זה שמאזין לבקשות של הלקוח ומבצע אותן בפועל.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: ביינד מאונט | תרגום: עיגון / חיבור ישיר</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> חיבור תיקייה ספציפית מהמחשב שלכם לתוך הקונטיינר. כל שינוי בלפטופ ישתקף מיד בתוך הקונטיינר (מושלם לפיתוח).</p>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">🐳 Docker & Containers</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Run (הפעלת קונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker run -d -p 8080:80 --name web nginx</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-d</code> - Detached (ברקע)</li>
       <li><code>-p 8080:80</code> - Port Mapping (מארח:קונטיינר)</li>
       <li><code>--name</code> - נתינת שם קריא לקונטיינר</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Build (בניית תמונה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker build -t myapp:v1 .</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-t</code> - נותן תגית/שם לאימג'</li>
       <li><code>.</code> - הנקודה מסמלת את התיקייה הנוכחית</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Compose (הפעלת סביבה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker-compose up -d</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li>קורא את הקובץ <code>docker-compose.yml</code> ומדליק את כל השרתים.</li>
       <li><code>down</code> יכבה וימחק את הרשת.</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Exec (כניסה לקונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker exec -it web bash</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-it</code> - אינטראקטיבי (משאיר חלון פתוח)</li>
       <li>פותח טרמינל (bash או sh) בתוך קונטיינר חי.</li>
      </ul>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מושגי Docker ו-Containers 🐳</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אימג' | תרגום: תמונה / שבלונה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> שרטוט או תבנית לקריאה בלבד שמכילה את הקוד, הספריות ומערכת ההפעלה שדרושים להרצת האפליקציה. זה כמו קובץ התקנה (ISO) שלא ניתן לשנות.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קונטיינר | תרגום: מכולה / מיכל</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מופע חי ורץ של Image. זהו המחשב הקטן והמבודד שלנו בתוך המחשב. יכולים לרוץ עשרות קונטיינרים מאותו Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דימון | תרגום: שדון (שירות רקע)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> המנוע המרכזי של דוקר שרץ ברקע (Docker Engine). הוא זה שמאזין לבקשות של הלקוח ומבצע אותן בפועל.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: ביינד מאונט | תרגום: עיגון / חיבור ישיר</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> חיבור תיקייה ספציפית מהמחשב שלכם לתוך הקונטיינר. כל שינוי בלפטופ ישתקף מיד בתוך הקונטיינר (מושלם לפיתוח).</p>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">🐳 Docker & Containers</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Run (הפעלת קונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker run -d -p 8080:80 --name web nginx</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-d</code> - Detached (ברקע)</li>
       <li><code>-p 8080:80</code> - Port Mapping (מארח:קונטיינר)</li>
       <li><code>--name</code> - נתינת שם קריא לקונטיינר</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Build (בניית תמונה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker build -t myapp:v1 .</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-t</code> - נותן תגית/שם לאימג'</li>
       <li><code>.</code> - הנקודה מסמלת את התיקייה הנוכחית</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Compose (הפעלת סביבה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker-compose up -d</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li>קורא את הקובץ <code>docker-compose.yml</code> ומדליק את כל השרתים.</li>
       <li><code>down</code> יכבה וימחק את הרשת.</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Exec (כניסה לקונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker exec -it web bash</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-it</code> - אינטראקטיבי (משאיר חלון פתוח)</li>
       <li>פותח טרמינל (bash או sh) בתוך קונטיינר חי.</li>
      </ul>
     </div>
    </div>

