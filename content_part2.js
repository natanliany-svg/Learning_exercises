const contentPart2 = {
  dom: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced fade-slide-up" style="border-color:#38bdf8;">document</div>
                <div class="flow-arrow-enhanced fade-slide-up delay-1"><span class="arrow-icon">↓</span></div>
                <div class="flow-node-enhanced fade-slide-up delay-2">&lt;html&gt;</div>
                <div class="flow-arrow-enhanced fade-slide-up delay-3"><span class="arrow-icon">↓</span></div>
                <div style="display:flex; gap:10px; width:100%; justify-content:center;" class="fade-slide-up delay-4">
                    <div class="flow-node-enhanced">&lt;head&gt;</div>
                    <div class="flow-node-enhanced active">&lt;body&gt;</div>
                </div>
            </div>
            `,
            text: "<b>שלב 1: עץ ה-DOM</b><br>כשהדפדפן קורא את קובץ ה-HTML שלנו, הוא הופך אותו לעץ של אובייקטים (Nodes) שנקרא DOM. השורש של העץ הוא ה-<code>document</code>."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced typewriter" style="border-color:#ff0055;">querySelector('.btn')</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced highlight-flash">מחפש בעץ...</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active bounce-in">&lt;button class="btn"&gt;</div>
            </div>
            `,
            text: "<b>שלב 2: שליפת אלמנטים</b><br>בעזרת <code>querySelector</code> אנחנו יכולים 'לצוד' כל אלמנט בעץ בדיוק כמו ב-CSS, ואז לשמור אותו במשתנה כדי לשחק איתו."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">createElement('div')</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced" style="border-color:#ffd700;">div.textContent = 'Hi'</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active">appendChild(div)</div>
            </div>
            `,
            text: "<b>שלב 3: הזרקת אלמנטים (Pipeline)</b><br>תהליך יצירת תוכן דינמי: 1. יוצרים תגית ריקה בזיכרון, 2. מוסיפים לה תוכן וקלאסים, 3. מזריקים אותה לתוך ה-DOM האמיתי ורק אז רואים אותה במסך."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced pulse-glow" style="border-color:#ff0055; border-radius:50%; width:80px; height:80px; display:flex; align-items:center; justify-content:center;">קליק! 🖱️</div>
                <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">→</span><span class="arrow-label">Event Listener</span></div>
                <div class="flow-node-enhanced active delay-2">פונקציית<br>Handler</div>
                <div class="flow-arrow-enhanced delay-3"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced delay-4" style="border-color:#00cc88;">הדף מתעדכן</div>
            </div>
            `,
            text: "<b>שלב 4: מאזינים (Event Listeners)</b><br>אנחנו שמים 'מכשירי האזנה' על אלמנטים (למשל על כפתור). כשהמשתמש לוחץ, המאזין מעיר פונקציה מיוחדת (Handler) שמעדכנת את הדף."
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
    visualizerSteps: [
        {
            html_visual: `
            <div class="memory-grid fade-slide-up">
                <div class="memory-cell active"><div class="cell-label">אינדקס 0</div><div class="cell-value">🍎</div></div>
                <div class="memory-cell active"><div class="cell-label">אינדקס 1</div><div class="cell-value">🍌</div></div>
                <div class="memory-cell active"><div class="cell-label">אינדקס 2</div><div class="cell-value">🍊</div></div>
            </div>
            `,
            text: "<b>שלב 1: מבנה המערך</b><br>מערך הוא רשימה מסודרת. כל תא מקבל מספר 'אינדקס' שמתחיל תמיד מ-0, דרכו אפשר לגשת למידע."
        },
        {
            html_visual: `
            <div class="stack-visual">
                <div class="stack-item" style="opacity:1;">[0] 🍎</div>
                <div class="stack-item" style="opacity:1;">[1] 🍌</div>
                <div class="stack-item chain-appear" style="background:#ff0055;">[2] 🍇 (push)</div>
            </div>
            `,
            text: "<b>שלב 2: הוספה עם push()</b><br>מתודת <code>push()</code> תמיד מוסיפה איבר חדש ל<b>סוף</b> המערך, ומתודת <code>pop()</code> מוחקת את האיבר ה<b>אחרון</b>."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">[1, 2, 3]</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">map(x*2)</span></div>
                <div class="flow-node-enhanced active ripple-out">[2, 4, 6]</div>
            </div>
            `,
            text: "<b>שלב 3: שיבוט עם map()</b><br>פס ייצור! עוברת על המערך המקורי, מפעילה פונקציה על כל תא, ויוצרת <b>מערך חדש לגמרי</b> בלי לשנות את המקור."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced">[1, 5, 2, 8]</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">filter(>4)</span></div>
                <div class="flow-node-enhanced active bounce-in">[5, 8]</div>
            </div>
            `,
            text: "<b>שלב 4: סינון עם filter()</b><br>השומר במועדון! יוצר מערך חדש ומשאיר בו רק את הערכים שהפונקציה עליהם החזירה true."
        }
    ],

    title: '📊 מתודות מערך (Higher-Order Methods)',
    content: `
<div class="lesson-container" dir="rtl" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: 0 auto; padding: 20px;">
    
    <!-- Header Section -->
    <header class="lesson-header" style="border-bottom: 2px solid #3498db; margin-bottom: 30px; padding-bottom: 15px;">
        <h1 style="color: #2c3e50; font-size: 2.2em; margin-bottom: 10px;">מתודות מערך מסדר גבוה ב-JavaScript (Higher-Order Array Methods)</h1>
        <p style="font-size: 1.1em; color: #555;">בשפת JavaScript, מערכים כוללים אוסף מובנה של פונקציות מתקדמות המכונות "מתודות מסדר גבוה" (Higher-Order Methods). מתודה מסדר גבוה מוגדרת כפונקציה אשר מקבלת פונקציה אחרת כארגומנט, או מחזירה פונקציה כתוצאה. השימוש במתודות אלו מאפשר כתיבת קוד דקלרטיבי, נקי וקל יותר לתחזוקה, ומייתר לרוב את הצורך בלולאות <code>for</code> מסורתיות תוך מניעת תופעות לוואי (Side Effects).</p>
    </header>

    <!-- Map Section -->
    <section class="method-section" style="margin-bottom: 40px;">
        <h2 style="color: #2980b9; border-right: 4px solid #2980b9; padding-right: 10px;">1. Array.prototype.map()</h2>
        <p>המתודה <code>map()</code> נועדה להתמיר (Transform) נתונים. היא עוברת על כל איבר במערך המקורי, מפעילה עליו פונקציית קולבאק (Callback), ומחזירה מערך <strong>חדש לגמרי</strong> באותו האורך, המכיל את התוצאות המעובדות. המערך המקורי נותר ללא שינוי (Immutability).</p>
        <h4 style="margin-bottom: 10px; color: #34495e;">דוגמה מעשית - שליפת ערכים מתוך מערך אובייקטים:</h4>
        <pre style="background: #282c34; color: #abb2bf; padding: 15px; border-radius: 6px; overflow-x: auto;" dir="ltr"><code class="language-javascript">
const users = [
  { id: 101, name: 'Alice', role: 'Admin' },
  { id: 102, name: 'Bob', role: 'User' },
  { id: 103, name: 'Charlie', role: 'Editor' }
];

// יצירת מערך חדש המכיל אך ורק את שמות המשתמשים
const userNames = users.map(user => user.name);

console.log(userNames); 
// פלט: ['Alice', 'Bob', 'Charlie']
        </code></pre>
    </section>

    <!-- Filter Section -->
    <section class="method-section" style="margin-bottom: 40px;">
        <h2 style="color: #2980b9; border-right: 4px solid #2980b9; padding-right: 10px;">2. Array.prototype.filter()</h2>
        <p>המתודה <code>filter()</code> משמשת לסינון נתונים קיימים. היא בוחנת כל איבר דרך פונקציית תנאי שמסופקת לה, ויוצרת מערך חדש המכיל אך ורק את האיברים עבורם פונקציית הקולבאק החזירה <code>true</code>. איברים שלא צלחו את התנאי נשמטים מהמערך התוצאתי.</p>
        <h4 style="margin-bottom: 10px; color: #34495e;">דוגמה מעשית - סינון משתמשים בעלי הרשאות ניהול:</h4>
        <pre style="background: #282c34; color: #abb2bf; padding: 15px; border-radius: 6px; overflow-x: auto;" dir="ltr"><code class="language-javascript">
const employees = [
  { name: 'Sarah', department: 'IT', active: true },
  { name: 'John', department: 'HR', active: false },
  { name: 'Mike', department: 'IT', active: true }
];

// סינון עובדים פעילים במחלקת ה-IT בלבד
const activeIT = employees.filter(emp => emp.department === 'IT' && emp.active);

console.log(activeIT); 
// פלט: [{ name: 'Sarah', department: 'IT', active: true }, { name: 'Mike', department: 'IT', active: true }]
        </code></pre>
    </section>

    <!-- Reduce Section -->
    <section class="method-section" style="margin-bottom: 40px;">
        <h2 style="color: #2980b9; border-right: 4px solid #2980b9; padding-right: 10px;">3. Array.prototype.reduce()</h2>
        <p>המתודה <code>reduce()</code> היא הכלי הגמיש והעוצמתי ביותר לעיבוד מערכים. תפקידה הוא "לצמצם" את המערך לכדי ערך בודד - אשר יכול להיות מספר, מחרוזת, אובייקט מורכב או מערך אחר. היא פועלת על ידי העברת משתנה צובר (Accumulator) בין כל איטרציה, אשר מתעדכן בהתאם ללוגיקה בפונקציית ה"רדוסר". מומלץ תמיד לספק ל-reduce ערך התחלתי מפורש כדי למנוע שגיאות הקשר.</p>
        <h4 style="margin-bottom: 10px; color: #34495e;">דוגמה מעשית - סכימת עלויות וקיבוץ נתונים:</h4>
        <pre style="background: #282c34; color: #abb2bf; padding: 15px; border-radius: 6px; overflow-x: auto;" dir="ltr"><code class="language-javascript">
const shoppingCart = [
  { product: 'Laptop', price: 1200, quantity: 1 },
  { product: 'Mouse', price: 45, quantity: 2 },
  { product: 'Monitor', price: 300, quantity: 1 }
];

// חישוב הסכום הכולל לתשלום בעגלת הקניות
const totalAmount = shoppingCart.reduce((acc, currentItem) => {
  return acc + (currentItem.price * currentItem.quantity);
}, 0); // 0 מוגדר כערך ההתחלתי של acc

console.log(totalAmount); // פלט: 1590
        </code></pre>
    </section>

    <!-- Find Section -->
    <section class="method-section" style="margin-bottom: 40px;">
        <h2 style="color: #2980b9; border-right: 4px solid #2980b9; padding-right: 10px;">4. Array.prototype.find()</h2>
        <p>המתודה <code>find()</code> משמשת לחיפוש נקודתי מהיר. היא סורקת את המערך ומחזירה את <strong>האיבר הראשון</strong> שמקיים את התנאי שהוגדר בקולבאק. בניגוד ל-filter, ברגע שנמצאת התאמה, המתודה עוצרת את הריצה (Short-circuiting) ואינה ממשיכה לבדוק את יתר האיברים. במקרה שלא נמצאה אף התאמה, התוצאה תהיה <code>undefined</code>.</p>
        <h4 style="margin-bottom: 10px; color: #34495e;">דוגמה מעשית - איתור רשומה לפי מזהה ייחודי:</h4>
        <pre style="background: #282c34; color: #abb2bf; padding: 15px; border-radius: 6px; overflow-x: auto;" dir="ltr"><code class="language-javascript">
const orders = [
  { orderId: 'ORD-001', status: 'Delivered' },
  { orderId: 'ORD-002', status: 'Processing' },
  { orderId: 'ORD-003', status: 'Shipped' }
];

const targetOrder = orders.find(order => order.orderId === 'ORD-002');

console.log(targetOrder); // פלט: { orderId: 'ORD-002', status: 'Processing' }
        </code></pre>
    </section>

    <!-- Sort Section -->
    <section class="method-section" style="margin-bottom: 40px;">
        <h2 style="color: #2980b9; border-right: 4px solid #2980b9; padding-right: 10px;">5. Array.prototype.sort()</h2>
        <p>המתודה <code>sort()</code> נועדה לסידור איברי המערך. להבדיל מהמתודות הקודמות, <code>sort()</code> מבצעת שינוי במערך המקורי עצמו (In-place Mutation). התנהגות ברירת המחדל שלה ממירה כל איבר למחרוזת וממיינת לפי ערכי קידוד UTF-16, מה שעלול לגרום לתוצאות בלתי צפויות במיון מספרים (למשל, 10 יופיע לפני 2). לכן, כשממיינים נתונים מספריים או אובייקטים, חובה להעביר למתודה <strong>פונקציית השוואה</strong> (Comparator Function).</p>
        <h4 style="margin-bottom: 10px; color: #34495e;">דוגמה מעשית - מיון נכון של מספרים:</h4>
        <pre style="background: #282c34; color: #abb2bf; padding: 15px; border-radius: 6px; overflow-x: auto;" dir="ltr"><code class="language-javascript">
const scores = [73, 100, 4, 21, 9];

// מיון בסדר עולה מדויק תוך שימוש בפונקציית השוואה
scores.sort((a, b) => a - b);

console.log(scores); // פלט: [4, 9, 21, 73, 100]

// טיפ: כדי למיין בסדר יורד, פשוט מחליפים את הסדר ל- b - a
        </code></pre>
    </section>

    <!-- Summary Section -->
    <footer class="lesson-footer" style="background: #ecf0f1; border: 1px solid #bdc3c7; padding: 20px; border-radius: 8px;">
        <h3 style="color: #2c3e50; margin-top: 0; border-bottom: 1px solid #ccc; padding-bottom: 10px;">סיכום לבחירת המתודה הנכונה</h3>
        <ul style="padding-right: 25px; margin-bottom: 0; line-height: 1.8;">
            <li>כאשר נדרש ליצור מבנה נתונים חדש שמבוסס נקודתית על המערך הקיים, הפעילו את <strong>map</strong>.</li>
            <li>כאשר נדרש לקבל תת-קבוצה ספציפית של נתונים העונים לתנאי, הפעילו את <strong>filter</strong>.</li>
            <li>כאשר נדרש להפיק חישוב בודד מתוך סך כל הנתונים, הפעילו את <strong>reduce</strong>.</li>
            <li>כאשר נדרש לשלוף איבר אחד מסוים במהירות, הפעילו את <strong>find</strong>.</li>
            <li>כאשר נדרש לסדר את המידע להמשך תצוגה, הפעילו את <strong>sort</strong> (בליווי פונקציית השוואה במידת הצורך).</li>
        </ul>
    </footer>
    
</div>
    `
  },
  stringMethods: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="memory-grid fade-slide-up" style="grid-template-columns: repeat(4, 1fr);">
                <div class="memory-cell"><div class="cell-label">0</div><div class="cell-value">ש</div></div>
                <div class="memory-cell"><div class="cell-label">1</div><div class="cell-value">ל</div></div>
                <div class="memory-cell"><div class="cell-label">2</div><div class="cell-value">ו</div></div>
                <div class="memory-cell"><div class="cell-label">3</div><div class="cell-value">ם</div></div>
            </div>
            `,
            text: "<b>שלב 1: מחרוזת כמערך</b><br>גם מחרוזת היא למעשה אוסף של תווים, ואפשר לגשת לכל אות בנפרד בעזרת האינדקס שלה (למשל: <code>str[0]</code>)."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">"Hello World"</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">slice(0, 5)</span></div>
                <div class="flow-node-enhanced active">"Hello"</div>
            </div>
            `,
            text: "<b>שלב 2: חיתוך (slice)</b><br>חותך חלק מהמחרוזת ומוציא אותו. חשוב: מחרוזות הן Immutable - החיתוך מחזיר מחרוזת חדשה ולא משנה את המקורית."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced" style="border-color:#ff0055;">name = "דני"</div>
                <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">↓</span></div>
                <div class="flow-node-enhanced typewriter delay-2" style="width:100%;">\`שלום \${name}\`</div>
                <div class="flow-arrow-enhanced delay-3"><span class="arrow-icon">↓</span></div>
                <div class="flow-node-enhanced active delay-4">"שלום דני"</div>
            </div>
            `,
            text: "<b>שלב 3: שרשור מודרני (Template Literals)</b><br>בעזרת Backticks (גרשיים הפוכים) אפשר להזריק משתנים ישירות לתוך הטקסט עם <code>\${}</code> במקום להשתמש בפלוסים."
        }
    ],

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
    visualizerSteps: [
        {
            html_visual: `
            <div class="memory-grid fade-slide-up">
                <div class="memory-cell" style="border-color:#38bdf8;"><div class="cell-label">name</div><div class="cell-value">"דני"</div></div>
                <div class="memory-cell" style="border-color:#38bdf8;"><div class="cell-label">age</div><div class="cell-value">30</div></div>
                <div class="memory-cell" style="border-color:#38bdf8;"><div class="cell-label">role</div><div class="cell-value">"Admin"</div></div>
            </div>
            `,
            text: "<b>שלב 1: אובייקט (מילון)</b><br>אובייקטים מאחסנים מידע בזוגות. לכל ערך יש 'מפתח' (Key) שדרכו שולפים אותו, בדיוק כמו במילון. אין חשיבות לסדר."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">user.name</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↘</span></div>
                <div class="flow-node-enhanced active">"דני"</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↙</span></div>
                <div class="flow-node-enhanced">user['name']</div>
            </div>
            `,
            text: "<b>שלב 2: גישה לנתונים</b><br>אפשר לגשת בעזרת נקודה (הנפוץ ביותר), או סוגריים מרובעים. חובה להשתמש במרובעים כששם המפתח שמור בתוך משתנה דינמי!"
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced" style="width:100%; border-color:#ff0055;">{ name: "דני", age: 30 }</div>
                <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">↓</span><span class="arrow-label">Object.keys()</span></div>
                <div class="flow-node-enhanced active delay-2">["name", "age"]</div>
            </div>
            `,
            text: "<b>שלב 3: חילוץ מפתחות (Object.keys)</b><br>פונקציית העזר Object.keys חולצת רק את המפתחות של האובייקט ומחזירה אותם כמערך מסודר שאפשר לרוץ עליו."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced slide-in-right">
                <div class="flow-node-enhanced" style="border-color:#ffd700;">{ name: "דני", age: 30 }</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">const { name } =</span></div>
                <div class="flow-node-enhanced active bounce-in">const name = "דני"</div>
            </div>
            `,
            text: "<b>שלב 4: חילוץ נתונים (Destructuring)</b><br>במקום לכתוב שוב ושוב <code>user.name</code>, אפשר לשלוף מאפיינים החוצה ישירות למשתנים עצמאיים."
        }
    ],

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
