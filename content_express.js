const contentExpressClassroom = {
  expressKids: {
    title: "🍔 שרת Express - משל המסעדה (הבסיס)",
    visualizerSteps: [
      {
        html_visual: `<div class="anim-container"><div class="anim-node">לקוח רעב</div><div class="anim-packet move-right" style="background:#ff9800;">הזמנה (Request)</div><div class="anim-node">מלצר (Route)</div></div>`,
        text: "<b>שלב 1: הלקוח מבקש</b><br>הלקוח (הדפדפן) שולח בקשה למסעדה. המלצר (Route) עומד בכניסה ולוקח את ההזמנה."
      },
      {
        html_visual: `<div class="anim-container"><div class="anim-node">מלצר (Route)</div><div class="anim-packet move-right" style="background:#34d399;">מעביר פתק</div><div class="anim-node">שף (Service)</div></div>`,
        text: "<b>שלב 2: העברה למטבח</b><br>המלצר לא מבשל בעצמו! הוא רק מעביר את ההזמנה לשף (Service) שאחראי על הכנת המנה בפועל."
      },
      {
        html_visual: `<div class="anim-container"><div class="anim-node">שף (Service)</div><div class="anim-packet move-right" style="background:#38bdf8;">פותח מקרר</div><div class="anim-node">מקרר (Database)</div></div>`,
        text: "<b>שלב 3: משיכת חומרי גלם והגשה</b><br>השף ניגש למקרר (Database / JSON) ומושך משם את המידע הדרוש. הוא מרכיב את המנה ומחזיר אותה ללקוח (Response)."
      }
    ],
    content: `
      <div class="card-body">
        <p class="lead" style="font-size: 1.1rem; line-height: 1.8;">
        כדי להבין בצורה המיטבית כיצד עובד שרת מודרני, פשוט תדמיינו שהוא <b>מסעדה</b>. כדי שהמסעדה תעבוד בצורה יעילה וחלקה, כל גורם חייב לבצע אך ורק את התפקיד שלו!
        </p>
        <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">התפקידים המרכזיים במסעדה שלנו:</h3>
        <ul>
         <li><b>הלקוח (Client):</b> זהו הדפדפן, או תוכנת Postman, שמגיע רעב ומבקש מידע מהשרת.</li>
         <li><b>המלצר (Router / Route):</b> מקבל את הבקשה הראשונית. הוא בודק לאיזה שולחן הלקוח שייך ומעביר את פתק ההזמנה בדיוק לאחראי הנכון.</li>
         <li><b>השף (Service):</b> איש העבודה הקשה! הוא מקבל את הפתק מהמלצר, מבצע את כל החישובים, הלוגיקה העסקית, ומרכיב את הנתונים.</li>
         <li><b>המקרר (Database):</b> המקום שבו חומרי הגלם (הנתונים עצמם) שמורים. זה יכול להיות קובץ JSON פשוט או מסד נתונים מתקדם.</li>
        </ul>
        <div style="background: rgba(245, 197, 24, 0.05); border-left: 4px solid var(--gold); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
         <h4 style="color: var(--gold);">מדוע חשוב להפריד את הקוד לקבצים שונים?</h4>
         <p>אם המלצר ייקח גם את ההזמנה, גם ירוץ למקרר, גם יבשל וגם יגיש - הוא יקרוס מהר מאוד תחת העומס! מסיבה זו, קוד תקין ומקצועי ב-Express מחולק ל-<code>routes</code> (מלצרים) ו-<code>services</code> (שפים). הפרדת סמכויות זו שומרת על הקוד קריא, מודולרי וניתן לתחזוקה בקלות.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        question: "במשל המסעדה, מי אחראי לגשת למקרר (Database), לשלוף את המידע ולעבד אותו?",
        options: ["הלקוח (Client) - שמביא את המצרכים בעצמו", "המלצר (Route) - שרק מקבל ומעביר את הבקשה", "השף (Service) - שמבצע את העבודה והלוגיקה", "המנהל (index.js) - שמגיש את האוכל"],
        correctAnswer: 2,
        explanation: "השף (Service) הוא הגורם המבצע את הלוגיקה העסקית."
      }
    ]
  },
  expressMiddlewaresClassroom: {
    title: "🕵️‍♂️ שומרי הסף והמארחים (Middlewares)",
    visualizerSteps: [
      {
        html_visual: `<div class="anim-container"><div class="anim-node">בקשת לקוח</div><div class="anim-packet move-right" style="background:#ff0055;">בדיקת תיקים</div><div class="anim-node">שומר 1 (Middleware)</div></div>`,
        text: "<b>שלב 1: שומר הכניסה (Middleware)</b><br>לפני שהלקוח (הבקשה) מגיע למלצר, המאבטח בדלת עוצר אותו לבדיקה ראשונית ומקיפה."
      },
      {
        html_visual: `<div class="anim-container"><div class="anim-node">שומר 1</div><div class="anim-packet move-right" style="background:#00ff88;">אישור כניסה (next)</div><div class="anim-node">מלצר (Route)</div></div>`,
        text: "<b>שלב 2: אישור או דחייה</b><br>אם הכל תקין, השומר מעביר את הבקשה הלאה בעזרת הפונקציה next(). אם לא, הוא זורק שגיאה ומסיים את הבקשה מיד."
      }
    ],
    content: `
      <div class="card-body">
        <p class="lead" style="font-size: 1.1rem; line-height: 1.8;">
        בקשה לעולם אינה מגיעה ישירות לשולחן המסעדה! היא חייבת קודם לעבור דרך מסדרון אבטחה של <b>שומרי סף (Middlewares)</b> שמטרתם לנהל, לסנן ולהגן על השרת.
        </p>
        <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">סוגי שומרים נפוצים במערכת:</h3>
        <ul>
         <li><b>המארח (Global Logger):</b> יושב בכניסה ורושם ביומן הנוכחות כל מי שנכנס. למשל: "הלקוח נכנס בשעה 12:00 וביקש צ'יפס". הוא מופעל באופן גורף על <b>כל</b> הבקשות.</li>
         <li><b>המאבטח הקשוח (Security Auth):</b> בודק האם ללקוח יש תג עובד או כרטיס VIP מתאים. אם אין ללקוח <code>x-auth-token</code> תקין, השומר יחזיר מיד סטטוס 401 (Unauthorized) ויגרש אותו מהמסעדה.</li>
         <li><b>בודק התפריטים (Body Parser):</b> שומר שמוודא שהבקשה כתובה בשפה שהמסעדה מסוגלת להבין (כגון JSON). אם מישהו מדבר אלינו בג'יבריש או בשפה לא נתמכת, הוא נפסל.</li>
        </ul>
        <div style="background: rgba(52, 211, 153, 0.05); border-left: 4px solid var(--emerald); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
         <h4 style="color: var(--emerald);">💡 חוק הברזל של Middlewares</h4>
         <p>כל שומר סף <b>חייב</b> לסיים את עבודתו באחת משתי דרכים: או להחזיר תשובה ולסיים את הבקשה כליל (<code>res.send</code>), או להעביר את הלקוח הלאה לשלב הבא על ידי קריאה לפונקציית <code>next()</code>. אם הוא ישכח לעשות זאת - הלקוח ייתקע בכניסה בהמתנה נצחית (Timeout)!</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        question: "מה קורה בשרת Express אם פונקציית Middleware אינה קוראת ל-next() וגם אינה מחזירה תשובה באמצעות res?",
        options: ["הבקשה תעבור באופן אוטומטי לשלב הבא במסדרון", "השרת יקרוס ויפסיק את פעולתו מיד", "הבקשה 'תיתקע' באוויר ותמתין עד שהיא תיכשל עקב Timeout", "הלקוח יקבל מיד שגיאת 500 (Internal Server Error)"],
        correctAnswer: 2,
        explanation: "ללא קריאה מפורשת ל-next() או החזרת תשובה דרך res, השרת פשוט משאיר את הבקשה בהמתנה אינסופית."
      }
    ]
  },
  expressValidationsClassroom: {
    title: "📝 בקרת איכות במטבח (Validations)",
    visualizerSteps: [
      {
        html_visual: `<div class="anim-container"><div class="anim-node">הזמנה נכנסת</div><div class="anim-packet move-right" style="background:#f7df1e;">בקרת איכות (Joi)</div><div class="anim-node">פסילה / אישור לבישול</div></div>`,
        text: "<b>בדיקת הנתונים הנכנסים</b><br>מנהל המשמרת בודק את הפתק של הלקוח: האם הלקוח רשם גיל שלילי? האם האימייל חסר תווים קריטיים? נתונים שגויים נפסלים ומוחזרת שגיאה."
      }
    ],
    content: `
      <div class="card-body">
        <p class="lead" style="font-size: 1.1rem; line-height: 1.8;">
        לעולם אל תסמכו על קלט הלקוח! לפני שהשף מקבל את הפתק ומתחיל לבשל, מישהו חייב לוודא שהנתונים כתובים נכון ושהם הגיוניים לחלוטין. תהליך זה נקרא <b>ולידציה (Validation)</b>.
        </p>
        <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מה אנחנו בודקים במהלך הוולידציה?</h3>
        <ul>
         <li><b>שדות חובה (Required Fields):</b> אם לקוח מנסה להתחבר למערכת ושכח להזין סיסמה, הבקשה נפסלת על הסף.</li>
         <li><b>סוג הנתונים (Data Type):</b> אם המערכת מצפה לקבל "גיל" בפורמט מספרי, והלקוח הקליד "עשרים" כטקסט - הבקשה נדחית מיד.</li>
         <li><b>חוקים עסקיים (Business Logic):</b> אנו מוודאים חוקים מורכבים יותר, כגון: סיסמה חייבת להיות מורכבת מ-8 תווים לפחות.</li>
        </ul>
        <p>כאשר הוולידציה נכשלת, השרת שלנו מחזיר קוד סטטוס <strong>400 Bad Request</strong>.</p>
      </div>
    `
  },
  expressErrorHandlingClassroom: {
    title: "🚑 צוות ההצלה המרכזי (Error Handling)",
    visualizerSteps: [
      {
        html_visual: `<div class="anim-container"><div class="anim-node" style="border-color:#ff0055;">שגיאה קריטית במטבח</div><div class="anim-packet move-right" style="background:#ff0055;">קריאה (next(err))</div><div class="anim-node" style="border-color:#f7df1e;">מנהל משברים מיוחד</div></div>`,
        text: "<b>זריקת שגיאה לפראמדיק</b><br>כאשר מתרחשת שגיאה בקוד (הסיר נשרף), אנחנו לא נותנים למסעדה לקרוס. השף מעביר את הבעיה למנהל המשברים המרכזי באמצעות קריאה חכמה ל-next עם השגיאה."
      }
    ],
    content: `
      <div class="card-body">
        <p class="lead" style="font-size: 1.1rem; line-height: 1.8;">
        קוד קורס לפעמים. אם לא נטפל בשגיאות בצורה מסודרת, השרת שלנו פשוט יקרוס. לכן עלינו להכין "רשת ביטחון" - <b>צוות הצלה מרכזי (Global Error Handler)</b>.
        </p>
        <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">כיצד פועלת רשת הביטחון שלנו?</h3>
        <ul>
         <li><b>מתווך ה-404 (Route Not Found):</b> זהו המתווך שעומד אחרון בסוף רשימת הראוטים. מחזיר שגיאת נתיב לא נמצא.</li>
         <li><b>הפראמדיק המרכזי (Error Handling Middleware):</b> בניגוד לשומר רגיל, לפראמדיק יש מבנה ייחודי ומדויק של 4 פרמטרים: <code>(err, req, res, next)</code>. הוא תופס את השגיאות ומחזיר הודעת שגיאה מסודרת.</li>
        </ul>
      </div>
    `,
    quizzes: [
      {
        question: "כמה פרמטרים חייבת לקבל פונקציית Middleware כדי ש-Express תזהה אותה כמטפל שגיאות מרכזי?",
        options: ["2", "3", "4", "לא משנה"],
        correctAnswer: 2,
        explanation: "חובה 4 פרמטרים: err, req, res, next."
      }
    ]
  }
};
