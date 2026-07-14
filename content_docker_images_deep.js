const dockerImagesDeepContent = {
  dockerImagesDeepDive: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="stack-visual">
                <div class="stack-item active" style="opacity:1; font-weight:bold; background:var(--bg-card); color:var(--text-main);">Container Layer (Read/Write)</div>
                <div class="stack-item" style="opacity:0.9;">Image Layer 3: CMD ["node", "app.js"]</div>
                <div class="stack-item" style="opacity:0.8;">Image Layer 2: COPY . .</div>
                <div class="stack-item" style="opacity:0.6; background:var(--primary);">Image Layer 1: FROM node:alpine</div>
            </div>
            `,
            text: "<b>שלב 1: אנטומיה של שכבות (Layers)</b><br>תמונה (Image) היא לא קובץ אחד ענק. היא מורכבת מהמון שכבות לקריאה בלבד (Read-Only). כשאתם מריצים קונטיינר, דוקר מוסיף שכבה אחת שקופה מלמעלה שאפשר גם לכתוב אליה (R/W). כל השינויים שהקונטיינר עושה - נשמרים רק בשכבה העליונה!"
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">Base Image<br>500MB</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">+</span></div>
                <div class="flow-node-enhanced" style="border-color:#ffd700;">My Code<br>10MB</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">=</span></div>
                <div class="flow-node-enhanced active bounce-in" style="border-color:#00cc88;">Final Image<br>510MB</div>
            </div>
            `,
            text: "<b>שלב 2: שיתוף שכבות (Storage Efficiency)</b><br>אם יש לכם 10 קונטיינרים שונים שמבוססים על אותו Base Image (למשל Node), המחשב לא שומר את ה-500MB עשר פעמים! כל הקונטיינרים חולקים בדיוק את אותה שכבת בסיס מההרדיסק. חיסכון מטורף במקום."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced" style="font-family:monospace; font-size:12px;">FROM ubuntu<br>RUN apt update<br>RUN apt install git<br>RUN apt install curl</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label error">רע</span></div>
                <div class="flow-node-enhanced active" style="font-family:monospace; font-size:12px; border-color:#00cc88;">FROM ubuntu<br>RUN apt update && \\<br>&nbsp;&nbsp;&nbsp;apt install -y git curl</div>
            </div>
            `,
            text: "<b>שלב 3: צמצום שכבות</b><br>כל פקודת RUN ב-Dockerfile יוצרת שכבה חדשה ששוקלת מקום. Best Practice חשוב הוא לשרשר פקודות RUN עם `&&` כדי ליצור רק שכבה אחת מרוכזת."
        }
    ],

    title: '🖼️ אנטומיה של תמונה (Docker Images Deep Dive)',
    content: `
      <div class="card-body">
        <p class="lead">הסיכום השני (Docker Images & Dockerfile) מתמקד עמוק במבנה התמונה (Image) ואיך לייעל אותה.</p>
        
        <h4>1. Union File System</h4>
        <p>דוקר משתמש במערכת קבצים מיוחדת שמאפשרת להניח קבצים ותיקיות אחת על גבי השנייה. 
        ה-Image מורכב משכבות קפואות. כשקונטיינר עולה, נוצרת <b>שכבה דקה לקריאה וכתיבה</b> מעל הכל.
        אם קונטיינר מנסה לשנות קובץ קיים, דוקר מפעיל מנגנון שנקרא <b>Copy-on-Write</b>: הוא מעתיק את הקובץ המקורי מהשכבה הקפואה למעלה אל השכבת כתיבה, ואז משנה אותו.</p>

        <h4>2. Cache Invalidation (איך הקאש נשבר?)</h4>
        <p>בזמן <code>docker build</code>, דוקר בודק כל שורת פקודה מול הקאש. ברגע ששורה אחת משתנה (או שהקובץ שהיא מעתיקה השתנה), <b>כל השכבות שבאות אחריה נבנות מחדש מאפס!</b></p>
        <pre><code><span class="t-com"># לכן הסדר קריטי!</span>
<span class="t-key">COPY</span> package.json . <span class="t-com"># ישתנה רק אם הוספתם חבילה ל-npm</span>
<span class="t-key">RUN</span> npm install     <span class="t-com"># ישתמש בקאש כל עוד השורה הקודמת לא השתנתה!</span>

<span class="t-key">COPY</span> src/ ./src     <span class="t-com"># זה משתנה בכל פעם שאתם שומרים קובץ קוד</span>
<span class="t-key">CMD</span> ["npm", "start"]<span class="t-com"># תמיד ירוץ מחדש יחד עם שורת הקוד (אבל זה שבריר שנייה)</span></code></pre>

        <h4>3. ניהול תמונות ותגיות (Tags)</h4>
        <p>תמונות מקבלות תגיות כדי לסמן גרסאות (בדיוק כמו ב-Git).</p>
        <ul class="tight">
          <li><code>docker build -t myapp:1.0 .</code> - בונה תמונה ונותן לה תגית של גרסה 1.0.</li>
          <li><code>docker build -t myapp:latest .</code> - תגית ברירת המחדל אם לא ציינתם אחת. זו לא מילת קסם, זה פשוט השם הדיפולטיבי!</li>
          <li><code>docker tag myapp:1.0 username/myapp:v1</code> - משכפל את התגית ומכין אותה לדחיפה ל-DockerHub תחת המשתמש שלכם.</li>
          <li><code>docker push username/myapp:v1</code> - מעלה את התמונה לענן!</li>
        </ul>
      </div>
    `
  },
  dockerfileInstructions: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced" style="border-color:#ff0055;">COPY<br><span style="font-size:10px;">רק העתקה פשוטה</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">VS</span></div>
                <div class="flow-node-enhanced active pulse-glow" style="border-color:#38bdf8;">ADD<br><span style="font-size:10px;">מעתיק + מחלץ ZIP + מוריד מ-URL</span></div>
            </div>
            `,
            text: "<b>שלב 1: COPY מול ADD</b><br>למרות ש-ADD נראה יותר חזק, חוק הברזל (Best Practice) הוא תמיד להשתמש ב-COPY להעתקת קבצים רגילים! ADD מסוכן כי הוא יכול להוריד דברים בלתי צפויים ולחלץ אוטומטית. נשתמש ב-ADD רק כשאנחנו חייבים את היכולות המיוחדות שלו."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#ffd700;">CMD ["npm", "start"]<br><span style="font-size:10px;">ברירת מחדל (ניתן לדרוס)</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">VS</span></div>
                <div class="flow-node-enhanced active" style="border-color:#00cc88;">ENTRYPOINT ["node"]<br><span style="font-size:10px;">מנוע קבוע (בלתי ניתן לדריסה קלה)</span></div>
            </div>
            `,
            text: "<b>שלב 2: CMD מול ENTRYPOINT</b><br>אם השתמשתם ב-CMD, מי שיפעיל את הקונטיינר יכול להוסיף 'bash' בסוף והקונטיינר לא יפעיל את האפליקציה בכלל. אם השתמשתם ב-ENTRYPOINT - המנוע תמיד יפעל, והתוספות שיעביר המשתמש ייחשבו כפרמטרים לפונקציה!"
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced">ARG VERSION=18<br><span style="font-size:10px;">Build Time</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active" style="border-color:#ff0055;">ENV NODE_ENV=prod<br><span style="font-size:10px;">Run Time</span></div>
            </div>
            `,
            text: "<b>שלב 3: ARG מול ENV</b><br>ARG זה משתנה שקיים <b>רק</b> בזמן הבנייה של התמונה (למשל, מאיזו גרסה של Node לבנות). ENV הוא משתנה שמוזרק לתוך התמונה ונשאר שם <b>לתמיד</b> גם כשהקונטיינר חי ורץ!"
        }
    ],

    title: '📝 פקודות Dockerfile (הבדלים דקים ששואלים בראיונות)',
    content: `
      <div class="card-body">
        <p class="lead">הקובץ "Docker Images & Dockerfile" נכנס להבדלים הדקים ביותר בין פקודות שנראות דומות. זה המקום שבו נופלים רוב המפתחים בראיונות עבודה.</p>
        
        <h4>1. COPY vs ADD</h4>
        <ul class="tight">
          <li><b><code>COPY</code></b>: לוקחת קובץ מהמחשב שלך ומעתיקה אותו פנימה לקונטיינר כפי שהוא. <b>תמיד העדיפו אותה!</b> היא שקופה וברורה.</li>
          <li><b><code>ADD</code></b>: עושה את מה ש-COPY עושה, <b>אבל בנוסף</b> אם תתנו לה קישור ל-URL היא תוריד אותו, ואם תתנו לה קובץ <code>.tar.gz</code> היא תחלץ אותו אוטומטית פנימה.</li>
        </ul>

        <h4>2. CMD vs ENTRYPOINT</h4>
        <p>שתיהן מגדירות מה הקונטיינר יריץ כשהוא נדלק, אבל הגישה שונה:</p>
        <ul class="tight">
          <li><b><code>CMD</code></b>: מגדיר ברירת מחדל רכה. אם כתבתם בטרמינל <code>docker run myapp bash</code> - המילה bash <b>דורסת לחלוטין</b> את כל ה-CMD והקונטיינר יפתח טרמינל במקום להפעיל את שרת ה-Node.</li>
          <li><b><code>ENTRYPOINT</code></b>: מגדיר את הקונטיינר כקובץ הפעלה (Executable). לא ניתן לדרוס אותו בקלות. אם תכתבו <code>ENTRYPOINT ["node", "app.js"]</code>, לא משנה מה תכתבו בטרמינל, השרת ירוץ. מה שתכתבו בטרמינל פשוט יתווסף כארגומנט לתוך הסקריפט (כמו <code>process.argv</code>).</li>
        </ul>
        <p>💡 <b>טיפ של אלופים:</b> אפשר לשלב אותם! ENTRYPOINT יהיה המנוע ("node"), ו-CMD יכיל פרמטרים התחלתיים ("app.js").</p>

        <h4>3. הבדלים בין ARG ל- ENV</h4>
        <ul class="tight">
          <li><b><code>ARG</code></b>: משתנה "זמני" שחי רק בזמן פקודת ה-<code>docker build</code>. האפליקציה המקומפלת שלכם <b>לא</b> תכיר אותו כשהיא תרוץ.</li>
          <li><b><code>ENV</code></b>: משתנה סביבה קבוע שנצרב לתוך ה-Image, וכל קונטיינר שיוולד ממנו יקבל את המשתנה הזה לתמיד אל תוך ה-<code>process.env</code> שלו.</li>
        </ul>
      </div>
    `
  },
  dockerMultiStage: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#ff0055;">Builder Stage<br><span style="font-size:10px;">Node.js + TS (800MB)</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">Copy JS only →</span></div>
                <div class="flow-node-enhanced active pulse-glow" style="border-color:#00cc88;">Final Stage<br><span style="font-size:10px;">Alpine Node (50MB)</span></div>
            </div>
            `,
            text: "<b>שלב 1: הבנייה הכפולה (Multi-Stage)</b><br>במקום לבנות אימג' מפלצתי שמכיל קומפיילרים ותלויות פיתוח, אנחנו בונים את הקוד בשלב אחד (Builder), ורק מעתיקים את התוצאה הסופית המקומפלת לשלב שני, קטן ונקי!"
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced" style="width:100%; text-align:left; font-family:monospace; line-height:1.2; font-size:11px;">
                    <span style="color:#ff0055;">FROM node:18 AS builder</span><br>
                    COPY . .<br>
                    RUN npm run build<br><br>
                    <span style="color:#00cc88;">FROM node:18-alpine</span><br>
                    COPY --from=builder /app/dist ./dist<br>
                    CMD ["node", "dist/app.js"]
                </div>
            </div>
            `,
            text: "<b>שלב 2: הקוד בפעולה</b><br>ככה זה נראה! ב-Dockerfile אחד יש פעמיים את המילה 'FROM'. השנייה דורסת את הראשונה, ומשאירה את כל ה'זבל' המיותר (TypeScript, SCSS) מאחור. קיבלנו Image קליל ומאובטח."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced active" style="border-color:#ffd700;">.dockerignore<br><span style="font-size:10px;">node_modules<br>.env<br>.git</span></div>
            </div>
            `,
            text: "<b>שלב 3: מונעים זליגת מידע</b><br>בלי קשר ל-Multi Stage, קובץ ה-`.dockerignore` הוא חובת חובה. הוא מונע מתיקיות ששוקלות המון (כמו node_modules המקומית שלכם) לעלות לקונטיינר בזמן פקודת ה-COPY, ומונע הדלפה של סיסמאות."
        }
    ],

    title: '🚀 בניה בשלבים ומיטוב (Multi-stage Builds)',
    content: `
      <div class="card-body">
        <p class="lead">זהו כלי הנשק הסודי של מפתחי DevOps מקצועיים. Multi-stage build מאפשר לכם להשתמש בכלים כבדים כדי לקמפל את הקוד (למשל TypeScript או React), אבל לזרוק אותם החוצה מהתוצאה הסופית.</p>
        
        <h4>למה צריך Multi-stage Build?</h4>
        <p>נניח שאתם כותבים אפליקציית React. בשביל לקמפל אותה אתם צריכים Node.js כבד ואת כל ה-<code>node_modules</code>. אבל בשביל להריץ את ה-React הסופי (קבצי ה-HTML/CSS/JS בלבד), אתם צריכים רק שרת Nginx סופר-קל של 10MB! אין שום סיבה שה-Node.js ייכנס לאימג' הסופי של הפרודקשן.</p>

        <h4>איך זה נראה ב-Dockerfile?</h4>
        <pre><code><span class="t-com"># שלב 1: שלב הבנייה (ניתן לו שם 'builder')</span>
<span class="t-key">FROM</span> node:18 <span class="t-key">AS</span> builder
<span class="t-key">WORKDIR</span> /app
<span class="t-key">COPY</span> package.json ./
<span class="t-key">RUN</span> npm install
<span class="t-key">COPY</span> . .
<span class="t-key">RUN</span> npm run build <span class="t-com"># מייצר תיקיית dist עם קבצים סטטיים</span>

<span class="t-com"># שלב 2: השלב הסופי (Image קליל)</span>
<span class="t-key">FROM</span> nginx:alpine
<span class="t-com"># מעתיקים רק את התוצאה מהשלב הקודם!</span>
<span class="t-key">COPY</span> --from=builder /app/dist /usr/share/nginx/html
<span class="t-key">EXPOSE</span> 80
<span class="t-key">CMD</span> ["nginx", "-g", "daemon off;"]</code></pre>

        <p>התוצאה? האימג' שלכם יצנח מ-1.5GB ל-15MB! השרת יעלה מהר יותר, יהיה זול יותר לאחסון, <b>והרבה יותר בטוח</b> (כי להאקר שמצליח לחדור לקונטיינר, אין אפילו שורת פקודה או סקריפטים של התקנה כדי לבצע התקפה).</p>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>דגש מהקלאסרום:</b> תמיד להשתמש ב-<code>.dockerignore</code> כדי להתעלם מתיקיית ה-<code>node_modules</code> המקומית שלכם. התלויות שלכם צריכות להיות מותקנות נקיות וטריות בתוך הקונטיינר דרך <code>RUN npm install</code>, ולא מועתקות ישירות מהלפטופ, שעשויות להיות מקומפלות לא נכון (למשל Windows מול Linux).</div>
        </div>
      </div>
    `
  }
};
