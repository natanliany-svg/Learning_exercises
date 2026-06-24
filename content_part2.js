const contentPart2 = {
    dom: {
        title: '🌐 DOM Manipulation',
        content: `
<div class="modal-grid">
    <div class="modal-card">
        <h3>בחירת אלמנטים מה-DOM</h3>
        <p>שיטות שונות לבחירת אלמנטים מהעמוד:</p>
        <pre><span class="comment">// ID בחירה לפי</span>
<span class="keyword">const</span> <span class="variable">btn</span> = <span class="variable">document</span>.<span class="function">getElementById</span>(<span class="string">'my-btn'</span>);

<span class="comment">// querySelector - מחזיר את האלמנט הראשון שמתאים ל-CSS Selector</span>
<span class="keyword">const</span> <span class="variable">firstBox</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'.box'</span>);

<span class="comment">// querySelectorAll - מחזיר NodeList של כל האלמנטים המתאימים</span>
<span class="keyword">const</span> <span class="variable">allBoxes</span> = <span class="variable">document</span>.<span class="function">querySelectorAll</span>(<span class="string">'.box'</span>);</pre>
    </div>

    <div class="modal-card">
        <h3>מאזינים לאירועים (Events)</h3>
        <p>הוספת מאזין אירועים עם <code>addEventListener</code>:</p>
        <pre><span class="keyword">const</span> <span class="variable">form</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'#my-form'</span>);

<span class="variable">form</span>.<span class="function">addEventListener</span>(<span class="string">'submit'</span>, (<span class="variable">event</span>) =&gt; {
    <span class="comment">// מניעת התנהגות ברירת מחדל (כמו ריענון הדף בשליחת טופס)</span>
    <span class="variable">event</span>.<span class="function">preventDefault</span>();
    <span class="function">console</span>.<span class="function">log</span>(<span class="string">'Form submitted!'</span>);
});</pre>
        <p><strong>סוגי אירועים נפוצים:</strong></p>
        <ul>
            <li><code>click</code> - לחיצת עכבר</li>
            <li><code>submit</code> - שליחת טופס</li>
            <li><code>input</code> - שינוי/הקלדה בשדה קלט</li>
            <li><code>keydown</code> / <code>keyup</code> - לחיצה ושחרור של מקש במקלדת</li>
        </ul>
        <p>💡 <strong>טיפ: Event Delegation</strong> - הוספת מאזין לאלמנט אב כדי לטפל באירועים של ילדים דינמיים.</p>
        <pre><span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'ul'</span>).<span class="function">addEventListener</span>(<span class="string">'click'</span>, (<span class="variable">e</span>) =&gt; {
    <span class="keyword">if</span> (<span class="variable">e</span>.<span class="variable">target</span>.<span class="variable">tagName</span> === <span class="string">'LI'</span>) {
        <span class="function">console</span>.<span class="function">log</span>(<span class="string">'List item clicked!'</span>);
    }
});</pre>
    </div>

    <div class="modal-card">
        <h3>יצירה והוספת אלמנטים (Create & Append)</h3>
        <pre><span class="keyword">const</span> <span class="variable">container</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'.container'</span>);

<span class="comment">// 1. יצירת אלמנט חדש</span>
<span class="keyword">const</span> <span class="variable">newDiv</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'div'</span>);

<span class="comment">// 2. הגדרת תוכן (textContent vs innerHTML)</span>
<span class="variable">newDiv</span>.<span class="variable">textContent</span> = <span class="string">'Hello DOM!'</span>; <span class="comment">// בטוח יותר, רק טקסט</span>
<span class="comment">// newDiv.innerHTML = '&lt;strong&gt;Hello&lt;/strong&gt;'; // מאפשר HTML אבל חשוף ל-XSS</span>

<span class="comment">// 3. הוספת האלמנט ל-DOM</span>
<span class="variable">container</span>.<span class="function">appendChild</span>(<span class="variable">newDiv</span>);</pre>
    </div>

    <div class="modal-card">
        <h3>ניהול קלאסים (ClassList)</h3>
        <p>שינוי עיצוב דינמי בעזרת CSS Classes:</p>
        <pre><span class="keyword">const</span> <span class="variable">box</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'.box'</span>);

<span class="variable">box</span>.<span class="variable">classList</span>.<span class="function">add</span>(<span class="string">'active'</span>);    <span class="comment">// הוספת קלאס</span>
<span class="variable">box</span>.<span class="variable">classList</span>.<span class="function">remove</span>(<span class="string">'hidden'</span>); <span class="comment">// הסרת קלאס</span>
<span class="variable">box</span>.<span class="variable">classList</span>.<span class="function">toggle</span>(<span class="string">'dark'</span>);   <span class="comment">// הוספה/הסרה לפי המצב הנוכחי</span></pre>
    </div>
</div>
        `
    },
    async: {
        title: '⚡ Async & Promises',
        content: `
<div class="modal-grid">
    <div class="modal-card">
        <h3>מהי אסינכרוניות? (Asynchronous)</h3>
        <p>ג'אווה סקריפט רצה בחוט בודד (Single Thread). פעולות שלוקחות זמן (כמו בקשת רשת) לא צריכות לתקוע את שאר הקוד. פעם השתמשו ב-Callbacks, מה שיצר את בעיית "Callback Hell" (פירמידת האבדון). הפתרון? Promises.</p>
    </div>

    <div class="modal-card">
        <h3>יצירה ושימוש ב-Promise</h3>
        <pre><span class="comment">// Promise יצירת </span>
<span class="keyword">const</span> <span class="variable">myPromise</span> = <span class="keyword">new</span> <span class="function">Promise</span>((<span class="variable">resolve</span>, <span class="variable">reject</span>) =&gt; {
    <span class="keyword">setTimeout</span>(() =&gt; {
        <span class="keyword">const</span> <span class="variable">success</span> = <span class="keyword">true</span>;
        <span class="keyword">if</span> (<span class="variable">success</span>) <span class="function">resolve</span>(<span class="string">'Operation Successful!'</span>);
        <span class="keyword">else</span> <span class="function">reject</span>(<span class="string">'Operation Failed!'</span>);
    }, <span class="string">1000</span>);
});

<span class="comment">// צריכת ה-Promise</span>
<span class="variable">myPromise</span>
    .<span class="function">then</span>((<span class="variable">result</span>) =&gt; <span class="function">console</span>.<span class="function">log</span>(<span class="variable">result</span>))
    .<span class="function">catch</span>((<span class="variable">error</span>) =&gt; <span class="function">console</span>.<span class="function">error</span>(<span class="variable">error</span>))
    .<span class="function">finally</span>(() =&gt; <span class="function">console</span>.<span class="function">log</span>(<span class="string">'Done regardless of outcome'</span>));</pre>
    </div>

    <div class="modal-card">
        <h3>Async / Await</h3>
        <p>תחביר מודרני ונקי יותר לעבודה עם Promises. מאפשר לכתוב קוד אסינכרוני שנראה כמו קוד סינכרוני.</p>
        <pre><span class="keyword">async</span> <span class="keyword">function</span> <span class="function">fetchData</span>() {
    <span class="keyword">try</span> {
        <span class="comment">// המתנה עד שההבטחה תתקיים</span>
        <span class="keyword">const</span> <span class="variable">result</span> = <span class="keyword">await</span> <span class="variable">myPromise</span>;
        <span class="function">console</span>.<span class="function">log</span>(<span class="variable">result</span>);
    } <span class="keyword">catch</span> (<span class="variable">error</span>) {
        <span class="comment">// תפיסת שגיאות</span>
        <span class="function">console</span>.<span class="function">error</span>(<span class="string">'Error:'</span>, <span class="variable">error</span>);
    }
}</pre>
        <p>⚠️ <strong>מקרה קצה:</strong> אי אפשר להשתמש ב-<code>await</code> מחוץ לפונקציית <code>async</code> (למעט מודולים תומכי Top-level await).</p>
    </div>

    <div class="modal-card">
        <h3>ביצוע מקבילי (Parallel Execution)</h3>
        <p>כשיש מספר משימות בלתי תלויות, נריץ אותן במקביל כדי לחסוך זמן:</p>
        <pre><span class="keyword">async</span> <span class="keyword">function</span> <span class="function">runParallel</span>() {
    <span class="keyword">const</span> <span class="variable">promise1</span> = <span class="function">fetch</span>(<span class="string">'/api/users'</span>);
    <span class="keyword">const</span> <span class="variable">promise2</span> = <span class="function">fetch</span>(<span class="string">'/api/posts'</span>);

    <span class="comment">// ממתין שכולם יסתיימו</span>
    <span class="keyword">const</span> [<span class="variable">users</span>, <span class="variable">posts</span>] = <span class="keyword">await</span> <span class="variable">Promise</span>.<span class="function">all</span>([<span class="variable">promise1</span>, <span class="variable">promise2</span>]);
    <span class="function">console</span>.<span class="function">log</span>(<span class="string">'Both finished!'</span>);
}</pre>
        <p>💡 <strong>Promise.race</strong> - יחזיר את התוצאה (או השגיאה) של ה-Promise הראשון שמסתיים.</p>
    </div>
</div>
        `
    },
    fetch: {
        title: '🌍 API Requests (Fetch)',
        content: `
<div class="modal-grid">
    <div class="modal-card">
        <h3>בקשת GET בסיסית</h3>
        <p>הפונקציה מובנית <code>fetch()</code> משמשת לביצוע בקשות רשת וקוראת נתונים משרת (API).</p>
        <pre><span class="keyword">async</span> <span class="keyword">function</span> <span class="function">getUsers</span>() {
    <span class="keyword">try</span> {
        <span class="keyword">const</span> <span class="variable">response</span> = <span class="keyword">await</span> <span class="function">fetch</span>(<span class="string">'https://api.example.com/users'</span>);
        
        <span class="comment">// תקינות הבקשה</span>
        <span class="keyword">if</span> (!<span class="variable">response</span>.<span class="variable">ok</span>) {
            <span class="keyword">throw</span> <span class="keyword">new</span> <span class="function">Error</span>(<span class="string">'Network response was not ok'</span>);
        }
        
        <span class="keyword">const</span> <span class="variable">data</span> = <span class="keyword">await</span> <span class="variable">response</span>.<span class="function">json</span>(); <span class="comment">// המרה מ-JSON לאובייקט JS</span>
        <span class="function">console</span>.<span class="function">log</span>(<span class="variable">data</span>);
    } <span class="keyword">catch</span> (<span class="variable">error</span>) {
        <span class="function">console</span>.<span class="function">error</span>(<span class="string">'Fetch error:'</span>, <span class="variable">error</span>);
    }
}</pre>
    </div>

    <div class="modal-card">
        <h3>בקשות POST, PUT, DELETE</h3>
        <p>שליחת נתונים לשרת מחייבת הגדרת מתודה, headers וגוף הבקשה.</p>
        <pre><span class="keyword">async</span> <span class="keyword">function</span> <span class="function">createUser</span>(<span class="variable">userObj</span>) {
    <span class="keyword">const</span> <span class="variable">options</span> = {
        <span class="variable">method</span>: <span class="string">'POST'</span>, <span class="comment">// או PUT, DELETE</span>
        <span class="variable">headers</span>: {
            <span class="string">'Content-Type'</span>: <span class="string">'application/json'</span>
        },
        <span class="comment">// המרת האובייקט למחרוזת JSON לפני השליחה</span>
        <span class="variable">body</span>: <span class="variable">JSON</span>.<span class="function">stringify</span>(<span class="variable">userObj</span>)
    };

    <span class="keyword">const</span> <span class="variable">response</span> = <span class="keyword">await</span> <span class="function">fetch</span>(<span class="string">'https://api.example.com/users'</span>, <span class="variable">options</span>);
    <span class="keyword">const</span> <span class="variable">newUser</span> = <span class="keyword">await</span> <span class="variable">response</span>.<span class="function">json</span>();
    <span class="keyword">return</span> <span class="variable">newUser</span>;
}</pre>
        <p>💡 <strong>JSON.stringify vs JSON.parse</strong><br>
        <code>stringify</code> - הופך אובייקט JS למחרוזת (בכיוון לשרת)<br>
        <code>parse</code> - הופך מחרוזת JSON לאובייקט JS (בכיוון מהשרת, שווה לערך ל-<code>.json()</code> במקרה של fetch)</p>
    </div>
</div>
        `
    },
    arrayMethods: {
        title: '📊 מתודות מובנות למערכים (Arrays)',
        content: `
<div class="modal-grid">
    <div class="modal-card">
        <h3>forEach() - לולאה על מערך</h3>
        <p>עובר על כל איברי המערך ולא מחזיר כלום. לא ניתן להשתמש ב-break/continue.</p>
        
        <p><strong>אפשרות א': פונקציית חץ (שורה אחת)</strong></p>
        <pre><span class="variable">arr</span>.<span class="function">forEach</span>(<span class="variable">item</span> =&gt; <span class="function">console</span>.<span class="function">log</span>(<span class="variable">item</span>));</pre>

        <p><strong>אפשרות ב': פונקציית חץ עם בלוק קוד</strong></p>
        <pre><span class="variable">arr</span>.<span class="function">forEach</span>(<span class="variable">item</span> =&gt; {
    <span class="function">console</span>.<span class="function">log</span>(<span class="string">'Item:'</span>, <span class="variable">item</span>);
});</pre>

        <p><strong>אפשרות ג': עם אינדקס (index)</strong></p>
        <pre><span class="variable">arr</span>.<span class="function">forEach</span>((<span class="variable">item</span>, <span class="variable">index</span>) =&gt; <span class="function">console</span>.<span class="function">log</span>(<span class="variable">index</span>, <span class="variable">item</span>));</pre>

        <p><strong>אפשרות ד': עם המערך המקורי (originalArray)</strong></p>
        <pre><span class="variable">arr</span>.<span class="function">forEach</span>((<span class="variable">item</span>, <span class="variable">index</span>, <span class="variable">array</span>) =&gt; {
    <span class="function">console</span>.<span class="function">log</span>(<span class="string">'Total items:'</span>, <span class="variable">array</span>.<span class="variable">length</span>);
});</pre>

        <p><strong>אפשרות ה': שרשור אחרי filter</strong></p>
        <pre><span class="variable">arr</span>.<span class="function">filter</span>(<span class="variable">x</span> =&gt; <span class="variable">x</span> &gt; <span class="string">5</span>).<span class="function">forEach</span>(<span class="variable">x</span> =&gt; <span class="function">console</span>.<span class="function">log</span>(<span class="variable">x</span>));</pre>

        <p><strong>אפשרות ו': callback חיצוני</strong></p>
        <pre><span class="keyword">const</span> <span class="function">logItem</span> = (<span class="variable">item</span>) =&gt; <span class="function">console</span>.<span class="function">log</span>(<span class="variable">item</span>);
<span class="variable">arr</span>.<span class="function">forEach</span>(<span class="function">logItem</span>);</pre>
    </div>

    <div class="modal-card">
        <h3>map() - יצירת מערך חדש</h3>
        <p>מחזיר מערך חדש, באותו אורך של המקורי, שכל איבר בו עבר שינוי כלשהו.</p>
        
        <p><strong>אפשרות א': החזרת מערך חדש (שורה אחת)</strong></p>
        <pre><span class="keyword">const</span> <span class="variable">doubled</span> = <span class="variable">arr</span>.<span class="function">map</span>(<span class="variable">num</span> =&gt; <span class="variable">num</span> * <span class="string">2</span>);</pre>

        <p><strong>אפשרות ב': בלוק קוד מלא (חובה להוסיף return)</strong></p>
        <pre><span class="keyword">const</span> <span class="variable">formatted</span> = <span class="variable">arr</span>.<span class="function">map</span>(<span class="variable">num</span> =&gt; {
    <span class="keyword">const</span> <span class="variable">res</span> = <span class="variable">num</span> * <span class="string">2</span>;
    <span class="keyword">return</span> <span class="string">\`Value: \${res}\`</span>;
});</pre>

        <p><strong>אפשרות ג': החזרה מפונקציה חיצונית</strong></p>
        <pre><span class="keyword">const</span> <span class="function">doubleNum</span> = <span class="variable">num</span> =&gt; <span class="variable">num</span> * <span class="string">2</span>;
<span class="keyword">const</span> <span class="variable">doubledArr</span> = <span class="variable">arr</span>.<span class="function">map</span>(<span class="function">doubleNum</span>);</pre>

        <p><strong>אפשרות ד': שרשור (Chaining) עם filter</strong></p>
        <pre><span class="keyword">const</span> <span class="variable">res</span> = <span class="variable">arr</span>.<span class="function">filter</span>(<span class="variable">x</span> =&gt; <span class="variable">x</span> &gt; <span class="string">0</span>).<span class="function">map</span>(<span class="variable">x</span> =&gt; <span class="variable">x</span> * <span class="string">10</span>);</pre>
    </div>

    <div class="modal-card">
        <h3>filter() ו- find()</h3>
        <p><code>filter</code> מחזירה מערך חדש רק עם האיברים שעמדו בתנאי (מחזירה ריק אם אין). <br>
        <code>find</code> מחזירה רק את האיבר הראשון שעמד בתנאי (או undefined).</p>
        
        <p><strong>filter (שורה אחת)</strong></p>
        <pre><span class="keyword">const</span> <span class="variable">evens</span> = <span class="variable">arr</span>.<span class="function">filter</span>(<span class="variable">num</span> =&gt; <span class="variable">num</span> % <span class="string">2</span> === <span class="string">0</span>);</pre>

        <p><strong>filter (בלוק מלא לתנאי מורכב)</strong></p>
        <pre><span class="keyword">const</span> <span class="variable">validUsers</span> = <span class="variable">users</span>.<span class="function">filter</span>(<span class="variable">user</span> =&gt; {
    <span class="keyword">if</span> (<span class="variable">user</span>.<span class="variable">age</span> &gt; <span class="string">18</span> &amp;&amp; <span class="variable">user</span>.<span class="variable">isActive</span>) <span class="keyword">return</span> <span class="keyword">true</span>;
    <span class="keyword">return</span> <span class="keyword">false</span>;
});</pre>

        <p><strong>find (בתוך משתנה/שורה אחת)</strong></p>
        <pre><span class="keyword">const</span> <span class="variable">firstAdmin</span> = <span class="variable">users</span>.<span class="function">find</span>(<span class="variable">u</span> =&gt; <span class="variable">u</span>.<span class="variable">role</span> === <span class="string">'admin'</span>);</pre>

        <p><strong>find (בתוך תנאי if)</strong></p>
        <pre><span class="keyword">if</span> (<span class="variable">users</span>.<span class="function">find</span>(<span class="variable">u</span> =&gt; <span class="variable">u</span>.<span class="variable">id</span> === <span class="string">5</span>)) {
    <span class="function">console</span>.<span class="function">log</span>(<span class="string">'User exists!'</span>);
}</pre>
    </div>

    <div class="modal-card">
        <h3>push() ו- pop() (הוספה/הסרה מהסוף)</h3>
        <p>משנים את המערך המקורי (Mutate).</p>
        
        <p><strong>push: פריט בודד או מספר פריטים</strong></p>
        <pre><span class="variable">arr</span>.<span class="function">push</span>(<span class="string">5</span>);          <span class="comment">// הוספת פריט אחד</span>
<span class="variable">arr</span>.<span class="function">push</span>(<span class="string">6</span>, <span class="string">7</span>, <span class="string">8</span>);    <span class="comment">// הוספת מספר פריטים</span></pre>

        <p><strong>pop: עם או בלי שמירת הערך שנמחק</strong></p>
        <pre><span class="variable">arr</span>.<span class="function">pop</span>();            <span class="comment">// רק מסיר, בלי לשמור</span>
<span class="keyword">const</span> <span class="variable">last</span> = <span class="variable">arr</span>.<span class="function">pop</span>(); <span class="comment">// מסיר ושומר את הערך במשתנה</span></pre>
    </div>

    <div class="modal-card">
        <h3>reduce() - צמצום לערך אחד</h3>
        <p>עוברת על המערך וצוברת תוצאה.</p>
        <p><strong>דוגמה א': סכימת מספרים</strong></p>
        <pre><span class="keyword">const</span> <span class="variable">sum</span> = <span class="variable">arr</span>.<span class="function">reduce</span>((<span class="variable">total</span>, <span class="variable">num</span>) =&gt; <span class="variable">total</span> + <span class="variable">num</span>, <span class="string">0</span>);</pre>
        <p><strong>דוגמה ב': בניית אובייקט ממערך</strong></p>
        <pre><span class="keyword">const</span> <span class="variable">fruitCounts</span> = <span class="variable">fruits</span>.<span class="function">reduce</span>((<span class="variable">acc</span>, <span class="variable">fruit</span>) =&gt; {
    <span class="variable">acc</span>[<span class="variable">fruit</span>] = (<span class="variable">acc</span>[<span class="variable">fruit</span>] || <span class="string">0</span>) + <span class="string">1</span>;
    <span class="keyword">return</span> <span class="variable">acc</span>;
}, {});</pre>
    </div>

    <div class="modal-card">
        <h3>בדיקות וחיפושים (includes, indexOf, some, every)</h3>
        <pre><span class="comment">// האם קיים במערך? מחזיר בוליאני</span>
<span class="keyword">const</span> <span class="variable">hasApple</span> = <span class="variable">arr</span>.<span class="function">includes</span>(<span class="string">'apple'</span>); 

<span class="comment">// החזרת המיקום (אינדקס) של האיבר, או 1- אם לא נמצא</span>
<span class="keyword">const</span> <span class="variable">idx</span> = <span class="variable">arr</span>.<span class="function">indexOf</span>(<span class="string">'apple'</span>);

<span class="comment">// האם לפחות איבר אחד עומד בתנאי?</span>
<span class="keyword">const</span> <span class="variable">hasAdult</span> = <span class="variable">users</span>.<span class="function">some</span>(<span class="variable">u</span> =&gt; <span class="variable">u</span>.<span class="variable">age</span> &gt;= <span class="string">18</span>);

<span class="comment">// האם כל האיברים עומדים בתנאי?</span>
<span class="keyword">const</span> <span class="variable">allActive</span> = <span class="variable">users</span>.<span class="function">every</span>(<span class="variable">u</span> =&gt; <span class="variable">u</span>.<span class="variable">isActive</span>);</pre>
    </div>
</div>
        `
    },
    stringMethods: {
        title: '📝 מתודות מובנות למחרוזות (Strings)',
        content: `
<div class="modal-grid">
    <div class="modal-card">
        <h3>split() - פיצול מחרוזת למערך</h3>
        <pre><span class="keyword">const</span> <span class="variable">str</span> = <span class="string">"Hello World"</span>;

<span class="comment">// פיצול לפי רווח</span>
<span class="variable">str</span>.<span class="function">split</span>(<span class="string">" "</span>); <span class="comment">// ["Hello", "World"]</span>

<span class="comment">// פיצול לאותיות (מחרוזת ריקה)</span>
<span class="variable">str</span>.<span class="function">split</span>(<span class="string">""</span>); <span class="comment">// ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]</span>

<span class="comment">// שרשור עם מערכים (היפוך מילה)</span>
<span class="keyword">const</span> <span class="variable">reversed</span> = <span class="variable">str</span>.<span class="function">split</span>(<span class="string">""</span>).<span class="function">reverse</span>().<span class="function">join</span>(<span class="string">""</span>);</pre>
    </div>

    <div class="modal-card">
        <h3>slice() - חיתוך חלק ממחרוזת</h3>
        <pre><span class="keyword">const</span> <span class="variable">text</span> = <span class="string">"JavaScript"</span>;

<span class="variable">text</span>.<span class="function">slice</span>(<span class="string">0</span>, <span class="string">4</span>);   <span class="comment">// "Java" (מהתחלה עד אינדקס 4 לא כולל)</span>
<span class="variable">text</span>.<span class="function">slice</span>(<span class="string">4</span>);      <span class="comment">// "Script" (מאינדקס 4 עד הסוף)</span>
<span class="variable">text</span>.<span class="function">slice</span>(-<span class="string">6</span>);     <span class="comment">// "Script" (אינדקס שלילי סופר מהסוף)</span></pre>
    </div>

    <div class="modal-card">
        <h3>replace() / replaceAll() - החלפת טקסט</h3>
        <pre><span class="keyword">const</span> <span class="variable">msg</span> = <span class="string">"I like cats. cats are cool."</span>;

<span class="comment">// החלפה פשוטה (מחליף רק את המופע הראשון)</span>
<span class="variable">msg</span>.<span class="function">replace</span>(<span class="string">"cats"</span>, <span class="string">"dogs"</span>); <span class="comment">// "I like dogs. cats are cool."</span>

<span class="comment">// החלפת כל המופעים עם replaceAll</span>
<span class="variable">msg</span>.<span class="function">replaceAll</span>(<span class="string">"cats"</span>, <span class="string">"dogs"</span>); <span class="comment">// "I like dogs. dogs are cool."</span>

<span class="comment">// שימוש ב-RegEx (ביטוי רגולרי) עם דגל g</span>
<span class="variable">msg</span>.<span class="function">replace</span>(<span class="string">/cats/g</span>, <span class="string">"dogs"</span>);</pre>
    </div>

    <div class="modal-card">
        <h3>בדיקת מחרוזות (includes, startsWith, endsWith)</h3>
        <pre><span class="keyword">const</span> <span class="variable">url</span> = <span class="string">"https://example.com/api"</span>;

<span class="variable">url</span>.<span class="function">includes</span>(<span class="string">"example"</span>); <span class="comment">// true (מכיל)</span>
<span class="variable">url</span>.<span class="function">startsWith</span>(<span class="string">"https"</span>); <span class="comment">// true (מתחיל ב-)</span>
<span class="variable">url</span>.<span class="function">endsWith</span>(<span class="string">"/api"</span>);    <span class="comment">// true (מסתיים ב-)</span></pre>
    </div>

    <div class="modal-card">
        <h3>ניקוי רווחים (trim) ושינוי אותיות רשיות/קטנות</h3>
        <pre><span class="keyword">const</span> <span class="variable">userInput</span> = <span class="string">"   hello   "</span>;

<span class="variable">userInput</span>.<span class="function">trim</span>();      <span class="comment">// "hello" (מנקה משני הצדדים)</span>
<span class="variable">userInput</span>.<span class="function">trimStart</span>(); <span class="comment">// "hello   " (מנקה רק בהתחלה)</span>
<span class="variable">userInput</span>.<span class="function">trimEnd</span>();   <span class="comment">// "   hello" (מנקה רק בסוף)</span>

<span class="keyword">const</span> <span class="variable">word</span> = <span class="string">"JavaScript"</span>;
<span class="variable">word</span>.<span class="function">toUpperCase</span>();    <span class="comment">// "JAVASCRIPT"</span>
<span class="variable">word</span>.<span class="function">toLowerCase</span>();    <span class="comment">// "javascript"</span></pre>
    </div>

    <div class="modal-card">
        <h3>padStart() / padEnd() - ריפוד מחרוזת</h3>
        <pre><span class="keyword">const</span> <span class="variable">num</span> = <span class="string">"5"</span>;

<span class="comment">// מוסיף '0' בהתחלה עד שאורך המחרוזת יהיה 3</span>
<span class="variable">num</span>.<span class="function">padStart</span>(<span class="string">3</span>, <span class="string">"0"</span>); <span class="comment">// "005"</span>

<span class="comment">// מוסיף בסוף</span>
<span class="variable">num</span>.<span class="function">padEnd</span>(<span class="string">4</span>, <span class="string">"."</span>); <span class="comment">// "5..."</span></pre>
    </div>
</div>
        `
    },
    objectMethods: {
        title: '🗂️ מתודות מובנות לאובייקטים (Objects)',
        content: `
<div class="modal-grid">
    <div class="modal-card">
        <h3>Object.keys() / Object.values()</h3>
        <p>שליפת המפתחות או הערכים למערך.</p>
        <pre><span class="keyword">const</span> <span class="variable">user</span> = { <span class="variable">name</span>: <span class="string">'Dan'</span>, <span class="variable">age</span>: <span class="string">30</span> };

<span class="comment">// שמירה במשתנה</span>
<span class="keyword">const</span> <span class="variable">keys</span> = <span class="variable">Object</span>.<span class="function">keys</span>(<span class="variable">user</span>);     <span class="comment">// ["name", "age"]</span>
<span class="keyword">const</span> <span class="variable">values</span> = <span class="variable">Object</span>.<span class="function">values</span>(<span class="variable">user</span>); <span class="comment">// ["Dan", 30]</span>

<span class="comment">// שרשור עם forEach</span>
<span class="variable">Object</span>.<span class="function">keys</span>(<span class="variable">user</span>).<span class="function">forEach</span>(<span class="variable">key</span> =&gt; {
    <span class="function">console</span>.<span class="function">log</span>(<span class="variable">key</span>, <span class="string">':'</span>, <span class="variable">user</span>[<span class="variable">key</span>]);
});</pre>
    </div>

    <div class="modal-card">
        <h3>Object.entries()</h3>
        <p>החזרת מערך של מערכים, כאשר כל תת-מערך הוא [מפתח, ערך].</p>
        <pre><span class="keyword">const</span> <span class="variable">entries</span> = <span class="variable">Object</span>.<span class="function">entries</span>(<span class="variable">user</span>);
<span class="comment">// [ ["name", "Dan"], ["age", 30] ]</span>

<span class="comment">// שימוש נפוץ עם Destructuring בתוך לולאה</span>
<span class="variable">Object</span>.<span class="function">entries</span>(<span class="variable">user</span>).<span class="function">forEach</span>(([<span class="variable">key</span>, <span class="variable">value</span>]) =&gt; {
    <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`\${key} is \${value}\`</span>);
});</pre>
    </div>

    <div class="modal-card">
        <h3>Object.assign() - מיזוג ושכפול אובייקטים</h3>
        <pre><span class="keyword">const</span> <span class="variable">target</span> = { <span class="variable">a</span>: <span class="string">1</span> };
<span class="keyword">const</span> <span class="variable">source</span> = { <span class="variable">b</span>: <span class="string">2</span> };

<span class="comment">// מיזוג אובייקטים (מעדכן את target)</span>
<span class="variable">Object</span>.<span class="function">assign</span>(<span class="variable">target</span>, <span class="variable">source</span>); <span class="comment">// target is now { a: 1, b: 2 }</span>

<span class="comment">// שכפול אובייקט (ליצירת עותק חדש בלי לשנות את המקור)</span>
<span class="keyword">const</span> <span class="variable">clone</span> = <span class="variable">Object</span>.<span class="function">assign</span>({}, <span class="variable">target</span>);</pre>
    </div>

    <div class="modal-card">
        <h3>הקפאה וננילה (freeze / seal)</h3>
        <pre><span class="keyword">const</span> <span class="variable">obj</span> = { <span class="variable">id</span>: <span class="string">1</span> };

<span class="comment">// Object.freeze() - נועל לחלוטין. אי אפשר להוסיף, לשנות או למחוק מאפיינים</span>
<span class="variable">Object</span>.<span class="function">freeze</span>(<span class="variable">obj</span>);
<span class="variable">obj</span>.<span class="variable">id</span> = <span class="string">2</span>; <span class="comment">// לא יעבוד (ב-strict mode תזרק שגיאה)</span>

<span class="comment">// Object.seal() - אי אפשר להוסיף/למחוק מאפיינים, אבל כן אפשר לשנות קיימים</span>
<span class="variable">Object</span>.<span class="function">seal</span>(<span class="variable">obj</span>);</pre>
    </div>

    <div class="modal-card">
        <h3>Spread Operator לאובייקטים (...)</h3>
        <p>הדרך המודרנית והקלה לשכפול או מיזוג אובייקטים (תחליף ל-Object.assign).</p>
        <pre><span class="keyword">const</span> <span class="variable">defaults</span> = { <span class="variable">theme</span>: <span class="string">'light'</span>, <span class="variable">admin</span>: <span class="keyword">false</span> };
<span class="keyword">const</span> <span class="variable">userSettings</span> = { <span class="variable">theme</span>: <span class="string">'dark'</span> };

<span class="comment">// מיזוג אובייקטים - האחרון דורס אם יש התנגשות</span>
<span class="keyword">const</span> <span class="variable">merged</span> = { ...<span class="variable">defaults</span>, ...<span class="variable">userSettings</span> };
<span class="comment">// { theme: 'dark', admin: false }</span></pre>
    </div>

    <div class="modal-card">
        <h3>Optional Chaining (?.) & Nullish Coalescing (??)</h3>
        <p>כלים מתקדמים למניעת שגיאות כשניגשים לנתיבים עמוקים באובייקט.</p>
        <pre><span class="keyword">const</span> <span class="variable">person</span> = { <span class="variable">contact</span>: { <span class="variable">email</span>: <span class="string">'a@a.com'</span> } };

<span class="comment">// Optional Chaining (?.) - אם contact לא קיים, יחזיר undefined ולא שגיאה</span>
<span class="keyword">const</span> <span class="variable">phone</span> = <span class="variable">person</span>.<span class="variable">contact</span>?.<span class="variable">phone</span>; 

<span class="comment">// Nullish Coalescing (??) - מספק ערך דיפולט אם הערך משמאל הוא null או undefined</span>
<span class="keyword">const</span> <span class="variable">displayPhone</span> = <span class="variable">phone</span> ?? <span class="string">'No phone provided'</span>;</pre>
        <p>⚠️ <strong>הבדל חשוב:</strong> אופרטור <code>||</code> (OR) מחזיר דיפולט לכל Falsy value (כמו <code>0</code> או <code>""</code>). האופרטור <code>??</code> פועל אך ורק עבור <code>null</code> או <code>undefined</code>.</p>
    </div>
</div>
        `
    }
};

export default contentPart2;
