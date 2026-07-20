const contentDomClassroom = {
  dom: {
    title: "🎭 ה-DOM: במת התיאטרון המרכזית של הדפדפן",
    visualizerSteps: [
      {
        html_visual: `
          <div class="flow-diagram-enhanced">
            <div class="flow-node-enhanced fade-slide-up" style="border-color:#38bdf8;">document (אולם התיאטרון כולו)</div>
            <div class="flow-arrow-enhanced fade-slide-up delay-1"><span class="arrow-icon">↓</span></div>
            <div class="flow-node-enhanced fade-slide-up delay-2">&lt;html&gt; (הבמה והמסדרונות)</div>
            <div class="flow-arrow-enhanced fade-slide-up delay-3"><span class="arrow-icon">↓</span></div>
            <div style="display:flex; gap:10px; width:100%; justify-content:center;" class="fade-slide-up delay-4">
              <div class="flow-node-enhanced">&lt;head&gt; (מאחורי הקלעים, הגדרות)</div>
              <div class="flow-node-enhanced active">&lt;body&gt; (שחקנים ותפאורה שרואים)</div>
            </div>
          </div>
        `,
        text: "<b>שלב 1: הכרת במת התיאטרון (DOM Tree)</b><br>כאשר הדפדפן נטען, הוא מתרגם את קוד ה-HTML המילולי שלנו למבנה חי דמוי עץ הנקרא DOM. דמיינו בניין תיאטרון: אובייקט ה-<code>document</code> הוא הבניין כולו, ה-<code>&lt;html&gt;</code> היא הבמה המרכזית, ותגית ה-<code>&lt;body&gt;</code> היא המרחב שבו נמצאים כל השחקנים (האלמנטים) שהקהל אשכרה יראה."
      },
      {
        html_visual: `
          <div class="flow-diagram-enhanced">
            <div class="flow-node-enhanced typewriter" style="border-color:#ff0055;">querySelector('.actor')</div>
            <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
            <div class="flow-node-enhanced highlight-flash">מכוון זרקור לבמה...</div>
            <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
            <div class="flow-node-enhanced active bounce-in">&lt;div class="actor"&gt;</div>
          </div>
        `,
        text: "<b>שלב 2: זרקור ממוקד על שחקן (שליפת אלמנטים)</b><br>אנו משמשים כבמאי ההצגה. בעזרת פקודות כשליפות כמו <code>querySelector</code>, אנו סורקים את קהל האלמנטים ומכוונים את זרקור הבמה לשחקן ספציפי כדי שנוכל לתת לו פקודות חדשות בהמשך המחזה."
      },
      {
        html_visual: `
          <div class="flow-diagram-enhanced scale-up">
            <div class="flow-node-enhanced">createElement('div')</div>
            <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
            <div class="flow-node-enhanced" style="border-color:#ffd700;">div.textContent = 'שלום!'</div>
            <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
            <div class="flow-node-enhanced active">appendChild(div)</div>
          </div>
        `,
        text: "<b>שלב 3: חזרות גנרליות מאחורי הקלעים (יצירת אלמנטים דינמית)</b><br>תהליך יצירת אלמנט חדש כולל שלושה צעדים קפדניים: 1. יצירת השחקן בחדר החזרות (בזיכרון בלבד). 2. הלבשה וטקסט - הגדרת מראה ותוכן. 3. פקודת <code>appendChild</code> - שליחת השחקן המעוצב היישר אל הבמה האמיתית לקבלת תשואות הקהל."
      },
      {
        html_visual: `
          <div class="flow-diagram-enhanced">
            <div class="flow-node-enhanced pulse-glow" style="border-color:#ff0055; border-radius:50%; width:80px; height:80px; display:flex; align-items:center; justify-content:center;">לחיצה! 🖱️</div>
            <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">→</span><span class="arrow-label">Event Listener</span></div>
            <div class="flow-node-enhanced active delay-2">פונקציית<br>Handler</div>
            <div class="flow-arrow-enhanced delay-3"><span class="arrow-icon">→</span></div>
            <div class="flow-node-enhanced delay-4" style="border-color:#00cc88;">התפאורה משתנה בזמן אמת</div>
          </div>
        `,
        text: "<b>שלב 4: תגובת הקהל והמשתמשים (האזנה לאירועים - Events)</b><br>אנו מרכיבים 'מכשירי האזנה' על השחקנים. כאשר מתרחש אירוע - למשל, המשתמש לוחץ על כפתור - המאזין קולט את האות ומפעיל פונקציית ביצוע (Handler) אשר משנה את התנהגות השחקן או מעדכנת את התפאורה באופן מיידי."
      }
    ],
    content: `
      <div class="card-body">
        <p class="lead">מודל האובייקטים של המסמך (DOM - Document Object Model) הוא למעשה ממשק התכנות אשר דרכו הדפדפן מציג וקורא את קוד ה-HTML של הדף. מנקודת המבט של שפת JavaScript, ה-DOM הופך אותנו ל<b>במאים הראשיים</b>. מוקנית לנו הסמכות לבחור את שחקני הבמה, להקשיב לדרישות הקהל, ולהורות על ביצוע החלפת תפאורות באופן סנכרוני לחלוטין וללא שום צורך ברענון כפוי של העמוד האינטרנטי כולו.</p>
        
        <h4 style="margin-top: 30px; border-bottom: 2px solid #38bdf8; padding-bottom: 5px;">1. ליהוק שחקני הבמה: מנגנוני בחירת אלמנטים (Selecting Elements)</h4>
        <p>בכדי לאפשר מתן הוראה אקטיבית לשחקן כלשהו, חובת הבמאי לזמן אותו קודם כל בשמו הפרטי או בתפקיד המוגדר שלו. נהוג לשמור את ההפניה אל השחקן בתוך משתנה קבוע (למשל נשתמש ב-<code>const</code>) על מנת לאפשר פנייה חוזרת ונשנית אליו ללא קריאות חוזרות ועקרות לעץ ה-DOM.</p>
        <pre><code><span class="t-com">// ליהוק לפי מזהה ייחודי (ID) - איתור שחקן ראשי בודד וייחודי</span>
const heroElement = document.<span class="t-fn">getElementById</span>(<span class="t-str">"main-hero"</span>);

<span class="t-com">// ליהוק מודרני מבוסס סלקטור CSS (מחזיר אך ורק את ההתאמה הראשונית שנקרית בדרכו)</span>
const primaryBox = document.<span class="t-fn">querySelector</span>(<span class="t-str">".box"</span>);

<span class="t-com">// ליהוק מערכתי של קבוצת שחקנים בתפקיד זהה (מניב אוסף פריטים מסוג NodeList)</span>
const allBoxElements = document.<span class="t-fn">querySelectorAll</span>(<span class="t-str">".box"</span>);</code></pre>

        <div class="callout analogy">
          <span class="ico">🎭</span>
          <div class="ct"><b>האנלוגיה הפדגוגית שלנו:</b> הפונקציה <code>getElementById</code> היא בבחינת קריאה לשחקן ספציפי בשמו הפרטי המדויק (למשל, האדון "רומיאו"). לעומת זאת, <code>querySelector</code> וקרובת המשפחה שלה <code>querySelectorAll</code>, קוראות לשחקנים המשתתפים במחזה בהתאם לקודי הלבוש והתפקידים שלהם (לדוגמה, "קרא לכל קבוצת החיילים העוטים את שריון האבירים" או "זמן רק את החייל הראשון משמאל").</div>
        </div>

        <h4 style="margin-top: 30px; border-bottom: 2px solid #38bdf8; padding-bottom: 5px;">2. הקשבה מתודית לקהל: רישום מאזינים לאירועים (Events)</h4>
        <p>דף אינטרנט חי ונושם הוא כזה המגיב באורח פלא לפעולות המשתמש. אירועים (Events) הם המעשים הקונקרטיים שהמשתמש יוזם - קליק של עכבר, הקלדה נמרצת במקלדת, גלילת המסך אל התהום או ניסיון לשלוח טופס מקוון. תפקידנו הוא להצמיד אלמנט נבחר ל"מאזין קשוב" (Event Listener), אשר ממתין בדממה לפעולה המיועדת, ועם התרחשותה - מזניק באחת פונקציית תגובה העונה לשם <b>Handler</b>.</p>
        <pre><code>const loginForm = document.<span class="t-fn">querySelector</span>(<span class="t-str">"#login-form"</span>);

loginForm.<span class="t-fn">addEventListener</span>(<span class="t-str">"submit"</span>, (event) => {
  <span class="t-com">// הקפאת הפעולה הרפלקסיבית של הדפדפן (כגון הריענון המציק המלווה כל שליחת טופס קלאסית)</span>
  event.<span class="t-fn">preventDefault</span>();
  console.<span class="t-fn">log</span>(<span class="t-str">"המשתמש בקהל דרש שליחה, אולם אנו נבצע פעולת עדכון דינמית במקום להתרענן!"</span>);
});</code></pre>

        <h4 style="margin-top: 30px; border-bottom: 2px solid #38bdf8; padding-bottom: 5px;">3. הבמאי האסטרטג: טכניקת הזרקת האירועים (Event Delegation)</h4>
        <p>חיבור מאזין פרטני לכל שחקן המהווה חלק מקהל או מרשימה ארוכה מהווה זלזול במשאבי העיבוד של הדפדפן. שיטת "האצלת הסמכויות" היא הגישה ההגיונית: נקצה מאזין רב-עוצמה <b>אחד ויחיד</b> על מנהל הבמה (האלמנט ההורה האוחז בהם), וכאשר אירוע לחיצה מבעבע כלפי מעלה, נבצע וידוא זהות דקדקני לגבי זהות השחקן (תגית הילד) המדויק שנלחץ באמצעות חקירת מאפיין ה-<code>event.target</code>.</p>
        <pre><code>const userListContainer = document.<span class="t-fn">querySelector</span>(<span class="t-str">".users-ul"</span>);

userListContainer.<span class="t-fn">addEventListener</span>(<span class="t-str">"click"</span>, (event) => {
  <span class="t-com">// ביצוע חקירה - האם הפגיעה הייתה ממוקדת על אחת מתגיות הילד מסוג LI?</span>
  if (event.target.tagName === <span class="t-str">"LI"</span>) {
    console.<span class="t-fn">log</span>(<span class="t-str">"זיהוי מושלם! הנה התוכן שנלחץ:"</span>, event.target.textContent);
  }
});</code></pre>

        <h4 style="margin-top: 30px; border-bottom: 2px solid #38bdf8; padding-bottom: 5px;">4. חשיפת מערכה חדשה: יצירה ועיצוב דינמיים של אלמנטים מותאמים אישית</h4>
        <p>מעגל החיים המלא של יצירת אלמנט דורש השקעה יתרה מאחורי הקלעים טרם חשיפתו באור הזרקורים. ראשית מגלפים בעדינות את התגית בתוככי הזיכרון, מתאימים לה את הגלימה באמצעות מאפיין ה-<code>classList</code>, ממלאים את קרביה בתוכן עשיר, ולבסוף – באקט רב רושם – נועצים אותה בבשר המסך אל עבר הקהל.</p>
        <pre><code><span class="t-com">// 1. חדר החזרות הנסתר: יצירת תגית "גולמית" בזיכרון המערכת (היא עדיין בלתי נראית למתבונן)</span>
const notificationMsg = document.<span class="t-fn">createElement</span>(<span class="t-str">"div"</span>);

<span class="t-com">// 2. הלבשה מוקפדת: הצבת הטקסט. חובה להשתמש ב-textContent כדי לדכא ניסיונות פריצה בסגנון XSS</span>
notificationMsg.textContent = <span class="t-str">"הפקודה העדכנית עברה את המבחן והושלמה במלואה!"</span>;

<span class="t-com">// 3. מערך עיצוב אקטיבי: ויסות מעמקי המחלקות (CSS Classes)</span>
notificationMsg.classList.<span class="t-fn">add</span>(<span class="t-str">"alert-success"</span>);    <span class="t-com">// הטמעת מראה הניצחון</span>
notificationMsg.classList.<span class="t-fn">remove</span>(<span class="t-str">"hidden"</span>);        <span class="t-com">// הפשטת שכבת ההסתרה</span>
notificationMsg.classList.<span class="t-fn">toggle</span>(<span class="t-str">"blink"</span>);         <span class="t-com">// החלפת מצבים דינמית בהינף החלטה אחת</span>

<span class="t-com">// 4. הרמת המסך לחשיפה: שילוב האלמנט המעוצב לתוך אובייקט הגוף המרכזי שיוצג לראווה</span>
document.body.<span class="t-fn">appendChild</span>(notificationMsg);</code></pre>
      </div>
    `,
    quizzes: [
      {
        question: "במטאפורת התיאטרון שלנו, מהי הפעולה המקבילה לקריאה לשחקן על פי סגנון הלבוש שלו כדי ללהק אותו לתפקיד (פעולה המחזירה אך ורק את הפריט הראשון התואם למפרט)?",
        options: [
          "document.getElementById",
          "document.querySelector",
          "document.createElement",
          "document.appendChild"
        ],
        correctAnswer: 1,
        explanation: "הפונקציה הממוקדת querySelector מאתרת ומשייכת לעצמה את הפריט הראשון בלבד שמתאים במדויק לכלל ה-CSS (לבוש/תפקיד) שמסרנו לה, בדומה לליהוק מהיר ונוקשה המבוסס על קריטריון חזותי אחיד."
      },
      {
        question: "מהו ההיגיון המנחה מאחורי שימוש בגישת 'האצלת סמכויות' (Event Delegation) המציבה מאזין יחיד על אלמנט אב, חלף עטיפת כל פריט פרטני במאזין משלו?",
        options: [
          "מכיוון שחוקי השפה אוסרים מכל וכל הצבת מאזין על אלמנטים שנבראו בזמן ריצה באמצעות JavaScript.",
          "מתודולוגיה זו מאלצת את המשתמש לייצר לחיצה מתואמת על פני מספר אלמנטים במקביל.",
          "זהו מהלך החוסך משאבי זיכרון יקרים מאין כמותם, ומבטיח טיפול עקיב גם באלמנטים עתידיים שצפויים להיוולד לרשימה מתוך הקוד.",
          "הטכניקה המדוברת דורסת הלכה למעשה את הצורך הבסיסי להשתמש בפקודת המניעה event.preventDefault."
        ],
        correctAnswer: 2,
        explanation: "הטמעת מאזין בודד וחזק באלמנט האב - קרי, מנהל הבמה הרחבה - חוסכת צריכת זיכרון בלתי מבוקרת, ויודעת באופן מולד ליירט לחיצות המכוונות גם אל ילדים שטרם הופיעו כלל עת הדף נטען לראשונה במסוף של המשתמש."
      },
      {
        question: "בשלב העיבוד הפנימי של 'שחקן' רענן טרם השלכתו אל הבמה הציבורית, אנו קובעים את ליבת התוכן שלו. מדוע נתעדף נחרצות שימוש במאפיין textContent על פני עמיתו הוותיק innerHTML?",
        options: [
          "textContent מהיר יותר בצורה דרמטית ומונע פריצות אבטחה חמורות (XSS) מעצם כך שהוא פוסל לחלוטין פירוש של תגיות HTML קודיות.",
          "innerHTML כבר הוצא משימוש לחלוטין, ואינו זוכה עוד לתמיכה דפדפנית באף פלטפורמה מודרנית בשוק.",
          "רק textContent מאפשר לנו כמתכנתים לשזור תגיות עיצוב של CSS היישר אל תוך גוף המחרוזת.",
          "הבחירה ביניהם שרירותית לחלוטין ואין שום הבדל אמיתי, מעבר להעדפתו הסגנונית הטהורה של הבמאי."
        ],
        correctAnswer: 0,
        explanation: "textContent מתייחס תמיד לקלט שמגיע כטקסט קשיח, קר וטהור - בדרך זו הוא לעולם לא יתפתה להריץ סקריפטים זדוניים שמשתמש עויין עשוי להזריק דרך ממשק המשתמש, מה שמציב חומה בצורה כנגד מגוון התקפות XSS מתוחכמות."
      }
    ]
  }
};
