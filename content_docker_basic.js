const dockerBasicContent = {
  dockerIntro: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#ff0055;">מכונה וירטואלית (VM)<br><span style="font-size:10px;">מערכת הפעלה שלמה לכל אפליקציה!</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">VS</span></div>
                <div class="flow-node-enhanced active bounce-in" style="border-color:#00d2ff;">Docker Container<br><span style="font-size:10px;">חולקים את הליבה (Kernel), קלים ומהירים</span></div>
            </div>
            `,
            text: "<b>שלב 1: למה צריך דוקר?</b><br>בעבר, כדי להריץ אפליקציה בנפרד, היינו צריכים להתקין שרת וירטואלי שלם וכבד (VM). דוקר משנה את המשחק - הקונטיינרים שלו קלי משקל, חולקים את אותה מערכת הפעלה ונדלקים בשניות."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced">קוד המקור שלי</div>
                <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced pulse-glow delay-2" style="border-color:#ffd700;">אורזים לתמונה (Image)</div>
                <div class="flow-arrow-enhanced delay-3"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active delay-4" style="border-color:#00cc88;">קונטיינר רץ!</div>
            </div>
            `,
            text: "<b>שלב 2: מאימג' לקונטיינר</b><br>ה-Image היא התבנית - קובץ קפוא שמכיל את הקוד, הסביבה והכלים. ה-Container הוא המופע החי והנושם של התבנית הזו שרץ בפועל על השרת."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced active" style="border-color:#38bdf8;">המחשב שלי (Dev)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">אותו אימג'!</span></div>
                <div class="flow-node-enhanced active" style="border-color:#38bdf8;">שרת מרוחק (Prod)</div>
            </div>
            `,
            text: "<b>שלב 3: 'אצלי זה עבד!'</b><br>דוקר פותר את הבעיה הנפוצה ביותר בתכנות. מה שעובד אצלך על הלפטופ - יעבוד בדיוק אותו הדבר על השרת בייצור, כי הסביבה ארוזה יחד עם הקוד."
        }
    ],

    title: '🐳 מבוא ל-Docker (דוקר - מושגי יסוד)',
    content: `
      <div class="card-body">
        <p class="lead">דוקר (Docker) היא פלטפורמה שמטרתה לארוז אפליקציות ואת כל התלויות שלהן (ספריות, גרסאות תוכנה) ליחידה סטנדרטית הנקראת <b>קונטיינר (Container)</b>. זה מבטיח שהאפליקציה תרוץ באופן זהה בכל סביבה.</p>
        
        <h4>1. ההבדל בין Docker לבין מכונות וירטואליות (VM)</h4>
        <ul class="tight">
          <li><b>VM (Virtual Machine)</b> — מתקינה מערכת הפעלה <b>שלמה וכבדה</b> עבור כל אפליקציה. לוקחת ג'יגות של זיכרון וזמן ארוך לעלות.</li>
          <li><b>Docker Container</b> — חולק את מערכת ההפעלה (Kernel) עם השרת המארח. שוקל מגה-בייטים ספורים, עולה בחלקיק שנייה ודורש מינימום משאבים.</li>
        </ul>

        <h4>2. שילוש הזהב של דוקר: Dockerfile, Image, Container</h4>
        <p>כדי לעבוד עם דוקר, חייבים להבין את מחזור החיים:</p>
        <ol>
          <li><b>Dockerfile</b>: ה"מתכון". קובץ טקסט פשוט עם הוראות איך לבנות את האפליקציה.</li>
          <li><b>Image (תמונה)</b>: התוצאה של בישול המתכון. קובץ קפוא, קריא-בלבד (Read-Only) שמכיל הכל.</li>
          <li><b>Container (קונטיינר)</b>: תהליך חי שרץ על המחשב, מבוסס על ה-Image. אפשר להריץ עשרות קונטיינרים מאותו Image בדיוק!</li>
        </ol>

        <h4>3. פקודות בסיס מתוך הקלאסרום</h4>
        <pre><code><span class="t-com"># בניית תמונה (Image) מקובץ Dockerfile בתיקייה הנוכחית</span>
docker build -t my-app-name <span class="t-num">.</span>

<span class="t-com"># הרצת קונטיינר מתוך התמונה שיצרנו</span>
<span class="t-com"># -p 3000:80 -> מחבר את פורט 3000 אצלנו, לפורט 80 בתוך הקונטיינר</span>
<span class="t-com"># -d -> מריץ ברקע (Detached mode)</span>
docker run -p <span class="t-num">3000</span>:<span class="t-num">80</span> -d my-app-name

<span class="t-com"># הצגת כל הקונטיינרים שרצים כרגע</span>
docker ps

<span class="t-com"># עצירת קונטיינר לפי ID</span>
docker stop &lt;container-id&gt;</code></pre>

        <div class="callout analogy">
          <span class="ico">🏗️</span>
          <div class="ct"><b>אנלוגיה:</b>
            <br>• ה-<b>Dockerfile</b> הוא השרטוט האדריכלי של הבית.
            <br>• ה-<b>Image</b> הוא התבנית לצקת בטון שמיוצרת מהשרטוט.
            <br>• ה-<b>Container</b> הוא הבית האמיתי שבו אפשר לגור!
          </div>
        </div>
      </div>
    `
  },
  dockerfile: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced typewriter">
                <div class="flow-node-enhanced" style="width:100%; text-align:left; font-family:monospace;">
                    <span style="color:#ff0055;">FROM</span> node:18<br>
                    <span style="color:#ff0055;">WORKDIR</span> /app<br>
                    <span style="color:#ff0055;">COPY</span> . .<br>
                    <span style="color:#ff0055;">RUN</span> npm install<br>
                    <span style="color:#ff0055;">CMD</span> ["npm", "start"]
                </div>
            </div>
            `,
            text: "<b>שלב 1: ה-Dockerfile</b><br>קובץ שורות פשוט שמכיל הוראות קצרות. כל הוראה מתחילה במילת מפתח גדולה (כמו FROM או COPY)."
        },
        {
            html_visual: `
            <div class="stack-visual">
                <div class="stack-item" style="opacity:1;">Layer 4: CMD ["npm", "start"]</div>
                <div class="stack-item" style="opacity:0.9;">Layer 3: RUN npm install</div>
                <div class="stack-item" style="opacity:0.7;">Layer 2: COPY . .</div>
                <div class="stack-item" style="opacity:0.5; background:var(--primary);">Layer 1: FROM node:18 (Base Image)</div>
            </div>
            `,
            text: "<b>שלב 2: שכבות (Layers)</b><br>כשדוקר בונה את ה-Image, כל פקודה ב-Dockerfile יוצרת 'שכבה' חדשה שנשמרת בזיכרון מטמון. אם שינית רק שורה אחת, דוקר יבנה מחדש רק את השכבות שבאות אחריה!"
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced active">COPY package.json .</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↓</span></div>
                <div class="flow-node-enhanced active">RUN npm install</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↓</span></div>
                <div class="flow-node-enhanced" style="border-color:#ff0055;">COPY . .</div>
            </div>
            `,
            text: "<b>שלב 3: טריק האופטימיזציה</b><br>כדי לחסוך זמן ריצה, אנחנו קודם מעתיקים רק את קובץ התלויות ומריצים התקנה. רק לאחר מכן מעתיקים את כל שאר קוד האפליקציה. זה שומר על מטמון ה-npm יציב!"
        }
    ],

    title: '🏗️ Dockerfile (יצירת תמונות מותאמות אישית)',
    content: `
      <div class="card-body">
        <p class="lead">ה-<code>Dockerfile</code> הוא קובץ הוראות (בלי סיומת) שאומר לדוקר איך בדיוק להרכיב את ה-Image של האפליקציה שלכם.</p>
        
        <h4>1. מבנה ה-Dockerfile (שורה אחרי שורה)</h4>
        <pre><code><span class="t-com"># 1. תמיד מתחילים מתמונת בסיס! (למשל סביבת Node מוכנה מראש)</span>
<span class="t-key">FROM</span> node:18-alpine

<span class="t-com"># 2. קביעת תיקיית העבודה בתוך הקונטיינר הווירטואלי</span>
<span class="t-key">WORKDIR</span> /app

<span class="t-com"># 3. העתקת קבצי התלויות קודם (טריק לאופטימיזציה של הקאש)</span>
<span class="t-key">COPY</span> package.json package-lock.json ./

<span class="t-com"># 4. התקנת החבילות</span>
<span class="t-key">RUN</span> npm install

<span class="t-com"># 5. העתקת שאר קוד האפליקציה שלנו פנימה</span>
<span class="t-key">COPY</span> . .

<span class="t-com"># 6. חשיפת הפורט שעליו השרת שלנו מאזין (רק להצהרה, לא פותח באמת)</span>
<span class="t-key">EXPOSE</span> 3000

<span class="t-com"># 7. פקודת ההפעלה הסופית שרצה רק כשהקונטיינר קם!</span>
<span class="t-key">CMD</span> ["npm", "start"]</code></pre>

        <h4>2. ההבדל בין RUN ל-CMD (שאלת מבחן נפוצה!)</h4>
        <ul class="tight">
          <li><b><code class="inl">RUN</code></b>: רצה <b>בזמן הבנייה (Build Time)</b>. משמשת להתקנות כלים, ספריות, ויצירת ה-Image עצמו. התוצאה שלה נשמרת בתוך השכבות.</li>
          <li><b><code class="inl">CMD</code></b>: הפקודה שרצה <b>בזמן הריצה (Run Time)</b> כשמדליקים קונטיינר חדש מהתמונה. יכול להיות רק <code>CMD</code> אחד בקובץ. אם מריצים את הקונטיינר עם פקודה אחרת מפורשת, ה-CMD יידרס.</li>
        </ul>

        <h4>3. מהו קובץ .dockerignore?</h4>
        <p>בדיוק כמו <code>.gitignore</code>, זהו קובץ שאומר לדוקר אילו קבצים <b>לא</b> להעתיק לתוך האימג' בזמן פקודת ה-COPY. למשל - תיקיית <code>node_modules</code> (כדי שלא נעתיק מודולים כבדים שייבנו מחדש ממילא) וקבצי <code>.env</code> עם סודות.</p>
        
        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>למבחן:</b> אם המראיין שואל איך להאיץ בניית Dockerfile - התשובה היא <b>להשתמש ב-Cache של השכבות (Layers)</b>. אל תעתיקו את כל הקוד בבת אחת! תעתיקו קודם את ה-<code>package.json</code>, תריצו <code>npm install</code>, ורק אז תעשו <code>COPY . .</code>. ככה שינוי בקוד לא ידרוש התקנה מחדש של כל החבילות.</div>
        </div>
      </div>
    `
  }
};
