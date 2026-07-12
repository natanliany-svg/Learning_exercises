
תרגיל 1 – הוספת זמן בקשה (Global Middleware)
המשימה:
צור Middleware גלובלי שמוסיף לכל אובייקט בקשה (req) שדה המכיל את זמן הגעת הבקשה.
לוגיקה:
הוסף את המאפיין req.requestTime עם הערך של new Date().toISOString(). אל תשכח לקרוא ל-next().

תרגיל 2 – הצגת זמן הבקשה
המשימה:
צור ראוט המשתמש בנתון שנוצר בתרגיל 1.
לוגיקה:
GET /time – יחזיר למשתמש את המחרוזת: Request received at: [TIME].

תרגיל 3 – בדיקת גוף בקשה ריק
המשימה:
צור Middleware שבודק אם נשלחו נתונים ב-Body בבקשות מסוג POST.
לוגיקה:
אם req.body הוא אובייקט ריק, עצור את הבקשה והחזר סטטוס 400 עם ההודעה: Body cannot be empty.

תרגיל 4 – יישום בדיקת Body
המשימה:
צור נקודת קצה המשתמשת ב-Middleware מהתרגיל הקודם.
לוגיקה:
POST /data – אם נשלח Body, יחזיר: Data received.

תרגיל 5 – ולידציה של אורך סיסמה
המשימה:
צור ראוט להרשמה עם בדיקת תקינות בסיסית.
לוגיקה:
POST /register – אם ה-password ב-Body קצר מ-8 תווים, החזר סטטוס 400 והודעה: Password must be at least 8 chars.

תרגיל 6 – הגנת מנהל (Admin Middleware)
המשימה:
צור Middleware שבודק הרשאות דרך ה-URL.
לוגיקה:
אם ב-Query String לא מופיע admin=true, החזר סטטוס 403 והודעה: Forbidden: Admins only.

תרגיל 7 – גישה להגדרות (Route Specific)
המשימה:
השתמש ב-Middleware של המנהל (תרגיל 6) על ראוט ספציפי.
לוגיקה:
GET /settings – הגישה תתאפשר רק אם המשתמש הוא אדמין.

תרגיל 8 – זריקת שגיאה יזומה
המשימה:
צור ראוט שנועד לבדוק את מערכת הטיפול בשגיאות.
לוגיקה:
GET /error-test – השתמש ב-throw new Error("Something went wrong!").

תרגיל 9 – טיפול בשגיאות מרכזי (Error Handler)
המשימה:
צור Middleware לטיפול בשגיאות (עם 4 פרמטרים) שיוצב בסוף הקוד.
לוגיקה:
הפונקציה תתפוס כל שגיאה ותחזיר JSON: { "error": true, "message": "[ERROR_MESSAGE]" }.

תרגיל 10 – ולידציה של פרמטר חיפוש
המשימה:
ודא שמשתמשים לא מבצעים חיפוש ריק.
לוגיקה:
GET /search – אם פרמטר ה-Query בשם q חסר, החזר סטטוס 400: Search query "q" is required.

תרגיל 11 – חסימת IP
המשימה:
צור Middleware שחוסם גישה לכתובת IP ספציפית.
לוגיקה:
אם req.ip שווה ל-"123.123.123.123", החזר סטטוס 403: Your IP is blocked.

תרגיל 12 – ולידציה של התחברות
המשימה:
ודא שכל שדות החובה קיימים בטופס התחברות.
לוגיקה:
POST /login – אם email או password חסרים ב-Body, החזר סטטוס 400: Email and Password required.

תרגיל 13 – בדיקת פורמט JSON
המשימה:
צור Middleware שמוודא שסוג התוכן שנשלח הוא אכן JSON.
לוגיקה:
בדוק את ה-Header בשם content-type. אם הוא לא application/json, החזר סטטוס 415.

תרגיל 14 – אימות גיל בנתיב (Params)
המשימה:
בדוק שהפרמטר בנתיב הוא מספר תקין.
לוגיקה:
GET /user/:age – אם age אינו מספר או שהוא קטן מ-0, החזר סטטוס 400: Invalid age.

תרגיל 15 – ולידציה של העלאת קובץ
המשימה:
צור ראוט המדמה העלאת קובץ עם בדיקת שם.
לוגיקה:
POST /upload – ודא שקיים שדה fileName ב-Body. אם לא, החזר: No file name provided.

תרגיל 16 – מונה בקשות גלובלי
המשימה:
צור Middleware שסופר כמה בקשות הגיעו לשרת מאז שהופעל.
לוגיקה:
השתמש במשתנה גלובלי והדפס לקונסול בכל בקשה: Total Requests: X.

תרגיל 17 – ולידציה של אורך מזהה (ID)
המשימה:
צור ראוט לעדכון פרופיל עם בדיקת אורך ה-ID בנתיב.
לוגיקה:
PUT /profile/:id – אם ה-id אינו באורך של בדיוק 5 תווים, החזר: ID must be exactly 5 characters.

תרגיל 18 – שפת ברירת מחדל (Header Middleware)
המשימה:
צור Middleware שבודק העדפת שפה של משתמש.
לוגיקה:
בדוק את ה-Header בשם accept-language. אם הוא חסר, הגדר ל-req מאפיין language = "en".

תרגיל 19 – סינון מילים אסורות
המשימה:
מנע פרסום תגובות הכוללות מילים לא ראויות.
לוגיקה:
POST /comment – אם ה-Body מכיל את המילה "spam", החזר סטטוס 400: Forbidden content.

תרגיל 20 – הגבלת גודל טקסט
המשימה:
צור ולידציה המגבילה את אורך הטקסט שנשלח ב-Body.
לוגיקה:
אם המחרוזת ב-Body ארוכה מ-200 תווים, החזר סטטוס 413: Payload too large.

תרגיל 21 – אבטחה רב-שכבתית
המשימה:
צור ראוט שדורש שני תנאים שונים למעבר.
לוגיקה:
GET /secure-data – דרוש גם admin=true ב-Query וגם Header בשם x-api-key עם ערך סודי.

תרגיל 22 – שגיאות ולידציה מיוחדות
המשימה:
עדכן את ה-Error Handler (מתרגיל 9) שיזהה שגיאות מסוג "Validation".
לוגיקה:
אם לאובייקט השגיאה יש מאפיין type: "validation", החזר סטטוס 422 במקום 500.

תרגיל 23 – העברת שגיאה ל-Next
המשימה:
תרגל העברת שגיאה בצורה אסינכרונית/לוגית ל-Middleware הבא.
לוגיקה:
POST /age-check – אם הגיל ב-Body קטן מ-18, קרא ל-next(new Error("Too young")).

תרגיל 24 – תיעוד מחיקות (Logger)
המשימה:
צור Middleware שמתעד מחיקות של משאבים.
לוגיקה:
בכל בקשת DELETE, הדפס לקונסול: Resource with ID [ID] is being deleted.

תרגיל 25 – הגבלת סוגי קבצים בנתיב
המשימה:
צור בדיקה לסיומת קובץ בפרמטר.
לוגיקה:
GET /download/:file – אם ה-file לא מסתיים ב-.pdf, החזר סטטוס 400: Only PDF files allowed.



תרגיל 25 – Middleware מתעד (Logger)
המשימה: צור Middleware גלובלי (שפועל על כל ה-Routes) שמדפיס לקונסול בכל בקשה את המתודה (Method) ואת הנתיב (URL).
קלט: GET /users פלט בקונסול: [LOG] GET /users - 2026-05-05

תרגיל 26 – אימות מפתח API (Security Middleware)
המשימה: צור Middleware ספציפי ל-Route מסוים. ה-Middleware בודק אם קיים Header בשם x-auth-token עם הערך secret123.
לוגיקה:
אם תקין: המשך ל-Route.
אם לא: החזר סטטוס 401 והודעה Unauthorized: Invalid Token.

תרגיל 27 – ולידציה של טיפוס נתונים
המשימה: צור Route של POST /calculate. השרת מקבל ב-Body שני מספרים: num1 ו-num2.
לוגיקה:
ודא ששני השדות קיימים וגם שהם מסוג Number.
אם לא, שלח שגיאה 400: Both inputs must be numbers.

תרגיל 28 – טיפול בשגיאת "לא נמצא" (404 Global)
המשימה: צור פונקציית Middleware שתמוקם בסוף הקובץ (אחרי כל ה-Routes).
לוגיקה: כל בקשה לנתיב שלא קיים (למשל GET /random-page) תחזיר סטטוס 404 וקובץ JSON: { "error": "Route not found" }

תרגיל 29 – Error Handling Middleware מרכזי
המשימה: צור פונקציית טיפול בשגיאות עם 4 פרמטרים (err, req, res, next).
לוגיקה: בתוך Route מסוים, בצע throw new Error("Database failed"). ה-Middleware צריך לתפוס את השגיאה ולהחזיר: { "status": "fail", "message": "Database failed" }

תרגיל 30 – ולידציה של פורמט Email
המשימה: בנתיב POST /subscribe, ודא שה-Email ב-Body מכיל את התו @.
לוגיקה: אם המייל לא תקין, החזר הודעה: Invalid email format.




