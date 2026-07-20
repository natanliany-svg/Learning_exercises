const contentDockerClassroom = {
    dockerIntro: {
        title: "Docker - קפסולת הזכוכית הניידת",
        visualizerSteps: [
            { action: "drawBox", target: "environment", color: "blue", text: "<b>יצירת סביבה:</b> מקימים קפסולת זכוכית שקופה ואטומה." },
            { action: "insertApp", text: "<b>הכנסת הקוד:</b> האפליקציה נכנסת לקפסולה עם כל התוכנות שהיא צריכה (Node, Python)." },
            { action: "shipBox", effect: "fly", text: "<b>ניידות:</b> הקפסולה עוברת לכל מחשב בעולם ותרוץ בדיוק אותו דבר." }
        ],
        content: `
            <div class="card-body">
                <p class="lead"><span title="פלטפורמה להרצת אפליקציות בקונטיינרים">Docker</span> פותר את הבעיה המפורסמת ביותר של מתכנתים: "אבל אצלי במחשב זה עובד!".</p>
                <p>דמיינו קפסולת זכוכית ניידת ואטומה לרעשים. בתוכה אתם שמים את האפליקציה שלכם, את מסד הנתונים, את גרסת הפייתון המדויקת, ואת כל הסביבה. הקפסולה הזו תעבוד בדיוק אותו הדבר על המחשב שלכם, על המחשב של החבר, או על השרתים של גוגל.</p>
                <h4>מושגי יסוד:</h4>
                <ol>
                    <li><b>Image (תבנית/מתכון):</b> השרטוט שמתאר ממה הקפסולה תורכב (למשל: תבנית שכוללת שרת Ubuntu עם Node.js).</li>
                    <li><b>Container (קונטיינר/קפסולה):</b> התוצר החי! זהו ה-Image שהרצנו עכשיו והוא פועל כתוכנה חיה בתוך הקפסולה.</li>
                    <li><b>Host (המארח):</b> המחשב הפיזי שלכם (או השרת) עליו מותקן Docker ומריץ את הקפסולות.</li>
                </ol>
            </div>
        `
    },
    dockerfile: {
        title: "Dockerfile - מתכון האפייה של הקפסולה",
        visualizerSteps: [
            { action: "readRecipe", text: "<b>קריאת הוראות:</b> רובוט קורא את ה-Dockerfile." },
            { action: "addIngredients", text: "<b>איסוף מצרכים:</b> הרובוט מביא תוכנות מהאינטרנט לפי המתכון (למשל Node 18)." },
            { action: "bakeImage", effect: "sparkles", text: "<b>אפייה:</b> יצירת התבנית הסופית (Image)." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">ה-<code>Dockerfile</code> הוא פשוט קובץ טקסט עם מתכון. הוא אומר ל-Docker צעד-אחר-צעד איך לייצר את התבנית (Image) של האפליקציה שלכם.</p>
                <p>אתם לא בונים את הקפסולה בעצמכם; אתם נותנים לרובוט מתכון, והוא בונה אותה באופן אוטומטי ואמין כל פעם מחדש.</p>
                <h4>איך נראה המתכון?</h4>
                <pre><code>
<span class="t-com"># 1. קמח ומים: מאיזו תבנית בסיסית להתחיל?</span>
<span class="t-keyword">FROM</span> node:18-alpine

<span class="t-com"># 2. איפה עובדים בתוך הקפסולה?</span>
<span class="t-keyword">WORKDIR</span> /app

<span class="t-com"># 3. העתקת קבצי הפרויקט פנימה</span>
<span class="t-keyword">COPY</span> package*.json ./

<span class="t-com"># 4. התקנת תלויות (מצרכים נוספים)</span>
<span class="t-keyword">RUN</span> npm install

<span class="t-com"># 5. העתקת שאר הקוד</span>
<span class="t-keyword">COPY</span> . .

<span class="t-com"># 6. הפעולה שתרוץ כשהקפסולה תידלק</span>
<span class="t-keyword">CMD</span> ["npm", "start"]
</code></pre>
            </div>
        `
    },
    dockerfileInstructions: {
        title: "פקודות Dockerfile - מילון המונחים",
        visualizerSteps: [
            { action: "highlightKeyword", target: "FROM", text: "<b>FROM:</b> תמיד בוחרים נקודת התחלה." },
            { action: "highlightKeyword", target: "COPY", text: "<b>COPY:</b> מעבירים קבצים מהמחשב שלכם לתוך הקפסולה." },
            { action: "highlightKeyword", target: "RUN vs CMD", text: "<b>RUN:</b> פועל בזמן האפייה. <b>CMD:</b> פועל כשהקפסולה נדלקת." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">בואו נבין את "שפת האפייה" של הרובוט הבונה (Builder):</p>
                <ul>
                    <li><code><span title="נקודת ההתחלה">FROM</span></code> - תמיד הפקודה הראשונה. בוחרים את מערכת ההפעלה הבסיסית (למשל: אובונטו, או גרסה קלה של Node).</li>
                    <li><code><span title="תיקיית העבודה">WORKDIR</span></code> - כמו פקודת <code>cd</code>, אומרת לרובוט: "מעכשיו, תעשה את כל הפעולות בתוך התיקייה הזו".</li>
                    <li><code><span title="העתקה">COPY</span></code> - מעתיקה קבצים מהשולחן במחשב שלכם (Host) לתוך התיקייה בקפסולה. עובד משמאל לימין: <code>COPY מהשולחן אל_הקפסולה</code>.</li>
                    <li><code><span title="הרצת פקודות">RUN</span></code> - מריץ פקודות מסוף (Terminal) בזמן יצירת התבנית. למשל: <code>RUN apt-get update</code> (נועד להתקנות).</li>
                    <li><code><span title="הפקודה הראשית">CMD</span></code> - הפקודה האחת והיחידה שתופעל כשהקפסולה תתעורר לחיים (כשמריצים את הקונטיינר). מה שמשאיר אותה דלוקה!</li>
                </ul>
            </div>
        `
    },
    dockerCompose: {
        title: "Docker Compose - מנצח התזמורת",
        visualizerSteps: [
            { action: "showConductor", text: "<b>המנצח:</b> ה-Compose לוקח שרביט פיקוד." },
            { action: "startContainers", target: "orchestra", animation: "pop", text: "<b>הפעלה מסונכרנת:</b> הוא מדליק כמה קפסולות במקביל (למשל Node ו-MongoDB)." },
            { action: "connectNetwork", effect: "lines", text: "<b>רשת פנימית:</b> ה-Compose בונה רשת קשר פנימית ביניהן כדי שיוכלו לדבר אחת עם השנייה." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">מה קורה כשיש לנו אפליקציה שמורכבת משרת Node.js, מסד נתונים של MongoDB, ושרת React חזיתי? <code><span title="כלי של דוקר לניהול כמה קונטיינרים יחד">Docker Compose</span></code> הוא המנצח על התזמורת!</p>
                <p>במקום לכתוב פקודות הדלקה ארוכות ומסובכות לכל קפסולה בנפרד, אנו כותבים דף תווים אחד (קובץ <code>docker-compose.yml</code>) שאומר למנצח: "תדליק את מסד הנתונים קודם, ואז את השרת, ותחבר ביניהם כבל רשת".</p>
                <h4>מדריך שלב-אחר-שלב:</h4>
                <ol>
                    <li>יוצרים קובץ <code>docker-compose.yml</code> בתיקייה הראשית.</li>
                    <li>מגדירים <code><span title="שירותים (הקונטיינרים שלנו)">services</span></code>: כל שירות הוא קפסולה שונה.</li>
                    <li>בטרמינל מריצים פקודה אחת קסומה: <code><span title="תדליק את כל התזמורת">docker-compose up -d</span></code> (הדגל -d אומר להריץ ברקע).</li>
                    <li>התזמורת מנגנת! 🎵</li>
                </ol>
            </div>
        `
    },
    dockerVolumes: {
        title: "Volumes - צינור הקסם לשמירת מידע",
        visualizerSteps: [
            { action: "breakGlass", target: "container", color: "red", text: "<b>מחיקה:</b> קפסולת זכוכית נשברת (נמחקת) והמידע שלה אובד!" },
            { action: "createTube", effect: "glow", text: "<b>צינור הווליום:</b> מחברים צינור קסם מתוך הקפסולה למגירה במחשב האמיתי." },
            { action: "saveData", target: "drawer", text: "<b>שמירה:</b> הקפסולה נשברת שוב, אבל המידע בטוח במגירה האמיתית!" }
        ],
        content: `
            <div class="card-body">
                <p class="lead">לקפסולות של דוקר יש תכונה מסוכנת: הן "חסרות זיכרון" (Ephemeral). אם תמחקו קפסולה שהכילה מסד נתונים - כל המידע שבה נמחק לנצח!</p>
                <p>כדי למנוע זאת, אנו משתמשים ב-<code><span title="נפח אחסון חיצוני, צינור מידע">Volumes</span></code>. זה כמו לפעור חור בקפסולת הזכוכית, ולהעביר דרכו צינור קסם שמתחבר ישר לתיקייה בטוחה במחשב הפיזי שלכם (ה-Host).</p>
                <p>כל פעם שהקפסולה שומרת קובץ בתוך תיקיית הצינור, הקובץ בעצם נשמר במחשב שלכם. כעת, גם אם תפוצצו את הקפסולה ותדליקו חדשה - המידע יחכה לה שם!</p>
                <h4>שימושים עיקריים:</h4>
                <ol>
                    <li>שמירת נתונים מ-Databases (שלא יימחקו בין הדלקות).</li>
                    <li>העברת קוד פיתוח חי לתוך הקונטיינר כדי שלא נצטרך לקמפל מחדש כל פעם שאנחנו משנים שורת קוד.</li>
                </ol>
            </div>
        `
    },
    dockerArchitecture: {
        title: "ארכיטקטורה של דוקר - מתחת למכסה המנוע",
        visualizerSteps: [
            { action: "showOS", text: "<b>מערכת ההפעלה:</b> הבסיס שעליו הכל יושב." },
            { action: "showDockerEngine", target: "os", text: "<b>Docker Engine:</b> תוכנת הליבה של דוקר המותקנת מעל." },
            { action: "splitKernels", effect: "pulse", text: "<b>שיתוף ליבה (Kernel):</b> כל הקפסולות חולקות את ליבת מערכת ההפעלה, מה שהופך אותן למהירות בטירוף!" }
        ],
        content: `
            <div class="card-body">
                <p class="lead">למה Docker כל כך מהיר לעומת מכונות וירטואליות (Virtual Machines) של פעם?</p>
                <p>מכונה וירטואלית קלאסית בונה בית שלם מאפס: היא מדמה חומרה (זיכרון מעבד), ומעלה מערכת הפעלה שלמה כבדה (כמו Windows/Linux) ורק עליה שמה את האפליקציה.</p>
                <p>דוקר עושה קסם אחר: הוא לוקח את מערכת ההפעלה האמיתית שכבר דולקת במחשב שלכם, ומאפשר לכל הקונטיינרים <b>לשתף</b> את הליבה (Kernel) שלה. הקונטיינרים רק מדמיינים שיש להם מערכת עצמאית. לכן קונטיינר נדלק בשניות בודדות ושוקל רק מגה-בייטים ספורים!</p>
            </div>
        `
    },
    dockerCliMastery: {
        title: "שליטה בפקודות דוקר (CLI)",
        visualizerSteps: [
            { action: "typeCommand", text: "<b>פקודת בנייה:</b> docker build..." },
            { action: "showImages", text: "<b>התבניות שלנו:</b> docker images מציג את רשימת התבניות המוכנות." },
            { action: "runContainer", effect: "slide", text: "<b>הרצה:</b> docker run מפעיל תבנית והופך אותה לקונטיינר חי!" }
        ],
        content: `
            <div class="card-body">
                <p class="lead">ארגז הכלים של פועל הדוקר בטרמינל:</p>
                <table class="table table-bordered table-dark">
                    <thead>
                        <tr><th>הפקודה</th><th>מה היא עושה? (האנלוגיה)</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><code>docker build -t myapp .</code></td><td>אופה תבנית חדשה (Image) מהמתכון (Dockerfile) בתיקייה הזו. קורא לה myapp.</td></tr>
                        <tr><td><code>docker images</code></td><td>מציג את רשימת כל התבניות המוכנות במחסן שלנו.</td></tr>
                        <tr><td><code>docker run -d myapp</code></td><td>מדליק את התבנית ויוצר ממנה קונטיינר חי שפועל ברקע (d-).</td></tr>
                        <tr><td><code>docker ps</code></td><td>מציג אילו קונטיינרים דולקים עכשיו ומה מצבם.</td></tr>
                        <tr><td><code>docker stop &lt;id&gt;</code></td><td>לוחץ על כפתור הכיבוי של הקפסולה הספציפית.</td></tr>
                        <tr><td><code>docker logs &lt;id&gt;</code></td><td>הצצה ליומן - מה הקונטיינר מדפיס עכשיו במסך שלו?</td></tr>
                        <tr><td><code>docker rm &lt;id&gt;</code></td><td>מוחק את הקפסולה לחלוטין (חובה לכבות קודם).</td></tr>
                        <tr><td><code>docker rmi &lt;image&gt;</code></td><td>מוחק תבנית (Image) ישנה מהמחשב לפנות מקום.</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    dockerPortMapping: {
        title: "Port Mapping - דלתות הקפסולה",
        visualizerSteps: [
            { action: "drawWall", text: "<b>החומה:</b> לקפסולה יש חומת הגנה." },
            { action: "openPort", target: "wall", effect: "punch", text: "<b>יצירת חור (Port):</b> קדיחת חור بחומה ביציאה 8080." },
            { action: "connectPipe", text: "<b>Port Mapping:</b> חיבור צינור מדלת 3000 של המחשב לדלת 8080 של הקפסולה." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">הקפסולות של דוקר אטומות לחלוטין לעולם החיצון. אם תריצו שרת בתוך הקונטיינר על פורט 8080, לא תוכלו לגשת אליו מהדפדפן שלכם (localhost:8080) כי הקפסולה סגורה!</p>
                <p>חובה לבצע <code><span title="מיפוי נמלים - קישור דלת חיצונית לדלת פנימית">Port Mapping</span></code> (מיפוי פורטים). אנו קודחים חור בין הדלת של המחשב האמיתי, לדלת של הקפסולה.</p>
                <h4>איך עושים את זה?</h4>
                <p>בפקודת ה-Run אנו משתמשים בדגל <code>-p</code> והנוסחה היא תמיד: <b>מארח:קפסולה</b> (המחשב שלי : הקפסולה).</p>
                <pre><code>
<span class="t-com"># תקשר מהפורט 3000 שלי, אל הפורט 8080 שבתוך הקפסולה</span>
docker run -p <span class="t-num">3000</span>:<span class="t-num">8080</span> my_server
                </code></pre>
                <p>כעת כשתיכנסו ל-<code>localhost:3000</code> בדפדפן, דוקר ישאב אתכם באלגנטיות ישר לפורט 8080 שבתוך הקונטיינר.</p>
            </div>
        `
    },
    dockerImagesDeepDive: {
        title: "צלילה פנימה ל-Images (שכבות)",
        visualizerSteps: [
            { action: "drawLayer", text: "<b>שכבה ראשונה:</b> אובונטו מותקן כבסיס." },
            { action: "drawLayer2", target: "layer1", text: "<b>שכבה שנייה:</b> מותקן Node.js מעל אובונטו." },
            { action: "drawLayer3", target: "layer2", color: "green", text: "<b>שכבה שלישית:</b> קוד האפליקציה שלכם." },
            { action: "lockLayers", effect: "freeze", text: "<b>קריאה בלבד:</b> התבנית ננעלת (Read-Only) ולא ניתנת לשינוי." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">כשדוקר בונה תבנית (Image), הוא לא יוצר גוש אחיד אחד. התבניות בנויות משכבות על גבי שכבות של "בצק" (Layers).</p>
                <p>כל שורה ב-Dockerfile (כמו COPY או RUN) יוצרת שכבה חדשה שמונחת על הקודמת ומוקפאת לנצח.</p>
                <h4>למה זה גאוני? זיכרון מטמון (Caching)</h4>
                <p>אם תבנו מחדש את האפליקציה בגלל ששיניתם קוד, דוקר לא יוריד שוב את Node או יתקין ספריות (כי השכבות האלה כבר נאפו ונשמרו). הוא פשוט ישתמש בהן מהמטמון וייאפה רק את השכבה האחרונה של הקוד! זה חוסך זמן בנייה יקר.</p>
                <p><i>עצה של מקצוענים:</i> תמיד התקינו ספריות (<code>npm install</code>) בשורות הראשונות של ה-Dockerfile, ורק בסוף העתיקו את קוד האפליקציה שמשתנה לעתים קרובות. כך תשמרו על המטמון (Cache) יעיל.</p>
            </div>
        `
    },
    dockerMultiStage: {
        title: "Multi-Stage Builds - פועלים חכמים למקסימום קומפקטיות",
        visualizerSteps: [
            { action: "workerOne", text: "<b>שלב בנייה (Builder):</b> פועל ראשון מכין כלים כבדים, מקמפל את הקוד ויוצר תוצר סופי." },
            { action: "extractProduct", target: "workerOne", text: "<b>שליפת התוצר:</b> לוקחים רק את התוצר הסופי." },
            { action: "workerTwo", text: "<b>שלב הרצה (Production):</b> פועל שני לוקח רק את התוצר ומפעיל אותו, משאיר את הכלים המלוכלכים מאחור!" }
        ],
        content: `
            <div class="card-body">
                <p class="lead">באפליקציות חכמות (כמו React או TypeScript) נדרשים כלים כבדים כדי לבנות ולקמפל את הקוד. אבל אחרי שהקוד מוכן - לא צריך את הכלים האלה כדי להריץ אותו!</p>
                <p>בשיטת <code><span title="בנייה רב-שלבית">Multi-Stage Build</span></code> אנו כותבים מתכון חכם שכולל שני פועלים:</p>
                <ol>
                    <li><b>הבנאי (Builder):</b> קפסולה כבדה עם כל כלי הפיתוח שבונה את האפליקציה ומקמפלת אותה.</li>
                    <li><b>המריץ (Runner):</b> קפסולה חדשה, קלילה ונקייה לחלוטין. אנו "גונבים" אליה רק את התוצר הסופי (הקבצים המקומפלים) מהבנאי ומשאירים את הכלי עבודה שלו לפח.</li>
                </ol>
                <p><b>התוצאה:</b> קפסולה סופית ששוקלת 15 מגה-בייט במקום 800 מגה-בייט! גם חוסך עלויות שרת, וגם מאובטח בהרבה.</p>
            </div>
        `
    },
    dockerComposeAdvanced: {
        title: "Docker Compose למתקדמים - משתני סביבה",
        visualizerSteps: [
            { action: "showEnvFile", text: "<b>קובץ מסווג:</b> קובץ .env עם סיסמאות." },
            { action: "injectSecrets", target: "compose", animation: "flow", text: "<b>הזרקת סודות:</b> ה-Compose שואב את הסיסמאות ומזריק לקפסולות." },
            { action: "secureRun", color: "green", text: "<b>פעולה בטוחה:</b> הקפסולות פועלות עם הסיסמאות מבלי שהן כתובות בקוד הגלוי." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">כשעובדים עם מספר רב של שירותים, סיסמאות لمسד נתונים או מפתחות API הם מסמכים מסווגים. אסור להשאיר אותם חשופים בקובץ ה-yml!</p>
                <p>אנו משתמשים בקובץ <code>.env</code> שהוא כספת הסיסמאות שלנו. ה-<code>docker-compose.yml</code> יודע לקרוא משם נתונים בעזרת הסימן <code>\${VAR_NAME}</code> ולהזריק אותם לקפסולות בשעת ההדלקה (כ-<span title="משתני סביבה">Environment Variables</span>).</p>
                <h4>תכונות מתקדמות נוספות של ה-Compose:</h4>
                <ul>
                    <li><code>depends_on:</code> מנחה את המנצח אילו שירותים להדליק קודם (למשל: אל תדליק שרת עד שה-Database לא מוכן).</li>
                    <li><code>restart: always</code> הבטחת חיים: אם הקפסולה קורסת מבאג, דוקר יאתחל אותה אוטומטית מיד ללא התערבות אדם!</li>
                </ul>
            </div>
        `
    }
};

if (typeof window !== "undefined") {
    window.contentDocker = contentDockerClassroom;
} else if (typeof module !== "undefined" && module.exports) {
    module.exports = contentDockerClassroom;
}
