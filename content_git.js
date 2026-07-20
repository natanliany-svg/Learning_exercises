const contentGitClassroom = {
    gitInit: {
        title: "<span title=\"אתחול פרויקט חדש. המילה Init היא קיצור של Initialize (לאתחל)\">Git Init</span> - יצירת קלסר הקסמים",
        visualizerSteps: [
            { action: "drawFolder", target: "workspace", color: "blue", text: "<b>יצירת סביבה:</b> התיקייה מסומנת כסביבת עבודה לגיט." },
            { action: "pulseEffect", target: "workspace", duration: 1000, text: "<b>הפעלה:</b> הדופק מעיד שמערכת המעקב פעילה." },
            { action: "showTooltip", text: "Git is watching!", text: "<b>מעקב:</b> גיט צופה בכל שינוי בתיקייה." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">השלב הראשון שבו אנו אומרים ל-<span title="מערכת לניהול גרסאות קוד">Git</span> להתחיל לעקוב אחרי התיקייה שלנו ולתעד כל שינוי שנעשה בה.</p>
                <p>דמיינו שקניתם קלסר חדש ששומר אוטומטית כל גרסה של כל דף שתכניסו אליו. הפקודה הזו פשוט פותחת את הקלסר בפעם הראשונה.</p>
                <h4>מדריך שלב-אחר-שלב:</h4>
                <ol>
                    <li>פתחו את התיקייה שלכם בעורך הקוד (לדוגמה, <span title="Visual Studio Code - עורך הקוד הפופולרי מבית מיקרוסופט">VS Code</span>).</li>
                    <li>פתחו את חלון המסוף (<span title="ממשק שורת הפקודה, המקום שבו אנו מקלידים פקודות למחשב">Terminal</span> -> New Terminal).</li>
                    <li>הקלידו את הפקודה: <code><span title="פקודה שאומרת לגיט 'תתחיל לנהל את התיקייה הזו'">git init</span></code></li>
                    <li>כעת התיקייה שלכם מחוברת ל-Git!</li>
                </ol>
            </div>
        `
    },
    gitStatus: {
        title: "<span title=\"בקשת סטטוס. איזו עבודה נעשתה מאז השמירה האחרונה?\">Git Status</span> - מבט על שולחן העבודה",
        visualizerSteps: [
            { action: "scanArea", target: "workspace", effect: "radar", text: "<b>סריקה:</b> גיט סורק את שולחן העבודה לקבצים שהשתנו." },
            { action: "highlightFiles", state: "modified", color: "red", text: "<b>זיהוי:</b> קבצים באדום טרם נשמרו, קבצים בירוק מוכנים לשמירה." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">בדיקה מהירה של מצב הקבצים הנוכחי: מה השתנה, מה חדש, ומה מוכן לשמירה.</p>
                <p>זה כמו להדליק את האור בחדר העבודה ולהסתכל על השולחן: אילו דפים זרוקים בחוץ, אילו השתנו מאז אתמול, ומה כבר מסודר בערימה.</p>
                <h4>מדריך שלב-אחר-שלב:</h4>
                <ol>
                    <li>ודאו שאתם בתוך תיקיית הפרויקט ב-VS Code.</li>
                    <li>בטרמינל, הקלידו את הפקודה: <code><span title="הראה לי את מצב הקבצים בפרויקט עכשיו">git status</span></code></li>
                    <li>קראו את הפלט: קבצים אדומים הם שינויים שלא נשמרו, קבצים ירוקים מוכנים לשמירה הבאה.</li>
                </ol>
            </div>
        `
    },
    gitAdd: {
        title: "<span title=\"הוספת קבצים לאזור ההכנה. להגיד לגיט 'שים עין על זה'\">Git Add</span> - הכנסת דפים למעטפה",
        visualizerSteps: [
            { action: "selectFiles", state: "modified", text: "<b>בחירת קבצים:</b> בחירת קבצים להוספה." },
            { action: "moveToStage", target: "staging_area", animation: "slide", text: "<b>אזור הכנה (Staging):</b> הקבצים עוברים למעטפת ההכנה." },
            { action: "changeColor", color: "green", text: "<b>מוכנים:</b> הקבצים ירוקים, מחכים לחתימה הסופית." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">בחירת הקבצים שאתם רוצים לכלול בגרסה הבאה שתשמרו. (נקרא גם <span title="אזור ההכנה (במה), התחנה שלפני השמירה הסופית">Staging</span>).</p>
                <p>אתם אוספים את הדפים שסיימתם לעבוד עליהם מהשולחן, ומכניסים אותם לתוך מעטפה פתוחה. הם עדיין לא נשלחו, אבל הם מוכנים.</p>
                <h4>מדריך שלב-אחר-שלב:</h4>
                <ol>
                    <li>לאחר ביצוע שינויים בקוד, פתחו את הטרמינל.</li>
                    <li>כדי להוסיף קובץ ספציפי, הקלידו: <code>git add filename.js</code></li>
                    <li>כדי להוסיף את כל הקבצים שהשתנו בבת אחת, הקלידו: <code><span title="הנקודה מסמלת 'את כל הקבצים בתיקייה הזו'">git add .</span></code></li>
                    <li>הריצו <code>git status</code> שוב כדי לראות שהקבצים הפכו לירוקים.</li>
                </ol>
            </div>
        `
    },
    gitCommit: {
        title: "<span title=\"קיבוע השמירה. שמירת 'צילום מצב' של הקוד באותו רגע\">Git Commit</span> - סגירת המעטפה וחתימה",
        visualizerSteps: [
            { action: "sealEnvelope", target: "staging_area", text: "<b>סגירת מעטפה:</b> המעטפה עם הקבצים נאטמת." },
            { action: "stampDate", text: "Commit ID", text: "<b>חתימה:</b> הקומיט מקבל מזהה ייחודי ותאריך." },
            { action: "moveToHistory", target: "timeline", animation: "drop", text: "<b>היסטוריה:</b> המעטפה נוספת לציר הזמן של הפרויקט." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">אריזת כל השינויים שהכנו (ב-Add) לכדי גרסה רשמית אחת בהיסטוריה של הפרויקט, בליווי פתק הסבר.</p>
                <p>אתם סוגרים את המעטפה, שמים עליה חותמת עם התאריך, וכותבים עליה פתק קצר שמסביר בדיוק מה יש בפנים. המעטפה הזו עכשיו חתומה ומוכנה.</p>
                <h4>מדריך שלב-אחר-שלב:</h4>
                <ol>
                    <li>לאחר שהוספתם את הקבצים (git add), בטרמינל הקלידו: <code><span title="הדגל -m מציין הודעה (Message), כך נוכל להוסיף תיאור">git commit -m "Your message here"</span></code></li>
                    <li>החליפו את הטקסט במרכאות בתיאור קצר וברור של מה שעשיתם (למשל: "הוספת כפתור התחברות").</li>
                    <li>לחצו Enter. הגרסה נשמרה מקומית במחשב שלכם (<span title="המחשב שאתם יושבים מולו, בניגוד לשרת מרוחק">Local</span>)!</li>
                </ol>
            </div>
        `
    },
    gitPush: {
        title: "<span title=\"לדחוף. לשלוח את השמירות שלנו לשרת המרוחק\">Git Push</span> - שליחת המעטפה בדואר",
        visualizerSteps: [
            { action: "packageCommits", target: "timeline_recent", text: "<b>אריזה למשלוח:</b> חבילת הקומיטים נארזת." },
            { action: "flyToCloud", destination: "remote_server", effect: "trail", text: "<b>שליחה לענן:</b> המעטפה נשלחת דרך הרשת לשרת." },
            { action: "showSuccess", icon: "check_circle", text: "<b>גיבוי מוצלח:</b> הקוד שוכפל בהצלחה לענן." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">העלאת כל הגרסאות ששמרתם אצלכם במחשב אל השרת המרוחק (כמו <span title="אתר שמהווה מאגר אחסון (ענן) לכל פרויקטי הקוד שלכם">GitHub</span>), כדי לגבות אותן או לשתף עם הצוות.</p>
                <p>זה השלב שבו אתם לוקחים את כל המעטפות החתומות שלכם, הולכים לסניף הדואר, ושולחים אותן לארכיון המרכזי כדי שכולם יוכלו לראות.</p>
                <h4>מדריך שלב-אחר-שלב:</h4>
                <ol>
                    <li>ודאו שביצעתם Commit לכל השינויים.</li>
                    <li>בטרמינל, הקלידו: <code><span title="שלח את כל השינויים לשרת">git push</span></code></li>
                    <li>(אם זו הפעם הראשונה, ייתכן שתצטרכו להקליד: <code>git push -u origin main</code> - <span title="חיבור של הענף המקומי (main) לשרת (origin) בפעם הראשונה">יצירת קשר ראשוני ענן-מחשב</span>).</li>
                    <li>המתינו לסיום ההעלאה, וכעת הקוד שלכם מגובה ברשת (<span title="מרוחק, נמצא על שרת כלשהו באינטרנט">Remote</span>).</li>
                </ol>
            </div>
        `
    },
    gitPull: {
        title: "<span title=\"למשוך. לקחת את העדכונים החדשים מהשרת אלינו למחשב\">Git Pull</span> - קבלת דואר חדש",
        visualizerSteps: [
            { action: "checkCloud", target: "remote_server", effect: "ping", text: "<b>בדיקת עדכונים:</b> פנייה לשרת לבדוק אם יש שינויים." },
            { action: "downloadUpdates", source: "remote_server", destination: "workspace", animation: "rain", text: "<b>הורדה:</b> הורדת מידע מהענן." },
            { action: "mergeFiles", effect: "blend", text: "<b>מיזוג:</b> מיזוג אוטומטי של העדכונים לתוך הקוד המקומי." }
        ],
        content: `
            <div class="card-body">
                <p class="lead">משיכת השינויים והעדכונים האחרונים מהשרת המרוחק (GitHub) אל המחשב המקומי שלכם.</p>
                <p>אתם פותחים את תיבת הדואר בבוקר, מגלים שקיבלתם מכתבים ותיקונים מהשותפים שלכם לעבודה, ומכניסים אותם ישר לקלסר שלכם כדי להיות מעודכנים.</p>
                <h4>מדריך שלב-אחר-שלב:</h4>
                <ol>
                    <li>לפני שאתם מתחילים לעבוד בבוקר, פתחו את הטרמינל ב-VS Code.</li>
                    <li>הקלידו: <code><span title="תביא לי את הקוד הכי מעודכן מהשרת">git pull</span></code></li>
                    <li>Git יוריד את כל העדכונים (אם חברי צוות אחרים העלו קוד) וימזג אותם אוטומטית (<span title="למזג, לחבר את הקוד שירד מהשרת עם הקוד הקיים אצלי">Merge</span>) לקוד שלכם.</li>
                    <li>כעת אתם מסונכרנים ויכולים להתחיל לכתוב קוד חדש.</li>
                </ol>
            </div>
        `
    }
};
