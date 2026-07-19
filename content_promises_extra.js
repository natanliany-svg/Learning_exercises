const contentPromisesExtra = {
  promisesExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#ffd700;">Callback ישן</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active ripple-out">new Promise(...)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">הבטחה מודרנית</div>
            </div>
            `,
            text: "<b>שלב 1: עטיפה (Wrapping)</b><br>כדי להפוך קוד ישן מבוסס Callbacks למודרני, אנחנו עוטפים אותו ב-<code>new Promise</code>. זו כמו חליפה חדשה לקוד ישן!"
        },
        {
            html_visual: `
            <div class="anim-container" style="justify-content: center; gap: 20px;">
                <div class="flow-node-enhanced pending-pulse" style="border-color:#aaaaaa;">Pending⏳</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced success-pop" style="border-color:#00cc88;">resolve(data) ✅</div>
                <div class="flow-node-enhanced error-shake" style="border-color:#ff0055;">reject(err) ❌</div>
            </div>
            `,
            text: "<b>שלב 2: שתי תוצאות אפשריות</b><br>ההבטחה מתחילה במצב ממתין. אם הפעולה (כמו קריאת קובץ) הצליחה, נקרא ל-<code>resolve</code>. אם נכשלה, ל-<code>reject</code>."
        },
        {
            html_visual: `
            <div class="timeline-visual slide-in-right">
                <div class="timeline-step">
                    <div class="timeline-dot" style="background:#38bdf8;"></div>
                    <span class="timeline-label">קריאה</span>
                </div>
                <div class="timeline-line"></div>
                <div class="timeline-step">
                    <div class="timeline-dot" style="background:#00cc88;"></div>
                    <span class="timeline-label">.then() כתיבה</span>
                </div>
                <div class="timeline-line"></div>
                <div class="timeline-step">
                    <div class="timeline-dot" style="background:#ffd700;"></div>
                    <span class="timeline-label">.then() עדכון</span>
                </div>
            </div>
            `,
            text: "<b>שלב 3: שרשור (Chaining)</b><br>הכוח האמיתי! ברגע שהחזרנו <code>Promise</code> מתוך <code>.then()</code>, אנחנו יכולים לשרשר עוד <code>.then()</code> בצורה נקייה וקריאה."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced error">require('fs')</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↓</span></div>
                <div class="flow-node-enhanced active bounce-in" style="border-color:#00cc88;">require('fs').promises</div>
            </div>
            `,
            text: "<b>שלב 4: הפתרון המוכן</b><br>במקום לעטוף הכל לבד, Node.js מספק לנו את <code>fs.promises</code>! אותן פונקציות, רק שהן מחזירות הבטחות ישירות מהקופסה."
        }
    ],
    title: '🎁 הבטחות (Promises) - עטיפת Callbacks',
    content: `
      <div class="card-body">
        <p class="lead">לפני עידן ההבטחות, כתבנו קוד אסינכרוני בעזרת Callbacks. זה עבד, אבל יצר קוד מסובך לקריאה ("פירמידת האבדון"). בואו נלמד איך לקחת קוד ישן ולעטוף אותו בהבטחה מודרנית!</p>
        
        <h4>1. איך עוטפים פעולה ב-Promise?</h4>
        <p>כדי לעטוף פעולת <code>fs</code> רגילה, אנחנו יוצרים פונקציה שמחזירה <code>new Promise</code>. ההבטחה מקבלת פונקציה עם שני פרמטרים: <code>resolve</code> להצלחה, ו-<code>reject</code> לכישלון.</p>
        <pre><code><span class="t-key">const</span> fs = <span class="t-fn">require</span>(<span class="t-str">'fs'</span>);

<span class="t-key">function</span> <span class="t-fn">readFileAsPromise</span>(filePath) {
  <span class="t-ctl">return new</span> <span class="t-fn">Promise</span>((resolve, reject) => {
    fs.<span class="t-fn">readFile</span>(filePath, <span class="t-str">'utf8'</span>, (err, data) => {
      <span class="t-ctl">if</span> (err) {
        <span class="t-fn">reject</span>(err); <span class="t-com">// תקלה: שוברים את ההבטחה</span>
      } <span class="t-ctl">else</span> {
        <span class="t-fn">resolve</span>(data); <span class="t-com">// הצלחה: מקיימים את ההבטחה עם הנתונים</span>
      }
    });
  });
}</code></pre>

        <div class="callout analogy">
          <span class="ico">📦</span>
          <div class="ct"><b>אנלוגיה:</b> זה כמו לשלוח שליח לקנות משהו. במקום שהוא יתקשר אליכם פעמיים (Callback), אתם נותנים לו קופסה קסומה. כשהוא מסיים הוא פשוט מכניס לקופסה את המוצר (resolve) או פתק התנצלות אם החנות סגורה (reject).</div>
        </div>

        <h4>2. שרשור הבטחות (Chaining)</h4>
        <p>כשמעבירים נתונים בין פעולות, כל <code>.then()</code> יכול <b>להחזיר</b> <code>Promise</code> חדש! זה מה שמאפשר לנו לבצע פעולות בסדר מוגדר.</p>
        <pre><code><span class="t-fn">readFileAsPromise</span>(<span class="t-str">'step1.txt'</span>)
  .<span class="t-fn">then</span>(data1 => {
    console.<span class="t-fn">log</span>(<span class="t-str">'קראנו את 1!'</span>, data1);
    <span class="t-ctl">return</span> <span class="t-fn">readFileAsPromise</span>(<span class="t-str">'step2.txt'</span>); <span class="t-com">// מחזירים את ההבטחה הבאה!</span>
  })
  .<span class="t-fn">then</span>(data2 => {
    console.<span class="t-fn">log</span>(<span class="t-str">'קראנו גם את 2!'</span>, data2);
  })
  .<span class="t-fn">catch</span>(err => console.<span class="t-fn">error</span>(<span class="t-str">'משהו השתבש בדרך:'</span>, err));</code></pre>

        <h4>3. קיצור הדרך: fs.promises</h4>
        <p>למרות שחשוב לדעת לעטוף פונקציות בעצמנו (לספריות ישנות), Node.js כבר עשה את העבודה הקשה בשבילנו. מודול <code>fs.promises</code> נותן לנו בדיוק את אותן פונקציות, רק שהן מחזירות <code>Promise</code> כברירת מחדל!</p>
        <pre><code><span class="t-key">const</span> fs = <span class="t-fn">require</span>(<span class="t-str">'fs'</span>).promises; <span class="t-com">// הייבוא הקסום</span>

<span class="t-com">// בלי לעטוף כלום, זה פשוט עובד:</span>
fs.<span class="t-fn">readFile</span>(<span class="t-str">'message.txt'</span>, <span class="t-str">'utf8'</span>)
  .<span class="t-fn">then</span>(data => console.<span class="t-fn">log</span>(data))
  .<span class="t-fn">catch</span>(err => console.<span class="t-fn">error</span>(err));</code></pre>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> אם מבקשים מכם לעטוף פונקציה, זכרו את השילוש הקדוש: להחזיר <code>new Promise</code>, להשתמש ב-<code>reject</code> כשיש <code>err</code>, וב-<code>resolve</code> כשיש מידע. בשילוב של מספר פונקציות – <b>חובה</b> לכתוב <code>return</code> בתוך ה-<code>.then()</code> כדי לשרשר את ההבטחות הלאה!</div>
        </div>
      </div>
    `
  }
};
