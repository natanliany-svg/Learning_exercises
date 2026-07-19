const contentExpressExtra = {
  expressExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#ff0055;">index.js</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active">routes/users.js</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced" style="border-color:#00cc88;">routes/products.js</div>
            </div>
            `,
            text: "<b>שלב 1: חלוקת ראוטים (Express Router)</b><br>כשהפרויקט גדל, ה-Router מאפשר לפצל נתיבים לקבצים נפרדים ולהרכיב אותם בקובץ הראשי כמו לגו."
        }
    ],
    title: '🏎️ תרגול Express מתקדם (Router)',
    content: `
      <div class="card-body">
        <p class="lead">קובץ <code>index.js</code> שמכיל 500 שורות ו-20 נתיבים שונים הוא מתכון לאסון. נשתמש ב-<b>Router</b> לארגון מודולרי.</p>
        
        <h4>קובץ הנתיבים (<code>routes/users.js</code>)</h4>
        <pre><code><span class="t-key">import</span> express <span class="t-key">from</span> <span class="t-str">'express'</span>;
<span class="t-key">const</span> router = express.<span class="t-fn">Router</span>();

router.<span class="t-fn">get</span>(<span class="t-str">'/'</span>, (req, res) => {
  res.<span class="t-fn">json</span>({ message: <span class="t-str">"מביא את כל המשתמשים"</span> });
});

<span class="t-key">export default</span> router;</code></pre>

        <h4>חיבור לשרת הראשי (<code>index.js</code>)</h4>
        <pre><code><span class="t-key">import</span> express <span class="t-key">from</span> <span class="t-str">'express'</span>;
<span class="t-key">import</span> usersRouter <span class="t-key">from</span> <span class="t-str">'./routes/users.js'</span>;

<span class="t-key">const</span> app = express();
app.<span class="t-fn">use</span>(<span class="t-str">'/api/users'</span>, usersRouter); <span class="t-com">// חיבור הראוטר!</span>

app.<span class="t-fn">listen</span>(<span class="t-num">3000</span>, () => console.<span class="t-fn">log</span>(<span class="t-str">"Running"</span>));</code></pre>
      </div>
    `
  }
};
