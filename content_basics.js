const contentBasicsClassroom = {
  basics: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container"><div class="anim-node" style="border-color:#38bdf8;">let order;</div><div class="anim-node" style="border-style:dashed;">פנקס הזמנות ריק</div></div>
            `,
            text: "<b>שלב 1: הצהרה (Declaration) במטבח</b><br>כשאנחנו כותבים <code>let order;</code> אנחנו מבקשים מהמלצרית לקחת דף ריק בפנקס. עוד אין עליו כלום, אבל הוא מוכן לכתיבה."
        },
        {
            html_visual: `
            <div class="anim-container"><div class="anim-node" style="border-color:#38bdf8;">order = 'פיצה';</div><div class="anim-packet move-right" style="background:#00d2ff;">'פיצה'</div><div class="anim-node">פנקס הזמנות</div></div>
            `,
            text: "<b>שלב 2: השמה (Assignment)</b><br>עכשיו הלקוח בחר! אנחנו לוקחים את המילה 'פיצה' וכותבים אותה בתוך הדף הריק בפנקס שלנו."
        },
        {
            html_visual: `
            <div class="anim-container"><div class="anim-node" style="border-color:#ff0055;">const MENU_ITEM = 'פסטה';</div><div class="anim-node" style="background:#ff0055; color:white;">מודפס בתפריט 🔒</div></div>
            `,
            text: "<b>שלב 3: קבועים (const)</b><br>משתנה מסוג <code>const</code> הוא כמו מנה שמודפסת בדיו על תפריט המסעדה! ברגע שהדפסנו אותה, אי אפשר לשנות אותה בעט. היא נעולה."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced float-bob" style="border-color:#ffd700;">var oldChef;<br><span style="font-size:10px;">(Hoisted Up - צועק מרחוק)</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↑</span></div>
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">let newChef;<br><span style="font-size:10px;">(Stays in place - עובד מסודר)</span></div>
            </div>
            `,
            text: "<b>שלב 4: Hoisting (הנפה)</b><br>משתני <code>var</code> הם כמו שף קדמון שצועק את ההזמנות שלו לפני שהמסעדה בכלל נפתחה, מה שיוצר כאוס. <code>let</code> ו-<code>const</code> מחכים בסבלנות לתורם."
        },
        {
            html_visual: `
            <div style="padding:15px; border:2px solid #555; border-radius:8px; position:relative;" class="fade-slide-up">
                <span style="position:absolute; top:-10px; right:10px; background:var(--bg); padding:0 5px; color:#aaa; font-size:11px;">אולם המסעדה (Global)</span>
                <div style="padding:15px; border:2px solid #38bdf8; border-radius:8px; margin-top:10px; position:relative;">
                    <span style="position:absolute; top:-10px; right:10px; background:var(--bg); padding:0 5px; color:#38bdf8; font-size:11px;">מטבח (Function)</span>
                    <div style="padding:10px; border:2px dashed #00cc88; border-radius:8px; margin-top:10px; position:relative;">
                        <span style="position:absolute; top:-10px; right:10px; background:var(--bg); padding:0 5px; color:#00cc88; font-size:11px;">מקרר ספציפי (Block)</span>
                        <span class="anim-packet pulse-glow" style="position:static; display:inline-block; background:#00cc88;">x=5</span>
                    </div>
                </div>
            </div>
            `,
            text: "<b>שלב 5: טווחי הכרה (Scopes)</b><br>משתני <code>let</code> ו-<code>const</code> קיימים רק בחדר בו הגדרנו אותם (כמו מקרר בתוך המטבח). מי שבאולם המסעדה לא יכול לראות מה יש במקרר הספציפי!"
        }
    ],

    title: '📐 יסודות ומשתנים: פתיחת המסעדה',
    content: `
      <div class="card-body">
        <p class="lead">ברוכים הבאים למסעדת הקוד שלנו! במערכת הזו, כל פיסת מידע היא חומר גלם, וכל קובץ הוא מטבח שאנחנו מנהלים. משתנה (Variable) הוא למעשה "קופסת אחסון" במטבח עם שם ברור עליה, בתוכה אנו שומרים את הערכים שלנו (כמו מספרים, מחרוזות טקסט ועוד).</p>
        
        <h4>איך פותחים את המטבח? (הפעלה צעד-אחר-צעד בסביבת VS Code)</h4>
        <p>לפני שנתחיל לאחסן נתונים ולשלוט במסעדה, עלינו להיכנס למטבח ולהכין את עמדת העבודה שלנו. אנא קראו ויישמו כל שלב בקפידה עילאית:</p>
        <ol>
          <li><b>פתיחת תוכנת העבודה:</b> על מסך המחשב שלכם, אתרו את הסמל של <strong>VS Code</strong>. לחצו עליו לחיצה כפולה ומהירה.</li>
          <li><b>טעינת תיקיית המטבח:</b> בתפריט העליון ביותר לחצו על <strong>File</strong>, ואז בחרו ב-<strong>Open Folder...</strong>. נווטו לתיקייה ובחרו <strong>Select Folder</strong>.</li>
          <li><b>יצירת קובץ התפריט (הקוד):</b> בצדו השמאלי של המסך תראו את סרגל הצד. לחצו על הסמל השמאלי ביותר (הוספת קובץ) והקלידו <code>app.js</code> ולחצו על <strong>Enter</strong>.</li>
          <li><b>פתיחת טרמינל:</b> בתפריט העליון, לחצו על <strong>Terminal</strong>, ואז על <strong>New Terminal</strong>. לחלופין השתמשו בקיצור המקלדת <code>Ctrl + \`</code>.</li>
          <li><b>הרצת הקוד:</b> לחצו עם העכבר בתוך החלון השחור של הטרמינל כדי לוודא שהוא פעיל (סמן מהבהב יופיע). הקלידו <code>node app.js</code> ולחצו <strong>Enter</strong>!</li>
        </ol>

        <hr style="margin: 20px 0; border-color: #38bdf8;">
        
        <p>תכירו את <b>שף אנטון</b>. הוא גבר גדל-גוף בשנות החמישים לחייו. יש לו קרחת מבריקה, זקן עבות, וסינר לבן שמוכתם תמיד ברוטב עגבניות. ידיו רחבות ומחוספסות, והוא מתהלך בנעלי עבודה שחורות וכבדות.</p>
        <p><i>"הלוואי שהטבחים החדשים לא ישרפו לי היום את מחבתות הנחושת ולא ישתמשו במשתנים גלובליים,"</i> הרהר אנטון בינו לבין עצמו.</p>
        
        <h4>1. ההבדל בין let, const ו-var במטבח שלנו</h4>
        <ul class="tight">
          <li><b><code class="inl">const</code> (התפריט המודפס)</b> — קיצור ל-Constant (קבוע). ערכו חרוט באבן. <b>זוהי ברירת המחדל!</b></li>
          <li><b><code class="inl">let</code> (פנקס המלצרית)</b> — משתנה שניתן לשנות לו את הערך בכל שלב. כמו פנקס הזמנות שכתוב בעיפרון - אפשר למחוק ולעדכן.</li>
          <li><b><code class="inl">var</code> (השף הזקן והמבולבל)</b> — הדרך הישנה להגדרת משתנים. נמנעים ממנה כי היא יוצרת התנהגות לא צפויה הנקראת Hoisting.</li>
        </ul>

        <pre><code><span class="t-key">const</span> restaurantName = <span class="t-str">"הפסטה של אנטון"</span>;   <span class="t-com">// קבוע - שם המסעדה לא משתנה</span>
<span class="t-key">let</span> availableTables = <span class="t-num">15</span>;        <span class="t-com">// משתנה - מספר השולחנות הפנויים</span>
availableTables = <span class="t-num">14</span>;            <span class="t-com">// ✓ מותר! שולחן נתפס</span>
<span class="t-com">// restaurantName = "הפיצה של אנטון"; ✗ שגיאה מוחלטת!</span></code></pre>

        <h4>2. משתני const ומערכים (מלכודת נפוצה במזווה!)</h4>
        <p>כאשר מגדירים מקרר או מזווה (מערך או אובייקט) באמצעות <code>const</code>, אסור לנו להחליף את <b>המקרר עצמו</b>. אבל <b>התוכן הפנימי שלו (המצרכים) עדיין ניתן לשינוי!</b></p>
        <pre><code><span class="t-key">const</span> pantry = [<span class="t-str">"קמח"</span>, <span class="t-str">"עגבניות"</span>];
pantry.<span class="t-fn">push</span>(<span class="t-str">"שמן זית"</span>); <span class="t-com">// ✓ מותר! הכנסנו מצרך חדש למקרר הקיים</span>
<span class="t-com">// pantry = ["שוקולד"]; ✗ שגיאה! ניסינו לזרוק את המקרר ולהביא אחר במקומו</span></code></pre>

      </div>
    `
  },
  functions: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced">מצרכים גולמיים<br>(a, b)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active highlight-flash" style="border-color:#ff0055;">מתכון של שף (Function)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced">מנה מוכנה<br>(Return)</div>
            </div>
            `,
            text: "<b>שלב 1: פס הייצור במטבח</b><br>פונקציה מקבלת מצרכים גולמיים (פרמטרים), חותכת ומבשלת אותם בפנים, ופולטת החוצה מנה גמורה בעזרת המילה <code>return</code>."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">function(x) { return x*2; }</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↓</span><span class="arrow-label">הופך ל...</span></div>
                <div class="flow-node-enhanced active bounce-in">(x) => x*2</div>
            </div>
            `,
            text: "<b>שלב 2: פונקציות חץ (Arrow Functions)</b><br>שפים מודרניים אוהבים לכתוב קצר! חוסכים לנו את מילת ה-function, ואם יש רק שורה אחת, ההחזרה מתבצעת אוטומטית."
        }
    ],

    title: '🎯 פונקציות: מתכוני השף הפרטיים',
    content: `
      <div class="card-body">
        <p class="lead">למה לשף אנטון להסביר בכל פעם מחדש איך מכינים פסטה? פונקציה היא מתכון שמור. אנחנו רושמים את הצעדים פעם אחת, וקוראים להם מתי שצריך עם מצרכים שונים.</p>
        
        <h4>1. הדרך הקלאסית לעומת הדרך המודרנית</h4>
        <pre><code><span class="t-com">// הדרך הקלאסית: מתכון מפורט</span>
<span class="t-key">function</span> <span class="t-fn">makePasta</span>(sauce) {
  <span class="t-ctl">return</span> <span class="t-str">"פסטה עם רוטב "</span> + sauce;
}

<span class="t-com">// פונקציית חץ (Arrow Function): מתכון אקספרס קצרצר</span>
<span class="t-key">const</span> makePizza = (topping) => <span class="t-str">"פיצה עם "</span> + topping;</code></pre>
        
        <h4>2. סכנת ה-return האבוד (חוקי פונקציות החץ)</h4>
        <p>טבחים מתחילים עושים טעות קטלנית: כשהם פותחים סוגריים מסולסלים <code>{}</code> בתוך פונקציית חץ, הם שוכחים שאז <b>חובה</b> לכתוב את המילה <code>return</code>. בלי זה, הלקוח יקבל צלחת ריקה!</p>
        <pre><code><span class="t-com">// ✓ מנה שיוצאת בצורה אוטומטית (אין סוגריים מסולסלים)</span>
<span class="t-key">const</span> doubleBake = time => time * <span class="t-num">2</span>;

<span class="t-com">// ✗ באג: פתחנו סוגריים ושכחנו return! הצלחת תהיה undefined!</span>
<span class="t-key">const</span> doubleBakeBug = time => { time * <span class="t-num">2</span> }; 

<span class="t-com">// ✓ מתוקן: הוספנו return במפורש כדי לשלוח את האוכל החוצה</span>
<span class="t-key">const</span> doubleBakeFixed = time => { <span class="t-ctl">return</span> time * <span class="t-num">2</span> }; </code></pre>

        <div class="callout exam">
          <span class="ico">📝</span>
          <div class="ct">
            <b>בוחן פתע במטבח!</b>
            <p>הסו-שף כתב את הקוד הבא: <code>const bake = () => { "עוגה מוכנה" }</code> ומתלונן ששום דבר לא יוצא. מה הפתרון?</p>
            <p><b>תשובה:</b> מכיוון שהוא השתמש בסוגריים מסולסלים <code>{}</code> כדי ליצור בלוק קוד, תכונת ההחזרה האוטומטית התבטלה! עליו להוסיף את המילה <code>return</code> לפני המחרוזת, אחרת העוגה נרקבת בתנור לעד.</p>
          </div>
        </div>
      </div>
    `
  }
};
