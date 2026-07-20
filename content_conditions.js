const contentConditionsClassroom = {
  conditions: {
    title: '🚦 תנאים (Conditions) - הסלקטור של הקוד',
    visualizerSteps: [
      {
        html_visual: `<div class="flow-diagram-enhanced"><div class="flow-node-enhanced" style="border-color:#ff0055;">גיל >= 18?</div><div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div><div class="flow-node-enhanced active" style="background:#00cc88;">כנס (true)</div></div>`,
        text: "<b>שלב 1: התנאי הבסיסי (if)</b><br>תנאי הוא כמו סלקטור במועדון. הוא עומד בכניסה ושואל שאלת כן/לא. אם התשובה היא כן (true), הוא פותח את הדלת לקוד הפנימי שלנו. אם לא, הדלת נשארת נעולה."
      },
      {
        html_visual: `<div class="flow-diagram-enhanced"><div class="flow-node-enhanced">VIP</div><div class="flow-arrow-enhanced">||</div><div class="flow-node-enhanced">כרטיס</div><div class="flow-arrow-enhanced">→</div><div class="flow-node-enhanced active" style="background:#00cc88;">אמת!</div></div>`,
        text: "<b>שלב 2: אופרטור או (|| - OR)</b><br>סלקטור רגוע: מספיק שתהיה לך תכונה אחת חיובית. VIP <b>או</b> כרטיס. מספיק שאחד הצדדים הוא true, והתשובה כולה היא true. הראשון שמנצח פותח את הדלת."
      },
      {
        html_visual: `<div class="flow-diagram-enhanced"><div class="flow-node-enhanced">מעל 18</div><div class="flow-arrow-enhanced">&&</div><div class="flow-node-enhanced">תעודה</div><div class="flow-arrow-enhanced">→</div><div class="flow-node-enhanced active" style="background:#00cc88;">אמת!</div></div>`,
        text: "<b>שלב 3: אופרטור וגם (&& - AND)</b><br>סלקטור קשוח: חובה להציג <b>גם וגם</b>. אם אתה מעל 18 אבל אין לך תעודה - אי אפשר להיכנס. כל הצדדים חייבים להיות true כדי לקבל אמת."
      },
      {
        html_visual: `<div class="anim-container"><div class="anim-node" style="border-color:#38bdf8;">isAdult ? "Beer" : "Juice"</div></div>`,
        text: "<b>שלב 4: אופרטור שלישוני (Ternary)</b><br>קיצור דרך פדגוגי! שאלה (?) -> תשובה אם כן (:) -> תשובה אם לא. אנחנו כותבים את כל תהליך ההחלטה בשורה אחת חכמה."
      }
    ],
    content: `
      <div class="card-body">
        <p class="lead">ברוכים הבאים למועדון של JavaScript! כדי שהקוד שלנו יהיה חכם, הוא חייב לדעת לקבל החלטות על בסיס מצבים משתנים. תנאים הם המנגנון שמאפשר לקוד שלנו לבחור מסלול.</p>
        
        <h4>1. אופרטורים לוגיים: הסלקטורים שלנו בכניסה</h4>
        <p>כאשר אנחנו רוצים לחבר כמה שאלות יחד, אנחנו משתמשים באופרטורים (מחברים) לוגיים:</p>
        <ul class="tight">
          <li><b><code class="inl">&&</code> (וגם - AND)</b> — <b>שני</b> התנאים חייבים להתקיים. <i>"אתה חייב להיות מעל גיל 18 <b>וגם</b> רשום במערכת."</i> אם אחד מהם שקר (false), הכל נופל.</li>
          <li><b><code class="inl">||</code> (או - OR)</b> — <b>לפחות אחד</b> מהתנאים חייב להתקיים. <i>"תיכנס אם יש לך סיסמה <b>או</b> התחברת מגוגל."</i> ברגע שיש אמת אחת (true), התנאי מאושר.</li>
          <li><b><code class="inl">!</code> (לא - NOT)</b> — הופך את המצב למצב ההפוך. <i>"תיכנס רק אם אתה <b>לא</b> חסום (!isBlocked)."</i></li>
        </ul>

        <h4>2. טריק "הקצר הלוגי" (Short-Circuit)</h4>
        <p>שפת JavaScript היא חכמה וחסכונית. היא קוראת משמאל לימין ומפסיקה ברגע שהיא מבינה מה התשובה הסופית. זה נקרא "קצר לוגי" כי אנחנו 'מקצרים' את הבדיקה.</p>
        <div class="callout analogy">
          <span class="ico">⚡</span>
          <div class="ct"><b>האנלוגיה שלנו:</b> באופרטור <code>||</code>, היא מחפשת את ה"אמת" הראשונה ולוקחת אותה. באופרטור <code>&&</code>, היא מחפשת את ה"שקר" הראשון ונעצרת מיד (כי אין טעם להמשיך לבדוק אם נכשלנו).</div>
        </div>
        <pre><code><span class="t-com">// מציאת האמת הראשונה (||) - מושלם להגדרת ברירת מחדל</span>
<span class="t-key">const</span> userName = userInput || <span class="t-str">"אורח אלמוני"</span>; 

<span class="t-com">// העצירה השקרית (&&) - ביצוע פעולה רק אם בטוח להמשיך</span>
isLoggedIn && <span class="t-fn">showDashboard</span>(); </code></pre>

        <h4>3. האופרטור השלישוני (Ternary Operator)</h4>
        <p>תחביר אלגנטי שמחליף בלוק ארוך של <code>if/else</code>.</p>
        <pre><code><span class="t-key">const</span> drink = (age >= <span class="t-num">18</span>) ? <span class="t-str">"בירה 🍺"</span> : <span class="t-str">"מיץ פטל 🧃"</span>;</code></pre>
      </div>
    `,
    quizzes: [
      {
        question: "איך שפת JavaScript מתנהגת כשהיא פוגשת באופרטור || (או)?",
        options: ["בודקת תמיד את כל התנאים", "נעצרת כשהיא מוצאת את השקר הראשון", "נעצרת כשהיא מוצאת את האמת (true) הראשונה", "מתעלמת ממשתנים ריקים"],
        correctAnswer: 2,
        explanation: "זהו הקצר הלוגי! מספיקה אמת אחת."
      }
    ]
  },
  loops: {
    title: '🔄 לולאות (Loops) - המסוע של המפעל',
    visualizerSteps: [
      {
        html_visual: `<div class="timeline-visual slide-in-right"><div class="timeline-step"><div class="timeline-dot"></div><span class="timeline-label">i=0</span></div><div class="timeline-line"></div><div class="timeline-step"><div class="timeline-dot"></div><span class="timeline-label">i=1</span></div><div class="timeline-line"></div></div>`,
        text: "<b>שלב 1: לולאת for (מסוע מתוכנת)</b><br>פס ייצור מבוקר. מתחילים מנקודה, עוצרים בזמן מסוים."
      }
    ],
    content: `
      <div class="card-body">
        <p class="lead">לולאות מאפשרות לנו לבצע את אותה פעולה שוב ושוב באופן אוטומטי.</p>
        
        <h4>1. לולאת for הקלאסית: מסוע עם תוכנית</h4>
        <pre><code><span class="t-ctl">for</span> (<span class="t-key">let</span> i = <span class="t-num">0</span>; i < <span class="t-num">5</span>; i++) {
  console.<span class="t-fn">log</span>(<span class="t-str">"הדפסה מספר "</span> + i); 
}</code></pre>

        <h4>2. לולאות חכמות למערכים: for...of</h4>
        <div class="callout analogy">
          <span class="ico">📦</span>
          <div class="ct"><b>מערך הוא כמו ארגז.</b> במקום לספור, יש לולאה ששולפת פריטים אוטומטית.</div>
        </div>
        <pre><code><span class="t-key">const</span> fruits = [<span class="t-str">"🍎"</span>, <span class="t-str">"🍌"</span>, <span class="t-str">"🍇"</span>];
<span class="t-ctl">for</span> (<span class="t-key">const</span> fruit <span class="t-ctl">of</span> fruits) {
  console.<span class="t-fn">log</span>(<span class="t-str">"אני אוכל "</span> + fruit);
}</code></pre>
      </div>
    `,
    quizzes: [
      {
        question: "איזה לחצן חירום מפסיק את הסיבוב הנוכחי וקופץ מיד לסיבוב הבא?",
        options: ["stop", "break", "continue", "skip"],
        correctAnswer: 2,
        explanation: "continue מורה לדלג על שאר הקוד בסיבוב הנוכחי ולהמשיך."
      }
    ]
  }
};
