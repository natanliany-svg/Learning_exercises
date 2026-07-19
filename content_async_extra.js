const contentAsyncExtra = {
  asyncExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">try { ... }</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">Error!</span></div>
                <div class="flow-node-enhanced active bounce-in" style="border-color:#ff0055;">catch (err) { ... }</div>
            </div>
            `,
            text: "<b>שלב 1: טיפול בשגיאות</b><br>כאשר עובדים עם Async/Await, אנחנו חייבים לעטוף את הקוד בבלוק <code>try-catch</code>. אם משהו נכשל ב-try, התוכנית קופצת ל-catch בצורה חלקה."
        }
    ],
    title: '⚡ פרויקט אסינכרוני ו-Try/Catch',
    content: `
      <div class="card-body">
        <p class="lead">קוד אסינכרוני טהור ומקצועי תמיד כולל מנגנון שגיאות מתקדם.</p>
        
        <h4>בלוק ה- Try / Catch 🛡️</h4>
        <p>כיוון שב-Async/Await אין פונקציית <code>.catch()</code> כמו ב-Promises, אנחנו משתמשים במנגנון שפת JavaScript:</p>
        <pre><code><span class="t-key">async function</span> <span class="t-fn">getUserData</span>() {
  <span class="t-ctl">try</span> {
    <span class="t-key">const</span> res = <span class="t-key">await</span> <span class="t-fn">fetch</span>(<span class="t-str">'https://api.example.com/user'</span>);
    
    <span class="t-ctl">if</span> (!res.ok) <span class="t-ctl">throw new Error</span>(<span class="t-str">'השרת החזיר שגיאה'</span>);
    <span class="t-key">const</span> data = <span class="t-key">await</span> res.<span class="t-fn">json</span>();
    console.<span class="t-fn">log</span>(data);
    
  } <span class="t-ctl">catch</span> (err) {
    console.<span class="t-fn">log</span>(<span class="t-str">"אופס, משהו השתבש:"</span>, err.message);
  }
}</code></pre>
      </div>
    `
  }
};
