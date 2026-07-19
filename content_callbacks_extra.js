const contentCallbacksExtra = {
  callbacksExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#ff0055;">קריאה 1</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↘</span></div>
                <div class="flow-node-enhanced active">קריאה 2</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↘</span></div>
                <div class="flow-node-enhanced" style="border-color:#00cc88;">קריאה 3</div>
            </div>
            `,
            text: "<b>שלב 1: Callback Hell (פירמידת האבדון)</b><br>כשאנחנו רוצים לבצע רצף של פעולות אסינכרוניות אחת אחרי השנייה, אנחנו עלולים למצוא את עצמנו מקננים קולבקים בתוך קולבקים עד שהקוד נראה כמו פירמידה אלכסונית בלתי קריאה."
        }
    ],
    title: '☎️ תרגול קולבקים (Callback Hell)',
    content: `
      <div class="card-body">
        <p class="lead">קולבקים הם הדרך הישנה להתמודד עם אסינכרוניות. הם עושים את העבודה, אבל מסבכים את הקוד.</p>
        
        <h4>מה זה Callback Hell? 🌋</h4>
        <p>נניח שאנחנו רוצים: 1. לקרוא קובץ משתמשים. 2. למצוא משתמש. 3. למשוך הזמנות. 4. לשמור קובץ. נגיע למצב כזה:</p>
        <pre><code>fs.<span class="t-fn">readFile</span>(<span class="t-str">'users.json'</span>, (err, usersData) => {
  <span class="t-ctl">if</span> (err) <span class="t-ctl">return</span> console.<span class="t-fn">log</span>(err);
  
  db.<span class="t-fn">getOrders</span>(user.id, (err, orders) => {
    <span class="t-ctl">if</span> (err) <span class="t-ctl">return</span> console.<span class="t-fn">log</span>(err);
    
    fs.<span class="t-fn">writeFile</span>(<span class="t-str">'orders.json'</span>, orders, (err) => {
      console.<span class="t-fn">log</span>(<span class="t-str">'איזה סיוט לקרוא את זה...'</span>);
    });
  });
});</code></pre>
        <p><b>הפתרון?</b> בשביל זה המציאו את ה-Promises ואת Async/Await!</p>
      </div>
    `
  }
};
