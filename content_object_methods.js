const contentObjectMethodsExtra = {
  objectMethodsExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#ff0055;">user</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">clone</span></div>
                <div class="flow-node-enhanced active">newUser</div>
            </div>
            `,
            text: "<b>שלב 1: שעתוק אובייקטים</b><br>כאשר נשווה או נעתיק אובייקטים רגילים, נעתיק רק 'מצביע' לזיכרון. כדי ליצור עותק אמיתי ועצמאי, עלינו להשתמש באופרטור הפריסה (Spread: <code>...</code>)."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">?</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">user?.address</span></div>
                <div class="flow-node-enhanced active bounce-in" style="border-color:#00cc88;">undefined</div>
            </div>
            `,
            text: "<b>שלב 2: שרשור אופציונלי (Optional Chaining)</b><br>מונע קריסות (Errors) כשמנסים לגשת למפתח פנימי שלא קיים. שימוש ב-<code>?.</code> יחזיר פשוט <code>undefined</code> בשקט."
        }
    ],
    title: '📂 אובייקטים מתקדם וטריקים (Extra)',
    content: `
      <div class="card-body">
        <p class="lead">כאן נלמד טכניקות מודרניות ובטוחות לעבודה עם אובייקטים ב-JavaScript שיחסכו לנו המון שגיאות 'Cannot read properties of undefined'.</p>
        
        <h4>1. שרשור אופציונלי (Optional Chaining: <code>?.</code>)</h4>
        <p>כאשר אנו מנסים לגשת לערך בתוך אובייקט מקונן שאינו קיים, התוכנית שלנו תקרוס. ה-<code>?.</code> בודק קודם אם השלב הקודם קיים לפני שהוא ממשיך פנימה.</p>
        <pre><code><span class="t-key">const</span> user = { name: <span class="t-str">"דני"</span> };

<span class="t-com">// ❌ קריסה! מנסה לקרוא city מתוך address שאינו קיים</span>
<span class="t-com">// console.log(user.address.city); </span>

<span class="t-com">// ✅ בטוח! יחזיר undefined וימשיך לרוץ</span>
console.<span class="t-fn">log</span>(user.address?.city);</code></pre>

        <h4>2. שעתוק (Shallow Copy) עם Spread Operator (<code>...</code>)</h4>
        <p>באובייקטים אי אפשר לעשות <code>let a = b</code> כי הם יצביעו לאותו מקום. שימוש בשלוש נקודות "פורס" את התוכן לאובייקט חדש ועצמאי לחלוטין.</p>
        <pre><code><span class="t-key">const</span> original = { role: <span class="t-str">"Admin"</span>, status: <span class="t-str">"Active"</span> };

<span class="t-com">// יצירת אובייקט חדש שמעתיק את כל התכונות של המקורי</span>
<span class="t-key">const</span> copy = { ...original, name: <span class="t-str">"דני"</span> };

copy.status = <span class="t-str">"Offline"</span>;
console.<span class="t-fn">log</span>(original.status); <span class="t-com">// "Active" (המקורי לא הושפע!)</span></code></pre>
      </div>
    `
  }
};
