const contentPart3 = {
  destructuring: {
    title: '🧩 Destructuring & Spread',
    content: `
      <div dir="rtl">
        <p>טכניקות עוצמתיות לכתיבת קוד נקי ויעיל יותר בעבודה עם אובייקטים, מערכים ופונקציות.</p>
        
        <div class="modal-grid">
          <div class="modal-card">
            <h3>פירוק אובייקט (Object Destructuring)</h3>
            <p>שליפת ערכים מתוך אובייקט למשתנים נפרדים בצורה נקייה.</p>
            <p><strong>אפשרות א': פירוק בסיסי לפי שמות מפתחות</strong></p>
<pre>
<span class="keyword">const</span> <span class="variable">user</span> = { <span class="variable">name</span>: <span class="string">'Dan'</span>, <span class="variable">age</span>: <span class="string">25</span> };
<span class="keyword">const</span> { <span class="variable">name</span>, <span class="variable">age</span> } = <span class="variable">user</span>;
</pre>
            <p><strong>אפשרות ב': שינוי שם המשתנה (Alias)</strong></p>
<pre>
<span class="keyword">const</span> { <span class="variable">name</span>: <span class="variable">userName</span> } = <span class="variable">user</span>; <span class="comment">// userName עכשיו מכיל 'Dan'</span>
</pre>
            <p><strong>אפשרות ג': ערך ברירת מחדל</strong></p>
<pre>
<span class="keyword">const</span> { <span class="variable">role</span> = <span class="string">'guest'</span> } = <span class="variable">user</span>;
</pre>
            <p>💡 <strong>טיפ:</strong> אפשר לשלב גם שינוי שם וגם ברירת מחדל: <code>{ name: userName = 'Anonymous' }</code></p>
          </div>

          <div class="modal-card">
            <h3>פירוק מערך (Array Destructuring)</h3>
            <p>שליפת ערכים מתוך מערך לפי המיקום שלהם.</p>
<pre>
<span class="keyword">const</span> <span class="variable">colors</span> = [<span class="string">'red'</span>, <span class="string">'green'</span>, <span class="string">'blue'</span>];
<span class="keyword">const</span> [ <span class="variable">primary</span>, <span class="variable">secondary</span> ] = <span class="variable">colors</span>;
</pre>
            <p><strong>דילוג על איברים:</strong></p>
<pre>
<span class="keyword">const</span> [ <span class="variable">first</span>, , <span class="variable">third</span> ] = <span class="variable">colors</span>; <span class="comment">// 'red', 'blue'</span>
</pre>
          </div>

          <div class="modal-card">
            <h3>Spread Operator (...) - פיזור</h3>
            <p>פריסת איברים של מערך או מפתחות של אובייקט למקום חדש.</p>
            <p><strong>שיכפול אובייקט והוספת מפתחות:</strong></p>
<pre>
<span class="keyword">const</span> <span class="variable">person</span> = { <span class="variable">name</span>: <span class="string">'Eli'</span> };
<span class="keyword">const</span> <span class="variable">updatedPerson</span> = { ...<span class="variable">person</span>, <span class="variable">age</span>: <span class="string">30</span> };
</pre>
            <p><strong>מיזוג מערכים:</strong></p>
<pre>
<span class="keyword">const</span> <span class="variable">arr1</span> = [<span class="string">1</span>, <span class="string">2</span>];
<span class="keyword">const</span> <span class="variable">arr2</span> = [<span class="string">3</span>, <span class="string">4</span>];
<span class="keyword">const</span> <span class="variable">combined</span> = [...<span class="variable">arr1</span>, ...<span class="variable">arr2</span>];
</pre>
            <p>⚠️ <strong>מקרה קצה:</strong> העתקה בעזרת Spread היא העתקה רדודה (Shallow Copy). אובייקטים פנימיים יועתקו כרפרנס.</p>
          </div>

          <div class="modal-card">
            <h3>Rest Parameters</h3>
            <p>איסוף שאר הפרמטרים למערך אחד בתוך פונקציה.</p>
<pre>
<span class="keyword">function</span> <span class="function">sumAll</span>(...<span class="variable">numbers</span>) {
  <span class="keyword">return</span> <span class="variable">numbers</span>.<span class="function">reduce</span>((<span class="variable">total</span>, <span class="variable">n</span>) => <span class="variable">total</span> + <span class="variable">n</span>, <span class="string">0</span>);
}
<span class="function">sumAll</span>(<span class="string">1</span>, <span class="string">2</span>, <span class="string">3</span>, <span class="string">4</span>); <span class="comment">// 10</span>
</pre>
            <p><strong>Rest יחד עם Destructuring:</strong></p>
<pre>
<span class="keyword">const</span> [<span class="variable">first</span>, ...<span class="variable">rest</span>] = [<span class="string">10</span>, <span class="string">20</span>, <span class="string">30</span>, <span class="string">40</span>];
<span class="comment">// first = 10, rest = [20, 30, 40]</span>
</pre>
          </div>
        </div>
      </div>
    `
  },
  syntaxWarehouse: {
    title: '🏪 מחסן הסינטקסים',
    content: `
      <div dir="rtl">
        <p>רפרנס מהיר ומלא לכל המבנים הבסיסיים והמתקדמים ב-JavaScript, מסודר לפי קטגוריות.</p>

        <div class="modal-grid">
          <div class="modal-card">
            <h3>משתנים</h3>
            <p><code><span class="keyword">const</span> <span class="variable">x</span> = <span class="string">10</span>;</code> <span class="comment">// קבוע, לא ניתן להשמה מחדש (ברירת מחדל מומלצת)</span></p>
            <p><code><span class="keyword">let</span> <span class="variable">y</span> = <span class="string">20</span>;</code> <span class="comment">// משתנה שניתן לשינוי (Scope של בלוק)</span></p>
            <p><code><span class="keyword">var</span> <span class="variable">z</span> = <span class="string">30</span>;</code> <span class="comment">// מיושן, לא מומלץ (Scope של פונקציה)</span></p>
          </div>

          <div class="modal-card">
            <h3>לולאות</h3>
            <p><code><span class="keyword">for</span> (<span class="keyword">let</span> <span class="variable">i</span> = <span class="string">0</span>; <span class="variable">i</span> &lt; <span class="string">5</span>; <span class="variable">i</span>++)</code> <span class="comment">// רגילה עם אינדקס</span></p>
            <p><code><span class="keyword">for</span> (<span class="keyword">const</span> <span class="variable">item</span> <span class="keyword">of</span> <span class="variable">array</span>)</code> <span class="comment">// מעבר על איברים במערך</span></p>
            <p><code><span class="keyword">for</span> (<span class="keyword">const</span> <span class="variable">key</span> <span class="keyword">in</span> <span class="variable">object</span>)</code> <span class="comment">// מעבר על מפתחות באובייקט</span></p>
            <p><code><span class="keyword">while</span> (<span class="variable">condition</span>)</code> <span class="comment">// כל עוד התנאי מתקיים</span></p>
          </div>

          <div class="modal-card">
            <h3>תנאים ואופרטורים</h3>
            <p><code><span class="keyword">if</span> (<span class="variable">x</span> === <span class="string">10</span>)</code> <span class="comment">// תנאי רגיל עם השוואה קשוחה</span></p>
            <p><code><span class="keyword">const</span> <span class="variable">res</span> = <span class="variable">cond</span> ? <span class="string">'yes'</span> : <span class="string">'no'</span>;</code> <span class="comment">// Ternary operator (תנאי מקוצר)</span></p>
            <p><code><span class="keyword">switch</span> (<span class="variable">val</span>) { <span class="keyword">case</span> <span class="string">'a'</span>: ... }</code> <span class="comment">// בדיקת אפשרויות מרובות</span></p>
            <p><code><span class="variable">a</span> ?? <span class="variable">b</span></code> <span class="comment">// Nullish Coalescing - מחזיר את b רק אם a הוא null או undefined</span></p>
            <p><code><span class="variable">a</span>?.<span class="variable">b</span></code> <span class="comment">// Optional Chaining - ניגש לתכונה בטוחה בלי לקרוס</span></p>
          </div>

          <div class="modal-card">
            <h3>פונקציות</h3>
            <p><code><span class="keyword">function</span> <span class="function">sayHi</span>() {}</code> <span class="comment">// Declaration - קיימת מראש עקב Hoisting</span></p>
            <p><code><span class="keyword">const</span> <span class="function">sayHi</span> = <span class="keyword">function</span>() {}</code> <span class="comment">// Expression - משתנה שמכיל פונקציה</span></p>
            <p><code><span class="keyword">const</span> <span class="function">sayHi</span> = () => {}</code> <span class="comment">// Arrow function - תחביר קצר, ללא this משלו</span></p>
            <p><code><span class="keyword">const</span> <span class="function">double</span> = <span class="variable">n</span> => <span class="variable">n</span> * <span class="string">2</span>;</code> <span class="comment">// Return משתמע במקרה של שורה אחת</span></p>
          </div>

          <div class="modal-card">
            <h3>מערכים - מתודות בסיסיות</h3>
            <p><code><span class="variable">arr</span>.<span class="function">push</span>(<span class="variable">x</span>)</code> <span class="comment">// הוספה לסוף</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">pop</span>()</code> <span class="comment">// הסרה מהסוף</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">unshift</span>(<span class="variable">x</span>)</code> <span class="comment">// הוספה להתחלה</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">shift</span>()</code> <span class="comment">// הסרה מההתחלה</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">slice</span>(<span class="variable">start</span>, <span class="variable">end</span>)</code> <span class="comment">// חיתוך ויצירת העתק (לא הורס)</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">splice</span>(<span class="variable">start</span>, <span class="variable">delCount</span>)</code> <span class="comment">// מחיקה/החלפה במקום (משנה מקור)</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">includes</span>(<span class="variable">val</span>)</code> <span class="comment">// האם קיים במערך (true/false)</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">indexOf</span>(<span class="variable">val</span>)</code> <span class="comment">// מיקום של איבר (או -1)</span></p>
          </div>

          <div class="modal-card">
            <h3>מערכים - לולאות מתקדמות (High Order)</h3>
            <p><code><span class="variable">arr</span>.<span class="function">forEach</span>(<span class="variable">x</span> => ...)</code> <span class="comment">// מעבר על כל איבר, ללא החזרה</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">map</span>(<span class="variable">x</span> => <span class="variable">x</span> * <span class="string">2</span>)</code> <span class="comment">// יצירת מערך חדש עם שינויים</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">filter</span>(<span class="variable">x</span> => <span class="variable">x</span> > <span class="string">5</span>)</code> <span class="comment">// סינון איברים למערך חדש</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">find</span>(<span class="variable">x</span> => <span class="variable">x</span> === <span class="string">3</span>)</code> <span class="comment">// מציאת האיבר הראשון שמתאים</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">reduce</span>((<span class="variable">acc</span>, <span class="variable">cur</span>) => <span class="variable">acc</span>+<span class="variable">cur</span>, <span class="string">0</span>)</code> <span class="comment">// צמצום המערך לערך בודד</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">some</span>(<span class="variable">cond</span>)</code> <span class="comment">// האם לפחות איבר אחד מקיים תנאי</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">every</span>(<span class="variable">cond</span>)</code> <span class="comment">// האם כל האיברים מקיימים תנאי</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">flat</span>()</code> <span class="comment">// שטיחת מערך דו-מימדי לחד-מימדי</span></p>
            <p><code><span class="variable">arr</span>.<span class="function">sort</span>((<span class="variable">a</span>, <span class="variable">b</span>) => <span class="variable">a</span> - <span class="variable">b</span>)</code> <span class="comment">// מיון מערך מספרים</span></p>
          </div>

          <div class="modal-card">
            <h3>מחרוזות</h3>
            <p><code><span class="variable">str</span>.<span class="function">split</span>(<span class="string">','</span>)</code> <span class="comment">// פיצול למערך לפי תו</span></p>
            <p><code><span class="variable">str</span>.<span class="function">slice</span>(<span class="string">0</span>, <span class="string">5</span>)</code> <span class="comment">// חיתוך תת מחרוזת</span></p>
            <p><code><span class="variable">str</span>.<span class="function">replace</span>(<span class="string">'a'</span>, <span class="string">'b'</span>)</code> <span class="comment">// החלפת תו/מילה (הראשון בלבד אלא אם Regex)</span></p>
            <p><code><span class="variable">str</span>.<span class="function">includes</span>(<span class="string">'x'</span>)</code> <span class="comment">// האם מכיל</span></p>
            <p><code><span class="variable">str</span>.<span class="function">trim</span>()</code> <span class="comment">// הסרת רווחים בהתחלה ובסוף</span></p>
            <p><code><span class="variable">str</span>.<span class="function">padStart</span>(<span class="string">3</span>, <span class="string">'0'</span>)</code> <span class="comment">// ריפוד מחרוזת באורך מינימלי ('001')</span></p>
            <p><code><span class="variable">str</span>.<span class="function">repeat</span>(<span class="string">3</span>)</code> <span class="comment">// חזרה על מחרוזת</span></p>
          </div>

          <div class="modal-card">
            <h3>אובייקטים (Objects)</h3>
            <p><code><span class="variable">Object</span>.<span class="function">keys</span>(<span class="variable">obj</span>)</code> <span class="comment">// מערך של כל המפתחות</span></p>
            <p><code><span class="variable">Object</span>.<span class="function">values</span>(<span class="variable">obj</span>)</code> <span class="comment">// מערך של כל הערכים</span></p>
            <p><code><span class="variable">Object</span>.<span class="function">entries</span>(<span class="variable">obj</span>)</code> <span class="comment">// מערך של צמדי [מפתח, ערך]</span></p>
            <p><code><span class="variable">Object</span>.<span class="function">assign</span>({}, <span class="variable">obj1</span>, <span class="variable">obj2</span>)</code> <span class="comment">// מיזוג אובייקטים</span></p>
            <p><code><span class="variable">Object</span>.<span class="function">freeze</span>(<span class="variable">obj</span>)</code> <span class="comment">// מניעת כל שינוי לאובייקט</span></p>
            <p><code><span class="variable">Object</span>.<span class="function">seal</span>(<span class="variable">obj</span>)</code> <span class="comment">// מניעת הוספה/מחיקה, אך מתיר שינוי ערכים קיימים</span></p>
          </div>
        </div>
      </div>
    `
  },
  pythonVsJs: {
    title: '🐍 Python מול JavaScript 🟨',
    content: `
      <div dir="rtl">
        <p>טבלת השוואה מקיפה בין סינטקס Python לסינטקס JavaScript המודרני.</p>
        <table style="width: 100%; border-collapse: collapse; text-align: right;" border="1">
          <thead>
            <tr style="background: rgba(255,255,255,0.1);">
              <th>קטגוריה</th>
              <th>Python 🐍</th>
              <th>JavaScript 🟨</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>הדפסה</td><td><code>print("hi")</code></td><td><code>console.log('hi')</code></td></tr>
            <tr><td>הגדרת משתנה</td><td><code>x = 5</code></td><td><code>let x = 5; / const x = 5;</code></td></tr>
            <tr><td>הגדרת פונקציה</td><td><code>def func(x): return x</code></td><td><code>function func(x) { return x; }</code><br/><code>const func = x => x;</code></td></tr>
            <tr><td>לולאת for (טווח)</td><td><code>for i in range(5):</code></td><td><code>for (let i = 0; i < 5; i++) { ... }</code></td></tr>
            <tr><td>לולאת for (איברים)</td><td><code>for item in list:</code></td><td><code>for (const item of array) { ... }</code></td></tr>
            <tr><td>לולאת while</td><td><code>while condition:</code></td><td><code>while (condition) { ... }</code></td></tr>
            <tr><td>תנאי if</td><td><code>if x == 5:</code></td><td><code>if (x === 5) { ... }</code></td></tr>
            <tr><td>תנאי else if</td><td><code>elif x == 3:</code></td><td><code>else if (x === 3) { ... }</code></td></tr>
            <tr><td>מערכים/רשימות</td><td><code>arr = [1, 2, 3]</code></td><td><code>const arr = [1, 2, 3];</code></td></tr>
            <tr><td>מילונים/אובייקטים</td><td><code>dict = {'a': 1}</code></td><td><code>const obj = { a: 1 };</code></td></tr>
            <tr><td>ערך ריק</td><td><code>None</code></td><td><code>null / undefined</code></td></tr>
            <tr><td>בוליאני</td><td><code>True / False</code></td><td><code>true / false</code></td></tr>
            <tr><td>אופרטור AND</td><td><code>and</code></td><td><code>&&</code></td></tr>
            <tr><td>אופרטור OR</td><td><code>or</code></td><td><code>||</code></td></tr>
            <tr><td>אופרטור NOT</td><td><code>not</code></td><td><code>!</code></td></tr>
            <tr><td>השוואה</td><td><code>==</code></td><td><code>===</code></td></tr>
            <tr><td>הכנסת משתנה למחרוזת</td><td><code>f"Hi {name}"</code></td><td><code>\`Hi \${name}\`</code></td></tr>
            <tr><td>אורך רשימה/מערך</td><td><code>len(arr)</code></td><td><code>arr.length</code></td></tr>
            <tr><td>הוספה לסוף רשימה</td><td><code>arr.append(x)</code></td><td><code>arr.push(x)</code></td></tr>
            <tr><td>הסרה מהסוף</td><td><code>arr.pop()</code></td><td><code>arr.pop()</code></td></tr>
            <tr><td>מחיקת מפתח במילון</td><td><code>del obj['key']</code></td><td><code>delete obj['key']</code> / <code>delete obj.key</code></td></tr>
            <tr><td>חיתוך (Slicing)</td><td><code>arr[1:3]</code></td><td><code>arr.slice(1, 3)</code></td></tr>
            <tr><td>חיתוך מחרוזת</td><td><code>str[1:3]</code></td><td><code>str.slice(1, 3)</code> / <code>substring</code></td></tr>
            <tr><td>תנאי מקוצר (Ternary)</td><td><code>x if cond else y</code></td><td><code>cond ? x : y</code></td></tr>
            <tr><td>בדיקת קיום איבר</td><td><code>x in arr</code></td><td><code>arr.includes(x)</code></td></tr>
            <tr><td>Type Checking</td><td><code>type(x)</code></td><td><code>typeof x</code></td></tr>
            <tr><td>Error Handling</td><td><code>try: ... except Exception as e:</code></td><td><code>try { ... } catch (e) { ... }</code></td></tr>
            <tr><td>List Comprehension / Map</td><td><code>[x*2 for x in arr]</code></td><td><code>arr.map(x => x*2)</code></td></tr>
            <tr><td>Filter Comprehension</td><td><code>[x for x in arr if x>5]</code></td><td><code>arr.filter(x => x>5)</code></td></tr>
            <tr><td>Classes</td><td><code>class Dog: def __init__(self):</code></td><td><code>class Dog { constructor() { ... } }</code></td></tr>
            <tr><td>ייבוא קוד</td><td><code>import math / from math import sqrt</code></td><td><code>const math = require('math')</code> / <code>import { sqrt } from 'math'</code></td></tr>
            <tr><td>ייצוא קוד</td><td>פשוט משתמשים בקובץ</td><td><code>module.exports = x</code> / <code>export default x</code></td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  ironRules: {
    title: '⚔️ כללי ברזל לעבודה מקצועית ב-JavaScript',
    content: `
      <div dir="rtl">
        <div class="modal-grid">
          <div class="modal-card">
            <h3>1. חוק ההשוואה הקשוחה</h3>
            <p>לעולם אל תשתמשו ב-<code>==</code>. תמיד <code>===</code> שמשווה גם ערך וגם סוג.</p>
            <pre><span class="comment">// ❌ לא טוב</span><br/>0 == '0' <span class="comment">// true</span><br/><br/><span class="comment">// ✅ מצוין</span><br/>0 === '0' <span class="comment">// false</span></pre>
          </div>
          <div class="modal-card">
            <h3>2. שמירה על Scope בטוח</h3>
            <p>השתמשו ב-<code>const</code> כברירת מחדל. אם הערך ישתנה, השתמשו ב-<code>let</code>. עזבו את <code>var</code> לנצח.</p>
            <pre><span class="comment">// ❌ לא טוב</span><br/><span class="keyword">var</span> <span class="variable">count</span> = <span class="string">0</span>;<br/><br/><span class="comment">// ✅ מצוין</span><br/><span class="keyword">const</span> <span class="variable">max</span> = <span class="string">10</span>;<br/><span class="keyword">let</span> <span class="variable">current</span> = <span class="string">0</span>;</pre>
          </div>
          <div class="modal-card">
            <h3>3. Optional Chaining (?.)</h3>
            <p>אל תסתכנו בקריסת קוד כשמנסים לגשת לערך בתוך אובייקט שאולי לא קיים (null / undefined).</p>
            <pre><span class="comment">// ❌ עלול לקרוס</span><br/><span class="variable">user</span>.<span class="variable">profile</span>.<span class="variable">name</span><br/><br/><span class="comment">// ✅ בטוח לגמרי</span><br/><span class="variable">user</span>?.<span class="variable">profile</span>?.<span class="variable">name</span></pre>
          </div>
          <div class="modal-card">
            <h3>4. Immutability (אי-השתנות)</h3>
            <p>הימנעו מלשנות אובייקטים ומערכים קיימים. צרו חדשים במקום.</p>
            <pre><span class="comment">// ❌ שינוי מקור (Mutation)</span><br/><span class="variable">arr</span>.<span class="function">push</span>(<span class="string">4</span>);<br/><br/><span class="comment">// ✅ יצירת חדש</span><br/><span class="keyword">const</span> <span class="variable">newArr</span> = [...<span class="variable">arr</span>, <span class="string">4</span>];</pre>
          </div>
          <div class="modal-card">
            <h3>5. שמות משמעותיים ו-camelCase</h3>
            <p>משתנים ופונקציות תמיד ב-camelCase. מחלקות ב-PascalCase. שמות חייבים להסביר מה המשתנה עושה.</p>
            <pre><span class="comment">// ❌ לא ברור</span><br/><span class="keyword">const</span> <span class="variable">u</span> = ...;<br/><span class="keyword">function</span> <span class="function">calc</span>() {}<br/><br/><span class="comment">// ✅ ברור</span><br/><span class="keyword">const</span> <span class="variable">activeUser</span> = ...;<br/><span class="keyword">function</span> <span class="function">calculateTotal</span>() {}</pre>
          </div>
          <div class="modal-card">
            <h3>6. תמיד לטפל בשגיאות (Error Handling)</h3>
            <p>קוד שמועד לפורענות (כמו קריאות רשת או גישה לקבצים) חייב להיות עטוף.</p>
            <pre>
<span class="keyword">try</span> {
  <span class="keyword">const</span> <span class="variable">data</span> = <span class="function">JSON.parse</span>(<span class="variable">str</span>);
} <span class="keyword">catch</span> (<span class="variable">error</span>) {
  <span class="function">console.error</span>(<span class="string">'Failed to parse'</span>, <span class="variable">error</span>);
}
            </pre>
          </div>
          <div class="modal-card">
            <h3>7. DRY - Don't Repeat Yourself</h3>
            <p>אם כתבתם את אותה שורת קוד פעמיים - עטפו אותה בפונקציה. תחזוקה של קוד כפול היא סיוט.</p>
          </div>
          <div class="modal-card">
            <h3>8. פונקציות קטנות (Single Responsibility)</h3>
            <p>כל פונקציה צריכה לעשות דבר אחד, ודבר אחד בלבד. אם פונקציה מתארכת מעבר ל-20 שורות - כנראה שהיא עושה יותר מדי.</p>
          </div>
          <div class="modal-card">
            <h3>9. שימוש בסינטקס מודרני</h3>
            <p>העדיפו Arrow Functions, Template Literals, Destructuring על פני שיטות ישנות. הקוד יהיה נקי וקצר יותר.</p>
          </div>
          <div class="modal-card">
            <h3>10. הערות קוד: ה"למה", לא ה"מה"</h3>
            <p>הקוד עצמו אמור להסביר *מה* הוא עושה. ההערות צריכות להסביר *למה* בחרתם בפתרון הזה או פרטי קצה מוזרים.</p>
          </div>
        </div>
      </div>
    `
  },
  keyboard: {
    title: '⌨️ קיצורי מקלדת ב-VS Code',
    content: `
      <div dir="rtl">
        <p>שליטה בקיצורי מקלדת תהפוך אתכם למתכנתים מהירים בהרבה. הנה הקיצורים הקריטיים ל-VS Code:</p>
        
        <div class="modal-grid">
          <div class="modal-card">
            <h3>עריכה בסיסית ומתקדמת</h3>
            <p><span class="key">Ctrl</span> + <span class="key">D</span> - בחירת המופע הבא של הטקסט המסומן (Multi-cursor מצוין!)</p>
            <p><span class="key">Alt</span> + <span class="key">⬆/⬇</span> - הזזת השורה הנוכחית למעלה או למטה</p>
            <p><span class="key">Shift</span> + <span class="key">Alt</span> + <span class="key">⬇</span> - שכפול השורה הנוכחית כלפי מטה</p>
            <p><span class="key">Ctrl</span> + <span class="key">Shift</span> + <span class="key">K</span> - מחיקת השורה הנוכחית</p>
            <p><span class="key">Ctrl</span> + <span class="key">/</span> - הוספה/הסרה של הערת קוד (Toggle Comment)</p>
            <p><span class="key">Ctrl</span> + <span class="key">Z</span> - ביטול פעולה אחרונה (Undo)</p>
            <p><span class="key">Ctrl</span> + <span class="key">Shift</span> + <span class="key">Z</span> - שחזור פעולה (Redo)</p>
          </div>

          <div class="modal-card">
            <h3>ניווט וחיפוש</h3>
            <p><span class="key">Ctrl</span> + <span class="key">P</span> - פתיחה מהירה של קבצים (הקלידו שם של קובץ)</p>
            <p><span class="key">Ctrl</span> + <span class="key">Shift</span> + <span class="key">P</span> - לוח הפקודות (Command Palette) - כל הפעולות של העורך פה</p>
            <p><span class="key">Ctrl</span> + <span class="key">G</span> - מעבר ישיר לשורה ספציפית</p>
            <p><span class="key">Ctrl</span> + <span class="key">B</span> - פתיחה/סגירה של תפריט הצד (Explorer)</p>
          </div>

          <div class="modal-card">
            <h3>טרמינל (Terminal)</h3>
            <p><span class="key">Ctrl</span> + <span class="key">\`</span> (Backtick) - פתיחה או סגירה של הטרמינל למטה</p>
            <p><span class="key">Ctrl</span> + <span class="key">Shift</span> + <span class="key">\`</span> - פתיחת חלון טרמינל חדש לגמרי</p>
          </div>

          <div class="modal-card">
            <h3>כלים חכמים</h3>
            <p><span class="key">F2</span> - שינוי שם של משתנה/פונקציה בכל הפרויקט בצורה בטוחה (Rename Symbol)</p>
            <p><span class="key">Ctrl</span> + <span class="key">Space</span> - הצגת הצעות השלמה אוטומטית (IntelliSense)</p>
            <p><span class="key">Ctrl</span> + <span class="key">.</span> - תיקונים מהירים (Quick Fix) כשיש שגיאה או אזהרה (נורת קסם)</p>
          </div>
        </div>
      </div>
    `
  },
  libraries: {
    title: '📚 ספריות מיוחדות ב-Node.js',
    content: `
      <div dir="rtl">
        <p>אקוסיסטם ה-NPM הוא עצום. הנה ספריות חובה שכל מפתח צריך להכיר.</p>
        
        <div class="modal-grid">
          <div class="modal-card">
            <h3>readline-sync</h3>
            <p><strong>מטרה:</strong> קבלת קלט מהמשתמש בטרמינל בצורה סינכרונית (עוצר את הקוד עד שהמשתמש מקליד).</p>
            <p><strong>התקנה:</strong> <code>npm install readline-sync</code></p>
<pre>
<span class="keyword">const</span> <span class="variable">readline</span> = <span class="function">require</span>(<span class="string">'readline-sync'</span>);
<span class="keyword">const</span> <span class="variable">name</span> = <span class="variable">readline</span>.<span class="function">question</span>(<span class="string">'What is your name? '</span>);
<span class="keyword">const</span> <span class="variable">email</span> = <span class="variable">readline</span>.<span class="function">questionEMail</span>(<span class="string">'Enter email: '</span>);
</pre>
          </div>

          <div class="modal-card">
            <h3>lodash</h3>
            <p><strong>מטרה:</strong> ארגז הכלים האולטימטיבי למניפולציה של מערכים, אובייקטים ומחרוזות.</p>
            <p><strong>התקנה:</strong> <code>npm install lodash</code></p>
<pre>
<span class="keyword">const</span> <span class="variable">_</span> = <span class="function">require</span>(<span class="string">'lodash'</span>);

<span class="comment">// שליפה בטוחה של נתונים מקוננים</span>
<span class="keyword">const</span> <span class="variable">val</span> = <span class="variable">_</span>.<span class="function">get</span>(<span class="variable">obj</span>, <span class="string">'a.b.c'</span>, <span class="string">'default'</span>);

<span class="comment">// שכפול עמוק (Deep clone)</span>
<span class="keyword">const</span> <span class="variable">copy</span> = <span class="variable">_</span>.<span class="function">cloneDeep</span>(<span class="variable">original</span>);

<span class="comment">// הסרת כפילויות ממערך</span>
<span class="keyword">const</span> <span class="variable">unique</span> = <span class="variable">_</span>.<span class="function">uniq</span>([<span class="string">1</span>, <span class="string">2</span>, <span class="string">2</span>, <span class="string">3</span>]);
</pre>
          </div>

          <div class="modal-card">
            <h3>express</h3>
            <p><strong>מטרה:</strong> פריימוורק להקמת שרתי Web ו-APIs בצורה קלה ומהירה ב-Node.js.</p>
            <p><strong>התקנה:</strong> <code>npm install express</code></p>
<pre>
<span class="keyword">const</span> <span class="variable">express</span> = <span class="function">require</span>(<span class="string">'express'</span>);
<span class="keyword">const</span> <span class="variable">app</span> = <span class="function">express</span>();

<span class="variable">app</span>.<span class="function">get</span>(<span class="string">'/api/users'</span>, (<span class="variable">req</span>, <span class="variable">res</span>) => {
  <span class="variable">res</span>.<span class="function">json</span>([{ <span class="variable">id</span>: <span class="string">1</span>, <span class="variable">name</span>: <span class="string">'Bob'</span> }]);
});

<span class="variable">app</span>.<span class="function">listen</span>(<span class="string">3000</span>);
</pre>
          </div>

          <div class="modal-card">
            <h3>chalk</h3>
            <p><strong>מטרה:</strong> הדפסת טקסט צבעוני בטרמינל (מעולה להודעות שגיאה או הצלחה).</p>
            <p><strong>התקנה:</strong> <code>npm install chalk</code></p>
<pre>
<span class="keyword">const</span> <span class="variable">chalk</span> = <span class="function">require</span>(<span class="string">'chalk'</span>);
<span class="function">console.log</span>(<span class="variable">chalk</span>.<span class="function">green</span>(<span class="string">'Success!'</span>));
<span class="function">console.log</span>(<span class="variable">chalk</span>.<span class="function">red</span>.<span class="function">bold</span>(<span class="string">'ERROR: Something failed'</span>));
</pre>
          </div>

          <div class="modal-card">
            <h3>dotenv</h3>
            <p><strong>מטרה:</strong> טעינת משתני סביבה מקובץ <code>.env</code> לתוך <code>process.env</code>.</p>
            <p><strong>התקנה:</strong> <code>npm install dotenv</code></p>
<pre>
<span class="comment">// בתחילת הקובץ הראשי:</span>
<span class="function">require</span>(<span class="string">'dotenv'</span>).<span class="function">config</span>();

<span class="keyword">const</span> <span class="variable">dbPass</span> = <span class="variable">process</span>.<span class="variable">env</span>.<span class="variable">DB_PASSWORD</span>;
</pre>
          </div>

          <div class="modal-card">
            <h3>nodemon</h3>
            <p><strong>מטרה:</strong> כלי פיתוח שמאזין לשינויים בקבצים ומרסטר את השרת אוטומטית. חוסך המון זמן!</p>
            <p><strong>התקנה:</strong> <code>npm install -g nodemon</code> (התקנה גלובלית מומלצת)</p>
            <p><strong>שימוש:</strong> במקום להריץ <code>node app.js</code>, מריצים <code>nodemon app.js</code>.</p>
          </div>

          <div class="modal-card">
            <h3>axios</h3>
            <p><strong>מטרה:</strong> ביצוע קריאות רשת (HTTP Requests) בצורה נקייה ונוחה, כולל טיפול אוטומטי ב-JSON (חלופה מעולה ל-fetch).</p>
            <p><strong>התקנה:</strong> <code>npm install axios</code></p>
<pre>
<span class="keyword">const</span> <span class="variable">axios</span> = <span class="function">require</span>(<span class="string">'axios'</span>);

<span class="keyword">async</span> <span class="keyword">function</span> <span class="function">getData</span>() {
  <span class="keyword">const</span> <span class="variable">response</span> = <span class="keyword">await</span> <span class="variable">axios</span>.<span class="function">get</span>(<span class="string">'https://api.example.com/data'</span>);
  <span class="function">console.log</span>(<span class="variable">response</span>.<span class="variable">data</span>);
}
</pre>
          </div>
        </div>
      </div>
    `
  }
};
