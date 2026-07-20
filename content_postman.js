const contentPostmanClassroom = {
  postmanGuide: {
    title: "📭 המדריך השלם ל-Postman: אפליקציית המשלוחים של השרת",
    visualizerSteps: [
      {
        html_visual: `
        <div class="flow-diagram-enhanced scale-up">
            <div class="flow-node-enhanced">לקוח (Postman)</div>
            <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">בקשת HTTP (הזמנה)</span></div>
            <div class="flow-node-enhanced active">מסעדה (שרת)</div>
        </div>
        `,
        text: "<b>שלב 1: הלקוח (אתה) מבקש</b><br>תחשוב על עצמך כאדם שרעב ורוצה להזמין פיצה. תוכנת ה-Postman היא בעצם אפליקציית המשלוחים (כמו Wolt) – היא לוקחת את הבקשה שניסחנו (למשל, GET) ושולחת אותה בדיוק לכתובת של המסעדה (השרת)."
      },
      {
        html_visual: `
        <div class="flow-diagram-enhanced slide-in-right">
            <div class="flow-node-enhanced">לקוח (Postman)</div>
            <div class="flow-arrow-enhanced"><span class="arrow-icon">...</span><span class="arrow-label">ממתין לתשובה</span></div>
            <div class="flow-node-enhanced active bounce-in" style="border-color:#ff0055;">מסעדה (שרת)<br>מכין את המנה</div>
        </div>
        `,
        text: "<b>שלב 2: השרת מקבל ומעבד</b><br>הבקשה הגיעה למטבח של המסעדה. השף (הקוד שלנו) קורא את ההזמנה, בודק במזווה (מסד הנתונים), ומתחיל לבשל את התשובה בקפידה."
      },
      {
        html_visual: `
        <div class="flow-diagram-enhanced fade-slide-up">
            <div class="flow-node-enhanced active ripple-out">לקוח (Postman)<br>האוכל הגיע!</div>
            <div class="flow-arrow-enhanced"><span class="arrow-icon">←</span><span class="arrow-label">תגובה (200 OK)</span></div>
            <div class="flow-node-enhanced">מסעדה (שרת)</div>
        </div>
        `,
        text: "<b>שלב 3: התשובה חוזרת ללקוח</b><br>השרת סיים! הוא אורז את התשובה (Response) ושולח אותה חזרה למזמין. ב-Postman נראה את החבילה למטה – סטטוס 200 OK אומר שהמשלוח הגיע בשלמותו וחם."
      }
    ],
    content: `
      <div class="card-body pedagogical-extreme">
        <p class="lead">כאשר השרת שלנו מוכן, הוא יושב ומחכה לבקשות בדיוק כמו מסעדה שפתחה את דלתותיה. אבל מה אם אין לנו עדיין אתר או אפליקציה שישלחו אליו בקשות נוחות מהצד השני? כאן נכנסת תוכנת <strong>Postman</strong> לפעולה.</p>
        
        <h4>למה אנחנו צריכים את Postman?</h4>
        <p>Postman מאפשר לנו למלא את תפקיד ה"לקוח" (Client) באופן ידני לחלוטין. אנחנו יכולים לבנות בקשות HTTP מדויקות, לשלוח אותן ישירות לשרת שלנו, ולבדוק אם המטבח מתפקד כמו שצריך - כל זאת הרבה לפני שאנחנו פותחים את המסעדה לקהל הרחב ומשלבים חזית (Frontend).</p>
        
        <div class="callout analogy">
          <span class="ico">🍔</span>
          <div class="ct"><b>אנלוגיה מתמשכת - אפליקציית המשלוחים:</b><br>
          אם השרת הוא המסעדה והנתיבים (Routes) הם המלצרים, Postman הוא אפליקציית ה-Wolt שלך. אתה בוחר מה סוג הפעולה מול התפריט (Method), לאיזה סניף ספציפי לשלוח (URL), מה בדיוק אתה רוצה שיהיה בתוספות (Body), ואיזה כרטיס מועדון או תג VIP אתה מציג לשומר בשער (Headers).</div>
        </div>

        <h4>ארבעת עמודי התווך של כל בקשה:</h4>
        <ol class="step-by-step-list">
          <li><strong>סוג הפעולה (HTTP Method):</strong> התפריט הנגלל הצר משמאל לשורת הכתובת. 
            <ul>
              <li><code>GET</code> - תן לי מידע.</li>
              <li><code>POST</code> - קח מידע חדש.</li>
              <li><code>PUT</code> - עדכן מידע קיים.</li>
              <li><code>DELETE</code> - מחק מידע.</li>
            </ul>
          </li>
          <li><strong>כתובת היעד (URL):</strong> שורת החיפוש הארוכה והמרכזית. כאן נכתוב לאן בדיוק הבקשה הולכת. למשל: <code>http://localhost:3000/api/users</code>.</li>
          <li><strong>המעטפה הסגורה (Body):</strong> בבקשות <code>POST</code> ו-<code>PUT</code>, כאן נכניס את הנתונים שלנו. <em>פעולה קריטית לשמירה:</em> תמיד בחרו בלשונית ה-<b>raw</b> ואז שנו את הפורמט מ-Text ל-<b>JSON</b> מהתפריט הכחול הקטן בקצה. שם תכתבו את האובייקט שלכם.</li>
          <li><strong>סודות וכותרות (Headers):</strong> כאן נוסיף אסימוני אבטחה (Tokens) וכרטיסי זיהוי כדי שהשומרים (Middlewares) בכניסה לשרת יתנו לנו לעבור. עמודות <code>Key</code> ו-<code>Value</code>.</li>
        </ol>

        <h4>מה מחפשים בחלון התגובה התחתון?</h4>
        <ul class="tight">
          <li><b>קוד הסטטוס (Status Code):</b> מופיע בצד ימין למעלה של אזור התגובה. 
            <br>🟩 ירוק (200-299) - מסמל הצלחה מוחלטת! ההזמנה התקבלה והכל בוצע.
            <br>🟨 צהוב (400-499) - טעות של הלקוח. טעינו ב-URL, שלחנו Body לא חוקי.
            <br>🟥 אדום (500+) - קריסה מוחלטת בשרת. 
          </li>
          <li><b>זמן תגובה (Time):</b> כמה זמן עבר מהרגע שלחצנו ועד שהשרת ענה.</li>
          <li><b>גוף התגובה (Response Body):</b> הנתונים עצמם שהשרת החזיר לנו.</li>
        </ul>

        <div class="callout warn">
          <span class="ico">⚠️</span>
          <div class="ct"><b>כשהשרת נתקע במצב טעינה:</b> אם לחצתם Send וה-Postman ממשיך לטעון ולטעון לנצח מבלי להחזיר כלל תשובה (Infinite Loading), זהו סימן כמעט ודאי ששכחתם לכתוב פקודת <code>res.send()</code> או <code>next()</code> בתוך נתיב הקוד של השרת שלכם!</div>
        </div>
      </div>
    `,
    quizzes: [
      {
        question: "מדוע מפתחי צד-שרת (Backend) מסתמכים באופן יומיומי על תוכנת Postman?",
        options: [
          "כדי לכתוב את קוד השרת עצמו במקום להשתמש ב-VS Code.",
          "כדי לדמות לקוח וירטואלי ששולח בקשות HTTP ולבדוק את תקינות השרת לפני בניית ה-Frontend.",
          "כדי לעצב את ממשק המשתמש הגרפי (UI) של האתר עבור הלקוחות.",
          "כדי לאחסן את מסד הנתונים בענן מאובטח."
        ],
        correctAnswer: 1,
        explanation: "Postman משמש כ'לקוח וירטואלי'. הוא מעניק לנו שליטה מלאה לבנות ולשלוח כל סוג של בקשה לשרת ולראות בדיוק כיצד השרת מגיב, מבלי שנצטרך להשקיע זמן בבניית אתר אינטרנט או אפליקציה אמיתיים."
      },
      {
        question: "אתה רוצה לשלוח בקשה שמוסיפה משתמש חדש לחלוטין למערכת. מהם שני השלבים הקריטיים שיש לבצע בממשק של Postman?",
        options: [
          "לבחור GET, ולכתוב את פרטי המשתמש ישירות בתוך שורת ה-URL למעלה.",
          "לבחור POST, להיכנס ללשונית Body, לבחור באופציית raw ו-JSON, ולהזין שם את אובייקט פרטי המשתמש.",
          "לבחור DELETE, ולהכניס את כל פרטי המשתמש תחת לשונית Headers.",
          "לבחור PUT, וללחוץ על Send בלי להוסיף אף נתון לבקשה."
        ],
        correctAnswer: 1,
        explanation: "על מנת להוסיף נתונים חדשים לשרת (Creation), חובה להשתמש בשיטת POST, ולהעביר את הנתונים בצורה מאובטחת ומסודרת בתוך גוף הבקשה (Body) תוך שימוש בפורמט הסטנדרטי של JSON."
      },
      {
        question: "במהלך העבודה קיבלת שגיאה 401 Unauthorized מנתיב מוגן בשרת שניסית לגשת אליו. כיצד תפתור ותתקן זאת באמצעות Postman?",
        options: [
          "אשנה את סוג הבקשה שלי ל-PUT, כי אולי השרת מצפה לעדכון.",
          "אוסיף את האסימון החסר (Token) בתוך מערך בתוך לשונית ה-Body.",
          "אעבור ישירות ללשונית Headers, אוסיף שם מפתח (Key) תואם כמו x-auth-token ואדביק בעמודת ה-Value את האסימון התקין שלי.",
          "אכתוב את האסימון כטקסט פשוט בסוף שורת ה-URL למעלה."
        ],
        correctAnswer: 2,
        explanation: "שומרי סף (Middlewares) בשרת מתוכנתים לקרוא אסימוני אבטחה מתוך ה-Headers של הבקשה. זהו המקום התקני והבטוח להעביר בו הרשאות סודיות."
      },
      {
        question: "לחצת על כפתור ה-Send ב-Postman ושמת לב שהבקשה טוענת וטוענת ללא הפסקה בחלק התחתון (Infinite Loading). מהי הסבירות הגבוהה ביותר לתקלה זו?",
        options: [
          "חיבור האינטרנט שלך התנתק לפתע.",
          "השרת שלך סיים את הטיפול, אך שכח להחזיר תגובה סופית ללקוח באמצעות \`res.send()\` או להעביר הלאה לפונקציה הבאה עם \`next()\`, ולכן הבקשה נותרה תלויה לנצח באוויר.",
          "כתבת את ה-URL עם שגיאת כתיב קטנה.",
          "ה-Body ששלחת מכיל יותר מדי נתונים והשרת קורס בשקט."
        ],
        correctAnswer: 1,
        explanation: "ב-Express.js, אם השרת מקבל את הבקשה אל תוך פונקציה אך אינו מסיים את הטיפול בה במפורש (באמצעות קריאת פונקציית תגובה ללקוח או דילוג למתווך הבא), הלקוח ימשיך להמתין ולהמתין עד שהקשר ינותק עקב Time Out."
      }
    ]
  }
};
