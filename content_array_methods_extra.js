const contentArrayMethodsExtra = {
  arrayMethodsExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced fade-slide-up" style="border-color:#ff0055;">[10, 20, 30]</div>
                <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">→</span><span class="arrow-label">reduce(sum)</span></div>
                <div class="flow-node-enhanced active delay-2" style="border-color:#00cc88;">60</div>
            </div>
            `,
            text: "<b>שלב 1: צמצום עם reduce</b><br>כמו קופה רושמת! צוברים ערך מכל תא במערך לתוך משתנה מצטבר אחד, ומחזירים תוצאה בודדת."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">[ {id:1}, {id:2} ]</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">find(id===2)</span></div>
                <div class="flow-node-enhanced active bounce-in">{id:2}</div>
            </div>
            `,
            text: "<b>שלב 2: איתור מדויק עם find</b><br>כמו בלש פרטי. מוצא ומחזיר את ה<b>איבר הראשון</b> שמקיים את התנאי, ואז עוצר מיד את החיפוש!"
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced slide-in-right">
                <div class="flow-node-enhanced">[ 3, 1, 2 ]</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">sort((a,b)=>a-b)</span></div>
                <div class="flow-node-enhanced active">[ 1, 2, 3 ]</div>
            </div>
            `,
            text: "<b>שלב 3: מיון עם sort</b><br>מסדר את המערך <b>במקום</b> (משנה את המקור!). תמיד חייבים להעביר לו פונקציית השוואה כדי שידע למיין מספרים נכון."
        }
    ],
    title: '📈 תרגול מערכים נוסף (Reduce, Find, Sort)',
    content: `
      <div class="card-body">
        <p class="lead">לאחר שהכרנו את הבסיס, נלמד את מתודות המערך העוצמתיות ביותר שיחסכו לכם עשרות שורות קוד.</p>
        
        <h4>1. Array.prototype.reduce() 🧮</h4>
        <p>המתודה שמאפשרת "לצמצם" מערך שלם לערך אחד. שימושי במיוחד לחישוב סך הכל בעגלת קניות.</p>
        <pre><code><span class="t-key">const</span> cart = [ { item: <span class="t-str">"Apple"</span>, price: <span class="t-num">5</span> }, { item: <span class="t-str">"Banana"</span>, price: <span class="t-num">10</span> } ];

<span class="t-key">const</span> total = cart.<span class="t-fn">reduce</span>((acc, current) => acc + current.price, <span class="t-num">0</span>);
console.<span class="t-fn">log</span>(total); <span class="t-com">// 15</span></code></pre>

        <h4>2. Array.prototype.find() 🔍</h4>
        <p>מחפש ומחזיר את ה<b>איבר הראשון</b> שמקיים תנאי מסוים. אם הוא מוצא, הוא עוצר.</p>
        <pre><code><span class="t-key">const</span> users = [ { id: <span class="t-num">1</span>, name: <span class="t-str">"דני"</span> }, { id: <span class="t-num">2</span>, name: <span class="t-str">"רוני"</span> } ];
<span class="t-key">const</span> user = users.<span class="t-fn">find</span>(u => u.id === <span class="t-num">2</span>);
console.<span class="t-fn">log</span>(user.name); <span class="t-com">// "רוני"</span></code></pre>

        <h4>3. Array.prototype.sort() 🔀</h4>
        <p>משנה את המערך המקורי ומשווה תווים. כדי למיין נכון חובה להעביר פונקציית השוואה.</p>
        <pre><code><span class="t-key">const</span> numbers = [<span class="t-num">30</span>, <span class="t-num">4</span>, <span class="t-num">100</span>, <span class="t-num">21</span>];
numbers.<span class="t-fn">sort</span>((a, b) => a - b);
console.<span class="t-fn">log</span>(numbers); <span class="t-com">// [4, 21, 30, 100]</span></code></pre>
      </div>
    `
  }
};
