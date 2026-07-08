// נתונים מלאים עבור הפרויקטים האסינכרוניים בסימולטור ה-IDE
const projectsData = {
  // ----------------------------------------------------
  // פרויקט קבצים אסינכרוני (asyncFiles)
  // ----------------------------------------------------
  asyncFiles: {
    title: "Async Files Explorer 📂 (IDE Mode)",
    floatingExplanation: `
      <h1>📂 מדריך הפרויקט: קורא ומעבד קבצים אסינכרוני</h1>
      <p>פרויקט זה מדגים שליטה מלאה בעבודה מול דיסק (I/O) בסביבה אסינכרונית לא-חוסמת ב-Node.js. אנו משווים בין שיטת ה-Callbacks המסורתית לשרשראות Promises מתקדמות.</p>
      <hr style="border-color:#333; margin: 20px 0;">
      <h2>🎯 מטרות הפרויקט והסבר כללי</h2>
      <ul>
        <li><strong>קריאת קובץ הקלט (input.txt):</strong> קריאה לא חוסמת של קובץ טקסט בעברית ובאנגלית.</li>
        <li><strong>כתיבת קובץ פלט (output.txt):</strong> כתיבה אסינכרונית של אישור ביצוע.</li>
        <li><strong>שרשור קריאה וכתיבה (Callback Chain):</strong> קריאת קובץ, עיבודו (הפיכה לאותיות גדולות - UPPERCASE) וכתיבתו לקובץ חדש (output-upper.txt).</li>
        <li><strong>שדרוג ל-fs.promises:</strong> מימוש אותו תהליך באמצעות Promises לשמירה על קוד שטוח ונקי ללא Callback Hell.</li>
        <li><strong>הרצה מקבילית (Promise.all):</strong> קריאת שני קבצים במקביל וחישוב האורכים שלהם.</li>
      </ul>
      <p>💡 <em>עיין בסיפור (Story) לצד כל שורה בקובץ <code>async-files.js</code> להסבר מפורט של הלוגיקה והארכיטקטורה.</em></p>
    `,
    files: {
      'async-files.js': `const fs = require('fs');
const fsPromises = require('fs').promises;

// משימה 1 — קריאה מקובץ עם Callback
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('שגיאה בקריאה: ' + err.message);
        return;
    }
    console.log('תוכן הקובץ:');
    console.log(data);
});

// משימה 2 — כתיבה לקובץ עם Callback
fs.writeFile('output.txt', 'נכתב בהצלחה על ידי Node.js!', 'utf8', (err) => {
    if (err) {
        console.log('שגיאה בכתיבה: ' + err.message);
        return;
    }
    console.log('הקובץ נכתב בהצלחה');
});

// משימה 3 — שרשור Callbacks (Callback Chain)
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('שגיאה בקריאה: ' + err.message);
        return;
    }
    const upperText = data.toUpperCase();
    fs.writeFile('output-upper.txt', upperText, 'utf8', (err) => {
        if (err) {
            console.log('שגיאה בכתיבה: ' + err.message);
            return;
        }
        console.log('הכל הסתיים בהצלחה!');
    });
});

// משימה 4 — קריאה עם Promise
fsPromises.readFile('input.txt', 'utf8')
    .then((data) => {
        console.log('קראתי עם Promise:');
        console.log(data);
    })
    .catch((err) => {
        console.log('שגיאה: ' + err.message);
    });

// משימה 5 — שרשור Promises
fsPromises.readFile('input.txt', 'utf8')
    .then((data) => {
        const upperText = data.toUpperCase();
        return fsPromises.writeFile('output-upper.txt', upperText, 'utf8');
    })
    .then(() => {
        console.log('הכל הסתיים בהצלחה בשרשור Promises!');
    })
    .catch((err) => {
        console.log('שגיאה: ' + err.message);
    });

// בונוס — Promise.all
Promise.all([
    fsPromises.readFile('input.txt', 'utf8'),
    fsPromises.readFile('output.txt', 'utf8')
]).then(([d1, d2]) => {
    console.log('אורך קובץ קלט:', d1.length);
    console.log('אורך קובץ פלט:', d2.length);
}).catch((err) => {
    console.log('שגיאה בבונוס:', err.message);
});`,
      'input.txt': `שלום עולם\nזה קובץ הקלט שלי\nNode.js מגניב`,
      'output.txt': `נכתב בהצלחה על ידי Node.js!`,
      'output-upper.txt': `שלום עולם\nזה קובץ הקלט שלי\nNODE.JS מגניב`
    },
    stories: {
      'async-files.js': [
        "מייבאים את מודול fs הישן של Node.js המבוסס על callbacks לצורך משימות 1-3.",
        "מייבאים את תת-מודול fs.promises המבוסס על הבטחות (Promises) לצורך משימות 4-5 והבונוס.",
        "",
        "משימה 1: קריאת הקובץ input.txt בצורה אסינכרונית.",
        "הפונקציה readFile מקבלת את שם הקובץ, הקידוד (utf8) ופונקציית callback המקבלת שגיאה (err) ומידע (data).",
        "בדיקת שגיאה (Error-First pattern): אם הקובץ לא נמצא או חסר הרשאות, נדפיס שגיאה ונעצור.",
        "",
        "",
        "אם הכל תקין, נדפיס את הודעת התוכן שנקרא מהדיסק.",
        "",
        "",
        "",
        "משימה 2: כתיבה אסינכרונית של טקסט לתוך output.txt.",
        "הפונקציה writeFile מחליפה או יוצרת קובץ עם התוכן המבוקש. הקולבק רץ רק בסיום הפעולה.",
        "בדיקת שגיאה: אם הכתיבה נכשלה (למשל דיסק מלא), נדווח על כך.",
        "",
        "",
        "מדפיסים הודעת הצלחה בטרמינל כשהפעולה הסתיימה.",
        "",
        "",
        "",
        "משימה 3: שרשור קולבקים (Callback Chaining). קודם קוראים ואז כותבים את המעובד.",
        "אנחנו מתחילים בקריאה של input.txt...",
        "שוב בודקים שגיאה לקריאה.",
        "",
        "",
        "הפיכת התוכן שנקרא לאותיות גדולות (באנגלית בלבד, עברית נשארת כפי שהיא).",
        "כתיבת הקובץ החדש output-upper.txt בתוך בלוק הקולבק של הקריאה (זהו קינון שמגביל אותנו!).",
        "בדיקת שגיאה לכתיבה.",
        "",
        "",
        "הדפסת אישור סופי לאחר ששתי הפעולות האסינכרוניות הושלמו בזו אחר זו.",
        "",
        "",
        "",
        "משימה 4: קריאה מודרנית עם Promises.",
        "fsPromises.readFile מחזירה אובייקט הבטחה. אנו נרשמים לתוצאה בעזרת .then().",
        "בלוק then מופעל רק כאשר הקובץ נקרא בהצלחה ומקבל את התוכן כארגומנט.",
        "",
        "",
        "בלוק catch תופס שגיאות של כל התהליך (קריאה שנכשלה).",
        "",
        "",
        "",
        "משימה 5: שרשור הבטחות שטוח (Chaining Promises). פתרון אלגנטי לגיהנום הקולבקים.",
        "קוראים את הקובץ. בסיום, בלוק ה-then הראשון מופעל...",
        "מעבדים את המידע ומחזירים (return) הבטחה חדשה של כתיבה לקובץ output-upper.txt.",
        "מחזירים את הבטחת הכתיבה כדי שה-then הבא ימתין לסיומה.",
        "",
        "בלוק then שני: מופעל רק לאחר שהכתיבה הסתיימה בהצלחה.",
        "",
        "",
        "בלוק catch יחיד לכל השרשרת: תופס שגיאה אם הקריאה או הכתיבה נכשלו!",
        "",
        "",
        "",
        "בונוס: שימוש ב-Promise.all לקריאה מקבילית של שני קבצים בו-זמנית.",
        "הפונקציה מקבלת מערך של הבטחות ומחכה עד שכולן יושלמו בהצלחה.",
        "",
        "",
        "בסיום אנו מקבלים מערך של תוצאות [d1, d2] ומדפיסים את אורכם של שני הקבצים.",
        "",
        "",
        "תפיסת שגיאות משותפת לשני הקבצים."
      ],
      'input.txt': [
        "תוכן קובץ הקלט input.txt שמשמש את פונקציות הקריאה בפרויקט."
      ],
      'output.txt': [
        "קובץ הפלט המיוצר על ידי משימה 2 המכיל אישור כתיבה."
      ],
      'output-upper.txt': [
        "קובץ הפלט המעובד על ידי משימה 3 ומשימה 5 שבו כל האותיות באנגלית הומרו לאותיות גדולות (UPPERCASE)."
      ]
    }
  },

  // ----------------------------------------------------
  // פרויקט מתכנן הלימודים (studyPlanner)
  // ----------------------------------------------------
  studyPlanner: {
    title: "Study Planner Dashboard 📅 (IDE Mode)",
    floatingExplanation: `
      <h1>📅 מדריך הפרויקט: מתכנן לימודים אסינכרוני</h1>
      <p>מתכנן הלימודים היומי הוא אפליקציית Node.js שלמה (מודולרית) המדגימה שילוב מנצח של כלל נושאי האסינכרוניות:</p>
      <ul>
        <li><strong>Callbacks פשוטים ו-Error-First:</strong> ברכת ברוך הבא וחיפוש תלמידים אסינכרוני בדימוי פנייה למסד נתונים.</li>
        <li><strong>Promises:</strong> שליפת משימה ספציפית ובניית תוכנית לימוד שלמה בשרשור של Then/Catch.</li>
        <li><strong>Async / Await:</strong> עטיפת קולבקים ישנים בפרומיסים ושימוש ב-try/catch להכנת תזכורות למכשירים ניידים.</li>
        <li><strong>קובץ JSON מקומי (fs/promises):</strong> שמירה וטעינה אוטומטית של תוכנית הלימודים מקובץ <code>saved-plan.json</code> בדיסק.</li>
      </ul>
      <p>💡 <em>עבור בין הקבצים השונים בעץ התיקיות משמאל ולחץ על שורות הקוד כדי להבין את השילוב ביניהם!</em></p>
    `,
    files: {
      'package.json': `{
  "name": "study-planner",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node main.js"
  }
}`,
      'data.js': `export const students = [
  { id: 1, name: "נתן", contact: "050-1234567" },
  { id: 2, name: "משה", contact: null }
];

export const tasks = [
  { title: "תרגול קולבקים ב-JS", duration: 45 },
  { title: "לימוד פרומיסים ו-Fetch", duration: 60 },
  { title: "כתיבת פרויקט Study Planner", duration: 90 }
];`,
      'callbacks.js': `import { students } from './data.js';

export function getWelcomeMessage(studentName, callback) {
    setTimeout(() => {
        callback(\`ברוך הבא, \${studentName}! מוכן לתכנן את יום הלימודים שלך?\`);
    }, 500);
}

export function findStudentById(id, callback) {
    setTimeout(() => {
        const student = students.find(s => s.id === id);
        if (!student) {
            callback(new Error(\`סטודנט עם מזהה \${id} לא נמצא במערכת\`));
            return;
        }
        callback(null, student);
    }, 1000);
}`,
      'promises.js': `import { tasks } from './data.js';

export function getTaskByTitle(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const task = tasks.find(t => t.title === title);
            if (!task) {
                reject(new Error(\`משימה בשם "\${title}" לא נמצאה במאגר\`));
                return;
            }
            resolve(task);
        }, 800);
    });
}

export function buildStudyPlan(taskTitles) {
    let plan = [];
    let totalDuration = 0;
    
    return getTaskByTitle(taskTitles[0])
        .then(t1 => {
            plan.push(t1);
            totalDuration += t1.duration;
            if (taskTitles.length > 1) {
                return getTaskByTitle(taskTitles[1]);
            }
            return null;
        })
        .then(t2 => {
            if (t2) {
                plan.push(t2);
                totalDuration += t2.duration;
            }
            return { plan, totalDuration };
        });
}`,
      'asyncAwait.js': `import { findStudentById } from './callbacks.js';

function findStudentPromise(id) {
    return new Promise((resolve, reject) => {
        findStudentById(id, (err, student) => {
            if (err) reject(err);
            else resolve(student);
        });
    });
}

export async function prepareReminder(studentId) {
    const student = await findStudentPromise(studentId);
    if (!student.contact) {
        throw new Error(\`לא ניתן להכין תזכורת עבור \${student.name} - חסרים פרטי קשר!\`);
    }
    return \`תזכורת נשלחה אל \${student.name} למספר \${student.contact}\`;
}`,
      'storage.js': `import fsp from 'fs/promises';

export async function savePlanToFile(filename, planData) {
    await fsp.writeFile(filename, JSON.stringify(planData, null, 2), 'utf8');
}

export async function loadPlanFromFile(filename) {
    try {
        const data = await fsp.readFile(filename, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return null;
    }
}`,
      'main.js': `import { getWelcomeMessage, findStudentById } from './callbacks.js';
import { buildStudyPlan } from './promises.js';
import { prepareReminder } from './asyncAwait.js';
import { savePlanToFile, loadPlanFromFile } from './storage.js';

async function run() {
    console.log("=== תחילת ריצת האפליקציה Study Planner ===");
    
    setTimeout(() => {
        console.log("[אסינכרוני ברקע] משימה מושהית הסתיימה!");
    }, 1500);
    console.log("[סינכרוני] קוד רגיל ממשיך לרוץ מייד ללא המתנה!");
    
    const previousPlan = await loadPlanFromFile('saved-plan.json');
    if (previousPlan) {
        console.log(\`[טעינה] נמצאה תוכנית קודמת עבור \${previousPlan.studentName}. סה"כ זמן: \${previousPlan.totalDuration} דקות.\`);
    } else {
        console.log("[טעינה] לא נמצאה תוכנית לימודים קודמת שמורה.");
    }
    
    getWelcomeMessage("נתן", (message) => {
        console.log(\`[קולבק] \${message}\`);
    });
    
    findStudentById(1, (err, student) => {
        if (err) {
            console.log(\`[שגיאה] \${err.message}\`);
            return;
        }
        console.log(\`[קולבק] נמצא סטודנט: \${student.name}\`);
        
        console.log("[פרומיס] מתחיל לבנות תוכנית לימודים...");
        buildStudyPlan(["תרגול קולבקים ב-JS", "לימוד פרומיסים ו-Fetch"])
            .then(async (result) => {
                console.log(\`[פרומיס] תוכנית הלימודים נבנתה עבור \${student.name}:\`);
                result.plan.forEach(t => console.log(\` - \${t.title} (\${t.duration} דקות)\`));
                console.log(\`[פרומיס] סה"כ זמן לימוד: \${result.totalDuration} דקות.\`);
                
                const planToSave = {
                    studentName: student.name,
                    totalDuration: result.totalDuration,
                    tasks: result.plan.map(t => t.title)
                };
                await savePlanToFile('saved-plan.json', planToSave);
                console.log("[שמירה] תוכנית הלימודים נשמרה בהצלחה לקובץ saved-plan.json");
            })
            .catch(error => {
                console.log(\`[פרומיס שגיאה] \${error.message}\`);
            })
            .finally(() => {
                console.log("[פרומיס Finally] בניית התוכנית הסתיימה.");
            });
    });
    
    findStudentById(99, (err, student) => {
        if (err) {
            console.log(\`[קולבק שגיאה מתוכננת] \${err.message}\`);
            return;
        }
    });
    
    buildStudyPlan(["משימה דמיונית"])
        .catch(err => {
            console.log(\`[פרומיס שגיאה מתוכננת] \${err.message}\`);
        });
        
    setTimeout(async () => {
        try {
            const reminder = await prepareReminder(1);
            console.log(\`[Async/Await] \${reminder}\`);
        } catch (error) {
            console.log(\`[Async/Await שגיאה] \${error.message}\`);
        }
    }, 2000);
    
    setTimeout(async () => {
        try {
            const reminder = await prepareReminder(2);
            console.log(\`[Async/Await] \${reminder}\`);
        } catch (error) {
            console.log(\`[Async/Await שגיאה מתוכננת] \${error.message}\`);
        }
    }, 2500);
}

run();`,
      'saved-plan.json': `{
  "studentName": "נתן",
  "totalDuration": 105,
  "tasks": [
    "תרגול קולבקים ב-JS",
    "לימוד פרומיסים ו-Fetch"
  ]
}`
    },
    stories: {
      'package.json': [
        "הגדרות פרויקט ה-Node.js.",
        "שם האפליקציה.",
        "גרסת פיתוח.",
        "חשוב מאוד: אנו מציינים type: module כדי לעבוד עם import/export המודרני של ES Modules.",
        "סקריפט הפעלה מהיר - מאפשר להריץ בטרמינל npm start.",
        "",
        "",
        ""
      ],
      'data.js': [
        "קובץ הנתונים הגלובלי המדמה מסד נתונים של המערכת.",
        "ייצוא מערך הסטודנטים: נתן (עם מספר טלפון) ומשה (ללא פרטי קשר).",
        "",
        "",
        "",
        "",
        "ייצוא מערך המשימות הלימודיות הפוטנציאליות עם משך הזמן בדקות של כל משימה.",
        "",
        "",
        ""
      ],
      'callbacks.js': [
        "קובץ הממחיש עבודה בשיטת ה-Callbacks המסורתית.",
        "מייבאים את מערך הסטודנטים מ-data.js.",
        "",
        "פונקציה המקבלת קולבק פשוט לקבלת הודעת פתיחה מושהית.",
        "ממתינים חצי שנייה בדימוי בדיקה ברקע...",
        "מפעילים את פונקציית הקולבק ומעבירים אליה את מחרוזת הברכה.",
        "",
        "",
        "",
        "פונקציה הממחישה קולבק מסוג Error-First לחיפוש סטודנט לפי מזהה.",
        "דימוי קריאה מושהית של שנייה שלמה מהבסיס...",
        "משתמשים ב-find כדי למצוא את הסטודנט לפי ID.",
        "אם הסטודנט לא נמצא במאגר...",
        "נקרא לקולבק עם שגיאה כארגומנט ראשון, ונעצור מייד.",
        "",
        "",
        "אם הכל עבד, נקרא לקולבק ללא שגיאה (null), ונעביר את אובייקט הסטודנט כארגומנט השני."
      ],
      'promises.js': [
        "קובץ הממחיש עבודה בשיטת ה-Promises (הבטחות).",
        "מייבאים את מערך המשימות.",
        "",
        "פונקציה המחזירה Promise ומחפשת משימה לפי כותרת.",
        "מחזירה אובייקט Promise המקבל פונקציית הרצה עם resolve ו-reject.",
        "דימוי המתנה אסינכרונית של 800 מילישניות.",
        "חיפוש משימה לפי השם במערך.",
        "אם המשימה לא קיימת בבנק...",
        "נדחה את ההבטחה (reject) ונעביר שגיאה מתאימה.",
        "",
        "",
        "אם המשימה נמצאה, נפתור את ההבטחה (resolve) עם המשימה.",
        "",
        "",
        "",
        "בניית תוכנית לימודים על ידי שרשור Promises (Chaining .then).",
        "מערך ריק לשמירת המשימות וצובר משך הלימוד.",
        "",
        "",
        "פונים לקבלת המשימה הראשונה ברשימה...",
        "בלוק ה-then הראשון מופעל כשהמשימה הראשונה מוכנה:",
        "דוחפים את המשימה לתוכנית ומוסיפים את זמן הלימוד שלה.",
        "אם הועברה משימה שנייה ברשימה, אנו קוראים לה ומחזירים את ההבטחה שלה לשירשור...",
        "",
        "",
        "אם לא, נחזיר null ונמשיך הלאה.",
        "",
        "בלוק ה-then השני מופעל כשהמשימה השנייה מוכנה:",
        "אם התקבלה משימה שנייה, דוחפים אותה ומעדכנים את הזמן.",
        "",
        "",
        "מחזירים אובייקט סיכום של תוכנית הלימודים והזמן הכולל."
      ],
      'asyncAwait.js': [
        "קובץ הממחיש שימוש ב-async/await מודרני.",
        "מייבאים את פונקציית החיפוש הישנה מבוססת הקולבקים.",
        "",
        "פונקציית מעטפת הממירה את findStudentById לקבלת הבטחה (Promisification).",
        "מחזירה Promise חדש.",
        "מפעילה את פונקציית הקולבק, במידה ויש שגיאה היא דוחה את ההבטחה, אחרת פותרת אותה.",
        "",
        "",
        "",
        "",
        "",
        "פונקציה אסינכרונית (async) המכינה תזכורת למכשיר הנייד של התלמיד.",
        "משתמשים ב-await כדי לחכות שהבטחת החיפוש תסתיים ללא צורך ב-then.",
        "אם לסטודנט אין מספר טלפון (כמו משה)...",
        "אנו זורקים שגיאה (throw new Error). השגיאה תיתפס בבלוק ה-catch של מי שקרא לנו.",
        "",
        "מחזירים את הודעת התזכורת המוכנה."
      ],
      'storage.js': [
        "קובץ לניהול שמירה וטעינה מקובץ JSON מקומי באמצעות fs.promises.",
        "מייבאים את מודול fs/promises של Node.js לעבודה ישירה עם הבטחות.",
        "",
        "פונקציה אסינכרונית השומרת את תוכנית הלימודים לדיסק.",
        "המרת אובייקט ה-JS למחרוזת JSON מעוצבת בצורה אסינכרונית.",
        "",
        "",
        "פונקציה אסינכרונית הטוענת את תוכנית הלימודים מהדיסק.",
        "עטיפה ב-try/catch כדי למנוע קריסה במידה והקובץ טרם נוצר.",
        "קריאת הקובץ בצורה אסינכרונית.",
        "תרגום מחרוזת ה-JSON בחזרה לאובייקט JS.",
        "במקרה של שגיאה (למשל קובץ לא קיים), נחזיר null בצורה בטוחה."
      ],
      'main.js': [
        "המנוע הראשי שמנהל ומפעיל את כל חלקי הפרויקט.",
        "ייבוא כלל הפונקציות האסינכרוניות מכל הקבצים המודולריים.",
        "",
        "",
        "",
        "",
        "פונקציית ההרצה הראשית המסומנת כ-async.",
        "הדפסת כותרת התחלה.",
        "",
        "הוכחת אסינכרוניות: נרשום טיימר של 1.5 שניות ונמשיך מייד הלאה ללא חסימה.",
        "קוד קולבק של טיימר המדפיס ברקע לאחר 1.5 שניות.",
        "",
        "פלט זה יודפס מייד בטרמינל לפני קוד הטיימר, כי קוד סינכרוני רץ תמיד ראשון!",
        "",
        "טעינת תוכנית קודמת השמורה בקובץ ה-JSON (משתמש ב-await).",
        "אם נמצאה תוכנית קודמת, נדפיס את פרטיה.",
        "",
        "אחרת, נדווח שלא קיימת תוכנית.",
        "",
        "",
        "1. קריאת קולבק פשוט לקבלת הודעת פתיחה לתלמיד נתן.",
        "",
        "",
        "",
        "2. קריאת קולבק Error-First לחיפוש תלמיד מזהה 1 (נתן).",
        "בדיקת שגיאה בקולבק.",
        "",
        "",
        "נמצא לקוח בהצלחה בקולבק.",
        "",
        "3. שימוש בשרשרת Promises לבניית תוכנית לימודים לתלמיד.",
        "מעבירים רשימה של שתי משימות ללימוד...",
        "בלוק ה-then מופעל כשתוכנית הלימודים מוכנה:",
        "הדפסת כל המטלות בתוכנית.",
        "",
        "הדפסת הזמן הכולל הנדרש לתוכנית.",
        "",
        "יצירת אובייקט ושמירתו לקובץ JSON בעזרת await.",
        "",
        "",
        "",
        "שמירה אסינכרונית.",
        "",
        "בלוק catch לתפיסת שגיאות במידה ואחת המטלות לא נמצאה.",
        "",
        "בלוק finally שרץ תמיד בסיום התהליך.",
        "",
        "",
        "",
        "4. בדיקת שגיאה מתוכננת בקולבק - חיפוש תלמיד שאינו קיים (מזהה 99).",
        "",
        "בתוך הקולבק נראה שהשגיאה אכן נתפסת ומודפסת ללא קריסת התוכנית.",
        "",
        "",
        "",
        "5. בדיקת שגיאה מתוכננת בפרומיס - בניית תוכנית עם מטלה דמיונית.",
        "בלוק ה-catch יופעל ויתפוס את השגיאה של הדחייה (reject).",
        "",
        "",
        "6. הכנת תזכורת לתלמיד קיים בעל טלפון (נתן) בעזרת async/await.",
        "שימוש בטיימר של 2 שניות.",
        "בתוך try/catch נבצע await להכנת התזכורת.",
        "הפעולה תצליח ותודפס ההודעה המיועדת.",
        "",
        "",
        "",
        "",
        "7. הכנת תזכורת לתלמיד ללא טלפון (משה) לבדיקת שגיאה.",
        "שימוש בטיימר של 2.5 שניות.",
        "בתוך try/catch נבצע await להכנת התזכורת.",
        "הפעולה תיכשל עקב מחסור בפרטי קשר, והשגיאה תיתפס בבלוק ה-catch ותודפס בצורה מבוקרת."
      ],
      'saved-plan.json': [
        "קובץ הנתונים שנוצר ונשמר באופן דינמי על ידי הפרויקט."
      ]
    }
  },
  // ----------------------------------------------------
  // פרויקט ניהול אוסף סרטים (movieCollection)
  // ----------------------------------------------------
  movieCollection: {
    title: "Movie Collection Manager 🎬 (IDE Mode)",
    floatingExplanation: `
      <h1>🎬 מדריך הפרויקט: מנהל אוסף סרטים אסינכרוני</h1>
      <p>פרויקט זה מדגים בנייה של אפליקציית Node.js מודולרית שלמה לניהול אוסף סרטים, העובדת מול קובץ JSON אסינכרוני בדיסק. הפרויקט מדגים שילוב של <strong>קולבקים (Callbacks)</strong> ו<strong>הבטחות (Promises)</strong> בטיפול בקבצים, ולוגיקה עסקית המנוהלת במלואה בעזרת <strong>async/await</strong>.</p>
      <hr style="border-color:#333; margin: 20px 0;">
      <h2>🎯 מטרות הפרויקט והסבר כללי</h2>
      <ul>
        <li><strong>הפרדת אחריות (Separation of Concerns):</strong> חלוקה ל-Controller (קובץ app.js), Services (לוגיקה וקבצים) ו-Utils (ולידטורים).</li>
        <li><strong>שימוש ב-fs:</strong> הקובץ <code>file.service.js</code> הוא היחיד שמכיל קוד <code>fs</code>, ומציע גם גרסת Callback וגם גרסת Promise.</li>
        <li><strong>ולידציות מתקדמות:</strong> אינטגרציה של פונקציות וולידציה הבודקות שם, שנה ודירוג תקינים, ומבקשות מהמשתמש להזין מחדש בעת כשל.</li>
        <li><strong>בונוסים מוטמעים:</strong> מיון סרטים, Top 3, Undo למחיקה אחרונה, וייצוא דוח סטטיסטיקות מלא ל-<code>report.json</code>.</li>
      </ul>
      <p>💡 <em>לחץ על הקבצים השונים משמאל כדי ללמוד את השורות וההסברים.</em></p>
    `,
    files: {
      'package.json': `{
  "name": "movie-manager",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "readline-sync": "^1.4.10"
  }
}`,
      'data/movies.json': `[
  {
    "id": 1,
    "title": "Inception",
    "genre": "Sci-Fi",
    "year": 2010,
    "rating": 8.8
  },
  {
    "id": 2,
    "title": "Interstellar",
    "genre": "Sci-Fi",
    "year": 2014,
    "rating": 8.6
  },
  {
    "id": 3,
    "title": "Titanic",
    "genre": "Drama",
    "year": 1997,
    "rating": 7.8
  }
]`,
      'utils/validator.js': `export function validateTitle(title) {
    return typeof title === 'string' && title !== '';
}

export function validateYear(year) {
    const parsedYear = Number(year);
    return !isNaN(parsedYear) && parsedYear > 1900 && parsedYear <= 2026;
}

export function validateRating(rating) {
    const parsedRating = Number(rating);
    return !isNaN(parsedRating) && parsedRating >= 0 && parsedRating <= 10;
}
`,
      'services/file.service.js': `import fs from 'fs';

const filePath = 'data/movies.json';

// חלק א' — קולבקים
export function readFromFileCallback(callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') return callback(null, []);
            return callback(err);
        }
        try {
            callback(null, JSON.parse(data));
        } catch (e) {
            callback(e);
        }
    });
}

export function writeToFileCallback(movies, callback) {
    fs.writeFile(filePath, JSON.stringify(movies, null, 2), 'utf8', callback);
}

// חלק ב' — פרומיסים
export function readFromFilePromise() {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') return resolve([]);
                return reject(err);
            }
            try {
                resolve(JSON.parse(data));
            } catch (e) {
                reject(e);
            }
        });
    });
}

export function writeToFilePromise(movies) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(movies, null, 2), 'utf8', (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
}

export function writeReportToFile(report) {
    return new Promise((resolve, reject) => {
        fs.writeFile('report.json', JSON.stringify(report, null, 2), 'utf8', (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
}
`,
      'services/movie.service.js': `import {
    readFromFileCallback, writeToFileCallback,
    readFromFilePromise, writeToFilePromise, writeReportToFile
} from './file.service.js';

let lastDeletedMovie = null;

export function showAllMovies(callback) {
    readFromFileCallback((err, movies) => {
        if (err) return callback(err);
        callback(null, movies);
    });
}

export function showById(id, callback) {
    readFromFileCallback((err, movies) => {
        if (err) return callback(err);
        const movie = movies.find(m => m.id === Number(id));
        callback(null, movie);
    });
}

export function createNewMovie(title, genre, year, rating, callback) {
    readFromFileCallback((err, movies) => {
        if (err) return callback(err);
        
        let maxId = 0;
        for (const m of movies) {
            if (m.id > maxId) {
                maxId = m.id;
            }
        }
        const newId = maxId + 1;
        
        const newMovie = {
            id: newId,
            title: title,
            genre: genre,
            year: Number(year),
            rating: Number(rating)
        };
        movies.push(newMovie);
        writeToFileCallback(movies, (err) => {
            if (err) return callback(err);
            callback(null, newMovie);
        });
    });
}

export function deleteMovie(id) {
    return readFromFilePromise()
        .then(movies => {
            const movie = movies.find(m => m.id === Number(id));
            if (!movie) return null;
            lastDeletedMovie = movie;
            const updated = movies.filter(m => m.id !== Number(id));
            return writeToFilePromise(updated).then(() => movie);
        });
}

export function updateRate(id, newRating) {
    return readFromFilePromise()
        .then(movies => {
            const movie = movies.find(m => m.id === Number(id));
            if (!movie) return null;
            movie.rating = Number(newRating);
            return writeToFilePromise(movies).then(() => movie);
        });
}

export function searchByName(nameQuery) {
    return readFromFilePromise()
        .then(movies => {
            const query = nameQuery.toLowerCase();
            return movies.filter(m => m.title.toLowerCase().includes(query));
        });
}

export async function sortByGenre(genre) {
    const movies = await readFromFilePromise();
    return movies.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
}

export async function showStatistics() {
    const movies = await readFromFilePromise();
    if (movies.length === 0) return { count: 0, averageRating: 0, bestMovie: null };
    const count = movies.length;
    
    let sum = 0;
    for (const m of movies) {
        sum += m.rating;
    }
    
    let bestMovie = movies[0];
    for (const m of movies) {
        if (m.rating > bestMovie.rating) {
            bestMovie = m;
        }
    }
    
    return { count, averageRating: (sum / count).toFixed(2), bestMovie };
}

// Bonuses

export async function sortMovies(sortBy) {
    const movies = await readFromFilePromise();
    const sorted = [];
    for (const m of movies) {
        sorted.push(m);
    }
    if (sortBy === 'name') {
        sorted.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return 0;
        });
    } else if (sortBy === 'year') {
        sorted.sort((a, b) => a.year - b.year);
    } else if (sortBy === 'rating') {
        sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
}

export async function top3Movies() {
    const movies = await readFromFilePromise();
    const sorted = [];
    for (const m of movies) {
        sorted.push(m);
    }
    sorted.sort((a, b) => b.rating - a.rating);
    return sorted.slice(0, 3);
}

export async function undoDelete() {
    if (!lastDeletedMovie) return null;
    const movies = await readFromFilePromise();
    
    let maxId = 0;
    for (const m of movies) {
        if (m.id > maxId) {
            maxId = m.id;
        }
    }
    
    const exists = movies.find(m => m.id === lastDeletedMovie.id);
    if (exists) {
        lastDeletedMovie.id = maxId + 1;
    }
    movies.push(lastDeletedMovie);
    const restored = lastDeletedMovie;
    lastDeletedMovie = null;
    await writeToFilePromise(movies);
    return restored;
}

export async function exportReport() {
    const stats = await showStatistics();
    const movies = await readFromFilePromise();
    
    const genres = [];
    for (const m of movies) {
        if (!genres.includes(m.genre)) {
            genres.push(m.genre);
        }
    }
    
    const report = {
        totalMovies: stats.count,
        averageRating: Number(stats.averageRating),
        bestMovie: stats.bestMovie ? { title: stats.bestMovie.title, rating: stats.bestMovie.rating } : null,
        availableGenres: genres
    };
    await writeReportToFile(report);
    return report;
}

export async function searchByYearRange(start, end) {
    const movies = await readFromFilePromise();
    return movies.filter(m => m.year >= Number(start) && m.year <= Number(end));
}
`,
      'app.js': `import rl from 'readline-sync';
import {
    showAllMovies, showById, createNewMovie, deleteMovie, updateRate,
    searchByName, sortByGenre, showStatistics, sortMovies,
    top3Movies, undoDelete, exportReport, searchByYearRange
} from './services/movie.service.js';
import { validateTitle, validateYear, validateRating } from './utils/validator.js';

function printMenu() {
    console.log('\\n==============================\\nMovie Collection Manager\\n==============================');
    console.log('1. Show all movies\\n2. Show by id\\n3. Create new movie\\n4. Delete movie\\n5. Update rate\\n6. Search by name\\n7. Sort by genre (Show by genre)\\n8. Show statistics\\n9. Sort movies (Bonus 1)\\n10. Show top 3 movies (Bonus 2)\\n11. Undo delete movie (Bonus 3)\\n12. Export report to JSON (Bonus 4)\\n13. Search movies by year range (Bonus 5)\\n14. Exit\\n==============================');
}

function handleOption(option, callback) {
    switch (option) {
        case '1': {
            showAllMovies((err, movies) => {
                if (err) console.log('Error reading movies: ' + err.message);
                else if (movies.length === 0) console.log('No movies found.');
                else {
                    console.log('\\nAll movies in collection:');
                    let index = 1;
                    for (const m of movies) {
                        console.log(index + '. ' + m.title);
                        index++;
                    }
                }
                callback();
            });
            break;
        }
        case '2': {
            const id = rl.question('Enter movie ID: ');
            showById(id, (err, m) => {
                if (err) console.log('Error: ' + err.message);
                else if (!m) console.log('Error: Movie not found.');
                else console.log('\\nID: ' + m.id + '\\nTitle: ' + m.title + '\\nGenre: ' + m.genre + '\\nYear: ' + m.year + '\\nRating: ' + m.rating);
                callback();
            });
            break;
        }
        case '3': {
            let title = '';
            while (true) {
                title = rl.question('Enter title: ');
                if (validateTitle(title)) break;
                console.log('Invalid title. Cannot be empty. Please enter again.');
            }
            const genre = rl.question('Enter genre: ');
            let year = '';
            while (true) {
                year = rl.question('Enter release year: ');
                if (validateYear(year)) break;
                console.log('Invalid year. Must be between 1901 and current year. Please enter again.');
            }
            let rating = '';
            while (true) {
                rating = rl.question('Enter rating (0-10): ');
                if (validateRating(rating)) break;
                console.log('Invalid rating. Must be between 0 and 10. Please enter again.');
            }
            createNewMovie(title, genre, year, rating, (err, newMovie) => {
                if (err) console.log('Error creating movie: ' + err.message);
                else console.log('Success: Movie "' + newMovie.title + '" created with ID: ' + newMovie.id + '.');
                callback();
            });
            break;
        }
        case '4': {
            const id = rl.question('Enter movie ID to delete: ');
            deleteMovie(id)
                .then(deleted => {
                    if (!deleted) console.log('Error: Movie not found.');
                    else console.log('Success: Movie "' + deleted.title + '" was deleted.');
                })
                .catch(err => console.log('Error: ' + err.message))
                .finally(() => callback());
            break;
        }
        case '5': {
            const id = rl.question('Enter movie ID to update: ');
            const rating = rl.question('Enter new rating (0-10): ');
            if (!validateRating(rating)) {
                console.log('Invalid rating.');
                callback();
                break;
            }
            updateRate(id, rating)
                .then(updated => {
                    if (!updated) console.log('Error: Movie not found.');
                    else console.log('Success: Rating for "' + updated.title + '" updated to ' + updated.rating + '.');
                })
                .catch(err => console.log('Error: ' + err.message))
                .finally(() => callback());
            break;
        }
        case '6': {
            const query = rl.question('Enter search query: ');
            searchByName(query)
                .then(results => {
                    if (results.length === 0) console.log('No movies matched the search query.');
                    else {
                        console.log('\\nSearch results:');
                        results.forEach(m => console.log('- [ID: ' + m.id + '] ' + m.title + ' (' + m.year + ') - Rating: ' + m.rating));
                    }
                })
                .catch(err => console.log('Error: ' + err.message))
                .finally(() => callback());
            break;
        }
        case '7': {
            (async () => {
                try {
                    const genre = rl.question('Enter genre to show: ');
                    const results = await sortByGenre(genre);
                    if (results.length === 0) console.log('No movies found under this genre.');
                    else {
                        console.log('\\nMovies in genre "' + genre + '":');
                        results.forEach(m => console.log('- ' + m.title + ' (' + m.year + ')'));
                    }
                } catch (e) {
                    console.log('Error: ' + e.message);
                } finally {
                    callback();
                }
            })();
            break;
        }
        case '8': {
            (async () => {
                try {
                    const stats = await showStatistics();
                    console.log('\\nStatistics Report:\\n- Total Movies: ' + stats.count + '\\n- Average Rating: ' + stats.averageRating);
                    if (stats.bestMovie) console.log('- Best Movie: "' + stats.bestMovie.title + '" (Rating: ' + stats.bestMovie.rating + ')');
                    else console.log('- Best Movie: None');
                } catch (e) {
                    console.log('Error: ' + e.message);
                } finally {
                    callback();
                }
            })();
            break;
        }
        case '9': {
            (async () => {
                try {
                    console.log('\\nSort options:\\n1. Sort by name\\n2. Sort by year\\n3. Sort by rating');
                    const choice = rl.question('Choose sort option (1-3): ');
                    let sortBy = choice === '1' ? 'name' : (choice === '2' ? 'year' : (choice === '3' ? 'rating' : ''));
                    if (!sortBy) console.log('Invalid option.');
                    else {
                        const sorted = await sortMovies(sortBy);
                        console.log('\\nSorted movies list:');
                        sorted.forEach(m => console.log('- ' + m.title + ' (' + m.year + ') - Rating: ' + m.rating));
                    }
                } catch (e) {
                    console.log('Error: ' + e.message);
                } finally {
                    callback();
                }
            })();
            break;
        }
        case '10': {
            (async () => {
                try {
                    const top3 = await top3Movies();
                    console.log('\\nTop 3 Movies:');
                    top3.forEach((m, index) => console.log((index + 1) + '. ' + m.title + ' - Rating: ' + m.rating));
                } catch (e) {
                    console.log('Error: ' + e.message);
                } finally {
                    callback();
                }
            })();
            break;
        }
        case '11': {
            (async () => {
                try {
                    const restored = await undoDelete();
                    if (!restored) console.log('Error: No recently deleted movie to restore.');
                    else console.log('Success: Restored movie "' + restored.title + '" (ID: ' + restored.id + ').');
                } catch (e) {
                    console.log('Error: ' + e.message);
                } finally {
                    callback();
                }
            })();
            break;
        }
        case '12': {
            (async () => {
                try {
                    const report = await exportReport();
                    console.log('\\nReport exported to report.json successfully:');
                    console.log(JSON.stringify(report, null, 2));
                } catch (e) {
                    console.log('Error: ' + e.message);
                } finally {
                    callback();
                }
            })();
            break;
        }
        case '13': {
            (async () => {
                try {
                    const start = rl.question('Enter start year: ');
                    const end = rl.question('Enter end year: ');
                    const results = await searchByYearRange(start, end);
                    if (results.length === 0) console.log('No movies found in this year range.');
                    else {
                        console.log('\\nMovies from ' + start + ' to ' + end + ':');
                        results.forEach(m => console.log('- ' + m.title + ' (' + m.year + ') - Rating: ' + m.rating));
                    }
                } catch (e) {
                    console.log('Error: ' + e.message);
                } finally {
                    callback();
                }
            })();
            break;
        }
        case '14': {
            console.log('Goodbye!');
            process.exit(0);
        }
        default: {
            console.log('Invalid option. Please choose 1-14.');
            callback();
        }
    }
}

function main() {
    printMenu();
    const choice = rl.question('Choose an option: ').trim();
    handleOption(choice, () => {
        main();
    });
}
main();
`
    },
    stories: {
      'package.json': [
        "שם פרויקט ה-Node.js של מנהל הסרטים.",
        "גרסת האפליקציה הנוכחית.",
        "שימוש בשיטת ה-ES Modules (import/export) במקום CommonJS.",
        "רשימת התלויות הנדרשות - readline-sync לקבלת קלטים בטרמינל.",
        "סגירת אובייקט התלויות.",
        "סגירת קובץ ההגדרות."
      ],
      'data/movies.json': [
        "מזהה ייחודי של הסרט הראשון.",
        "שם הסרט.",
        "ז'אנר הסרט.",
        "שנת יציאה לקולנוע.",
        "דירוג הסרט (0-10).",
        "סגירת הסרט הראשון.",
        "סרט שני באוסף.",
        "שם הסרט.",
        "ז'אנר הסרט.",
        "שנת היציאה.",
        "דירוג הסרט.",
        "סרט שלישי באוסף.",
        "שם הסרט.",
        "ז'אנר הסרט.",
        "שנת יציאה.",
        "דירוג הסרט."
      ],
      'utils/validator.js': [
        "ייצוא פונקציה לוולידציית שם הסרט.",
        "החזרת אמת אם הקלט הוא מחרוזת שאינה ריקה בלבד.",
        "סגירת הפונקציה.",
        "ייצוא פונקציה לוולידציית שנת יציאת הסרט.",
        "המרה של הקלט למספר.",
        "בדיקה שהקלט הוא מספר חוקי מעל 1900 ועד 2026.",
        "סגירת הפונקציה.",
        "ייצוא פונקציה לוולידציית דירוג הסרט.",
        "המרה של הדירוג למספר.",
        "בדיקה שהדירוג הוא מספר חוקי בטווח שבין 0 ל-10 כולל.",
        "סגירת הפונקציה."
      ],
      'services/file.service.js': [
        "ייבוא מודול fs לטיפול אסינכרוני בקבצים.",
        "הגדרת נתיב הקובץ המשותף של מאגר הסרטים ללא מודול path.",
        "חלק א' - מימוש פונקציות באמצעות Callbacks.",
        "ייצוא פונקציית קריאת הסרטים בעזרת Callback.",
        "קריאת הקובץ מהדיסק באופן אסינכרוני ללא חסימת התוכנית.",
        "טיפול בשגיאות קריאה.",
        "אם הקובץ לא נמצא, נחזיר מערך ריק במקום לקרוס.",
        "החזרת שגיאה ל-Callback במקרה של כשל חריג.",
        "ניסיון לפענח את הנתונים.",
        "העברת הנתונים המפוענחים ל-Callback.",
        "תפיסת שגיאות.",
        "העברת שגיאת הפענוח.",
        "סגירת קריאת הקובץ.",
        "סגירת פונקציית הקריאה.",
        "ייצוא פונקציית כתיבת הסרטים בעזרת Callback.",
        "כתיבה אסינכרונית של מערך הסרטים כ-JSON לדיסק.",
        "סגירת פונקציית כתיבת הסרטים.",
        "חלק ב' - מימוש פונקציות באמצעות Promises.",
        "ייצוא פונקציית קריאת הסרטים המחזירה Promise.",
        "החזרת אובייקט Promise חדש העוטף את הפעולה האסינכרונית.",
        "הרצת פעולת קריאת הקובץ בדיסק.",
        "טיפול בשגיאה בתוך ה-Promise.",
        "פתרון (Resolve) של ה-Promise עם מערך ריק במקרה של קובץ חסר.",
        "דחייה (Reject) של ה-Promise עם השגיאה במקרה של כשל מערכת.",
        "ניסיון פענוח הנתונים.",
        "פתרון ה-Promise עם המערך המפוענח.",
        "תפיסת שגיאות פענוח.",
        "דחיית ה-Promise עם שגיאת הפענוח.",
        "סגירת קריאת הקובץ.",
        "סגירת ה-Promise.",
        "סגירת הפונקציה.",
        "ייצוא פונקציית כתיבת הסרטים המחזירה Promise.",
        "החזרת Promise חדש העוטף את הכתיבה.",
        "כתיבה אסינכרונית של ה-JSON המעודכן לדיסק.",
        "אם התרחשה שגיאה, נדחה את ה-Promise.",
        "פתרון ה-Promise בהצלחה ללא ערך מוחזר.",
        "סגירת הכתיבה.",
        "סגירת ה-Promise.",
        "סגירת הפונקציה.",
        "פונקציית ייצוא דוח הסטטיסטיקות המלא לקובץ JSON חיצוני.",
        "החזרת Promise חדש.",
        "כתיבה לקובץ report.json בתיקיית השורש של הפרויקט.",
        "דחיית ה-Promise במקרה של שגיאת כתיבה.",
        "פתרון ה-Promise בהצלחה.",
        "סגירת כתיבת הדוח.",
        "סגירת ה-Promise.",
        "סגירת הפונקציה."
      ],
      'services/movie.service.js': [
        "ייבוא כלל פונקציות ה-Callbacks וה-Promises מתוך file.service.js.",
        "סגירת אובייקטי ייבוא.",
        "משתנה גלובלי לשמירת הסרט האחרון שנמחק לצורך ביטול מחיקה (Undo).",
        "חלק א' - פונקציות המבוססות על Callbacks.",
        "פונקציה להצגת כל הסרטים המקבלת Callback.",
        "קריאת הקובץ באמצעות ה-Callback של קובץ השירות.",
        "במקרה של שגיאה, נעביר אותה ל-Callback הראשי.",
        "החזרת רשימת הסרטים בהצלחה ללא שגיאה.",
        "סגירת קריאת הקובץ.",
        "סגירת הפונקציה.",
        "פונקציה להצגת סרט לפי ID המקבלת Callback.",
        "קריאת הקובץ בעזרת Callback.",
        "במקרה של שגיאה, נעביר אותה ל-Callback הראשי.",
        "חישוב ומציאת הסרט המבוקש בעזרת find.",
        "העברת הסרט שנמצא ל-Callback.",
        "סגירת קריאת הקובץ.",
        "סגירת הפונקציה.",
        "פונקציה ליצירת סרט חדש באוסף (Callback Hell!).",
        "קריאת הקובץ באמצעות Callback של קריאה.",
        "במקרה של שגיאה, נעביר אותה ל-Callback הראשי.",
        "מציאת ה-ID המקסימלי באמצעות לולאה פשוטה במקום spread operator.",
        "בניית אובייקט הסרט החדש.",
        "מזהה ייחודי שחושב.",
        "שם הסרט.",
        "ז'אנר הסרט.",
        "שנת יציאה כספרות.",
        "דירוג הסרט.",
        "סגירת האובייקט.",
        "הוספת הסרט החדש למערך.",
        "כתיבה מחדש לקובץ בעזרת קולבק מקונן (Callback Hell).",
        "במקרה של שגיאה בכתיבה, נעביר אותה ל-Callback.",
        "החזרת הסרט החדש ל-Callback של ההצלחה.",
        "סגירת קולבק הכתיבה.",
        "סגירת קולבק הקריאה.",
        "סגירת הפונקציה.",
        "חלק ב' - פונקציות המבוססות על Promises (שרשראות then).",
        "פונקציה למחיקת סרט המחזירה Promise.",
        "קריאה מהקובץ והתחלת שרשרת ה-Promises.",
        "עיבוד הנתונים לאחר קבלתם ב-then.",
        "מציאת הסרט המבוקש לפי ID בעזרת find.",
        "החזרת null אם הסרט לא קיים.",
        "שמירת הסרט במשתנה הגלובלי לטובת Undo.",
        "סינון הסרט שנמחק מהמערך באמצעות filter.",
        "כתיבת המערך המעודכן לדיסק והחזרת אובייקט הסרט שנמחק.",
        "סגירת פונקציית ה-then.",
        "סגירת הפונקציה.",
        "פונקציה לעדכון דירוג סרט המחזירה Promise.",
        "קריאה מהקובץ והתחלת שרשרת then.",
        "מציאת הסרט המבוקש לפי ID.",
        "החזרת null אם הסרט לא קיים.",
        "עדכון הדירוג של הסרט.",
        "שמירת המערך המעודכן לדיסק והחזרת הסרט המעודכן.",
        "סגירת ה-then.",
        "סגירת הפונקציה.",
        "פונקציה לחיפוש סרט לפי שם המחזירה Promise.",
        "קריאה מהקובץ.",
        "חיפוש תת-מחרוזת בשם הסרט בעזרת filter.",
        "סגירת ה-then.",
        "סגירת הפונקציה.",
        "חלק ג' — פונקציות המבוססות על async/await.",
        "סינון לפי ז'אנר אסינכרוני בעזרת async/await.",
        "קריאת הקובץ באופן אסינכרוני (await).",
        "החזרת הסרטים התואמים לז'אנר בעזרת filter.",
        "סגירת הפונקציה.",
        "חישוב דוח סטטיסטיקות אסינכרוני בעזרת async/await.",
        "קריאת הקובץ מהדיסק.",
        "החזרת דוח ריק אם אין סרטים.",
        "חישוב כמות הסרטים.",
        "חישוב סכום הדירוגים בעזרת לולאה פשוטה.",
        "מציאת הסרט המצטיין בעזרת לולאה פשוטה.",
        "החזרת אובייקט הסטטיסטיקות המבוקש.",
        "סגירת הפונקציה.",
        "בונוסים (async/await)",
        "בונוס 1: מיון סרטים לפי קריטריון.",
        "קריאת הקובץ.",
        "העתקת המערך ללא שימוש ב-spread operator.",
        "מיון לפי שם הסרט באמצעות sort.",
        "מיון לפי שנת היציאה.",
        "מיון לפי הדירוג בסדר יורד.",
        "החזרת המערך הממוין.",
        "סגירת הפונקציה.",
        "בונוס 2: 3 הסרטים המובילים.",
        "קריאת הקובץ.",
        "העתקת המערך, מיון הסרטים לפי דירוג ולקיחת 3 הראשונים באמצעות slice.",
        "סגירת הפונקציה.",
        "בונוס 3: שחזור מחיקה (Undo).",
        "החזרת null אם אין מה לשחזר.",
        "קריאת הקובץ.",
        "מציאת ID מקסימלי באמצעות לולאה פשוטה.",
        "מניעת כפילויות ID על ידי הגרלת מזהה חדש אם ה-ID הנוכחי תפוס.",
        "דחיפת הסרט השחזור למערך.",
        "שמירת אובייקט הסרט ששוחזר.",
        "איפוס המשתנה הגלובלי.",
        "כתיבה מחדש לדיסק.",
        "החזרת הסרט ששוחזר.",
        "סגירת הפונקציה.",
        "בונוס 4: ייצוא דוח מלא.",
        "קבלת הסטטיסטיקות של האוסף.",
        "קריאת מערך הסרטים.",
        "מציאת ז'אנרים ללא שימוש ב-Set או reduce מורכב.",
        "בניית אובייקט הדוח.",
        "שמירה לקובץ report.json בדיסק.",
        "החזרת אובייקט הדוח.",
        "סגירת הפונקציה.",
        "בונוס 5: טווח שנים.",
        "קריאת מערך הסרטים.",
        "סינון הסרטים בטווח השנים בעזרת filter.",
        "סגירת הפונקציה."
      ],
      'app.js': [
        "ייבוא חבילת readline-sync לקבלת קלטים מהמשתמש.",
        "ייבוא כלל פונקציות הלוגיקה העסקית מתוך movie.service.js.",
        "ייבוא פונקציות הוולידציה מתוך validator.js.",
        "פונקציה להדפסת תפריט האפשרויות הראשי.",
        "הדפסת כותרת התפריט.",
        "הדפסת כל 14 האפשרויות הזמינות למשתמש.",
        "סגירת פונקציית ההדפסה.",
        "פונקציית handleOption המנהלת את הניתוב בצורה אסינכרונית מגוונת.",
        "שימוש ב-switch-case לניתוב לפי הבחירה.",
        "חלק א' - שימוש ב-Callbacks (סעיפים 1, 2, 3).",
        "אפשרות 1: הצגת כלל הסרטים (Callback).",
        "קריאה לפונקציית ה-Callback של מציגת הסרטים.",
        "הדפסת הודעת שגיאה במקרה של כשל.",
        "הודעה מתאימה אם אין סרטים.",
        "הדפסת כותרת רשימת הסרטים.",
        "לולאת for...of להדפסת הסרטים כפי שנדרש.",
        "הדפסת אינדקס ושם הסרט.",
        "קידום האינדקס.",
        "סגירת לולאת ההדפסה.",
        "קריאה לפונקציית ההמשך (callback).",
        "סגירת הטיפול באפשרות 1.",
        "אפשרות 2: הצגת סרט לפי מזהה ID (Callback).",
        "שאילת מזהה ID מהמשתמש.",
        "קריאה לפונקציה מבוססת Callback.",
        "הדפסת הודעת שגיאה במקרה של כשל.",
        "הדפסת שגיאה אם הסרט לא קיים.",
        "הדפסת כלל פרטי הסרט שנמצא.",
        "קריאה לפונקציית ההמשך.",
        "סגירת הטיפול באפשרות 2.",
        "אפשרות 3: יצירת סרט חדש באוסף (Callback Chain).",
        "לולאת לקבלת שם סרט תקין.",
        "שאילת שם הסרט.",
        "בדיקת תקינות השם בעזרת הולידטור.",
        "הודעה למשתמש להזין מחדש בעת כשל.",
        "שאילת ז'אנר הסרט.",
        "לולאה לקבלת שנת יציאה תקינה.",
        "שאילת שנת היציאה.",
        "בדיקת תקינות השנה בעזרת הולידטור.",
        "הודעה למשתמש להזין מחדש בעת כשל.",
        "לולאה לקבלת דירוג תקין.",
        "שאילת דירוג הסרט.",
        "בדיקת תקינות הדירוג בעזרת הולידטור.",
        "הודעה למשתמש להזין מחדש בעת כשל.",
        "קריאה לפונקציה המבצעת את השמירה בעזרת Callback מקונן.",
        "הדפסת שגיאה במקרה של כשל.",
        "הדפסת הודעת הצלחה עם פרטי הסרט החדש.",
        "קריאה לפונקציית ההמשך.",
        "סגירת הטיפול באפשרות 3.",
        "חלק ב' - שימוש ב-Promises ושרשראות then (סעיפים 4, 5, 6).",
        "אפשרות 4: מחיקת סרט לפי מזהה (Promise).",
        "שאילת מזהה ID למחיקה.",
        "קריאה לפונקציה המחזירה Promise והפעלת then.",
        "הדפסת הודעת שגיאה אם הסרט לא נמצא.",
        "הדפסת הודעת הצלחה עם פרטי הסרט שנמחק.",
        "תפיסת שגיאות קריטיות ב-catch.",
        "ביצוע ה-callback בכל מקרה באמצעות finally.",
        "סגירת הטיפול באפשרות 4.",
        "אפשרות 5: עדכון דירוג סרט (Promise).",
        "שאילת מזהה ID לעדכון.",
        "שאילת הדירוג החדש.",
        "בדיקת תקינות הדירוג החדש בעזרת הולידטור.",
        "הדפסת הודעת שגיאה אם הדירוג אינו תקין.",
        "קריאה ל-callback והפסקה.",
        "קריאה לפונקציה המחזירה Promise והפעלת then.",
        "הדפסת הודעת שגיאה אם הסרט לא נמצא.",
        "הדפסת הודעת הצלחה עם פרטי הסרט המעודכן.",
        "תפיסת שגיאות ב-catch.",
        "ביצוע ה-callback ב-finally.",
        "סגירת הטיפול באפשרות 5.",
        "אפשרות 6: חיפוש סרט לפי שם (Promise).",
        "שאילת שאילתת החיפוש מהמשתמש.",
        "קריאה לפונקציה המחזירה Promise והפעלת then.",
        "הדפסת שגיאה אם לא נמצאו סרטים תואמים.",
        "הדפסת כותרת תוצאות החיפוש.",
        "מעבר על כל תוצאה והדפסתה בצורה מפורטת.",
        "תפיסת שגיאות ב-catch.",
        "ביצוע ה-callback ב-finally.",
        "סגירת הטיפול באפשרות 6.",
        "חלק ג' - שימוש ב-async/await (סעיפים 7, 8 והבונוסים).",
        "אפשרות 7: סינון לפי ז'אנר (async/await).",
        "שימוש בפונקציה מיידית אסינכרונית (IIFE) לקריאת await.",
        "תפיסת שגיאות בריצה.",
        "שאילת שם הז'אנר מהמשתמש.",
        "קריאה לפונקצייתsortByGenre בעזרת await.",
        "אם לא נמצאו סרטים בז'אנר זה, נציג הודעה מתאימה.",
        "הדפסת כותרת רשימת הסרטים בז'אנר.",
        "מעבר על התוצאות והדפסת שמותיהם ושנותיהם.",
        "תפיסת שגיאות ב-catch.",
        "ביצוע ה-callback ב-finally.",
        "סגירת הפונקציה האסינכרונית.",
        "סגירת הטיפול באפשרות 7.",
        "אפשרות 8: הצגת סטטיסטיקות (async/await).",
        "פונקציה מיידית אסינכרונית.",
        "תפיסת שגיאות בריצה.",
        "קריאה לפונקציית showStatistics בעזרת await.",
        "הדפסת כמות הסרטים והממוצע של האוסף.",
        "הדפסת פרטי הסרט הטוב ביותר אם קיים.",
        "הדפסת הודעה מתאימה אם אין סרטים.",
        "תפיסת שגיאות ב-catch.",
        "ביצוע ה-callback ב-finally.",
        "סגירת הפונקציה האסינכרונית.",
        "סגירת הטיפול באפשרות 8.",
        "אפשרות 9 (בונוס 1): מיון סרטים (async/await).",
        "פונקציה מיידית אסינכרונית.",
        "תפיסת שגיאות.",
        "הדפסת אפשרויות המיון.",
        "שאילת בחירת המיון מהמשתמש.",
        "קביעת פרמטר המיון לפי הבחירה.",
        "הדפסת שגיאה במקרה של בחירה לא תקינה.",
        "קריאה לפונקציית sortMovies בעזרת await.",
        "הדפסת רשימת הסרטים הממויינת.",
        "תפיסת שגיאות ב-catch.",
        "ביצוע ה-callback ב-finally.",
        "סגירת הפונקציה.",
        "סגירת הטיפול באפשרות 9.",
        "אפשרות 10 (בונוס 2): הצגת 3 הסרטים הטובים ביותר (async/await).",
        "פונקציה מיידית אסינכרונית.",
        "תפיסת שגיאות.",
        "קריאה לפונקציית top3Movies בעזרת await.",
        "הדפסת כותרת שלושת הטובים ביותר.",
        "הדפסת הסרטים בסדר ממוספר.",
        "תפיסת שגיאות ב-catch.",
        "ביצוע ה-callback ב-finally.",
        "סגירת הפונקציה.",
        "סגירת הטיפול באפשרות 10.",
        "אפשרות 11 (בונוס 3): ביטול מחיקה (async/await).",
        "פונקציה מיידית אסינכרונית.",
        "תפיסת שגיאות.",
        "קריאה לפונקציית undoDelete בעזרת await.",
        "הדפסת שגיאה אם לא בוצעה מחיקה קודמת או שאין מה לשחזר.",
        "הדפסת הודעת הצלחה ושם הסרט ששוחזר לקובץ.",
        "תפיסת שגיאות ב-catch.",
        "ביצוע ה-callback ב-finally.",
        "סגירת הפונקציה.",
        "סגירת הטיפול באפשרות 11.",
        "אפשרות 12 (בונוס 4): ייצוא דוח סטטיסטי (async/await).",
        "פונקציה מיידית אסינכרונית.",
        "תפיסת שגיאות.",
        "קריאה לפונקציית exportReport בעזרת await.",
        "הדפסת הודעת הצלחה לייצוא.",
        "הדפסת תוכן אובייקט ה-JSON שנוצר.",
        "תפיסת שגיאות ב-catch.",
        "ביצוע ה-callback ב-finally.",
        "סגירת הפונקציה.",
        "סגירת הטיפול באפשרות 12.",
        "אפשרות 13 (בונוס 5): חיפוש סרטים לפי טווח שנים (async/await).",
        "פונקציה מיידית אסינכרונית.",
        "תפיסת שגיאות.",
        "שאילת שנת התחלה.",
        "שאילת שנת סוף.",
        "קריאה לפונקציית searchByYearRange בעזרת await.",
        "הדפסת שגיאה אם אין סרטים בטווח.",
        "הדפסת כותרת רשימת טווח השנים.",
        "הדפסת תוצאות החיפוש בצורה מפורטת.",
        "תפיסת שגיאות ב-catch.",
        "ביצוע ה-callback ב-finally.",
        "סגירת הפונקציה.",
        "סגירת הטיפול באפשרות 13.",
        "אפשרות 14: יציאה מהתוכנית.",
        "הדפסת הודעת פרידה.",
        "סיום תהליך ה-Node.js.",
        "סגירת אפשרות 14.",
        "טיפול בבחירה לא תקינה בתפריט הראשי.",
        "קריאה ל-callback.",
        "סגירת ה-switch-case.",
        "סגירת פונקציית handleOption.",
        "פונקציית הריצה הראשית של האפליקציה.",
        "הדפסת התפריט הראשי.",
        "קבלת בחירת המשתמש מהמקלדת.",
        "קריאה לפונקציית handleOption המריצה את התוכנית, ובסיומה קוראת מחדש ל-main (רקורסיה של Callbacks).",
        "סגירת פונקציית main.",
        "הרצת פונקציית הריצה הראשית."
      ]
    }
  }
};
