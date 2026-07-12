const contentPart2 = {
  dom: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container" style="flex-direction: column; height: 200px; gap:10px;">
               <div class="anim-node" style="width:100%; text-align:center;">document (שורש)</div>
               <div style="display:flex; width:100%; justify-content:space-around;">
                   <div class="anim-node" style="width:45%; text-align:center;">&lt;head&gt;</div>
                   <div class="anim-node" style="width:45%; text-align:center; border-color:#00ff88;">&lt;body&gt;</div>
               </div>
               <div class="anim-packet move-right" style="position:relative; width:80%; height:30px; border-radius:8px; margin:0 auto; background:#38bdf8;">div (צומת חדש)</div>
            </div>
            `,
            text: "<b>מניפולציית DOM</b><br>ה-DOM הוא עץ של צמתים. באנימציה, ה-JS יצר צומת חדש (הכחול המהבהב) ודחף אותו לתוך ה-body! כך אנחנו משנים את האתר בזמן אמת."
        }
    ],

    title: '🌐 ה-DOM ומניפולציה של אלמנטים',
    content: `
      <div class="card-body">
        <p class="lead">ה-DOM (Document Object Model) הוא ייצוג עץ של ה-HTML של הדף. באמצעות JavaScript, אנו יכולים לבחור אלמנטים, להאזין לאירועים, ולשנות את התוכן והעיצוב שלהם בצורה דינמית.</p>
        
        <h4>1. בחירת אלמנטים (Selecting Elements)</h4>
        <pre><code><span class="t-com">// 1. בחירה לפי מזהה ייחודי (ID)</span>
<span class="t-key">const</span> btn = document.<span class="t-fn">getElementById</span>(<span class="t-str">"my-btn"</span>);

<span class="t-com">// 2. בחירה מודרנית לפי סלקטור של CSS (הראשון שמתאים)</span>
<span class="t-key">const</span> box = document.<span class="t-fn">querySelector</span>(<span class="t-str">".box"</span>);

<span class="t-com">// 3. בחירת כל האלמנטים שמתאימים (מחזיר NodeList)</span>
<span class="t-key">const</span> allBoxes = document.<span class="t-fn">querySelectorAll</span>(<span class="t-str">".box"</span>);</code></pre>

        <h4>2. מאזינים לאירועים (Events)</h4>
        <p>מאפשרים לנו להגיב לפעולות המשתמש (לחיצה, הקלדה, שליחת טפסים וכו'):</p>
        <pre><code><span class="t-key">const</span> form = document.<span class="t-fn">querySelector</span>(<span class="t-str">"#my-form"</span>);

form.<span class="t-fn">addEventListener</span>(<span class="t-str">"submit"</span>, (event) => {
  <span class="t-com">// מניעת התנהגות ברירת המחדל של הדפדפן (כמו ריענון הדף בשליחת טופס)</span>
  event.<span class="t-fn">preventDefault</span>();
  console.<span class="t-fn">log</span>(<span class="t-str">"הטופס נשלח!"</span>);
});</code></pre>

        <h4>3. הזרקת אירועים חכמה (Event Delegation)</h4>
        <p>במקום להוסיף מאזין לכל פריט ברשימה (במיוחד אם הם נוצרים דינמית), מוסיפים מאזין אחד בלבד ל<b>אלמנט האב</b> ומזהים את הילד שנלחץ בעזרת <code>event.target</code>.</p>
        <pre><code><span class="t-key">const</span> list = document.<span class="t-fn">querySelector</span>(<span class="t-str">"ul"</span>);

list.<span class="t-fn">addEventListener</span>(<span class="t-str">"click"</span>, (e) => {
  <span class="t-com">// נבדוק אם מה שנלחץ הוא אכן פריט ברשימה (LI)</span>
  <span class="t-ctl">if</span> (e.target.tagName === <span class="t-str">"LI"</span>) {
    console.<span class="t-fn">log</span>(<span class="t-str">"נלחץ הפריט:"</span>, e.target.textContent);
  }
});</code></pre>

        <h4>4. יצירה ושינוי אלמנטים (Create & Classes)</h4>
        <pre><code><span class="t-com">// יצירת תגית חדשה</span>
<span class="t-key">const</span> newDiv = document.<span class="t-fn">createElement</span>(<span class="t-str">"div"</span>);

<span class="t-com">// שינוי תוכן (עדיף textContent על innerHTML מטעמי אבטחה)</span>
newDiv.textContent = <span class="t-str">"שלום עולם!"</span>;

<span class="t-com">// ניהול קלאסים של CSS</span>
newDiv.classList.<span class="t-fn">add</span>(<span class="t-str">"active"</span>);    <span class="t-com">// הוספת קלאס</span>
newDiv.classList.<span class="t-fn">remove</span>(<span class="t-str">"hidden"</span>); <span class="t-com">// הסרת קלאס</span>
newDiv.classList.<span class="t-fn">toggle</span>(<span class="t-str">"dark"</span>);   <span class="t-com">// הוספה אם חסר, הסרה אם קיים</span>

<span class="t-com">// הזרקה לתוך אלמנט קיים בעמוד</span>
document.body.<span class="t-fn">appendChild</span>(newDiv);</code></pre>
      </div>
    `
  },
  arrayMethods: {
    title: '📊 מערכים ומתודות מובנות',
    content: `
      <div class="card-body">
        <p class="lead">עבודה עם רשימות (מערכים) היא אחד הנושאים המרכזיים במבחן. JavaScript מציעה מתודות מובנות (High-Order Functions) המקלות על ריצה, סינון ושינוי של מערכים.</p>
        
        <h4>טבלת השוואה קריטית למבחן</h4>
        <div class="tbl-scroll">
          <table>
            <tr><th>מתודה</th><th>מה היא עושה</th><th>מה היא מחזירה?</th><th>האם משנה את המקור?</th></tr>
            <tr><td><code>map()</code></td><td>מפעילה פונקציה על כל איבר במערך</td><td><b>מערך חדש</b> באותו אורך</td><td>❌ לא</td></tr>
            <tr><td><code>filter()</code></td><td>מסננת ושומרת רק איברים שעמדו בתנאי</td><td><b>מערך חדש</b> (יכול להיות ריק)</td><td>❌ לא</td></tr>
            <tr><td><code>reduce()</code></td><td>מצמצמת את כל המערך לערך בודד (סכום, ממוצע)</td><td><b>ערך יחיד</b> (מספר, אובייקט וכו')</td><td>❌ לא</td></tr>
            <tr><td><code>forEach()</code></td><td>רצה על המערך ומבצעת פעולה (למשל הדפסה)</td><td><code>undefined</code></td><td>❌ לא</td></tr>
            <tr><td><code>find()</code></td><td>מחזירה את האיבר <b>הראשון</b> שעובר את התנאי</td><td><b>איבר בודד</b> (או <code>undefined</code>)</td><td>❌ לא</td></tr>
            <tr><td><code>push() / pop()</code></td><td>הוספה או הסרה של איבר מ<b>סוף</b> המערך</td><td>משנה את המערך במקום</td><td>✔️ <b>כן</b></td></tr>
            <tr><td><code>slice()</code></td><td>מחזירה פרוסה/חלק מהמערך</td><td><b>מערך חדש</b></td><td>❌ לא</td></tr>
            <tr><td><code>splice()</code></td><td>מוסיפה, מוחקת או מחליפה איברים במערך</td><td>האיברים שהוסרו</td><td>✔️ <b>כן</b></td></tr>
          </table>
        </div>

        <h4>1. דוגמאות שימוש במתודות הליבה</h4>
        <pre><code><span class="t-key">const</span> nums = [<span class="t-num">1</span>, <span class="t-num">2</span>, <span class="t-num">3</span>, <span class="t-num">4</span>];

<span class="t-com">// map - הכפלת כל איבר פי 2</span>
<span class="t-key">const</span> doubled = nums.<span class="t-fn">map</span>(n => n * <span class="t-num">2</span>); <span class="t-com">// [2, 4, 6, 8]</span>

<span class="t-com">// filter - שמירה רק על מספרים שגדולים מ-2</span>
<span class="t-key">const</span> filtered = nums.<span class="t-fn">filter</span>(n => n > <span class="t-num">2</span>); <span class="t-com">// [3, 4]</span>

<span class="t-com">// reduce - חישוב סכום האיברים (0 הוא הערך ההתחלתי)</span>
<span class="t-key">const</span> sum = nums.<span class="t-fn">reduce</span>((total, n) => total + n, <span class="t-num">0</span>); <span class="t-com">// 10</span>

<span class="t-com">// find - מציאת המספר הראשון ששווה ל-3</span>
<span class="t-key">const</span> found = nums.<span class="t-fn">find</span>(n => n === <span class="t-num">3</span>); <span class="t-com">// 3</span></code></pre>
        
        <div class="callout analogy">
          <span class="ico">🏭</span>
          <div class="ct"><b>אנלוגיה:</b> 
            <br>• <b>map</b> = פס ייצור במפעל שמשנה כל קופסה שעוברת עליו.
            <br>• <b>filter</b> = שומר בכניסה למועדון שמכניס פנימה רק אנשים שעומדים בתנאי קוד לבוש.
            <br>• <b>reduce</b> = מגרסת קרטון שלוקחת ערימה של ארגזים ומכווצת אותם לקוביה אחת קטנה ודחוסה.
          </div>
        </div>

        <h4>2. מלכודת ה-sort המספרים במבחן! (זהב)</h4>
        <p>ברירת המחדל של <code>sort()</code> היא להמיר את האיברים ל<b>מחרוזות</b> ולמיין אותם לפי סדר אלפביתי במילון, ולא לפי ערך מספרי!</p>
        <pre><code><span class="t-com">// ❌ באג: מיון לפי טקסט (כי "1" בא לפני "2", אז "10" בא לפני "2"!)</span>
<span class="t-key">const</span> badSort = [<span class="t-num">10</span>, <span class="t-num">2</span>, <span class="t-num">1</span>].<span class="t-fn">sort</span>(); <span class="t-com">// פלט: [1, 10, 2]</span>

<span class="t-com">// ✅ פתרון: תמיד לספק פונקציית השוואה למיון מספרים!</span>
<span class="t-key">const</span> goodSortAsc = [<span class="t-num">10</span>, <span class="t-num">2</span>, <span class="t-num">1</span>].<span class="t-fn">sort</span>((a, b) => a - b);  <span class="t-com">// [1, 2, 10] - סדר עולה</span>
<span class="t-key">const</span> goodSortDesc = [<span class="t-num">10</span>, <span class="t-num">2</span>, <span class="t-num">1</span>].<span class="t-fn">sort</span>((a, b) => b - a); <span class="t-com">// [10, 2, 1] - סדר יורד</span></code></pre>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>הבחנה חשובה למבחן:</b>
            <br>• <b>slice (פרוסה)</b>: חותך חלק ומחזיר מערך חדש. <b>לא נוגע במקור</b>.
            <br>• <b>splice (ניתוח)</b>: מוסיף או מוחק איברים ו<b>משנה ישירות את המערך המקורי</b>.
            <br>• <b>forEach</b> תמיד מחזיר <code>undefined</code>. אל תנסו לשמור את הערך שלו במשתנה. אם אתם רוצים לקבל מערך מעובד בחזרה, השתמשו ב-<code>map</code>.
          </div>
        </div>
      </div>
    `
  },
  stringMethods: {
    title: '📝 מחרוזות (String Methods)',
    content: `
      <div class="card-body">
        <p class="lead">מחרוזות ב-JavaScript הן <b>Immutable (לא ניתנות לשינוי)</b>. זה אומר שכל מתודה שתפעילו עליהן לעולם לא תשנה את המקור, אלא תחזיר מחרוזת <b>חדשה</b>. חובה לשמור את התוצאה במשתנה!</p>
        
        <h4>1. מתודות נפוצות</h4>
        <pre><code><span class="t-key">let</span> str = <span class="t-str">"  Hello World  "</span>;

<span class="t-com">// 1. ניקוי רווחים מהקצוות (trim)</span>
str = str.<span class="t-fn">trim</span>(); <span class="t-com">// "Hello World"</span>

<span class="t-com">// 2. בדיקה אם מכיל תת-מחרוזת</span>
str.<span class="t-fn">includes</span>(<span class="t-str">"World"</span>); <span class="t-com">// true</span>

<span class="t-com">// 3. חיתוך חלק (slice)</span>
str.<span class="t-fn">slice</span>(<span class="t-num">0</span>, <span class="t-num">5</span>); <span class="t-com">// "Hello" (מאינדקס 0 עד 5 לא כולל)</span>

<span class="t-com">// 4. החלפת מילה</span>
str.<span class="t-fn">replace</span>(<span class="t-str">"World"</span>, <span class="t-str">"JS"</span>); <span class="t-com">// "Hello JS"</span></code></pre>

        <h4>2. שילוב split ו-join (אנלוגיית המספריים)</h4>
        <p><code>split</code> גוזר מחרוזת למערך לפי תו מפריד. <code>join</code> מדביק מערך חזרה למחרוזת. שילוב שלהם הוא כלי עוצמתי להיפוך מילים או עיבוד טקסט:</p>
        <pre><code><span class="t-key">const</span> word = <span class="t-str">"שלום"</span>;
<span class="t-com">// היפוך מילה: פיצול לאותיות -> היפוך המערך -> הדבקה חזרה</span>
<span class="t-key">const</span> reversed = word.<span class="t-fn">split</span>(<span class="t-str">""</span>).<span class="t-fn">reverse</span>().<span class="t-fn">join</span>(<span class="t-str">""</span>); <span class="t-com">// "םולש"</span></code></pre>
        <div class="callout analogy">
          <span class="ico">✂️</span>
          <div class="ct"><b>אנלוגיה:</b> <code>split</code> הוא כמו לקחת מספריים ולגזור משפט למילים בודדות. <code>join</code> הוא כמו לקחת דבק ולהדביק את המילים חזרה עם סימן חיבור ביניהן.</div>
        </div>
        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> זכרו ש-<code>length</code> במערך ובמחרוזת הוא <b>מאפיין (Property) ללא סוגריים</b> (כותבים <code>str.length</code>), ואילו מתודות כמו <code>toUpperCase()</code> הן פונקציות ו<b>חובה להוסיף סוגריים בסופן</b>.</div>
        </div>
      </div>
    `
  },
  objectMethods: {
    title: '🗂️ אובייקטים ומתודות מובנות',
    content: `
      <div class="card-body">
        <p class="lead">אובייקט (Object) מייצג מבנה נתונים מורכב של זוגות מפתח-ערך (Key-Value pairs).</p>
        
        <h4>1. גישה לאובייקטים</h4>
        <pre><code><span class="t-key">const</span> user = {
  name: <span class="t-str">"דני"</span>,
  age: <span class="t-num">30</span>
};

<span class="t-com">// גישה באמצעות נקודה (Dot Notation) - הנפוץ ביותר</span>
console.<span class="t-fn">log</span>(user.name); <span class="t-com">// "דני"</span>

<span class="t-com">// גישה באמצעות סוגריים מרובעים (Bracket Notation) - חובה כששם המפתח שמור במשתנה!</span>
<span class="t-key">const</span> keyName = <span class="t-str">"age"</span>;
console.<span class="t-fn">log</span>(user[keyName]); <span class="t-com">// 30</span></code></pre>

        <h4>2. מתודות אובייקט שימושיות</h4>
        <pre><code><span class="t-key">const</span> car = { brand: <span class="t-str">"Toyota"</span>, year: <span class="t-num">2020</span> };

<span class="t-com">// Object.keys() - מחזיר מערך של המפתחות</span>
Object.<span class="t-fn">keys</span>(car);   <span class="t-com">// ["brand", "year"]</span>

<span class="t-com">// Object.values() - מחזיר מערך של הערכים</span>
Object.<span class="t-fn">values</span>(car); <span class="t-com">// ["Toyota", 2020]</span>

<span class="t-com">// Object.entries() - מחזיר מערך של זוגות [מפתח, ערך]</span>
Object.<span class="t-fn">entries</span>(car); <span class="t-com">// [ ["brand", "Toyota"], ["year", 2020] ]</span></code></pre>

        <h4>3. נעילה והקפאת אובייקטים</h4>
        <ul class="tight">
          <li><b><code class="inl">Object.freeze()</code></b> — נועל את האובייקט לחלוטין. לא ניתן להוסיף שדות, למחוק שדות או לשנות ערכים קיימים.</li>
          <li><b><code class="inl">Object.seal()</code></b> — נועל את המבנה. לא ניתן להוסיף או למחוק שדות, אך <b>כן ניתן לשנות ערכים קיימים</b>.</li>
        </ul>
        <pre><code><span class="t-key">const</span> profile = { role: <span class="t-str">"User"</span> };
Object.<span class="t-fn">freeze</span>(profile);
profile.role = <span class="t-str">"Admin"</span>; <span class="t-com">// ❌ לא יעבוד, הערך יישאר "User"</span></code></pre>
      </div>
    `
  }
};
