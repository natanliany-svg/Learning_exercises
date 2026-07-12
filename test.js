const x = {
  restaurantOrdersApi: {
    title: "Restaurant Orders API 🍔 (Middleware & Error Handling)",
    floatingExplanation: `
      <h1>🍔 Restaurant Orders API</h1>
      <p>פרויקט זה ממחיש את המושגים <strong>Middleware</strong> ו-<strong>Error Handling</strong> באמצעות אנלוגיית המסעדה המפורסמת שלנו!</p>
      <ul>
        <li><strong>השומר בכניסה:</strong> בודק אם הלקוח לבוש כראוי (Auth Middleware).</li>
        <li><strong>מנהל המשמרת:</strong> מטפל בתקלות כמו מנה חסרה במקרר ומחזיר שגיאה בנימוס במקום לסגור את המסעדה (Error Middleware).</li>
        <li><strong>המלצרים והטבחים:</strong> ה-Routes וה-Services המנהלים את ההזמנות במערכת (קובץ orders.json).</li>
      </ul>
      <p>💡 <em>נסו להריץ פקודות בטרמינל כדי לראות איך השומר מונע כניסה ואיך המנהל מתערב כשיש שגיאה!</em></p>
    `,
    files: {
      "index.js": `const express = require('express');
const app = express();
const ordersRoute = require('./routes/orders.route.js');
const errorMiddleware = require('./middlewares/error.middleware.js');
const authMiddleware = require('./middlewares/auth.middleware.js');

// 📝 Middleware בסיסי: מתרגם אוטומטי מ-JSON (סינית) ל-JavaScript Object (שפת הטבחים)
app.use(express.json());

// ⏱️ Middleware בסיסי: שעון קיר שרושם מתי הלקוח הגיע
app.use((req, res, next) => {
    console.log(\`[\${new Date().toLocaleTimeString()}] לקוח חדש נכנס למסעדה: \${req.method} \${req.url}\`);
    next(); // קורא למלצר הבא בתור
});

// 👮‍♂️ הפעלת שומר הסף (Auth) על כל המסעדה!
// אם ללקוח אין token (חולצה), הוא יעוף החוצה ולא יגיע בכלל למלצר
app.use(authMiddleware);

// 💁‍♂️ המלצרים (Routes) מקבלים את הבקשות שקשורות להזמנות (orders)
app.use('/orders', ordersRoute);

// 🚨 מנהל המשמרת (Error Middleware) - חייב להיות **בסוף** המסעדה!
// יופעל רק אם אחד המלצרים קרא לו באמצעות next(error)
app.use(errorMiddleware);

app.listen(3000, () => {
    console.log("🍔 מסעדת API פתוחה בפורט 3000!");
});
`,
      "routes/orders.route.js": `const express = require('express');
const router = express.Router();
const ordersService = require('../services/orders.service.js');

// 💁‍♂️ המלצר שמביא את כל ההזמנות מהשולחנות
router.get('/', async (req, res, next) => {
    try {
        const orders = await ordersService.getAllOrders();
        res.json(orders);
    } catch (error) {
        // 🔥 אוי לא! משהו השתבש, המלצר קורא למנהל!
        next(error); 
    }
});

// 💁‍♂️ המלצר שמקבל הזמנה חדשה (עם טיפול בשגיאות)
router.post('/', async (req, res, next) => {
    try {
        const newOrder = req.body;
        // בודק אם הלקוח שלח מנה ריקה
        if (!newOrder.item) {
            // זורק שגיאה מכוונת שתיעצר אצל מנהל המשמרת
            throw new Error("הלקוח לא אמר איזו מנה הוא רוצה להזמין!");
        }
        
        const savedOrder = await ordersService.createOrder(newOrder);
        res.status(201).json({ msg: "ההזמנה התקבלה במטבח", order: savedOrder });
    } catch (error) {
        next(error); // קורא למנהל
    }
});

module.exports = router;
`,
      "services/orders.service.js": `const fs = require('fs/promises');
const filePath = './data/orders.json';

// 👨‍🍳 הטבח מביא את כל ההזמנות מהמקרר (הקובץ)
async function getAllOrders() {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        // אם המקרר ריק (הקובץ לא קיים), מחזירים מערך ריק במקום לקרוס
        return [];
    }
}

// 👨‍🍳 הטבח מכין הזמנה חדשה ומכניס למקרר
async function createOrder(orderData) {
    const orders = await getAllOrders();
    const newOrder = {
        id: Date.now(), // תעודת זהות למנה
        item: orderData.item,
        price: orderData.price || 50
    };
    orders.push(newOrder);
    
    // שומר במקרר
    await fs.writeFile(filePath, JSON.stringify(orders, null, 2), "utf-8");
    return newOrder;
}

module.exports = {
    getAllOrders,
    createOrder
};
`,
      "middlewares/auth.middleware.js": `// 👮‍♂️ שומר הסף של המסעדה (Authentication Middleware)
function authMiddleware(req, res, next) {
    // בודק אם הלקוח הביא איתו בכיס פתק עם קוד סודי (token)
    // הלקוח שולח את זה דרך Headers
    const hasToken = req.headers.authorization;

    if (!hasToken) {
        // ❌ השומר זורק את הלקוח החוצה
        console.log("👮‍♂️ השומר: אין לך קוד סודי! כניסה אסורה.");
        return res.status(401).json({ error: "Unauthorized - נדרש קוד סודי כדי להיכנס למסעדה" });
    }

    // ✅ השומר מאשר, "הבא בתור!" ומעביר את הלקוח למלצר
    console.log("👮‍♂️ השומר: הקוד הסודי התקבל, אפשר להיכנס.");
    next(); 
}

module.exports = authMiddleware;
`,
      "middlewares/error.middleware.js": `// 🚨 מנהל המשמרת (Error Handling Middleware)
// פונקציה זו מזוהה כמנהלת שגיאות כי יש לה בדיוק 4 פרמטרים: err, req, res, next
function errorMiddleware(err, req, res, next) {
    console.log("🚨 מנהל המשמרת נקרא לטפל בבעיה!");
    
    // רושם בפנקס השחור של המנהל את הבעיה (לקונסול)
    console.error("פירוט הבעיה:", err.message);

    // ניגש ללקוח, מתנצל, ולא סוגר את המסעדה
    res.status(500).json({
        error: "משהו השתבש במטבח!",
        details: err.message
    });
}

module.exports = errorMiddleware;
`,
      "data/orders.json": `[
  {
    "id": 1,
    "item": "המבורגר עם צ'יפס",
    "price": 65
  },
  {
    "id": 2,
    "item": "סלט יווני",
    "price": 45
  }
]`
    },
    stories: [
      {
        lineStart: 9,
        lineEnd: 12,
        file: "index.js",
        text: "🕒 ה-Middleware הזה הוא כמו 'שעון קיר'. הוא מופעל על **כל** בקשה שנכנסת לשרת, מדפיס את השעה לקונסול, וחייב לקרוא ל-`next()` כדי שהלקוח לא ייתקע בכניסה."
      },
      {
        lineStart: 15,
        lineEnd: 16,
        file: "index.js",
        text: "👮‍♂️ 'שומר הסף' (authMiddleware) מחובר פה באופן גלובלי (לכל האתר). אם אין ללקוח כרטיס מועדון (token) השומר יחזיר שגיאה ולא ייתן לו להגיע למלצרים!"
      },
      {
        lineStart: 22,
        lineEnd: 23,
        file: "index.js",
        text: "🚨 זהו 'מנהל המשמרת' (errorMiddleware). שימו לב שהוא מוגדר **אחרי** כל הראוטים! הוא יקפוץ לפעולה רק אם מלצר יקרא לו בעזרת פקודת `next(error)`."
      },
      {
        lineStart: 18,
        lineEnd: 25,
        file: "routes/orders.route.js",
        text: "💁‍♂️ המלצר מקבל הזמנה. אם הלקוח לא כתב מה הוא רוצה, המלצר 'זורק צלחת' בכוונה (throw new Error), וקורא ב-catch למנהל המשמרת בעזרת `next(error)` כדי שיטפל בלקוח הבעייתי."
      },
      {
        lineStart: 3,
        lineEnd: 11,
        file: "middlewares/auth.middleware.js",
        text: "👮‍♂️ הפונקציה של השומר מציצה לכיס של הלקוח (`req.headers.authorization`). אם יש שם משהו, השומר אומר 'next()'. אם אין, הוא שולח את הלקוח הביתה עם קוד 401 Unauthorized."
      },
      {
        lineStart: 2,
        lineEnd: 11,
        file: "middlewares/error.middleware.js",
        text: "🚨 המנהל מקבל 4 פרמטרים. ככה Express יודעת שזה המנהל לשגיאות! הוא מדפיס את השגיאה לעצמו, ושולח ללקוח הודעה מסודרת ויפה עם קוד 500 (שגיאת שרת פנימית) במקום לקרוס."
      }
    ]
  }
};
