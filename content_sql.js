const contentSqlClassroom = {
    sqlBasics: {
        title: "מסדי נתונים רלוציוניים - המחסן הלוגיסטי הממוחשב",
        visualizerSteps: [
            { action: "drawWarehouse", target: "database", color: "gray", text: "<b>בניית המחסן:</b> מסד הנתונים מוקם כמבנה ענק עם כללי ברזל." },
            { action: "addShelves", target: "database", text: "<b>טבלאות (Tables):</b> הקמת מדפי פלדה קשיחים, כל אחד מיועד לסוג מידע אחד בלבד (למשל: לקוחות, הזמנות)." },
            { action: "addMolds", text: "<b>עמודות (Columns):</b> תבניות נוקשות בתוך המדפים. אם התבנית דורשת מספר, אי אפשר להכניס טקסט!" }
        ],
        content: `
            <div class="card-body">
                <p class="lead">מסד נתונים רלוציוני (Relational Database) הוא כמו <span title="מקום שבו הכל מאורגן בצורה סופר-מוקפדת">מחסן לוגיסטי ממוחשב ועצום</span>, המחולק לאזורים, כאשר בכל אזור יש טבלאות קשיחות מפלדה לאחסון מידע.</p>
                <p>בניגוד לשמירת נתונים בקבצי טקסט רגילים, במחסן הזה יש חוקים נוקשים: אי אפשר לשים תפוח במדף שמיועד למכוניות. השפה שבה אנו "מדברים" עם מנהל המחסן הזה נקראת <span title="Structured Query Language - שפת שאילתות מובנית">SQL</span>.</p>
                <h4>מדריך שלב-אחר-שלב להבנת המבנה:</h4>
                <ol>
                    <li><b>מסד הנתונים (Database):</b> הבניין השלם שמכיל את כל המידע של הפרויקט.</li>
                    <li><b>טבלאות (Tables):</b> קלסרי ענק מפלדה בתוך הבניין. כל טבלה מכילה סוג אחד של אובייקטים (למשל טבלת "משתמשים").</li>
                    <li><b>עמודות (Columns/Fields):</b> ה"תבניות" של הטבלה, שמגדירות אילו נתונים אפשר להכניס (שם, אימייל, גיל).</li>
                    <li><b>שורות (Rows/Records):</b> פיסות המידע עצמן. כל שורה היא אדם אחד או פריט אחד בטבלה.</li>
                </ol>
            </div>
        `
    },
    sqlDdl: {
        title: "DDL - ארכיטקטים של פלדה (בניית המחסן)",
        visualizerSteps: [
            { action: "showArchitect", text: "<b>שפת ההגדרה:</b> ארכיטקט נכנס עם שרטוטים." },
            { action: "forgeTable", animation: "sparkles", text: "<b>CREATE TABLE:</b> יציקת טבלת פלדה חדשה באמצעות תבניות מוגדרות מראש." },
            { action: "alterTable", target: "table", effect: "expand", text: "<b>ALTER TABLE:</b> ריתוך עמודה חדשה לטבלה קיימת." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">המושג <span title="Data Definition Language">DDL</span> מייצג את הפקודות המשמשות ל<b>הקמה ועיצוב של מבנה הנתונים</b>. אלו פקודות של ארכיטקטים, לא של פועלי מחסן.</p>
                <p>כאשר הארכיטקט מקבל הוראה כמו <code>CREATE TABLE</code>, הוא לא מכניס מידע, אלא יוצק תבנית פלדה חדשה במחסן עם חריצים מדויקים (עמודות) שרק סוגים מסוימים של נתונים יוכלו להיכנס אליהם.</p>
                <h4>מדריך שלב-אחר-שלב לפקודות DDL:</h4>
                <ol>
                    <li>השתמשו ב-<code><span title="יוצר מבנה חדש">CREATE</span></code> כדי לבנות מסד נתונים חדש או טבלה חדשה.</li>
                    <li>השתמשו ב-<code><span title="משנה מבנה קיים">ALTER</span></code> כדי להוסיף או להסיר עמודות מטבלה שכבר קיימת (כמו הוספת חדר למבנה).</li>
                    <li>השתמשו ב-<code><span title="מוחק את המבנה לחלוטין">DROP</span></code> כדי להרוס כליל טבלה או מסד נתונים. <b>זהירות:</b> זה מוחק את התבנית ואת כל המידע שבתוכה!</li>
                </ol>
                <pre><code>
<span class="t-com">-- בניית טבלת משתמשים חדשה (תבנית מפלדה)</span>
<span class="t-keyword">CREATE TABLE</span> Users (
    id <span class="t-keyword">INT PRIMARY KEY</span>,
    name <span class="t-keyword">VARCHAR</span>(<span class="t-num">50</span>),
    age <span class="t-keyword">INT</span>
);</code></pre>
            </div>
        `
    },
    sqlDml: {
        title: "DML - זרועות רובוטיות לעבודה שחורה (הכנסה ועדכון)",
        visualizerSteps: [
            { action: "robotArm", target: "table", text: "<b>הכנסת נתונים:</b> זרוע רובוטית שמה קופסה בתבנית הטבלה." },
            { action: "insertRow", text: "<b>INSERT:</b> שורה חדשה נוצרת עם הנתונים המדויקים." },
            { action: "updateRow", color: "yellow", text: "<b>UPDATE:</b> הזרוע מסירה מדבקה ישנה ושמה חדשה על קופסה קיימת." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">המושג <span title="Data Manipulation Language">DML</span> מייצג את פקודות <b>הטיפול היומיומי במידע</b>: הוספה, עדכון ומחיקה של נתונים בתוך הטבלאות הקיימות.</p>
                <p>אלו הזרועות הרובוטיות העובדות בתוך המחסן הלוגיסטי. הן לא משנות את הבניין עצמו, אלא רק מזיזות קופסאות פנימה והחוצה.</p>
                <h4>מדריך שלב-אחר-שלב לפקודות DML:</h4>
                <ol>
                    <li>השתמשו ב-<code><span title="מכניס שורה חדשה">INSERT</span></code> כדי להוסיף לקוח חדש לטבלה. הזרוע תוודא שהמידע תואם לתבנית הפלדה!</li>
                    <li>השתמשו ב-<code><span title="מעדכן נתון בשורה קיימת">UPDATE</span></code> כדי לשנות מידע קיים. למשל, לעדכן גיל של משתמש. <b>חובה</b> להשתמש ב-<code>WHERE</code> כדי לא לעדכן את כולם בטעות!</li>
                    <li>השתמשו ב-<code><span title="מוחק שורות נתונים">DELETE</span></code> כדי למחוק רשומה ספציפית מהמחסן.</li>
                </ol>
                <pre><code>
<span class="t-com">-- הכנסת לקוח חדש (רובוט שם קופסה)</span>
<span class="t-keyword">INSERT INTO</span> Users (id, name, age)
<span class="t-keyword">VALUES</span> (<span class="t-num">1</span>, <span class="t-str">'Natan'</span>, <span class="t-num">25</span>);

<span class="t-com">-- עדכון הגיל של נתן (חובה להשתמש ב-WHERE!)</span>
<span class="t-keyword">UPDATE</span> Users
<span class="t-keyword">SET</span> age = <span class="t-num">26</span>
<span class="t-keyword">WHERE</span> name = <span class="t-str">'Natan'</span>;</code></pre>
            </div>
        `
    },
    sqlDql: {
        title: "DQL - רחפני החיפוש החכמים (שאילתות מידע)",
        visualizerSteps: [
            { action: "deployDrones", text: "<b>SELECT:</b> רחפני סריקה יוצאים למחסן לחפש נתונים." },
            { action: "scanWithFilter", effect: "laser", text: "<b>WHERE:</b> הרחפנים מפעילים לייזר לסינון ומביאים רק תוצאות תואמות." },
            { action: "returnCart", target: "user", animation: "slide", text: "<b>תוצאה:</b> הרחפנים חוזרים עם עגלת נתונים מסודרת." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">המושג <span title="Data Query Language">DQL</span> סובב סביב מלך מסד הנתונים: פקודת ה-<code><span title="שלוף נתונים">SELECT</span></code>. זהו צי של רחפנים שסורק את המחסן ומביא לכם בדיוק את מה שביקשתם, מבלי לשנות או למחוק כלום.</p>
                <p>כאשר אתם מריצים שאילתת SELECT, אתם מגדירים לרחפנים אילו עמודות להביא, ועל אילו שורות לבצע סינון (בעזרת תנאים).</p>
                <h4>מדריך שלב-אחר-שלב לשליפת נתונים:</h4>
                <ol>
                    <li>השתמשו ב-<code><span title="תביא לי את הכל">SELECT *</span></code> כדי שהרחפן יביא את כל העמודות מהטבלה. לחלופין, ציינו שמות עמודות כדי לחסוך עומס (למשל: <code>SELECT name, age</code>).</li>
                    <li>השתמשו ב-<code><span title="מאיזו טבלה לשלוף">FROM</span></code> כדי להגיד לרחפן לאיזה אזור במחסן (טבלה) לטוס.</li>
                    <li>הוסיפו <code><span title="התנאי לסינון">WHERE</span></code> כדי שהרחפן יביא רק רשומות רלוונטיות (למשל, רק אנשים שמעל גיל 18).</li>
                </ol>
                <pre><code>
<span class="t-com">-- רחפן מביא שמות וגילאים של מי שמעל גיל 18</span>
<span class="t-keyword">SELECT</span> name, age 
<span class="t-keyword">FROM</span> Users
<span class="t-keyword">WHERE</span> age > <span class="t-num">18</span>;</code></pre>
            </div>
        `
    },
    sqlJoins: {
        title: "JOINs - מסוע ההרכבה (חיבור טבלאות)",
        visualizerSteps: [
            { action: "fetchTwoTables", text: "<b>הכנה לחיבור:</b> הרחפנים מביאים חתיכות משתי טבלאות שונות." },
            { action: "conveyorBelt", effect: "zip", text: "<b>JOIN:</b> מסוע מיוחד 'תופר' או ממזג את השורות משתי הטבלאות על בסיס מזהה משותף." },
            { action: "showMergedTable", color: "purple", text: "<b>תוצאה מאוחדת:</b> טבלה חדשה וזמנית שמשלבת את הנתונים יחדיו מוצגת למשתמש." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">לעתים קרובות המידע שלנו מפוצל כדי לשמור על סדר. לדוגמה, טבלת משתמשים וטבלת הזמנות. <code><span title="מיזוג, שילוב">JOIN</span></code> הוא מסוע מיוחד שמדביק יחד שורות משתי טבלאות על בסיס חוליה מקשרת (לרוב ID).</p>
                <p>דמיינו פס ייצור שמקבל חצי מוצר ממדף א' (שם הלקוח) וחצי מוצר ממדף ב' (מספר ההזמנה שלו), ותופר אותם לשורה אחת שלמה שקל לקרוא.</p>
                <h4>מדריך שלב-אחר-שלב לאיחוד טבלאות:</h4>
                <ol>
                    <li>מתחילים משליפה רגילה <code>SELECT ... FROM TableA</code>.</li>
                    <li>מוסיפים את פקודת ה-<code><span title="מיזוג פנימי - מביא רק התאמות שנמצאות בשני הצדדים">INNER JOIN</span> TableB</code>.</li>
                    <li>מגדירים את ה"דבק", כלומר מהו התנאי שמחבר ביניהן בעזרת המילה <code><span title="על בסיס אילו עמודות לבצע את החיבור">ON</span></code>. בדרך כלל משווים מזהה ייחודי.</li>
                </ol>
                <pre><code>
<span class="t-com">-- מסוע הדבקה: מביא את שם הלקוח וסכום ההזמנה שלו</span>
<span class="t-keyword">SELECT</span> Users.name, Orders.amount
<span class="t-keyword">FROM</span> Users
<span class="t-keyword">INNER JOIN</span> Orders <span class="t-keyword">ON</span> Users.id = Orders.user_id;</code></pre>
            </div>
        `
    },
    sqlNode: {
        title: "Node.js & SQL - מכשיר הקשר אל המחסן",
        visualizerSteps: [
            { action: "showServer", text: "<b>השרת (Node.js):</b> מרכז הבקרה מקבל בקשה מהלקוח (למשל: הבא לי משתמשים)." },
            { action: "radioCall", target: "database", effect: "wave", text: "<b>קריאת רדיו (Query):</b> השרת משדר פקודת SQL ארוזה דרך ספרייה (כמו pg או mysql2)." },
            { action: "returnData", text: "<b>קבלת תשובה:</b> המחסן מחזיר את הנתונים והשרת ממיר אותם ל-JSON למשתמש." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">כדי שהאפליקציה שלנו תוכל לדבר עם המחסן (ה-Database), שרת ה-<span title="סביבת ריצה של JavaScript לשרתים">Node.js</span> צריך "מכשיר קשר". אנחנו משתמשים בספריות קוד (כמו <code>pg</code> ל-PostgreSQL או <code>mysql2</code>) שמשמשות כנהג אישי ומתורגמן בין שפת JS לשפת SQL.</p>
                <p>השרת אינו שומר את המידע! הוא פשוט כותב פקודת SQL בתור <span title="מחרוזת טקסט">String</span>, ושולח אותה דרך מכשיר הקשר למחסן, שמבצע את העבודה השחורה ומחזיר מערך של תוצאות.</p>
                <h4>מדריך שלב-אחר-שלב לחיבור השרת:</h4>
                <ol>
                    <li>מתקינים את ספריית הדרייבר (לדוגמה: <code>npm install pg</code>).</li>
                    <li>פותחים "צינור תקשורת" (Connection Pool) עם סיסמאות הכניסה למחסן.</li>
                    <li>שולחים שאילתה (Query) בעזרת מתודה אסינכרונית (async/await) ומקבלים את השורות בחזרה.</li>
                </ol>
                <pre><code>
<span class="t-com">// שימוש ב-Pool כדי לשלוח את פקודת הרחפנים מהשרת אל המסד</span>
<span class="t-keyword">const</span> result = <span class="t-keyword">await</span> pool.query(<span class="t-str">"SELECT * FROM Users WHERE age > $1"</span>, [<span class="t-num">18</span>]);
res.json(result.rows); <span class="t-com">// שליחת העגלה בחזרה ללקוח בדפדפן כ-JSON</span></code></pre>
            </div>
        `
    }
};

if (typeof window !== "undefined") {
    window.contentSql = contentSqlClassroom;
} else if (typeof module !== "undefined" && module.exports) {
    module.exports = contentSqlClassroom;
}
