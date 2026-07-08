const contentPart1 = {
  basics: {
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
