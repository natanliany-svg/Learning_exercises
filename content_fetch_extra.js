const contentFetchExtra = {
  fetchExtra: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced">Client</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">POST /users + JSON Body</span></div>
                <div class="flow-node-enhanced active">Server</div>
            </div>
            `,
            text: "<b>שלב 1: שליחת מידע לשרת</b><br>כדי לשמור או לעדכן מידע (POST), פונקציית Fetch מאפשרת להוסיף אובייקט הגדרות שכולל את השיטה (method) ואת גוף הבקשה (body)."
        }
    ],
    title: '📡 תרגול Fetch (שליחת מידע POST)',
    content: `
      <div class="card-body">
        <p class="lead">עד עכשיו הבאנו מידע בעזרת בקשות GET רגילות. אבל מה אם נרצה ליצור משתמש חדש בשרת? נעשה שימוש ב-POST.</p>
        
        <h4>שליחת נתונים ב-JSON 📦</h4>
        <pre><code><span class="t-key">async function</span> <span class="t-fn">createUser</span>(newUser) {
  <span class="t-key">const</span> options = {
    method: <span class="t-str">'POST'</span>,
    headers: { <span class="t-str">'Content-Type'</span>: <span class="t-str">'application/json'</span> },
    body: JSON.<span class="t-fn">stringify</span>(newUser)
  };

  <span class="t-key">const</span> res = <span class="t-key">await</span> <span class="t-fn">fetch</span>(<span class="t-str">'https://api.example.com/users'</span>, options);
  <span class="t-key">const</span> data = <span class="t-key">await</span> res.<span class="t-fn">json</span>();
  console.<span class="t-fn">log</span>(<span class="t-str">"המשתמש נוצר!"</span>, data);
}

<span class="t-fn">createUser</span>({ name: <span class="t-str">"דני"</span>, age: <span class="t-num">25</span> });</code></pre>
      </div>
    `
  }
};
