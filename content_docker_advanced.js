const dockerAdvancedContent = {
  dockerArchitecture: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">Docker Client<br><span style="font-size:10px;">(הטרמינל שלך)</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">REST API</span></div>
                <div class="flow-node-enhanced active" style="border-color:#00cc88;">Docker Daemon<br><span style="font-size:10px;">(המוח שרץ ברקע)</span></div>
            </div>
            `,
            text: "<b>שלב 1: שרת ולקוח (Client-Server)</b><br>כשאתם מקלידים פקודת דוקר, אתם בעצם משתמשים ב-Client שמדבר ב-HTTP מול ה-Daemon שרץ ברקע. ה-Daemon הוא זה שעושה את העבודה השחורה!"
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced" style="border-color:#ffd700;">Docker Registry<br><span style="font-size:10px;">(DockerHub)</span></div>
                <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">Pull ↓</span></div>
                <div class="flow-node-enhanced active delay-2" style="border-color:#00cc88;">Local Cache<br><span style="font-size:10px;">(תמונות שמורות)</span></div>
            </div>
            `,
            text: "<b>שלב 2: תהליך ה-Pull</b><br>כשה-Daemon מתבקש להריץ תמונה, הוא קודם בודק אם היא קיימת במחשב שלכם. אם לא, הוא ניגש ל-Registry הציבורי (כמו App Store לתמונות) ומוריד אותה משם."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced pulse-glow">Containerd</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↓</span></div>
                <div style="display:flex; gap:10px;">
                    <div class="flow-node-enhanced" style="border-color:#ff0055;">runc (Container 1)</div>
                    <div class="flow-node-enhanced" style="border-color:#ff0055;">runc (Container 2)</div>
                </div>
            </div>
            `,
            text: "<b>שלב 3: מנוע ההרצה (Runtime)</b><br>ה-Daemon מעביר את העבודה ל-Containerd, שמנהל את מחזור החיים. בפועל, כל קונטיינר מופעל על ידי תהליך קטן ומהיר שנקרא 'runc', שמבודד את התהליך משאר המחשב."
        }
    ],

    title: '🧠 ארכיטקטורת Docker (איך זה באמת עובד?)',
    content: `
      <div class="card-body">
        <p class="lead">הסיכום של "Docker Basics (Containers)" מתעמק באיך המערכת בנויה מאחורי הקלעים. ההבנה הזו קריטית לפתרון תקלות וראיונות עבודה.</p>
        
        <h4>1. רכיבי הליבה של דוקר</h4>
        <ul class="tight">
          <li><b>Docker Client (הלקוח)</b>: זהו הטרמינל (CLI) שבו אתם מקלידים פקודות כמו <code>docker build</code>. הלקוח לא עושה שום עבודה כבדה, הוא רק מעביר את הבקשה.</li>
          <li><b>Docker Daemon / dockerd (השרת)</b>: המוח המרכזי. שירות שרץ ברקע (Background Service) על המחשב. הוא זה שמנהל את התמונות, הקונטיינרים, הרשתות והווליומים.</li>
          <li><b>Docker Registry (הרישום)</b>: המקום שבו תמונות מאוחסנות בציבור (Docker Hub) או באופן פרטי. כשאנחנו עושים <code>docker pull ubuntu</code>, משם זה יורד.</li>
        </ul>

        <h4>2. בידוד ברמת מערכת ההפעלה (Namespaces & Cgroups)</h4>
        <p>דוקר עושה 'קסם' וגורם לקונטיינר לחשוב שהוא מחשב שלם. איך? בעזרת שני פיצ'רים של ליבת הלינוקס:</p>
        <ol>
          <li><b>Namespaces</b>: נותן לקונטיינר סביבה מבודדת (רשת משלו, תהליכים משלו, שמות משתמשים משלו). הוא לא רואה מה קורה מחוץ לו.</li>
          <li><b>Cgroups (Control Groups)</b>: מגביל את משאבי המחשב (כמה CPU וזיכרון RAM הקונטיינר יכול לצרוך כדי שלא יפיל את השרת).</li>
        </ol>

        <div class="callout analogy">
          <span class="ico">🏢</span>
          <div class="ct"><b>אנלוגיה מושלמת:</b>
            השרת שלכם הוא בניין משרדים ענק.
            ה-<b>Namespaces</b> הם קירות הגבס החשוכים ששמים לכל משרד (הם לא רואים אחד את השני).
            ה-<b>Cgroups</b> הם חשבון החשמל והמים (הגבלה על כמה כל משרד יכול לבזבז).
          </div>
        </div>
      </div>
    `
  },
  dockerCliMastery: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced typewriter">
                <div class="flow-node-enhanced" style="width:100%; text-align:left; font-family:monospace; color:#00d2ff; line-height:1.4;">
                    > docker ps<br>
                    <span style="color:#888;">CONTAINER ID | IMAGE | STATUS | PORTS</span><br>
                    a1b2c3d4e5f6 | node  | Up 5m  | 3000->80
                </div>
            </div>
            `,
            text: "<b>שלב 1: מעקב חי (ps)</b><br>הפקודה הבסיסית ביותר! מציגה רק את הקונטיינרים שרצים כרגע. שימו לב להמרה של הפורטים - מחשב מארח מול קונטיינר."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced typewriter">
                <div class="flow-node-enhanced" style="width:100%; text-align:left; font-family:monospace; color:#ff0055; line-height:1.4;">
                    > docker exec -it a1b2 sh<br>
                    <span style="color:#fff;"># </span> <span class="pulse-glow" style="display:inline-block; width:8px; height:15px; background:white;"></span>
                </div>
            </div>
            `,
            text: "<b>שלב 2: פריצה פנימה (exec)</b><br>כדי לחקור תקלות, אנחנו 'פורצים' לתוך הקונטיינר ופותחים בו טרמינל (sh או bash). הדגל '-it' משאיר את החיבור שלנו פתוח ואינטראקטיבי."
        },
        {
            html_visual: `
            <div class="stack-visual">
                <div class="stack-item error bounce-in">docker rm a1b2 (מוחק קונטיינר)</div>
                <div class="stack-item error bounce-in delay-1" style="background:#ff9900;">docker rmi node (מוחק אימג')</div>
            </div>
            `,
            text: "<b>שלב 3: ניקיון יסודי (rm vs rmi)</b><br>צריך להבדיל - rm מוחק קונטיינר ספציפי (המופע), בעוד ש-rmi (Remove Image) מוחק את התבנית כולה מההרדיסק שלכם."
        }
    ],

    title: '💻 שליטה מלאה ב-CLI (פקודות מתקדמות)',
    content: `
      <div class="card-body">
        <p class="lead">כמפתחים, אתם תבלו זמן רב בטרמינל מול דוקר. הנה פירוט וביאור עמוק של הפקודות החשובות ביותר מתוך קובץ הסיכום שקיבלתם:</p>
        
        <h4>1. ניהול ובקרה (Monitoring)</h4>
        <pre><code><span class="t-com"># מראה רק קונטיינרים שרצים עכשיו</span>
docker ps

<span class="t-com"># מראה את כל הקונטיינרים (גם אלו שכבו או קרסו - קריטי לדיבאג!)</span>
docker ps -a

<span class="t-com"># הצגת כל ההדפסות (console.log) שקורות בתוך הקונטיינר בזמן אמת (-f)</span>
docker logs -f &lt;container_name&gt;</code></pre>

        <h4>2. אינטראקציה עם קונטיינר חי</h4>
        <p>הרבה פעמים הקוד שלכם קורס בקונטיינר ואתם צריכים לבדוק אם קובץ מסוים באמת הועתק לשם או אם יש בעיית הרשאות. הפקודה <code>exec</code> מאפשרת להריץ פקודה <b>בתוך קונטיינר שכבר רץ</b>.</p>
        <pre><code><span class="t-com"># פתיחת טרמינל חי (Shell) בתוך הקונטיינר. ה- i=Interactive, t=TTY</span>
docker exec -it &lt;container_name&gt; sh

<span class="t-com"># יציאה מטרמינל הקונטיינר חזרה למחשב שלנו</span>
exit</code></pre>

        <h4>3. הגדרות הרצה (Run Flags)</h4>
        <p>הפקודה <code>docker run</code> לוקחת המון ארגומנטים (דגלים) שמעצבים איך הקונטיינר יקום:</p>
        <ul class="tight">
          <li><b><code class="inl">-d</code> (Detached)</b>: מריץ את הקונטיינר "מאחורי הקלעים" ומשחרר לכם את הטרמינל חזרה. בלי זה, הטרמינל שלכם יהיה נעול על הלוגים של הקונטיינר.</li>
          <li><b><code class="inl">--name my_app</code></b>: נותן שם קריא לקונטיינר במקום שדוקר ימציא שם אקראי (כמו "jovial_turing").</li>
          <li><b><code class="inl">--rm</code></b>: אומר לדוקר "תמחק את הקונטיינר הזה אוטומטית ברגע שהוא מסיים את הפעולה שלו או נכבה" (מעולה לבדיקות חד-פעמיות).</li>
        </ul>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>שימו לב:</b> אי אפשר למחוק תמונה (Image) באמצעות <code>docker rmi</code> אם יש קונטיינר קיים (אפילו אם הוא כבוי) שמבוסס עליה. קודם עושים <code>docker rm</code> לקונטיינר, ורק אז <code>docker rmi</code> לתמונה!</div>
        </div>
      </div>
    `
  },
  dockerPortMapping: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced active" style="border-color:#ff0055;">localhost:8080<br><span style="font-size:10px;">(מחשב מארח)</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">-p 8080:3000</span></div>
                <div class="flow-node-enhanced active" style="border-color:#38bdf8;">Port 3000<br><span style="font-size:10px;">(בתוך הקונטיינר)</span></div>
            </div>
            `,
            text: "<b>שלב 1: חומת האש השקופה</b><br>כברירת מחדל, קונטיינר אטום לחלוטין לעולם החיצון. אם יש בו שרת Node שמאזין על פורט 3000, הדפדפן שלכם במחשב לא יוכל לגשת אליו. אנחנו חייבים 'לקדוח חור' ולהעביר תנועה."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced typewriter">
                <div class="flow-node-enhanced" style="width:100%; text-align:left; font-family:monospace; line-height:1.4;">
                    > docker run -e PORT=80 -e NODE_ENV=prod<br>
                    <span style="color:#00cc88;">✓ הקונטיינר עלה בסביבת פרודקשן</span>
                </div>
            </div>
            `,
            text: "<b>שלב 2: משתני סביבה (-e)</b><br>אנחנו לא כותבים סיסמאות למסדי נתונים בתוך הקוד או ה-Dockerfile! אנחנו מזריקים אותם פנימה בדיוק ברגע שהקונטיינר עולה (Run Time) בעזרת הדגל -e."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced">Dockerfile EXPOSE 3000</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">≠</span></div>
                <div class="flow-node-enhanced active" style="border-color:#ff0055;">docker run -p 3000:3000</div>
            </div>
            `,
            text: "<b>שלב 3: מיתוס ה-EXPOSE</b><br>הפקודה EXPOSE ב-Dockerfile לא באמת פותחת שום דבר! היא רק 'תיעוד' שנועד להגיד למפתח אחר 'היי, השרת הזה אמור לעבוד על פורט 3000'. החיבור האמיתי קורה רק בשורת הפקודה."
        }
    ],

    title: '🔌 Port Mapping ומשתני סביבה (העמקה)',
    content: `
      <div class="card-body">
        <p class="lead">שני הנושאים שהכי מבלבלים מתחילים בדוקר הם הבנת ניתוב הפורטים (Port Mapping) והזרקת משתני סביבה אובטחים.</p>
        
        <h4>1. אמנות ניתוב הפורטים (-p)</h4>
        <p>תחביר: <code>-p &lt;Host_Port&gt;:&lt;Container_Port&gt;</code></p>
        <p><b>דוגמה:</b> <code>docker run -p 8080:80 nginx</code></p>
        <ul class="tight">
          <li><b>צד שמאל (8080)</b>: זה הפורט על המחשב <b>שלכם</b>. לשם תיגשו דרך הדפדפן (localhost:8080).</li>
          <li><b>צד ימין (80)</b>: זה הפורט שעליו התוכנה (Nginx במקרה הזה) מאזינה <b>בתוך הקונטיינר הסגור</b>.</li>
        </ul>
        <p><b>למה זה גאוני?</b> כי אני יכול להריץ 5 קונטיינרים של Nginx במקביל על אותו מחשב! לכולם יהיה פורט פנימי 80, אבל אני אמפה אותם לפורטים חיצוניים שונים: 8081, 8082, 8083 וכו'.</p>

        <h4>2. הזרקת משתני סביבה (-e / --env)</h4>
        <p>קונטיינר חייב להיות חסר מצב (Stateless) ואגנוסטי. אותו תמונה (Image) בדיוק צריכה לרוץ גם אצלכם בטסטים וגם בפרודקשן הריאלי. איך השרת יודע איפה הוא רץ?</p>
        <pre><code><span class="t-com"># הזרקת משתנים בצורה ישירה דרך הטרמינל</span>
docker run -e DB_PASS=secret123 -e PORT=4000 my-app

<span class="t-com"># הזרקת משתנים מקובץ .env נפרד (הדרך הבטוחה והנכונה ביותר)</span>
docker run --env-file ./prod.env my-app</code></pre>
        <p>בתוך הקוד שלכם (Node.js), תוכלו לגשת לזה פשוט דרך <code>process.env.DB_PASS</code>. זה מבטיח שהסודות לא מאוחסנים לעולם בתוך ה-Image עצמו אלא ניתנים לו רק בזמן ההפעלה!</p>

        <div class="callout analogy">
          <span class="ico">🚪</span>
          <div class="ct"><b>אנלוגיה:</b> הדלת של הקונטיינר נעולה (Port Mapping פותח את החור למנעול), ומשתני הסביבה (-e) הם המפתח הסודי שאתם נותנים לו בכניסה כדי שיוכל לפתוח דברים בפנים!</div>
        </div>
      </div>
    `
  }
};
