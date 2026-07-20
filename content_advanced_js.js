const contentAdvancedJsClassroom = {
    objectMethods: {
        title: "ארכיטקטורת זיכרון: עיר הכספות ומגדל השמירה",
        visualizerSteps: [
            { stepId: 'primitive_copy', text: '<b>עותק זהה:</b> זרוע רובוטית משכפלת מטבע זהב ומניחה אותו בכספת חדשה ומופרדת.', action: 'Duplicate gold coin' },
            { stepId: 'reference_copy', text: '<b>שכפול הפניה (Reference):</b> זרוע רובוטית מעתיקה מפת נייר אל האנגר משותף ומעניקה לדמות שנייה.', action: 'Duplicate map only' },
            { stepId: 'mutate_hangar', text: '<b>שינוי משותף:</b> הדמות השנייה נכנסת להאנגר ומשנה אותו. הדמות הראשונה מביטה ומופתעת!', action: 'Add boxes to hangar' }
        ],
        content: `
            <div class="card-body">
                <p class="lead">ישנם שני סוגים של שמירת מידע. הערכים ה-<span title="נתונים פשוטים כמו מספרים או טקסט">פרימיטיביים</span> הם כמו מטבעות זהב. כשאתה שומר משתנה כזה, זרוע רובוטית מייצרת העתק זהה לחלוטין ומניחה אותו בכספת חדשה. אבל אובייקטים ומערכים הם עצומים - הם שוכנים בהאנגר מרוחק.</p>
                <p>כשמשייכים אובייקט, פשוט משכפלים את ה-<span title="הפניה למקום בזיכרון">Reference</span> (המפתח והמפה לאותו האנגר). אם תשנה את תכולת ההאנגר, כל מי שמחזיק במפה ירגיש את השינוי! ה-<span title="טווח ההכרה של משתנה">Scope</span> הוא מגדל שמירה. מנהל למעלה (Global) רואה דרך רצפת הזכוכית את הכלים למטה, אבל הפועל למטה (Local) אינו רואה את סודות ההנהלה.</p>
                <h4>מדריך שלב-אחר-שלב:</h4>
                <ol>
                    <li>הגדרת משתנה פרימיטיבי מעתיקה את הערך המדויק לכספת חדשה.</li>
                    <li>הגדרת אובייקט או מערך מעתיקה רק את כתובת ההגעה (Reference) לאותו מבנה בזיכרון.</li>
                    <li>שינוי של תכונה (Property) באובייקט ישפיע על כל משתנה שמצביע לאותה כתובת.</li>
                </ol>
                <pre><code>
<span class="t-com">// 🪙 ערכים פרימיטיביים: העתקה מושלמת</span>
<span class="t-key">let</span> goldCoin = 10;
<span class="t-key">let</span> newSafe = goldCoin;
newSafe = 20;
console.log(goldCoin); <span class="t-com">// מדפיס 10. המטבע המקורי לא נפגע!</span>

<span class="t-com">// 🏭 אובייקטים (Reference): אותה המפה לאותו ההאנגר!</span>
<span class="t-key">let</span> mainHangar = { boxes: 50 };
<span class="t-key">let</span> workerMap = mainHangar;
workerMap.boxes = 100; <span class="t-com">// הפועל שינה את התכולה!</span>
console.log(mainHangar.boxes); <span class="t-com">// מדפיס 100. כולם רואים את השינוי.</span>
                </code></pre>
            </div>
        `
    },
    stringMethods: {
        title: "מחרוזות חסינות: חדר הגילוף בזכוכית",
        visualizerSteps: [
            { stepId: 'string_init', text: '<b>בלוק מקורי:</b> גוש זכוכית מוצק מופיע עם חריטה זוהרת "hello world".', action: 'Spawn glass block' },
            { stepId: 'laser_scan', text: '<b>סריקה:</b> עין לייזר סורקת את הגוש המקורי ומעבירה נתונים למדפסת 3D.', action: 'Scan block' },
            { stepId: 'print_new', text: '<b>בלוק חדש (Immutable):</b> המדפסת יורקת גוש חדש עם הכיתוב "HELLO WORLD", הגוש הישן נותר שלם.', action: 'Create new uppercase block' }
        ],
        content: `
            <div class="card-body">
                <p class="lead">מחרוזות (Strings) ב-JavaScript הן <span title="בלתי ניתנות לשינוי לאחר יצירתן">Immutable</span>. המחרוזת מיוצגת כגוש זכוכית מוצק שחרוטות בו אותיות. אי אפשר לשנות את הזכוכית הזו מבלי לנפץ אותה.</p>
                <p>פונקציות כמו <code>slice</code> או <code>toUpperCase</code> הן סורקי לייזר: הן קוראות את הזכוכית המקורית מלמעלה, מעבירות את הנתונים למדפסת תלת-ממד, והיא יורקת גוש זכוכית *חדש לגמרי* ומושלם עם הטקסט המעובד. הגוש הישן ממשיך במסעו ללא כל שריטה.</p>
                <h4>מדריך שלב-אחר-שלב:</h4>
                <ol>
                    <li>אנו מגדירים מחרוזת טקסט המייצגת את גוש הזכוכית המקורי.</li>
                    <li>קוראים למתודה (כמו toUpperCase) שסורקת את הטקסט.</li>
                    <li>המערכת מייצרת מחרוזת חדשה לגמרי בזיכרון, בעוד המקורית נותרת בשלמותה.</li>
                </ol>
                <pre><code>
<span class="t-com">// 🧊 גוש הזכוכית המקורי</span>
<span class="t-key">const</span> glassBlock = <span class="t-str">"hello world"</span>;

<span class="t-com">// 🖨️ הלייזר סורק, ומדפיס גוש חדש עם אותיות גדולות</span>
<span class="t-key">const</span> newGlassBlock = glassBlock.toUpperCase();

<span class="t-com">// הגוש המקורי שרד!</span>
console.log(glassBlock); <span class="t-com">// "hello world"</span>
<span class="t-com">// הגוש החדש והנוצץ:</span>
console.log(newGlassBlock); <span class="t-com">// "HELLO WORLD"</span>
                </code></pre>
            </div>
        `
    },
    arrayMethods: {
        title: "מפעל העיבוד: Map, Filter, Reduce",
        visualizerSteps: [
            { stepId: 'map_iteration', text: '<b>Map:</b> ארתורו מפעיל ידית, זרוע לייזר חותכת כספות ומכפילה את תכולתן לקרון חדש.', action: 'Map conveyor runs' },
            { stepId: 'filter_evaluation', text: '<b>Filter:</b> דייגו מהדק את משפך הנחושת. כספות קטנות נופלות, והגדולות מחליקות פנימה.', action: 'Filter funnel sieving' },
            { stepId: 'reduce_smelt', text: '<b>Reduce:</b> הכספות ששרדו מושלכות לכור היתוך ענק ולוהט, שמפיק מטיל זהב אחד נוצץ.', action: 'Reduce furnace smash' }
        ],
        content: `
            <div class="card-body">
                <p class="lead">הגענו ללב הפועם של המפעל. מערך הוא קרון שמוביל חומרי גלם.</p>
                <p>מתודת ה-<span title="פונקציה שעוברת על כל איבר ויוצרת מערך חדש באותו אורך">map</span> היא תחנת מסוע הלייזר – ארתורו סורק פריט פריט, משנה אותו, ומייצר פריט חדש לקרון מקביל. ה-<span title="פונקציה המסננת ומחזירה רק איברים שעומדים בתנאי">filter</span> היא משפך סינון הרשת של דייגו – פריטים העומדים בתנאי מחליקים פנימה לקרון איסוף, והשאר מושלכים. שתי המתודות הללו לא נוגעות במערך המקורי! ה-<span title="פונקציה שמצמצמת את המערך כולו לערך בודד">reduce</span> היא כור היתוך הידראולי שדוחס את כל הערכים למטיל זהב אחד וטהור.</p>
                <h4>מדריך שלב-אחר-שלב:</h4>
                <ol>
                    <li>מסוע ה-map: מכפיל את המספרים ויוצר מהם העתק כפול מזהב.</li>
                    <li>משפך ה-filter: בורר מתוך התוצאה רק את המספרים הגדולים מ-5.</li>
                    <li>כור ה-reduce: מתיך ומאחד את המספרים ששרדו לכדי תוצאה סופית אחת.</li>
                </ol>
                <pre><code>
<span class="t-key">const</span> rawMaterials = [1, 2, 3, 4, 5];

<span class="t-com">// 🦾 ארתורו והמסוע: כל מספר מוכפל</span>
<span class="t-key">const</span> mappedSafes = rawMaterials.map(num => num * 2);
<span class="t-com">// תוצאה: [2, 4, 6, 8, 10]</span>

<span class="t-com">// 🕳️ דייגו ומשפך הסינון: רק גדולים מ-5 עוברים את הרשת</span>
<span class="t-key">const</span> filteredSafes = mappedSafes.filter(num => num > 5);
<span class="t-com">// תוצאה: [6, 8, 10]</span>

<span class="t-com">// 🌋 כור ההיתוך: מחבר ומתיך הכל למטיל זהב יחיד</span>
<span class="t-key">const</span> finalGoldBar = filteredSafes.reduce((acc, current) => acc + current, 0);
<span class="t-com">// תוצאה: 24</span>
                </code></pre>
            </div>
        `
    },
    methodChaining: {
        title: "זרימה מוחלטת: שרשור מתודות וצינורות ואקום",
        visualizerSteps: [
            { stepId: 'chaining_connect', text: '<b>חיבור צינורות:</b> ארתורו ודייגו נועלים צינור ואקום זכוכית בין מסוע הלייזר למשפך ולכור ההיתוך.', action: 'Engage vacuum seals' },
            { stepId: 'chaining_flow', text: '<b>זרימה רציפה:</b> הכספות טסות במהירות מסחררת, נחתכות בלייזר, מסוננות במשפך, ומותכות בכור בנשימה אחת.', action: 'Continuous vacuum flow' }
        ],
        content: `
            <div class="card-body">
                <p class="lead">שרשור מתודות (<span title="חיבור של כמה פעולות ברצף ללא צורך במשתני ביניים">Method Chaining</span>) מבטל את הצורך בקרונות המתנה או במשתנים זמניים.</p>
                <p>ארתורו ודייגו מחברים צינורות ואקום שקופים מפתח היציאה של תחנה אחת ישר אל תוך תחנה הבאה. הנתונים הגולמיים עוברים במעוף מסחרר מתחנת הסינון, נשאבים מיד דרך מנהרת ה-Map לשינוי צורה באוויר, ונפלטים היישר לכור ההיתוך. זרימה רציפה, ללא מעצורים.</p>
                <h4>מדריך שלב-אחר-שלב:</h4>
                <ol>
                    <li>קריאה ל-map מחזירה מערך חדש באופן מיידי.</li>
                    <li>אנו מדביקים את הנקודה '.' ומפעילים עליו מיד את filter ללא צורך לשמור במשתנה.</li>
                    <li>לבסוף מפעילים reduce על התוצאה המעופפת כדי לקבל את מטיל הזהב הסופי.</li>
                </ol>
                <pre><code>
<span class="t-key">const</span> rawMaterials = [1, 2, 3, 4, 5];

<span class="t-com">// 🚀 צינור הוואקום הרציף: הכל קורה במכה אחת!</span>
<span class="t-key">const</span> finalGoldBar = rawMaterials
    .map(num => num * 2)               <span class="t-com">// זרוע הלייזר</span>
    .filter(num => num > 5)            <span class="t-com">// משפך הסינון</span>
    .reduce((acc, curr) => acc + curr, 0); <span class="t-com">// כור ההיתוך</span>

console.log(finalGoldBar); <span class="t-com">// 24</span>
                </code></pre>
            </div>
        `
    }
};
