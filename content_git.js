const contentGit = {
  gitProject: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container">
                <div class="anim-node" style="border-color:#38bdf8;">GitHub (Cloud)</div>
                <div class="anim-packet move-down" style="background:#00cc88;">Clone ⬇️</div>
                <div class="anim-node" style="border-style:dashed;">המחשב שלי</div>
            </div>
            `,
            text: "<b>שלב 1: שכפול (Clone)</b><br>כשאנחנו רוצים לעבוד על פרויקט, אנחנו עושים <code>clone</code> כדי להוריד עותק של הריפו מהענן למחשב שלנו."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced" style="border-color:#ff0055;">main</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">↘</span></div>
                <div class="flow-node-enhanced active fade-slide-up" style="border-color:#38bdf8;">feature-branch</div>
            </div>
            `,
            text: "<b>שלב 2: פיצול (Branch)</b><br>לעולם לא עובדים ישירות על הקוד הראשי (main). יוצרים ענף (Branch) צדדי כדי לפתח את הקוד שלנו בבטחה."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced">עבודה בקוד</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced active ripple-out">commit<br>שמירה</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">→</span></div>
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">push<br>לענן</div>
            </div>
            `,
            text: "<b>שלב 3: שמירה ודחיפה (Commit & Push)</b><br>סיימנו? אנחנו שומרים את השינויים מקומית (Commit) ודוחפים (Push) אותם ל-GitHub כדי שכולם יראו."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">הענף שלי</div>
                <div class="flow-arrow-enhanced delay-1"><span class="arrow-icon">→</span><span class="arrow-label">PR</span></div>
                <div class="flow-node-enhanced active delay-2" style="border-color:#00cc88;">אישור חברים</div>
                <div class="flow-arrow-enhanced delay-3"><span class="arrow-icon">→</span><span class="arrow-label">Merge</span></div>
                <div class="flow-node-enhanced" style="border-color:#ff0055;">main</div>
            </div>
            `,
            text: "<b>שלב 4: אישור ומיזוג (PR & Merge)</b><br>פותחים בקשת משיכה (Pull Request). חבר צוות עובר על הקוד, ואם הכל תקין - הוא מאשר מיזוג (Merge) ל-main."
        },
        {
            html_visual: `
            <div class="anim-container" style="justify-content: center;">
                <div class="flow-node-enhanced error" style="width: 150px; text-align:center; z-index:5;">💥 קונפליקט 💥</div>
                <div class="anim-packet move-circle" style="left:20%; top:50%; background:#ff0055;">מפתח 1</div>
                <div class="anim-packet move-circle" style="left:80%; top:50%; background:#ffd700;">מפתח 2</div>
            </div>
            `,
            text: "<b>שלב 5: התנגשות (Conflict)</b><br>כששני מתכנתים משנים את אותה השורה בדיוק! Git נלחץ, ואנחנו צריכים לפתור את ההתנגשות ידנית בקוד לפני שנמשיך."
        }
    ],
    title: '🤝 פרויקט צוות ב-Git',
    content: `
      <div class="card-body">
        <p class="lead">עבודה בצוות דורשת סדר! Git עוזר לנו לשתף קוד בלי למחוק עבודה של אחרים. בואו נבין את זרימת העבודה (Workflow) המלאה של צוות פיתוח.</p>
        
        <h4>1. מורידים את הפרויקט (Clone)</h4>
        <p>ראש הצוות יצר את ה-Repository ב-GitHub. עכשיו כולם צריכים להוריד אותו למחשב שלהם:</p>
        <pre><code><span class="t-com"># העתקת הפרויקט מהענן למחשב האישי</span>
git clone REPO_URL</code></pre>
        
        <h4>2. כל אחד עובד על פיצ'ר משלו (Branches)</h4>
        <p>כדי שכולם יוכלו לעבוד במקביל, אנחנו מתפצלים מהענף הראשי (<code class="inl">main</code>) לענפים פרטיים.</p>
        <pre><code><span class="t-com"># יצירת ענף חדש עבור הפיצ'ר שלי ומעבר אליו</span>
git checkout -b feature-tasks</code></pre>
        <div class="callout analogy">
          <span class="ico">🌿</span>
          <div class="ct"><b>אנלוגיה:</b> ליצור Branch זה כמו לקחת עותק של טיוטת הספר, לשכתב סצנה בחדר משלנו, ורק אז להראות לשאר - ככה לעולם לא נהרוס בטעות את הספר המקורי.</div>
        </div>

        <h4>3. שמירה וסנכרון הקוד</h4>
        <p>כל מתכנת שומר את הקוד שלו ודוחף אותו בחזרה לענן.</p>
        <pre><code><span class="t-com"># 1. הוספת השינויים שעשינו</span>
git add .
<span class="t-com"># 2. שמירת הגרסה עם הודעה קצרה</span>
git commit -m <span class="t-str">"add tasks functionality"</span>
<span class="t-com"># 3. דחיפת הקוד שלנו ל-GitHub (לענף שלנו!)</span>
git push origin feature-tasks</code></pre>

        <h4>4. ביקורת עמיתים (Pull Request / Code Review)</h4>
        <p>לעולם לא מכניסים קוד ל-main לבד! ב-GitHub אנחנו פותחים <b>Pull Request (PR)</b>.</p>
        <ul class="tight">
          <li>כל מתכנת מסתכל על הקוד של מישהו אחר בצוות.</li>
          <li>בודקים שאין שגיאות או באגים.</li>
          <li>ורק אז, לוחצים על <b>Merge</b> כדי לחבר את הקוד ל-main!</li>
        </ul>
        <pre><code><span class="t-com"># אל תשכחו! אחרי שמישהו הכניס קוד ל-main, תעודכנו:</span>
git checkout main
git pull</code></pre>

        <h4>5. כשכולם עורכים את אותו הקובץ (Conflicts!)</h4>
        <p>אם שני אנשים ערכו בדיוק את <b>אותה השורה</b>, כשנעשה Merge או Pull נקבל שגיאת <b>Conflict</b>.</p>
        <pre><code><span class="t-com">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span>
<span class="t-str">Priority: HIGH (השינוי שלכם)</span>
<span class="t-com">=======</span>
<span class="t-str">Priority: MEDIUM (השינוי של חבר הצוות)</span>
<span class="t-com">&gt;&gt;&gt;&gt;&gt;&gt;&gt; main</span></code></pre>
        <p><b>איך פותרים?</b> הולכים לקובץ, מוחקים את הסימונים של Git (&lt;&lt;&lt; ו-===), עורכים את הקוד שייראה נכון, ואז עושים commit חדש לפתרון.</p>

        <div class="callout exam">
          <span class="ico">📌</span>
          <div class="ct"><b>גלגלי הצלה מתקדמים:</b> מסתבכים באמצע עבודה וצריכים לעבור למשהו אחר? כתבו <code class="inl">git stash</code> כדי להחביא את הקוד בצד, ואז <code class="inl">git stash pop</code> כדי להחזירו. מישהו הכניס קוד שבור? מצאו את מספר הקומיט עם <code class="inl">git log</code> והשתמשו ב-<code class="inl">git revert COMMIT_ID</code> כדי לבטל אותו באלגנטיות.</div>
        </div>
      </div>
    `
  }
};
