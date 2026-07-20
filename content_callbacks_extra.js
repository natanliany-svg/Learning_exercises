const contentCallbacksExtra = {
  callbacksExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced">פקודה 1: הדפס Start</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active ripple-out" style="border-color:#38bdf8;">fs.readFile (ברקע)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced">פקודה 2: הדפס End</div>
            </div>
            `,
            text: "<b>שלב 1: אסינכרוניות</b><br>כשאנחנו מבקשים מהמחשב לקרוא קובץ, הוא לא עוצר! הוא שולח את הבקשה ברקע וממשיך מיד לשורה הבאה בקוד."
        },
        {
            html_visual: `
            <div class="anim-container" style="justify-content: center; gap: 20px;">
                <div class="anim-node error highlight-flash" style="border-color:#ff0055;">err ❌</div>
                <div class="anim-node" style="border-color:#00cc88;">data 📄</div>
            </div>
            `,
            text: "<b>שלב 2: תבנית שגיאה-תחילה (Error-First)</b><br>ב-Node.js, הקולבק (Callback) תמיד מקבל קודם את השגיאה (אם הייתה), ורק אז את התוכן של הקובץ."
        },
        {
            html_visual: `
            <div class="stack-visual fade-slide-up">
                <div class="stack-item" style="margin-right: 0px; opacity: 1; border-right: 4px solid #38bdf8;">קריאת קובץ 1</div>
                <div class="stack-item" style="margin-right: 20px; opacity: 0.9; background: var(--primary); border-right: 4px solid #00cc88;">קריאת קובץ 2 (בפנים)</div>
                <div class="stack-item" style="margin-right: 40px; opacity: 0.8; background: var(--ink); border-right: 4px solid #ffd700;">קריאת קובץ 3 (עמוק יותר)</div>
                <div class="stack-item error" style="margin-right: 60px; opacity: 1; background: #ff0055; color: white;">🔥 גיהינום הקולבקים! 🔥</div>
            </div>
            `,
            text: "<b>שלב 3: גיהינום הקולבקים (Callback Hell)</b><br>כשאנחנו רוצים לבצע פעולות אסינכרוניות לפי סדר, אנחנו נאלצים לכתוב קולבק בתוך קולבק. הקוד הופך למשולש בלתי קריא!"
        }
    ],

    title: '📂 עבודה עם קבצים (fs) וקולבקים',
    content: `
      <div class="card-body">
        <p class="lead">מודול ה-<code>fs</code> (File System) של Node.js מאפשר לנו לקרוא ולכתוב קבצים. רוב הפעולות בו הן אסינכרוניות – הן קורות ברקע כדי לא לתקוע את התוכנית.</p>
        
        <h4>1. הוכחת האסינכרוניות</h4>
        <p>כשאנחנו קוראים קובץ, הקוד ממשיך לרוץ. רק כשהקובץ מוכן, מופעלת פונקציית הקולבק (Callback).</p>
        <pre><code><span class="t-key">const</span> fs = <span class="t-fn">require</span>(<span class="t-str">'fs'</span>);

console.<span class="t-fn">log</span>(<span class="t-str">"Start"</span>);

fs.<span class="t-fn">readFile</span>(<span class="t-str">'data.txt'</span>, <span class="t-str">'utf8'</span>, (err, data) => {
  console.<span class="t-fn">log</span>(<span class="t-str">"File content:"</span>, data);
});

console.<span class="t-fn">log</span>(<span class="t-str">"End"</span>);

<span class="t-com">// סדר ההדפסה יהיה:
// 1. Start
// 2. End
// 3. File content: ...</span></code></pre>

        <div class="callout analogy">
          <span class="ico">🍔</span>
          <div class="ct"><b>אנלוגיה:</b> זה כמו להזמין המבורגר במסעדה! אתם מזמינים (קוראים לקובץ), מקבלים זמזם שמחכה ברקע (הקולבק), בינתיים הולכים לשבת (הקוד ממשיך לרוץ), וכשהאוכל מוכן – הזמזם מצפצף (הקולבק מופעל).</div>
        </div>

        <h4>2. טיפול בשגיאות (Error First Callback)</h4>
        <p>תמיד נבדוק קודם כל אם יש שגיאה, ורק אז נטפל במידע.</p>
        <pre><code>fs.<span class="t-fn">readFile</span>(<span class="t-str">'not-exist.txt'</span>, <span class="t-str">'utf8'</span>, (err, data) => {
  <span class="t-ctl">if</span> (err) {
    console.<span class="t-fn">log</span>(<span class="t-str">"שגיאה! הקובץ לא נמצא:"</span>, err);
    <span class="t-ctl">return</span>; <span class="t-com">// עוצרים כאן</span>
  }
  
  console.<span class="t-fn">log</span>(data); <span class="t-com">// אם הכל טוב, נדפיס את התוכן</span>
});</code></pre>

        <h4>3. גיהינום הקולבקים (Callback Hell)</h4>
        <p>מה קורה כשרוצים לפתוח 3 קבצים, אחד אחרי השני? חייבים לשים את קריאת הקובץ השני <b>בתוך הקולבק</b> של הראשון! התוצאה היא קוד שהולך וזז שמאלה, קשה לקריאה ולתחזוקה.</p>
        <pre><code>fs.<span class="t-fn">readFile</span>(<span class="t-str">'step1.txt'</span>, (err, data1) => {
  fs.<span class="t-fn">readFile</span>(<span class="t-str">'step2.txt'</span>, (err, data2) => {
    fs.<span class="t-fn">readFile</span>(<span class="t-str">'step3.txt'</span>, (err, data3) => {
        <span class="t-com">// אנחנו עמוק בפנים! 🔥</span>
        console.<span class="t-fn">log</span>(<span class="t-str">"All files loaded!"</span>);
    });
  });
});</code></pre>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> זכרו שכל פונקציה אסינכרונית ב-Node.js מקבלת כארגומנט אחרון פונקציית Callback. הקולבק הזה תמיד יקבל שני פרמטרים: קודם <code>err</code> ואז <code>data</code>. אם הקוד שלכם נראה כמו משולש שהולך פנימה – יצרתם Callback Hell.</div>
        </div>
      </div>
    `
  }
};
