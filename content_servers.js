const serversContent = {
  vanillaServer: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container" style="justify-content:space-around;"><div class="anim-node">לקוח</div><div class="anim-packet move-right" style="background:#38bdf8; width:40px;">בקשה</div><div class="anim-node" style="border-color:#38bdf8;">שרת Node</div></div>
            `,
            text: "<b>שרת HTTP בסיסי</b><br>שרת בסיסי מאזין לבקשות. הלקוח שולח בקשה (Packet), והשרת מחזיר תשובה. ללא Express, אנחנו צריכים לכתוב הרבה קוד שחור כדי להבין מה הלקוח רצה."
        }
    ],

    title: '🌐 שרת HTTP בסיסי (Vanilla HTTP Server)',
    content: `
      <div class="card-body">
        <p class="lead">לפני שמשתמשים בספריות מוכנות כמו Express, חשוב להבין איך בונים שרת מאפס באמצעות מודול ה-<code>http</code> המובנה ב-Node.js. שרת כזה נקרא "Vanilla HTTP Server" והוא מאפשר לנו לראות את גלגלי השיניים האמיתיים של הרשת.</p>
        
        <h4>1. מה זה בכלל שרת HTTP?</h4>
        <p>שרת אינטרנט הוא פשוט תהליך שרץ במחשב ומקשיב ל"פורט" (Port) מסוים. כאשר מגיעה בקשה (Request) מהדפדפן, השרת מעבד אותה ומחזיר תגובה (Response).</p>
        <div class="callout analogy">
          <span class="ico">🍔</span>
          <div class="ct"><b>אנלוגיה:</b> שרת הוא כמו מלצר במסעדה. הלקוח (הדפדפן) מגיש הזמנה (Request) מהתפריט (URL), המלצר לוקח אותה למטבח (לשרת עצמו), ומחזיר צלחת מוכנה (Response) עם האוכל (HTML או JSON).</div>
        </div>

        <h4>2. שרת Hello World בסיסי</h4>
        <p>הקמת שרת בסיסי שמחזיר תשובה קבועה לכל פנייה:</p>
        <pre><code><span class="t-key">const</span> http = <span class="t-fn">require</span>(<span class="t-str">"http"</span>);

<span class="t-com">// 1. יצירת השרת</span>
<span class="t-key">const</span> server = http.<span class="t-fn">createServer</span>((req, res) => {
  <span class="t-com">// הפונקציה הזו רצה בכל פעם שמתקבלת בקשה</span>
  
  <span class="t-com">// החזרת כותרת (Header) וסטטוס</span>
  res.statusCode = <span class="t-num">200</span>;
  res.<span class="t-fn">setHeader</span>(<span class="t-str">"Content-Type"</span>, <span class="t-str">"text/plain"</span>);
  
  <span class="t-com">// סיום התשובה ושליחת המידע (חובה!)</span>
  res.<span class="t-fn">end</span>(<span class="t-str">"Hello from my server"</span>);
});

<span class="t-com">// 2. האזנה לפורט 3000</span>
<span class="t-key">const</span> PORT = <span class="t-num">3000</span>;
server.<span class="t-fn">listen</span>(PORT, () => {
  console.<span class="t-fn">log</span>(<span class="t-str">\`Server running on port \${PORT}\`</span>);
});</code></pre>
        <div class="callout warn">
          <span class="ico">⚠️</span>
          <div class="ct"><b>חוק הברזל: res.end() הוא חובה!</b> אם תשכחו לקרוא ל-<code>res.end()</code> (או <code>res.write()</code> ואז <code>res.end()</code>), הדפדפן יישאר במצב המתנה אינסופי (Loading) ובסוף יקרוס עקב Timeout. השרת שלכם לא יחזיר תשובה.</div>
        </div>

        <h4>3. ניתוב (Routing) ידני לפי URL ו-Method</h4>
        <p>כדי שהשרת יחזיר דפים שונים או יבצע פעולות שונות, עלינו לבדוק את פרטי הבקשה: <code>req.url</code> (הנתיב) ו-<code>req.method</code> (סוג הבקשה - GET, POST, κד').</p>
        <pre><code><span class="t-key">const</span> server = http.<span class="t-fn">createServer</span>((req, res) => {
  <span class="t-key">const</span> url = req.url;
  <span class="t-key">const</span> method = req.method;

  res.<span class="t-fn">setHeader</span>(<span class="t-str">"Content-Type"</span>, <span class="t-str">"text/plain; charset=utf-8"</span>);

  <span class="t-com">// בדיקת ניתוב</span>
  <span class="t-ctl">if</span> (method === <span class="t-str">"GET"</span> && url === <span class="t-str">"/"</span>) {
    res.statusCode = <span class="t-num">200</span>;
    res.<span class="t-fn">end</span>(<span class="t-str">"ברוכים הבאים לדף הבית"</span>);
  } <span class="t-ctl">else if</span> (method === <span class="t-str">"GET"</span> && url === <span class="t-str">"/about"</span>) {
    res.statusCode = <span class="t-num">200</span>;
    res.<span class="t-fn">end</span>(<span class="t-str">"דף אודות"</span>);
  } <span class="t-ctl">else if</span> (method === <span class="t-str">"GET"</span> && url === <span class="t-str">"/users"</span>) {
    res.statusCode = <span class="t-num">200</span>;
    res.<span class="t-fn">end</span>(<span class="t-str">"רשימת משתמשים"</span>);
  } <span class="t-ctl">else</span> {
    <span class="t-com">// נתיב לא נמצא</span>
    res.statusCode = <span class="t-num">404</span>;
    res.<span class="t-fn">end</span>(<span class="t-str">"העמוד לא נמצא 😭"</span>);
  }
});</code></pre>
        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> זכרו את הסטטוסים החשובים:
            <br>• <b>200 (OK)</b>: הבקשה הצליחה והתשובה מוכנה.
            <br>• <b>201 (Created)</b>: יצירה מוצלחת (למשל יצירת משתמש חדש ב-POST).
            <br>• <b>400 (Bad Request)</b>: קלט לא תקין או שגיאת לקוח.
            <br>• <b>404 (Not Found)</b>: הנתיב או המשאב המבוקש לא קיים.
            <br>• <b>405 (Method Not Allowed)</b>: הנתיב קיים אך סוג הבקשה (Method) לא נתמך (למשל לשלוח POST לנתיב שתומך רק ב-GET).
            <br>• <b>500 (Internal Server Error)</b>: שגיאה בקוד של השרת עצמו.
          </div>
        </div>

        <div style="background-color: #f3e5f5; padding: 15px; border-radius: 8px; border-right: 5px solid #9c27b0; margin-bottom: 20px;">
          <h3 style="color: #9c27b0; margin-top: 0;">📭 איך בודקים שרת בסיסי ב-Postman?</h3>
          <p style="font-size: 1.1rem; margin-bottom: 0;">אחרי שהרצת את השרת עם <code>node app.js</code>, פתח את Postman. בחר בשיטת <strong>GET</strong> (כי אנחנו רק מבקשים מידע), ובשורת ה-URL למעלה הקלד את הכתובת המקומית: <code>http://localhost:3000</code>. כשתלחץ Send, תוכל לראות למטה את התשובה "Hello from my server" שהשרת החזיר לנו!</p>
        </div>
      </div>
    `
  },
  httpParams: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container"><div class="anim-node">/users?id=5</div><div class="anim-packet move-right" style="background:#ff0055;">id=5</div><div class="anim-node">req.query.id</div></div>
            `,
            text: "<b>פרמטרים בבקשות</b><br>כשאנחנו רוצים לחפש משהו ספציפי (כמו משתמש מספר 5), אנחנו מעבירים את המידע דרך ה-URL (Query Params). השרת שולף את המידע הזה מהבקשה."
        }
    ],

    title: '🧩 פרמטרים בבקשות HTTP',
    content: `
      <div class="card-body">
        <p class="lead">כאשר אנו מתקשרים עם שרת, אנו צריכים לעיתים קרובות להעביר לו מידע דינמי. ישנן שלוש דרכים עיקריות להעביר פרמטרים ב-HTTP, ולכל אחת תפקיד ודרך טיפול שונה.</p>
        
        <div class="tbl-scroll">
          <table>
            <tr><th>סוג הפרמטר</th><th>מיקום בבקשה</th><th>מתי משתמשים</th><th>דוגמה</th></tr>
            <tr><td><b>URL Params (נתיב)</b></td><td>חלק מנתיב ה-URL עצמו</td><td>זיהוי ישיר של משאב (לפי מזהה)</td><td><code>/users/42</code></td></tr>
            <tr><td><b>Query String (שאילתה)</b></td><td>אחרי סימן השאלה <code>?</code> ב-URL</td><td>סינון, מיון, או דפדוף (Pagination)</td><td><code>/users?role=admin&page=2</code></td></tr>
            <tr><td><b>Request Body (גוף הבקשה)</b></td><td>נסתר, בתוך גוף הודעת ה-HTTP</td><td>שליחת אובייקטים מורכבים (ביצירה או עדכון)</td><td><code>{"name":"Carol","age":30}</code></td></tr>
            <tr><td><b>Request Headers (כותרות)</b></td><td>בראש בקשת ה-HTTP (Metadata)</td><td>אימות (Token), הגדרת סוג קלט ומידע על הלקוח</td><td><code>Authorization: Bearer xyz</code></td></tr>
          </table>
        </div>

        <h4>1. חילוץ URL Params (נתיב דינמי) ב-Vanilla</h4>
        <p>בשרת Vanilla, אין מערכת מובנית לזיהוי משתנים בנתיב (כמו <code>/users/:id</code>). עלינו לבצע פיצול ידני של מחרוזת ה-URL:</p>
        <pre><code><span class="t-key">function</span> <span class="t-fn">extractIdFromUrl</span>(url) {
  <span class="t-com">// url = "/users/42"</span>
  <span class="t-key">const</span> parts = url.<span class="t-fn">split</span>(<span class="t-str">"/"</span>);
  <span class="t-com">// parts = ["", "users", "42"]</span>
  <span class="t-key">const</span> id = <span class="t-fn">Number</span>(parts[<span class="t-num">2</span>]);
  <span class="t-ctl">return</span> id;
}

<span class="t-com">// שימוש בשרת:</span>
<span class="t-ctl">if</span> (req.url.<span class="t-fn">startsWith</span>(<span class="t-str">"/users/"</span>) && req.method === <span class="t-str">"GET"</span>) {
  <span class="t-key">const</span> id = <span class="t-fn">extractIdFromUrl</span>(req.url);
  <span class="t-key">const</span> user = users.<span class="t-fn">find</span>(u => u.id === id);
  <span class="t-ctl">if</span> (!user) {
    res.statusCode = <span class="t-num">404</span>;
    res.<span class="t-fn">end</span>(JSON.<span class="t-fn">stringify</span>({ error: <span class="t-str">"User not found"</span> }));
  } <span class="t-ctl">else</span> {
    res.statusCode = <span class="t-num">200</span>;
    res.<span class="t-fn">end</span>(JSON.<span class="t-fn">stringify</span>(user));
  }
}</code></pre>

        <h4>2. פרסור Query String (פרמטרי שאילתה)</h4>
        <p>הדרך המודרנית והבטוחה ביותר לנתח Query string היא באמצעות האובייקט המובנה <code>URL</code>:</p>
        <pre><code><span class="t-com">// req.url = "/users?role=admin&limit=5"</span>
<span class="t-key">const</span> baseURL = <span class="t-str">"http://"</span> + req.headers.host; <span class="t-com">// חייבים לספק הוסט כדי לפרסר</span>
<span class="t-key">const</span> parsedUrl = <span class="t-key">new</span> <span class="t-fn">URL</span>(req.url, baseURL);
<span class="t-key">const</span> queryParams = parsedUrl.searchParams;

<span class="t-com">// שליפת הפרמטרים</span>
<span class="t-key">const</span> role = queryParams.<span class="t-fn">get</span>(<span class="t-str">"role"</span>); <span class="t-com">// "admin"</span>
<span class="t-key">const</span> limit = queryParams.<span class="t-fn">get</span>(<span class="t-str">"limit"</span>) || <span class="t-num">10</span>; <span class="t-com">// ברירת מחדל אם לא סופק</span></code></pre>
        <div class="callout analogy">
          <span class="ico">🏷️</span>
          <div class="ct"><b>אנלוגיה:</b> <b>URL Param</b> הוא כמו מספר בית ברחוב (מזהה ייחודי שמצביע על מקום אחד ספציפי). <b>Query String</b> הוא כמו פילטר חיפוש בחנות בגדים (אתה רוצה לראות את כל החולצות, אבל רק בצבע כחול ובמידה M).</div>
        </div>

        <h4>3. קריאת Request Body (גוף הבקשה) — Stream & Buffer</h4>
        <p>גוף הבקשה ב-Node.js מגיע בתור <b>זרם נתונים (Stream)</b> של חבילות קטנות (Chunks), ולא בבת אחת. הסיבה היא תמיכה בקבצי ענק מבלי להעמיס על הזיכרון. עלינו לאסוף את כל ה-Chunks ואז לחבר אותם לטקסט אחד ולתרגם אותו מ-JSON.
        <br>נעטוף את התהליך ב-Promise כדי לעבוד בצורה מודרנית עם async/await:</p>
        <pre><code><span class="t-key">function</span> <span class="t-fn">readBody</span>(req) {
  <span class="t-ctl">return</span> <span class="t-key">new</span> <span class="t-fn">Promise</span>((resolve, reject) => {
    <span class="t-key">const</span> chunks = [];
    
    <span class="t-com">// מאזינים לחלק המידע שמגיע</span>
    req.<span class="t-fn">on</span>(<span class="t-str">"data"</span>, (chunk) => {
      chunks.<span class="t-fn">push</span>(chunk);
    });
    
    <span class="t-com">// מאזינים לסיום העברת המידע</span>
    req.<span class="t-fn">on</span>(<span class="t-str">"end"</span>, () => {
      <span class="t-key">const</span> raw = Buffer.<span class="t-fn">concat</span>(chunks).<span class="t-fn">toString</span>();
      <span class="t-ctl">try</span> {
        <span class="t-com">// מנסים להפוך ל-JSON</span>
        resolve(JSON.<span class="t-fn">parse</span>(raw));
      } <span class="t-ctl">catch</span> {
        <span class="t-com">// אם המידע לא תקין, נחזיר אובייקט ריק</span>
        resolve({});
      }
    });
    
    req.<span class="t-fn">on</span>(<span class="t-str">"error"</span>, reject);
  });
}

<span class="t-com">// שימוש בשרת:</span>
<span class="t-ctl">if</span> (req.method === <span class="t-str">"POST"</span> && req.url === <span class="t-str">"/users"</span>) {
  <span class="t-key">const</span> body = <span class="t-ctl">await</span> <span class="t-fn">readBody</span>(req);
  console.<span class="t-fn">log</span>(<span class="t-str">"New user data:"</span>, body);
  
  res.statusCode = <span class="t-num">201</span>;
  res.<span class="t-fn">end</span>(JSON.<span class="t-fn">stringify</span>({ success: <span class="t-key">true</span>, data: body }));
}</code></pre>
        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> זכרו שקריאת ה-Body היא <b>פעולה אסינכרונית</b>. כדי לקרוא את ה-Body בשרת Vanilla חובה להשתמש במאזיני האירועים <code>data</code> ו-<code>end</code>. במידה ושכחתם לעשות זאת, תקבלו אובייקט ריק או בלתי מפוענח.</div>
        </div>

        <h4>4. עבודה עם HTTP Headers (כותרות הבקשה והתגובה)</h4>
        <p>כותרות (Headers) הן מטא-דאטה שנשלח יחד עם הבקשה או התשובה. הן מספקות מידע על תוכן ההודעה, הלקוח השולח, או אימות זהות.
        כותרת מורכבת מזוג של <code>Key: Value</code>.</p>
        
        <ul class="tight">
          <li><b><code class="inl">Content-Type</code></b> — מציין לשרת מהו סוג התוכן שנשלח אליו (למשל <code>application/json</code>).</li>
          <li><b><code class="inl">Authorization</code></b> — משמש להעברת אסימוני גישה (Tokens) או פרטי התחברות (למשל <code>Bearer token123</code>).</li>
          <li><b><code class="inl">Accept</code></b> — מציין לשרת איזה פורמט תוכן הלקוח מצפה לקבל בחזרה.</li>
          <li><b><code class="inl">User-Agent</code></b> — מידע על הדפדפן ומערכת ההפעלה של הלקוח.</li>
        </ul>

        <h5>שליפה וקריאה של Headers בשרת Vanilla:</h5>
        <pre><code><span class="t-com">// כל הכותרות מגיעות ב-req.headers והמפתחות שלהן הופכים אוטומטית לאותיות קטנות (Lowercase)!</span>
<span class="t-key">const</span> contentType = req.headers[<span class="t-str">"content-type"</span>];
<span class="t-key">const</span> token = req.headers[<span class="t-str">"authorization"</span>];

<span class="t-ctl">if</span> (!token) {
  res.statusCode = <span class="t-num">401</span>;
  res.<span class="t-fn">end</span>(JSON.<span class="t-fn">stringify</span>({ error: <span class="t-str">"Missing authentication token"</span> }));
}</code></pre>

        <h5>שליפה וקריאה של Headers ב-Express:</h5>
        <pre><code><span class="t-com">// ב-Express ניתן לגשת ל-req.headers או להשתמש ב-req.get() הנוח שאינו רגיש לאותיות גדולות/קטנות (Case-insensitive)</span>
app.post(<span class="t-str">"/api/data"</span>, (req, res) => {
  <span class="t-key">const</span> auth = req.<span class="t-fn">get</span>(<span class="t-str">"Authorization"</span>); <span class="t-com">// שולף גם אם נכתב authorization או Authorization</span>
  <span class="t-key">const</span> userAgent = req.headers[<span class="t-str">"user-agent"</span>];
  
  res.<span class="t-fn">json</span>({ auth, userAgent });
});</code></pre>

        <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; border-right: 5px solid #2196f3; margin-bottom: 20px;">
          <h3 style="color: #2196f3; margin-top: 0;">📭 איך שולחים פרמטרים ב-Postman?</h3>
          <p style="font-size: 1.1rem; margin-bottom: 0;">נורא פשוט! יש לך שתי אפשרויות: או לכתוב ישירות בשורת ה-URL ב-Postman את הכתובת <code>http://localhost:3000/profile?name=david&age=30</code>. <strong>או</strong> (וזה היתרון של התוכנה) ללחוץ על לשונית <strong>Params</strong> ולהכניס לטבלה בשורה אחת: Key: <code>name</code>, Value: <code>david</code>, ובשורה שנייה Key: <code>age</code>, Value: <code>30</code>. פוסטמן כבר ייצר את הכתובת המלאה לבד!</p>
        </div>
      </div>
    `
  },
  express: {
    title: '🚀 שרתי Express',
    content: `
      <div class="card-body">
        <p class="lead">שרת Vanilla הוא מצוין להבנת הרשת, אך כתיבת קוד גדול איתו נהיית מסורבלת, פירמידות של <code>if/else</code>, וקריאת זרמי מידע לכל POST. 
        פריימוורק ה-<b>Express</b> בא לפתור בדיוק את זה — הוא מספק ממשק קל, מסודר ומודולרי לפיתוח שרתי אינטרנט.</p>

        <h4>1. שרת Express ראשון</h4>
        <pre><code><span class="t-key">const</span> express = <span class="t-fn">require</span>(<span class="t-str">"express"</span>);
<span class="t-key">const</span> app = <span class="t-fn">express</span>();

<span class="t-com">// הוספת תמיכה בפרסור אוטומטי של JSON ב-Body!</span>
app.use(express.<span class="t-fn">json</span>());

<span class="t-com">// הגדרת נתיב GET פשוט</span>
app.get(<span class="t-str">"/"</span>, (req, res) => {
  <span class="t-com">// ב-Express משתמשים ב-res.send במקום res.end.</span>
  <span class="t-com">// הוא קובע אוטומטית כותרות וסטטוס 200.</span>
  res.<span class="t-fn">send</span>(<span class="t-str">"Hello, Express!"</span>);
});

<span class="t-com">// GET עם פרסור פרמטרים מנתיב (req.params)</span>
app.get(<span class="t-str">"/users/:id"</span>, (req, res) => {
  <span class="t-com">// Express מחלץ אוטומטית את המשתנים מהנתיב ושומר ב-req.params</span>
  <span class="t-key">const</span> id = <span class="t-fn">parseInt</span>(req.params.id);
  <span class="t-key">const</span> user = users.<span class="t-fn">find</span>(u => u.id === id);
  
  <span class="t-ctl">if</span> (!user) {
    <span class="t-ctl">return</span> res.<span class="t-fn">status</span>(<span class="t-num">404</span>).<span class="t-fn">json</span>({ error: <span class="t-str">"User not found"</span> });
  }
  res.<span class="t-fn">json</span>(user);
});

<span class="t-com">// POST לקבלת Body בקלות (בזכות express.json)</span>
app.post(<span class="t-str">"/users"</span>, (req, res) => {
  <span class="t-key">const</span> newUser = req.body; <span class="t-com">// מפרסר אוטומטית! ללא Streams וללא Promises ידניים</span>
  users.<span class="t-fn">push</span>(newUser);
  res.<span class="t-fn">status</span>(<span class="t-num">201</span>).<span class="t-fn">json</span>(newUser);
});

app.listen(<span class="t-num">3000</span>, () => console.<span class="t-fn">log</span>(<span class="t-str">"Express running on port 3000"</span>));</code></pre>

        <h4>2. מהו Middleware (תוכנת ביניים)?</h4>
        <p>הקונספט המרכזי ביותר ב-Express. Middleware היא פונקציה שמקבלת את <code>req</code>, <code>res</code> ופונקציית בקרה בשם <code>next</code>. היא רצה <b>באמצע</b>, לפני שהבקשה מגיעה ל-handler הסופי, ויכולה לעשות אחד משלושה דברים:
          <br>1. לשנות או להוסיף מידע ל-<code>req</code> או ל-<code>res</code> (למשל, לחלץ משתמש מתוך Token).
          <br>2. לחסום את הבקשה ולהחזיר שגיאה (למשל, אם המשתמש לא מחובר).
          <br>3. לקרוא ל-<code>next()</code> כדי להעביר את הטיפול לפונקציה הבאה בתור.</p>
        
        <div class="callout analogy">
          <span class="ico">🛂</span>
          <div class="ct"><b>אנלוגיה:</b> Middleware הוא כמו מאבטח בכניסה למועדון. לפני שאתם נכנסים (מגיעים ל-Route handler), הוא בודק את תעודת הזהות שלכם (Validation/Auth). אם הכל תקין → הוא מאפשר לכם להיכנס (קורא ל-<code>next()</code>). אם לא תקין → הוא חוסם אתכם ומעיף אתכם החוצה (מחזיר תשובת 401/403 ללא המשך ריצה).</div>
        </div>

        <p>דוגמה ל-Middleware מותאם אישית שרושם לוגים ומודד זמן ריצה של כל בקשה:</p>
        <pre><code><span class="t-key">function</span> <span class="t-fn">requestLogger</span>(req, res, next) {
  <span class="t-key">const</span> startTime = Date.<span class="t-fn">now</span>();
  
  <span class="t-com">// ברגע שהתגובה מסתיימת ונשלחת ללקוח</span>
  res.<span class="t-fn">on</span>(<span class="t-str">"finish"</span>, () => {
    <span class="t-key">const</span> duration = Date.<span class="t-fn">now</span>() - startTime;
    console.<span class="t-fn">log</span>(\`\${req.method} \${req.url} - Status: \${res.statusCode} (\${duration}ms)\`);
  });
  
  <span class="t-fn">next</span>(); <span class="t-com">// חובה לקרוא כדי לעבור לפונקציה הבאה!</span>
}

<span class="t-com">// חיבור גלובלי של ה-Middleware לכל השרת</span>
app.<span class="t-fn">use</span>(requestLogger);</code></pre>

        <h4>3. מודולריות באמצעות Express Router</h4>
        <p>כאשר הפרויקט גדל, איננו רוצים לכתוב את כל ה-Routes באותו קובץ. נשתמש ב-<code>express.Router()</code> כדי לפצל קבצים בצורה מסודרת:</p>
        <pre><code><span class="t-com">// קובץ routes/users.js</span>
<span class="t-key">const</span> express = <span class="t-fn">require</span>(<span class="t-str">"express"</span>);
<span class="t-key">const</span> router = express.<span class="t-fn">Router</span>();

router.get(<span class="t-str">"/"</span>, (req, res) => {
  res.<span class="t-fn">json</span>(users);
});

router.delete(<span class="t-str">"/:id"</span>, (req, res) => {
  <span class="t-com">// לוגיקת מחיקה</span>
  res.<span class="t-fn">status</span>(<span class="t-num">204</span>).<span class="t-fn">send</span>();
});

module.exports = router;

<span class="t-com">// קובץ app.js (הראשי)</span>
<span class="t-key">const</span> usersRouter = <span class="t-fn">require</span>(<span class="t-str">"./routes/users"</span>);
<span class="t-com">// כל הנתיבים שבתוך מודול זה יתחילו ב- /api/users</span>
app.<span class="t-fn">use</span>(<span class="t-str">"/api/users"</span>, usersRouter);</code></pre>

        <h4>4. טיפול מרכזי בשגיאות (Error Handling Middleware)</h4>
        <p>אם נזרקת שגיאה באחד ה-Routes, אנחנו לא רוצים שהשרת יקרוס. נכתוב Middleware מיוחד לטיפול בשגיאות.
        <br><b>חוק ברזל:</b> ל-Middleware של שגיאות חייבים להיות <b>בדיוק 4 פרמטרים</b> בחתימת הפונקציה — <code>(err, req, res, next)</code>. Express מזהה אותו ככזה רק בגלל מספר הפרמטרים!</p>
        <pre><code><span class="t-com">// 1. עטיפת קוד אסינכרוני כדי ללכוד שגיאות ולהעבירן ל-next:</span>
<span class="t-key">const</span> asyncHandler = (fn) => (req, res, next) => {
  Promise.<span class="t-fn">resolve</span>(<span class="t-fn">fn</span>(req, res, next)).<span class="t-fn">catch</span>(next);
};

<span class="t-com">// שימוש ב-Route:</span>
app.get(<span class="t-str">"/data"</span>, <span class="t-fn">asyncHandler</span>(<span class="t-ctl">async</span> (req, res) => {
  <span class="t-com">// אם הפעולה תיכשל (למשל קריאת קובץ שלא קיים), השגיאה תועבר אוטומטית למטפל המרכזי בקאץ'</span>
  <span class="t-key">const</span> data = <span class="t-ctl">await</span> fs.<span class="t-fn">readFile</span>(<span class="t-str">"missing.json"</span>);
  res.<span class="t-fn">json</span>(data);
}));

<span class="t-com">// 2. ה-Middleware המרכזי לטיפול בשגיאות (מוגדר בסוף קובץ app.js)</span>
app.<span class="t-fn">use</span>((err, req, res, next) => {
  console.<span class="t-fn">error</span>(err.stack);
  res.<span class="t-fn">status</span>(err.statusCode || <span class="t-num">500</span>).<span class="t-fn">json</span>({
    error: err.message || <span class="t-str">"Internal Server Error"</span>
  });
});</code></pre>
        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן (נושא פופולרי):</b> מה מיוחד ב-Middleware של שגיאות? שיש לו 4 פרמטרים. אם תשמיטו את הפרמטר הרביעי <code>next</code>, הפונקציה תתנהג כ-Middleware רגיל והשגיאות לא ייתפסו בצורה נכונה. תמיד יש למקם את ה-Middleware הזה <b>בסוף השרת</b>, אחרי כל ה-Routes האחרים.</div>
        </div>

        <h4>5. מקרה בוחן מהקלאסרום: פרויקט VIGIL (ארכיון גיבורי-העל הסודי)</h4>
        <p>פרויקט VIGIL מהקלאסרום הוא תרגול מקיף לבניית שרת Express מלא. הוא משלב את כל מה שלמדנו: ניתובים, פרמטרים, חיפוש מתקדם ב-Body, סינון ב-Query, ולידציה ושגיאות סטטוס.</p>
        
        <h5>א. חלוקה מומלצת לשכבות (Layered Architecture)</h5>
        <p>על פי הנחיות הקלאסרום, נחלק את הפרויקט ל-3 שכבות נפרדות לשמירה על סדר וקלות בדיקה:</p>
        <ul class="tight">
          <li><b>שכבת הניתוב (Routes)</b> — קובץ <code>heroes.route.js</code> שמגדיר את נתיבי ה-API ומקשר אותם לפונקציה המתאימה בלבד.</li>
          <li><b>שכבת הבקרה (Controllers)</b> — קובץ <code>heroes.controller.js</code> שמקבל את הבקשה ומחלץ את <code>req.params</code>, <code>req.query</code> או <code>req.body</code>, ומחזיר את הסטטוס וה-JSON המתאימים.</li>
          <li><b>שכבת הלוגיקה והנתונים (Services / Storage)</b> — קבצים האחראים על סינון הנתונים, חישוב הסטטיסטיקות, וקריאה/כתיבה לקובץ ה-JSON המקומי.</li>
        </ul>

        <h5>ב. סינון, מיון ודפדוף (GET /heroes)</h5>
        <p>בנתיב זה עלינו לתמוך בפרמטרים מורכבים ב-URL. הנה הדרך הנכונה לממש את הסינון והמיון בלוגיקה:</p>
        <pre><code><span class="t-com">// לוגיקת סינון בתוך ה-Service</span>
<span class="t-key">function</span> <span class="t-fn">getAllHeroes</span>(filters) {
  <span class="t-key">let</span> filtered = [...allHeroes]; <span class="t-com">// העתקת המערך המקורי</span>
  
  <span class="t-com">// 1. סינון לפי סטטוס</span>
  <span class="t-ctl">if</span> (filters.status) {
    filtered = filtered.<span class="t-fn">filter</span>(h => h.status === filters.status);
  }
  
  <span class="t-com">// 2. סינון לפי יכולת (בדיקה האם קיימת במערך powers)</span>
  <span class="t-ctl">if</span> (filters.power) {
    filtered = filtered.<span class="t-fn">filter</span>(h => h.powers.<span class="t-fn">includes</span>(filters.power));
  }
  
  <span class="t-com">// 3. סינון לפי טווחי רמת איום</span>
  <span class="t-ctl">if</span> (filters.minLevel) {
    filtered = filtered.<span class="t-fn">filter</span>(h => h.threatLevel >= <span class="t-fn">Number</span>(filters.minLevel));
  }
  
  <span class="t-com">// 4. מיון דינמי (לפי sortBy ו-order)</span>
  <span class="t-ctl">if</span> (filters.sortBy) {
    <span class="t-key">const</span> order = filters.order === <span class="t-str">"desc"</span> ? -<span class="t-num">1</span> : <span class="t-num">1</span>;
    filtered.<span class="t-fn">sort</span>((a, b) => {
      <span class="t-ctl">if</span> (a[filters.sortBy] < b[filters.sortBy]) <span class="t-ctl">return</span> -<span class="t-num">1</span> * order;
      <span class="t-ctl">if</span> (a[filters.sortBy] > b[filters.sortBy]) <span class="t-ctl">return</span> <span class="t-num">1</span> * order;
      <span class="t-ctl">return</span> <span class="t-num">0</span>;
    });
  }
  
  <span class="t-ctl">return</span> filtered;
}</code></pre>

        <h5>ג. חיפוש מתקדם ב-Body (POST /heroes/search)</h5>
        <p>בחיפוש מתקדם, הדרישה היא שהתנאים הפנימיים במערכים (כמו מערך סטטוסים <code>statuses</code> או מערך יכולות <code>powers</code>) יתנהגו ביחס של "או" (OR), אך התנאים הכלליים בין השדות השונים יתנהגו ביחס של "וגם" (AND):</p>
        <pre><code>app.post(<span class="t-str">"/heroes/search"</span>, (req, res) => {
  <span class="t-key">const</span> { statuses, powers, minLevel, maxLevel, affiliations } = req.body;
  <span class="t-key">let</span> results = [...allHeroes];
  
  <span class="t-com">// "וגם" (AND) - כל שדה מסנן את התוצאות הקודמות:</span>
  
  <span class="t-com">// 1. statuses (יחס OR פנימי - הגיבור בסטטוס א' או סטטוס ב')</span>
  <span class="t-ctl">if</span> (statuses && statuses.length > <span class="t-num">0</span>) {
    results = results.<span class="t-fn">filter</span>(h => statuses.<span class="t-fn">includes</span>(h.status));
  }
  
  <span class="t-com">// 2. powers (יחס OR פנימי - לגיבור יש לפחות אחת מהיכולות הנדרשות)</span>
  <span class="t-ctl">if</span> (powers && powers.length > <span class="t-num">0</span>) {
    results = results.<span class="t-fn">filter</span>(h => h.powers.<span class="t-fn">some</span>(p => powers.<span class="t-fn">includes</span>(p)));
  }
  
  res.<span class="t-fn">json</span>({ success: <span class="t-key">true</span>, data: results });
});</code></pre>

        <h5>ד. חישוב סטטיסטיקות הארכיון (GET /stats)</h5>
        <p>כדי לחשב את הדוחות המורכבים במהירות וביעילות, נשתמש במתודות מערכים:</p>
        <pre><code>app.get(<span class="t-str">"/stats"</span>, (req, res) => {
  <span class="t-key">const</span> totalHeroes = allHeroes.length;
  
  <span class="t-com">// 1. ממוצע רמת איום</span>
  <span class="t-key">const</span> avgThreat = totalHeroes === <span class="t-num">0</span> ? <span class="t-num">0</span> :
    allHeroes.<span class="t-fn">reduce</span>((sum, h) => sum + h.threatLevel, <span class="t-num">0</span>) / totalHeroes;
    
  <span class="t-com">// 2. הגיבור החזק ביותר</span>
  <span class="t-key">const</span> highestThreat = allHeroes.<span class="t-fn">reduce</span>((max, h) => 
    (!max || h.threatLevel > max.threatLevel) ? h : max, null);
    
  <span class="t-com">// 3. פילוח לפי סטטוס</span>
  <span class="t-key">const</span> byStatus = allHeroes.<span class="t-fn">reduce</span>((acc, h) => {
    acc[h.status] = (acc[h.status] || <span class="t-num">0</span>) + <span class="t-num">1</span>;
    <span class="t-ctl">return</span> acc;
  }, {});
  
  res.<span class="t-fn">json</span>({
    success: <span class="t-key">true</span>,
    data: { totalHeroes, averageThreatLevel: avgThreat, highestThreat, byStatus }
  });
});</code></pre>
      </div>
    `
  }
};
