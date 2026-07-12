const contentPart1 = {
  basics: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container"><div class="anim-node" style="border-color:#38bdf8;">let box;</div><div class="anim-node" style="border-style:dashed;">קופסה ריקה</div></div>
            `,
            text: "<b>שלב 1: הצהרה (Declaration)</b><br>כשאנחנו כותבים <code>let box;</code> אנחנו מבקשים מהמחשב להקצות לנו קופסה ריקה בזיכרון."
        },
        {
            html_visual: `
            <div class="anim-container"><div class="anim-node" style="border-color:#38bdf8;">box = 5;</div><div class="anim-packet move-right" style="background:#00d2ff;">5</div><div class="anim-node">קופסה</div></div>
            `,
            text: "<b>שלב 2: השמה (Assignment)</b><br>עכשיו אנחנו לוקחים את הערך 5 (הקובייה) ומכניסים אותו לתוך הקופסה שיצרנו."
        },
        {
            html_visual: `
            <div class="anim-container"><div class="anim-node" style="border-color:#ff0055;">const PI = 3.14;</div><div class="anim-node" style="background:#ff0055; color:white;">נעול 🔒</div></div>
            `,
            text: "<b>שלב 3: קבועים (const)</b><br>משתנה מסוג <code>const</code> הוא קופסה עם מנעול! ברגע שהכנסנו אליה ערך, אי אפשר לשנות אותו לעולם."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced float-bob" style="border-color:#ffd700;">var name;<br><span style="font-size:10px;">(Hoisted Up)</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↑</span></div>
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">let age;<br><span style="font-size:10px;">(Stays in place)</span></div>
            </div>
            `,
            text: "<b>שלב 4: Hoisting (הנפה)</b><br>משתני <code>var</code> מועלים אוטומטית לראש הקוד, מה שעלול ליצור באגים. <code>let</code> ו-<code>const</code> נשארים במקומם ולכן בטוחים יותר."
        },
        {
            html_visual: `
            <div style="padding:15px; border:2px solid #555; border-radius:8px; position:relative;" class="fade-slide-up">
                <span style="position:absolute; top:-10px; right:10px; background:var(--bg); padding:0 5px; color:#aaa; font-size:11px;">Global Scope</span>
                <div style="padding:15px; border:2px solid #38bdf8; border-radius:8px; margin-top:10px; position:relative;">
                    <span style="position:absolute; top:-10px; right:10px; background:var(--bg); padding:0 5px; color:#38bdf8; font-size:11px;">Function Scope</span>
                    <div style="padding:10px; border:2px dashed #00cc88; border-radius:8px; margin-top:10px; position:relative;">
                        <span style="position:absolute; top:-10px; right:10px; background:var(--bg); padding:0 5px; color:#00cc88; font-size:11px;">Block Scope (let/const)</span>
                        <span class="anim-packet pulse-glow" style="position:static; display:inline-block; background:#00cc88;">x=5</span>
                    </div>
                </div>
            </div>
            `,
            text: "<b>שלב 5: טווחי הכרה (Scopes)</b><br>משתני <code>let</code> ו-<code>const</code> כלואים בתוך הבלוק שלהם (Block Scope). מחוץ לבלוק הזה, אף אחד לא יכול לראות אותם!"
        }
    ],

    title: '📐 יסודות ומשתנים',
    content: `
      <div class="card-body">
        <p class="lead">משתנה הוא "קופסה עם שם" שמחזיקה ערך מסוים בזיכרון. ב-JavaScript מודרנית יש שלוש דרכים להכריז על משתנים, והבחירה ביניהן היא קריטית לתקינות הקוד.</p>
        
        <h4>1. ההבדל בין let, const ו-var</h4>
        <ul class="tight">
          <li><b><code class="inl">const</code></b> (קבוע) — ערכו של המשתנה לא יכול להשתנות לאחר ההגדרה הראשונית. <b>זוהי ברירת המחדל שבה תשתמשו כמעט תמיד.</b></li>
          <li><b><code class="inl">let</code></b> (משתנה) — משתנה שניתן לשנות לו את הערך (להציב ערך חדש) במהלך ריצת התוכנית.</li>
          <li><b><code class="inl">var</code></b> (מיושן) — הדרך הישנה להגדרת משתנים. כיום כמעט ולא משתמשים בה מכיוון שהיא יוצרת באגים מורכבים עקב התנהגות Scope לא צפויה ו-Hoisting.</li>
        </ul>

        <pre><code><span class="t-key">const</span> name = <span class="t-str">"אהרן"</span>;   <span class="t-com">// קבוע</span>
<span class="t-key">let</span> age = <span class="t-num">25</span>;        <span class="t-com">// משתנה</span>
age = <span class="t-num">26</span>;              <span class="t-com">// ✓ מותר</span>
<span class="t-com">// name = "דני";       ✗ שגיאה! const לא ניתן לשינוי</span></code></pre>

        <div class="callout analogy">
          <span class="ico">📦</span>
          <div class="ct"><b>אנלוגיה:</b> הגדרת משתנה עם <code>const</code> זה כמו לכתוב את השם עם עט על קופסה — הוא נשאר שם לתמיד. הגדרה עם <code>let</code> זה כמו לכתוב בעיפרון — אפשר למחוק ולכתוב משהו חדש.</div>
        </div>

        <h4>2. משתני const ומערכים/אובייקטים (מלכודת נפוצה!)</h4>
        <p>כאשר מגדירים מערך או אובייקט באמצעות <code>const</code>, המצביע לזיכרון נעול, אך <b>התוכן הפנימי שלו עדיין ניתן לשינוי (Mutation)</b>.</p>
        <pre><code><span class="t-key">const</span> colors = [<span class="t-str">"אדום"</span>, <span class="t-str">"ירוק"</span>];
colors.<span class="t-fn">push</span>(<span class="t-str">"כחול"</span>); <span class="t-com">// ✓ מותר בהחלט! שינינו את התוכן של המערך</span>
<span class="t-com">// colors = ["צהוב"]; ✗ שגיאה! אסור להציב מערך חדש לגמרי בתוך const</span></code></pre>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> שים לב שמשתני <code>let</code> ו-<code>const</code> הם בעלי <b>Block Scope</b> (קיימים רק בתוך הבלוק <code>{}</code> שבו הם הוגדרו, כמו לולאה או תנאי). לעומתם, <code>var</code> הוא בעל <b>Function Scope</b> ועובר <b>Hoisting</b> (הצהרתו עולה אוטומטית לראש הסביבה), מה שמקל על יצירת באגים. תמיד התחילו עם <code>const</code>, ועברו ל-<code>let</code> רק אם אתם יודעים שתצטרכו לשנות את המשתנה בהמשך.</div>
        </div>
      </div>
    `
  },
  loops: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="timeline-visual slide-in-right">
                <div class="timeline-step">
                    <div class="timeline-dot"></div>
                    <span class="timeline-label">i = 0</span>
                </div>
                <div class="timeline-line"></div>
                <div class="timeline-step">
                    <div class="timeline-dot"></div>
                    <span class="timeline-label">i = 1</span>
                </div>
                <div class="timeline-line"></div>
                <div class="timeline-step">
                    <div class="timeline-dot"></div>
                    <span class="timeline-label">i = 2</span>
                </div>
                <div class="anim-packet move-right" style="position:absolute; right:10%; margin-top:-10px;">Looping</div>
            </div>
            `,
            text: "<b>שלב 1: לולאת for קלאסית</b><br>פס ייצור שעובד שלב אחר שלב. אנחנו מגדירים אינדקס התחלתי, תנאי עצירה, ומה קורה בכל קפיצה (i++)."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">מערך<br>[1, 2, 3]</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active ripple-out">for...of<br>שולף ערך</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">מבצע פעולה</div>
            </div>
            `,
            text: "<b>שלב 2: לולאת for...of</b><br>לולאה חכמה יותר למערכים. היא שולפת באופן אוטומטי את הערך הבא בכל איטרציה מבלי להסתבך עם אינדקסים."
        },
        {
            html_visual: `
            <div class="anim-container" style="justify-content: center;">
               <div class="flow-node-enhanced error" style="width: 120px; text-align:center; z-index:5;">האם התנאי נכון?</div>
               <div class="anim-packet move-circle" style="left:50%; top:50%; transform:translate(-50%,-50%); background:#00cc88;">רץ שוב!</div>
            </div>
            `,
            text: "<b>שלב 3: לולאת while</b><br>לולאת 'שומר שער'. כל עוד התנאי מחזיר אמת, הלולאה תמשיך להסתובב. מצוינת כשאנחנו לא יודעים מראש כמה פעמים נצטרך לרוץ."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced">ריצת לולאה</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↘</span><span class="arrow-label">continue</span></div>
                <div class="flow-node-enhanced warning" style="margin-top:20px;">מדלג לסיבוב הבא</div>
                <div style="width:100%; height:1px;"></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↗</span><span class="arrow-label">break</span></div>
                <div class="flow-node-enhanced error" style="margin-top:-20px;">עוצר ויוצא לגמרי</div>
            </div>
            `,
            text: "<b>שלב 4: מנגנוני מילוט (break / continue)</b><br><code>break</code> שובר את הלולאה לגמרי ויוצא ממנה. <code>continue</code> רק מדלג על הסיבוב הנוכחי וממשיך מיד לסיבוב הבא."
        }
    ],

    title: '🔄 תנאים ולולאות',
    content: `
      <div class="card-body">
        <p class="lead">בקרת זרימה (Control Flow) מאפשרת לנו לקבל החלטות בקוד (באמצעות תנאים) ולחזור על פעולות מספר פעמים (באמצעות לולאות).</p>
        
        <h4>1. אופרטורים לוגיים: && (וגם) ו- || (או)</h4>
        <ul class="tight">
          <li><b><code class="inl">&&</code> (AND)</b> — מחזיר אמת רק אם <b>שני</b> הצדדים נכונים.</li>
          <li><b><code class="inl">||</code> (OR)</b> — מחזיר אמת אם <b>לפחות אחד</b> מהצדדים נכון.</li>
          <li><b><code class="inl">!</code> (NOT)</b> — הופך את הערך הבוליאני: <code class="inl">!true</code> הופך ל-<code>false</code>.</li>
        </ul>

        <h4>2. טריק הקצר הלוגי (Short-Circuit Evaluation)</h4>
        <p>JavaScript מעריכה ביטויים משמאל לימין ומפסיקה לבדוק ברגע שהתוצאה הסופית ברורה. היא מחזירה את <b>הערך עצמו</b> ולא רק true/false:</p>
        <pre><code><span class="t-com">// במקרה של ||: יחזיר את הערך האמיתי (truthy) הראשון שהוא פוגש</span>
<span class="t-key">const</span> username = inputName || <span class="t-str">"אורח"</span>; <span class="t-com">// אם inputName ריק, נקבל "אורח"</span>

<span class="t-com">// במקרה של &&: אם הצד השמאלי שקרי, הוא עוצר ומחזיר אותו מיד</span>
<span class="t-key">const</span> show = isLoggedIn && <span class="t-fn">renderDashboard</span>(); <span class="t-com">// הטאבלט ירוץ רק אם isLoggedIn הוא true</span></code></pre>

        <h4>3. האופרטור השלישוני (Ternary Operator)</h4>
        <p>תחביר מקוצר ונוח להחזרת ערך מתנאי <code>if/else</code> בשורה אחת בלבד: <code>תנאי ? ערך-אם-נכון : ערך-אם-שקרי</code>.</p>
        <pre><code><span class="t-com">// הדרך הארוכה:</span>
<span class="t-key">let</span> status;
<span class="t-ctl">if</span> (score >= <span class="t-num">60</span>) status = <span class="t-str">"עבר"</span>;
<span class="t-ctl">else</span> status = <span class="t-str">"נכשל"</span>;

<span class="t-com">// האופרטור השלישוני:</span>
<span class="t-key">const</span> status = score >= <span class="t-num">60</span> ? <span class="t-str">"עבר"</span> : <span class="t-str">"נכשל"</span>;</code></pre>
        <div class="callout analogy">
          <span class="ico">🔀</span>
          <div class="ct"><b>איך קוראים את זה:</b> "האם הציון גדול או שווה ל-60? אם כן (?) -> תחזיר 'עבר', אחרת (:) -> תחזיר 'נכשל'". סימן השאלה מייצג את השאלה, והנקודתיים מפרידות בין התשובות.</div>
        </div>

        <h4>4. לולאות: for, for...of ו- for...in</h4>
        <ul class="tight">
          <li><b>לולאת <code>for</code> קלאסית</b> — רצה עם אינדקס מספרי מוגדר (i).</li>
          <li><b>לולאת <code>for...of</code></b> — הדרך הטובה ביותר לרוץ על <b>הערכים</b> של מערך (Array) או מחרוזת.</li>
          <li><b>לולאת <code>for...in</code></b> — רצה על <b>המפתחות (Keys)</b> של אובייקט.</li>
        </ul>
        <pre><code><span class="t-key">const</span> list = [<span class="t-str">"א"</span>, <span class="t-str">"ב"</span>, <span class="t-str">"ג"</span>];

<span class="t-com">// מעבר על הערכים:</span>
<span class="t-ctl">for</span> (<span class="t-key">const</span> letter <span class="t-ctl">of</span> list) {
  console.<span class="t-fn">log</span>(letter); <span class="t-com">// הדפסה: "א", "ב", "ג"</span>
}

<span class="t-com">// מעבר על האינדקסים/מפתחות:</span>
<span class="t-ctl">for</span> (<span class="t-key">const</span> index <span class="t-ctl">in</span> list) {
  console.<span class="t-fn">log</span>(index); <span class="t-com">// הדפסה: "0", "1", "2"</span>
}</code></pre>
        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> זכרו ש-<code>for...of</code> נועדה למערכים (מחזירה ערכים) ו-<code>for...in</code> נועדה לאובייקטים (מחזירה מפתחות). שימוש ב-<code>for...in</code> על מערך יחזיר את האינדקסים כמחרוזות ולא כמספרים, ועלול לגרור באגים קשים.</div>
        </div>
      </div>
    `
  },
  functions: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced">קלט (Input)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active highlight-flash" style="border-color:#ff0055;">מפעל עיבוד (Function)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced">פלט (Return)</div>
            </div>
            `,
            text: "<b>שלב 1: פס ייצור וירטואלי</b><br>פונקציה מקבלת נתונים (פרמטרים), מבצעת עליהם שורת פעולות מוגדרות מראש, ופולטת החוצה תוצאה סופית באמצעות המילה <code>return</code>."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">function(x) { return x*2; }</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↓</span><span class="arrow-label">הופך ל...</span></div>
                <div class="flow-node-enhanced active bounce-in">(x) => x*2</div>
            </div>
            `,
            text: "<b>שלב 2: פונקציות חץ (Arrow Functions)</b><br>תחביר מודרני ומקוצר! חוסך לנו את המילה function, ואפילו מוותר על ה-return המפורש אם יש רק שורה אחת (Implicit Return)."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced">פונקציה A<br>(המזמינה)</div>
                <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">→</span><span class="arrow-label">קוראת ל...</span></div>
                <div class="flow-node-enhanced active delay-2">פונקציה B<br>(קולבק)</div>
                <div class="flow-arrow-enhanced delay-3"><span class="arrow-icon">←</span><span class="arrow-label">מחזירה</span></div>
            </div>
            `,
            text: "<b>שלב 3: פונקציות קולבק (Callbacks)</b><br>אפשר להעביר פונקציה כארגומנט לפונקציה אחרת! פונקציה A תקרא לפונקציה B כשתסיים את העבודה."
        },
        {
            html_visual: `
            <div class="stack-visual">
                <div class="stack-item" style="opacity:1;">Inner Function Memory</div>
                <div class="stack-item" style="opacity:0.8; background:var(--primary);">Outer Function Memory</div>
                <div class="stack-item" style="opacity:0.5; background:var(--ink);">Global Memory</div>
            </div>
            `,
            text: "<b>שלב 4: מבט מקדים ל-Scope (הקשר)</b><br>פונקציות זוכרות באיזו סביבה הן נוצרו! פונקציה פנימית תמיד יכולה לגשת למשתנים של הפונקציה שעוטפת אותה. זו המהות של קלוז'רים (Closures)."
        }
    ],

    title: '🎯 פונקציות',
    content: `
      <div class="card-body">
        <p class="lead">פונקציה היא קטע קוד עצמאי בעל שם שמבצע משימה ספציפית ומאפשר לנו למנוע כפילויות קוד.</p>
        
        <h4>1. שלוש הדרכים להגדרת פונקציה</h4>
        <pre><code><span class="t-com">// 1. Declaration (הצהרה) - עוברת Hoisting (ניתן לקרוא לה עוד לפני ההגדרה שלה בקוד)</span>
<span class="t-key">function</span> <span class="t-fn">add</span>(a, b) {
  <span class="t-ctl">return</span> a + b;
}

<span class="t-com">// 2. Expression (ביטוי פונקציה) - נשמרת בתוך משתנה, לא עוברת Hoisting</span>
<span class="t-key">const</span> addExpression = <span class="t-key">function</span>(a, b) {
  <span class="t-ctl">return</span> a + b;
};

<span class="t-com">// 3. Arrow Function (פונקציית חץ) - התחביר המודרני והנפוץ ביותר</span>
<span class="t-key">const</span> addArrow = (a, b) => a + b; <span class="t-com">// החזרה אוטומטית (Implicit Return) בשורה אחת</span></code></pre>
        
        <div class="callout analogy">
          <span class="ico">🍳</span>
          <div class="ct"><b>אנלוגיה:</b> פונקציה היא כמו מתכון להכנת מנה. <b>הפרמטרים</b> הם המצרכים שאתם מכניסים (הקלט), ו-<b>return</b> הוא המנה שיוצאת בסוף (הפלט). אפשר להריץ את אותו מתכון שוב ושוב עם מצרכים שונים.</div>
        </div>

        <h4>2. חוקי הברזל של פונקציות חץ (Arrow Functions)</h4>
        <p>פונקציות חץ מקצרות את הקוד בצורה משמעותית, אך יש להן שני חוקים חשובים:</p>
        <ul class="tight">
          <li>אם יש שורה אחת של ביטוי וללא סוגריים מסולסלים <code>{}</code>, הפונקציה מחזירה את הערך <b>אוטומטית</b> ללא מילת המפתח <code>return</code>.</li>
          <li>אם הוספתם סוגריים מסולסלים <code>{}</code>, ה-Implicit Return מבוטל ו<b>חובה לכתוב <code>return</code> מפורש</b>, אחרת הפונקציה תחזיר <code>undefined</code>.</li>
        </ul>
        <pre><code><span class="t-com">// ✓ מותר: החזרה אוטומטית</span>
<span class="t-key">const</span> double = n => n * <span class="t-num">2</span>;

<span class="t-com">// ✗ באג: אין return ולכן מחזיר undefined!</span>
<span class="t-key">const</span> doubleBug = n => { n * <span class="t-num">2</span> }; 

<span class="t-com">// ✓ מתוקן: הוספנו return מפורש</span>
<span class="t-key">const</span> doubleFixed = n => { <span class="t-ctl">return</span> n * <span class="t-num">2</span> }; </code></pre>

        <h4>3. פרמטרים מיוחדים: Rest Parameters ו-Default Parameters</h4>
        <pre><code><span class="t-com">// ערך ברירת מחדל (Default) למקרה שלא נשלח ארגומנט</span>
<span class="t-key">function</span> <span class="t-fn">greet</span>(name = <span class="t-str">"אורח"</span>) {
  console.<span class="t-fn">log</span>(<span class="t-str">\`שלום \${name}\`</span>);
}

<span class="t-com">// פרמטר שאוסף את כל הארגומנטים הנותרים למערך (Rest ...)</span>
<span class="t-key">function</span> <span class="t-fn">sumAll</span>(...numbers) {
  <span class="t-ctl">return</span> numbers.<span class="t-fn">reduce</span>((sum, n) => sum + n, <span class="t-num">0</span>);
}
<span class="t-fn">sumAll</span>(<span class="t-num">1</span>, <span class="t-num">2</span>, <span class="t-num">3</span>); <span class="t-com">// מחזיר 6</span></code></pre>
        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> לפונקציות חץ (Arrow) <b>אין אובייקט this משל עצמן</b>. הן יורשות את ה-this מהמקום שבו הן הוגדרו (Lexical scope). לכן, אל תשתמשו בפונקציות חץ כשאתם צריכים להגדיר שיטות בתוך אובייקט שמשתמשות ב-<code>this</code>.</div>
        </div>
      </div>
    `
  }
};
