const contentPromisesExtra = {
  promisesExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced fade-slide-up" style="border-color:#ffd700;">Promise 1</div>
                <div class="flow-node-enhanced fade-slide-up" style="border-color:#38bdf8;">Promise 2</div>
                <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">→</span><span class="arrow-label">Promise.all</span></div>
                <div class="flow-node-enhanced active delay-2" style="border-color:#00cc88;">[Res 1, Res 2]</div>
            </div>
            `,
            text: "<b>שלב 1: Promise.all</b><br>מה קורה כשרוצים להביא נתונים מ-3 שרתים במקביל ולא לחכות לאחד אחד? <code>Promise.all</code> מריץ את כולם יחד ומחזיר מערך תשובות כש<b>כולם</b> מסיימים."
        }
    ],
    title: '🤞 תרגול Promises (Promise.all)',
    content: `
      <div class="card-body">
        <p class="lead">הבטחות (Promises) לא נועדו רק כדי ליישר את ה-Callback Hell, אלא גם נותנות לנו כלים לביצוע פעולות במקביל.</p>
        
        <h4>לרוץ במקביל: <code>Promise.all</code> 🚀</h4>
        <p>נניח ואתם צריכים לטעון מוצרים ולטעון משתמשים. במקום לעשות אותם אחד אחרי השני, נריץ אותם במקביל:</p>
        <pre><code><span class="t-key">const</span> p1 = <span class="t-fn">fetch</span>(<span class="t-str">'/users'</span>).<span class="t-fn">then</span>(r => r.<span class="t-fn">json</span>());
<span class="t-key">const</span> p2 = <span class="t-fn">fetch</span>(<span class="t-str">'/products'</span>).<span class="t-fn">then</span>(r => r.<span class="t-fn">json</span>());

Promise.<span class="t-fn">all</span>([p1, p2])
  .<span class="t-fn">then</span>((results) => {
    console.<span class="t-fn">log</span>(<span class="t-str">"הכל מוכן!"</span>, results[<span class="t-num">0</span>], results[<span class="t-num">1</span>]);
  })
  .<span class="t-fn">catch</span>((err) => {
    console.<span class="t-fn">log</span>(<span class="t-str">"שגיאה באחת מהבקשות"</span>, err);
  });</code></pre>
      </div>
    `
  }
};
