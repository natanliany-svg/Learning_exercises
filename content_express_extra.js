const contentExpressExtra = {
  expressExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced">לקוח (Client)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">GET /</span></div>
                <div class="flow-node-enhanced active highlight-flash" style="border-color:#38bdf8;">שרת Express</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced" style="background:#00d2ff; color:white;">"Hello!"</div>
            </div>
            `,
            text: "<b>שלב 1: בקשות ותשובות (Routing)</b><br>הלקוח שולח בקשה (Request) לכתובת מסוימת, והשרת מזהה את הנתיב ומחזיר תשובה (Response)."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">בקשה (Req)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active ripple-out" style="border-style:dashed; border-color:#ffd700;">Middleware<br>logger()</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced" style="border-color:#00cc88;">תשובה (Res)</div>
            </div>
            `,
            text: "<b>שלב 2: שומרי הסף (Middleware)</b><br>פונקציות אמצע שמופעלות לפני שהבקשה מגיעה ליעדה. מצוינות ללוגים, אימות נתונים, ואבטחה."
        },
        {
            html_visual: `
            <div class="timeline-visual slide-in-right">
                <div class="flow-node-enhanced" style="border-color:#ff0055;">שגיאה (Error)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↓</span></div>
                <div class="flow-node-enhanced error pulse-glow">תופס שגיאות<br>(err, req, res, next)</div>
            </div>
            `,
            text: "<b>שלב 3: טיפול בשגיאות (Error Handling)</b><br>מנגנון ייעודי עם 4 פרמטרים שתופס התרסקויות ומונע מהשרת ליפול, תוך החזרת שגיאה מסודרת ללקוח."
        }
    ],
    title: '🚀 יסודות Express.js',
    content: `
      <div class="card-body">
        <p class="lead">ספריית Express היא הדרך הפופולרית ביותר לבנות שרתי אינטרנט ו-API ב-Node.js. היא פשוטה, מהירה ומבוססת על נתבים (Routes) ושומרי סף (Middleware).</p>
        
        <h4>1. ניתוב בסיסי (Routing) ופרמטרים</h4>
        <ul class="tight">
          <li><b>נתיב (Route)</b> — מורכב משיטת בקשה (GET, POST, וכו') וכתובת URL.</li>
          <li><b>פרמטרים בנתיב (req.params)</b> — משתנים בתוך ה-URL (כמו <code>/users/:id</code>) המאפשרים לשלוף מידע ספציפי.</li>
        </ul>
        <pre><code><span class="t-key">const</span> express = <span class="t-fn">require</span>(<span class="t-str">"express"</span>);
<span class="t-key">const</span> app = <span class="t-fn">express</span>();

app.<span class="t-fn">get</span>(<span class="t-str">"/users/:id"</span>, (req, res) => {
  <span class="t-key">const</span> id = req.params.id;
  res.<span class="t-fn">json</span>({ message: <span class="t-str">\`מחזיר את משתמש \${id}\`</span> });
});</code></pre>

        <div class="callout analogy">
          <span class="ico">🚦</span>
          <div class="ct"><b>אנלוגיה:</b> שרת Express הוא כמו מרכזיית טלפונים. כשמתקשרים לראוטר מסוים (נתיב), הוא מחבר אתכם למחלקה המתאימה שמטפלת בבקשה שלכם.</div>
        </div>

        <h4>2. שומרי הסף (Middleware)</h4>
        <p>פונקציות שמיירטות את הבקשה לפני שהיא מגיעה לנתיב הסופי. חובה לקרוא ל-<code>next()</code> כדי שהבקשה תמשיך הלאה!</p>
        <pre><code><span class="t-key">function</span> <span class="t-fn">logger</span>(req, res, next) {
  console.<span class="t-fn">log</span>(<span class="t-str">\`בקשה חדשה התקבלה בנתיב: \${req.url}\`</span>);
  <span class="t-ctl">next</span>(); <span class="t-com">// חובה! מעביר את השרביט לתחנה הבאה</span>
}
app.<span class="t-fn">use</span>(logger);</code></pre>

        <h4>3. חלוקה לראוטרים (Express Router)</h4>
        <p>כדי שלא יהיה לנו קובץ ענק ומבולגן, אנחנו מחלקים את הנתיבים לקבצים שונים (למשל ראוטר למשתמשים, ראוטר למוצרים) ומחברים אותם באפליקציה המרכזית.</p>
        <pre><code><span class="t-com">// בתוך קובץ users.js</span>
<span class="t-key">const</span> router = express.<span class="t-fn">Router</span>();
router.<span class="t-fn">get</span>(<span class="t-str">"/"</span>, (req, res) => res.<span class="t-fn">send</span>(<span class="t-str">"כל המשתמשים"</span>));
<span class="t-key">module</span>.exports = router;

<span class="t-com">// באפליקציה המרכזית app.js</span>
app.<span class="t-fn">use</span>(<span class="t-str">"/api/users"</span>, <span class="t-fn">require</span>(<span class="t-str">"./routes/users"</span>));</code></pre>

        <h4>4. טיפול שגיאות מרכזי (Error Handling)</h4>
        <p>פונקציית Middleware מיוחדת עם <b>4 פרמטרים</b> שתופסת כל שגיאה שהתרחשה בשרת, במקום שהוא יקרוס.</p>
        <pre><code>app.<span class="t-fn">use</span>((err, req, res, next) => {
  console.<span class="t-fn">error</span>(err.message);
  res.<span class="t-fn">status</span>(<span class="t-num">500</span>).<span class="t-fn">json</span>({ error: <span class="t-str">"תקלה פנימית בשרת"</span> });
});</code></pre>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> הבחינו היטב בין <code>req.body</code> (מידע שנשלח בדרך כלל ב-POST), לבין <code>req.params</code> (משתנים שמוטמעים ב-URL כמו <code>/users/:id</code>) ו-<code>req.query</code> (פרמטרים בסוף ה-URL אחרי סימן שאלה כמו <code>?search=abc</code>).</div>
        </div>
      </div>
    `
  }
};
