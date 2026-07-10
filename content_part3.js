const contentPart3 = {
  closures: {
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
console.<span class="t-fn">log</span>(<span class="t-fn">counter</span>()); <span class="t-com">// 2  ← הערך נשמר בין ההרצות!</span></code></pre>
        
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
    title: '🔤 אנגלית טכנולוגית המלא (Technology English - Extended)',
    content: `
      <div class="card-body">
        <p class="lead" style="font-size: 1.1rem; line-height: 1.8;">
        מילון המונחים המורחב! כאן תמצאו הסברים כמו לילדים (ופחות כמו לרובוטים 🤖) עבור כל המילים באנגלית שאנחנו שומעים בשיעורים, בהרצאות הזום, ורואים בקוד שלנו. הוספנו תעתיק הגייה לכל מילה כדי שיהיה קל לקרוא אותה.
        </p>
        
        <h3 style="margin-top: 20px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">🛠️ מושגי יסוד (Basics)</h3>
        <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
          
          <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Variable</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: וֶארִיאָבֶּל | תרגום: משתנה</p>
            <p><b>משמעות:</b> קופסה בזיכרון של המחשב שאנחנו שמים בה מידע. כמו קופסת נעליים שכתבנו עליה "גיל" ושמנו בפנים את המספר 20.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>let age = 20;</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Function</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פָנְקְשֶׁן | תרגום: פונקציה / פעולה</p>
            <p><b>משמעות:</b> מכונה קטנה שמבצעת משימה ספציפית. אתה מכניס לה משהו (למשל, שני מספרים), היא עושה פעולה (למשל, מחברת אותם), ומוציאה תוצאה.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>function add(a, b) { return a+b; }</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">String</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: סְטְרִינְג | תרגום: מחרוזת טקסט</p>
            <p><b>משמעות:</b> טקסט פשוט (אותיות, מילים, משפטים) שחייב להיות עטוף במרכאות. נקרא ככה כי זה "חוט" שזור של אותיות.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>let name = "Natan";</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Array</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אָרֶיי | תרגום: מערך / רשימה</p>
            <p><b>משמעות:</b> רשימה מסודרת של נתונים, כמו רשימת קניות. מתחיל תמיד מסוגריים מרובעים. הפריט הראשון הוא במקום האפס (0).</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>let colors = ["Red", "Green", "Blue"];</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Object</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אוֹבְּגֶ'קְט | תרגום: אובייקט</p>
            <p><b>משמעות:</b> דרך לשמור נתונים מורכבים כמו "תעודת זהות". יש בו צמדים של מפתח וערך (למשל: גובה = 1.80, שם = "נתן").</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>let car = { make: "Mazda", year: 2020 };</code></pre>
          </div>
          
          <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Parse</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פָּארְס | תרגום: פיענוח / ניתוח תחבירי</p>
            <p><b>משמעות:</b> לקחת טקסט רגיל (כמו JSON) ולהמיר אותו למשהו שהמחשב מבין ויכול לעבוד איתו (כמו אובייקט JS).</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>JSON.parse(text)</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Stringify</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: סְטְרִינְגִיפָיי | תרגום: המרה למחרוזת</p>
            <p><b>משמעות:</b> ההפך מ-Parse. לקחת אובייקט מורכב ולהפוך אותו לטקסט פשוט כדי שאפשר יהיה לשמור אותו בקובץ או לשלוח ברשת.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>JSON.stringify(myObj)</code></pre>
          </div>
        </div>

        <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--sky);">🌐 שרתי Express ותקשורת (Servers & APIs)</h3>
        <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
          
          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Express</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶקְסְפְּרֶס | תרגום: אקספרס (מהיר)</p>
            <p><b>משמעות:</b> ספריית קוד (framework) פופולרית ב-Node.js שנועדה לעזור לנו להקים שרתי אינטרנט בקלות. כמו לקבל חלקי לגו מוכנים במקום לייצר מפלסטיק.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const app = express();</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Route / Routing</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רָאוּט / רָאוּטִינְג | תרגום: נתיב / ניתוב</p>
            <p><b>משמעות:</b> ה"שלט הכוונה" של השרת שלנו. אם לקוח מבקש את הכתובת <code>/products</code>, הראוט הוא זה שאומר לשרת: "אוקיי, תפעיל את הפונקציה הזו שמחזירה מוצרים".</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>app.get("/products", handler);</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Endpoint</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶנְדְפּוֹינְט | תרגום: נקודת קצה</p>
            <p><b>משמעות:</b> הכתובת הספציפית והמלאה שהלקוח פונה אליה. למשל, הדלפק במסעדה שמקבל הזמנות צ'יפס הוא endpoint אחד, והדלפק של שתייה הוא endpoint אחר.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>GET http://localhost:3000/cart</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Middleware</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: מִידְלְוֵור | תרגום: תוכנת תיווך</p>
            <p><b>משמעות:</b> ה"מאבטח" או ה"מתורגמן" שעומד בכניסה לשרת (באמצע). כל בקשה חייבת לעבור דרכו לפני שהיא מגיעה לנתיב (route) שלה. משמש למשל כדי לפרש קבצי JSON.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>app.use(express.json());</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Request (req)</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רִקְוֶועסְט | תרגום: בקשה</p>
            <p><b>משמעות:</b> החבילה שקיבלנו מהלקוח (דפדפן או Postman). האובייקט הזה מכיל את כל המידע: איזה מידע הוא מחפש, כתובת ה-IP שלו, ואילו נתונים הוא שלח לנו.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const userData = req.body;</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Response (res)</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רִסְפּוֹנְס | תרגום: תגובה / תשובה</p>
            <p><b>משמעות:</b> החבילה שאנחנו כשרת שולחים בחזרה ללקוח. בעזרת res אנחנו אומרים לו "הנה המידע שביקשת" או "סליחה, יש שגיאה".</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>res.json({ success: true });</code></pre>
          </div>
          
          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Status Codes</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: סְטָטוּס קוֹדְס | תרגום: קודי מצב</p>
            <p><b>משמעות:</b> השפה הסודית (מספרים) שבה שרת מדבר עם הדפדפן. 200 = הכל טוב, 400 = הלקוח שלח משהו דפוק, 404 = הדף לא נמצא, 500 = השרת שלנו קרס או התפוצץ.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>res.status(404).json(...);</code></pre>
          </div>
          
          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Payload</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פֵּיְילוֹד | תרגום: מטען (כמו במשאית)</p>
            <p><b>משמעות:</b> ה"בשר" של הבקשה. המידע האמיתי שאנחנו מעבירים (למשל, פרטי הלקוח הנרשם) ולא המידע הטכני מסביב.</p>
          </div>
        </div>

        <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--emerald);">🔄 פרמטרים ומשתנים בבקשות (Parameters)</h3>
        <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
          
          <div class="lib-card" style="border-left: 4px solid var(--emerald); background: rgba(52, 211, 153, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--emerald); font-size: 1.25rem; margin-bottom: 2px;">Query Parameters</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קְוֵורִי פָּרָמֶטֶרְס | תרגום: פרמטרי שאילתה</p>
            <p><b>משמעות:</b> משתנים שמצורפים בסוף ה-URL עם סימן שאלה <code>?</code> ומופרדים ב-<code>&</code>. משמשים בדרך כלל ל<b>סינון או חיפוש</b> של רשימות (למשל, "תביא לי מוצרים שזולים מ-15").</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>// URL: /products?maxPrice=15
const { maxPrice } = req.query;</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--emerald); background: rgba(52, 211, 153, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--emerald); font-size: 1.25rem; margin-bottom: 2px;">Route Parameters</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רָאוּט פָּרָמֶטֶרְס | תרגום: פרמטרי נתיב</p>
            <p><b>משמעות:</b> משתנה שהוא ממש חלק מהכתובת עצמה, מזוהה בעזרת נקודתיים <code>&#58;</code> בקוד. משמש לרוב להצביע על פריט <b>ספציפי אחד</b> (למשל "מחק את מוצר 5").</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>// URL: /products/5 (where 5 is :id)
const { id } = req.params;</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--emerald); background: rgba(52, 211, 153, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--emerald); font-size: 1.25rem; margin-bottom: 2px;">Request Body</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רִקְוֶועסְט בָּאדִי | תרגום: גוף הבקשה</p>
            <p><b>משמעות:</b> כל המידע המלא, הפנימי והארוך שנשלח. בדרך כלל משמש ליצירה או עדכון של נתונים (כי לא נוח להעביר סיסמאות או כמות מידע עצומה בשורת הכתובת URL).</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const data = req.body;</code></pre>
          </div>
          
          <div class="lib-card" style="border-left: 4px solid var(--emerald); background: rgba(52, 211, 153, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--emerald); font-size: 1.25rem; margin-bottom: 2px;">Destructuring</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דִי-סְטְרָקְצְ'וּרִינְג | תרגום: פירוק (שליפה החוצה)</p>
            <p><b>משמעות:</b> קסם ב-JS שמאפשר לנו "לתלוש" תכונות מסוימות מתוך אובייקט היישר אל תוך משתנים משלהם, בשורה אחת במקום לכתוב <code>req.body.name</code> שוב ושוב.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const { name, age } = req.body;</code></pre>
          </div>
        </div>

        <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--purple);">⏳ אסינכרוניות והבטחות (Async / Await)</h3>
        <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
          
          <div class="lib-card" style="border-left: 4px solid var(--purple); background: rgba(167, 139, 250, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--purple); font-size: 1.25rem; margin-bottom: 2px;">Asynchronous</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶסִינְקְרוֹנוּס | תרגום: א-סינכרוני / לא במקביל</p>
            <p><b>משמעות:</b> עבודה "ברקע". כשאתה מבקש מהשרת לקרוא קובץ ענק, השרת לא יעצור הכל ויחכה! הוא ישלח בקשה לקרוא את הקובץ ובינתיים יטפל בלקוחות אחרים. כשהקובץ יקרא במלואו, השרת יחזור לטפל בו.</p>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--purple); background: rgba(167, 139, 250, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--purple); font-size: 1.25rem; margin-bottom: 2px;">Callback</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קוֹלְבֶּק | תרגום: קריאה חוזרת</p>
            <p><b>משמעות:</b> פונקציה שאנחנו אומרים למחשב: "קח את הפונקציה הזו, אבל אל תפעיל אותה עכשיו! תפעיל אותה רק כשתסיים את המשימה שביקשתי ממך" (כמו: תתקשר אליי רק כשהפיצה מוכנה).</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>fs.readFile("file", (err, data) => {...});</code></pre>
          </div>
          
          <div class="lib-card" style="border-left: 4px solid var(--purple); background: rgba(167, 139, 250, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--purple); font-size: 1.25rem; margin-bottom: 2px;">Callback Hell</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קוֹלְבֶּק הֶל | תרגום: הגיהנום של הקולבקים</p>
            <p><b>משמעות:</b> מצב מזעזע שבו שמים קולבק בתוך קולבק בתוך קולבק (כי משימה תלויה בשנייה), והקוד נראה כמו פירמידה עקומה שאי אפשר לקרוא. בגלל זה המציאו את ה-Promises!</p>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--purple); background: rgba(167, 139, 250, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--purple); font-size: 1.25rem; margin-bottom: 2px;">Promise</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פְּרוֹמִיס | תרגום: הבטחה</p>
            <p><b>משמעות:</b> דרך מודרנית ונקייה יותר להתמודד עם אסינכרוניות. השרת נותן לך פתק ואומר "אני מבטיח שיהיה כאן ערך בעתיד (הצלחה או שגיאה), שמור בינתיים את הפתק הזה".</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>return new Promise((res, rej) => {});</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--purple); background: rgba(167, 139, 250, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--purple); font-size: 1.25rem; margin-bottom: 2px;">Async / Await</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶסִינְק / אָוֵוייט | תרגום: המתן להבטחה</p>
            <p><b>משמעות:</b> הקסם של JS! מאפשר לנו לכתוב קוד אסינכרוני שקוראים אותו ממש כמו קוד רגיל וסינכרוני. פשוט אומרים "תמתין (await) שההבטחה (promise) תתקיים ואז תמשיך לשורה הבאה".</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const data = await readFromJson();</code></pre>
          </div>
          
          <div class="lib-card" style="border-left: 4px solid var(--purple); background: rgba(167, 139, 250, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--purple); font-size: 1.25rem; margin-bottom: 2px;">Throw Error</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: תְרוֹאוּ אֶרוֹר | תרגום: "זריקת" שגיאה</p>
            <p><b>משמעות:</b> כאשר התוכנה נתקלת במצב שלא ציפתה לו (למשל הלקוח מנסה לקנות מוצר בלי כסף) - אנחנו "זורקים" שגיאה וקוטעים את המשך הפעולה כדי לא לגרום לנזק נתונים.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>throw new Error("No money!");</code></pre>
          </div>
        </div>
        
        <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--rosewood);">🔥 פריסה וכלים (Tools & Deployment)</h3>
        <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
          
          <div class="lib-card" style="border-left: 4px solid var(--rosewood); background: rgba(244, 63, 94, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--rosewood); font-size: 1.25rem; margin-bottom: 2px;">Deployment</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דִיפְּלוֹיְימֶנְט | תרגום: פריסה (העלאה לאוויר)</p>
            <p><b>משמעות:</b> השלב המרגש שבו אנחנו לוקחים את השרת שפעל לנו על המחשב המקומי (Localhost), ושמים אותו על שרת אמיתי באינטרנט כדי שכל העולם יוכל להשתמש בו (למשל דרך Render או Heroku).</p>
          </div>
          
          <div class="lib-card" style="border-left: 4px solid var(--rosewood); background: rgba(244, 63, 94, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--rosewood); font-size: 1.25rem; margin-bottom: 2px;">Repository (Repo)</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רֶפּוֹזִיטוֹרִי / רֶפּוֹ | תרגום: מאגר (מחסן קוד)</p>
            <p><b>משמעות:</b> תיקיית הפרויקט שלך שמנוהלת ומגובה על ידי Git. לכל פרויקט יש מאגר שמכיל את כל קבצי הקוד וההיסטוריה של השינויים.</p>
          </div>
          
          <div class="lib-card" style="border-left: 4px solid var(--rosewood); background: rgba(244, 63, 94, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--rosewood); font-size: 1.25rem; margin-bottom: 2px;">Environment Variables</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶנְוָויירוֹנְמֶנְט וֶורִיאֶבְּלְס | תרגום: משתני סביבה</p>
            <p><b>משמעות:</b> משתנים סודיים (לרוב נשמרים בקובץ <code>.env</code>) שלא דוחפים לגיטהאב. משתמשים בזה לשמור סיסמאות למסד נתונים או הגדרות שמשתנות בין המחשב שלי לבין השרת שבאוויר.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const port = process.env.PORT;</code></pre>
          </div>
        </div>

      </div>
    `
  }
  , expressKids: {
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
  }
};
