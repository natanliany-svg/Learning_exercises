const sqlDmlContent = {
  sqlDml: {
    id: "sqlDml_id",
    title: `שפת תמרון נתונים - DML: אומנות הספרן`,
    metadata: {
      author: "Content Writer",
      category: "SQL"
    },
    content: `

    <style>
      @keyframes floatIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes glowText {
        0% { text-shadow: 0 0 5px rgba(52, 152, 219, 0.5); }
        50% { text-shadow: 0 0 20px rgba(52, 152, 219, 1); }
        100% { text-shadow: 0 0 5px rgba(52, 152, 219, 0.5); }
      }
      .dml-container {
        font-family: 'Inter', system-ui, sans-serif;
        background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
        color: #e0e0e0;
        padding: 40px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        direction: rtl;
        line-height: 1.8;
      }
      .dml-header {
        text-align: center;
        animation: floatIn 1s ease-out;
      }
      .dml-title {
        font-size: 2.5rem;
        color: #fff;
        animation: glowText 3s infinite;
      }
      .dml-section {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 25px;
        margin-top: 30px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: floatIn 1s ease-out backwards;
      }
      .dml-section:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.6);
      }
      .dml-section:nth-child(2) { animation-delay: 0.2s; }
      .dml-section:nth-child(3) { animation-delay: 0.4s; }
      .dml-section:nth-child(4) { animation-delay: 0.6s; }
      .dml-code {
        background: #1e1e1e;
        border-right: 4px solid #3498db;
        padding: 15px;
        border-radius: 5px;
        font-family: 'Fira Code', monospace;
        direction: ltr;
        text-align: left;
        color: #d4d4d4;
        overflow-x: auto;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .keyword { color: #569cd6; font-weight: bold; }
      .string { color: #ce9178; }
      .table-name { color: #4ec9b0; }
    </style>
  
<div class="content-description">ברוכים הבאים לספרייה הגדולה של בסיס הנתונים. כאן נלמד כיצד להוסיף ספרים חדשים (INSERT), לעדכן פרטים על ספרים קיימים (UPDATE) ולהסיר ספרים שאבדו (DELETE).</div>
<div class="sql-section">
        <h3>הוספת ספרים: הפקודה INSERT</h3>
        
        <div class="dml-container">
          <div class="dml-header">
            <h2 class="dml-title">הוספת ספרים: הפקודה INSERT</h2>
          </div>
          <div class="dml-section">
            <h3>הכנסת ידע חדש לארכיון</h3>
            <p>
              תארו לעצמכם משלוח חדש של ספרים המגיע לספרייה שלכם. אינכם יכולים פשוט לזרוק אותם על הרצפה; עליכם לקטלג אותם ולהציב אותם במדף הנכון. 
              בדיוק לשם כך נועדה פקודת ה-<code>INSERT</code>. היא מאפשרת לנו להוסיף רשומות חדשות (ספרים) לטבלה (הספרייה שלנו).
            </p>
            <div class="dml-code">
              <span class="keyword">INSERT INTO</span> <span class="table-name">library_books</span> (title, author, published_year)<br>
              <span class="keyword">VALUES</span> (<span class="string">'The Name of the Wind'</span>, <span class="string">'Patrick Rothfuss'</span>, 2007);
            </div>
            <p>
              בפעולה זו, אנו מציינים במדויק באילו עמודות נרצה להזין מידע, ולאחר מכן מספקים את הערכים התואמים. בדיוק כמו ספרן המדביק תווית על כריכת הספר ומניח אותו בעדינות במקומו.
            </p>
          </div>
        </div>
      
      </div>
<div class="sql-section">
        <h3>עדכון מידע: הפקודה UPDATE</h3>
        
        <div class="dml-container">
          <div class="dml-header">
            <h2 class="dml-title">עדכון מידע: הפקודה UPDATE</h2>
          </div>
          <div class="dml-section">
            <h3>תיקון כרטסת הספרייה</h3>
            <p>
              לעיתים, מידע משתנה. אולי ספר הועבר לאגף אחר, או שגילינו טעות בשם הסופר. איננו צריכים לזרוק את הספר ולקנות חדש; אנו פשוט מעדכנים את הכרטסת.
              פקודת ה-<code>UPDATE</code> עושה בדיוק את זה. היא מאפשרת לנו לשנות נתונים קיימים במדויק.
              <strong>אזהרה חמורה:</strong> תמיד, אבל תמיד, השתמשו במשפט ה-<code>WHERE</code>. אחרת, תשנו בטעות את כל הספרים בספרייה בבת אחת!
            </p>
            <div class="dml-code">
              <span class="keyword">UPDATE</span> <span class="table-name">library_books</span><br>
              <span class="keyword">SET</span> shelf_location = <span class="string">'Fantasy-A1'</span><br>
              <span class="keyword">WHERE</span> title = <span class="string">'The Name of the Wind'</span>;
            </div>
            <p>
              הספרן שלנו חיפש בדיוק את הספר הספציפי, ורק בו הוא עדכן את המיקום החדש. פעולה אלגנטית, כירורגית, וללא כל נזק משני.
            </p>
          </div>
        </div>
      
      </div>
<div class="sql-section">
        <h3>הסרת פריטים: הפקודה DELETE</h3>
        
        <div class="dml-container">
          <div class="dml-header">
            <h2 class="dml-title">הסרת פריטים: הפקודה DELETE</h2>
          </div>
          <div class="dml-section">
            <h3>גריטת ספרים פגומים או אבודים</h3>
            <p>
              ספרים לעיתים הולכים לאיבוד, נהרסים, או פשוט מוצאים מהמחזור בגלל התיישנות. במקרים כאלה, עלינו למחוק את הרישום שלהם כדי לפנות מקום בכרטסת ובמדפים.
              פקודת ה-<code>DELETE</code> היא המספריים החדים של הספרן. 
              ושוב, משפט ה-<code>WHERE</code> הוא קריטי כאן. ללא ציון תנאי מפורש, אתם עלולים בטעות לשרוף את הספרייה כולה עד היסוד!
            </p>
            <div class="dml-code">
              <span class="keyword">DELETE FROM</span> <span class="table-name">library_books</span><br>
              <span class="keyword">WHERE</span> status = <span class="string">'Lost'</span>;
            </div>
            <p>
              במשפט אחד פשוט ועוצמתי, ניקינו את כל הרשומות המיותרות. הספרייה שלנו נותרה מאורגנת, מדויקת ומוכנה לחלוטין לקורא הבא.
            </p>
          </div>
        </div>
      
      </div>

    `
  }
};
