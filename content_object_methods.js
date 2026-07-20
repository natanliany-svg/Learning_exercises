const contentObjectMethodsExtra = {
  objectMethodsExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container">
                <div class="anim-node" style="border-color:#38bdf8;">"  Hello  ".trim()</div>
                <div class="anim-packet move-right" style="background:#00d2ff;">"Hello"</div>
            </div>
            `,
            text: "<b>פעולות על מחרוזות (Strings)</b><br>מחרוזות הן טקסט. בעזרת פעולות כמו <code>trim()</code> נוכל לנקות רווחים, ובעזרת <code>split()</code> נוכל לפצל מחרוזת למערך של מילים."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">Object</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active ripple-out" style="border-color:#ff0055;">Object.keys()</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">["name", "age"]</div>
            </div>
            `,
            text: "<b>שליפת מפתחות (Keys)</b><br>הפעולה <code>Object.keys(obj)</code> מחזירה לנו מערך שמכיל רק את השמות (המפתחות) של התכונות באובייקט."
        },
        {
             html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced">Object</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active pulse-glow" style="border-color:#00cc88;">Object.values()</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">["Alice", 25]</div>
            </div>
            `,
            text: "<b>שליפת ערכים (Values)</b><br>הפעולה <code>Object.values(obj)</code> מחזירה מערך שמכיל רק את הערכים עצמם שנמצאים בתוך האובייקט."
        },
        {
            html_visual: `
            <div class="stack-visual">
                <div class="stack-item" style="opacity:1; background:var(--primary);">Object 1</div>
                <div class="stack-item" style="opacity:1; background:#ff0055;">+ Object 2</div>
                <div class="stack-item" style="opacity:1; background:#00cc88;">= Object.assign()</div>
            </div>
            `,
            text: "<b>מיזוג אובייקטים</b><br>בעזרת <code>Object.assign()</code> אנחנו יכולים לקחת שני אובייקטים או יותר, ולחבר אותם לאובייקט אחד גדול."
        }
    ],

    title: '🛠️ מחרוזות ואובייקטים',
    content: `
      <div class="card-body">
        <p class="lead">ב-JavaScript, מחרוזות (טקסט) ואובייקטים (אוסף של נתונים) מגיעים עם פונקציות מוכנות מראש שעוזרות לנו לעבוד איתם בקלות.</p>
        
        <h4>1. פונקציות חשובות למחרוזות (Strings)</h4>
        <ul class="tight">
          <li><b><code class="inl">trim()</code></b> — מנקה רווחים מיותרים מההתחלה ומהסוף.</li>
          <li><b><code class="inl">toLowerCase() / toUpperCase()</code></b> — הופך את כל הטקסט לאותיות קטנות או גדולות.</li>
          <li><b><code class="inl">includes(word)</code></b> — בודק אם מילה מסוימת קיימת בתוך הטקסט (מחזיר true או false).</li>
          <li><b><code class="inl">split(char)</code></b> — חותך את המחרוזת לפי תו מסוים והופך אותה למערך.</li>
          <li><b><code class="inl">replace(old, new)</code></b> — מחליף חלק מהטקסט במשהו אחר.</li>
        </ul>

        <pre><code><span class="t-key">const</span> text = <span class="t-str">"  Hello World  "</span>;
console.<span class="t-fn">log</span>(text.<span class="t-fn">trim</span>()); <span class="t-com">// "Hello World"</span>
console.<span class="t-fn">log</span>(text.<span class="t-fn">includes</span>(<span class="t-str">"World"</span>)); <span class="t-com">// true</span></code></pre>

        <div class="callout analogy">
          <span class="ico">✂️</span>
          <div class="ct"><b>אנלוגיה:</b> פונקציות של מחרוזות הן כמו מספריים וצבעים בשיעור יצירה. אפשר לגזור את הטקסט, לשנות לו את הצבע (גודל אותיות), ולהדביק במקומו משהו חדש.</div>
        </div>

        <h4>2. פונקציות חשובות לאובייקטים (Objects)</h4>
        <p>אובייקטים בנויים מזוגות של <b>מפתח (Key)</b> ו-<b>ערך (Value)</b>. הנה הפונקציות הכי שימושיות:</p>
        <ul class="tight">
          <li><b><code class="inl">Object.keys(obj)</code></b> — מחזיר מערך של כל ה<b>שמות</b> (המפתחות) באובייקט.</li>
          <li><b><code class="inl">Object.values(obj)</code></b> — מחזיר מערך של כל ה<b>ערכים</b> באובייקט.</li>
          <li><b><code class="inl">Object.entries(obj)</code></b> — מחזיר מערך של מערכים, כשבכל אחד מהם יש [מפתח, ערך]. מצוין ללולאות!</li>
          <li><b><code class="inl">Object.assign(target, source)</code></b> — מעתיק תכונות מאובייקט אחד לאחר או ממזג אותם.</li>
        </ul>
        
        <pre><code><span class="t-key">const</span> user = { name: <span class="t-str">"Alice"</span>, age: <span class="t-num">25</span> };

console.<span class="t-fn">log</span>(Object.<span class="t-fn">keys</span>(user));   <span class="t-com">// ["name", "age"]</span>
console.<span class="t-fn">log</span>(Object.<span class="t-fn">values</span>(user)); <span class="t-com">// ["Alice", 25]</span></code></pre>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>טיפ חזק:</b> כשאתם צריכים לעבור על כל הנתונים של אובייקט (לעשות לולאה עליו), הכי נוח להשתמש ב-<code>Object.entries()</code> בתוך לולאת <code>for...of</code>!</div>
        </div>
      </div>
    `
  }
};
