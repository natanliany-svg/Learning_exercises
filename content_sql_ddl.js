const sqlDdlContent = {
  sqlDdl: {
    id: "sqlDdl_id",
    title: `SQL DDL: ארכיטקטורת הספרייה הווירטואלית`,
    metadata: {
      author: "Content Writer",
      category: "SQL"
    },
    content: `

        <div class="ddl-container" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #1e1e2e; color: #cdd6f4; padding: 50px; border-radius: 16px; line-height: 1.9; max-width: 1000px; margin: 0 auto; box-shadow: 0 15px 40px rgba(0,0,0,0.6);" dir="rtl">
            
            <header style="text-align: center; margin-bottom: 50px;">
                <h1 style="color: #f38ba8; font-size: 3em; margin-bottom: 10px; text-shadow: 0 2px 10px rgba(243,139,168,0.3);">SQL DDL: יצירת עולמות מכלום</h1>
                <p style="font-size: 1.2em; color: #a6adc8; font-style: italic;">Data Definition Language - אומנות התכנון והבנייה</p>
                <hr style="border: 0; height: 2px; background: linear-gradient(90deg, transparent, #313244, transparent); margin-top: 30px;">
            </header>
            
            <section style="margin-bottom: 40px;">
                <p style="font-size: 1.15em; text-indent: 30px; margin-bottom: 20px;">
                    תארו לעצמכם שאתם הארכיטקטים הראשיים של ספרייה עצומה, בלתי נגמרת, שמרחפת במרחב קיברנטי אינסופי. לפני שבכלל נוכל להכניס ספר אחד פנימה – לפני שנוכל למיין, לקרוא או להשאיל – עלינו לבנות את הקירות, להקים את המדפים, ולעצב את המסדרונות. עלינו להגדיר במדויק איזה סוג של ספרים ייכנסו לכל קומה ובאיזה מבנה הם יוצגו. בעולם מסדי הנתונים היחסיים (Relational Databases), השפה שבאמצעותה אנו "בונים את המדפים" נקראת <strong>DDL (Data Definition Language)</strong>.
                </p>
                <p style="font-size: 1.15em; text-indent: 30px;">
                    ה-DDL לא מתעסק בנתונים עצמם (הספרים הפיזיים), אלא במבנה שלהם (הקטלוג, ארונות התצוגה, המדפים). בעזרת פקודות אלו, אנו מגדירים את ה"סכמה" (Schema) של מסד הנתונים שלנו. בואו נצלול פנימה אל הכלים המרכזיים שעומדים לרשותנו בארגז הכלים האדריכלי הזה.
                </p>
            </section>

            <h2 style="color: #89b4fa; font-size: 2.2em; margin-top: 50px; display: flex; align-items: center;">
                <span style="background-color: #89b4fa; color: #1e1e2e; padding: 5px 15px; border-radius: 8px; margin-left: 15px; font-size: 0.8em;">CREATE</span> 
                הבנאי הראשי
            </h2>
            <div style="background: #313244; padding: 30px; border-right: 6px solid #89b4fa; border-radius: 12px; margin-bottom: 30px;">
                <p style="font-size: 1.1em; margin-bottom: 20px;">הפקודה <code>CREATE</code> היא אבן הפינה. באמצעותה אנו מורים למערכת: "הקם עבורי חדר חדש בספרייה, וקרא לו בשם". כשאנחנו יוצרים טבלה, אנו מוכרחים להגדיר לה עמודות (Columns). העמודות הללו הן כמו קטגוריות למדף ספציפי – למשל: מספר סידורי של הספר, שם הספר, שנת הוצאה, והאם הוא זמין להשאלה.</p>
                <pre style="background: #11111b; color: #a6e3a1; padding: 20px; border-radius: 8px; overflow-x: auto; font-size: 1.1em; font-family: 'Consolas', 'Courier New', monospace; direction: ltr; text-align: left;"><code>CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title VARCHAR(150),
    IsAvailable BOOLEAN
);</code></pre>
            </div>

            <h3 style="color: #f9e2af; font-size: 1.8em; margin-top: 40px; border-bottom: 1px solid #313244; padding-bottom: 10px;">סוגי נתונים (Data Types) - שפת בניית המדפים</h3>
            <p style="font-size: 1.1em; margin-bottom: 20px;">כשאתם בונים מדף, אתם צריכים לדעת איזה משקל ואיזו צורה של חפצים הוא נועד לשאת. ב-SQL, אנו קובעים זאת באמצעות סוגי הנתונים:</p>
            <ul style="list-style-type: none; padding-right: 0;">
                <li style="background: #181825; padding: 20px; margin-bottom: 15px; border-radius: 10px; transition: transform 0.2s;">
                    <strong style="color: #fab387; font-size: 1.3em; display: block; margin-bottom: 10px;">INT (Integer)</strong>
                    <p style="margin: 0;">משמש למספרים שלמים. תחשבו על זה כעל המספר הסידורי, הברקוד הדיגיטלי המוטבע על גב הספר. אין דבר כזה "חצי ספר", ולכן נשתמש במספר שלם כדי לייצג זהות מוחלטת (כמו מפתח ראשי - Primary Key).</p>
                </li>
                <li style="background: #181825; padding: 20px; margin-bottom: 15px; border-radius: 10px; transition: transform 0.2s;">
                    <strong style="color: #fab387; font-size: 1.3em; display: block; margin-bottom: 10px;">VARCHAR(n)</strong>
                    <p style="margin: 0;">שרשרת תווים באורך משתנה (Variable Character). כאן נאכסן טקסט, כמו שם הספר או שמו של הסופר. למה "משתנה"? כי אם נקצה 150 תווים לשם הספר והשתמשנו רק ב-20, המערכת החכמה של MySQL לא תבזבז את שארית המקום הריק. זהו מדף אלסטי, המתרחב ומתכווץ בהתאם לעובי הספר שמונח עליו, עד לגבול ה-n שהגדרנו.</p>
                </li>
                <li style="background: #181825; padding: 20px; margin-bottom: 15px; border-radius: 10px; transition: transform 0.2s;">
                    <strong style="color: #fab387; font-size: 1.3em; display: block; margin-bottom: 10px;">BOOLEAN</strong>
                    <p style="margin: 0;">האמת והשקר המוחלטים (TRUE / FALSE). זהו מתג האור הדיגיטלי של הספרייה: האם הספר הושאל? נדלק או נכבה, 1 או 0. מאחורי הקלעים, במערכות MySQL רבות זה מתורגם ל-<code>TINYINT(1)</code>, אך הקונספט התיאורטי נשאר זהה: מצב בינארי טהור.</p>
                </li>
            </ul>

            <h2 style="color: #a6e3a1; font-size: 2.2em; margin-top: 50px; display: flex; align-items: center;">
                <span style="background-color: #a6e3a1; color: #1e1e2e; padding: 5px 15px; border-radius: 8px; margin-left: 15px; font-size: 0.8em;">ALTER</span> 
                שיפוץ וארגון מחדש
            </h2>
            <div style="background: #313244; padding: 30px; border-right: 6px solid #a6e3a1; border-radius: 12px; margin-bottom: 30px;">
                <p style="font-size: 1.1em; margin-bottom: 20px;">הספרייה כבר עומדת על תילה, המדפים עמוסים, קוראים נכנסים ויוצאים, אך לפתע הנהלת הספרייה דורשת שינוי: "החל ממחר, אנו מחויבים לתעד את שנת ההוצאה של כל ספר". במקום להחריב את הבניין ולהתחיל מחדש, אנו קוראים לקבלן השיפוצים – <code>ALTER</code>. פקודה זו מאפשרת לשנות את מבנה הטבלה (להוסיף, להסיר, או לשנות סוג עמודה) מבלי למחוק את הנתונים הקיימים בתוכה.</p>
                <pre style="background: #11111b; color: #f9e2af; padding: 20px; border-radius: 8px; overflow-x: auto; font-size: 1.1em; font-family: 'Consolas', 'Courier New', monospace; direction: ltr; text-align: left;"><code>ALTER TABLE Books
ADD PublicationYear INT;</code></pre>
            </div>

            <h2 style="color: #eba0ac; font-size: 2.2em; margin-top: 50px; display: flex; align-items: center;">
                <span style="background-color: #eba0ac; color: #1e1e2e; padding: 5px 15px; border-radius: 8px; margin-left: 15px; font-size: 0.8em;">TRUNCATE</span> 
                ניקוי אביב אכזרי
            </h2>
            <div style="background: #313244; padding: 30px; border-right: 6px solid #eba0ac; border-radius: 12px; margin-bottom: 30px;">
                <p style="font-size: 1.1em; margin-bottom: 20px;">לעיתים קורה אסון – מגלים שכל הספרים באגף מסוים הושחתו או נגועים בעובש מסוכן, ויש לפנותם באופן מיידי. <code>TRUNCATE</code> היא הפקודה שמרוקנת את כל המדפים באבחה אחת. היא מעיפה את כל הנתונים, מהר ובאכזריות רבה יותר מפקודת DELETE מרובה, אך משאירה את המדפים עצמם (מבנה הטבלה) עומדים ונקיים לחלוטין, מוכנים לקלוט מלאי ספרים חדש לגמרי.</p>
                <pre style="background: #11111b; color: #f38ba8; padding: 20px; border-radius: 8px; overflow-x: auto; font-size: 1.1em; font-family: 'Consolas', 'Courier New', monospace; direction: ltr; text-align: left;"><code>TRUNCATE TABLE Books;</code></pre>
            </div>

            <h2 style="color: #f38ba8; font-size: 2.2em; margin-top: 50px; display: flex; align-items: center;">
                <span style="background-color: #f38ba8; color: #1e1e2e; padding: 5px 15px; border-radius: 8px; margin-left: 15px; font-size: 0.8em;">DROP</span> 
                כדור ההרס המוחלט
            </h2>
            <div style="background: #313244; padding: 30px; border-right: 6px solid #f38ba8; border-radius: 12px; margin-bottom: 30px;">
                <p style="font-size: 1.1em; margin-bottom: 20px;">מבין כל הכלים, פקודה זו היא המסוכנת והעוצמתית מכולן. <code>DROP</code> לא באה לנקות; היא באה להשמיד. היא מביאה עימה דחפור קיברנטי ענק ומחריבה את כל האגף – גם את הספרים, וגם את ארונות התצוגה והקירות שעטפו אותם. פעולת <code>DROP TABLE</code> מוחקת את מבנה הנתונים לחלוטין ממרחב הזיכרון. כאילו הטבלה מעולם לא הייתה קיימת בתוך מסד הנתונים. חובה להשתמש בה בחרדת קודש ובדייקנות של מנתח פלסטי.</p>
                <pre style="background: #11111b; color: #cba6f7; padding: 20px; border-radius: 8px; overflow-x: auto; font-size: 1.1em; font-family: 'Consolas', 'Courier New', monospace; direction: ltr; text-align: left;"><code>DROP TABLE Books;</code></pre>
            </div>
            
            <footer style="margin-top: 50px; text-align: center; padding-top: 20px; border-top: 1px solid #313244;">
                <p style="font-style: italic; color: #a6adc8; font-size: 1.1em;">
                    כמו כל ארכיטקט מוכשר, הכוח ליצור ולהחריב עולמות מונח כעת בכפות ידיכם.<br>
                    תכננו את ספריית הנתונים בחכמה, בחרו את סוגי הנתונים בקפידה, ותמיד תזכרו – השמדה היא פעולה סופית בהחלט.
                </p>
            </footer>
        </div>
    

    `
  }
};
