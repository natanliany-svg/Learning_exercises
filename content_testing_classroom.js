const contentTestingClassroom = {
  testingBasic: {
    title: "בדיקות בסיסיות - שומר הסף של הקוד",
    visualizerSteps: [
      {
        action: "install",
        text: "התקנת מערכת הבדיקות היא כמו גיוס מפקח איכות למפעל שלנו. ב-VSCode, לחצו בתפריט העליון על Terminal ואז על New Terminal. הקלידו את הפקודה <code>npm install --save-dev jest</code> ולחצו Enter."
      },
      {
        action: "createFile",
        text: "יצירת קובץ הבדיקה דומה לכתיבת רשימת התנאים של מפקח האיכות. בחלונית ה-Explorer בצד שמאל ב-VSCode, לחצו על כפתור 'New File' וקראו לקובץ בשם <code>math.test.js</code>."
      },
      {
        action: "run",
        text: "הפעלת הבדיקות היא הרגע בו המפקח עובר על פס הייצור. בטרמינל, הקלידו <code>npx jest</code> ולחצו Enter. טקסט ירוק משמעותו שהצעצועים מוכנים!"
      }
    ],
    content: "<div><p class='lead'>תארו לעצמכם שאתם בונים ארמון מפואר מלגו. עבדתם עליו שעות, ולפני שאתם מזמינים את כל החברים לראות אותו, אתם בודקים בעצמכם שאף חלק לא נופל ושכל מגדל יציב. זה בדיוק מה שבדיקות קוד עושות בעולם התוכנה!</p><p>במקום לסמוך על המזל, אנו משתמשים בכלים אוטומטיים – ממש כמו רובוטים קטנים – שמוודאים שהקוד שלנו עושה בדיוק את מה שהוא אמור לעשות בכל מצב אפשרי. כך אנחנו מבטיחים שהמוצר שניצור יהיה איכותי ויציב.</p></div>"
  },
  serverTesting: {
    title: "בדיקות שרת - לבדוק את המסעדה",
    visualizerSteps: [
      {
        action: "install",
        text: "בדיקת שרת דומה לשליחת לקוח סמוי למסעדה. בטרמינל של VSCode, הקלידו <code>npm install --save-dev supertest</code> ולחצו Enter."
      },
      {
        action: "createFile",
        text: "הגדרת הלקוח הסמוי: פתחו קובץ חדש בשם <code>server.test.js</code>. הלקוח שלנו 'יזמין' כתובת מסוימת מהשרת שלנו ויבדוק אם הוא קיבל סטטוס 200."
      },
      {
        action: "run",
        text: "ביצוע ההזמנה בפועל: הריצו בטרמינל את הפקודה <code>npx jest</code>. טקסט ירוק בטרמינל שווה למסעדה מתפקדת ומצליחה!"
      }
    ],
    content: "<div><p class='lead'>השרת הוא למעשה הלב הפועם של האפליקציה, ממש כמו המטבח האחורי של מסעדת יוקרה. אם המטבח קורס או שהטבח מתבלבל בהזמנות, הלקוחות יתאכזבו.</p><p>לכן, אנחנו שולחים 'לקוחות סמויים' ממוחשבים כדי לוודא שהמטבח ערוך ויודע להתמודד עם כל סוג של הזמנה, אפילו תחת עומס רב.</p></div>"
  },
  testingProject: {
    title: "פרויקט בדיקות מסכם - המבחן הסופי",
    visualizerSteps: [
      {
        action: "runCmd",
        text: "נבדוק את כל המפעל והמסעדה יחד. פתחו את הטרמינל והקלידו <code>npm init -y</code> כדי ליצור 'תעודת זהות' בסיסית וחדשה לפרויקט שלכם."
      },
      {
        action: "createFolder",
        text: "הכנת חדר הבקרה: לחצו על כפתור 'New Folder' וקראו לה בשם <code>tests</code>. לתיקייה הזו נכניס את כל קובצי ה-test."
      },
      {
        action: "config",
        text: "הוספה ב-package.json תחת 'scripts' את השורה: <code>\"test\": \"jest\"</code>. בטרמינל, הקלידו <code>npm run test</code>. המערכת תסרוק הכל בבת אחת!"
      }
    ],
    content: "<div><p class='lead'>פרויקט בדיקות מלא מבטיח שהאפליקציה שלנו חזקה ויציבה לטווח הארוך. כשנכתוב קוד חדש מחר, או בעוד שנה, הבדיקות שכתבנו היום ירוצו שוב באופן אוטומטי.</p><p>זהו רשת הביטחון המקצועית שלנו. מהנדסי תוכנה מצוינים לא רק כותבים קוד שעובד עכשיו, אלא כותבים קוד שקל לבדוק אותו, ושמגן על עצמו מפני טעויות עתידיות.</p></div>"
  }
};

if (typeof window !== 'undefined') {
  window.contentTestingClassroom = contentTestingClassroom;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = contentTestingClassroom;
}
