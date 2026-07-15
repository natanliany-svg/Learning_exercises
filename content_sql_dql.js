const sqlDqlContent = {
  sqlDql: {
  title: "שליפת נתונים, סינון ופונקציות צבירה (DQL)",
  analogy: "דמיינו שאתם הספרנים הראשיים בספרייה העירונית המרכזית - מבנה קולוסאלי של שיש ועץ אלון, המכיל מאות אלפי כרכים עתיקים וחדשים. אתם נדרשים להפיק דוחות מלאי מורכבים עבור מועצת העיר. אינכם יכולים לשוטט בין המדפים ולספור ספרים ידנית; אתם זקוקים לשפת פקודות עוצמתית שתורה לרובוטי-הספרייה בדיוק אילו ספרים לשלוף, כיצד לסנן אותם, באיזה סדר להציג את הרשימה, ואיך לסכם את הנתונים הכוללים לכדי תובנות (למשל, כמה ספרי מדע בדיוני יש לנו, או מה שנת ההוצאה הממוצעת באגף ההיסטוריה). השפה הזו היא DQL - Data Query Language.",
  sections: [
    {
      id: "select_where",
      title: "הבקשה הבסיסית והסינון: SELECT ו-WHERE",
      content: `
        <div class="theory-block" style="background: linear-gradient(145deg, #1e1e2f, #2a2a40); padding: 25px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); color: #e0e0e0; border-left: 5px solid #4a90e2; margin-bottom: 30px;">
          <h3 style="color: #64ffda; border-bottom: 1px solid rgba(100,255,218,0.2); padding-bottom: 10px; margin-top: 0;"><i class="fas fa-search" style="margin-left: 10px;"></i>שליפת הנתונים והסינון החכם</h3>
          <p style="font-size: 1.1em; line-height: 1.6;">כספרנים הראשיים, כשאתם פונים לרובוט-הספרייה (מסד הנתונים), עליכם להיות מדויקים. משפט ה-<strong>SELECT</strong> מגדיר "אילו פרטים אני רוצה לראות" - האם אני צריך את כל כרטיסיית הספר (<code>SELECT *</code>) או רק עמודות ספציפיות כמו כותרת ושם הסופר. משפט ה-<strong>WHERE</strong> הוא המסנן הקפדני שלכם - "תביא לי רק ספרים שיצאו לאור אחרי שנת 2000" או "רק ספרים שהם זמינים להשאלה".</p>
          <div class="code-showcase" style="background: #0d1117; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #30363d;">
            <pre style="margin: 0; direction: ltr;"><code class="language-sql" style="color: #c9d1d9; font-family: 'Fira Code', monospace;">
<span style="color: #ff7b72;">SELECT</span> title, author, publish_year
<span style="color: #ff7b72;">FROM</span> library_books
<span style="color: #ff7b72;">WHERE</span> genre = <span style="color: #a5d6ff;">'Fantasy'</span> <span style="color: #ff7b72;">AND</span> pages > <span style="color: #79c0ff;">300</span>;
            </code></pre>
          </div>
          <p style="font-size: 1.05em; color: #b3b3b3;">בשאילתה זו אנו אומרים לרובוט: הבא לי רק את הכותרת, הסופר ושנת ההוצאה מתוך מאגר הספרים שלנו, אך התמקד <em>אך ורק</em> בספרי פנטזיה עבי-כרס (מעל 300 עמודים). זה מונע הצפה של נתונים לא רלוונטיים.</p>
        </div>
      `
    },
    {
      id: "order_by",
      title: "עשיית סדר בכאוס: ORDER BY",
      content: `
        <div class="theory-block" style="background: linear-gradient(145deg, #1e1e2f, #2a2a40); padding: 25px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); color: #e0e0e0; border-left: 5px solid #bd93f9; margin-bottom: 30px;">
          <h3 style="color: #ff79c6; border-bottom: 1px solid rgba(255,121,198,0.2); padding-bottom: 10px; margin-top: 0;"><i class="fas fa-sort-amount-down" style="margin-left: 10px;"></i>מיון וארגון התוצאות</h3>
          <p style="font-size: 1.1em; line-height: 1.6;">לאחר שהרובוט אסף את הספרים, הוא זורק אותם על שולחנכם בערימה מבולגנת. אתם צריכים את הדו"ח מסודר כדי להציג אותו למועצה. כאן נכנס לפעולה ה-<strong>ORDER BY</strong>, המאפשר לכם לסדר את התוצאות לפי כל עמודה, בסדר עולה (ASC) או יורד (DESC).</p>
          <div class="code-showcase" style="background: #0d1117; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #30363d;">
            <pre style="margin: 0; direction: ltr;"><code class="language-sql" style="color: #c9d1d9; font-family: 'Fira Code', monospace;">
<span style="color: #ff7b72;">SELECT</span> title, author, publish_year
<span style="color: #ff7b72;">FROM</span> library_books
<span style="color: #ff7b72;">WHERE</span> status = <span style="color: #a5d6ff;">'Available'</span>
<span style="color: #ff7b72;">ORDER BY</span> publish_year <span style="color: #ff7b72;">DESC</span>, title <span style="color: #ff7b72;">ASC</span>;
            </code></pre>
          </div>
          <p style="font-size: 1.05em; color: #b3b3b3;">פקודה זו מסדרת את הספרים הזמינים קודם כל לפי שנת ההוצאה מהחדש ביותר לישן ביותר (DESC). במקרה שבו יש מספר ספרים מאותה השנה, הם יסודרו ביניהם לפי סדר אלפביתי של הכותרת (ASC, שהוא גם ברירת המחדל).</p>
        </div>
      `
    },
    {
      id: "aggregate_functions",
      title: "מבט על: פונקציות צבירה (Aggregate Functions)",
      content: `
        <div class="theory-block" style="background: linear-gradient(145deg, #1e1e2f, #2a2a40); padding: 25px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); color: #e0e0e0; border-left: 5px solid #f1fa8c; margin-bottom: 30px;">
          <h3 style="color: #f1fa8c; border-bottom: 1px solid rgba(241,250,140,0.2); padding-bottom: 10px; margin-top: 0;"><i class="fas fa-chart-pie" style="margin-left: 10px;"></i>סיכומים וסטטיסטיקות</h3>
          <p style="font-size: 1.1em; line-height: 1.6;">לעתים, אינכם זקוקים לרשימת הספרים עצמה, אלא לשורה התחתונה - תובנות סטטיסטיות על המלאי. האם אנו חורגים מתקציב הרכש? מה הספר העתיק ביותר שברשותנו? פונקציות הצבירה לוקחות עמודה שלמה ומכווצות אותה לערך בודד ומשמעותי.</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center; border: 1px solid rgba(255,255,255,0.1);">
              <i class="fas fa-hashtag" style="font-size: 2em; color: #8be9fd; margin-bottom: 10px;"></i>
              <h4 style="margin: 0 0 5px 0; color: #8be9fd;">COUNT()</h4>
              <p style="margin: 0; font-size: 0.9em; color: #b3b3b3;">סופר את מספר השורות.</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center; border: 1px solid rgba(255,255,255,0.1);">
              <i class="fas fa-plus" style="font-size: 2em; color: #50fa7b; margin-bottom: 10px;"></i>
              <h4 style="margin: 0 0 5px 0; color: #50fa7b;">SUM()</h4>
              <p style="margin: 0; font-size: 0.9em; color: #b3b3b3;">סוכם את כל הערכים המספריים.</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center; border: 1px solid rgba(255,255,255,0.1);">
              <i class="fas fa-divide" style="font-size: 2em; color: #ffb86c; margin-bottom: 10px;"></i>
              <h4 style="margin: 0 0 5px 0; color: #ffb86c;">AVG()</h4>
              <p style="margin: 0; font-size: 0.9em; color: #b3b3b3;">מחשב את הממוצע החשבוני.</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center; border: 1px solid rgba(255,255,255,0.1);">
              <i class="fas fa-arrow-up" style="font-size: 2em; color: #ff5555; margin-bottom: 10px;"></i>
              <h4 style="margin: 0 0 5px 0; color: #ff5555;">MAX() / MIN()</h4>
              <p style="margin: 0; font-size: 0.9em; color: #b3b3b3;">מוצא את הערך המקסימלי או המינימלי.</p>
            </div>
          </div>
          <div class="code-showcase" style="background: #0d1117; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #30363d;">
            <pre style="margin: 0; direction: ltr;"><code class="language-sql" style="color: #c9d1d9; font-family: 'Fira Code', monospace;">
<span style="color: #ff7b72;">SELECT</span> 
    <span style="color: #d2a8ff;">COUNT</span>(*) <span style="color: #ff7b72;">AS</span> total_books_in_library,
    <span style="color: #d2a8ff;">SUM</span>(replacement_cost) <span style="color: #ff7b72;">AS</span> total_inventory_value,
    <span style="color: #d2a8ff;">AVG</span>(pages) <span style="color: #ff7b72;">AS</span> average_book_length,
    <span style="color: #d2a8ff;">MAX</span>(publish_year) <span style="color: #ff7b72;">AS</span> newest_acquisition,
    <span style="color: #d2a8ff;">MIN</span>(publish_year) <span style="color: #ff7b72;">AS</span> oldest_antique_book
<span style="color: #ff7b72;">FROM</span> library_books;
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: "group_by",
      title: "קיבוץ לקטגוריות: GROUP BY",
      content: `
        <div class="theory-block" style="background: linear-gradient(145deg, #1e1e2f, #2a2a40); padding: 25px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); color: #e0e0e0; border-left: 5px solid #ff79c6; margin-bottom: 30px;">
          <h3 style="color: #8be9fd; border-bottom: 1px solid rgba(139,233,253,0.2); padding-bottom: 10px; margin-top: 0;"><i class="fas fa-layer-group" style="margin-left: 10px;"></i>חלוקה לאגפים והפקת דוחות חתך</h3>
          <p style="font-size: 1.1em; line-height: 1.6;">הקסם האמיתי של הדו"חות מתרחש כאשר משלבים פונקציות צבירה עם <strong>GROUP BY</strong>. דמיינו שראש העיר שואל אתכם: "כמה ספרים יש לנו מכל ז'אנר בנפרד? ומה העלות הכוללת של כל ז'אנר?". במקום לכתוב שאילתה נפרדת לכל ז'אנר, ה-<code>GROUP BY</code> מורה לרובוט לאסוף את כל הספרים, לחלק אותם לערימות נפרדות לפי הז'אנר שלהם, ואז לבצע את הספירה והסיכום <em>על כל ערימה בנפרד</em>.</p>
          <div class="code-showcase" style="background: #0d1117; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #30363d;">
            <pre style="margin: 0; direction: ltr;"><code class="language-sql" style="color: #c9d1d9; font-family: 'Fira Code', monospace;">
<span style="color: #ff7b72;">SELECT</span> 
    genre,
    <span style="color: #d2a8ff;">COUNT</span>(*) <span style="color: #ff7b72;">AS</span> number_of_books,
    <span style="color: #d2a8ff;">AVG</span>(replacement_cost) <span style="color: #ff7b72;">AS</span> average_cost
<span style="color: #ff7b72;">FROM</span> library_books
<span style="color: #ff7b72;">GROUP BY</span> genre
<span style="color: #ff7b72;">ORDER BY</span> number_of_books <span style="color: #ff7b72;">DESC</span>;
            </code></pre>
          </div>
          <p style="font-size: 1.05em; color: #b3b3b3;">בשאילתה העוצמתית הזו, אנו מקבלים טבלת סיכום שבה כל שורה מייצגת ז'אנר אחד. לכל ז'אנר, אנו רואים בדיוק כמה ספרים משתייכים אליו ומה העלות הממוצעת שלו. לבסוף, אנו ממיינים את התוצאות מהז'אנר הפופולרי ביותר (עם הכי הרבה ספרים) ומטה. כספרנים, ה-GROUP BY הוא כלי העבודה המבריק ביותר שלכם להבנת הרכב המלאי בזמן אמת.</p>
        </div>
      `
    }
  ]
  }
};