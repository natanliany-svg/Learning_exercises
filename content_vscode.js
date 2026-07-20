const contentVsCodeClassroom = {
  keyboard: {
    title: "⚡ קיצורי דרך ב-VS Code: טיסה במהירות האור",
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced pulse-glow" style="border-color:#38bdf8; border-radius:10px;">מקלדת (תא הטייס)</div>
                <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active delay-2" style="border-color:#ff0055;">קוד נכתב במהירות כפולה</div>
            </div>
            `,
            text: "<b>שלב 1: נטישת העכבר</b><br>כמו טייס קרב בקוקפיט, העכבר הוא הסחת דעת. המטרה היא להשאיר את הידיים על המקלדת ולהפעיל את תוכנת VS Code בעזרת פקודות מערכת ישירות."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#ffd700;">Ctrl + P</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">טלפורטציה</span></div>
                <div class="flow-node-enhanced active bounce-in">קובץ index.html</div>
            </div>
            `,
            text: "<b>שלב 2: ניווט על-חללי (Quick Open)</b><br>במקום לנבור בעץ התיקיות, לוחצים Ctrl+P, מקלידים שתיים-שלוש אותיות משם הקובץ, ומועברים אליו מידית. טלפורטציה מוחלטת."
        },
        {
            html_visual: `
            <div class="stack-visual">
                <div class="stack-item" style="opacity:0.5;">שורה רגילה</div>
                <div class="stack-item chain-appear" style="background:#ff0055;">שורת קוד מועתקת (Shift+Alt+↓)</div>
                <div class="stack-item" style="opacity:0.5;">שורה רגילה</div>
            </div>
            `,
            text: "<b>שלב 3: הנדסה גנטית של שורות</b><br>שכפול שורות קוד כלפי מטה או מעלה בלחיצת כפתור אחת (Shift+Alt+↓), ללא צורך בהעתק-הדבק מסורבל. שיבוט מהיר של בלוקים שלמים."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced">Ctrl + D</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active ripple-out">| מילה | מילה | מילה |</div>
            </div>
            `,
            text: "<b>שלב 4: צבא של סמנים (Multi-Cursor)</b><br>לחיצה על Ctrl+D בוחרת את המילה הנוכחית, ולחיצות נוספות בוחרות את המופעים הבאים שלה. כך ניתן לערוך עשרות מקומות בקוד במקביל."
        }
    ],
    content: `
      <div class="lesson-container" dir="rtl" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: 0 auto; padding: 20px;">
        
        <header class="lesson-header" style="border-bottom: 2px solid #3498db; margin-bottom: 30px; padding-bottom: 15px;">
            <h1 style="color: #2c3e50; font-size: 2.2em; margin-bottom: 10px;">סודות המהירות: קיצורי VS Code למפתחים</h1>
            <p style="font-size: 1.1em; color: #555;">המעבר ממתכנת מתחיל למתכנת מקצועי לא נמדד רק בידע, אלא גם במהירות הביצוע. העכבר שלכם הוא משקולת שמאיטה אתכם. סביבת הפיתוח VS Code היא כמו תא טייס של מטוס קרב מתקדם - ברגע שתלמדו להשתמש בלוח הבקרה (המקלדת) במקום לחפש כפתורים עם העכבר, תתחילו לתכנת במהירות המחשבה. להלן מדריך צעד-אחר-צעד לשליטה אבסולוטית במרחב העבודה שלכם.</p>
        </header>

        <section class="method-section" style="margin-bottom: 40px;">
            <h2 style="color: #2980b9; border-right: 4px solid #2980b9; padding-right: 10px;">1. חיפוש קבצים מהיר (טלפורטציה) - Ctrl + P</h2>
            <p><strong>הבעיה:</strong> חיפוש ידני של קובץ מסוים בתוך עץ תיקיות עמוס דורש הזזת העכבר, גלילה וחיפוש ויזואלי.</p>
            <p><strong>הפתרון:</strong> לחיצה על <code>Ctrl + P</code> (או <code>Cmd + P</code> ב-Mac) פותחת את שורת הפקודה העליונה. הקלידו את שם הקובץ (אפילו רק חלק ממנו), ולחצו Enter. אתם תועברו מיד לקובץ הרצוי.</p>
            <div class="callout analogy" style="background:#e8f4f8; padding:15px; border-radius:8px; margin:15px 0; border-right:4px solid #3498db;">
              <span class="ico" style="font-size:1.2em; margin-left:10px;">🚀</span>
              <div class="ct" style="display:inline-block; vertical-align:top; width:90%;"><b>אנלוגיה:</b> דמיינו שאתם בספרייה ענקית. במקום לעבור מדף-מדף ולחפש ספר, אתם אומרים את שמו לרובוט ספרן שמשגר אתכם ישירות לשולחן כשהספר פתוח מולכם. זו המשמעות של Ctrl+P.</div>
            </div>
            <p><strong>צעד-אחר-צעד:</strong></p>
            <ol>
              <li>השאירו את הידיים על המקלדת.</li>
              <li>לחצו על Ctrl והחזיקו, ואז הקישו P.</li>
              <li>הקלידו מילת חיפוש (למשל "ind" עבור index.html).</li>
              <li>הקובץ יקפוץ בראש הרשימה - הקישו Enter.</li>
            </ol>
        </section>

        <section class="method-section" style="margin-bottom: 40px;">
            <h2 style="color: #2980b9; border-right: 4px solid #2980b9; padding-right: 10px;">2. עריכה מרובת סמנים (שיבוט זרועות) - Ctrl + D</h2>
            <p><strong>הבעיה:</strong> אתם צריכים לשנות שם של משתנה או מחרוזת המופיעים 10 פעמים בקובץ. שינוי ידני של כל אחד מהם גוזל זמן ומועד לשגיאות רבות.</p>
            <p><strong>הפתרון:</strong> הציבו את הסמן על המילה הרצויה, ולחצו <code>Ctrl + D</code>. המילה תסומן. כל לחיצה נוספת על <code>Ctrl + D</code> תמצא ותסמן את המופע הבא של אותה מילה בקובץ, ותייצר עבורכם <strong>סמן כתיבה נוסף</strong>. כעת, כל מה שתקלידו ייכתב בכל המקומות במקביל.</p>
            <div class="callout analogy" style="background:#e8f4f8; padding:15px; border-radius:8px; margin:15px 0; border-right:4px solid #3498db;">
              <span class="ico" style="font-size:1.2em; margin-left:10px;">🐙</span>
              <div class="ct" style="display:inline-block; vertical-align:top; width:90%;"><b>אנלוגיה:</b> במקום לכתוב עם יד אחת, פונקציה זו מצמיחה לכם זרועות של תמנון. אתם מחזיקים עשרה עטים בידיים וכותבים את אותה מילה בעשר שורות שונות באותו הזמן בדיוק.</div>
            </div>
        </section>

        <section class="method-section" style="margin-bottom: 40px;">
            <h2 style="color: #2980b9; border-right: 4px solid #2980b9; padding-right: 10px;">3. הזזה ושכפול שורות (המעלית ומכונת הצילום)</h2>
            <p>שני הקיצורים הבאים משנים לחלוטין את הדרך שבה מזיזים קוד ומייעלים את הבנייה:</p>
            <ul style="line-height:1.8;">
              <li><strong>הזזת שורה מעלה/מטה (Alt + Up/Down):</strong> הציבו את הסמן על שורה שתרצו להזיז, החזיקו את מקש ה-Alt, והשתמשו בחצים. השורה "תרכב" למעלה או למטה ותדחוק שורות אחרות מבלי לדרוס אותן. זו ה"מעלית" של הקוד.</li>
              <li><strong>שכפול שורה (Shift + Alt + Up/Down):</strong> רוצים ליצור שורה זהה מתחת לשורה הנוכחית? במקום תהליך מייגע של העתק והדבק, החזיקו Shift+Alt ולחצו על חץ למטה. השורה תשוכפל מיד כמו במכונת צילום.</li>
            </ul>
        </section>

        <section class="method-section" style="margin-bottom: 40px;">
            <h2 style="color: #2980b9; border-right: 4px solid #2980b9; padding-right: 10px;">4. הערת קוד מהירה (גלימת היעלמות) - Ctrl + /</h2>
            <p><strong>הפעולה:</strong> הופך את השורה הנוכחית (או השורות המסומנות) להערה (Comment), כך שהמחשב יתעלם ממנה בזמן הריצה. לחיצה נוספת תבטל את ההערה ותחזיר את הקוד לפעילות.</p>
            <p><strong>הצעדים:</strong></p>
            <ol>
              <li>סמנו בלוק של קוד שאתם חושדים שגורם לבאג או שאינו נחוץ כרגע.</li>
              <li>לחצו על <code>Ctrl + /</code>.</li>
              <li>הקוד יסומן כהערה ולא יבוצע על ידי המערכת.</li>
            </ol>
            <div class="callout analogy" style="background:#e8f4f8; padding:15px; border-radius:8px; margin:15px 0; border-right:4px solid #3498db;">
              <span class="ico" style="font-size:1.2em; margin-left:10px;">🧙‍♂️</span>
              <div class="ct" style="display:inline-block; vertical-align:top; width:90%;"><b>אנלוגיה:</b> תארו לעצמכם שאתם שמים על בלוק הקוד "גלימת היעלמות" קסומה. הוא עדיין פיזית שם, ואתם יכולים לראות אותו בעין, אבל מנוע ה-JavaScript פשוט עובר דרכו כאילו היה אוויר.</div>
            </div>
        </section>

        <footer class="lesson-footer" style="background: #fdfae5; border: 1px solid #f1c40f; padding: 25px; border-radius: 8px; margin-top: 40px;">
            <h3 style="color: #d35400; margin-top: 0; border-bottom: 2px solid #e67e22; padding-bottom: 10px;">🧠 אזור הבחינה המורחב: בחן את עצמך!</h3>
            <p>לפני שתמשיכו, ודאו שהפנמתם את השימוש בלוח הבקרה החכם שלכם. קראו כל תרחיש פיתוח ובחרו את הקיצור המתאים ביותר להתמודדות איתו.</p>
            
            <div class="quiz-item" style="margin-bottom:20px; background:#fff; padding:15px; border-radius:5px; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                <strong>שאלה 1:</strong> אתה נמצא בקובץ <code>app.js</code> הכולל 500 שורות קוד. גילית כי קראת למשתנה קריטי בשם <code>dataList</code> ואתה חייב לשנות אותו ל-<code>userList</code> בכל 15 המקומות שהוא מופיע. מהי הדרך המהירה והבטוחה ביותר לבצע זאת?
                <ul style="list-style-type:none; padding-right:0; margin-top:10px;">
                    <li style="margin-bottom:8px;">❌ א. למחוק ידנית בכל שורה ולכתוב מחדש, שורה אחר שורה.</li>
                    <li style="margin-bottom:8px;">❌ ב. להשתמש בעכבר כדי להעתיק את המילה החדשה ולהדביק על כל מופע בנפרד.</li>
                    <li style="margin-bottom:8px; color:#27ae60; font-weight:bold;">✅ ג. לסמן את המילה הראשונה, ללחוץ ברצף על Ctrl + D עד שכל המופעים מסומנים, ואז פשוט להקליד מחדש פעם אחת userList.</li>
                </ul>
            </div>

            <div class="quiz-item" style="background:#fff; padding:15px; border-radius:5px; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                <strong>שאלה 2:</strong> מנהל הפרויקט יושב לצידך ומבקש שתפתח מיד את הקובץ <code>style.css</code> אשר קבור עמוק בתוך תיקיית <code>assets/css/main/themes</code>. כיצד תרשים אותו במקצועיות שלך?
                <ul style="list-style-type:none; padding-right:0; margin-top:10px;">
                    <li style="margin-bottom:8px;">❌ א. תפתח את תפריט הצד (Sidebar), תרחיב את התיקיות אחת-אחת בעזרת העכבר עד שתגיע לקובץ המבוקש.</li>
                    <li style="margin-bottom:8px; color:#27ae60; font-weight:bold;">✅ ב. תפעיל טלפורטציה עם Ctrl + P, תקליד את המילה "style" ותקיש אנטר. הקובץ ייפתח בשבריר שנייה.</li>
                    <li style="margin-bottom:8px;">❌ ג. תשתמש בפונקציית החיפוש בתוך הקובץ הנוכחי באמצעות הפקודה Ctrl + F ותקווה לטוב.</li>
                </ul>
            </div>
            
            <p style="margin-top:20px; font-weight:bold; text-align:center; color:#2c3e50;">זכרו: תרגול הקיצורים הללו יעכב אתכם מעט בהתחלה בשלבי הלמידה, אך יחסוך לכם מאות שעות יקרות של קידוד ותסכול בהמשך הקריירה שלכם כמפתחים מקצועיים!</p>
        </footer>
      </div>
    `
  }
};
