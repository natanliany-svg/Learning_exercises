const contentFetchExtra = {
  fetchExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced active">לקוח (דפדפן)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">בקשת GET</span></div>
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">שרת (API)</div>
                <div class="flow-arrow-enhanced delay-2"><span class="arrow-icon">←</span><span class="arrow-label">נתונים (JSON)</span></div>
                <div class="flow-node-enhanced active delay-3" style="border-color:#00cc88;">הצגה למשתמש</div>
            </div>
            `,
            text: "<b>שלב 1: בקשת Fetch בסיסית</b><br>כשאנחנו קוראים ל-<code>fetch()</code>, הדפדפן שולח בקשה לשרת, מחכה לתשובה (Promise), ואז אנחנו יכולים להפוך אותה ל-JSON ולהשתמש בה."
        },
        {
            html_visual: `
            <div class="anim-container" style="justify-content: center; position:relative;">
                <div class="flow-node-enhanced" style="z-index: 2;">Promise 1 (משתמשים)</div>
                <div class="flow-node-enhanced" style="margin: 0 10px; z-index: 2;">Promise 2 (פוסטים)</div>
                <div class="flow-node-enhanced" style="z-index: 2;">Promise 3 (תגובות)</div>
                <div class="anim-packet move-down" style="position:absolute; width:100%; top:50px; text-align:center; background:rgba(56, 189, 248, 0.2); border:2px dashed #38bdf8; color:#fff; z-index: 1;">Promise.all() - מחכה לכולם יחד!</div>
            </div>
            `,
            text: "<b>שלב 2: במקביל עם Promise.all</b><br>במקום לחכות לכל בקשה בנפרד, אפשר לשלוח את כולן יחד! ה-<code>Promise.all</code> יחזיר תשובה רק כש<b>כל</b> הבקשות יסתיימו בהצלחה."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced active ripple-out">בקשה נשלחת...</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced error pulse-glow" style="border-color:#ff0055;">תקלה בשרת! (404)</div>
                <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">↘</span></div>
                <div class="flow-node-enhanced active delay-2" style="border-color:#ffd700;">try / catch תופס את השגיאה</div>
            </div>
            `,
            text: "<b>שלב 3: טיפול בשגיאות (try/catch)</b><br>תמיד יכולות לקרות תקלות ברשת! חובה לעטוף את ה-<code>fetch</code> ב-<code>try/catch</code> כדי שהאפליקציה שלנו לא תקרוס אם השרת נופל."
        }
    ],
    title: '🌐 תקשורת שרת-לקוח (Fetch API)',
    content: `
      <div class="card-body">
        <p class="lead">ה-Fetch API הוא הדרך המודרנית של JavaScript לדבר עם שרתים (APIs). הוא מאפשר לנו למשוך נתונים, לשלוח מידע חדש ולעדכן את האתר מבלי לרענן את העמוד!</p>
        
        <h4>1. בקשת GET פשוטה (משיכת נתונים)</h4>
        <p>כברירת מחדל, <code>fetch</code> מבצע בקשת GET. כיוון שרשת היא דבר איטי, אנחנו משתמשים ב-<code>async/await</code> כדי להמתין לתשובה.</p>
        <pre><code><span class="t-key">async function</span> <span class="t-fn">getPosts</span>() {
  <span class="t-ctl">try</span> {
    <span class="t-key">const</span> response = <span class="t-key">await</span> <span class="t-fn">fetch</span>(<span class="t-str">'https://api.example.com/posts'</span>);
    
    <span class="t-com">// בדיקה האם השרת החזיר תשובה תקינה (200-299)</span>
    <span class="t-ctl">if</span> (!response.ok) <span class="t-key">throw new</span> <span class="t-fn">Error</span>(<span class="t-str">'שגיאת רשת!'</span>);
    
    <span class="t-com">// המרה ל-JSON</span>
    <span class="t-key">const</span> data = <span class="t-key">await</span> response.<span class="t-fn">json</span>();
    console.<span class="t-fn">log</span>(data);
  } <span class="t-ctl">catch</span> (error) {
    console.<span class="t-fn">error</span>(<span class="t-str">'משהו השתבש:'</span>, error);
  }
}</code></pre>

        <h4>2. שליחת נתונים עם בקשת POST</h4>
        <p>כדי לשלוח נתונים (כמו הוספת משתמש חדש), אנחנו צריכים להגדיר את שיטת הבקשה (Method), כותרות (Headers), ולהפוך את הנתונים שלנו לטקסט (JSON.stringify).</p>
        <pre><code><span class="t-key">async function</span> <span class="t-fn">createPost</span>(newPost) {
  <span class="t-key">const</span> response = <span class="t-key">await</span> <span class="t-fn">fetch</span>(<span class="t-str">'https://api.example.com/posts'</span>, {
    method: <span class="t-str">'POST'</span>, <span class="t-com">// סוג הבקשה</span>
    headers: { <span class="t-str">'Content-Type'</span>: <span class="t-str">'application/json'</span> }, <span class="t-com">// סוג התוכן</span>
    body: JSON.<span class="t-fn">stringify</span>(newPost) <span class="t-com">// הנתונים שאנחנו שולחים</span>
  });
  
  <span class="t-key">const</span> result = <span class="t-key">await</span> response.<span class="t-fn">json</span>();
  <span class="t-ctl">return</span> result;
}</code></pre>

        <div class="callout analogy">
          <span class="ico">📦</span>
          <div class="ct"><b>אנלוגיה:</b> GET זה כמו להסתכל בתפריט במסעדה. POST זה כמו למסור את ההזמנה שלך למלצר (עם הנתונים של מה שאתה רוצה).</div>
        </div>

        <h4>3. הבאת כמה דברים במקביל (Promise.all)</h4>
        <p>אם אנחנו צריכים להביא משתמשים וגם פוסטים שאינם תלויים זה בזה, עדיף להביא אותם ביחד במקום לחכות אחד אחד!</p>
        <pre><code><span class="t-key">async function</span> <span class="t-fn">getAllData</span>() {
  <span class="t-com">// Promise.all מקבל מערך של פעולות אסינכרוניות ומחכה שכולן יסתיימו</span>
  <span class="t-key">const</span> [usersRes, postsRes] = <span class="t-key">await</span> Promise.<span class="t-fn">all</span>([
    <span class="t-fn">fetch</span>(<span class="t-str">'/users'</span>),
    <span class="t-fn">fetch</span>(<span class="t-str">'/posts'</span>)
  ]);
  
  <span class="t-key">const</span> users = <span class="t-key">await</span> usersRes.<span class="t-fn">json</span>();
  <span class="t-key">const</span> posts = <span class="t-key">await</span> postsRes.<span class="t-fn">json</span>();
}</code></pre>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>טיפ למקצוענים:</b> תמיד בדקו את המאפיין <code>response.ok</code>! פונקציית <code>fetch</code> <b>לא</b> זורקת שגיאה (catch) כשמקבלים 404 (לא נמצא) או 500 (שגיאת שרת). היא זורקת שגיאה רק כשאין חיבור לאינטרנט!</div>
        </div>
      </div>
    `
  }
};
