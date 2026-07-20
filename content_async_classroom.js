const contentAsyncClassroom = {
  singleThread: {
    title: "חד-חוטי (Single Thread) - שף אחד במטבח",
    visualizerSteps: [
      { action: "createFile", text: "פתח את VSCode ולחץ על 'קובץ חדש' (New File). תחשוב על זה כמו פתיחת מסעדה חדשה." },
      { action: "saveFile", text: "שמור את הקובץ בשם 'app.js'. זה התפריט שלנו להיום." },
      { action: "runCmd", text: "הקלד 'console.log(1);' ולחץ על כפתור ה-Run (המשולש הירוק בצד ימין למעלה). השף מכין את המנה הראשונה ומגיש אותה מיד." }
    ],
    content: "<div><p class='lead'>יש לנו רק חוט ביצוע אחד. כל פקודה מתבצעת אחת אחרי השנייה. אי אפשר להכין שתי מנות בדיוק באותה שנייה.</p></div>"
  },
  blocking: {
    title: "חסימה (Blocking) - לקוח שלא יודע מה להזמין",
    visualizerSteps: [
      { action: "openTerminal", text: "ב-VSCode, פתח את הטרמינל למטה (Terminal -> New Terminal). זו עמדת ההזמנות בקופה." },
      { action: "writeCode", text: "כתוב לולאת for ארוכה מאוד שלוקחת המון זמן. זה כמו לקוח שלוקח לו שעות להחליט מה להזמין וחוסם את התור." },
      { action: "runCmd", text: "הרץ את הקוד עם הפקודה 'node app.js' בטרמינל. שים לב ששום דבר אחר לא קורה - השף תקוע ומחכה עד שהלולאה תסתיים." }
    ],
    content: "<div><p class='lead'>אם פעולה מסוימת לוקחת הרבה זמן בחוט הראשי, כל שאר הפעולות בהמתנה. אף אחד אחר לא מקבל שירות.</p></div>"
  },
  eventLoop: {
    title: "לולאת האירועים (Event Loop) - המלצר החכם",
    visualizerSteps: [
      { action: "createFile", text: "צור קובץ בשם 'loop.js'. כאן אנחנו שוכרים מלצר חדש למסעדה." },
      { action: "writeCode", text: "כתוב פקודת setTimeout לשתי שניות. זה כמו להגיד למלצר: 'תחזור לשולחן הזה עוד שעתיים, בינתיים תעשה דברים אחרים'." },
      { action: "runCmd", text: "הרץ עם הפקודה 'node loop.js'. ראה איך קוד אחר ממשיך לרוץ בינתיים. המלצר לא עומד ומחכה סתם כך לשולחן יחיד." }
    ],
    content: "<div><p class='lead'>לולאת האירועים היא כמו מלצר שבודק כל הזמן - 'האם יש משהו שמוכן עכשיו?'. היא מאפשרת למערכת להמשיך לעבוד במקום לחכות לדברים איטיים.</p></div>"
  },
  callbacks: {
    title: "פונקציות קריאה חוזרת (Callbacks) - תתקשר אליי כשהמנה מוכנה",
    visualizerSteps: [
      { action: "createFolder", text: "לחץ על סמל התיקיות (Explorer) בצד שמאל של VSCode וצור תיקייה חדשה. נקרא לה 'callbacks'." },
      { action: "createFile", text: "בתוך התיקייה, צור קובץ 'index.js'. תחשוב על הקובץ הזה כפנקס טלפונים של המסעדה." },
      { action: "writeCode", text: "כתוב פונקציה שמקבלת פונקציה אחרת כמשתנה. זה כמו להשאיר למארחת את מספר הטלפון שלך, כדי שתקרא לך כשהשולחן יתפנה." }
    ],
    content: "<div><p class='lead'>במקום לחכות לפעולה שתסתיים ותתקע אותנו, אנחנו מעבירים פונקציה שתופעל רק כאשר המשימה הושלמה.</p></div>"
  },
  fetch: {
    title: "משיכת נתונים (Fetch) - הזמנת מצרכים מספק חיצוני",
    visualizerSteps: [
      { action: "openConsole", text: "פתח את הדפדפן וכנס לכלים למפתחים על ידי לחיצה על F12. בחר בלשונית ה-Console. זה טלפון ישיר לספק המצרכים שלנו." },
      { action: "writeCode", text: "הקלד 'fetch(\"https://api.example.com/data\")'. זה בדיוק כמו להרים טלפון ולהזמין ארגז עגבניות לחנות." },
      { action: "runCmd", text: "לחץ Enter במקלדת. שים לב שמיד מתקבלת תשובה שנקראת 'Promise', למרות שהעגבניות עצמן עדיין לא הגיעו אלינו." }
    ],
    content: "<div><p class='lead'>אנו שולחים בקשה לשרת כדי לקבל נתונים. זו פעולה שלוקחת זמן (המתנה לאינטרנט), אז היא קורית ברקע מבלי לעצור אותנו.</p></div>"
  },
  promises: {
    title: "הבטחות (Promises) - זימונית של מסעדה (ביפר)",
    visualizerSteps: [
      { action: "writeCode", text: "פתח קובץ חדש וכתוב 'new Promise()'. זה בדיוק כמו לתת ללקוח ביפר (זימונית) רוטט ברגע שהוא מזמין." },
      { action: "highlightCode", text: "השתמש בפקודה '.then()'. כאן אתה בעצם מגדיר מה לעשות כשהזימונית תצפצף (למשל, לגשת לקחת את המנה כשהיא מוכנה)." },
      { action: "highlightError", text: "השתמש בפקודה '.catch()'. כאן אתה מגדיר מה עושים אם למסעדה נגמר האוכל וההזמנה מתבטלת בטעות (טיפול בשגיאות)." }
    ],
    content: "<div><p class='lead'>זימונית שמבטיחה לנו שנקבל תשובה בסופו של דבר: או שהמשימה הצליחה, או שהיא נכשלה. אנחנו ממשיכים בשלנו בינתיים.</p></div>"
  },
  asyncAwait: {
    title: "אסינכרוני / המתנה (Async / Await) - כתיבה נקייה ויפה",
    visualizerSteps: [
      { action: "writeCode", text: "הוסף את המילה 'async' לפני הגדרת הפונקציה שלך ב-VSCode. זה נותן לפונקציה את ה'כוחות' להתמודד עם המתנה אסינכרונית." },
      { action: "highlightCode", text: "בתוך הפונקציה, השתמש במילה 'await' לפני פעולה שלוקחת זמן. זה אומר למלצר להשהות את הטיפול בשולחן הספציפי הזה, מבלי לחסום שאר הלקוחות." },
      { action: "runCmd", text: "שמור את הקובץ (Ctrl+S) והרץ בטרמינל. הקוד נראה רגיל, נקי וקורא מלמעלה למטה, אבל מאחורי הקלעים הוא לא עוצר את המערכת!" }
    ],
    content: "<div><p class='lead'>דרך מודרנית וקריאה יותר לכתוב קוד שעובד עם הבטחות (Promises), בלי להסתבך עם המון שורות של שרשורי קוד.</p></div>"
  },
  asyncProject: {
    title: "פרויקט אסינכרוני (Async Project) - ניהול המסעדה כולה",
    visualizerSteps: [
      { action: "runCmd", text: "פתח את שורת הפקודה וצור תיקייה חדשה עם הפקודה 'mkdir restaurant-app'. אנחנו מניחים את היסודות והקירות למסעדה." },
      { action: "runCmd", text: "כנס לתיקייה על ידי הפקודה 'cd restaurant-app'. הרגע נכנסנו פיזית לתוך המבנה של המסעדה שלנו." },
      { action: "createFile", text: "צור מספר קובצי ג'אווה-סקריפט שידברו ביניהם וייבאו פונקציות זה מזה. הכל יפעל יחד בהרמוניה ללא תקיעות." }
    ],
    content: "<div><p class='lead'>כאן נשלב את כל המרכיבים שלמדנו יחד כדי לבנות מערכת אפליקציה שלמה המבצעת בקשות רשת ברקע.</p></div>"
  },
  studyPlannerProject: {
    title: "פרויקט מתכנן לימודים (Study Planner) - היומן החכם",
    visualizerSteps: [
      { action: "createFile", text: "צור קובץ בשם index.html והוסף לו כפתור עם הטקסט 'טען משימות'. זה הלקוח שמבקש את מערכת השעות שלו." },
      { action: "writeCode", text: "בקובץ script.js, נכתוב פונקציית async שמשתמשת ב-fetch כדי לקרוא לנתונים כאשר הכפתור נלחץ." },
      { action: "runCmd", text: "לחץ על כפתור 'Go Live' (מסומן למטה ב-VSCode במידה ויש לך את התוסף Live Server) ונסה את הכפתור בדפדפן!" }
    ],
    content: "<div><p class='lead'>פרויקט שמושך משימות משרת מרוחק, ממתין לתשובה בסבלנות ואז מציג את התוצאות היפות על המסך למשתמש.</p></div>"
  },
  movieManagerProject: {
    title: "פרויקט מנהל סרטים (Movie Manager) - קטלוג כרטיסי הקולנוע",
    visualizerSteps: [
      { action: "openBrowser", text: "הירשם והעתק מפתח API חינמי (API Key) לאתר של דירוגי סרטים. זה בעצם אישור הכניסה המיוחד שלנו לספריית הווידאו העולמית." },
      { action: "writeCode", text: "השתמש בפקודת fetch ביחד עם Promise.all כדי להביא מידע על מספר סרטים במקביל, במקום לחכות לאחד אחד." },
      { action: "runCmd", text: "פתח את הטרמינל באמצעות קיצור המקלדת (Ctrl + `) והרץ את השרת המקומי שלך. חפש סרט וראה איזה קסם זה!" }
    ],
    content: "<div><p class='lead'>בפרויקט זה ננהל מספר רב של בקשות אסינכרוניות שקורות כולן בו-זמנית לצורך חיפוש והצגת נתוני סרטים מהרשת.</p></div>"
  }
};

if (typeof window !== 'undefined') {
  window.contentAsyncClassroom = contentAsyncClassroom;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = contentAsyncClassroom;
}
