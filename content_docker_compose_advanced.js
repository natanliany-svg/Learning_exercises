const dockerComposeAdvancedContent = {
  dockerComposeAdvanced: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">App Service<br><span style="font-size:10px;">Depends on DB</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active" style="border-color:#00cc88;">DB Service<br><span style="font-size:10px;">MongoDB</span></div>
            </div>
            `,
            text: "<b>שלב 1: סדר הדלקה (depends_on)</b><br>בעזרת `depends_on` אנחנו מבטיחים שקונטיינר ה-App לא ינסה לעלות לפני שקונטיינר ה-DB קם. חשוב: זה רק מוודא שהקונטיינר *נדלק*, זה לא מבטיח שהדאטה-בייס מוכן לקבל חיבורים!"
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced" style="border-color:#ff0055;">App</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">Network: backend</span></div>
                <div class="flow-node-enhanced active" style="border-color:#ff0055;">DB</div>
            </div>
            `,
            text: "<b>שלב 2: תקשורת פנימית (Networks)</b><br>כברירת מחדל דוקר שם את כל השירותים באותה רשת. האפליקציה פשוט צריכה לפנות לכתובת `mongodb://db:27017` ודוקר ידע לנתב את זה אוטומטית לפי השם של השירות!"
        },
        {
            html_visual: `
            <div class="stack-visual">
                <div class="stack-item active" style="background:#00cc88; color:#000;">Persistent Volume (Hard Drive)</div>
                <div class="stack-item" style="border-color:#ffd700;">DB Container (Memory/Temp)</div>
            </div>
            `,
            text: "<b>שלב 3: שמירת נתונים (Volumes)</b><br>אם קונטיינר נמחק - כל המידע בו הולך לאיבוד! לכן משתמשים ב-Volumes (למשל `mongo-data:/data/db`). זה מחבר תיקייה וירטואלית קבועה בהארד-דיסק ישירות לתוך הקונטיינר."
        }
    ],

    title: '🐙 תזמור מתקדם (Docker Compose Mastery)',
    content: `
      <div class="card-body">
        <p class="lead">הקובץ השלישי מתמקד לחלוטין בתזמור - איך לנהל תזמורת שלמה של קונטיינרים (אפליקציה, מסד נתונים, שרתי זיכרון) מקובץ <code>docker-compose.yml</code> יחיד.</p>
        
        <div class="callout exam" style="margin-bottom: 20px; background: rgba(0, 204, 136, 0.1); border-color: #00cc88;">
          <span class="ico">📥</span>
          <div class="ct">
            <b>חומר עזר חדש להורדה:</b><br>
            <a href="pdfs/Docker%20Compose%20(1).pdf" download style="color: #38bdf8; text-decoration: none; font-weight: bold; margin-left: 15px;">📄 Docker Compose (1).pdf</a>
          </div>
        </div>

        <h4>הגדרות מתקדמות בקובץ</h4>
        <ul class="tight">
          <li><b><code>build: .</code></b> - במקום להוריד אימג' קיים, הקומפוז יקרא את ה-Dockerfile בתיקייה ויבנה את האימג' במקום.</li>
          <li><b><code>environment:</code></b> - מאפשר להזריק משתני סביבה כמו סיסמאות או פורטים ישר לתוך הקונטיינרים.</li>
          <li><b><code>depends_on:</code></b> - מגדיר ששירות א' תלוי בשירות ב'. זה מסדר את סדר ההדלקה (אפליקציה תעלה רק אחרי ה-DB).</li>
          <li><b><code>container_name:</code></b> - דורס את השם הרנדומלי הארוך שדוקר ממציא ונותן שם קריא וברור לקונטיינר.</li>
        </ul>

        <h4>Volumes & Networks</h4>
        <p><b>רשתות (Networks):</b> כל השירותים באותו קובץ Compose יכולים לדבר אחד עם השני פשוט על ידי שימוש בשם השירות. לדוגמה, אם קראתם לשירות של מונגו <code>db</code>, אז קוד ה-Node.js שלכם יתחבר ל-<code>mongodb://db:27017</code> במקום ל-localhost!</p>
        <p><b>אחסון קבוע (Volumes):</b> אם קונטיינר של מסד נתונים קורס, כל המידע נמחק. הפתרון הוא להגדיר Volume ששומר את המידע מחוץ לקונטיינר.</p>

        <pre><code><span class="t-com"># דוגמה לתצורת Volume קבועה</span>
<span class="t-key">services:</span>
  <span class="t-key">db:</span>
    <span class="t-key">image:</span> mongo
    <span class="t-key">volumes:</span>
      - mongo-data:/data/db

<span class="t-com"># חובה להכריז על ה-Volume בסוף הקובץ!</span>
<span class="t-key">volumes:</span>
  <span class="t-key">mongo-data:</span></code></pre>

        <h4>פקודות מפתח ב-Compose</h4>
        <ul class="tight">
          <li><code>docker compose up -d</code> - הדלקת כל המערכת ברקע (Detached).</li>
          <li><code>docker compose down</code> - כיבוי כל הקונטיינרים <b>ומחיקת הרשתות</b> שנוצרו. (ה-Volumes לא נמחקים, המידע בטוח!).</li>
          <li><code>docker compose build</code> - בנייה מחדש של האימג'ים במקרה ששיניתם קוד.</li>
          <li><code>docker compose logs -f</code> - מעקב חי אחרי הלוגים של כל הקונטיינרים יחד!</li>
        </ul>
      </div>
    `
  }
};
