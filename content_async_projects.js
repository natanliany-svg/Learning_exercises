const asyncLearningContent = {
  eventLoop: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container" style="flex-wrap: wrap; height:220px; align-content: space-around;">
               <div class="anim-node" style="width:100%; text-align:center;">Call Stack (תור ראשי)</div>
               <div class="anim-packet move-right" style="top:90px; background:#00d2ff; box-shadow:0 0 15px #00d2ff;">setTimeout</div>
               <div class="anim-node" style="width:45%; text-align:center; border-color:#00d2ff;">Web APIs (המתנה)</div>
               <div class="anim-node" style="width:45%; text-align:center; border-color:#f7df1e;">Callback Queue</div>
            </div>
            `,
            text: "<b>ה-Event Loop בפעולה!</b><br>שים לב לאנימציה: הפקודה האסינכרונית קופצת מהתור הראשי (Call Stack) אל ה-Web APIs כדי להמתין. ה-Call Stack פנוי להמשיך לרוץ! כשההמתנה תסתיים, היא תעבור לתור ההמתנה (Callback Queue)."
        }
    ],

    title: '🔄 מנוע ה-Event Loop ופעולות חוסמות',
    content: `
      <div class="card-body">
        <p class="lead">כדי להבין אסינכרוניות ב-JavaScript, חייבים להבין איך המנוע עובד מאחורי הקלעים. JS היא שפה בעלת חוט יחיד (Single Threaded), כלומר היא מבצעת משימה אחת בלבד בכל רגע נתון. אז איך דברים יכולים לקרות במקביל? כאן נכנס ה-Event Loop.</p>
        
        <h4>1. ארבעת הרכיבים המרכזיים במנוע</h4>
        <ul class="tight">
          <li><b>Call Stack (מחסנית הקריאות)</b>: המקום שבו מבוצעות פונקציות סינכרוניות. פונקציה נכנסת לראש המחסנית, מבוצעת ויוצאת. אם יש לולאה אינסופית, המחסנית נתקעת (Blocking) והדפדפן קופא.</li>
          <li><b>Web APIs / Node APIs</b>: סביבת הריצה החיצונית (הדפדפן או Node.js) שמבצעת פעולות שלוקחות זמן (כמו טיימרים, בקשות רשת או קריאת קבצים) מחוץ לחוט הראשי של JS.</li>
          <li><b>Macrotask Queue (תור המשימות הראשי)</b>: תור של משימות אסינכרוניות שממתינות להיכנס למחסנית הקריאות כשהיא מתפנה (כמו callbacks של <code>setTimeout</code> או אירועי לחיצה).</li>
          <li><b>Microtask Queue (תור המיקרו-משימות)</b>: תור בעל קדימות עליונה שמיועד בעיקר ל-Promises (ה-callbacks של <code>.then()</code> ו-<code>.catch()</code>). הוא תמיד מרוקן לחלוטין לפני שה-Event Loop פונה לתור ה-Macrotasks!</li>
        </ul>

        <h4>2. כיצד ה-Event Loop פועל? (סדר הקדימויות)</h4>
        <p>ה-Event Loop הוא כמו לולאה אינסופית ששואלת כל הזמן:</p>
        <ol>
          <li>האם ה-<b>Call Stack</b> ריק לחלוטין?</li>
          <li>אם כן -> מרוקנים קודם כל את כל תור ה-<b>Microtask Queue</b> (הבטחות).</li>
          <li>לאחר מכן -> לוקחים משימה אחת בלבד מתור ה-<b>Macrotask Queue</b> ומריצים אותה במחסנית.</li>
          <li>חוזרים לשלב 1.</li>
        </ol>

        <h4>3. הדמיה של קוד חוסם (Blocking)</h4>
        <p>חסימה מתרחשת כאשר פעולה סינכרונית ארוכה מחזיקה את המחסנית תפוסה ומונעת מהשרת או מהדפדפן להגיב:</p>
        <pre><code><span class="t-com">// ❌ קוד חוסם - השרת או הדפדפן יקפאו ל-3 שניות!</span>
<span class="t-key">function</span> <span class="t-fn">delaySync</span>() {
  <span class="t-key">const</span> start = Date.<span class="t-fn">now</span>();
  <span class="t-ctl">while</span> (Date.<span class="t-fn">now</span>() - start < <span class="t-num">3000</span>) {
    <span class="t-com">// לולאה ריקה שמבזבזת זמן מחשב ומקפיאה את המערכת</span>
  }
  console.<span class="t-fn">log</span>(<span class="t-str">"Done!"</span>);
}</code></pre>

        <h4>4. שאלת ראיונות מפורסמת: מה סדר ההדפסה?</h4>
        <pre><code>console.<span class="t-fn">log</span>(<span class="t-str">'1'</span>); <span class="t-com">// 1. סינכרוני - נכנס מיד למחסנית</span>
setTimeout(() => console.<span class="t-fn">log</span>(<span class="t-str">'2'</span>), <span class="t-num">0</span>); <span class="t-com">// 4. Macrotask - ימתין בתור הראשי</span>
Promise.<span class="t-fn">resolve</span>().<span class="t-fn">then</span>(() => console.<span class="t-fn">log</span>(<span class="t-str">'3'</span>)); <span class="t-com">// 3. Microtask - ימתין בתור המועדף</span>
console.<span class="t-fn">log</span>(<span class="t-str">'4'</span>); <span class="t-com">// 2. סינכרוני - נכנס למחסנית</span>

<span class="t-com">// פלט ההדפסה: 1, 4, 3, 2</span></code></pre>
      </div>
    `
  },
  callbacksAsync: {
    title: '📞 קולבקים (Callbacks) ומערכת הקבצים',
    content: `
      <div class="card-body">
        <p class="lead">פעולות שלוקחות זמן (כמו קריאת קובץ מהדיסק או פנייה לשרת רחוק) אינן מתבצעות מיד. JavaScript לא עוצרת וממתינה להן, אלא ממשיכה לשורה הבאה. אנו צריכים דרך להגדיר מה יקרה כשהתוצאה תהיה מוכנה. השיטה הראשונה בהיסטוריה לעשות זאת היא באמצעות <b>Callbacks</b>.</p>
        
        <h4>1. מה זה Callback?</h4>
        <p>קולבק היא פונקציה שאנו מוסרים כארגומנט לפונקציה אחרת, מתוך הבטחה שהיא "תתקשר אלינו בחזרה" (Call-back) ותפעיל את הפונקציה שלנו ברגע שהמשימה תסתיים.</p>
        <div class="callout analogy">
          <span class="ico">🍕</span>
          <div class="ct"><b>אנלוגיה:</b> הזמנת פיצה. כשאתם מזמינים פיצה, אתם לא עומדים ליד הדלת ומביטים בה במשך חצי שעה (קוד חוסם). אתם ממשיכים בעיסוקיכם (JS ממשיך לשורות הבאות), ומשאירים לשליח הנחיה: "כשהפיצה מגיעה, תדפוק בדלת" (ההנחיה היא ה-Callback).</div>
        </div>

        <h4>2. עבודה עם קבצים ב-Node.js (מודול fs)</h4>
        <p>ב-Node.js, פונקציות ה-fs האסינכרוניות עובדות לפי חוק ה-<b>Error-First Callback</b>: הפרמטר הראשון שהקולבק מקבל הוא השגיאה (או null אם אין שגיאה), והפרמטר השני הוא המידע שחזר.</p>
        <pre><code><span class="t-key">const</span> fs = <span class="t-fn">require</span>(<span class="t-str">"fs"</span>);

<span class="t-com">// קריאה מקובץ - אסינכרוני ולא חוסם</span>
fs.<span class="t-fn">readFile</span>(<span class="t-str">"./movies.json"</span>, <span class="t-str">"utf-8"</span>, (err, data) => {
  <span class="t-ctl">if</span> (err) {
    console.<span class="t-fn">log</span>(<span class="t-str">"שגיאה בקריאת הקובץ"</span>, err);
    <span class="t-ctl">return</span>;
  }
  <span class="t-key">const</span> movies = JSON.<span class="t-fn">parse</span>(data);
  console.<span class="t-fn">log</span>(movies);
});</code></pre>

        <h4>3. גיהנום הקולבקים (Callback Hell)</h4>
        <p>כאשר יש לנו מספר פעולות אסינכרוניות שתלויות זו בזו (למשל: לקרוא קובץ משתמש, לפיו לקרוא קובץ הזמנות, ואז לכתוב דוח), אנו נאלצים לקנן את הקולבקים אחד בתוך השני. הקוד זוחל ימינה ונוצרת פירמידה לא קריאה:</p>
        <pre><code><span class="t-com">// ❌ פירמידת האבדון</span>
fs.<span class="t-fn">readFile</span>(<span class="t-str">"user.json"</span>, (err, user) => {
  fs.<span class="t-fn">readFile</span>(<span class="t-str">"orders.json"</span>, (err, orders) => {
    fs.<span class="t-fn">writeFile</span>(<span class="t-str">"report.txt"</span>, data, (err) => {
      console.<span class="t-fn">log</span>(<span class="t-str">"הקובץ נכתב!"</span>);
    });
  });
});</code></pre>
        <div class="callout warn">
          <span class="ico">🌀</span>
          <div class="ct">זהו הכאב הגדול של עולם הקולבקים. הקוד נהיה קשה מאוד לתחזוקה ולתפיסת שגיאות. בחלקים הבאים נראה איךPromises ו-async/await פותרים את הבעיה הזו ומיישרים את הקוד חזרה למבנה אנכי ונקי.</div>
        </div>
      </div>
    `
  },
  promisesFetch: {
    title: '🤝 הבטחות (Promises) ו-Fetch API',
    content: `
      <div class="card-body">
        <p class="lead">הבטחה (Promise) היא אובייקט שמייצג משימה אסינכרונית שתוצאתה עדיין לא ידועה, אך היא מבטיחה להסתיים בהצלחה או להיכשל בעתיד. זהו הפתרון של JavaScript לגיהנום הקולבקים.</p>
        
        <h4>1. שלושת המצבים של Promise</h4>
        <ul class="tight">
          <li><b>Pending (בהמתנה)</b>: הפעולה האסינכרונית עדיין רצה (למשל, בקשת רשת שנשלחה וטרם התקבלה תשובה).</li>
          <li><b>Fulfilled (הושלמה בהצלחה)</b>: הפעולה הצליחה והחזירה את המידע (קורא ל-<code>resolve(data)</code>) -> מפעיל את ה-<code>.then()</code>.</li>
          <li><b>Rejected (נדחתה/נכשלה)</b>: הפעולה נכשלה עקב שגיאה (קורא ל-<code>reject(error)</code>) -> מפעיל את ה-<code>.catch()</code>.</li>
        </ul>
        <div class="callout analogy">
          <span class="ico">🎫</span>
          <div class="ct"><b>אנלוגיה:</b> Promise הוא כמו מספר-תור שאתם מקבלים כשאתם מזמינים המבורגר. המספר בידכם (ההבטחה) אך האוכל עדיין לא מוכן (Pending). כשהמספר שלכם מהבהב -> קיבלתם את האוכל בהצלחה (Fulfilled), או שהמוכר אומר שנגמר הבשר במלאי (Rejected).</div>
        </div>

        <h4>2. שימוש ב-Fetch API לשליפת נתונים מהאינטרנט</h4>
        <p>הפונקציה <code>fetch</code> שולחת בקשת רשת ומחזירה Promise. שימו לב שהתהליך דורש <b>שני שלבים</b>: קודם מקבלים את מעטפת התגובה (Response), ואז מפענחים את התוכן שלה ל-JSON (שגם הוא Promise):</p>
        <pre><code>fetch(<span class="t-str">"https://api.example.com/users"</span>)
  .<span class="t-fn">then</span>(res => {
    <span class="t-ctl">if</span> (!res.ok) <span class="t-ctl">throw</span> <span class="t-key">new</span> <span class="t-fn">Error</span>(<span class="t-str">"שגיאת רשת"</span>);
    <span class="t-ctl">return</span> res.<span class="t-fn">json</span>(); <span class="t-com">// מפענח ל-JSON ומחזיר Promise חדש</span>
  })
  .<span class="t-fn">then</span>(users => {
    console.<span class="t-fn">log</span>(users); <span class="t-com">// כאן נקבל את הנתונים האמיתיים</span>
  })
  .<span class="t-fn">catch</span>(err => {
    console.<span class="t-fn">log</span>(<span class="t-str">"משהו השתבש:"</span>, err.message);
  });</code></pre>

        <h4>3. ריצה במקביל עם Promise.all</h4>
        <p>אם יש לנו מספר בקשות רשת שאינן תלויות זו בזו, לא נרצה להמתין להן אחת אחרי השנייה (ריצה טורית), אלא נשלח את כולן יחד (ריצה מקבילית) כדי לחסוך זמן רב:</p>
        <pre><code><span class="t-com">// שולח את שתי הבקשות במקביל וממתין לסיום של שתיהן</span>
Promise.<span class="t-fn">all</span>([
  <span class="t-fn">fetch</span>(<span class="t-str">"/users"</span>).<span class="t-fn">then</span>(r => r.<span class="t-fn">json</span>()),
  <span class="t-fn">fetch</span>(<span class="t-str">"/posts"</span>).<span class="t-fn">then</span>(r => r.<span class="t-fn">json</span>())
])
  .<span class="t-fn">then</span>(([users, posts]) => {
    console.<span class="t-fn">log</span>(<span class="t-str">"הנתונים התקבלו במקביל!"</span>, users, posts);
  });</code></pre>
      </div>
    `
  },
  asyncAwait: {
    title: '⏳ כתיבה מודרנית עם Async / Await',
    content: `
      <div class="card-body">
        <p class="lead">התחביר <code>async/await</code> הוא "סוכר סינטקטי" (Syntactic Sugar) מעל Promises. הוא לא משנה את התנהגות השפה אלא רק מאפשר לנו לכתוב קוד אסינכרוני שנראה, נקרא ונכתב בדיוק כמו קוד סינכרוני פשוט מלמעלה למטה.</p>
        
        <h4>1. חוקי היסוד</h4>
        <ul class="tight">
          <li><b><code class="inl">async</code></b> לפני פונקציה מצהיר שהפונקציה הזו היא אסינכרונית, והיא תמיד תחזיר Promise (גם אם נחזיר בתוכה ערך פשוט).</li>
          <li><b><code class="inl">await</code></b> מונח לפני Promise ועוצר זמנית את הרצת הפונקציה (ומשחרר את ה-Call Stack) עד שההבטחה מסתיימת ומחזירה ערך.</li>
          <li>מותר להשתמש ב-<code>await</code> אך ורק בתוך פונקציית <code>async</code>!</li>
        </ul>

        <h4>2. טיפול בשגיאות נקי באמצעות try / catch</h4>
        <p>במקום לשרשר <code>.catch()</code> בסוף הפרומיס, אנו חוזרים למבנה תפיסת השגיאות המוכר והבטוח:</p>
        <pre><code><span class="t-ctl">async</span> <span class="t-key">function</span> <span class="t-fn">loadUserData</span>(userId) {
  <span class="t-ctl">try</span> {
    <span class="t-key">const</span> res = <span class="t-ctl">await</span> <span class="t-fn">fetch</span>(\`https://api.com/users/\${userId}\`);
    <span class="t-ctl">if</span> (!res.ok) <span class="t-ctl">throw</span> <span class="t-key">new</span> <span class="t-fn">Error</span>(<span class="t-str">"User not found"</span>);
    
    <span class="t-key">const</span> user = <span class="t-ctl">await</span> res.<span class="t-fn">json</span>();
    console.<span class="t-fn">log</span>(user);
  } <span class="t-ctl">catch</span> (err) {
    console.<span class="t-fn">error</span>(<span class="t-str">"Caught error:"</span>, err.message);
  }
}</code></pre>
        <div class="callout warn">
          <span class="ico">⚠️</span>
          <div class="ct"><b>טעות נפוצה במבחן:</b> לשכוח את ה-<code>await</code> השני כשקוראים ל-<code>res.json()</code>. הפעולה <code>res.json()</code> מחזירה Promise בעצמה, ולכן חובה לכתוב <code>await res.json()</code> כדי לקבל את המידע האמיתי.</div>
        </div>

        <h4>3. לולאות אסינכרוניות (טורי מול מקבילי)</h4>
        <p><b>הרצה טורית (אחד אחרי השני)</b>: שימוש בלולאת <code>for...of</code> רגילה שמעכבת את האיטרציה הבאה עד שהפעולה הנוכחית מסתיימת:</p>
        <pre><code><span class="t-ctl">for</span> (<span class="t-key">const</span> id <span class="t-ctl">of</span> [<span class="t-num">1</span>, <span class="t-num">2</span>, <span class="t-num">3</span>]) {
  <span class="t-com">// הריצה תמתין עד שכל קריאה תסתיים במלואה</span>
  <span class="t-key">const</span> user = <span class="t-ctl">await</span> <span class="t-fn">fetchUser</span>(id); 
}</code></pre>
        <p><b>הרצה מקבילית (כולם יחד)</b>: יצירת מערך של Promises ואז שימוש ב-Promise.all:</p>
        <pre><code><span class="t-key">const</span> promises = [<span class="t-num">1</span>, <span class="t-num">2</span>, <span class="t-num">3</span>].<span class="t-fn">map</span>(id => <span class="t-fn">fetchUser</span>(id));
<span class="t-com">// שולח את כל הבקשות בו-זמנית וממתין שכולן יחזרו</span>
<span class="t-key">const</span> users = <span class="t-ctl">await</span> Promise.<span class="t-fn">all</span>(promises);</code></pre>
      </div>
    `
  }
};
