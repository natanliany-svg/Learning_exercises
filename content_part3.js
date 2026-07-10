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
    title: '🔤 אנגלית טכנולוגית (Technology English)',
    content: `
      <div class="card-body">
        <p class="lead">מילון מונחים אינטראקטיבי המרכז את מושגי המפתח באנגלית שבהם אנו משתמשים בשיעורי הפיתוח ב-JavaScript ובשרתים. המטרה היא להבין את המקור של כל מילה, כיצד להגות אותה וכיצד היא מתקשרת לקוד המעשי שלנו.</p>
        
        <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
          
          <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Express</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶקְסְפְּרֶס | תרגום: מהיר, אקספרס</p>
            <p><b>משמעות:</b> ספריית קוד פופולרית ב-Node.js שנועדה לעזור לנו להקים שרתי אינטרנט במהירות שיא.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const app = express();</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Route / Routing</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רָאוּט / רָאוּטִינְג | תרגום: נתיב / ניתוב</p>
            <p><b>משמעות:</b> הדרך שבה השרת מקבל בקשה לכתובת מסוימת ומנתב אותה לפונקציית הטיפול המתאימה.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>app.get("/products", handler);</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--emerald); background: rgba(52, 211, 153, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--emerald); font-size: 1.25rem; margin-bottom: 2px;">Endpoint</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶנְדְפּוֹינְט | תרגום: נקודת קצה</p>
            <p><b>משמעות:</b> הכתובת הספציפית (URL) אליה הקליינט פונה כדי לבצע פעולה או לקבל מידע.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>GET http://localhost:3000/cart</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--purple); background: rgba(167, 139, 250, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--purple); font-size: 1.25rem; margin-bottom: 2px;">Middleware</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: מִידְלְוֵור | תרגום: תוכנת תיווך</p>
            <p><b>משמעות:</b> פונקציה שרצה "באמצע הדרך" בין קבלת הבקשה לשליחת התגובה, למשל לפענוח ה-Body או בדיקת אבטחה.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>app.use(express.json());</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Request (req)</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רִקְוֶועסְט | תרגום: בקשה</p>
            <p><b>משמעות:</b> האובייקט שמייצג את כל מה שהלקוח שלח אלינו לשרת (פרמטרים, נתונים, כותרות וכו').</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const userIp = req.ip;</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Response (res)</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רִסְפּוֹנְס | תרגום: תגובה / תשובה</p>
            <p><b>משמעות:</b> האובייקט בעזרתו השרת שולח בחזרה תשובה וקודי סטטוס לקליינט.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>res.json({ success: true });</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--emerald); background: rgba(52, 211, 153, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--emerald); font-size: 1.25rem; margin-bottom: 2px;">Query Parameters</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קְוֵורִי פָּרָמֶטֶרְס | תרגום: פרמטרי שאילתה</p>
            <p><b>משמעות:</b> משתנים שנשלחים בכתובת ה-URL אחרי סימן שאלה, משמשים לרוב לסינון נתונים.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const { maxPrice } = req.query;</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--purple); background: rgba(167, 139, 250, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--purple); font-size: 1.25rem; margin-bottom: 2px;">Route Parameters</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רָאוּט פָּרָמֶטֶרְס | תרגום: פרמטרי נתיב</p>
            <p><b>משמעות:</b> משתנים דינמיים שהם חלק מובנה מכתובת ה-URL עצמה (מוגדרים עם נקודתיים &#58;).</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const { productId } = req.params;</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Request Body</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רִקְוֶועסְט בָּאדִי | תרגום: גוף הבקשה</p>
            <p><b>משמעות:</b> תוכן הנתונים המלא שנשלח בבקשה (בדר"כ ב-POST/PUT) ומפורש כקובץ JSON.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const { customerId } = req.body;</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Status Codes</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: סְטָטוּס קוֹדְס | תרגום: קודי סטטוס</p>
            <p><b>משמעות:</b> קודים מספריים תקניים המייצגים את תוצאת הפנייה (200=הצלחה, 400=שגיאת לקוח, 404=לא נמצא, 500=שגיאת שרת).</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>res.status(404).json(...);</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--emerald); background: rgba(52, 211, 153, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--emerald); font-size: 1.25rem; margin-bottom: 2px;">JSON</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: גֵ'יְיסוֹן | ראשי תיבות: JavaScript Object Notation</p>
            <p><b>משמעות:</b> פורמט מבוסס טקסט להעברה ושמירת נתונים, שנראה בדיוק כמו אובייקט JavaScript רגיל.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>{ "id": "book_001", "price": 19.99 }</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--purple); background: rgba(167, 139, 250, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--purple); font-size: 1.25rem; margin-bottom: 2px;">Asynchronous</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶסִינְקְרוֹנוּס | תרגום: אסינכרוני (לא מסונכרן בזמן)</p>
            <p><b>משמעות:</b> קוד שמתחיל לרוץ ולא חוסם את התוכנית, אלא ממשיך ברקע ומחזיר תשובה כשסיים.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>fs.readFile(path, (err, data) => {});</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Callback</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קוֹלְבֶּק | תרגום: פונקציית חזרה (קריאה חוזרת)</p>
            <p><b>משמעות:</b> פונקציה שנשלחת כפרמטר לפונקציה אחרת ומיועדת להרצה ברגע שאירוע מסוים מסתיים.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>res.on("finish", callback);</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Promise</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פְּרוֹמִיס | תרגום: הבטחה</p>
            <p><b>משמעות:</b> אובייקט המבטיח להחזיר לנו תוצאה של פעולה אסינכרונית בעתיד (הצלחה או כישלון).</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>return new Promise((res, rej) => {});</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--emerald); background: rgba(52, 211, 153, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--emerald); font-size: 1.25rem; margin-bottom: 2px;">Async / Await</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶסִינְק / אָוֵוייט | תרגום: אסינכרוני / המתנה</p>
            <p><b>משמעות:</b> הדרך המודרנית והנוחה ביותר לכתוב קוד אסינכרוני, שגורמת לו להיראות כמו קוד סינכרוני רגיל.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const data = await readFromJson();</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--purple); background: rgba(167, 139, 250, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--purple); font-size: 1.25rem; margin-bottom: 2px;">Environment Variables</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אֶנְוָויירוֹנְמֶנְט וֶורִיאֶבְּלְס | תרגום: משתני סביבה</p>
            <p><b>משמעות:</b> משתנים ששמורים מחוץ לקוד (לרוב בקובץ <code>.env</code>) המאפשרים לשמור מפתחות ונתונים רגישים בסודיות.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const port = process.env.PORT;</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Destructuring</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דִי-סְטְרָקְצְ'וּרִינְג | תרגום: פירוק מבנה</p>
            <p><b>משמעות:</b> קיצור דרך תחבירי ב-JavaScript המאפשר לשלוף שדות ספציפיים מתוך אובייקט לתוך משתנים ישירות.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>const { name, price } = product;</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--sky); background: rgba(56, 189, 248, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--sky); font-size: 1.25rem; margin-bottom: 2px;">Stateless</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: סְטֵייטְלֶס | תרגום: חסר מצב (ללא זיכרון היסטורי)</p>
            <p><b>משמעות:</b> עיקרון בפיתוח שרתים לפיו השרת לא שומר מידע מקומי עליך בין בקשות. כל בקשה היא עצמאית לחלוטין.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>// השרת מזהה אותך בכל בקשה מחדש לפי ה-customerId</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--emerald); background: rgba(52, 211, 153, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--emerald); font-size: 1.25rem; margin-bottom: 2px;">Payload</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: פֵּיְילוֹד | תרגום: מטען נתונים</p>
            <p><b>משמעות:</b> המידע המרכזי והחיוני שאנחנו מעבירים בתוך הודעה, פנייה או חבילת מידע ברשת.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>// הנתונים שנשלחים בתוך ה-Body או ה-Token</code></pre>
          </div>

          <div class="lib-card" style="border-left: 4px solid var(--purple); background: rgba(167, 139, 250, 0.05); padding: 15px; border-radius: 8px;">
            <h4 style="color: var(--purple); font-size: 1.25rem; margin-bottom: 2px;">Repository</h4>
            <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: רֶפּוֹזִיטוֹרִי (או רפו) | תרגום: מאגר (מחסן קוד)</p>
            <p><b>משמעות:</b> תיקיית הפרויקט שמנוהלת ומנוטרת על ידי Git המכילה את כל היסטוריית הגרסאות של הקוד.</p>
            <pre style="margin-top: 8px; font-size: 0.75rem; padding: 4px;"><code>git init // מאתחל מאגר קוד חדש</code></pre>
          </div>

        </div>
      </div>
    `
  }
};
