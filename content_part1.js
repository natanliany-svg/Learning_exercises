const contentPart1 = {
  basics: {
    title: '📐 JS Basics & Variables',
    content: `
      <div class="modal-grid">
        <div class="modal-card">
          <h4>משתנים: let vs const vs var</h4>
          <p>הגדרת משתנים נעשית בשלוש דרכים עיקריות, הנבדלות בתחום ההכרה (Scope) וביכולת ההשמה מחדש.</p>
          <pre>
<span class="comment">// אפשרות א': const (Block Scope, לא ניתן להשמה מחדש)</span>
<span class="keyword">const</span> <span class="variable">PI</span> = 3.14;

<span class="comment">// אפשרות ב': let (Block Scope, ניתן להשמה מחדש)</span>
<span class="keyword">let</span> <span class="variable">count</span> = 0;
<span class="variable">count</span> = 1;

<span class="comment">// אפשרות ג': var (Function Scope, Hoisted)</span>
<span class="keyword">var</span> <span class="variable">name</span> = <span class="string">'John'</span>;
          </pre>
          <p>💡 <strong>טיפ:</strong> תמיד העדיפו להשתמש ב-<code>const</code>. אם הערך ישתנה, השתמשו ב-<code>let</code>. הימנעו מ-<code>var</code> במידת האפשר.</p>
          <p>⚠️ <strong>מקרה קצה:</strong> במערכים ואובייקטים שמוגדרים כ-<code>const</code>, ניתן לשנות את התוכן הפנימי (Mutation) אך לא לדרוס את המשתנה כולו.</p>
        </div>

        <div class="modal-card">
          <h4>סוגי נתונים (Primitive Types)</h4>
          <p>JavaScript תומכת במספר סוגי נתונים פרימיטיביים ומורכבים (Reference Types).</p>
          <pre>
<span class="comment">// String</span>
<span class="keyword">const</span> <span class="variable">str</span> = <span class="string">'Hello World'</span>;
<span class="comment">// Number</span>
<span class="keyword">const</span> <span class="variable">num</span> = 42;
<span class="comment">// Boolean</span>
<span class="keyword">const</span> <span class="variable">isTrue</span> = true;
<span class="comment">// Array (Reference Type)</span>
<span class="keyword">const</span> <span class="variable">arr</span> = [1, 2, 3];
<span class="comment">// Object (Reference Type)</span>
<span class="keyword">const</span> <span class="variable">obj</span> = { <span class="variable">key</span>: <span class="string">'value'</span> };
          </pre>
        </div>

        <div class="modal-card">
          <h4>אופרטור typeof ו-Type Coercion</h4>
          <p>ניתן לבדוק סוגי נתונים באמצעות <code>typeof</code>, אך צריך להיזהר מהמרות אוטומטיות (Coercion) ש-JS מבצעת מאחורי הקלעים.</p>
          <pre>
<span class="function">console.log</span>(<span class="keyword">typeof</span> <span class="string">'text'</span>); <span class="comment">// "string"</span>
<span class="function">console.log</span>(<span class="keyword">typeof</span> 42); <span class="comment">// "number"</span>
<span class="function">console.log</span>(<span class="keyword">typeof</span> null); <span class="comment">// "object" (באג היסטורי!)</span>

<span class="comment">// Type Coercion</span>
<span class="keyword">const</span> <span class="variable">result</span> = <span class="string">'5'</span> + 3; <span class="comment">// "53"</span>
<span class="keyword">const</span> <span class="variable">sub</span> = <span class="string">'5'</span> - 3; <span class="comment">// 2</span>
          </pre>
          <p>💡 <strong>טיפ:</strong> השתמשו תמיד ב-<code>===</code> במקום ב-<code>==</code> כדי למנוע המרות סוגים בלתי רצויות בעת השוואה.</p>
          <p>⚠️ <strong>מקרה קצה:</strong> הפעולה <code>typeof NaN</code> מחזירה <code>"number"</code>, למרות שמשמעותה היא "Not a Number".</p>
        </div>

        <div class="modal-card">
          <h4>Template Literals</h4>
          <p>מחרוזות תבנית (Template strings) מאפשרות שילוב משתנים בקלות וריבוי שורות ללא צורך בשרשור באמצעות פלוס.</p>
          <pre>
<span class="keyword">const</span> <span class="variable">name</span> = <span class="string">'Alice'</span>;
<span class="keyword">const</span> <span class="variable">greeting</span> = <span class="string">\`Hello \${<span class="variable">name</span>}, welcome!\`</span>;
          </pre>
        </div>
      </div>
    `
  },
  loops: {
    title: '🔄 לולאות ותנאים (Loops & Conditionals)',
    content: `
      <div class="modal-grid">
        <div class="modal-card">
          <h4>תנאים (Conditionals)</h4>
          <p>שימוש במבני תנאי לבקרת זרימת התוכנית (if/else, Ternary operator ו-switch/case).</p>
          <pre>
<span class="comment">// אפשרות א': if / else if / else</span>
<span class="keyword">if</span> (<span class="variable">score</span> &gt; 90) {
  <span class="function">console.log</span>(<span class="string">'A'</span>);
} <span class="keyword">else if</span> (<span class="variable">score</span> &gt; 80) {
  <span class="function">console.log</span>(<span class="string">'B'</span>);
} <span class="keyword">else</span> {
  <span class="function">console.log</span>(<span class="string">'C'</span>);
}

<span class="comment">// אפשרות ב': Ternary Operator (תנאי מקוצר בשורה אחת)</span>
<span class="keyword">const</span> <span class="variable">status</span> = <span class="variable">age</span> &gt;= 18 ? <span class="string">'Adult'</span> : <span class="string">'Minor'</span>;

<span class="comment">// אפשרות ג': Switch / Case</span>
<span class="keyword">switch</span> (<span class="variable">color</span>) {
  <span class="keyword">case</span> <span class="string">'red'</span>:
    <span class="function">stop</span>();
    <span class="keyword">break</span>;
  <span class="keyword">default</span>:
    <span class="function">go</span>();
}
          </pre>
          <p>💡 <strong>טיפ:</strong> תנאי טרינרי מצוין להשמות קצרות ופשוטות. המנעו מקינון של תנאים טרינריים למען הקריאות.</p>
          <p>⚠️ <strong>מקרה קצה:</strong> שכחת <code>break</code> במבנה switch תוביל ל-"fall-through", והקוד ימשיך לבצע גם את התנאים הבאים שאינם תואמים.</p>
        </div>

        <div class="modal-card">
          <h4>לולאות (Loops)</h4>
          <p>JavaScript מציעה מספר סוגי לולאות בהתאם למבנה הנתונים (מערכים, אובייקטים) ואופן הפעולה הנדרש.</p>
          <pre>
<span class="comment">// אפשרות א': לולאת for קלאסית</span>
<span class="keyword">for</span> (<span class="keyword">let</span> <span class="variable">i</span> = 0; <span class="variable">i</span> &lt; 5; <span class="variable">i</span>++) {
  <span class="function">console.log</span>(<span class="variable">i</span>);
}

<span class="comment">// אפשרות ב': for...of (למעבר על איברים של מערכים ומחרוזות)</span>
<span class="keyword">for</span> (<span class="keyword">const</span> <span class="variable">item</span> <span class="keyword">of</span> <span class="variable">array</span>) {
  <span class="function">console.log</span>(<span class="variable">item</span>);
}

<span class="comment">// אפשרות ג': for...in (למעבר על מפתחות של אובייקטים)</span>
<span class="keyword">for</span> (<span class="keyword">const</span> <span class="variable">key</span> <span class="keyword">in</span> <span class="variable">object</span>) {
  <span class="function">console.log</span>(<span class="variable">key</span>, <span class="variable">object</span>[<span class="variable">key</span>]);
}

<span class="comment">// אפשרות ד': לולאת while (רצה כל עוד התנאי מתקיים)</span>
<span class="keyword">while</span> (<span class="variable">condition</span>) {
  <span class="comment">// קוד לביצוע</span>
}

<span class="comment">// אפשרות ה': לולאת do...while (תרוץ לפחות פעם אחת לפני בדיקת התנאי)</span>
<span class="keyword">do</span> {
  <span class="comment">// קוד לביצוע</span>
} <span class="keyword">while</span> (<span class="variable">condition</span>);
          </pre>
          <p>💡 <strong>טיפ:</strong> עבור ריצה פשוטה על מערכים, העדיפו להשתמש ב-<code>for...of</code> או במתודות מערך (כגון <code>forEach</code> או <code>map</code>).</p>
          <p>⚠️ <strong>מקרה קצה:</strong> היזהרו משימוש ב-<code>for...in</code> על מערכים - לולאה זו נועדה לאובייקטים ועלולה לכלול מאפיינים שנוספו ל-Prototype.</p>
        </div>
      </div>
    `
  },
  functions: {
    title: '🎯 פונקציות (Functions)',
    content: `
      <div class="modal-grid">
        <div class="modal-card">
          <h4>הגדרת פונקציות</h4>
          <p>קיימות מספר דרכים מרכזיות להגדרת פונקציות ב-JS, כאשר לכל אחת הבדלים בהתנהגות ה-Hoisting ובתחביר.</p>
          <pre>
<span class="comment">// 1. הצהרת פונקציה (Function Declaration) - Hoisted: קיימת לאורך כל הקובץ!</span>
<span class="keyword">function</span> <span class="function">greet</span>(<span class="variable">name</span>) {
  <span class="keyword">return</span> <span class="string">\`Hello \${<span class="variable">name</span>}\`</span>;
}

<span class="comment">// 2. ביטוי פונקציה (Function Expression) - לא מתבצע לה Hoisting</span>
<span class="keyword">const</span> <span class="function">greetExpr</span> = <span class="keyword">function</span>(<span class="variable">name</span>) {
  <span class="keyword">return</span> <span class="string">\`Hello \${<span class="variable">name</span>}\`</span>;
};

<span class="comment">// 3. פונקציות חץ (Arrow Functions)</span>

<span class="comment">// א. פונקציית חץ עם בלוק מלא (Full block, מחייבת return)</span>
<span class="keyword">const</span> <span class="function">add</span> = (<span class="variable">a</span>, <span class="variable">b</span>) =&gt; {
  <span class="keyword">return</span> <span class="variable">a</span> + <span class="variable">b</span>;
};

<span class="comment">// ב. פונקציית חץ בשורה אחת (Implicit return - מחזירה אוטומטית)</span>
<span class="keyword">const</span> <span class="function">multiply</span> = (<span class="variable">a</span>, <span class="variable">b</span>) =&gt; <span class="variable">a</span> * <span class="variable">b</span>;

<span class="comment">// ג. פונקציית חץ עם פרמטר יחיד (ניתן להשמיט סוגריים מסביב לפרמטר)</span>
<span class="keyword">const</span> <span class="function">square</span> = <span class="variable">x</span> =&gt; <span class="variable">x</span> * <span class="variable">x</span>;
          </pre>
          <p>💡 <strong>טיפ:</strong> לפונקציות חץ אין <code>this</code> משל עצמן - הן יורשות את <code>this</code> מהסביבה העוטפת (Lexical scoping).</p>
          <p>⚠️ <strong>מקרה קצה:</strong> לא ניתן להשתמש בפונקציות חץ כ-Constructors (עם מילת המפתח <code>new</code>), ולא כאובייקטים לפונקציות גנרטור.</p>
        </div>

        <div class="modal-card">
          <h4>פרמטרים: ערכי ברירת מחדל ו-Rest parameters</h4>
          <p>גמישות בהגדרת פרמטרים וטיפול בכמות משתנה של ארגומנטים.</p>
          <pre>
<span class="comment">// Default Parameters (ערך ברירת מחדל במידה ולא סופק ארגומנט)</span>
<span class="keyword">function</span> <span class="function">welcome</span>(<span class="variable">name</span> = <span class="string">'Guest'</span>) {
  <span class="function">console.log</span>(<span class="string">\`Welcome \${<span class="variable">name</span>}\`</span>);
}

<span class="comment">// Rest Parameters (איסוף כל שאר הפרמטרים לתוך מערך)</span>
<span class="keyword">function</span> <span class="function">sumAll</span>(...<span class="variable">numbers</span>) {
  <span class="keyword">return</span> <span class="variable">numbers</span>.<span class="function">reduce</span>((<span class="variable">acc</span>, <span class="variable">curr</span>) =&gt; <span class="variable">acc</span> + <span class="variable">curr</span>, 0);
}
          </pre>
          <p>💡 <strong>טיפ:</strong> פרמטר <code>...rest</code> יכול להקל מאוד כשיש לטפל במספר לא ידוע של ארגומנטים הנשלחים לפונקציה.</p>
          <p>⚠️ <strong>מקרה קצה:</strong> פרמטר Rest חייב להיות האחרון בהגדרת הפונקציה. הגדרה כמו <code>function fn(...rest, arg)</code> תזרוק שגיאה.</p>
        </div>
      </div>
    `
  },
  closures: {
    title: '🔒 Closures (סגירות)',
    content: `
      <div class="modal-grid">
        <div class="modal-card">
          <h4>מהו Closure?</h4>
          <p>סגירה (Closure) היא תכונה מרכזית ב-JS, המאפשרת לפונקציה פנימית לזכור ולשמור גישה למשתנים של הפונקציה העוטפת שלה (Lexical Scope), גם לאחר שהפונקציה העוטפת כבר סיימה את ריצתה.</p>
          <pre>
<span class="comment">// דוגמה קלאסית ל-Closure: פונקציה לייצור מונים</span>
<span class="keyword">function</span> <span class="function">createCounter</span>() {
  <span class="comment">// המשתנה הזה הוא "פרטי" ולא ניתן לשינוי ישיר מבחוץ</span>
  <span class="keyword">let</span> <span class="variable">count</span> = 0;
  
  <span class="comment">// הפונקציה שמוחזרת שומרת על רפרנס אל count בזכות ה-Closure</span>
  <span class="keyword">return</span> <span class="keyword">function</span>() {
    <span class="variable">count</span>++;
    <span class="keyword">return</span> <span class="variable">count</span>;
  };
}

<span class="keyword">const</span> <span class="function">counter1</span> = <span class="function">createCounter</span>();
<span class="function">console.log</span>(<span class="function">counter1</span>()); <span class="comment">// 1</span>
<span class="function">console.log</span>(<span class="function">counter1</span>()); <span class="comment">// 2</span>
          </pre>
          <p>💡 <strong>טיפ:</strong> סגירות הן דרך מצוינת ליישם משתנים פרטיים ו-Data Hiding ב-JS, במיוחד לפני שהוצגו שדות פרטיים במחלקות (Private Fields).</p>
          <p>⚠️ <strong>מקרה קצה:</strong> מכיוון שה-Closure שומרת משתנים בזיכרון, שימוש מופרז (למשל יצירת פונקציות רבות בלולאה ששומרות רפרנסים כבדים) עלול להוביל לדליפות זיכרון (Memory Leaks) אם לא מנקים את הרפרנסים.</p>
        </div>
      </div>
    `
  },
  factories: {
    title: '🏭 Factory Functions',
    content: `
      <div class="modal-grid">
        <div class="modal-card">
          <h4>מהן Factory Functions?</h4>
          <p>פונקציית מפעל היא כל פונקציה שאיננה מחלקה או פונקציית בנאי, אשר פשוט מחזירה אובייקט חדש. אין צורך להשתמש במילת המפתח <code>new</code>.</p>
          <pre>
<span class="comment">// דוגמה ליצירת משתמש עם Factory Function</span>
<span class="keyword">function</span> <span class="function">createUser</span>(<span class="variable">name</span>, <span class="variable">role</span>) {
  <span class="comment">// סטייט פרטי (בעזרת Closures)</span>
  <span class="keyword">const</span> <span class="variable">createdAt</span> = <span class="keyword">new</span> <span class="function">Date</span>();
  
  <span class="keyword">return</span> {
    <span class="variable">name</span>,
    <span class="variable">role</span>,
    <span class="function">getInfo</span>() {
      <span class="comment">// ניגש ישירות לפרמטרים של הפונקציה - אין צורך ב-this!</span>
      <span class="keyword">return</span> <span class="string">\`\${<span class="variable">name</span>} is an \${<span class="variable">role</span>}\`</span>;
    }
  };
}

<span class="keyword">const</span> <span class="variable">user1</span> = <span class="function">createUser</span>(<span class="string">'David'</span>, <span class="string">'Admin'</span>);
<span class="function">console.log</span>(<span class="variable">user1</span>.<span class="function">getInfo</span>()); <span class="comment">// "David is an Admin"</span>
          </pre>
          <p>💡 <strong>טיפ:</strong> בעבודה עם Factory Functions אנו נמנעים מכל הבעיות הקשורות בחיבור שגוי של <code>this</code>. גישה זו גם מעודדת שימוש ב-Composition על פני Inheritance (הרכבה במקום הורשה) שהיא פעמים רבות תבנית עיצוב עדיפה.</p>
          <p>⚠️ <strong>מקרה קצה:</strong> אם אתם מייצרים כמות גדולה מאוד (מיליונים) של אובייקטים, Factory Functions עלולות לבזבז יותר זיכרון מ-Classes מכיוון שכל אובייקט יוצר עותק משלו לפונקציות, במקום להשתמש ב-Prototype.</p>
        </div>
      </div>
    `
  },
  modules: {
    title: '📦 ES6 Modules',
    content: `
      <div class="modal-grid">
        <div class="modal-card">
          <h4>ייבוא וייצוא עם ES6 Modules</h4>
          <p>מודולים ב-ES6 מאפשרים ארגון ופיצול של קוד. כל קובץ משמש כמודול נפרד (Module Scope), ויש להצהיר במפורש מה אנחנו חושפים החוצה (Export) ומה אנחנו מכניסים פנימה (Import).</p>
          <pre>
<span class="comment">// קובץ math.js (ייצוא)</span>
<span class="comment">// Named Exports (ייצוא שמי - אפשר כמה כאלו):</span>
<span class="keyword">export</span> <span class="keyword">const</span> <span class="function">add</span> = (<span class="variable">a</span>, <span class="variable">b</span>) =&gt; <span class="variable">a</span> + <span class="variable">b</span>;
<span class="keyword">export</span> <span class="keyword">const</span> <span class="variable">PI</span> = 3.14;

<span class="comment">// Default Export (ייצוא ברירת מחדל - רק אחד לכל קובץ!):</span>
<span class="keyword">export default function</span> <span class="function">multiply</span>(<span class="variable">a</span>, <span class="variable">b</span>) {
  <span class="keyword">return</span> <span class="variable">a</span> * <span class="variable">b</span>;
}

<span class="comment">// קובץ app.js (ייבוא)</span>
<span class="comment">// ייבוא ברירת מחדל (מחוץ לסוגריים) + ייבוא שמי (בתוך סוגריים):</span>
<span class="keyword">import</span> <span class="variable">multiply</span>, { <span class="variable">add</span>, <span class="variable">PI</span> } <span class="keyword">from</span> <span class="string">'./math.js'</span>;

<span class="comment">// ייבוא הכל כאובייקט אחד (Import *):</span>
<span class="keyword">import</span> * <span class="keyword">as</span> <span class="variable">MathUtils</span> <span class="keyword">from</span> <span class="string">'./math.js'</span>;
<span class="function">console.log</span>(<span class="variable">MathUtils</span>.<span class="function">add</span>(2, 3));

<span class="comment">// Re-exports (ייצוא מחדש מקובץ אחר):</span>
<span class="keyword">export</span> { <span class="variable">add</span> } <span class="keyword">from</span> <span class="string">'./math.js'</span>;
          </pre>
        </div>

        <div class="modal-card">
          <h4>השוואה: CommonJS לעומת ES Modules</h4>
          <p>בעולם של Node.js קיימת גם תבנית הייבוא הישנה יותר (CommonJS). כיום מומלץ להשתמש ב-ES Modules, ולשם כך ב-Node.js חובה להגדיר <code>"type": "module"</code> בקובץ package.json.</p>
          <table class="comparison-table" style="width:100%; border-collapse: collapse; text-align: right;">
            <thead>
              <tr style="border-bottom: 2px solid #ccc;">
                <th style="padding: 8px;">תכונה</th>
                <th style="padding: 8px;">ESM (ES6 Modules)</th>
                <th style="padding: 8px;">CommonJS (Node.js ישן)</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 8px;">תחביר ייצוא</td>
                <td style="padding: 8px;"><code>export</code> / <code>export default</code></td>
                <td style="padding: 8px;"><code>module.exports = ...</code></td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 8px;">תחביר ייבוא</td>
                <td style="padding: 8px;"><code>import x from 'x'</code></td>
                <td style="padding: 8px;"><code>const x = require('x')</code></td>
              </tr>
              <tr>
                <td style="padding: 8px;">אסינכרוניות</td>
                <td style="padding: 8px;">תומך ב-Top-level await</td>
                <td style="padding: 8px;">סינכרוני לחלוטין</td>
              </tr>
            </tbody>
          </table>
          <p>💡 <strong>טיפ:</strong> דפדפנים מודרניים תומכים ב-ESM ישירות בשימוש ע"י התגית <code>&lt;script type="module"&gt;</code>.</p>
          <p>⚠️ <strong>מקרה קצה:</strong> לא ניתן להשתמש בפונקציית <code>require()</code> בתוך מודול מסוג ESM, ולא ניתן להשתמש ב-<code>import</code> בצורה קלה בתוך קובץ CommonJS רגיל (אלא דרך ייבוא דינמי אסינכרוני).</p>
        </div>
      </div>
    `
  }
};
