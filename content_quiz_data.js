// Natan Study - Quiz Database
// Contains 14 distinct exams, each with exactly 14 questions. Total = 196 questions.

const quizDatabase = {
  basics: [
    {
      code: 'let x = 10;\n{\n  let x = 20;\n}\nconsole.log(x);',
      q: 'מה יהיה הפלט של הקוד הבא?',
      opts: ['10', '20', 'undefined', 'ReferenceError'],
      correct: 0,
      explain: 'המשתנה x מוגדר באמצעות let ולו יש Block Scope (טווח בלוק). הגדרת x מחדש בתוך הסוגריים המסולסלים {} מייצרת משתנה חדש שקיים רק בתוכם, לכן ה-x החיצוני נשאר 10.'
    },
    {
      code: 'console.log(y);\nvar y = 5;',
      q: 'מה יהיה הפלט?',
      opts: ['5', 'ReferenceError', 'undefined', 'null'],
      correct: 2,
      explain: 'בגלל מנגנון ה-Hoisting של var, ההצהרה על המשתנה עולה לראש הסקופ אך ללא השמה. לכן בשורת ההדפסה הוא מוכר אך ערכו עדיין undefined.'
    },
    {
      code: 'console.log(z);\nlet z = 5;',
      q: 'מה יודפס למסך?',
      opts: ['5', 'ReferenceError', 'undefined', 'null'],
      correct: 1,
      explain: 'משתני let ו-const לא עוברים Hoisting רגיל כמו var. הם נמצאים באזור המכונה Temporal Dead Zone מרגע תחילת הסקופ ועד להצהרה עליהם, לכן ניסיון גישה מוקדם יזרוק ReferenceError.'
    },
    {
      code: 'const obj = { name: "Natan" };\nobj.name = "Aharon";\nconsole.log(obj.name);',
      q: 'מה יהיה הפלט?',
      opts: ['"Natan"', '"Aharon"', 'TypeError', 'undefined'],
      correct: 1,
      explain: 'הגדרה עם const נועלת את המצביע לאובייקט בזיכרון, אך אינה מונעת שינוי (Mutation) של השדות הפנימיים שלו.'
    },
    {
      code: 'console.log(typeof NaN);',
      q: 'מהו הטיפוס של NaN?',
      opts: ['"NaN"', '"number"', '"undefined"', '"null"'],
      correct: 1,
      explain: 'NaN מייצג Not a Number, אך מנקודת המבט של שפת JavaScript, הטיפוס הרשמי שלו ב-typeof הוא עדיין "number".'
    },
    {
      code: 'console.log(1 < 2 < 3);\nconsole.log(3 > 2 > 1);',
      q: 'מה יהיה הפלט של שתי השורות?',
      opts: ['true, true', 'true, false', 'false, false', 'false, true'],
      correct: 1,
      explain: 'בשורה הראשונה: 1 < 2 מחזיר true, ואז true < 3 מומר למספר 1 < 3 שמחזיר true. בשורה השנייה: 3 > 2 מחזיר true, ואז true > 1 מומר ל-1 > 1 שמחזיר false.'
    },
    {
      code: 'const x = "5";\nconsole.log(typeof +x);',
      q: 'מה יהיה הטיפוס של הפלט?',
      opts: ['"string"', '"number"', '"NaN"', '"undefined"'],
      correct: 1,
      explain: 'אופרטור הפלוס האונרי (+) לפני משתנה מנסה להמיר אותו למספר באופן מיידי. לכן string מומר ל-number.'
    },
    {
      code: 'let a;\nconsole.log(a === undefined);\nconsole.log(typeof a === "undefined");',
      q: 'מה יהיה הפלט של שתי השורות?',
      opts: ['true, true', 'true, false', 'false, true', 'false, false'],
      correct: 0,
      explain: 'משתנה שהוכרז אך לא הושם לו ערך מקבל את הערך undefined מטיפוס "undefined". שתי הבדיקות תקינות ויחזירו true.'
    },
    {
      code: 'console.log(null == undefined);\nconsole.log(null === undefined);',
      q: 'מה יהיה הפלט של שתי הבדיקות?',
      opts: ['true, true', 'true, false', 'false, true', 'false, false'],
      correct: 1,
      explain: 'האופרטור == (שוויון רך) רואה ב-null ו-undefined ערכים שווים זה לזה. לעומת זאת, === (שוויון קפדני) בודק גם טיפוסים, והם שונים ("object" לעומת "undefined"), לכן יחזיר false.'
    },
    {
      code: 'const name = "Natan";\nconsole.log(`Hello ${name}`);',
      q: 'מה יודפס למסך?',
      opts: ['Hello Natan', 'Hello ${name}', 'Hello', 'שגיאה'],
      correct: 0,
      explain: 'שימוש ב-Template Literals (מירכאות הפוכות ``) מאפשר לבצע אינטרפולציה של משתנים בתוך מחרוזת בקלות באמצעות התבנית ${}.'
    },
    {
      code: 'let a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a, b);',
      q: 'מה יהיו ערכי a ו-b?',
      opts: ['1 2', '2 1', '2 2', 'שגיאה'],
      correct: 1,
      explain: 'השמה מפרקת (Destructuring) מאפשרת לבצע החלפת ערכים (Swap) מהירה בין משתנים ללא צורך במשתנה עזר זמני.'
    },
    {
      code: 'console.log(typeof typeof 1);',
      q: 'מה הפלט?',
      opts: ['"number"', '"string"', '"undefined"', '"object"'],
      correct: 1,
      explain: 'הפעולה typeof 1 מחזירה את המחרוזת "number". הפעלת typeof נוספת על המחרוזת הזו תחזיר "string", מאחר וכל פלט של typeof הוא תמיד מחרוזת.'
    },
    {
      code: 'let a = 5;\nlet b = a++;\nconsole.log(a, b);',
      q: 'מה יהיה הפלט?',
      opts: ['5 5', '6 5', '6 6', '5 6'],
      correct: 1,
      explain: 'האופרטור a++ הוא פוסט-אינקרמנט: הוא מחזיר קודם כל את הערך הנוכחי (5) ומציב אותו ב-b, ורק לאחר מכן מעלה את ערכו של a ל-6.'
    },
    {
      code: 'console.log(!!x); // בהנחה ש-x הוא "" (מחרוזת ריקה)',
      q: 'מה יהיה הפלט עבור x כזה?',
      opts: ['true', 'false', '""', 'שגיאה'],
      correct: 1,
      explain: 'אופרטור שלילה כפול (!!) משמש להמרת כל ערך לטיפוס בוליאני המקביל לו. מחרוזת ריקה היא Falsy, לכן השלילה הכפולה תחזיר false.'
    }
  ],
  loops: [
    {
      code: 'let count = 0;\nfor(let i=0; i<3; i++) {\n  count += i;\n}\nconsole.log(count);',
      q: 'מה יהיה הפלט?',
      opts: ['3', '6', '2', '0'],
      correct: 0,
      explain: 'בלולאה i מקבל את הערכים 0, 1, 2. סכומם הוא 3.'
    },
    {
      code: 'let i = 0;\nwhile(i < 3) {\n  i++;\n}\nconsole.log(i);',
      q: 'מה יהיה ערכו של i בסיום הלולאה?',
      opts: ['2', '3', '4', 'infinite loop'],
      correct: 1,
      explain: 'הלולאה תרוץ 3 פעמים עבור i=0, i=1, ו-i=2. בכל סיבוב i גדל ב-1, לכן בסיום התנאי i < 3 ייכשל כאשר i שווה ל-3.'
    },
    {
      code: 'if ([]) console.log("A");\nif (0) console.log("B");\nif ("") console.log("C");',
      q: 'מה יודפס למסך?',
      opts: ['A', 'B', 'C', 'שום דבר'],
      correct: 0,
      explain: 'ב-JS מערך ריק [] הוא Truthy, בעוד שהמספר 0 ומחרוזת ריקה "" הם Falsy. לכן רק תנאי A יתקיים.'
    },
    {
      code: 'let val = "A";\nswitch(val) {\n  case "A":\n    console.log("1");\n  case "B":\n    console.log("2");\n    break;\n}',
      q: 'מה יהיה הפלט של ה-switch?',
      opts: ['"1"', '"2"', '"1" וגם "2"', 'שגיאה'],
      correct: 2,
      explain: 'כאשר אין break בסוף ה-case הראשון, מנגנון ה-switch ממשיך לרוץ לשורה הבאה (Fall-through), ולכן יודפס גם "1" וגם "2".'
    },
    {
      code: 'let i = 5;\ndo {\n  console.log(i);\n} while(i < 5);',
      q: 'כמה פעמים תרוץ לולאת do-while?',
      opts: ['0', '1', '5', 'אינסוף'],
      correct: 1,
      explain: 'לולאת do-while תמיד מבצעת לפחות סיבוב אחד לפני בדיקת התנאי, לכן המספר 5 יודפס פעם אחת והלולאה תיעצר.'
    },
    {
      code: 'let sum = 0;\nfor(let i=0; i<5; i++) {\n  if(i === 3) continue;\n  sum += i;\n}\nconsole.log(sum);',
      q: 'מה יהיה הפלט?',
      opts: ['10', '7', '15', '12'],
      correct: 1,
      explain: 'הביטוי continue מדלג על הסיבוב הנוכחי בלולאה. לכן עבור i=3 הדילוג מתבצע והסכום יהיה: 0 + 1 + 2 + 4 = 7.'
    },
    {
      code: 'let sum = 0;\nfor(let i=0; i<5; i++) {\n  if(i === 3) break;\n  sum += i;\n}\nconsole.log(sum);',
      q: 'מה יהיה הפלט כעת?',
      opts: ['10', '3', '6', '7'],
      correct: 2,
      explain: 'הביטוי break קוטע את ריצת הלולאה לחלוטין. עבור i=3 הלולאה נעצרת, והסכום עד אז הוא: 0 + 1 + 2 = 6.'
    },
    {
      code: 'const x = false || "Hello";\nconsole.log(x);',
      q: 'מה יהיה ערכו של המשתנה x?',
      opts: ['false', '"Hello"', 'true', 'undefined'],
      correct: 1,
      explain: 'אופרטור ה-OR (||) מחזיר את הערך האמיתי (Truthy) הראשון שהוא פוגש משמאל לימין. מאחר ו-false הוא Falsy, הוא מחזיר את "Hello".'
    },
    {
      code: 'const y = "Natan" && "Aharon";\nconsole.log(y);',
      q: 'מה יהיה ערכו של y?',
      opts: ['"Natan"', '"Aharon"', 'true', 'false'],
      correct: 1,
      explain: 'אופרטור ה-AND (&&) מחזיר את הערך השקר הראשון, ואם כולם אמת הוא מחזיר את הערך האחרון. מאחר ו-"Natan" הוא Truthy, הוא ממשיך ימינה ומחזיר את "Aharon".'
    },
    {
      code: 'const z = null ?? "Default";\nconsole.log(z);',
      q: 'מהו פלט השימוש באופרטור ?? (Nullish Coalescing)?',
      opts: ['null', '"Default"', 'undefined', 'שגיאה'],
      correct: 1,
      explain: 'האופרטור ?? מחזיר את הצד הימני שלו אך ורק אם הצד השמאלי הוא null או undefined. עבור ערכי Falsy אחרים כמו 0 או "", הוא יחזיר את הצד השמאלי.'
    },
    {
      code: 'let a = 1;\nif(a = 2) {\n  console.log("True");\n}\nconsole.log(a);',
      q: 'מה יודפס למסך?',
      opts: ['"True" וגם 2', '"True" וגם 1', 'רק 1', 'שגיאה'],
      correct: 0,
      explain: 'בתנאי רשום a = 2 (השמה) ולא a === 2 (השוואה). המשתנה a מקבל את הערך 2, והערך 2 הוא Truthy ולכן התנאי מתקיים ויודפס "True" וערכו של a מעתה הוא 2.'
    },
    {
      code: 'const x = 0;\nconst r = x ?? 10;\nconsole.log(r);',
      q: 'מה יהיה ערכו של r?',
      opts: ['0', '10', 'undefined', 'null'],
      correct: 0,
      explain: 'כאמור, אופרטור Nullish Coalescing (??) מופעל רק עבור null/undefined. מאחר ו-0 אינו null/undefined, הוא מוחזר כמו שהוא.'
    },
    {
      code: 'let i = 0;\nfor(; i < 2; ) {\n  i++;\n}\nconsole.log(i);',
      q: 'האם ההגדרה הבאה של לולאת for היא חוקית ומה הפלט?',
      opts: ['שגיאת סינטקס', 'ריצה אינסופית', '2', '0'],
      correct: 2,
      explain: 'בלולאת for כל שלושת החלקים (הגדרה, תנאי, ועדכון) הם אופציונליים. בקוד זה השמטנו את ההגדרה והעדכון (שקורה בגוף הלולאה), הקוד תקין ויחזיר 2.'
    },
    {
      code: 'let a = 0;\nwhile(a) {\n  a++;\n}\nconsole.log(a);',
      q: 'כמה פעמים תרוץ הלולאה הבאה?',
      opts: ['0', '1', 'אינסוף', 'שגיאה'],
      correct: 0,
      explain: 'התנאי בלולאה הוא המשתנה a שערכו 0. המספר 0 הוא Falsy, לכן הלולאה לא תתחיל לרוץ אפילו פעם אחת ויודפס 0.'
    }
  ],
  functions: [
    {
      code: 'console.log(sum(2, 3));\nfunction sum(a, b) {\n  return a + b;\n}',
      q: 'האם הקוד תקין ומה יהיה הפלט?',
      opts: ['5', 'TypeError', 'ReferenceError', 'undefined'],
      correct: 0,
      explain: 'פונקציות המוגדרות כ-Function Declaration עוברות Hoisting מלא (הצהרתן עולה לראש הסקופ), ולכן ניתן לקרוא להן עוד לפני השורה בה הן מוגדרות בקוד.'
    },
    {
      code: 'console.log(multiply(2, 3));\nconst multiply = function(a, b) {\n  return a * b;\n}',
      q: 'האם הקוד תקין כעת ומה יהיה הפלט?',
      opts: ['6', 'TypeError', 'ReferenceError', 'undefined'],
      correct: 2,
      explain: 'כאשר מגדירים פונקציה כ-Function Expression (ביטוי פונקציה) בתוך const, היא אינה עוברת Hoisting, וניסיון לקרוא לה לפני השורה יזרוק ReferenceError.'
    },
    {
      code: 'const f = () => 5;\nconsole.log(f());',
      q: 'מה מחזירה פונקציית החץ הבאה?',
      opts: ['5', 'undefined', 'שגיאה', 'Promise'],
      correct: 0,
      explain: 'בפונקציית חץ בת שורה אחת ללא סוגריים מסולסלים {}, החזרת הערך מתבצעת באופן מרומז (Implicit return) ללא צורך במילת המפתח return.'
    },
    {
      code: 'function sayHello(name = "Guest") {\n  console.log("Hello " + name);\n}\nsayHello(undefined);\nsayHello(null);',
      q: 'מה יהיו הפלטים עבור שתי הקריאות בהתאמה?',
      opts: ['Hello Guest, Hello Guest', 'Hello Guest, Hello null', 'Hello null, Hello Guest', 'שגיאה'],
      correct: 1,
      explain: 'פרמטרי ברירת מחדל ב-JS מופעלים רק כאשר הפרמטר שנשלח הוא undefined או לא נשלח בכלל. אם נשלח null, הוא נחשב לערך מוגדר ולכן לא יוחלף בברירת המחדל ויודפס Hello null.'
    },
    {
      code: 'function test(a, b) {\n  console.log(arguments.length);\n}\ntest(1, 2, 3);',
      q: 'מה יודפס למסך?',
      opts: ['2', '3', '0', 'שגיאה במובייל'],
      correct: 1,
      explain: 'האובייקט המובנה arguments מכיל את כל הארגומנטים שהועברו בפועל לקריאת הפונקציה, ללא קשר לכמות הפרמטרים שהוגדרו בחתימה שלה.'
    },
    {
      code: 'const obj = {\n  val: 10,\n  print: function() {\n    setTimeout(() => {\n      console.log(this.val);\n    }, 100);\n  }\n};\nobj.print();',
      q: 'מה יודפס למסך?',
      opts: ['10', 'undefined', 'שגיאה', 'null'],
      correct: 0,
      explain: 'לפונקציית חץ אין הקשר this משלה. היא יורשת אותו באופן לקסיקלי מסביבתה החיצונית. לכן this.val מצביע בצורה תקינה על השדה val שבאובייקט obj.'
    },
    {
      code: 'const obj = {\n  val: 10,\n  print: function() {\n    setTimeout(function() {\n      console.log(this.val);\n    }, 100);\n  }\n};\nobj.print();',
      q: 'ומה יודפס כאן (שימוש בפונקציה רגילה בתוך ה-setTimeout)?',
      opts: ['10', 'undefined', 'שגיאה', 'window'],
      correct: 1,
      explain: 'פונקציה רגילה שמבוצעת ב-setTimeout מופעלת בקונטקסט של הסביבה הגלובלית (window או global). לכן this יצביע לשם ו-this.val יחזיר undefined.'
    },
    {
      code: 'function test() {\n  return\n  {\n    status: "ok"\n  };\n}\nconsole.log(test());',
      q: 'מה יהיה הפלט?',
      opts: ['{ status: "ok" }', 'undefined', 'שגיאת סינטקס', 'null'],
      correct: 1,
      explain: 'בגלל מנגנון ה-Automatic Semicolon Insertion (ASI), כאשר מילת המפתח return נמצאת לבדה בשורה, JS שותלת אוטומטית נקודה-פסיק (;) בסופה. הקוד יחזיר undefined והשורה הבאה תתעלם ממנה.'
    },
    {
      code: 'const f = (...args) => {\n  console.log(typeof args);\n};\nf(1, 2);',
      q: 'מה יהיה הטיפוס (typeof) של args?',
      opts: ['"array"', '"object"', '"arguments"', '"undefined"'],
      correct: 1,
      explain: 'אופרטור ה-Rest (...args) אוסף את הפרמטרים לתוך מערך. מאחר ומערך ב-JavaScript הוא אובייקט, typeof מחזיר "object" (ולא "array").'
    },
    {
      code: 'function add(x) {\n  return function(y) {\n    return x + y;\n  }\n}\nconsole.log(add(2)(3));',
      q: 'מה יהיה הפלט?',
      opts: ['5', '6', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'זוהי קריאה לפונקציה שמחזירה פונקציה (מבנה Currying). הקריאה add(2) מחזירה פונקציה פנימית שזוכרת ש-x הוא 2, והקריאה (3) מפעילה אותה עם y=3, סה"כ 5.'
    },
    {
      code: 'const greet = (name) => `Hello ${name}`;\nconsole.log(typeof greet);',
      q: 'מה מחזיר typeof על פונקציית חץ?',
      opts: ['"object"', '"function"', '"arrow"', '"undefined"'],
      correct: 1,
      explain: 'כל פונקציה ב-JavaScript, בין אם היא רגילה או פונקציית חץ, מחזירה "function" בבדיקת typeof.'
    },
    {
      code: 'const f = (x, y) => x + y;\nconsole.log(f.length);',
      q: 'מה מחזיר השדה length של פונקציה?',
      opts: ['0', '1', '2', 'undefined'],
      correct: 2,
      explain: 'השדה length של פונקציה מחזיר את מספר הפרמטרים שהיא מצפה לקבל כפי שהוגדרו בחתימה שלה.'
    },
    {
      code: 'function show() {\n  "use strict";\n  x = 10;\n}\nshow();',
      q: 'מה יקרה בהפעלת הפונקציה הבאה תחת מצב Strict Mode?',
      opts: ['x יוגדר גלובלית כ-10', 'ReferenceError', 'undefined', 'שגיאת סינטקס'],
      correct: 1,
      explain: 'במצב קפדני (Strict Mode), השפה מונעת הגדרת משתנים גלובליים ללא הצהרה מפורשת (כמו let, const או var). לכן נזרקת שגיאת ReferenceError.'
    },
    {
      code: 'function foo() {\n  return this;\n}\nconsole.log(foo() === undefined); // תחת Strict Mode',
      q: 'מה תהיה התשובה במצב Strict Mode?',
      opts: ['true', 'false', 'ReferenceError', 'TypeError'],
      correct: 0,
      explain: 'במצב Strict Mode, בקריאה ישירה לפונקציה ללא אובייקט מקשר, הקונטקסט this אינו מומר אוטומטית ל-window אלא נשאר undefined.'
    }
  ],
  closures: [
    {
      code: 'function outer() {\n  let x = 0;\n  return function() {\n    x++;\n    console.log(x);\n  }\n}\nconst next = outer();\nnext();\nnext();',
      q: 'מה יהיו פלטי שתי השורות האחרונות בהתאמה?',
      opts: ['1, 1', '1, 2', '0, 1', 'שגיאה'],
      correct: 1,
      explain: 'פונקציה פנימית מחזיקה קשר לקונטקסט הלקסיקלי של הפונקציה החיצונית שלה גם לאחר סיום ריצתה (Closure). המשתנה x נשמר בזיכרון ומצטבר, לכן יודפס 1 ואז 2.'
    },
    {
      code: 'for(var i=0; i<3; i++) {\n  setTimeout(() => console.log(i), 10);\n}',
      q: 'מה יודפס למסך לאחר 10 מילישניות?',
      opts: ['0, 1, 2', '3, 3, 3', '2, 2, 2', 'undefined, undefined, undefined'],
      correct: 1,
      explain: 'המשתנה i מוגדר עם var ולכן הוא בעל סקופ פונקציה/גלובלי יחיד. כאשר ה-setTimeout מופעל, הלולאה כבר הסתיימה וערכו של i בזיכרון המשותף הוא 3, לכן יודפס 3 שלוש פעמים.'
    },
    {
      code: 'for(let i=0; i<3; i++) {\n  setTimeout(() => console.log(i), 10);\n}',
      q: 'ומה יודפס כאן (שימוש ב-let במקום var)?',
      opts: ['0, 1, 2', '3, 3, 3', '2, 2, 2', 'שגיאה'],
      correct: 0,
      explain: 'מאחר ו-let הוא בעל Block Scope, בכל סיבוב של הלולאה נוצר סקופ חדש עם משתנה i חדש. ה-setTimeout שומר קשר (Closure) ל-i הספציפי של אותו סיבוב, לכן יודפס 0, 1, 2.'
    },
    {
      code: 'function createPrinter() {\n  const name = "Natan";\n  return () => console.log(name);\n}\nconst name = "Aharon";\nconst print = createPrinter();\nprint();',
      q: 'איזה שם יודפס למסך?',
      opts: ['"Natan"', '"Aharon"', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'סגירות (Closure) מוגדרת לפי מקום כתיבת הקוד (Lexical Scope) ולא לפי מקום הרצתו בפועל. הפונקציה נכתבה בתוך createPrinter שבה name הוא "Natan".'
    },
    {
      code: 'function factory() {\n  let count = 0;\n  return {\n    inc: () => ++count,\n    dec: () => --count\n  };\n}\nconst c = factory();\nconsole.log(c.inc());\nconsole.log(c.dec());',
      q: 'מה יהיו פלטי שתי השורות?',
      opts: ['1, 0', '1, -1', '1, 1', 'שגיאה'],
      correct: 0,
      explain: 'שתי הפונקציות inc ו-dec חולקות את אותו ה-Closure ופונות לאותו משתנה count בזיכרון, לכן שינוי באחת משפיע על השנייה (0 -> 1 -> 0).'
    },
    {
      code: 'let a = 10;\nfunction foo() {\n  console.log(a);\n}\nfunction bar() {\n  let a = 20;\n  foo();\n}\nbar();',
      q: 'מה יהיה הפלט?',
      opts: ['10', '20', 'undefined', 'ReferenceError'],
      correct: 0,
      explain: 'פונקציות ב-JS מחפשות משתנים לפי הסקופ הלקסיקלי שלהן (היכן שהן הוגדרו). foo הוגדרה בסקופ הגלובלי שבו a שווה 10, לכן היא לא רואה את ה-a המקומי של bar.'
    },
    {
      code: 'const next = (() => {\n  let count = 0;\n  return () => ++count;\n})();\nconsole.log(next());\nconsole.log(next());',
      q: 'מה יודפס כאן (שימוש ב-IIFE)?',
      opts: ['1, 2', '1, 1', 'undefined, undefined', 'שגיאה'],
      correct: 0,
      explain: 'הפונקציה מוגדרת ומבוצעת מיד (IIFE). היא מחזירה את הפונקציה הפנימית שזוכרת את count. זהו דפוס נפוץ לייצור משתנים פרטיים מוגנים.'
    },
    {
      code: 'function makeAdder(x) {\n  return y => x + y;\n}\nconst add5 = makeAdder(5);\nconst add10 = makeAdder(10);\nconsole.log(add5(2), add10(2));',
      q: 'מה יהיו פלטי שתי השורות?',
      opts: ['7, 12', '7, 7', '12, 12', 'שגיאה'],
      correct: 0,
      explain: 'לכל קריאה ל-makeAdder נוצרת סביבת ריצה חדשה משלה. add5 נועלת את x=5 ו-add10 נועלת את x=10. לכן נקבל 7 ו-12.'
    },
    {
      code: 'function add() {\n  let x = 1;\n  return () => {\n    x++;\n    return x;\n  }\n}\nconsole.log(add()());\nconsole.log(add()());',
      q: 'מה יודפס למסך?',
      opts: ['2, 3', '2, 2', '1, 2', 'שגיאה'],
      correct: 1,
      explain: 'שים לב שבכל קריאה אנו מריצים את add() מחדש ובכך יוצרים Closure חדש לחלוטין עם x=1 שמתאפס. הפונקציה הפנימית מבוצעת פעם אחת ומחזירה 2 בכל פעם.'
    },
    {
      code: 'let f;\n{\n  let x = 5;\n  f = () => x;\n}\nconsole.log(f());',
      q: 'מה יהיה הפלט?',
      opts: ['5', 'ReferenceError', 'undefined', 'null'],
      correct: 0,
      explain: 'למרות שהבלוק {} הסתיים והמשתנה x אינו נגיש ישירות מחוץ לו, הפונקציה f הוגדרה בתוכו ושומרת קשר לקונטקסט (Closure), ולכן מסוגלת להחזיר את 5.'
    },
    {
      code: 'function setup() {\n  let list = [];\n  for (var i = 0; i < 2; i++) {\n    list.push(() => i);\n  }\n  return list;\n}\nconst funcs = setup();\nconsole.log(funcs[0]());',
      q: 'מה יהיה פלט הפונקציה הראשונה?',
      opts: ['0', '1', '2', 'undefined'],
      correct: 2,
      explain: 'מאחר ו-i הוגדר באמצעות var, הוא משתף משתנה יחיד בסוף הריצה שערכו 2. כל הפונקציות במערך יחזירו את הערך 2.'
    },
    {
      code: 'function setup() {\n  let list = [];\n  for (let i = 0; i < 2; i++) {\n    list.push(() => i);\n  }\n  return list;\n}\nconst funcs = setup();\nconsole.log(funcs[0]());',
      q: 'ומה יהיה הפלט כעת (שימוש ב-let במקום var)?',
      opts: ['0', '1', '2', 'undefined'],
      correct: 0,
      explain: 'שימוש ב-let מייצר עותק חדש של i לכל סיבוב של הלולאה, לכן פונקציית funcs[0] זוכרת את ה-i של הסיבוב הראשון שערכו 0.'
    },
    {
      code: 'let x = 1;\nfunction a() {\n  console.log(x);\n}\n(() => {\n  let x = 2;\n  a();\n})();',
      q: 'מה יודפס למסך?',
      opts: ['1', '2', 'undefined', 'ReferenceError'],
      correct: 0,
      explain: 'כרגיל, המיקום הלקסיקלי קובע. הפונקציה a הוגדרה בסביבה הגלובלית שבה x=1, לכן היא לא מושפעת מה-x של הפונקציה העוטפת.'
    },
    {
      code: 'function memoize(fn) {\n  let cache = {};\n  return (arg) => {\n    if (arg in cache) return cache[arg];\n    return cache[arg] = fn(arg);\n  }\n}',
      q: 'באיזה קונספט תכנותי משתמשת פונקציית ה-Memoize?',
      opts: ['Closures', 'Recursion', 'Asynchronous', 'Prototypes'],
      correct: 0,
      explain: 'הפונקציה מחזירה פונקציה פנימית שזוכרת ושומרת גישה למשתנה cache החיצוני לה כדי לשמור זיכרון ביצועים. זהו שימוש קלאסי ב-Closures.'
    }
  ],
  factories: [
    {
      code: 'function personFactory(name) {\n  return {\n    name,\n    greet() {\n      return `Hi, I am ${this.name}`;\n    }\n  };\n}\nconst p1 = personFactory("Natan");\nconsole.log(p1.greet());',
      q: 'מה יהיה הפלט?',
      opts: ['"Hi, I am Natan"', '"Hi, I am undefined"', 'שגיאה', 'null'],
      correct: 0,
      explain: 'פונקציית מפעל (Factory Function) היא פונקציה שמייצרת ומחזירה אובייקט חדש בכל הרצה. בעת קריאה ל-p1.greet(), ה-this מצביע על האובייקט p1.'
    },
    {
      code: 'const p = {\n  name: "Natan",\n  greet: () => `Hi ${this.name}`\n};\nconsole.log(p.greet());',
      q: 'מה יהיה הפלט כעת (שימוש בפונקציית חץ)?',
      opts: ['"Hi Natan"', '"Hi undefined"', 'TypeError', 'null'],
      correct: 1,
      explain: 'לפונקציית חץ אין הקשר this משלה. היא יורשת אותו מההקשר הלקסיקלי החיצוני לה (הסביבה הגלובלית שבה window.name אינו מוגדר), ולכן נקבל undefined.'
    },
    {
      code: 'function customer(name) {\n  return {\n    name,\n    getName: () => name\n  };\n}\nconst c = customer("Natan");\nc.name = "Aharon";\nconsole.log(c.name, c.getName());',
      q: 'מה יהיה הפלט של שתי ההדפסות?',
      opts: ['Aharon, Natan', 'Aharon, Aharon', 'Natan, Natan', 'Natan, Aharon'],
      correct: 0,
      explain: 'השדה name של האובייקט עודכן ל-"Aharon". עם זאת, המתודה getName מחזירה את הפרמטר name מהסקופ החיצוני שלה שננעל ב-Closure והוא נשאר "Natan".'
    },
    {
      code: 'const proto = { type: "human" };\nfunction makePerson(name) {\n  const obj = Object.create(proto);\n  obj.name = name;\n  return obj;\n}\nconst p = makePerson("Natan");\nconsole.log(p.type);',
      q: 'מה יודפס למסך?',
      opts: ['"human"', 'undefined', 'null', 'שגיאה'],
      correct: 0,
      explain: 'הפונקציה יוצרת אובייקט המקושר לפרוטוטיפ proto. השדה type אינו נמצא ישירות על האובייקט p אלא עובר דרך שרשרת הפרוטוטיפים (Prototype Chain) ונמצא.'
    },
    {
      code: 'function factory() {\n  return {\n    id: Math.random()\n  };\n}\nconst a = factory();\nconst b = factory();\nconsole.log(a.id === b.id);',
      q: 'מה יהיה הפלט?',
      opts: ['true', 'false', 'undefined', 'שגיאה'],
      correct: 1,
      explain: 'כל הרצה של פונקציית מפעל מייצרת ומחזירה אובייקט חדש לגמרי בזיכרון, ולכן מזהי ה-id יהיו שונים וההשוואה תחזיר false.'
    },
    {
      code: 'const name = "Natan";\nconst age = 25;\nconst obj = { name, age };\nconsole.log(obj);',
      q: 'באיזה קונספט תחבירי נעשה שימוש ביצירת האובייקט obj?',
      opts: ['Property Shorthand', 'Destructuring', 'Spreading', 'Prototyping'],
      correct: 0,
      explain: 'כאשר שם המפתח ושם המשתנה זהים, ניתן לכתוב רק את שם המשתנה (למשל { name, age } במקום { name: name, age: age }). קונספט זה נקרא Property Shorthand.'
    },
    {
      code: 'function makeCar() {\n  return {\n    speed: 0,\n    drive() {\n      this.speed = 100;\n    }\n  };\n}\nconst car = makeCar();\nconst drive = car.drive;\ndrive();\nconsole.log(car.speed);',
      q: 'מה יהיה הפלט?',
      opts: ['100', '0', 'undefined', 'שגיאה'],
      correct: 1,
      explain: 'שמרנו את המתודה drive במשתנה נפרד. בקריאה ישירה drive(), ההקשר של this אבד והוא מצביע על window/undefined ולא על car. לכן ערך ה-speed של car נשאר 0.'
    },
    {
      code: 'function User(name) {\n  this.name = name;\n}\nconst u = User("Natan");\nconsole.log(u);',
      q: 'מה ערכו של המשתנה u (שים לב שהקריאה מבוצעת ללא המילה new)?',
      opts: ['{ name: "Natan" }', 'undefined', 'null', 'שגיאה'],
      correct: 1,
      explain: 'פונקציית בנאי (Constructor) המבוצעת ללא המילה new מתנהגת כפונקציה רגילה. מכיוון שאין לה return מפורש היא מחזירה undefined (והשדות נרשמו בטעות על window).'
    },
    {
      code: 'function person(name) {\n  let secret = "123";\n  return {\n    name,\n    getSecret() { return secret; }\n  };\n}',
      q: 'מהו היתרון המרכזי של פונקציית המפעל בדוגמה זו?',
      opts: ['ביצועים מהירים', 'כימוס נתונים (Encapsulation / Private variables)', 'תמיכה בריבוי משימות', 'פרוטוטיפים'],
      correct: 1,
      explain: 'המשתנה secret מוגדר מקומית בתוך הפונקציה ואינו נגיש ישירות מחוץ לאובייקט המוחזר, אלא רק דרך המתודה getSecret. זה מאפשר כימוס מלא.'
    },
    {
      code: 'function makeObj() {\n  return {\n    [1 + 2]: "three"\n  };\n}\nconsole.log(makeObj()["3"]);',
      q: 'מה יהיה הפלט?',
      opts: ['"three"', 'undefined', 'שגיאה', 'null'],
      correct: 0,
      explain: 'ב-ES6 ניתן להשתמש ב-Computed Property Names (שמות שדות מחושבים) בתוך סוגריים מרובעים [] בזמן הגדרת האובייקט.'
    },
    {
      code: 'const target = { a: 1 };\nconst source = { b: 2 };\nconst r = Object.assign(target, source);\nconsole.log(r === target);',
      q: 'מה יהיה הפלט של ההשוואה?',
      opts: ['true', 'false', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'הפעולה Object.assign משנה ומעדכנת את אובייקט היעד (Target) ומחזירה את המצביע אליו. לכן r ו-target מצביעים על אותו האובייקט בדיוק.'
    },
    {
      code: 'const original = { a: 1, b: { c: 2 } };\nconst copy = { ...original };\ncopy.b.c = 9;\nconsole.log(original.b.c);',
      q: 'מה יהיה ערך original.b.c?',
      opts: ['2', '9', 'undefined', 'שגיאה'],
      correct: 1,
      explain: 'אופרטור ה-Spread (...) מבצע העתקה רדודה (Shallow Copy). האובייקט הפנימי b מועתק לפי התייחסות בלבד, ולכן שינוי ב-copy משפיע גם על ה-original.'
    },
    {
      code: 'const name = "Natan";\nconst factory = () => ({\n  name,\n  getName: () => this.name\n});\nconst p = factory();\nconsole.log(p.getName());',
      q: 'מה יהיה הפלט?',
      opts: ['"Natan"', 'undefined', 'שגיאה', 'null'],
      correct: 1,
      explain: 'פונקציית החץ getName יורשת את this מהקונטקסט הלקסיקלי שלה. מאחר והמפעל עצמו מוגדר כפונקציית חץ בסקופ הגלובלי, this מצביע על window/undefined.'
    },
    {
      code: 'function factory() {\n  return {\n    type: "VIP",\n    getType() { return this.type; }\n  };\n}\nconst obj = factory();\nconst get = obj.getType.bind({ type: "Normal" });\nconsole.log(get());',
      q: 'מה יודפס למסך?',
      opts: ['"VIP"', '"Normal"', 'undefined', 'שגיאה'],
      correct: 1,
      explain: 'הפעולה bind() מקבעת את ערכו של this באובייקט שנשלח אליה, ולכן הקריאה תחזיר "Normal" במקום ה-type של obj המקורי.'
    }
  ],
  modules: [
    {
      code: '// Inside lib.js: \nexports.val = 5;\nmodule.exports = { val: 10 };\n\n// Inside main.js:\nconst lib = require("./lib");\nconsole.log(lib.val);',
      q: 'מה יהיה הפלט של הקוד הבא?',
      opts: ['5', '10', 'undefined', 'שגיאה'],
      correct: 1,
      explain: 'האובייקט המוחזר בפועל על ידי require הוא module.exports. אם דורסים אותו ישירות (על ידי השמת אובייקט חדש), כל ההשמות הקודמות שבוצעו על exports מבוטלות.'
    },
    {
      code: '// Inside lib.js:\nmodule.exports = function() { return "A"; };\n\n// Inside main.js:\nconst lib = require("./lib");\nconsole.log(lib());',
      q: 'מה יהיה הפלט?',
      opts: ['"A"', 'undefined', 'TypeError: lib is not a function', 'שגיאה במובייל'],
      correct: 0,
      explain: 'ניתן לייצא פונקציה כייצוא יחיד מתוך קובץ על ידי השמתה ישירות ב-module.exports, ובקובץ המייבא היא תיקרא כפונקציה רגילה.'
    },
    {
      code: 'import { x } from "./lib.js";\n// בהנחה שבקובץ lib.js רשום:\n// export let x = 10;\n// x = 20;',
      q: 'במערכת ES6 Modules, האם משתנה מיובא (x) הוא קבוע או משתנה בקובץ המייבא?',
      opts: ['משתנה רגיל וניתן לשנותו ישירות', 'קבוע לקריאה בלבד (Read-only binding)', 'מערך', 'שגיאת סינטקס'],
      correct: 1,
      explain: 'בייצוא ES6 Modules, המשתנה המיובא הוא מצביע חי לקובץ המקורי (Live binding) אך הוא לקריאה בלבד בקובץ המייבא. ניסיון לשנותו ישירות יזרוק שגיאה.'
    },
    {
      code: 'const lib = require("./lib"); // lib.js לא קיים בתיקייה',
      q: 'איזו שגיאה תיזרק כאשר מנסים לייבא קובץ שלא קיים ב-Node.js?',
      opts: ['MODULE_NOT_FOUND', 'ReferenceError', 'TypeError', '404 File Not Found'],
      correct: 0,
      explain: 'במערכת CommonJS, אם הקובץ לא קיים, הפעולה require זורקת שגיאה עם קוד השגיאה המיוחד MODULE_NOT_FOUND.'
    },
    {
      code: '// lib.js\nexport default 42;\n\n// main.js\nimport num from "./lib.js";\nconsole.log(num);',
      q: 'מה יהיה הפלט?',
      opts: ['42', 'undefined', '{ default: 42 }', 'שגיאה'],
      correct: 0,
      explain: 'בייבוא ברירת מחדל (Default Export) ב-ESM, ניתן לקרוא למשתנה המיובא בכל שם שנרצה (למשל num במקום ה-default) ללא צורך בסוגריים מסולסלים.'
    },
    {
      code: '// lib.js\nexport const a = 1;\nexport const b = 2;\n\n// main.js\nimport * as lib from "./lib.js";\nconsole.log(lib.a);',
      q: 'מהו הטיפוס של lib המיובא באמצעות כוכבית (*)?',
      opts: ['מערך', 'אובייקט מיוחד (Module Namespace Object)', 'פונקציה', 'undefined'],
      correct: 1,
      explain: 'ייבוא כוכבית מאגד את כל הייצואים השמיים של הקובץ לתוך אובייקט מיוחד במרחב השמות של המודול.'
    },
    {
      code: 'const x = require("./lib");\nconst y = require("./lib");',
      q: 'כמה פעמים יתבצע ביצוע הקוד בתוך המודול lib.js בפועל?',
      opts: ['פעם אחת בלבד', 'פעמיים', '0 פעמים', 'בכל קריאה לפונקציה'],
      correct: 0,
      explain: 'מערכת require של Node.js מבצעת Cache (שמירה בזיכרון) למודול לאחר הטעינה הראשונה. קריאות נוספות פשוט יחזירו את האובייקט השמור ללא הרצה מחדש.'
    },
    {
      code: 'console.log(exports === module.exports);',
      q: 'מה יהיה הפלט בשרת Node.js רגיל?',
      opts: ['true', 'false', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'במצב התחלתי של טעינת מודול ב-Node.js, המשתנה המקוצר exports הוא מצביע המצביע ישירות לאותו אובייקט של module.exports.'
    },
    {
      code: 'if (true) {\n  const x = require("./lib");\n}',
      q: 'האם מותר להשתמש ב-require בתוך בלוקים תנאיים?',
      opts: ['מותר בהחלט (דינמי)', 'אסור לחלוטין ויזרוק שגיאת סינטקס', 'מותר רק ב-Strict Mode', 'מותר רק במובייל'],
      correct: 0,
      explain: 'ייבוא באמצעות CommonJS (require) הוא דינמי ומתבצע בזמן ריצה, לכן מותר למקם אותו בתוך תנאים, לולאות או פונקציות.'
    },
    {
      code: 'if (true) {\n  import x from "./lib.js";\n}',
      q: 'האם מותר להשתמש ב-import (ESM) בתוך בלוקים תנאיים?',
      opts: ['מותר בהחלט', 'אסור ויזרוק שגיאת סינטקס', 'מותר רק ב-Strict Mode', 'מותר רק ב-Node.js ישן'],
      correct: 1,
      explain: 'ייבוא של ESM (import) הוא סטטי לחלוטין ומתבצע בזמן פארסינג (לפני ריצת הקוד). לכן אסור למקם אותו בתוך בלוקים דינמיים כמו תנאים.'
    },
    {
      code: '// lib.js\nconsole.log("Hello");\nmodule.exports = {};',
      q: 'מה יקרה אם נייבא מודול שאינו מייצא דבר?',
      opts: ['נקבל שגיאת קומפילציה', 'הקוד במודול ירוץ והמשתנה המייבא יקבל אובייקט ריק {}', 'המשתנה יקבל undefined', 'שגיאה בזמן ריצה'],
      correct: 1,
      explain: 'גם אם מודול לא מייצא ערכים משמעותיים, קובץ ה-JS שלו מורץ במלואו, ו-require מחזיר את module.exports כפי שהוא (במקרה זה אובייקט ריק).'
    },
    {
      code: 'import("./lib.js").then(module => { ... });',
      q: 'כיצד נקרא השימוש ב-import כפונקציה המצפה ל-Promise?',
      opts: ['Static Import', 'Dynamic Import', 'Async Import', 'Lazy Load Routing'],
      correct: 1,
      explain: 'הפונקציה import() מאפשרת לבצע טעינה דינמית ואסינכרונית של מודולים בזמן ריצה גם תחת מערכת ES Modules הסטטית.'
    },
    {
      code: 'console.log(module);',
      q: 'מניין מגיעים משתנים כמו module ו-exports בתוך קובץ מודול ב-Node.js?',
      opts: ['הם משתנים גלובליים על אובייקט global', 'הם מוזרקים כפרמטרים לפונקציה עוטפת (Wrapper Function) ש-Node.js מריצה סביב הקוד', 'הם מילות מפתח בשפה', 'הם מגיעים מהדפדפן'],
      correct: 1,
      explain: 'לפני הרצת המודול, Node.js עוטפת את כל הקוד בקובץ בתוך פונקציה סודית: (function(exports, require, module, __filename, __dirname) { ... }). זה מונע זליגת משתנים לסביבה הגלובלית.'
    },
    {
      code: '// Inside package.json:\n{ "type": "module" }',
      q: 'מהי המשמעות של הגדרה זו בקובץ package.json?',
      opts: ['השרת תומך רק במובייל', 'הפרויקט יעשה שימוש ב-ES Modules (import/export) כברירת מחדל במקום CommonJS', 'הפרויקט מוגדר כספריה ציבורית', 'שגיאה'],
      correct: 1,
      explain: 'הגדרה זו מנחה את מנוע Node.js להתייחס לכל קבצי ה-JS בפרויקט כקבצי ES Modules כברירת מחדל.'
    }
  ],
  destructuring: [
    {
      code: 'const [a, , b] = [1, 2, 3];\nconsole.log(a, b);',
      q: 'מה יהיו ערכי המשתנים a ו-b?',
      opts: ['1 2', '1 3', '2 3', 'שגיאה'],
      correct: 1,
      explain: 'בפירוק מערכים, ניתן להשתמש בפסיק ריק כדי לדלג על איברים במערך המקורי.'
    },
    {
      code: 'const { name: myName } = { name: "Natan" };\nconsole.log(myName);',
      q: 'מה יהיה הפלט?',
      opts: ['"Natan"', 'undefined', 'ReferenceError', 'myName'],
      correct: 0,
      explain: 'בפירוק אובייקטים, התחביר key: newVarName מאפשר לחלץ ערך משדה באובייקט ולשמור אותו בתוך משתנה חדש בעל שם שונה.'
    },
    {
      code: 'const { age = 20 } = { name: "Natan" };\nconsole.log(age);',
      q: 'מה יהיה ערכו של age?',
      opts: ['20', 'undefined', 'null', 'שגיאה'],
      correct: 0,
      explain: 'ניתן לקבוע ערך ברירת מחדל (Default Value) למשתנים במידה והשדה שפירקנו אינו קיים באובייקט או ערכו undefined.'
    },
    {
      code: 'const { a, ...rest } = { a: 1, b: 2, c: 3 };\nconsole.log(rest);',
      q: 'מה יהיה ערכו של המשתנה rest?',
      opts: ['[2, 3]', '{ b: 2, c: 3 }', '2', '{ a: 1 }'],
      correct: 1,
      explain: 'אופרטור ה-Rest (...) באובייקטים אוסף את כל שאר השדות שלא חולצו בצורה מפורשת לתוך אובייקט חדש.'
    },
    {
      code: 'const arr1 = [1, 2];\nconst arr2 = [...arr1, 3];\nconsole.log(arr2);',
      q: 'מהו ערך המערך arr2?',
      opts: ['[[1, 2], 3]', '[1, 2, 3]', '[3, 1, 2]', 'שגיאה'],
      correct: 1,
      explain: 'אופרטור ה-Spread (...) במערכים שופך ומפרק את האיברים של המערך המקורי לתוך המערך החדש שנוצר.'
    },
    {
      code: 'const user = { id: 1, info: { name: "Natan" } };\nconst { info: { name } } = user;\nconsole.log(name);',
      q: 'מה יהיה הפלט של פירוק האובייקטים המקונן הבא?',
      opts: ['"Natan"', '{ name: "Natan" }', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'ניתן לבצע פירוק מקונן (Nested Destructuring) כדי לחלץ ערכים מתוך אובייקטים פנימיים ישירות.'
    },
    {
      code: 'const [first, ...rest] = "Hello";\nconsole.log(first, rest);',
      q: 'מה יהיה הפלט?',
      opts: ['H, ["e", "l", "l", "o"]', 'H, "ello"', 'H, ["ello"]', 'שגיאה'],
      correct: 0,
      explain: 'מחרוזות הן איטרביליות (Iterables). פירוק מערכים עליהן יפרק אותן לתווים בודדים. first יקבל את התו הראשון, ו-rest יקבל את שאר התווים כמערך.'
    },
    {
      code: 'const { name: { first } } = { age: 30 };',
      q: 'מה יקרה בניסיון להריץ את השורה הבאה?',
      opts: ['TypeError: Cannot read properties of undefined', 'ReferenceError', 'undefined', 'null'],
      correct: 0,
      explain: 'בפירוק מקונן, אם האובייקט האמצעי (במקרה זה name) הוא undefined, ניסיון לפרק אותו פנימית יזרוק TypeError (מכיוון שאסור לגשת לשדות של undefined).'
    },
    {
      code: 'let a = 1, b = 2;\n({a, b} = {a: 10, b: 20});\nconsole.log(a, b);',
      q: 'האם הקוד תקין ומה יהיו ערכי a ו-b?',
      opts: ['10 20', '1 2', 'שגיאת סינטקס', 'undefined'],
      correct: 0,
      explain: 'כאשר מבצעים פירוק אובייקט ללא הצהרת משתנים חדשה (כלומר השמה למשתנים קיימים), חובה לעטוף את כל ביטוי ההשמה בסוגריים עגולים () כדי שהמהדר לא יחשוב שמדובר בבלוק קוד.'
    },
    {
      code: 'const fn = ({ name }) => name;\nconsole.log(fn({ name: "Natan" }));',
      q: 'האם מותר לפרק אובייקטים בתוך חתימת הפרמטרים של פונקציה?',
      opts: ['מותר בהחלט', 'אסור ויזרוק שגיאה', 'מותר רק ב-Strict Mode', 'מותר רק לפונקציות רגילות'],
      correct: 0,
      explain: 'פירוק פרמטרים בחתימת הפונקציה הוא כלי נפוץ מאוד ונוח המאפשר לקבל אובייקט הגדרות ולפרק את השדות שלו ישירות בכניסה לפונקציה.'
    },
    {
      code: 'const { length } = "Natan";\nconsole.log(length);',
      q: 'מה יהיה הפלט?',
      opts: ['5', 'undefined', 'שגיאה', 'null'],
      correct: 0,
      explain: 'מחרוזות הן אובייקטים עטיפתיים זמניים המכילים את השדה length. לכן פירוק השדה length מתוך מחרוזת שואב את ערך האורך שלה ומחזיר 5.'
    },
    {
      code: 'const obj = { a: 1, b: 2 };\nconst { a, b, c = a + b } = obj;\nconsole.log(c);',
      q: 'מה יהיה ערכו של c?',
      opts: ['3', 'NaN', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'בערכי ברירת מחדל של פירוק, ניתן לגשת ולהשתמש במשתנים אחרים שפורקו כבר באותו הביטוי (משמאל לימין).'
    },
    {
      code: 'const [x = 1] = [null];\nconsole.log(x);',
      q: 'מה יהיה ערכו של x?',
      opts: ['1', 'null', 'undefined', 'שגיאה'],
      correct: 1,
      explain: 'ערכי ברירת מחדל בפירוק מופעלים אך ורק אם הערך המקורי הוא undefined. מאחר והערך הוא null, הוא נשאר null ואינו מוחלף ב-1.'
    },
    {
      code: 'const obj = { a: 1 };\nconst { a: x, a: y } = obj;\nconsole.log(x, y);',
      q: 'האם מותר לפרק את אותו השדה (a) מספר פעמים למשתנים שונים באותו הביטוי?',
      opts: ['מותר בהחלט', 'שגיאת סינטקס', 'undefined', 'null'],
      correct: 0,
      explain: 'אין שום מניעה לפרק את אותו שדה האובייקט מספר פעמים וליצור ממנו משתנים נפרדים בעלי שמות שונים.'
    }
  ],
  promises: [
    {
      code: 'const p = new Promise((resolve) => {\n  console.log("A");\n  resolve("B");\n});\np.then(res => console.log(res));\nconsole.log("C");',
      q: 'מה יהיה סדר הדפסת האותיות?',
      opts: ['A, B, C', 'A, C, B', 'C, A, B', 'B, A, C'],
      correct: 1,
      explain: 'הקוד בתוך פונקציית ה-Executor של ה-Promise רץ באופן סינכרוני מיידי (לכן יודפס A). השרשור .then() הוא אסינכרוני ונרשם ב-Microtask Queue, לכן C הסינכרוני יודפס לפניו, ובסוף B.'
    },
    {
      code: 'async function test() {\n  return 5;\n}\nconsole.log(test() instanceof Promise);',
      q: 'מה יודפס למסך?',
      opts: ['true', 'false', '5', 'שגיאה'],
      correct: 0,
      explain: 'פונקציה המוגדרת עם async תמיד מחזירה אובייקט Promise, גם אם בפועל החזרנו ערך פשוט. לכן הבדיקה תחזיר true.'
    },
    {
      code: 'Promise.resolve(1)\n  .then(x => x + 1)\n  .then(x => { throw new Error(); })\n  .catch(() => 10)\n  .then(x => console.log(x));',
      q: 'מה יודפס למסך בסוף השרשור?',
      opts: ['10', 'NaN', 'שגיאה שלא נתפסה', 'undefined'],
      correct: 0,
      explain: 'הפעולה catch() תופסת שגיאות שקרו מעליה בשרשור. היא מחזירה ערך חדש (10) שהוא Promise מוצלח, ולכן ה-then הבא אחריו מופעל ומקבל את הערך 10.'
    },
    {
      code: 'async function foo() {\n  throw new Error("A");\n}\nfoo().catch(err => console.log(err.message));',
      q: 'מה יקרה בהפעלת הקוד הבא?',
      opts: ['שגיאה תקרוס את השרת', 'יודפס "A"', 'undefined', 'לא יודפס דבר'],
      correct: 1,
      explain: 'בפונקציות async, זריקת שגיאה (throw) שקולה להחזרת Promise במצב Rejected. ניתן לתפוס אותה כרגיל באמצעות שרשור .catch().'
    },
    {
      code: 'const p = Promise.all([\n  Promise.resolve(1),\n  Promise.reject("Error"),\n  Promise.resolve(3)\n]);\np.catch(err => console.log(err));',
      q: 'מה יהיה פלט ה-Promise.all?',
      opts: ['[1, "Error", 3]', '"Error"', 'undefined', 'שגיאה'],
      correct: 1,
      explain: 'המתודה Promise.all נכשלת מיד (Fast-reject) ברגע שאחד מהפרומיסים במערך נכשל, ומחזירה רק את שגיאתו של המודול שנכשל.'
    },
    {
      code: 'const p = Promise.race([\n  new Promise(res => setTimeout(() => res("A"), 100)),\n  new Promise(res => setTimeout(() => res("B"), 50))\n]);\np.then(res => console.log(res));',
      q: 'איזו אות תודפס למסך?',
      opts: ['"A"', '"B"', '["A", "B"]', 'undefined'],
      correct: 1,
      explain: 'המתודה Promise.race מחזירה את הערך של ה-Promise המהיר ביותר שמסיים (בין אם הצליח ובין אם נכשל). ה-Promise השני מסיים ב-50ms לעומת 100ms ולכן הוא ינצח.'
    },
    {
      code: 'console.log("Start");\nsetTimeout(() => console.log("Timeout"), 0);\nPromise.resolve().then(() => console.log("Promise"));\nconsole.log("End");',
      q: 'מה יהיה סדר ההדפסות?',
      opts: ['Start, Timeout, Promise, End', 'Start, End, Timeout, Promise', 'Start, End, Promise, Timeout', 'Start, Promise, Timeout, End'],
      correct: 2,
      explain: 'סדר העדפויות בלולאת האירועים: 1. קוד סינכרוני (Start, End). 2. תור המיקרו-משימות - Microtasks (Promise.then). 3. תור המקרו-משימות - Macrotasks (setTimeout).'
    },
    {
      code: 'const p = new Promise(() => {});\nconsole.log(p);',
      q: 'באיזה מצב (State) יימצא ה-Promise הבא?',
      opts: ['pending', 'fulfilled', 'rejected', 'resolved'],
      correct: 0,
      explain: 'ה-Promise נוצר אך פונקציות ה-resolve או reject מעולם לא נקראו בתוכו, לכן הוא נשאר במצב ההתחלתי שלו - pending.'
    },
    {
      code: 'const p = Promise.allSettled([\n  Promise.resolve(1),\n  Promise.reject("Error")\n]);\np.then(res => console.log(res.length));',
      q: 'מה יהיה אורך המערך res המוחזר ב-allSettled?',
      opts: ['1', '2', '0', 'שגיאה'],
      correct: 1,
      explain: 'בניגוד ל-Promise.all, המתודה Promise.allSettled ממתינה לסיום של כל המודולים (בין אם הצליחו או נכשלו) ומחזירה תמיד מערך עם הסטטוס והערך של כל אחד מהם.'
    },
    {
      code: 'async function test() {\n  const a = await Promise.resolve(5);\n  return a;\n}',
      q: 'מהו הטיפוס של הערך שמוחזר על ידי הקריאה test()?',
      opts: ['number', 'Promise', 'undefined', 'object'],
      correct: 1,
      explain: 'זכור שפונקציית async תמיד מחזירה Promise. למרות שהשתמשנו ב-await בפנים, הקריאה החיצונית לפונקציה מחזירה Promise שיש לפתור.'
    },
    {
      code: 'const p = Promise.resolve(5);\nconst r = await p; // מבוצע מחוץ לפונקציה ב-Node.js מודרני',
      q: 'כיצד נקרא השימוש ב-await מחוץ לפונקציית async?',
      opts: ['Top-level await', 'Global await', 'Dynamic await', 'שגיאת סינטקס'],
      correct: 0,
      explain: 'בגרסאות Node.js ודפדפנים מודרניים, מותר להשתמש ב-await בסקופ הגלובלי של מודולים ללא עטיפת async. תכונה זו נקראת Top-level await.'
    },
    {
      code: 'const p = new Promise((res, rej) => {\n  res(1);\n  rej(2);\n});\np.then(x => console.log(x));',
      q: 'מה יודפס למסך?',
      opts: ['1', '2', 'שגיאה', 'undefined'],
      correct: 0,
      explain: 'מצב של Promise יכול להשתנות פעם אחת בלבד. ברגע שנקראה הפונקציה res(1), ה-Promise עבר למצב fulfilled וכל קריאה נוספת ל-rej(2) תתעלם לחלוטין.'
    },
    {
      code: 'let p = Promise.resolve(1);\np.then(x => { console.log(x); return x + 1; });\np.then(x => { console.log(x); });',
      q: 'מה יהיו שתי ההדפסות בהתאמה?',
      opts: ['1, 2', '1, 1', '2, 2', 'שגיאה'],
      correct: 1,
      explain: 'אנו מבצעים שרשור של שני מאזיני then נפרדים על אותו אובייקט p המקורי (ולא משרשרים אותם זה אחר זה). לכן שניהם מקבלים את הערך המקורי של p שהוא 1.'
    },
    {
      code: 'Promise.resolve(1)\n  .then(x => { return Promise.resolve(x + 1); })\n  .then(x => console.log(x));',
      q: 'מה יודפס למסך?',
      opts: ['2', 'Promise { 2 }', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'אם פונקציה בתוך then מחזירה Promise בעצמה, שרשרת ה-Promises ממתינה לו באופן אוטומטי (Flattening) ומעבירה ל-then הבא את הערך הפתור שלו (2).'
    }
  ],
  eventLoop: [
    {
      code: 'console.log("1");\nsetTimeout(() => console.log("2"), 0);\nconsole.log("3");',
      q: 'מה יהיה סדר ההדפסות?',
      opts: ['1, 2, 3', '1, 3, 2', '3, 1, 2', 'שגיאה'],
      correct: 1,
      explain: 'גם אם נקבע זמן המתנה של 0ms ב-setTimeout, הוא נשלח לתור המשימות (Callback Queue) וממתין לסיום מלא של כל הקוד הסינכרוני ב-Call Stack. לכן 3 יודפס לפני 2.'
    },
    {
      code: 'console.log("1");\nprocess.nextTick(() => console.log("2"));\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");',
      q: 'מהו סדר ההדפסות ב-Node.js?',
      opts: ['1, 4, 2, 3', '1, 4, 3, 2', '1, 2, 3, 4', '1, 2, 4, 3'],
      correct: 0,
      explain: 'ב-Node.js, לתור של process.nextTick יש עדיפות עליונה והוא מבוצע מיד לאחר סיום הקוד הסינכרוני ולפני תור ה-Microtasks האחרים (כמו Promises). לכן 2 יודפס לפני 3.'
    },
    {
      code: 'setTimeout(() => console.log("Timeout"), 10);\nconst start = Date.now();\nwhile(Date.now() - start < 50) {}\nconsole.log("Done");',
      q: 'מתי תודפס המילה Timeout ביחס למילה Done?',
      opts: ['Timeout תודפס קודם', 'Done תודפס קודם', 'שתיהן יחד', 'שגיאה'],
      correct: 1,
      explain: 'למרות שהגדרנו רק 10ms ל-Timeout והלולאה הסינכרונית רצה 50ms, ה-Timeout אינו יכול להידחף באמצע הריצה הסינכרונית של ה-Call Stack. ה-Stack חייב להתפנות לחלוטין, ולכן Done יודפס קודם.'
    },
    {
      code: 'setTimeout(() => console.log("A"), 0);\nsetImmediate(() => console.log("B"));',
      q: 'בסביבת Node.js, מה יהיה סדר ההדפסה של שתי המשימות?',
      opts: ['A תמיד לפני B', 'B תמיד לפני A', 'לא קבוע (תלוי במנוע ובביצועי המערכת)', 'שגיאה'],
      correct: 2,
      explain: 'סדר הריצה של setTimeout(0) ו-setImmediate בסקופ הגלובלי אינו דטרמיניסטי ותלוי בעומס המעבד ובביצועי המחשב ברגע הריצה.'
    },
    {
      code: 'const fs = require("fs");\nfs.readFile(__filename, () => {\n  setTimeout(() => console.log("Timeout"), 0);\n  setImmediate(() => console.log("Immediate"));\n});',
      q: 'מתי יודפס Immediate ביחס ל-Timeout בתוך פונקציית I/O Callback?',
      opts: ['Immediate תמיד ראשון', 'Timeout תמיד ראשון', 'לא קבוע', 'שגיאה'],
      correct: 0,
      explain: 'בתוך קולבק של I/O, שלב ה-Check (שבו מורץ setImmediate) מבוצע תמיד לפני שלב ה-Timers (שבו מורץ setTimeout). לכן Immediate יודפס תמיד ראשון במקרה זה.'
    },
    {
      code: 'console.log("A");\nsetTimeout(() => console.log("B"), 100);\nsetTimeout(() => console.log("C"), 50);',
      q: 'מה יהיה סדר ההדפסות?',
      opts: ['A, B, C', 'A, C, B', 'C, A, B', 'B, A, C'],
      correct: 1,
      explain: 'ה-Timeout של 50ms מסיים את זמן ההמתנה שלו ב-Timer Thread ונכנס לקולבק קיו לפני ה-Timeout של 100ms, לכן C יודפס לפני B.'
    },
    {
      code: 'Promise.resolve().then(() => {\n  console.log("A");\n  Promise.resolve().then(() => console.log("B"));\n});\nsetTimeout(() => console.log("C"), 0);',
      q: 'מה יהיה סדר ההדפסות?',
      opts: ['A, B, C', 'A, C, B', 'C, A, B', 'שגיאה'],
      correct: 0,
      explain: 'לולאת האירועים ממשיכה לרוקן לחלוטין את תור ה-Microtasks לפני מעבר לתור הבא (Macrotasks). לכן תת-המשימה B שנוספה למיקרו-טאסקס תרוץ לפני C.'
    },
    {
      code: 'console.log(process.hrtime());',
      q: 'באיזה מודול/פונקציה נשתמש ב-Node.js למדידת זמן מדויקת ברמת ננו-שניות?',
      opts: ['Date.now()', 'performance.now()', 'process.hrtime()', 'console.time()'],
      correct: 2,
      explain: 'הפונקציה process.hrtime() (High-Resolution Time) מחזירה זמן מדויק ברמת ננו-שניות ואינה מושפעת משינויי שעון המערכת.'
    },
    {
      code: 'console.log(1);\nsetTimeout(() => {\n  console.log(2);\n  process.nextTick(() => console.log(3));\n}, 0);\nsetTimeout(() => console.log(4), 0);',
      q: 'מה יהיה סדר ההדפסה?',
      opts: ['1, 2, 4, 3', '1, 2, 3, 4', '1, 4, 2, 3', 'שגיאה'],
      correct: 1,
      explain: 'לאחר הרצת הקולבק הראשון של ה-Timeout (הדפסת 2), ה-nextTick שנרשם מבוצע מיד בסיום הקולבק הנוכחי ולפני שהלולאה עוברת לקולבק הבא של ה-Timeout השני (4). לכן יודפס 3 לפני 4.'
    },
    {
      code: 'let stop = false;\nsetTimeout(() => stop = true, 100);\nwhile(!stop) {}\nconsole.log("Stopped");',
      q: 'מה יקרה בהרצת הקוד הבא?',
      opts: ['התוכנית תיעצר אחרי 100ms ויודפס Stopped', 'לולאה אינסופית והתוכנית לא תיעצר לעולם', 'ReferenceError', 'שגיאה במובייל'],
      correct: 1,
      explain: 'בגלל ש-JavaScript היא Single Threaded, לולאת ה-while הסינכרונית חוסמת את ה-Thread לחלוטין ומעולם לא מאפשרת ל-setTimeout האסינכרוני לעדכן את stop. לכן זו לולאה אינסופית.'
    },
    {
      code: 'let a = 1;\nsetTimeout(() => a = 2, 0);\nconsole.log(a);',
      q: 'מה יודפס למסך?',
      opts: ['1', '2', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'ההדפסה סינכרונית ומתבצעת מיידית, בעוד שעדכון הערך ל-2 נדחה לסוף ה-Event Loop דרך ה-setTimeout. לכן יודפס 1.'
    },
    {
      code: 'Promise.resolve().then(() => {\n  while(true) {}\n});\nsetTimeout(() => console.log("Timeout"), 10);',
      q: 'האם ה-setTimeout יופעל בסיום זמן ההמתנה?',
      opts: ['כן', 'לא, ה-Thread חסום על ידי ה-Microtask הלולאתי', 'כן, במנועי Node.js מודרניים', 'שגיאה בזמן ריצה'],
      correct: 1,
      explain: 'לולאת מיקרו-משימות שחוסמת את ה-Thread תמנע גם היא לחלוטין את הרצת תור ה-Macrotasks (ה-setTimeout), והתוכנית תקפא.'
    },
    {
      code: 'setTimeout(() => console.log("A"), 0);\n// קוד כבד שלוקח 20ms\nsetTimeout(() => console.log("B"), 10);',
      q: 'מה יהיה סדר ההדפסות?',
      opts: ['A, B', 'B, A', 'לא קבוע', 'שגיאה'],
      correct: 0,
      explain: 'ה-Timeout של A נרשם ראשון בקולבק קיו. גם אם המעבד היה עסוק 20ms, שניהם פגי תוקף והלולאה מרוקנת אותם לפי סדר כניסתם, לכן A יודפס ראשון.'
    },
    {
      code: 'const intervalId = setInterval(() => {}, 1000);\nclearInterval(intervalId);',
      q: 'באיזה מזהה משתמשים כדי לעצור פעולת setInterval?',
      opts: ['ה-ID המוחזר מפעולת ה-setInterval', 'שם הפונקציה', 'null', 'process.exit()'],
      correct: 0,
      explain: 'הפונקציה setInterval מחזירה מזהה ייחודי (ID) אותו יש להעביר לפונקציה clearInterval כדי להפסיק את הריצה החוזרת.'
    }
  ],
  vanillaServer: [
    {
      code: 'const http = require("http");\nconst server = http.createServer((req, res) => {\n  res.end("Hi");\n});',
      q: 'מהו הפרמטר req המועבר לפונקציה של השרת?',
      opts: ['אובייקט מסוג IncomingMessage המייצג את בקשת הלקוח', 'אובייקט מסוג ServerResponse המייצג את תשובת השרת', 'מחרוזת ה-URL', 'פונקציית קולבק'],
      correct: 0,
      explain: 'הפרמטר הראשון req (Request) הוא מופע של http.IncomingMessage המאפשר לקרוא כותרות, מתודה ונתונים שהלקוח שלח.'
    },
    {
      code: 'const server = http.createServer((req, res) => {\n  res.write("Hello");\n  res.end();\n});',
      q: 'מה תפקיד הפונקציה res.end()?',
      opts: ['לסגור את חיבור ה-TCP', 'לאותת ללקוח שכל המידע נשלח והתשובה הסתיימה', 'למחוק את הזיכרון של השרת', 'שגיאה'],
      correct: 1,
      explain: ' res.end() הוא חובה כדי להודיע לדפדפן שהשרת סיים להעביר את הנתונים, אחרת החיבור יישאר פתוח והדפדפן ימשיך להמתין עד לקריסה.'
    },
    {
      code: 'const server = http.createServer((req, res) => {\n  res.setHeader("Content-Type", "application/json");\n  res.end({ id: 1 });\n});',
      q: 'האם הקוד הבא תקין ומה יקרה בהרצתו?',
      opts: ['השרת יחזיר אובייקט JSON תקין', 'השרת יקרוס עקב TypeError (על res.end לקבל string או Buffer)', 'השרת יחזיר undefined', 'שגיאה בקובץ השרת'],
      correct: 1,
      explain: 'המתודה res.end() (או res.write()) מצפה לקבל מחרוזת טקסט או Buffer. העברת אובייקט ישירות תזרוק שגיאת TypeError ותקריס את השרת. יש לבצע JSON.stringify.'
    },
    {
      code: 'res.writeHead(200, { "Content-Type": "text/plain" });',
      q: 'מהו ההבדל בין writeHead ל-setHeader?',
      opts: ['אין הבדל', 'writeHead כותב מיד את כותרות ה-HTTP והסטטוס ל-stream, בעוד ש-setHeader רק מכין אותם בזיכרון עד לשליחה', 'setHeader מהיר יותר', 'שגיאה'],
      correct: 1,
      explain: ' writeHead שולח את כותרות ה-HTTP ואת הסטטוס קוד באופן מיידי ללקוח. לאחר הפעלתו, לא ניתן להשתמש עוד ב-setHeader.'
    },
    {
      code: 'const server = http.createServer((req, res) => {\n  console.log(req.url);\n});',
      q: 'מה מייצג req.url עבור הבקשה `http://localhost:3000/users?id=5`?',
      opts: ['"http://localhost:3000/users?id=5"', '"/users?id=5"', '"/users"', '"?id=5"'],
      correct: 1,
      explain: 'השדה req.url ב-Node.js מכיל רק את נתיב הפנייה הפנימי ואת ה-Query string, ללא הפרוטוקול וההוסט.'
    },
    {
      code: 'const server = http.createServer((req, res) => {\n  res.statusCode = 404;\n  res.end();\n});',
      q: 'איזה סטטוס קוד יוחזר ללקוח בדוגמה הבאה?',
      opts: ['200', '404', '500', 'ללא סטטוס קוד'],
      correct: 1,
      explain: 'קביעת res.statusCode מעדכנת את קוד הסטטוס של התגובה. 404 מייצג Not Found.'
    },
    {
      code: 'const url = require("url");\nconst q = url.parse("/users?id=5", true).query;\nconsole.log(q.id);',
      q: 'מה יהיה הפלט?',
      opts: ['5', '"5"', 'undefined', 'שגיאה'],
      correct: 1,
      explain: 'העברת הארגומנט true לפונקציה url.parse מנחה אותה לפרסר את ה-Query string לאובייקט. הערכים תמיד מוחזרים כמחרוזות, לכן נקבל "5".'
    },
    {
      code: 'const server = http.createServer((req, res) => {\n  console.log(req.method);\n});',
      q: 'אילו ערכים מוחזרים ב-req.method בדרך כלל?',
      opts: ['get / post (אותיות קטנות)', 'GET / POST (אותיות גדולות)', '0 / 1', 'שגיאה במובייל'],
      correct: 1,
      explain: 'מתודת הבקשה ב-req.method תמיד מוחזרת באותיות גדולות (Uppercase), למשל GET, POST, DELETE וכו\'.'
    },
    {
      code: 'const server = http.createServer((req, res) => {\n  console.log(req.headers["content-type"]);\n});',
      q: 'כיצד נשמרים מפתחות הכותרות ב-req.headers ב-Node.js?',
      opts: ['באותיות קטנות בלבד (Lowercase)', 'בדיוק כפי שנשלחו על ידי הלקוח', 'באותיות גדולות (Uppercase)', 'שגיאה'],
      correct: 0,
      explain: 'Node.js מפרסר אוטומטית את כל מפתחות ה-headers לאותיות קטנות כדי להקל על הפיתוח ולמנוע שגיאות כתיב.'
    },
    {
      code: 'const server = http.createServer((req, res) => {\n  res.end();\n});\nserver.listen(3000);',
      q: 'מה קורה אם מנסים להאזין (listen) לפורט 3000 כאשר שרת אחר כבר מאזין לו במחשב?',
      opts: ['השרת יחליף את השרת הקודם באופן אוטומטי', 'תיזרק שגיאה עם קוד EADDRINUSE והשרת יקרוס', 'השרתים יעבדו במשותף על אותו פורט', 'שגיאה'],
      correct: 1,
      explain: 'פורט TCP יכול להיות מוקצה לתהליך יחיד בלבד בכל רגע. ניסיון להאזין לפורט תפוס יזרוק שגיאת מערכת EADDRINUSE (Address already in use).'
    },
    {
      code: 'const server = http.createServer((req, res) => {\n  console.log(req instanceof require("stream").Readable);\n});',
      q: 'האם req (IncomingMessage) הוא זרם קריא (Readable Stream)?',
      opts: ['true', 'false', 'undefined', 'שגיאה במערכת'],
      correct: 0,
      explain: 'בקשת הלקוח היא Readable Stream של נתוני TCP. לכן נוכל להאזין לאירועי data ו-end כדי לקבל את גוף הבקשה.'
    },
    {
      code: 'const server = http.createServer((req, res) => {\n  console.log(res instanceof require("stream").Writable);\n});',
      q: 'האם res (ServerResponse) הוא זרם כתיבה (Writable Stream)?',
      opts: ['true', 'false', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'תשובת השרת היא Writable Stream. אנו כותבים אליה נתונים באמצעות write() ומסיימים אותה באמצעות end().'
    },
    {
      code: 'res.statusCode = 500;',
      q: 'מה מייצג קוד סטטוס 500 ב-HTTP?',
      opts: ['Unauthorized', 'Internal Server Error', 'Bad Request', 'Gateway Timeout'],
      correct: 1,
      explain: 'סטטוס 500 מייצג שגיאה פנימית בשרת (Internal Server Error) - משהו השתבש בקוד של השרת עצמו.'
    },
    {
      code: 'res.statusCode = 201;',
      q: 'ומה מייצג קוד סטטוס 201?',
      opts: ['OK (בקשה הצליחה)', 'Created (משאב נוצר בהצלחה)', 'Accepted', 'No Content'],
      correct: 1,
      explain: 'סטטוס 201 מייצג יצירה מוצלחת של משאב (Created), והוא מוחזר בדרך כלל בתשובה לבקשות POST.'
    }
  ],
  express: [
    {
      code: 'const express = require("express");\nconst app = express();\napp.use(express.json());',
      q: 'מהו התפקיד של השורה app.use(express.json())?',
      opts: ['לאפשר הגדרת נתיבי JSON', 'לאפשר פרסור אוטומטי של JSON ב-Request Body לתוך req.body', 'לסגור את השרת בשגיאות', 'לשלוח תשובות JSON'],
      correct: 1,
      explain: ' express.json() הוא Middleware מובנה של Express המפרסר את גוף הבקשה אם הוא מטיפוס application/json ושומר את האובייקט בתוך req.body.'
    },
    {
      code: 'app.get("/users/:id", (req, res) => {\n  console.log(req.params.id);\n});',
      q: 'מניין מגיע המשתנה id עבור הבקשה GET `/users/42`?',
      opts: ['req.query', 'req.body', 'req.params', 'req.headers'],
      correct: 2,
      explain: 'משתני נתיב דינמיים המוגדרים עם נקודתיים (like :id) מחולצים אוטומטית על ידי Express ונשמרים בתוך req.params.'
    },
    {
      code: 'app.get("/search", (req, res) => {\n  console.log(req.query.q);\n});',
      q: 'מניין מגיע המשתנה q עבור הבקשה `/search?q=Natan`?',
      opts: ['req.params', 'req.query', 'req.body', 'req.headers'],
      correct: 1,
      explain: 'פרמטרי שאילתה ב-URL (שאחרי סימן השאלה ?) מפוענחים על ידי Express לאובייקט ונשמרים בתוך req.query.'
    },
    {
      code: 'app.use((req, res, next) => {\n  console.log("A");\n  next();\n});',
      q: 'מהו התפקיד של הפונקציה next() בתוך Middleware ב-Express?',
      opts: ['לסיים את התגובה ולשלוח אותה לדפדפן', 'להעביר את הטיפול ל-Middleware/Route הבא בתור', 'למחוק את ה-cache', 'שגיאה'],
      correct: 1,
      explain: 'אם Middleware לא מסיים את הבקשה בעצמו (למשל על ידי res.send), הוא חייב לקרוא ל-next() כדי להעביר את הריצה לפונקציה הבאה בתור. אחרת השרת ייתקע.'
    },
    {
      code: 'app.use((err, req, res, next) => {\n  res.status(500).send("Error");\n});',
      q: 'כיצד Express מזהה שפונקציה זו היא Error Handling Middleware?',
      opts: ['בגלל השם של המשתנה err', 'בגלל שהיא מוגדרת בסוף הקובץ', 'מכיוון שיש לה בדיוק 4 פרמטרים בחתימת הפונקציה', 'בגלל שימוש ב-app.use'],
      correct: 2,
      explain: 'Express בודקת את אורך החתימה של פונקציית ה-Middleware. אם מוגדרים לה בדיוק 4 ארגומנטים (err, req, res, next), היא מתייחסת אליה כמטפלת שגיאות.'
    },
    {
      code: 'app.get("/data", (req, res) => {\n  res.send({ id: 1 });\n});',
      q: 'איזה Content-Type ייקבע אוטומטית על ידי res.send עבור אובייקט?',
      opts: ['text/plain', 'application/json', 'text/html', 'לא ייקבע'],
      correct: 1,
      explain: 'המתודה res.send() של Express בודקת את סוג הקלט. אם מועבר אובייקט או מערך, היא קובעת אוטומטית כותרת Content-Type של application/json.'
    },
    {
      code: 'app.get("/download", (req, res) => {\n  res.json(5);\n});',
      q: 'האם הקוד הבא תקין ומה יוחזר ללקוח?',
      opts: ['יוחזר המספר 5 כ-JSON תקין', 'השרת יקרוס עקב TypeError', 'יוחזר undefined', 'שגיאה בזמן ריצה'],
      correct: 0,
      explain: 'המתודה res.json() מיועדת להחזרת JSON ומבצעת המרה תקינה לכל ערך (כולל מספרים, מחרוזות ומערכים) ללא קריסה.'
    },
    {
      code: 'app.get("/route", (req, res) => {\n  res.send("A");\n  res.send("B");\n});',
      q: 'מה יקרה בהפעלת הנתיב הבא?',
      opts: ['הלקוח יקבל "AB"', 'הלקוח יקבל "A" ובקונסול תיזרק שגיאה: Cannot set headers after they are sent to the client', 'הלקוח יקבל "B"', 'שגיאה והשרת יקרוס מיידית'],
      correct: 1,
      explain: 'לא ניתן לשלוח שתי תגובות נפרדות עבור בקשה אחת. הקריאה הראשונה ל-res.send מסיימת את התשובה ושולחת כותרות. הקריאה השנייה תנסה לכתוב שוב ותזרוק שגיאת מערכת.'
    },
    {
      code: 'const router = express.Router();\nrouter.get("/list", ...);\napp.use("/users", router);',
      q: 'מהו הנתיב המלא לקריאת ה-Router בדוגמה הבאה?',
      opts: ['/list', '/users', '/users/list', '/list/users'],
      correct: 2,
      explain: 'השימוש ב-Router מצמיד תחילית (Prefix). מאחר וה-Router הוצמד ל- /users, והנתיב הפנימי שלו הוא /list, הנתיב הסופי הוא /users/list.'
    },
    {
      code: 'app.post("/heroes/search", (req, res) => {\n  const { powers } = req.body;\n  // allHeroes = [{ name: "A", powers: ["fly", "laser"] }]\n  const r = allHeroes.filter(h => h.powers.some(p => powers.includes(p)));\n});',
      q: 'בפרויקט VIGIL, מהי המשמעות הלוגית של בדיקת powers.some(p => powers.includes(p))?',
      opts: ['הגיבור חייב להחזיק בכל היכולות שברשימה (AND)', 'הגיבור צריך להחזיק לפחות באחת מהיכולות שברשימה (OR)', 'הגיבור לא מחזיק באף יכולת', 'שגיאת סינטקס'],
      correct: 1,
      explain: 'המתודה some() מחזירה true אם לפחות איבר אחד במערך מקיים את התנאי. זה מייצג יחס של "או" (OR) בין היכולות המבוקשות.'
    },
    {
      code: 'const avg = heroes.reduce((sum, h) => sum + h.threatLevel, 0) / heroes.length;',
      q: 'בפרויקט VIGIL, מהו תפקיד הפעולות לחישוב ממוצע רמת האיום?',
      opts: ['למצוא את הגיבור החזק ביותר', 'לסכום את רמת האיום של כל הגיבורים ולחלק בכמותם', 'למיין את הגיבורים', 'שגיאה במערך ריק'],
      correct: 1,
      explain: ' reduce משמש לסכימת ערכי threatLevel של כל הגיבורים, ולאחר מכן אנו מחלקים באורך המערך לקבלת ממוצע.'
    },
    {
      code: 'app.get("/heroes/:id", (req, res) => {\n  const hero = heroes.find(h => h.id === req.params.id);\n});',
      q: 'בפרויקט VIGIL, אם המזהה (id) בקובץ ה-JSON הוא מספר, והבקשה מגיעה כ-GET `/heroes/42`, מהי המלכודת הנפוצה?',
      opts: ['הקוד יעבוד מצוין', 'req.params.id הוא מחרוזת ("42") וההשוואה עם === למספר 42 תיכשל', 'undefined יוחזר', 'TypeError'],
      correct: 1,
      explain: 'כל נתוני ה-Params מגיעים ב-URL כמחרוזות (Strings). השוואה קפדנית === בין string למספר תיכשל. חובה לבצע המרה למספר: Number(req.params.id) או parseInt.'
    },
    {
      code: 'app.use(express.static("public"));',
      q: 'מה תפקיד ה-Middleware המובנה express.static?',
      opts: ['לנעול קבצים שלא ישתנו', 'להגיש קבצים סטטיים (כמו HTML, CSS, תמונות) מתוך התיקייה שנבחרה באופן אוטומטי', 'לפרסר קלט', 'שגיאה'],
      correct: 1,
      explain: ' express.static מאפשר להגיש קבצים סטטיים לדפדפן ישירות מתיקייה מקומית ללא צורך בכתיבת נתיבים ידנית לכל קובץ.'
    },
    {
      code: 'app.all("*", (req, res) => res.status(404).send());',
      q: 'מהו התפקיד של נתיב זה המוגדר בסוף רשימת הנתיבים?',
      opts: ['לאפשר כניסה לכל הנתיבים', 'לתפוס את כל הבקשות לנתיבים שלא הוגדרו קודם לכן ולהחזיר שגיאת 404', 'לסגור את השרת', 'שגיאה במובייל'],
      correct: 1,
      explain: ' app.all("*") מאזין לכל סוגי הבקשות (GET, POST וכו\') ובגלל הכוכבית תופס כל נתיב שלא נתפס על ידי הגדרות קודמות, ומחזיר 404.'
    }
  ],
  arrayMethods: [
    {
      code: 'const arr = [1, 2, 3];\nconst r = arr.map(x => x * 2);\nconsole.log(r, arr);',
      q: 'מה יהיו ערכי r ו-arr בהתאמה?',
      opts: ['[2, 4, 6], [2, 4, 6]', '[2, 4, 6], [1, 2, 3]', '[1, 2, 3], [1, 2, 3]', 'שגיאה'],
      correct: 1,
      explain: 'המתודה map() מייצרת ומחזירה מערך חדש ואינה משנה (mutate) את המערך המקורי עליו היא הופעלה.'
    },
    {
      code: 'const arr = [1, 2, 3, 4];\nconst r = arr.filter(x => x % 2 === 0);\nconsole.log(r);',
      q: 'מה יהיה פלט הסינון של המערך?',
      opts: ['[1, 3]', '[2, 4]', '2', '[1, 2, 3, 4]'],
      correct: 1,
      explain: 'המתודה filter() מחזירה מערך חדש המכיל אך ורק את האיברים עבורם פונקציית התנאי החזירה true (במקרה זה, מספרים זוגיים).'
    },
    {
      code: 'const arr = [1, 2, 3, 4];\nconst r = arr.reduce((sum, x) => sum + x, 0);\nconsole.log(r);',
      q: 'מה יהיה פלט ה-reduce הבא?',
      opts: ['10', '0', '24', 'undefined'],
      correct: 0,
      explain: 'המתודה reduce סוכמת את איברי המערך: 0 + 1 + 2 + 3 + 4 = 10.'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst r = arr.find(x => x > 1);\nconsole.log(r);',
      q: 'מה יהיה ערכו של r?',
      opts: ['[2, 3]', '2', '3', 'undefined'],
      correct: 1,
      explain: 'המתודה find() מחזירה את האיבר הראשון במערך שמקיים את התנאי. למרות שגם 3 גדול מ-1, הראשון שמתגלה הוא 2 ולכן הוא יוחזר.'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst r = arr.findIndex(x => x > 1);\nconsole.log(r);',
      q: 'מה יהיה ערך האינדקס r כעת?',
      opts: ['1', '2', '0', '-1'],
      correct: 0,
      explain: 'המתודה findIndex() מחזירה את האינדקס (מיקום) של האיבר הראשון שמקיים את התנאי. המספר 2 נמצא באינדקס 1 (כי הספירה מתחילה מ-0).'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst r = arr.some(x => x > 2);\nconsole.log(r);',
      q: 'מה יהיה הפלט?',
      opts: ['true', 'false', '3', 'undefined'],
      correct: 0,
      explain: 'המתודה some() מחזירה true אם לפחות איבר אחד במערך מקיים את התנאי (במקרה זה 3 גדול מ-2, ולכן יוחזר true).'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst r = arr.every(x => x > 0);\nconsole.log(r);',
      q: 'מה יהיה הפלט עבור every()?',
      opts: ['true', 'false', '1', 'undefined'],
      correct: 0,
      explain: 'המתודה every() מחזירה true אך ורק אם כל האיברים במערך מקיימים את התנאי הנתון. מאחר וכל המספרים 1, 2, 3 גדולים מ-0, נקבל true.'
    },
    {
      code: 'const arr = [1, 2, 3];\nconsole.log(arr.includes(2));',
      q: 'מה הפלט?',
      opts: ['true', 'false', '1', 'undefined'],
      correct: 0,
      explain: 'המתודה includes() בודקת האם הערך המבוקש קיים כאיבר בתוך המערך ומחזירה true/false בהתאם.'
    },
    {
      code: 'const arr = [1, 2, 3, 4, 5];\nconst r = arr.slice(1, 4);\nconsole.log(r);',
      q: 'מה יהיה פלט ה-slice הבא?',
      opts: ['[1, 2, 3, 4]', '[2, 3, 4]', '[2, 3, 4, 5]', '[1, 2, 3]'],
      correct: 1,
      explain: 'המתודה slice(start, end) מחלצת איברים החל מאינדקס start (כולל) ועד אינדקס end (לא כולל). לכן אינדקסים 1, 2, 3 יוחזרו: [2, 3, 4].'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst r = arr.splice(1, 1, 9);\nconsole.log(arr, r);',
      q: 'מה יהיו ערכי arr ו-r לאחר ביצוע splice?',
      opts: ['[1, 9, 3], [2]', '[1, 2, 3], [9]', '[1, 9, 3], [9]', 'שגיאה'],
      correct: 0,
      explain: 'המתודה splice(start, count, items) משנה את המערך המקורי: היא מוחקת מחק מאינדקס 1 כמות של 1 איברים (שומרת אותם במערך r המוחזר), ומכניסה במקומם את המספר 9.'
    },
    {
      code: 'const arr = [1, 2];\narr.push(3);\nconst r = arr.pop();\nconsole.log(r, arr);',
      q: 'מה יהיו ערכי r ו-arr בהתאמה?',
      opts: ['3, [1, 2]', '2, [1, 2, 3]', '3, [1, 2, 3]', 'שגיאה'],
      correct: 0,
      explain: 'הפעולה push מוסיפה איבר לסוף המערך, ו-pop מסירה ומחזירה את האיבר האחרון במערך. לכן arr חוזר להיות [1, 2] ו-r הוא 3.'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst r = arr.shift();\nconsole.log(r, arr);',
      q: 'מה יהיו ערכי r ו-arr בהתאמה לאחר שימוש ב-shift()?',
      opts: ['1, [2, 3]', '3, [1, 2]', '1, [1, 2, 3]', 'שגיאה'],
      correct: 0,
      explain: 'המתודה shift() מסירה ומחזירה את האיבר הראשון במערך. המערך המקורי מתקצר.'
    },
    {
      code: 'const arr = [2, 3];\narr.unshift(1);\nconsole.log(arr);',
      q: 'מה יהיה ערך המערך לאחר שימוש ב-unshift()?',
      opts: ['[2, 3, 1]', '[1, 2, 3]', '[2, 1, 3]', 'שגיאה'],
      correct: 1,
      explain: 'המתודה unshift() מוסיפה את האיברים שניתנו לה לתחילת המערך (ומחזירה את האורך החדש של המערך).'
    },
    {
      code: 'const arr = [1, [2, [3]]];\nconsole.log(arr.flat(2));',
      q: 'מה יהיה הפלט של שימוש במתודה flat() ברמת עומק 2?',
      opts: ['[1, 2, 3]', '[1, [2, 3]]', '[1, 2, [3]]', 'שגיאה'],
      correct: 0,
      explain: 'המתודה flat(depth) משטחת מערכים מקוננים לרמה אחת ישרה לפי עומק השכבות שהוגדר לה. עומק 2 ישטח את [3] ואת [2] לחלוטין.'
    }
  ],
  stringMethods: [
    {
      code: 'const str = "Hello World";\nconsole.log(str.indexOf("o"));',
      q: 'מה יהיה אינדקס המיקום של האות o הראשונה?',
      opts: ['4', '5', '7', '-1'],
      correct: 0,
      explain: 'הספירה מתחילה מ-0: H=0, e=1, l=2, l=3, o=4.'
    },
    {
      code: 'const str = "a,b,c";\nconsole.log(str.split(","));',
      q: 'מה יהיה פלט הפעולה split?',
      opts: ['["a", "b", "c"]', '["a,b,c"]', '"abc"', 'שגיאה'],
      correct: 0,
      explain: 'המתודה split(separator) מפרקת את המחרוזת למערך של תתי-מחרוזות לפי הסימן המפריד שסופק.'
    },
    {
      code: 'const str = "Natan";\nconsole.log(str.slice(1, 3));',
      q: 'מה יהיה פלט ה-slice של המחרוזת?',
      opts: ['"at"', '"ata"', '"ta"', '"nat"'],
      correct: 0,
      explain: ' slice(start, end) מחלץ תווים מאינדקס 1 (כולל) ועד אינדקס 3 (לא כולל): a=1, t=2. לכן יוחזר "at".'
    },
    {
      code: 'const str = "Natan";\nconsole.log(str.substring(3, 1));',
      q: 'מה יהיה הפלט של substring במקרה זה (אינדקס התחלה גדול מאינדקס סוף)?',
      opts: ['"at"', '""', 'שגיאה', 'undefined'],
      correct: 0,
      explain: 'המתודה substring() היא חכמה: אם אינדקס ההתחלה גדול מאינדקס הסוף, היא מחליפה ביניהם אוטומטית ומבצעת substring(1, 3) שמחזיר "at".'
    },
    {
      code: 'const str = "Java script";\nconsole.log(str.replace(" ", ""));',
      q: 'מה יהיה הפלט?',
      opts: ['"Javascript"', '"Java script"', '""', 'שגיאה'],
      correct: 0,
      explain: 'המתודה replace(target, replacement) מחליפה את המופע הראשון של מחרוזת היעד במחרוזת החדשה. כאן החלפנו רווח במחרוזת ריקה.'
    },
    {
      code: 'const str = "a b a";\nconsole.log(str.replace("a", "x"));',
      q: 'מה יהיה הפלט?',
      opts: ['"x b x"', '"x b a"', '"a b x"', 'שגיאה'],
      correct: 1,
      explain: 'המתודה replace() הרגילה מחליפה אך ורק את המופע **הראשון** של הערך הנתון. לכן ה-a השני נשאר ללא שינוי.'
    },
    {
      code: 'const str = "a b a";\nconsole.log(str.replaceAll("a", "x"));',
      q: 'ומה יהיה הפלט בשימוש ב-replaceAll()?',
      opts: ['"x b x"', '"x b a"', '"a b x"', 'שגיאה'],
      correct: 0,
      explain: 'המתודה replaceAll() מחליפה את **כל** המופעים הקיימים של מחרוזת היעד במחרוזת החדשה.'
    },
    {
      code: 'const str = "  Natan  ";\nconsole.log(str.trim());',
      q: 'מה תפקיד הפעולה trim()?',
      opts: ['למחוק רווחים מתחילת ומסוף המחרוזת', 'למחוק את כל הרווחים במחרוזת', 'לספור תווים', 'שגיאה במובייל'],
      correct: 0,
      explain: 'המתודה trim() מסירה רווחים, טאבים וירידות שורה מתחילת המחרוזת ומסופה בלבד.'
    },
    {
      code: 'const str = "Natan Liani";\nconsole.log(str.includes("Lian"));',
      q: 'מה הפלט?',
      opts: ['true', 'false', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'המתודה includes() בודקת האם תת-המחרוזת המבוקשת נמצאת בתוך המחרוזת הראשית ומחזירה true/false.'
    },
    {
      code: 'const str = "Natan";\nconsole.log(str.startsWith("Na"));',
      q: 'מה הפלט?',
      opts: ['true', 'false', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'המתודה startsWith() בודקת האם המחרוזת מתחילה ברצף התווים המבוקש ומחזירה true/false.'
    },
    {
      code: 'const str = "Natan";\nconsole.log(str.endsWith("an"));',
      q: 'מה הפלט?',
      opts: ['true', 'false', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'המתודה endsWith() בודקת האם המחרוזת מסתיימת ברצף התווים המבוקש ומחזירה true/false.'
    },
    {
      code: 'const str = "Natan";\nconsole.log(str.toUpperCase());',
      q: 'מה יהיה הפלט?',
      opts: ['"natan"', '"NATAN"', '"Natan"', 'שגיאה'],
      correct: 1,
      explain: 'המתודה toUpperCase() מחזירה מחרוזת חדשה שבה כל התווים הומרו לאותיות גדולות (Capital letters).'
    },
    {
      code: 'const str = "Natan";\nconsole.log(str.toLowerCase());',
      q: 'מה יהיה הפלט?',
      opts: ['"natan"', '"NATAN"', '"Natan"', 'שגיאה'],
      correct: 0,
      explain: 'המתודה toLowerCase() מחזירה מחרוזת חדשה שבה כל התווים הומרו לאותיות קטנות.'
    },
    {
      code: 'const str = "Natan";\nconsole.log(str.charAt(2));',
      q: 'מה מחזירה הפעולה charAt(2)?',
      opts: ['"N"', '"a"', '"t"', '""'],
      correct: 2,
      explain: 'המתודה charAt(index) מחזירה את התו שנמצא באינדקס המבוקש (N=0, a=1, t=2).'
    }
  ],
  objectMethods: [
    {
      code: 'const obj = { name: "Natan", age: 25 };\nconsole.log(Object.keys(obj));',
      q: 'מה יהיה הפלט של Object.keys?',
      opts: ['["Natan", 25]', '["name", "age"]', '[["name", "Natan"], ["age", 25]]', 'שגיאה'],
      correct: 1,
      explain: 'הפעולה Object.keys(obj) מחזירה מערך המכיל את כל מפתחות השדות (Keys) הישירים של האובייקט.'
    },
    {
      code: 'const obj = { name: "Natan", age: 25 };\nconsole.log(Object.values(obj));',
      q: 'מה יהיה הפלט של Object.values?',
      opts: ['["Natan", 25]', '["name", "age"]', '[["name", "Natan"], ["age", 25]]', 'שגיאה'],
      correct: 0,
      explain: 'הפעולה Object.values(obj) מחזירה מערך המכיל את כל הערכים (Values) של שדות האובייקט.'
    },
    {
      code: 'const obj = { name: "Natan", age: 25 };\nconsole.log(Object.entries(obj));',
      q: 'מה יהיה הפלט של Object.entries?',
      opts: ['["Natan", 25]', '["name", "age"]', '[["name", "Natan"], ["age", 25]]', 'שגיאה'],
      correct: 2,
      explain: 'הפעולה Object.entries(obj) מחזירה מערך של מערכים, כאשר כל תת-מערך מורכב מזוג של [key, value].'
    },
    {
      code: 'const obj = { val: 5 };\nObject.freeze(obj);\nobj.val = 10;\nconsole.log(obj.val);',
      q: 'מה יהיה ערך השדה val לאחר ביצוע Object.freeze?',
      opts: ['5', '10', 'undefined', 'שגיאה (תחת Strict Mode תיזרק שגיאה)'],
      correct: 0,
      explain: 'הפעולה Object.freeze נועלת את האובייקט לחלוטין: לא ניתן לשנות ערכים, להוסיף שדות או למחוק שדות. במצב רגיל השינוי פשוט מתעלם ויודפס 5, ותחת Strict Mode תיזרק שגיאה.'
    },
    {
      code: 'const obj = { val: 5 };\nObject.seal(obj);\nobj.val = 10;\nobj.newVal = 20;\nconsole.log(obj.val, obj.newVal);',
      q: 'מה יהיה הפלט לאחר ביצוע Object.seal?',
      opts: ['10, 20', '10, undefined', '5, undefined', 'שגיאה'],
      correct: 1,
      explain: 'הפעולה Object.seal (חתימה) מונעת הוספה או מחיקה של שדות באובייקט, אך היא **כן מאפשרת לשנות ולעדכן** שדות קיימים. לכן val עודכן ל-10, בעוד newVal לא נוצר.'
    },
    {
      code: 'const target = { a: 1 };\nconst source = { b: 2 };\nObject.assign(target, source);\nconsole.log(target);',
      q: 'מה יהיה תוכן האובייקט target?',
      opts: ['{ a: 1 }', '{ b: 2 }', '{ a: 1, b: 2 }', 'שגיאה'],
      correct: 2,
      explain: 'הפעולה Object.assign מעתיקה את כל השדות של אובייקטי המקור (Source) לתוך אובייקט היעד (Target).'
    },
    {
      code: 'const obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 };\nconsole.log(obj2);',
      q: 'מה יהיה ערכו של obj2?',
      opts: ['{ obj1: { a: 1 }, b: 2 }', '{ a: 1, b: 2 }', '{ b: 2 }', 'שגיאה'],
      correct: 1,
      explain: 'שימוש באופרטור ה-Spread (...) מפרק את השדות של obj1 לתוך אובייקט obj2 החדש בצורה נוחה ומודרנית.'
    },
    {
      code: 'const obj = { a: 1 };\nconsole.log(obj.hasOwnProperty("a"));\nconsole.log(obj.hasOwnProperty("toString"));',
      q: 'מה יהיו פלטי שתי השורות בהתאמה?',
      opts: ['true, true', 'true, false', 'false, false', 'false, true'],
      correct: 1,
      explain: 'המתודה hasOwnProperty בודקת האם השדה שייך ישירות לאובייקט (Own Property) ולא הגיע בירושה דרך שרשרת הפרוטוטיפים. toString קיים בירושה אך לא ישירות על obj, לכן נקבל true ואז false.'
    },
    {
      code: 'const obj = { name: "Natan" };\nconsole.log(JSON.stringify(obj));',
      q: 'מה תפקיד הפעולה JSON.stringify?',
      opts: ['להפוך אובייקט למחרוזת טקסט בפורמט JSON', 'להפוך מחרוזת JSON לאובייקט JS', 'למחוק את האובייקט', 'שגיאה במובייל'],
      correct: 0,
      explain: 'הפעולה JSON.stringify הופכת אובייקט JS למחרוזת טקסט בפורמט JSON תקין.'
    },
    {
      code: 'const str = \'{"id": 1}\';\nconsole.log(JSON.parse(str).id);',
      q: 'מה תפקיד הפעולה JSON.parse?',
      opts: ['להפוך אובייקט למחרוזת טקסט', 'לפרסר מחרוזת JSON תקינה חזרה לאובייקט JS', 'להדפיס JSON', 'שגיאה'],
      correct: 1,
      explain: 'הפעולה JSON.parse מפרסרת מחרוזת טקסט המייצגת JSON ומחזירה אובייקט JS חי איתו ניתן לעבוד.'
    },
    {
      code: 'const obj = { a: 1, b: undefined, c: () => {} };\nconsole.log(JSON.stringify(obj));',
      q: 'מה יקרה לשדות undefined ופונקציות בביצוע JSON.stringify?',
      opts: ['הם יישארו רגיל במחרוזת', 'הם יימחקו ויושמטו מהמחרוזת המוחזרת', 'הם יגרמו לקריסת התוכנית בשגיאה', 'הם יומרו ל-null'],
      correct: 1,
      explain: 'מכיוון שפורמט JSON הסטנדרטי לא תומך בערכי undefined או בפונקציות, JSON.stringify משמיטה ומוחקת אותם אוטומטית מהאובייקט המומר.'
    },
    {
      code: 'const a = { val: 1 };\nconst b = { val: 1 };\nconsole.log(a === b);\nconsole.log(a == b);',
      q: 'מה יהיו תוצאות שתי ההשוואות?',
      opts: ['true, true', 'true, false', 'false, false', 'false, true'],
      correct: 2,
      explain: 'ב-JavaScript השוואת אובייקטים ומערכים (גם עם == וגם עם ===) בודקת שוויון מצביעים בזיכרון (Identity) ולא שוויון תכנים. מאחר ו-a ו-b הם אובייקטים נפרדים בזיכרון, שתי ההשוואות יחזירו false.'
    },
    {
      code: 'const obj = {};\nObject.defineProperty(obj, "x", {\n  value: 42,\n  writable: false\n});\nobj.x = 100;\nconsole.log(obj.x);',
      q: 'מה יהיה ערך obj.x?',
      opts: ['42', '100', 'undefined', 'שגיאה'],
      correct: 0,
      explain: 'באמצעות Object.defineProperty הגדרנו שדה x כאשר writable הוא false (לא ניתן לכתיבה). לכן ערכו נשאר נעול על 42.'
    },
    {
      code: 'const obj = { a: 1 };\nconsole.log("a" in obj);\nconsole.log("toString" in obj);',
      q: 'מה יהיו תוצאות שתי הבדיקות באמצעות האופרטור in?',
      opts: ['true, true', 'true, false', 'false, false', 'false, true'],
      correct: 0,
      explain: 'האופרטור in בודק האם השדה קיים באובייקט, והוא בודק **גם את שרשרת הפרוטוטיפים**. לכן toString מוחזר כ-true (כי הוא קיים בירושה מ-Object.prototype).'
    }
  ],
  sql: [
    {
      code: 'SELECT * FROM users;',
      q: 'מה מבצעת פקודת ה-SQL הבאה?',
      opts: ['שולפת את כל העמודות מכל הרשומות בטבלת users', 'מוחקת את טבלת users', 'מעדכנת את טבלת users', 'בוחרת רק עמודה אחת מטבלת users'],
      correct: 0,
      explain: 'הסמל כוכבית (*) מסמל "הכל", ולכן הפקודה שולפת את כל המידע הקיים בטבלת users.'
    },
    {
      code: 'CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50));',
      q: 'לאיזו משפחה של פקודות SQL שייכת הפקודה הזו?',
      opts: ['DDL (Data Definition Language)', 'DML (Data Manipulation Language)', 'DQL (Data Query Language)', 'DCL (Data Control Language)'],
      correct: 0,
      explain: 'פקודת CREATE נועדה להגדיר את מבנה מסד הנתונים (טבלאות, אינדקסים) ולכן היא חלק ממשפחת ה-DDL.'
    },
    {
      code: 'INSERT INTO users (name, age) VALUES ("Natan", 25);',
      q: 'מה תפקיד הפקודה INSERT INTO?',
      opts: ['הוספת רשומה (שורה) חדשה לטבלה', 'הוספת עמודה חדשה לטבלה', 'מחיקת רשומות מהטבלה', 'שליפת נתונים מהטבלה'],
      correct: 0,
      explain: 'הפקודה INSERT INTO היא פקודת DML שתפקידה להזריק נתונים חדשים כרשומה לתוך הטבלה.'
    },
    {
      code: 'UPDATE users SET age = 26 WHERE name = "Natan";',
      q: 'מה יקרה אם נשמיט את תנאי ה-WHERE מהפקודה?',
      opts: ['כל הרשומות בטבלת users יעודכנו לגיל 26', 'תזרק שגיאת תחביר (Syntax Error)', 'שום דבר לא יקרה', 'רק הרשומה הראשונה תעודכן'],
      correct: 0,
      explain: 'ללא תנאי WHERE שיסנן את הרשומות, הפקודה UPDATE תחול על כל השורות בטבלה!'
    },
    {
      code: 'SELECT name FROM products WHERE price > 100;',
      q: 'מה יוחזר כתוצאה מהרצת פקודה זו?',
      opts: ['שמות כל המוצרים שמחירם גדול מ-100', 'כל הפרטים של המוצרים שמחירם גדול מ-100', 'שמות כל המוצרים', 'שגיאה בגלל פסקת WHERE'],
      correct: 0,
      explain: 'פסוקית ה-WHERE מסננת רק את הרשומות שמקיימות את התנאי (price > 100), וה-SELECT שולף רק את עמודת ה-name שלהן.'
    },
    {
      code: 'SELECT * FROM users ORDER BY age DESC;',
      q: 'כיצד יסודרו התוצאות מהשאילתה?',
      opts: ['לפי גיל מהגדול לקטן (סדר יורד)', 'לפי גיל מהקטן לגדול (סדר עולה)', 'בסדר אקראי', 'לפי שם המשתמש בסדר אלפביתי'],
      correct: 0,
      explain: 'מילת המפתח DESC (Descending) מציינת שהמיון יהיה בסדר יורד - מהערך הגדול ביותר לקטן ביותר.'
    },
    {
      code: 'SELECT department, COUNT(*) FROM employees GROUP BY department;',
      q: 'מה מטרת השימוש ב-GROUP BY בפקודה זו?',
      opts: ['לקבץ את העובדים לפי מחלקות ולספור כמה עובדים יש בכל מחלקה', 'למיין את המחלקות לפי סדר אלפביתי', 'לחבר בין טבלת employees לטבלת department', 'להציג רק מחלקות עם יותר מעובד אחד'],
      correct: 0,
      explain: 'פסוקית GROUP BY מאגדת רשומות בעלות ערך זהה בעמודה מסוימת לקבוצה אחת, עליה ניתן להפעיל פונקציות אגרגציה כמו ()COUNT.'
    },
    {
      code: 'SELECT u.name, o.total FROM users u INNER JOIN orders o ON u.id = o.user_id;',
      q: 'אילו רשומות יוחזרו מפקודת ה-INNER JOIN?',
      opts: ['רק רשומות שיש להן התאמה בשתי הטבלאות', 'כל המשתמשים, גם אם אין להם הזמנות', 'כל ההזמנות, גם אם אין להן משתמש', 'כל המשתמשים וכל ההזמנות'],
      correct: 0,
      explain: 'סוג ה-JOIN הבסיסי ביותר. INNER JOIN מחזיר אך ורק את חיתוך הקבוצות - שורות שמקיימות את תנאי החיבור בשתי הטבלאות במלואו.'
    },
    {
      code: 'SELECT u.name, o.total FROM users u LEFT JOIN orders o ON u.id = o.user_id;',
      q: 'מה יוחזר מפקודת ה-LEFT JOIN במקרה שלמשתמש אין שום הזמנה?',
      opts: ['המשתמש יופיע בתוצאות, וערכי ההזמנה יהיו NULL', 'המשתמש לא יופיע בתוצאות כלל', 'הפקודה תזרוק שגיאה', 'ערכי ההזמנה יהיו 0 במקום NULL'],
      correct: 0,
      explain: 'ב-LEFT JOIN, כל השורות מהטבלה השמאלית (users) יוחזרו בהכרח. אם אין להן התאמה בטבלה הימנית, העמודות החסרות יקבלו NULL.'
    },
    {
      code: 'CREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));',
      q: 'מהו תפקיד ה-FOREIGN KEY בדוגמה זו?',
      opts: ['לאכוף שלמות נתונים כדי ש-user_id יהיה חייב להיות קיים בטבלת users', 'ליצור מפתח ראשי כפול לטבלת ההזמנות', 'לזרז את החיפוש בטבלה', 'למנוע כפילויות בעמודת user_id'],
      correct: 0,
      explain: 'מפתח זר מקשר בין שתי טבלאות ומוודא שלא ניתן להכניס ערך לעמודה אם הוא לא קיים כבר כמפתח ראשי בטבלה המקושרת.'
    },
    {
      code: 'DELETE FROM users WHERE id = 5;',
      q: 'לאיזו משפחת פקודות שייכת פקודת DELETE?',
      opts: ['DML (Data Manipulation Language)', 'DDL (Data Definition Language)', 'DQL (Data Query Language)', 'TCL (Transaction Control Language)'],
      correct: 0,
      explain: 'פקודת DELETE משנה את תוכן הטבלה על ידי הסרת רשומות, ולכן היא שייכת למשפחת ה-DML.'
    },
    {
      code: 'ALTER TABLE users ADD email VARCHAR(255);',
      q: 'מה מבצעת פקודה זו?',
      opts: ['מוסיפה עמודה חדשה בשם email לטבלת users', 'מוסיפה שורה חדשה עם אימייל ריק', 'משנה את סוג הנתונים של עמודת email', 'מוחקת את עמודת email'],
      correct: 0,
      explain: 'הפקודה ALTER TABLE משמשת לשינוי המבנה של טבלה קיימת, במקרה זה הוספת עמודה חדשה.'
    },
    {
      code: 'SELECT * FROM products LIMIT 5 OFFSET 10;',
      q: 'מה יקרה בעת ביצוע שאילתה זו ב-SQL?',
      opts: ['יוחזרו 5 רשומות בלבד, החל מהרשומה ה-11 (דילוג על 10)', 'יוחזרו 10 רשומות בלבד, החל מהרשומה ה-5', 'יוחזרו 15 רשומות בסך הכל', 'שגיאת תחביר'],
      correct: 0,
      explain: 'השימוש ב-LIMIT ו-OFFSET משמש לעימוד נתונים. כאן מדלגים על 10 התוצאות הראשונות ושולפים רק את ה-5 הבאות.'
    },
    {
      code: 'SELECT DISTINCT category FROM products;',
      q: 'מה מטרת המילה DISTINCT בשאילתה?',
      opts: ['להסיר כפילויות ולהחזיר רשימה של הקטגוריות הייחודיות', 'למיין את הקטגוריות בסדר עולה', 'למיין את הקטגוריות בסדר יורד', 'להחזיר את הקטגוריות שאינן ריקות'],
      correct: 0,
      explain: 'מילת המפתח DISTINCT מסננת שורות כפולות מתוצאות השאילתה, ומבטיחה שכל ערך יופיע פעם אחת בלבד.'
    }
  ],
  bigPicture: [
    {
      code: 'Client-Server Architecture',
      q: 'מהו התפקיד המרכזי של צד הלקוח (Client) בארכיטקטורת שרת-לקוח?',
      opts: ['לשלוח בקשות ולהציג את התוצאות למשתמש', 'לאחסן את מסד הנתונים של האפליקציה', 'לנהל את ההרשאות והאבטחה', 'לעבד בקשות מורכבות וחישובים מרכזיים'],
      correct: 0,
      explain: 'צד הלקוח הוא הממשק שדרכו משתמשים פונים למערכת. הוא מציג נתונים שמתקבלים מהשרת.'
    },
    {
      code: 'HTTP Methods',
      q: 'אילו מבין מתודות ה-HTTP הבאות נועדו למשוך נתונים ולשלוח נתונים בהתאמה?',
      opts: ['GET למשיכה, POST לשליחה', 'POST למשיכה, GET לשליחה', 'PUT למשיכה, DELETE לשליחה', 'GET למשיכה, UPDATE לשליחה'],
      correct: 0,
      explain: 'מתודת GET משמשת לקריאת נתונים, בעוד ש-POST משמשת לשליחת גוף של נתונים אל השרת.'
    },
    {
      code: 'JSON (JavaScript Object Notation)',
      q: 'מה היתרון המרכזי של JSON בתקשורת בין שרת ללקוח?',
      opts: ['פורמט קל-משקל וקריא שנתמך אוניברסלית', 'מוצפן אוטומטית ובטוח יותר', 'מריץ קוד JavaScript באופן אקטיבי בדפדפן', 'מיועד רק לשמירת נתונים במסדי SQL'],
      correct: 0,
      explain: 'JSON הפך לסטנדרט התעשייה להעברת נתונים ב-APIs בזכות הפשטות שלו והתמיכה המובנית בשפות רבות.'
    },
    {
      code: 'SQL vs NoSQL Databases',
      q: 'מהו ההבדל המרכזי בין מסדי נתונים SQL ל-NoSQL?',
      opts: ['ל-SQL סכמה קשיחה טבלאית ול-NoSQL מבנה גמיש ללא סכמה נוקשה', 'NoSQL מיועד למספרים ו-SQL למחרוזות', 'ב-SQL קשה לכתוב שאילתות יותר מב-NoSQL', 'אין שום הבדל אמיתי'],
      correct: 0,
      explain: 'מסדי SQL מבוססים על טבלאות עם מבנה מוגדר מראש, ואילו מסדי NoSQL לרוב בנויים ממסמכים גמישים.'
    },
    {
      code: 'API (Application Programming Interface)',
      q: 'מהו תפקיד ה-API בעולם הפיתוח?',
      opts: ['חוזה שמאפשר לשתי תוכנות שונות להחליף מידע', 'אבטחת התקשורת בלבד', 'ייצור ממשק גרפי (GUI) למשתמש', 'אחסון מידע טקסטואלי בדיסק'],
      correct: 0,
      explain: 'API הוא אוסף מוגדר של חוקים המאפשר למערכת אחת לצרוך שירותים ונתונים ממערכת אחרת.'
    },
    {
      code: 'DNS (Domain Name System)',
      q: 'למה משמשת מערכת ה-DNS באינטרנט?',
      opts: ['לתרגם שמות דומיין ידידותיים לכתובות IP', 'לספק תעודות אבטחה לאתרים (SSL)', 'לנהל את מסד הנתונים של שרת הלקוח', 'לאחסן תמונות וקבצי וידאו ברשת'],
      correct: 0,
      explain: 'ה-DNS פועל כספר טלפונים של האינטרנט וממיר את שם הדומיין המילולי לכתובת ה-IP הנדרשת.'
    },
    {
      code: 'Frontend vs Backend',
      q: 'מה מתאר נכונה את ההבדל בין Frontend ל-Backend?',
      opts: ['Frontend מטפל בממשק והחוויה, Backend בלוגיקה ובנתונים', 'שניהם מבוצעים תמיד על המחשב של הלקוח', 'Frontend נכתב ב-Python ו-Backend ב-JavaScript', 'ה-Backend מתמקד רק בעיצוב כפתורים'],
      correct: 0,
      explain: 'ה-Frontend רץ בדפדפן המשתמש כאינטראקציה ישירה, וה-Backend פועל בשרת לאספקת הנתונים והאבטחה.'
    },
    {
      code: 'Version Control (Git)',
      q: 'מדוע כלי ניהול גרסאות (Git) הפכו לסטנדרט?',
      opts: ['מאפשרים עבודת צוות, מעקב שינויים וחזרה אחורה (Rollback)', 'מאיצים את זמן הריצה של הקוד בדפדפן', 'בודקים אוטומטית שאין שגיאות כתיב במשתנים', 'כותבים את הקוד במקום המתכנת'],
      correct: 0,
      explain: 'Git חיוני לעבודת צוות מכיוון שהוא מנהל גרסאות במקביל ושומר היסטוריה מלאה של התפתחות הפרויקט.'
    },
    {
      code: 'Frameworks vs Libraries',
      q: 'מהו ההבדל המקובל בין Library ל-Framework?',
      opts: ['בספרייה אתה קורא לקוד, ב-Framework הוא קורא לקוד שלך', 'ספרייה עולה כסף ו-Framework חינמי', 'ספרייה גדולה יותר מ-Framework', 'אין שום הבדל, אלו מילים נרדפות'],
      correct: 0,
      explain: 'ספרייה נותנת כלים להשתמש בהם בעת הצורך, ואילו מסגרת עבודה מכתיבה את מבנה הפרויקט ומפעילה את הקוד שלך (Inversion of Control).'
    },
    {
      code: 'Web Hosting / Deployment',
      q: 'מה משמעות המונח Deployment (פריסה)?',
      opts: ['העברת האפליקציה מסביבת הפיתוח לשרת ענן זמין ברשת', 'מחיקת כל הנתונים ממסד הנתונים לאיפוס', 'הורדת הקוד מהשרת למחשב המקומי', 'קימפול הקוד לשפת מכונה'],
      correct: 0,
      explain: 'תהליך ה-Deployment הוא השלב בו הפרויקט יוצא לאור והופך נגיש ברשת האינטרנט ללקוחות אמיתיים.'
    },
    {
      code: 'JWT & Cookies',
      q: 'לשם מה משמשים JWT ו-Cookies באפליקציות ווב?',
      opts: ['לניהול זהויות משתמשים (Authentication) ושמירת חיבור', 'לזרז טעינת תמונות', 'לקשט את הדפדפן', 'לשמירת קבצי וידאו מקומיים'],
      correct: 0,
      explain: 'מכיוון ש-HTTP הוא חסר זיכרון, טוקנים וקוקיז מאפשרים לשרת לזכור מי הוא המשתמש המחובר בכל בקשה.'
    },
    {
      code: 'CI/CD Pipeline',
      q: 'מה המטרה המרכזית של תהליכי CI/CD?',
      opts: ['להפוך את בדיקת הקוד ופריסתו לשרת לאוטומטיים ומהירים', 'להציג פרסומות מותאמות אישית למשתמש', 'לעצב את מסד הנתונים באופן אינטראקטיבי', 'לתרגם את הקוד רציף משפה לשפה אחרת'],
      correct: 0,
      explain: 'במערכות תוכנה מתקדמות, CI/CD מאפשר לבדוק אוטומטית כל העלאת קוד ולפרוס אותו ישירות לשרת ללא מגע יד אדם.'
    },
    {
      code: 'State Management',
      q: 'מהי הכוונה ב-"ניהול State" (State Management)?',
      opts: ['הדרך בה אפליקציית לקוח זוכרת ומנהלת את הנתונים המשתנים שלה מול התצוגה', 'מערכת ניהול הרשאות מנהל בשרת', 'פרוטוקול להעברת קבצים גדולים', 'חוקי מדינה ברשת האינטרנט'],
      correct: 0,
      explain: 'ניהול הסטייט מתייחס לאופן בו דף יחיד (SPA) שומר נתונים ודואג לכך שהממשק יתעדכן ריאקטיבית כשמשהו משתנה.'
    },
    {
      code: 'MVC Architecture',
      q: 'מהו הרעיון מאחורי תבנית MVC (Model-View-Controller)?',
      opts: ['חלוקה ל-3 שכבות לוגיות: נתונים, תצוגה, והלוגיקה המקשרת ביניהם', 'איחוד כל הקוד לקובץ אחד גדול', 'שימוש במסד נתונים טבלאי בלבד', 'העברת כל עבודת השרת לצד הלקוח'],
      correct: 0,
      explain: 'הפרדת רשויות מלאה בה מודל אחראי על נתונים, View על הממשק, והקונטרולר משמש כמוח המגשר ביניהם.'
    }
  ]
};
