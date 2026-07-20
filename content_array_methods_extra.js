const contentArrayMethodsExtra = {
  arrayMethodsExtra: {
    title: '🛠️ פונקציות מערך מתקדמות',
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">[1, 2, 3]</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">map(x => x*2)</span></div>
                <div class="flow-node-enhanced active ripple-out" style="border-color:#00cc88;">[2, 4, 6]</div>
            </div>
            `,
            text: "<b>שלב 1: התמרת נתונים (map)</b><br>הפונקציה <code>map</code> עוברת על כל איבר במערך, מבצעת עליו פעולה, ומחזירה <b>מערך חדש</b> באותו הגודל בדיוק."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">[1, 2, 3, 4]</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">filter(x => x>2)</span></div>
                <div class="flow-node-enhanced error bounce-in" style="border-color:#ff0055;">[3, 4]</div>
            </div>
            `,
            text: "<b>שלב 2: סינון נתונים (filter)</b><br>הפונקציה <code>filter</code> שומרת רק את האיברים שעוברים את התנאי שלנו (מחזירים true), וזורקת את השאר. גם היא מחזירה <b>מערך חדש</b>."
        },
        {
            html_visual: `
            <div class="anim-container" style="justify-content: center; align-items: center; flex-direction: column;">
                <div style="display:flex; gap:10px; margin-bottom: 20px;">
                    <div class="anim-packet move-right" style="background:#00d2ff; position:static;">10</div>
                    <div class="anim-packet move-right" style="background:#00d2ff; position:static; animation-delay: 0.2s;">20</div>
                    <div class="anim-packet move-right" style="background:#00d2ff; position:static; animation-delay: 0.4s;">30</div>
                </div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↓</span><span class="arrow-label">reduce (סכום)</span></div>
                <div class="anim-node active pulse-glow" style="border-color:#ffd700; font-size: 1.5em; margin-top: 10px;">60</div>
            </div>
            `,
            text: "<b>שלב 3: צמצום (reduce)</b><br>הפונקציה <code>reduce</code> 'מועכת' את כל המערך לערך בודד אחד (כמו סכום, ממוצע, או אפילו אובייקט חדש)."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced">מערך ענק</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">find(x > 50)</span></div>
                <div class="flow-node-enhanced highlight-flash" style="border-color:#00cc88;">הראשון שנמצא!</div>
            </div>
            `,
            text: "<b>שלב 4: חיפוש חכם (find / some / every)</b><br>במקום לולאות ארוכות, <code>find</code> עוצרת ברגע שהיא מוצאת את הערך הראשון שמתאים, ומחזירה אותו."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">[📦, 📦, 📦]</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">filter</span></div>
                <div class="flow-node-enhanced">[📦, 📦]</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">map</span></div>
                <div class="flow-node-enhanced active" style="border-color:#ff0055;">[🎁, 🎁]</div>
            </div>
            `,
            text: "<b>שלב 5: שרשור (Chaining)</b><br>הקסם האמיתי! אפשר לחבר פעולות אחת אחרי השנייה. המסנן מעביר את התוצאה שלו ישר ל-map, בקוד קצר, נקי וקריא."
        }
    ],
    content: `
      <div class="card-body">
        <p class="lead">במקום לכתוב לולאות ארוכות ומסורבלות, JavaScript מספקת לנו פונקציות מוכנות מראש (Array Methods) שעושות את העבודה בצורה אלגנטית, קריאה ומהירה יותר.</p>
        
        <h4>1. שינוי וסינון (map & filter)</h4>
        <p>שתי הפונקציות השימושיות ביותר! שתיהן לא משנות את המערך המקורי, אלא <b>מחזירות מערך חדש</b>.</p>
        <ul class="tight">
          <li><b><code class="inl">map</code></b> — ממירה כל איבר במערך למשהו אחר. מצוין לשליפת נתונים או חישובים.</li>
          <li><b><code class="inl">filter</code></b> — מסננת החוצה איברים שלא עומדים בתנאי מסוים.</li>
        </ul>
        <pre><code><span class="t-key">const</span> numbers = [<span class="t-num">1</span>, <span class="t-num">2</span>, <span class="t-num">3</span>, <span class="t-num">4</span>];

<span class="t-com">// הכפלת כל מספר ב-2 (map)</span>
<span class="t-key">const</span> doubled = numbers.<span class="t-fn">map</span>(n => n * <span class="t-num">2</span>); <span class="t-com">// [2, 4, 6, 8]</span>

<span class="t-com">// סינון רק מספרים זוגיים (filter)</span>
<span class="t-key">const</span> evens = numbers.<span class="t-fn">filter</span>(n => n % <span class="t-num">2</span> === <span class="t-num">0</span>); <span class="t-com">// [2, 4]</span></code></pre>

        <h4>2. שרשור פעולות (Chaining)</h4>
        <p>כיוון ש-<code>map</code> ו-<code>filter</code> מחזירות מערכים חדשים, אנחנו יכולים לשרשר אותן זו לזו וליצור <b>צינור נתונים (Pipeline)</b> עוצמתי בשורת קוד אחת!</p>
        <pre><code><span class="t-key">const</span> products = [
  { name: <span class="t-str">"לפטופ"</span>, price: <span class="t-num">800</span> },
  { name: <span class="t-str">"עכבר"</span>, price: <span class="t-num">50</span> }
];

<span class="t-com">// שרשור: קודם מסננים, ואז שולפים רק את השמות</span>
<span class="t-key">const</span> expensiveNames = products
  .<span class="t-fn">filter</span>(p => p.price > <span class="t-num">100</span>)
  .<span class="t-fn">map</span>(p => p.name); <span class="t-com">// ["לפטופ"]</span></code></pre>
        
        <div class="callout analogy">
          <span class="ico">🏭</span>
          <div class="ct"><b>אנלוגיה:</b> דמיינו פס ייצור. ה-<code>filter</code> הוא השומר שזורק מוצרים פגומים לפח. ה-<code>map</code> הוא הפועל שעוטף את המוצרים הטובים באריזת מתנה. הכל זורם בצורה חלקה בתחנה אחת.</div>
        </div>

        <h4>3. כיווץ לערך בודד (reduce)</h4>
        <p>פונקציית <code>reduce</code> היא ה"אולר השוויצרי" של המערכים. היא עוברת על כל האיברים וצוברת תוצאה אחת (סכום, מחרוזת, או אפילו אובייקט מורכב).</p>
        <pre><code><span class="t-key">const</span> prices = [<span class="t-num">10</span>, <span class="t-num">20</span>, <span class="t-num">30</span>];

<span class="t-com">// פרמטר ראשון: צובר (sum), פרמטר שני: הערך הנוכחי (price), וה-0 בסוף הוא ערך ההתחלה</span>
<span class="t-key">const</span> total = prices.<span class="t-fn">reduce</span>((sum, price) => sum + price, <span class="t-num">0</span>); <span class="t-com">// 60</span></code></pre>

        <h4>4. שאלות של כן/לא וחיפושים</h4>
        <ul class="tight">
          <li><b><code class="inl">find</code></b> — מחזיר את האיבר <b>הראשון</b> שמקיים את התנאי (או <code>undefined</code> אם לא נמצא). עוצר מיד כשמוצא!</li>
          <li><b><code class="inl">some</code></b> — האם <b>לפחות אחד</b> מקיים את התנאי? (מחזיר <code>true</code> או <code>false</code>).</li>
          <li><b><code class="inl">every</code></b> — האם <b>כולם</b> מקיימים את התנאי?</li>
          <li><b><code class="inl">includes</code></b> — האם המערך כולל ערך <b>פשוט</b> מסוים (למשל מספר או מחרוזת)?</li>
        </ul>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> אם אתם צריכים לשנות נתונים קיימים באובייקטים/מערכים במקום בלי להחזיר מערך חדש (תופעות לוואי), השתמשו ב-<code>forEach</code>. אבל זכרו: <b>אי אפשר</b> לשרשר <code>forEach</code> (היא מחזירה <code>undefined</code>), ו-<b>אי אפשר</b> לעצור אותה באמצע עם <code>break</code> או <code>return</code>!</div>
        </div>
      </div>
    `
  }
};
