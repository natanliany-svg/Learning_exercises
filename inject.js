const fs = require('fs');
let content = fs.readFileSync('content_part3.js', 'utf8');

const dockerTech = `
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">מושגי Docker ו-Containers 🐳</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: אימג' | תרגום: תמונה / שבלונה</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> שרטוט או תבנית לקריאה בלבד שמכילה את הקוד, הספריות ומערכת ההפעלה שדרושים להרצת האפליקציה. זה כמו קובץ התקנה (ISO) שלא ניתן לשנות.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: קונטיינר | תרגום: מכולה / מיכל</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> מופע חי ורץ של Image. זהו המחשב הקטן והמבודד שלנו בתוך המחשב. יכולים לרוץ עשרות קונטיינרים מאותו Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: דימון | תרגום: שדון (שירות רקע)</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> המנוע המרכזי של דוקר שרץ ברקע (Docker Engine). הוא זה שמאזין לבקשות של הלקוח ומבצע אותן בפועל.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">הגייה: ביינד מאונט | תרגום: עיגון / חיבור ישיר</p>
      <p style="margin-bottom: 15px;"><b>משמעות:</b> חיבור תיקייה ספציפית מהמחשב שלכם לתוך הקונטיינר. כל שינוי בלפטופ ישתקף מיד בתוך הקונטיינר (מושלם לפיתוח).</p>
     </div>
    </div>
`;

let startIdx = content.indexOf('techEnglish: {');
let endIdx = content.indexOf('</script>', startIdx);
let endDiv = content.lastIndexOf('</div>', endIdx);
content = content.slice(0, endDiv) + dockerTech + content.slice(endDiv);

const dockerSyntax = `
    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">🐳 Docker & Containers</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Run (הפעלת קונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker run -d -p 8080:80 --name web nginx</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-d</code> - Detached (ברקע)</li>
       <li><code>-p 8080:80</code> - Port Mapping (מארח:קונטיינר)</li>
       <li><code>--name</code> - נתינת שם קריא לקונטיינר</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Build (בניית תמונה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker build -t myapp:v1 .</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-t</code> - נותן תגית/שם לאימג'</li>
       <li><code>.</code> - הנקודה מסמלת את התיקייה הנוכחית</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Compose (הפעלת סביבה)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker-compose up -d</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li>קורא את הקובץ <code>docker-compose.yml</code> ומדליק את כל השרתים.</li>
       <li><code>down</code> יכבה וימחק את הרשת.</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Exec (כניסה לקונטיינר)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker exec -it web bash</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-it</code> - אינטראקטיבי (משאיר חלון פתוח)</li>
       <li>פותח טרמינל (bash או sh) בתוך קונטיינר חי.</li>
      </ul>
     </div>
    </div>
`;

let synStart = content.indexOf('syntaxWarehouse: {');
let synEnd = content.indexOf('</script>', synStart);
let synEndDiv = content.lastIndexOf('</div>', synEnd);
content = content.slice(0, synEndDiv) + dockerSyntax + content.slice(synEndDiv);

fs.writeFileSync('content_part3.js', content, 'utf8');
console.log('Successfully injected Docker info');
