const sqlNodeContent = {
  sqlNode: {
    title: "חיבור Node.js ל-MySQL",
    description: "מדריך מקיף על שימוש ב-mysql2, Connection Pools, שאילתות אסינכרוניות והגנה מפני הזרקות SQL.",
    analogy: "המשאיות המחברות את הספרייה (הדאטה-בייס) לצרכנים (האפליקציה).",
    content: `
        <div class="sql-node-container" dir="rtl" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(145deg, #1e1e2f, #252538); color: #e0e0e0; padding: 3rem; border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.4); max-width: 900px; margin: 0 auto; line-height: 1.6;">
            <header style="text-align: center; border-bottom: 2px solid rgba(255, 255, 255, 0.1); padding-bottom: 2rem; margin-bottom: 2rem;">
                <h1 style="color: #4facfe; font-size: 2.8rem; margin: 0; text-shadow: 0 0 15px rgba(79, 172, 254, 0.5);">Node.js פוגש את MySQL</h1>
                <h2 style="color: #00f2fe; font-size: 1.5rem; font-weight: 300; margin-top: 0.5rem;">צי המשאיות האסינכרוני שלך</h2>
            </header>

            <section style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 12px; margin-bottom: 2rem; border-right: 5px solid #4facfe; transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='none'">
                <h3 style="color: #4facfe; font-size: 1.8rem; margin-top: 0;">1. האנלוגיה: משאיות הספרייה 🚚</h3>
                <p style="font-size: 1.1rem; text-align: justify;">
                    דמיינו ש-Node.js הוא מוקד השילוח הראשי, ומסד הנתונים MySQL הוא ספריית הענק בה מאוחסן כל הידע. חבילת <strong>mysql2</strong> היא בעצם הרישיון והתשתית שלכם להקים צי משאיות משוכלל. כל חיבור (Connection) הוא משאית. במקום לייצר משאית חדשה לכל משלוח (מה שיגזול זמן ומשאבים), אנו מקימים חניון מסודר - <strong>Connection Pool</strong>. החניון הזה מחזיק משאיות מונעות ומוכנות ליציאה, מה שמאפשר הזרמה חלקה ומהירה של מידע (ספרים) מהספרייה ללקוחות ברחבי העיר.
                </p>
            </section>

            <section style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 12px; margin-bottom: 2rem; border-right: 5px solid #00f2fe;">
                <h3 style="color: #00f2fe; font-size: 1.8rem; margin-top: 0;">2. הקמת חניון המשאיות (Connection Pools) 🏗️</h3>
                <p style="font-size: 1.1rem; text-align: justify;">
                    יצירת Pool חוסכת את ה"לחיצת יד" היקרה של הקמת חיבור לכל שאילתה. ה-Pool מנהל עבורנו את תור ההמתנה והמחזור של החיבורים.
                </p>
                <div style="background: #12121e; padding: 1.5rem; border-radius: 8px; margin-top: 1rem; overflow-x: auto; box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);">
                    <pre style="margin: 0; color: #a6accd; font-family: 'Fira Code', Consolas, monospace; direction: ltr; text-align: left;">
<span style="color: #c792ea;">const</span> mysql <span style="color: #89ddff;">=</span> <span style="color: #82aaff;">require</span>(<span style="color: #c3e88d;">'mysql2/promise'</span>);

<span style="color: #676e95;">// הקמת צי המשאיות</span>
<span style="color: #c792ea;">const</span> pool <span style="color: #89ddff;">=</span> mysql.<span style="color: #82aaff;">createPool</span>({
    host: <span style="color: #c3e88d;">'localhost'</span>,
    user: <span style="color: #c3e88d;">'librarian'</span>,
    password: <span style="color: #c3e88d;">'secret_pass_123'</span>,
    database: <span style="color: #c3e88d;">'national_library'</span>,
    waitForConnections: <span style="color: #ff9cac;">true</span>,
    connectionLimit: <span style="color: #f78c6c;">10</span>, <span style="color: #676e95;">// עד 10 משאיות על הכביש בו זמנית</span>
    queueLimit: <span style="color: #f78c6c;">0</span>
});</pre>
                </div>
            </section>

            <section style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 12px; margin-bottom: 2rem; border-right: 5px solid #f78c6c;">
                <h3 style="color: #f78c6c; font-size: 1.8rem; margin-top: 0;">3. ביצוע משלוחים באסינכרוניות (Async/Await) ⏳</h3>
                <p style="font-size: 1.1rem; text-align: justify;">
                    Node.js מצטיין בכך שהוא לא ממתין באופן חוסם (Blocking) למשאית שתחזור. שימוש ב-<code>async/await</code> מבטיח שמוקד השילוח יכול להמשיך לטפל בלקוחות אחרים עד שהמשאית מגיעה חזרה עם הספרים המבוקשים.
                </p>
                <div style="background: #12121e; padding: 1.5rem; border-radius: 8px; margin-top: 1rem; overflow-x: auto; box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);">
                    <pre style="margin: 0; color: #a6accd; font-family: 'Fira Code', Consolas, monospace; direction: ltr; text-align: left;">
<span style="color: #c792ea;">async function</span> <span style="color: #82aaff;">fetchBooksByAuthor</span>(authorName) {
    <span style="color: #c792ea;">try</span> {
        <span style="color: #676e95;">// המשאית יוצאת לדרך... אנו ממתינים בסבלנות אך לא עוצרים את המערכת</span>
        <span style="color: #c792ea;">const</span> [rows, fields] <span style="color: #89ddff;">=</span> <span style="color: #c792ea;">await</span> pool.<span style="color: #82aaff;">execute</span>(
            <span style="color: #c3e88d;">'SELECT * FROM books WHERE author = ?'</span>,
            [authorName]
        );
        <span style="color: #c792ea;">return</span> rows;
    } <span style="color: #c792ea;">catch</span> (error) {
        <span style="color: #ff5370;">console.error</span>(<span style="color: #c3e88d;">'תאונה בדרך למסד הנתונים:'</span>, error);
    }
}</pre>
                </div>
            </section>

            <section style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 12px; border-right: 5px solid #ff5370;">
                <h3 style="color: #ff5370; font-size: 1.8rem; margin-top: 0;">4. אבטחת המשלוח מפני שודדים (SQL Injection) 🛡️</h3>
                <p style="font-size: 1.1rem; text-align: justify;">
                    כדי למנוע מפורצים (האקרים) לשתול פקודות הרסניות בתוך ההזמנות (SQL Injection), עלינו <strong>לעולם לא לשרשר מחרוזות</strong> ישירות לתוך השאילתה. שימוש ב-Prepared Statements באמצעות פונקציית <code>execute()</code> מבטיח שהמידע המוזן נחשב אך ורק כטקסט ולא כקוד בר ביצוע.
                </p>
                <div style="display: flex; gap: 1.5rem; margin-top: 1.5rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 250px; background: rgba(255, 83, 112, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid #ff5370;">
                        <h4 style="color: #ff5370; margin-top: 0;">❌ גישה מסוכנת</h4>
                        <code style="display: block; direction: ltr; text-align: left; background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 4px; color: #ff5370; font-size: 0.9rem;">query('SELECT * FROM books WHERE author = "' + userInput + '"');</code>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">פותח דלת לשודדי דרכים המסוגלים להשמיד את הספרייה.</p>
                    </div>
                    <div style="flex: 1; min-width: 250px; background: rgba(195, 232, 141, 0.1); padding: 1.5rem; border-radius: 8px; border: 1px solid #c3e88d;">
                        <h4 style="color: #c3e88d; margin-top: 0;">✅ הדרך המאובטחת</h4>
                        <code style="display: block; direction: ltr; text-align: left; background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 4px; color: #c3e88d; font-size: 0.9rem;">execute('SELECT * FROM books WHERE author = ?', [userInput]);</code>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">מטפל בנתון כארגז אטום בלבד. מוגן לחלוטין!</p>
                    </div>
                </div>
            </section>
        </div>
    `
  }
};