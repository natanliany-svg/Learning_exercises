const dockerComposeContent = {
  dockerCompose: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced" style="background:#2563eb; color:white;">Frontend</div>
                <div class="flow-node-enhanced" style="background:#16a34a; color:white;">Backend</div>
                <div class="flow-node-enhanced" style="background:#dc2626; color:white;">Database</div>
            </div>
            `,
            text: "<b>1. כאוס של קונטיינרים</b><br>כשיש לנו אפליקציה מורכבת, קשה לנהל ידנית עשרות פקודות <code>docker run</code> ארוכות לכל שירות בנפרד."
        },
        {
            html_visual: `
            <div class="stack-visual bounce-in">
                <div class="stack-layer" style="background:#f59e0b; color:black; font-family:monospace;">docker-compose.yml</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↓</span></div>
                <div class="flow-diagram-enhanced">
                    <div class="flow-node-enhanced ripple-out">Web</div>
                    <div class="flow-node-enhanced ripple-out">API</div>
                    <div class="flow-node-enhanced ripple-out">DB</div>
                </div>
            </div>
            `,
            text: "<b>2. Docker Compose לוחץ על פליי</b><br>קובץ ה-YAML מגדיר את כל השירותים, הרשתות והווליומים. פקודה אחת (<code>docker-compose up</code>) מרימה את הכל בסדר הנכון."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced active" style="border-color:#38bdf8;">services:<br>&nbsp;&nbsp;db:<br>&nbsp;&nbsp;&nbsp;&nbsp;image: postgres</div>
            </div>
            `,
            text: "<b>3. מבנה הקובץ</b><br>הקובץ מגדיר <code>services</code>. כל שירות מקבל שם, תמונה (Image), פורטים, משתני סביבה, ואפילו תלויות (depends_on)."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced" style="opacity: 0.5;">Web (מת)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon" style="color:red;">❌</span></div>
                <div class="flow-node-enhanced active" style="background:#dc2626; color:white;">docker-compose down</div>
            </div>
            `,
            text: "<b>4. הריסה מבוקרת</b><br>בסיום העבודה, <code>docker-compose down</code> מכבה ומוחק את כל הקונטיינרים והרשתות שנוצרו, ומשאיר סביבה נקייה."
        }
    ],
    title: '🐙 Docker Compose (ניהול מספר קונטיינרים)',
    content: `
      <div class="card-body">
        <p class="lead">עד עכשיו למדנו להריץ קונטיינר בודד עם <code>docker run</code>. אבל מה קורה בעולם האמיתי? אפליקציה מודרנית מורכבת לרוב ממספר רכיבים: שרת צד-לקוח (React), שרת צד-שרת (Node.js/Python), ומסד נתונים (MongoDB/PostgreSQL). להריץ כל אחד מהם בנפרד, לזכור את הפורטים ולוודא שהם באותה רשת זו משימה מתסכלת ומועדת לשגיאות.</p>
        
        <h4>1. הכירו את Docker Compose</h4>
        <p><b>Docker Compose</b> הוא כלי (שמגיע מובנה היום עם Docker Desktop) שמאפשר לנו להגדיר ולהריץ אפליקציות מרובות-קונטיינרים. במקום להקליד פקודות ארוכות בטרמינל, אנחנו כותבים את כל התצורה בקובץ טקסט פשוט מסוג <b>YAML</b>, ומריצים פקודה אחת שמנצחת על כל התזמורת.</p>
        
        <div class="callout analogy">
          <span class="ico">🎼</span>
          <div class="ct"><b>אנלוגיה:</b> דמיינו תזמורת. פקודת <code>docker run</code> היא כמו לגשת לכל נגן בנפרד ולהסביר לו מה לנגן ומתי. קובץ <code>docker-compose.yml</code> הוא <b>התווים והמנצח</b> — כולם קוראים מהדף ומתחילים לנגן יחד בסנכרון מושלם.</div>
        </div>

        <h4>2. מבנה קובץ docker-compose.yml</h4>
        <p>הקובץ מבוסס על שפת YAML (שפה המבוססת על הזחות - Indentations, כמו פייתון). שימו לב שכל רווח חשוב!</p>
        <pre><code><span class="t-key">version</span>: <span class="t-str">'3.8'</span> <span class="t-com"># גרסת הסינטקס של קומפוז</span>

<span class="t-key">services</span>: <span class="t-com"># כאן נגדיר את כל הקונטיינרים שלנו</span>
  
  <span class="t-key">database</span>: <span class="t-com"># שם השירות הראשון (אפשר לקרוא לו איך שרוצים)</span>
    <span class="t-key">image</span>: <span class="t-str">postgres:15-alpine</span>
    <span class="t-key">environment</span>:
      <span class="t-key">POSTGRES_USER</span>: <span class="t-str">myuser</span>
      <span class="t-key">POSTGRES_PASSWORD</span>: <span class="t-str">mypass123</span>
      <span class="t-key">POSTGRES_DB</span>: <span class="t-str">myapp_db</span>
    <span class="t-key">ports</span>:
      - <span class="t-str">"5432:5432"</span>

  <span class="t-key">backend</span>:
    <span class="t-key">build</span>: <span class="t-str">./server</span> <span class="t-com"># במקום להוריד Image, קומפוז יבנה אותו מה-Dockerfile בתיקייה זו</span>
    <span class="t-key">ports</span>:
      - <span class="t-str">"3000:3000"</span>
    <span class="t-key">environment</span>:
      <span class="t-key">DB_HOST</span>: <span class="t-str">database</span> <span class="t-com"># שימו לב! אנחנו מתחברים לדאטהבייס בעזרת השם שלו בקומפוז</span>
    <span class="t-key">depends_on</span>:
      - <span class="t-str">database</span> <span class="t-com"># השרת ימתין עד שהדאטהבייס יתחיל לפני שהוא יעלה</span>

  <span class="t-key">frontend</span>:
    <span class="t-key">image</span>: <span class="t-str">nginx:alpine</span>
    <span class="t-key">ports</span>:
      - <span class="t-str">"80:80"</span>
    <span class="t-key">volumes</span>:
      - <span class="t-str">./client/build:/usr/share/nginx/html</span></code></pre>

        <h4>3. הפקודות החשובות של Compose</h4>
        <div class="tbl-scroll">
          <table>
            <tr><th>פקודה</th><th>מה היא עושה?</th></tr>
            <tr><td><code>docker-compose up</code></td><td>בונה את האימג'ים (אם חסרים) ומריץ את כל הקונטיינרים. הטרמינל ייתפס ויראה לוגים של כולם.</td></tr>
            <tr><td><code>docker-compose up -d</code></td><td>מריץ את הכל ברקע (Detached mode). הטרמינל חוזר אלינו מיד.</td></tr>
            <tr><td><code>docker-compose down</code></td><td>עוצר את הקונטיינרים ו<b>מוחק</b> אותם ואת הרשתות. התחלה נקייה!</td></tr>
            <tr><td><code>docker-compose logs -f</code></td><td>מציג את הלוגים של כל השירותים בזמן אמת.</td></tr>
            <tr><td><code>docker-compose build</code></td><td>מאלץ את קומפוז לבנות מחדש את האימג'ים (חשוב אם שינינו קוד או Dockerfile).</td></tr>
          </table>
        </div>

        <div class="callout warn">
          <span class="ico">⚠️</span>
          <div class="ct"><b>זהירות עם הזחות (Indentation) ב-YAML:</b> קבצי YAML לא משתמשים בסוגריים מסולסלים, אלא ברווחים כדי להבין היררכיה. אסור להשתמש ב-Tab, תמיד השתמשו ברווחים (לרוב 2 רווחים לכל רמה). אם המבנה לא מיושר בדיוק, פקודת ה-up תיכשל.</div>
        </div>

        <h4>4. היתרון העצום: רשת פנימית אוטומטית</h4>
        <p>כאשר אנחנו מריצים <code>docker-compose up</code>, דוקר יוצר אוטומטית <b>רשת פנימית (Network)</b> סגורה ומכניס אליה את כל השירותים שהגדרנו בקובץ. 
        בזכות הרשת הזו, הקונטיינרים יכולים לדבר אחד עם השני באמצעות <b>שם השירות</b> שלהם, כאילו היה כתובת URL!</p>
        <p>לדוגמה, ה-Backend לא צריך לדעת מה ה-IP האמיתי של ה-Database. הוא פשוט ישלח פנייה אל <code>http://database:5432</code>, ודוקר כבר יתרגם את המילה "database" ל-IP הפנימי הנכון. זה נקרא <b>Internal DNS Resolution</b>.</p>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> אם יש לכם שגיאת התחברות ל-DB מתוך שרת ה-Node שלכם, סביר להניח שבהגדרות החיבור (למשל משתנה הסביבה <code>DB_HOST</code>) כתבתם <code>localhost</code> במקום את השם של ה-service ב-compose (למשל <code>db</code>). בתוך קונטיינר השרת, localhost הוא הקונטיינר <b>עצמו</b>, לא המחשב שלכם או ה-DB!</div>
        </div>
      </div>
    `
  },
  dockerVolumes: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced" style="background:#dc2626; color:white;">קונטיינר</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">✂️</span></div>
                <div class="flow-node-enhanced" style="opacity:0.3;">קובץ נתונים</div>
            </div>
            `,
            text: "<b>1. קונטיינרים הם זמניים (Ephemeral)</b><br>כברירת מחדל, כל קובץ שנוצר בתוך הקונטיינר יושב בשכבה זמנית (Write Layer). ברגע שהקונטיינר נמחק – המידע אובד לנצח!"
        },
        {
            html_visual: `
            <div class="stack-visual">
                <div class="flow-diagram-enhanced">
                    <div class="flow-node-enhanced active">קונטיינר 1</div>
                    <div class="flow-arrow-enhanced"><span class="arrow-icon">↔️</span></div>
                    <div class="flow-node-enhanced ripple-out" style="background:#8b5cf6; color:white; border-radius:50%;">Volume</div>
                </div>
            </div>
            `,
            text: "<b>2. Docker Volumes</b><br>נפח אחסון (Volume) הוא כונן וירטואלי שמנוהל על ידי Docker. הוא יושב בבטחה על מחשב המארח ומחובר לקונטיינר, כך שהמידע שורד גם אם הקונטיינר קורס."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced" style="background:#10b981; color:white;">תיקייה מקומית<br><small>./src</small></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">🔄</span></div>
                <div class="flow-node-enhanced active">קונטיינר<br><small>/app</small></div>
            </div>
            `,
            text: "<b>3. Bind Mounts</b><br>סוג נוסף של מיפוי בו אנו מחברים תיקייה ספציפית מהמחשב שלנו לתוך הקונטיינר. שימושי מאוד לסביבת פיתוח (כדי לראות שינויים בקוד בזמן אמת ללא בנייה מחדש)."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced" style="border-color:#eab308;">קונטיינר א'</div>
                <div class="flow-arrow-enhanced" style="color:#eab308;"><span class="arrow-icon">~רשת פנימית~</span></div>
                <div class="flow-node-enhanced" style="border-color:#eab308;">קונטיינר ב'</div>
            </div>
            `,
            text: "<b>4. רשתות (Networks)</b><br>בנוסף למידע, אנו רוצים שקונטיינרים ידברו. Docker Networks מאפשר ליצור רשתות מבודדות, כך שרק קונטיינרים באותה רשת יכולים לתקשר."
        }
    ],

    title: '💾 Volumes ורשתות (שמירת מידע ותקשורת)',
    content: `
      <div class="card-body">
        <p class="lead">אחד הכללים הראשונים ב-Docker הוא ש<b>קונטיינרים הם אזרחים זמניים (Stateless)</b>. הם נועדו לעלות, לבצע עבודה, ולהימחק בקלות. אבל מה עושים כשצריך לשמור מידע באופן קבוע, כמו מסד נתונים או קבצי משתמשים? כאן נכנסים ה-Volumes לתמונה.</p>
        
        <h4>1. הבעיה של מידע זמני (Ephemeral Data)</h4>
        <p>כשקונטיינר כותב קובץ, הוא נשמר בתוך שכבת קריאה/כתיבה מיוחדת משלו. הבעיה היא שאם נמחוק את הקונטיינר (<code>docker rm</code> או <code>docker-compose down</code>), שכבת הכתיבה הזו נמחקת יחד איתו, וכל המידע אובד. אם מדובר בשרת Web – זה לא נורא, פשוט נרים חדש. אבל אם מדובר במסד נתונים של לקוחות – זה אסון.</p>

        <h4>2. סוגי אחסון מתמיד (Persistence) ב-Docker</h4>
        <p>Docker מציע שתי דרכים עיקריות לפתור זאת:</p>
        
        <div class="tbl-scroll">
          <table>
            <tr><th>סוג האחסון</th><th>איך זה עובד?</th><th>למה זה טוב?</th></tr>
            <tr><td><b>Named Volumes</b></td><td>דוקר יוצר תיקייה נסתרת ומנוהלת במערכת הקבצים של המארח וממפה אותה לקונטיינר.</td><td>לשמירת נתונים של דאטהבייס (MongoDB, MySQL) בצורה בטוחה בלי שנצטרך להתעסק בנתיבים.</td></tr>
            <tr><td><b>Bind Mounts</b></td><td>אנחנו בוחרים נתיב ספציפי ומפורש במחשב שלנו, ומחברים אותו ישירות לתוך הקונטיינר.</td><td>פיתוח (Hot-Reloading). השרת שבתוך הקונטיינר מגיב מיד כשאנחנו שומרים קובץ ב-VSCode שלנו.</td></tr>
          </table>
        </div>

        <div class="callout analogy">
          <span class="ico">🔌</span>
          <div class="ct"><b>אנלוגיה:</b> <b>Volume מנוהל</b> הוא כמו לשכור כספת בבנק – אתה רק מבקש מקום, הבנק שומר עליו ואתה לא יודע איפה הכספת פיזית. <b>Bind Mount</b> הוא כמו כבל USB ארוך שמחבר את הכונן הנייד שעל השולחן שלך ישירות לתוך המחשב הווירטואלי.</div>
        </div>

        <h4>3. עבודה עם Volumes ב-Docker Compose</h4>
        <p>הדרך המומלצת לעבוד עם ווליומים היא דרך קובץ ה-YAML. הנה דוגמה לשימוש בשני הסוגים:</p>
        <pre><code><span class="t-key">version</span>: <span class="t-str">'3.8'</span>

<span class="t-key">services</span>:
  <span class="t-key">database</span>:
    <span class="t-key">image</span>: <span class="t-str">mongo</span>
    <span class="t-key">volumes</span>:
      <span class="t-com"># Named Volume - שמירת הנתונים של מונגו</span>
      <span class="t-com"># צד ימין (קונטיינר):צד שמאל (שם הווליום שיוגדר למטה)</span>
      - <span class="t-str">mongo_data:/data/db</span>

  <span class="t-key">backend</span>:
    <span class="t-key">image</span>: <span class="t-str">node:18</span>
    <span class="t-key">volumes</span>:
      <span class="t-com"># Bind Mount - חיבור הקוד המקומי שלנו</span>
      <span class="t-com"># צד ימין (קונטיינר):צד שמאל (נתיב יחסי במחשב שלנו)</span>
      - <span class="t-str">./server_code:/usr/src/app</span>

<span class="t-com"># חובה להכריז על Named Volumes בתחתית הקובץ!</span>
<span class="t-key">volumes</span>:
  <span class="t-key">mongo_data</span>: <span class="t-com"># דוקר ייצור אותו אוטומטית</span></code></pre>

        <div class="callout warn">
          <span class="ico">⚠️</span>
          <div class="ct"><b>זהירות עם מחיקות:</b> פקודת <code>docker-compose down</code> מוחקת את הקונטיינרים, אבל היא <b>שומרת</b> על ה-Named Volumes כדי להגן על המידע שלכם. אם אתם רוצים למחוק גם את המידע לחלוטין (איפוס מוחלט), עליכם להריץ: <code>docker-compose down -v</code> (הדגל v מסמל volumes).</div>
        </div>

        <h4>4. רשתות (Networks) ב-Docker</h4>
        <p>באופן טבעי, קונטיינרים לא רואים אחד את השני כדי לשמור על בידוד ואבטחה. 
        אך כפי שראינו ב-Docker Compose, השירותים צריכים לדבר.</p>
        
        <p>דוקר מאפשר יצירת רשתות. קונטיינר יכול להיות חבר ברשת אחת או יותר. ברגע ששני קונטיינרים חברים באותה רשת (לדוגמה: <code>my_app_network</code>), מופעל מנגנון ה-DNS הפנימי של Docker. כעת, הם יכולים לבצע פינג או לפנות אחד לשני באמצעות השם שלהם, ללא צורך בכתובות IP מסובכות.</p>
        
        <pre><code><span class="t-com"># יצירת רשת ידנית בטרמינל (אפשרות אחת):</span>
docker network create my_custom_net

<span class="t-com"># הרצת שני קונטיינרים והכנסתם לאותה רשת:</span>
docker run -d --name web --network my_custom_net nginx
docker run -d --name api --network my_custom_net node_app

<span class="t-com"># עכשיו, הקונטיינר 'api' יכול לפנות ל-'http://web' !</span></code></pre>

        <p>ב-Docker Compose, כאמור, רוב הזמן לא נצטרך לנהל רשתות ידנית. Compose יוצר רשת אחת דיפולטיבית (Default Network) לשירותים באותו קובץ באופן אוטומטי, מה שמקל עלינו מאוד.</p>
        
        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> הבדל קריטי בין Port Mapping ל-Networks! כדי שקונטיינר א' ידבר עם קונטיינר ב' (באותה רשת), לא צריך לעשות להם מיפוי פורטים למחשב המארח (<code>-p 8080:80</code>). מיפוי פורטים נועד <b>רק</b> כדי שאתם (המשתמשים בדפדפן המארח) או העולם החיצון יוכלו לגשת לקונטיינר. בתוך הרשת הפנימית, כל הפורטים פתוחים בין הקונטיינרים.</div>
        </div>
      </div>
    `
  }
};
