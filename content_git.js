const contentGit = {
  gitProject: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced fade-slide-up" style="border-color:#00cc88;">Main Branch</div>
                <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">↘</span><span class="arrow-label">checkout -b</span></div>
                <div class="flow-node-enhanced active delay-2" style="border-color:#38bdf8;">Feature Branch</div>
            </div>
            `,
            text: "<b>שלב 1: פיצול ענפים (Branches)</b><br>בעבודה בצוות, לעולם לא מפתחים יחד על אותו ענף ראשי (Main). כל מפתח מפצל לעצמו 'ענף' חדש, עובד בבטחה, ובסוף ממזג."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">Local Repo</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">git push</span></div>
                <div class="flow-node-enhanced active" style="border-color:#ff0055;">GitHub (Remote)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span><span class="arrow-label">Pull Request</span></div>
                <div class="flow-node-enhanced" style="border-color:#00cc88;">Main</div>
            </div>
            `,
            text: "<b>שלב 2: Pull Request</b><br>לאחר שסיימנו לדחוף ל-GitHub, אנחנו מבקשים אישור למזג את הענף שלנו לראשי כדי שחברי הצוות יעשו Code Review."
        }
    ],
    title: '🐙 פרויקט צוות ב-Git',
    content: `
      <div class="card-body">
        <p class="lead">בחיים האמיתיים, פיתוח נעשה בצוות. Git ו-GitHub מבטיחים שאף אחד לא דורס קוד.</p>
        
        <h4>זרימת העבודה (Git Workflow) 🔄</h4>
        <ol class="tight">
          <li><b>משיכת עדכונים:</b> מתחילים כל יום עם <code>git pull origin main</code>.</li>
          <li><b>יצירת ענף:</b> פותחים ענף: <code>git checkout -b feature/login</code>.</li>
          <li><b>פיתוח מקומי:</b> עושים <code>add</code> ו-<code>commit</code>.</li>
          <li><b>דחיפה:</b> שולחים ל-GitHub עם <code>git push origin feature/login</code>.</li>
          <li><b>מיזוג:</b> פותחים PR ב-GitHub, המנהל בודק ומאשר.</li>
        </ol>

        <h4>מה זה Conflict (התנגשות)? ⚔️</h4>
        <p>כאשר שני מתכנתים משנים בדיוק את אותה שורה, Git לא יודע באיזו גרסה לבחור ומכריז על "Conflict". בסך הכל צריך להיכנס לקובץ, לבחור איזו גרסה לשמור, ולעשות קומיט מחודש.</p>
      </div>
    `
  }
};
