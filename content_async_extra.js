const contentAsyncExtra = {
  asyncExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced error">קוד סינכרוני<br><span style="font-size:12px">מחכה בתור... ⏳</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">vs</span></div>
                <div class="flow-node-enhanced" style="border-color:#00cc88;">קוד אסינכרוני<br><span style="font-size:12px">רץ ברקע! 🚀</span></div>
            </div>
            `,
            text: "<b>שלב 1: סינכרוני מול אסינכרוני</b><br>קוד רגיל מחכה שכל פקודה תסתיים. קוד אסינכרוני (כמו קריאת קובץ) נשלח לעבוד ברקע, והתוכנית ממשיכה הלאה בלי לחכות לו!"
        },
        {
            html_visual: `
            <div class="anim-container">
                <div class="flow-node-enhanced" style="border-color:#38bdf8; position:relative; left:-20px;">
                    readFile()
                    <div class="flow-node-enhanced" style="border-color:#ff0055; transform:scale(0.85); margin-top:5px;">
                        toUpperCase()
                        <div class="flow-node-enhanced" style="border-color:#ffd700; transform:scale(0.85); margin-top:5px;">
                            writeFile()
                        </div>
                    </div>
                </div>
            </div>
            `,
            text: "<b>שלב 2: Callbacks (והגיהינום שלהם)</b><br>הגישה הישנה. אנחנו מעבירים פונקציה שתופעל כשהמשימה תסתיים. הבעיה? כשיש הרבה פעולות אחת אחרי השנייה, הקוד נדחף ימינה ונוצר <b>Callback Hell</b>."
        },
        {
            html_visual: `
            <div class="timeline-visual slide-in-right">
                <div class="timeline-step">
                    <div class="timeline-dot" style="background:#38bdf8; box-shadow: 0 0 10px #38bdf8;"></div>
                    <span class="timeline-label">.then()</span>
                </div>
                <div class="timeline-line"></div>
                <div class="timeline-step">
                    <div class="timeline-dot" style="background:#38bdf8; box-shadow: 0 0 10px #38bdf8;"></div>
                    <span class="timeline-label">.then()</span>
                </div>
                <div class="timeline-line" style="background:linear-gradient(90deg, var(--border) 0%, #ff0055 100%);"></div>
                <div class="timeline-step">
                    <div class="timeline-dot" style="background:#ff0055; box-shadow: 0 0 10px #ff0055;"></div>
                    <span class="timeline-label">.catch()</span>
                </div>
            </div>
            `,
            text: "<b>שלב 3: Promises (הבטחות)</b><br>הגישה המודרנית! כותבים קוד ישר ונקי. השתמשו ב-<code>.then()</code> כשהכל מצליח, וב-<code>.catch()</code> למקרה שיש שגיאה. חשוב לא לשכוח <b>return</b>!"
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">Promise.all()</div>
                <div style="display:flex; gap:10px; margin-top:15px;">
                    <div class="flow-node-enhanced active ripple-out" style="width:80px; padding:10px;">משימה A</div>
                    <div class="flow-node-enhanced active ripple-out delay-1" style="width:80px; padding:10px;">משימה B</div>
                </div>
            </div>
            `,
            text: "<b>שלב 4: עבודה במקביל (Promise.all)</b><br>למה לחכות אחד-אחד? מכניסים כמה משימות יחד למערך, והן רצות בו-זמנית. מקבלים את התוצאות רק כשכולן סיימו בהצלחה!"
        }
    ],

    title: '⚡ פעולות אסינכרוניות (קבצים)',
    content: `
      <div class="card-body">
        <p class="lead">לפעמים הקוד שלנו צריך זמן — למשל כדי לקרוא או לכתוב קבצים עם מודול <code>fs</code> (File System). אם נעצור הכל עד שהקובץ ייקרא, התוכנית תיתקע. לכן משתמשים בקוד <b>אסינכרוני</b>.</p>
        
        <h4>1. הדרך הישנה: Callbacks ☎️</h4>
        <p>מעבירים פונקציה שתופעל כשהמשימה תסתיים. ה-callback תמיד מקבל את השגיאה (err) ראשונה, ואז את המידע (data).</p>
        <pre><code><span class="t-key">const</span> fs = <span class="t-fn">require</span>(<span class="t-str">'fs'</span>);

fs.<span class="t-fn">readFile</span>(<span class="t-str">'input.txt'</span>, <span class="t-str">'utf8'</span>, (err, data) => {
  <span class="t-ctl">if</span> (err) {
    console.<span class="t-fn">log</span>(<span class="t-str">'שגיאה:'</span>, err);
  } <span class="t-ctl">else</span> {
    console.<span class="t-fn">log</span>(<span class="t-str">'תוכן הקובץ:'</span>, data);
  }
});</code></pre>
        <div class="callout error">
          <span class="ico">⚠️</span>
          <div class="ct"><b>Callback Hell:</b> כשצריך לבצע כמה פעולות ברצף (למשל קריאה ואז כתיבה), הקוד מתחיל להיכנס פנימה ולהיות קשה לקריאה ("פירמידת האבדון").</div>
        </div>

        <h4>2. הדרך החדשה והנקייה: Promises 🤝</h4>
        <p>מודול <code>fs.promises</code> נותן לנו לעבוד בשרשור נקי. משתמשים ב-<code>.then()</code> בשביל הצלחה וב-<code>.catch()</code> לטיפול בשגיאות.</p>
        <pre><code><span class="t-key">const</span> fsPromises = <span class="t-fn">require</span>(<span class="t-str">'fs'</span>).promises;

fsPromises.<span class="t-fn">readFile</span>(<span class="t-str">'input.txt'</span>, <span class="t-str">'utf8'</span>)
  .<span class="t-fn">then</span>(data => {
    <span class="t-com">// כשהקריאה מצליחה, מחזירים פעולת כתיבה (חשוב לשים return!)</span>
    <span class="t-ctl">return</span> fsPromises.<span class="t-fn">writeFile</span>(<span class="t-str">'output.txt'</span>, data.<span class="t-fn">toUpperCase</span>());
  })
  .<span class="t-fn">then</span>(() => {
    console.<span class="t-fn">log</span>(<span class="t-str">'הקובץ נכתב בהצלחה!'</span>);
  })
  .<span class="t-fn">catch</span>(err => {
    <span class="t-com">// כל שגיאה בדרך תיפול ישר לפה</span>
    console.<span class="t-fn">log</span>(<span class="t-str">'משהו השתבש:'</span>, err);
  });</code></pre>

        <div class="callout analogy">
          <span class="ico">🍔</span>
          <div class="ct"><b>אנלוגיה:</b> כשאתם מזמינים המבורגר במסעדה, הקופאי לא עוצר את התור עד שהאוכל מוכן. הוא נותן לכם <b>זמזם (Promise)</b> וממשיך ללקוח הבא. כשהאוכל יהיה מוכן, הזמזם יצפצף (<code>.then</code>). אם נגמרו הלחמניות, תקבלו הודעת ביטול (<code>.catch</code>).</div>
        </div>

        <h4>3. עבודה במקביל: Promise.all 🚀</h4>
        <p>צריכים לקרוא שני קבצים שונים? אין סיבה לחכות שהראשון יסתיים כדי להתחיל את השני. נריץ אותם יחד!</p>
        <pre><code><span class="t-key">Promise</span>.<span class="t-fn">all</span>([
  fsPromises.<span class="t-fn">readFile</span>(<span class="t-str">'file1.txt'</span>, <span class="t-str">'utf8'</span>),
  fsPromises.<span class="t-fn">readFile</span>(<span class="t-str">'file2.txt'</span>, <span class="t-str">'utf8'</span>)
])
.<span class="t-fn">then</span>(results => {
  <span class="t-com">// results הוא מערך עם התוצאות של כולם בסדר שביקשנו</span>
  console.<span class="t-fn">log</span>(<span class="t-str">'קובץ 1:'</span>, results[<span class="t-num">0</span>]);
  console.<span class="t-fn">log</span>(<span class="t-str">'קובץ 2:'</span>, results[<span class="t-num">1</span>]);
})
.<span class="t-fn">catch</span>(err => console.<span class="t-fn">log</span>(<span class="t-str">'אחד מהם נכשל:'</span>, err));</code></pre>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> ב-Promises משורשרים (chain), חובה לעשות <b><code>return</code></b> בתוך ה-<code>.then()</code> כדי שה-<code>.then()</code> הבא בתור יחכה לפעולה! אם תשכחו אותו, הקוד פשוט ירוץ קדימה בלי לחכות.</div>
        </div>
      </div>
    `
  }
};
