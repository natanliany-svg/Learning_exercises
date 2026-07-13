const contentPart1 = {}; const contentPart2 = {}; const contentAsyncProjects = {}; const contentDockerBasic = {}; const contentDockerCompose = {}; const contentDockerAdvanced = {}; const contentDockerImagesDeep = {}; const contentDockerComposeAdvanced = {}; const contentProjectsData = {}; const contentQuizData = {};
const serversContent = {
  vanillaServer: {
        visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">
                    <div style="font-size:2rem; margin-bottom:8px;">נ–¥ן¸</div>
                    <div style="font-weight:bold;">׳׳§׳•׳— (׳“׳₪׳“׳₪׳)</div>
                    <div style="font-size:0.75rem; color:var(--ink-faint);">Chrome / Firefox</div>
                </div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon" style="animation: pulse 1.5s infinite;">ג†’</span><span class="arrow-label" style="background:#ff0055; color:white; padding:2px 8px; border-radius:4px;">GET /</span></div>
                <div class="flow-node-enhanced active ripple-out" style="border-color:#4ade80;">
                    <div style="font-size:2rem; margin-bottom:8px;">ג™ן¸</div>
                    <div style="font-weight:bold;">׳©׳¨׳× Node.js</div>
                    <div style="font-size:0.75rem; color:var(--ink-faint);">Port 3000</div>
                </div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 1: ׳©׳׳™׳—׳× ׳”׳‘׳§׳©׳”</b><br>׳”׳׳§׳•׳— (׳”׳“׳₪׳“׳₪׳) ׳©׳•׳׳— ׳‘׳§׳©׳× HTTP GET ׳׳©׳¨׳×. ׳”׳‘׳§׳©׳” ׳׳›׳™׳׳” ׳׳× ׳”-URL, ׳׳× ׳¡׳•׳’ ׳”׳‘׳§׳©׳” (Method), ׳•-Headers ׳ ׳•׳¡׳₪׳™׳. ׳”׳©׳¨׳× ׳׳׳–׳™׳ ׳¢׳ ׳₪׳•׳¨׳˜ ׳׳¡׳•׳™׳ (׳‘׳׳§׳¨׳” ׳©׳׳ ׳• 3000) ׳•׳׳§׳‘׳ ׳׳× ׳”׳‘׳§׳©׳”."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#38bdf8;">
                    <div style="font-size:2rem; margin-bottom:8px;">נ–¥ן¸</div>
                    <div style="font-weight:bold;">׳׳§׳•׳—</div>
                    <div style="font-size:0.75rem; color:#4ade80; font-weight:bold;">ג… ׳׳§׳‘׳ ׳×׳©׳•׳‘׳”!</div>
                </div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon" style="animation: pulse 1.5s infinite;">ג†</span><span class="arrow-label" style="background:#4ade80; color:#11131a; padding:2px 8px; border-radius:4px;">200 OK + JSON</span></div>
                <div class="flow-node-enhanced active ripple-out" style="border-color:#4ade80; background: rgba(74,222,128,0.1);">
                    <div style="font-size:2rem; margin-bottom:8px;">ג™ן¸</div>
                    <div style="font-weight:bold;">׳©׳¨׳× Node.js</div>
                    <div style="font-size:0.75rem; color:var(--ink-faint);">׳׳¢׳‘׳“ ג†’ ׳©׳•׳׳— ׳×׳©׳•׳‘׳”</div>
                </div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 2: ׳¢׳™׳‘׳•׳“ ׳•׳×׳©׳•׳‘׳”</b><br>׳”׳©׳¨׳× ׳׳§׳‘׳ ׳׳× ׳”׳‘׳§׳©׳”, ׳‘׳•׳“׳§ ׳׳” ׳”-URL ׳•׳׳” ׳”-Method (GET? POST?), ׳׳›׳™׳ ׳׳× ׳”׳×׳•׳›׳ ׳”׳׳×׳׳™׳ (HTML, JSON, ׳˜׳§׳¡׳˜), ׳•׳׳—׳–׳™׳¨ ׳×׳©׳•׳‘׳” (Response) ׳¢׳ ׳§׳•׳“ ׳¡׳˜׳˜׳•׳¡ (200 OK) ׳•׳’׳•׳£ ׳”׳×׳©׳•׳‘׳”."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up" style="flex-direction: column; gap: 12px;">
                <div style="display:flex; align-items:center; gap:12px; width:100%;">
                    <div class="flow-node-enhanced" style="border-color:#38bdf8; min-width:120px; padding:10px;">
                        <div style="font-weight:bold; font-size:0.9rem;">GET /</div>
                        <div style="font-size:0.7rem; color:var(--ink-faint);">׳“׳£ ׳”׳‘׳™׳×</div>
                    </div>
                    <div style="flex:1; height:3px; background: linear-gradient(90deg, #38bdf8, #4ade80); border-radius:4px;"></div>
                    <div style="background:#4ade80; color:#11131a; padding:6px 14px; border-radius:8px; font-weight:bold; font-size:0.85rem;">200 ג…</div>
                </div>
                <div style="display:flex; align-items:center; gap:12px; width:100%;">
                    <div class="flow-node-enhanced" style="border-color:#a78bfa; min-width:120px; padding:10px;">
                        <div style="font-weight:bold; font-size:0.9rem;">GET /users</div>
                        <div style="font-size:0.7rem; color:var(--ink-faint);">׳¨׳©׳™׳׳× ׳׳©׳×׳׳©׳™׳</div>
                    </div>
                    <div style="flex:1; height:3px; background: linear-gradient(90deg, #a78bfa, #4ade80); border-radius:4px;"></div>
                    <div style="background:#4ade80; color:#11131a; padding:6px 14px; border-radius:8px; font-weight:bold; font-size:0.85rem;">200 ג…</div>
                </div>
                <div style="display:flex; align-items:center; gap:12px; width:100%;">
                    <div class="flow-node-enhanced" style="border-color:#fb7185; min-width:120px; padding:10px;">
                        <div style="font-weight:bold; font-size:0.9rem;">GET /xyz</div>
                        <div style="font-size:0.7rem; color:var(--ink-faint);">׳ ׳×׳™׳‘ ׳׳ ׳§׳™׳™׳</div>
                    </div>
                    <div style="flex:1; height:3px; background: linear-gradient(90deg, #fb7185, #fb7185); border-radius:4px;"></div>
                    <div style="background:#fb7185; color:#11131a; padding:6px 14px; border-radius:8px; font-weight:bold; font-size:0.85rem;">404 ג</div>
                </div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 3: ׳ ׳™׳×׳•׳‘ (Routing) ׳™׳“׳ ׳™</b><br>׳‘-Vanilla HTTP ׳”׳©׳¨׳× ׳‘׳•׳“׳§ ׳™׳“׳ ׳™׳× ׳׳× <code>req.url</code> ׳•-<code>req.method</code> ׳›׳“׳™ ׳׳”׳—׳׳™׳˜ ׳׳” ׳׳¢׳©׳•׳×. ׳ ׳×׳™׳‘׳™׳ ׳׳•׳›׳¨׳™׳ ׳׳§׳‘׳׳™׳ 200 OK, ׳ ׳×׳™׳‘׳™׳ ׳׳ ׳׳•׳›׳¨׳™׳ ג†’ 404 Not Found. ׳–׳” ׳›׳׳• ׳׳׳¦׳¨ ׳©׳׳›׳™׳¨ ׳׳× ׳”׳×׳₪׳¨׳™׳˜ ׳•׳™׳•׳“׳¢ ׳׳’׳©׳× ׳׳׳ ׳” ׳”׳ ׳›׳•׳ ׳”."
        }
    ],

    title: 'נ ׳©׳¨׳× HTTP ׳‘׳¡׳™׳¡׳™ (Vanilla HTTP Server)',
    content: `
      <div class="card-body">
        <p class="lead">׳׳₪׳ ׳™ ׳©׳׳©׳×׳׳©׳™׳ ׳‘׳¡׳₪׳¨׳™׳•׳× ׳׳•׳›׳ ׳•׳× ׳›׳׳• Express, ׳—׳©׳•׳‘ ׳׳”׳‘׳™׳ ׳׳™׳ ׳‘׳•׳ ׳™׳ ׳©׳¨׳× ׳׳׳₪׳¡ ׳‘׳׳׳¦׳¢׳•׳× ׳׳•׳“׳•׳ ׳”-<code>http</code> ׳”׳׳•׳‘׳ ׳” ׳‘-Node.js. ׳©׳¨׳× ׳›׳–׳” ׳ ׳§׳¨׳ "Vanilla HTTP Server" ׳•׳”׳•׳ ׳׳׳₪׳©׳¨ ׳׳ ׳• ׳׳¨׳׳•׳× ׳׳× ׳’׳׳’׳׳™ ׳”׳©׳™׳ ׳™׳™׳ ׳”׳׳׳™׳×׳™׳™׳ ׳©׳ ׳”׳¨׳©׳×.</p>
        
        <h4>1. ׳׳” ׳–׳” ׳‘׳›׳׳ ׳©׳¨׳× HTTP?</h4>
        <p>׳©׳¨׳× ׳׳™׳ ׳˜׳¨׳ ׳˜ ׳”׳•׳ ׳₪׳©׳•׳˜ ׳×׳”׳׳™׳ ׳©׳¨׳¥ ׳‘׳׳—׳©׳‘ ׳•׳׳§׳©׳™׳‘ ׳"׳₪׳•׳¨׳˜" (Port) ׳׳¡׳•׳™׳. ׳›׳׳©׳¨ ׳׳’׳™׳¢׳” ׳‘׳§׳©׳” (Request) ׳׳”׳“׳₪׳“׳₪׳, ׳”׳©׳¨׳× ׳׳¢׳‘׳“ ׳׳•׳×׳” ׳•׳׳—׳–׳™׳¨ ׳×׳’׳•׳‘׳” (Response).</p>
        <div class="callout analogy">
          <span class="ico">נ”</span>
          <div class="ct"><b>׳׳ ׳׳•׳’׳™׳”:</b> ׳©׳¨׳× ׳”׳•׳ ׳›׳׳• ׳׳׳¦׳¨ ׳‘׳׳¡׳¢׳“׳”. ׳”׳׳§׳•׳— (׳”׳“׳₪׳“׳₪׳) ׳׳’׳™׳© ׳”׳–׳׳ ׳” (Request) ׳׳”׳×׳₪׳¨׳™׳˜ (URL), ׳”׳׳׳¦׳¨ ׳׳•׳§׳— ׳׳•׳×׳” ׳׳׳˜׳‘׳— (׳׳©׳¨׳× ׳¢׳¦׳׳•), ׳•׳׳—׳–׳™׳¨ ׳¦׳׳—׳× ׳׳•׳›׳ ׳” (Response) ׳¢׳ ׳”׳׳•׳›׳ (HTML ׳׳• JSON).</div>
        </div>

        <h4>2. ׳©׳¨׳× Hello World ׳‘׳¡׳™׳¡׳™</h4>
        <p>׳”׳§׳׳× ׳©׳¨׳× ׳‘׳¡׳™׳¡׳™ ׳©׳׳—׳–׳™׳¨ ׳×׳©׳•׳‘׳” ׳§׳‘׳•׳¢׳” ׳׳›׳ ׳₪׳ ׳™׳™׳”:</p>
        <pre><code><span class="t-key">const</span> http = <span class="t-fn">require</span>(<span class="t-str">"http"</span>);

<span class="t-com">// 1. ׳™׳¦׳™׳¨׳× ׳”׳©׳¨׳×</span>
<span class="t-key">const</span> server = http.<span class="t-fn">createServer</span>((req, res) => {
  <span class="t-com">// ׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳–׳• ׳¨׳¦׳” ׳‘׳›׳ ׳₪׳¢׳ ׳©׳׳×׳§׳‘׳׳× ׳‘׳§׳©׳”</span>
  
  <span class="t-com">// ׳”׳—׳–׳¨׳× ׳›׳•׳×׳¨׳× (Header) ׳•׳¡׳˜׳˜׳•׳¡</span>
  res.statusCode = <span class="t-num">200</span>;
  res.<span class="t-fn">setHeader</span>(<span class="t-str">"Content-Type"</span>, <span class="t-str">"text/plain"</span>);
  
  <span class="t-com">// ׳¡׳™׳•׳ ׳”׳×׳©׳•׳‘׳” ׳•׳©׳׳™׳—׳× ׳”׳׳™׳“׳¢ (׳—׳•׳‘׳”!)</span>
  res.<span class="t-fn">end</span>(<span class="t-str">"Hello from my server"</span>);
});

<span class="t-com">// 2. ׳”׳׳–׳ ׳” ׳׳₪׳•׳¨׳˜ 3000</span>
<span class="t-key">const</span> PORT = <span class="t-num">3000</span>;
server.<span class="t-fn">listen</span>(PORT, () => {
  console.<span class="t-fn">log</span>(<span class="t-str">\`Server running on port \${PORT}\`</span>);
});</code></pre>
        <div class="callout warn">
          <span class="ico">ג ן¸</span>
          <div class="ct"><b>׳—׳•׳§ ׳”׳‘׳¨׳–׳: res.end() ׳”׳•׳ ׳—׳•׳‘׳”!</b> ׳׳ ׳×׳©׳›׳—׳• ׳׳§׳¨׳•׳ ׳-<code>res.end()</code> (׳׳• <code>res.write()</code> ׳•׳׳– <code>res.end()</code>), ׳”׳“׳₪׳“׳₪׳ ׳™׳™׳©׳׳¨ ׳‘׳׳¦׳‘ ׳”׳׳×׳ ׳” ׳׳™׳ ׳¡׳•׳₪׳™ (Loading) ׳•׳‘׳¡׳•׳£ ׳™׳§׳¨׳•׳¡ ׳¢׳§׳‘ Timeout. ׳”׳©׳¨׳× ׳©׳׳›׳ ׳׳ ׳™׳—׳–׳™׳¨ ׳×׳©׳•׳‘׳”.</div>
        </div>

        <h4>3. ׳ ׳™׳×׳•׳‘ (Routing) ׳™׳“׳ ׳™ ׳׳₪׳™ URL ׳•-Method</h4>
        <p>׳›׳“׳™ ׳©׳”׳©׳¨׳× ׳™׳—׳–׳™׳¨ ׳“׳₪׳™׳ ׳©׳•׳ ׳™׳ ׳׳• ׳™׳‘׳¦׳¢ ׳₪׳¢׳•׳׳•׳× ׳©׳•׳ ׳•׳×, ׳¢׳׳™׳ ׳• ׳׳‘׳“׳•׳§ ׳׳× ׳₪׳¨׳˜׳™ ׳”׳‘׳§׳©׳”: <code>req.url</code> (׳”׳ ׳×׳™׳‘) ׳•-<code>req.method</code> (׳¡׳•׳’ ׳”׳‘׳§׳©׳” - GET, POST, ׳•׳›׳“').</p>
        <pre><code><span class="t-key">const</span> server = http.<span class="t-fn">createServer</span>((req, res) => {
  <span class="t-key">const</span> url = req.url;
  <span class="t-key">const</span> method = req.method;

  res.<span class="t-fn">setHeader</span>(<span class="t-str">"Content-Type"</span>, <span class="t-str">"text/plain; charset=utf-8"</span>);

  <span class="t-com">// ׳‘׳“׳™׳§׳× ׳ ׳™׳×׳•׳‘</span>
  <span class="t-ctl">if</span> (method === <span class="t-str">"GET"</span> && url === <span class="t-str">"/"</span>) {
    res.statusCode = <span class="t-num">200</span>;
    res.<span class="t-fn">end</span>(<span class="t-str">"׳‘׳¨׳•׳›׳™׳ ׳”׳‘׳׳™׳ ׳׳“׳£ ׳”׳‘׳™׳×"</span>);
  } <span class="t-ctl">else if</span> (method === <span class="t-str">"GET"</span> && url === <span class="t-str">"/about"</span>) {
    res.statusCode = <span class="t-num">200</span>;
    res.<span class="t-fn">end</span>(<span class="t-str">"׳“׳£ ׳׳•׳“׳•׳×"</span>);
  } <span class="t-ctl">else if</span> (method === <span class="t-str">"GET"</span> && url === <span class="t-str">"/users"</span>) {
    res.statusCode = <span class="t-num">200</span>;
    res.<span class="t-fn">end</span>(<span class="t-str">"׳¨׳©׳™׳׳× ׳׳©׳×׳׳©׳™׳"</span>);
  } <span class="t-ctl">else</span> {
    <span class="t-com">// ׳ ׳×׳™׳‘ ׳׳ ׳ ׳׳¦׳</span>
    res.statusCode = <span class="t-num">404</span>;
    res.<span class="t-fn">end</span>(<span class="t-str">"׳”׳¢׳׳•׳“ ׳׳ ׳ ׳׳¦׳ נ˜­"</span>);
  }
});</code></pre>
        <div class="callout exam">
          <span class="ico">נ“</span>
          <div class="ct"><b>׳׳׳‘׳—׳:</b> ׳–׳›׳¨׳• ׳׳× ׳”׳¡׳˜׳˜׳•׳¡׳™׳ ׳”׳—׳©׳•׳‘׳™׳:
            <br>ג€¢ <b>200 (OK)</b>: ׳”׳‘׳§׳©׳” ׳”׳¦׳׳™׳—׳” ׳•׳”׳×׳©׳•׳‘׳” ׳׳•׳›׳ ׳”.
            <br>ג€¢ <b>201 (Created)</b>: ׳™׳¦׳™׳¨׳” ׳׳•׳¦׳׳—׳× (׳׳׳©׳ ׳™׳¦׳™׳¨׳× ׳׳©׳×׳׳© ׳—׳“׳© ׳‘-POST).
            <br>ג€¢ <b>400 (Bad Request)</b>: ׳§׳׳˜ ׳׳ ׳×׳§׳™׳ ׳׳• ׳©׳’׳™׳׳× ׳׳§׳•׳—.
            <br>ג€¢ <b>404 (Not Found)</b>: ׳”׳ ׳×׳™׳‘ ׳׳• ׳”׳׳©׳׳‘ ׳”׳׳‘׳•׳§׳© ׳׳ ׳§׳™׳™׳.
            <br>ג€¢ <b>405 (Method Not Allowed)</b>: ׳”׳ ׳×׳™׳‘ ׳§׳™׳™׳ ׳׳ ׳¡׳•׳’ ׳”׳‘׳§׳©׳” (Method) ׳׳ ׳ ׳×׳׳ (׳׳׳©׳ ׳׳©׳׳•׳— POST ׳׳ ׳×׳™׳‘ ׳©׳×׳•׳׳ ׳¨׳§ ׳‘-GET).
            <br>ג€¢ <b>500 (Internal Server Error)</b>: ׳©׳’׳™׳׳” ׳‘׳§׳•׳“ ׳©׳ ׳”׳©׳¨׳× ׳¢׳¦׳׳•.
          </div>
        </div>

        <div style="background-color: #f3e5f5; padding: 15px; border-radius: 8px; border-right: 5px solid #9c27b0; margin-bottom: 20px;">
          <h3 style="color: #9c27b0; margin-top: 0;">נ“­ ׳׳™׳ ׳‘׳•׳“׳§׳™׳ ׳©׳¨׳× ׳‘׳¡׳™׳¡׳™ ׳‘-Postman?</h3>
          <p style="font-size: 1.1rem; margin-bottom: 0;">׳׳—׳¨׳™ ׳©׳”׳¨׳¦׳× ׳׳× ׳”׳©׳¨׳× ׳¢׳ <code>node app.js</code>, ׳₪׳×׳— ׳׳× Postman. ׳‘׳—׳¨ ׳‘׳©׳™׳˜׳× <strong>GET</strong> (׳›׳™ ׳׳ ׳—׳ ׳• ׳¨׳§ ׳׳‘׳§׳©׳™׳ ׳׳™׳“׳¢), ׳•׳‘׳©׳•׳¨׳× ׳”-URL ׳׳׳¢׳׳” ׳”׳§׳׳“ ׳׳× ׳”׳›׳×׳•׳‘׳× ׳”׳׳§׳•׳׳™׳×: <code>http://localhost:3000</code>. ׳›׳©׳×׳׳—׳¥ Send, ׳×׳•׳›׳ ׳׳¨׳׳•׳× ׳׳׳˜׳” ׳׳× ׳”׳×׳©׳•׳‘׳” "Hello from my server" ׳©׳”׳©׳¨׳× ׳”׳—׳–׳™׳¨ ׳׳ ׳•!</p>
        </div>
      </div>
    `
  },
  httpParams: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up" style="flex-direction: column; gap: 16px;">
                <div style="text-align:center; font-weight:bold; font-size:1.1rem; color:var(--gold); margin-bottom:8px;">׳©׳׳•׳©׳× ׳”׳“׳¨׳›׳™׳ ׳׳”׳¢׳‘׳™׳¨ ׳׳™׳“׳¢ ׳׳©׳¨׳×</div>
                <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center;">
                    <div class="flow-node-enhanced" style="border-color:#38bdf8; flex:1; min-width:140px;">
                        <div style="font-size:1.5rem; margin-bottom:6px;">נ·ן¸</div>
                        <div style="font-weight:bold; color:#38bdf8;">URL Params</div>
                        <div style="font-size:0.75rem; color:var(--ink-faint); margin-top:4px;">/users/<b style="color:#ff0055;">42</b></div>
                        <div style="font-size:0.7rem; color:var(--ink-soft); margin-top:6px;">req.params.id</div>
                    </div>
                    <div class="flow-node-enhanced" style="border-color:#a78bfa; flex:1; min-width:140px;">
                        <div style="font-size:1.5rem; margin-bottom:6px;">נ”</div>
                        <div style="font-weight:bold; color:#a78bfa;">Query String</div>
                        <div style="font-size:0.75rem; color:var(--ink-faint); margin-top:4px;">?role=<b style="color:#ff0055;">admin</b></div>
                        <div style="font-size:0.7rem; color:var(--ink-soft); margin-top:6px;">req.query.role</div>
                    </div>
                    <div class="flow-node-enhanced" style="border-color:#4ade80; flex:1; min-width:140px;">
                        <div style="font-size:1.5rem; margin-bottom:6px;">נ“¦</div>
                        <div style="font-weight:bold; color:#4ade80;">Body (׳’׳•׳£)</div>
                        <div style="font-size:0.75rem; color:var(--ink-faint); margin-top:4px;">{name: <b style="color:#ff0055;">"Carol"</b>}</div>
                        <div style="font-size:0.7rem; color:var(--ink-soft); margin-top:6px;">req.body.name</div>
                    </div>
                </div>
            </div>
            `,
            text: "<b>׳©׳׳•׳© ׳“׳¨׳›׳™ ׳”׳¢׳‘׳¨׳× ׳׳™׳“׳¢ ׳‘-HTTP</b><br><b>URL Params</b> ג€” ׳—׳׳§ ׳׳”׳ ׳×׳™׳‘ ׳¢׳¦׳׳•, ׳׳–׳”׳” ׳™׳™׳—׳•׳“׳™ (׳›׳׳• ׳׳¡׳₪׳¨ ׳‘׳™׳×). <b>Query String</b> ג€” ׳׳—׳¨׳™ ׳¡׳™׳׳ ?, ׳׳¡׳™׳ ׳•׳ ׳•׳—׳™׳₪׳•׳© (׳›׳׳• ׳₪׳™׳׳˜׳¨ ׳‘׳—׳ ׳•׳×). <b>Body</b> ג€” ׳ ׳¡׳×׳¨, ׳‘׳×׳•׳ ׳”׳‘׳§׳©׳”, ׳׳”׳¢׳‘׳¨׳× ׳׳•׳‘׳™׳™׳§׳˜׳™׳ ׳©׳׳׳™׳ (׳›׳׳• ׳˜׳•׳₪׳¡ ׳׳׳)."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up" style="flex-direction: column; gap: 8px;">
                <div style="background: rgba(56,189,248,0.1); border: 1px solid #38bdf8; border-radius:12px; padding:12px; text-align:center;">
                    <div style="font-size:0.8rem; color:var(--ink-faint); margin-bottom:4px;">URL ׳׳׳:</div>
                    <div style="font-family: 'JetBrains Mono', monospace; font-size:0.9rem; direction:ltr;">
                        http://localhost:3000/<span style="color:#38bdf8; font-weight:bold;">users</span>/<span style="background:#ff0055; color:white; padding:2px 6px; border-radius:4px;">42</span>?<span style="color:#a78bfa; font-weight:bold;">role</span>=<span style="background:#a78bfa; color:white; padding:2px 6px; border-radius:4px;">admin</span>&<span style="color:#a78bfa; font-weight:bold;">limit</span>=<span style="background:#a78bfa; color:white; padding:2px 6px; border-radius:4px;">5</span>
                    </div>
                </div>
                <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap;">
                    <div style="background:rgba(255,0,85,0.1); border:1px solid #ff0055; border-radius:8px; padding:8px 14px; font-size:0.8rem;">
                        <div style="color:#ff0055; font-weight:bold;">req.params.id</div>
                        <div>ג†’ 42</div>
                    </div>
                    <div style="background:rgba(167,139,250,0.1); border:1px solid #a78bfa; border-radius:8px; padding:8px 14px; font-size:0.8rem;">
                        <div style="color:#a78bfa; font-weight:bold;">req.query.role</div>
                        <div>ג†’ "admin"</div>
                    </div>
                    <div style="background:rgba(167,139,250,0.1); border:1px solid #a78bfa; border-radius:8px; padding:8px 14px; font-size:0.8rem;">
                        <div style="color:#a78bfa; font-weight:bold;">req.query.limit</div>
                        <div>ג†’ "5"</div>
                    </div>
                </div>
            </div>
            `,
            text: "<b>׳ ׳™׳×׳•׳— URL ׳׳׳</b><br>׳‘׳×׳•׳ ׳›׳×׳•׳‘׳× ׳׳—׳× ׳׳₪׳©׳¨ ׳׳©׳׳‘ ׳’׳ URL Params (׳”׳׳¡׳₪׳¨ 42 ׳‘׳ ׳×׳™׳‘) ׳•׳’׳ Query String (role=admin&limit=5). Express ׳©׳•׳׳£ ׳׳•׳˜׳•׳׳˜׳™׳× ׳׳× ׳©׳ ׳™ ׳”׳¡׳•׳’׳™׳ ׳׳׳•׳‘׳™׳™׳§׳˜׳™׳ ׳©׳•׳ ׳™׳: <code>req.params</code> ׳•-<code>req.query</code>."
        }
    ],

    title: 'נ§© ׳₪׳¨׳׳˜׳¨׳™׳ ׳‘׳‘׳§׳©׳•׳× HTTP (Params, Query, Body)',
    content: `
      <div class="card-body">
        <p class="lead">׳›׳׳©׳¨ ׳׳ ׳• ׳׳×׳§׳©׳¨׳™׳ ׳¢׳ ׳©׳¨׳×, ׳׳ ׳• ׳¦׳¨׳™׳›׳™׳ ׳׳¢׳™׳×׳™׳ ׳§׳¨׳•׳‘׳•׳× ׳׳”׳¢׳‘׳™׳¨ ׳׳• ׳׳™׳“׳¢ ׳“׳™׳ ׳׳™. ׳™׳©׳ ׳ ׳©׳׳•׳© ׳“׳¨׳›׳™׳ ׳¢׳™׳§׳¨׳™׳•׳× ׳׳”׳¢׳‘׳™׳¨ ׳₪׳¨׳׳˜׳¨׳™׳ ׳‘-HTTP, ׳•׳׳›׳ ׳׳—׳× ׳×׳₪׳§׳™׳“ ׳•׳“׳¨׳ ׳˜׳™׳₪׳•׳ ׳©׳•׳ ׳”.</p>
        
        <div class="tbl-scroll">
          <table>
            <tr><th>׳¡׳•׳’ ׳”׳₪׳¨׳׳˜׳¨</th><th>׳׳™׳§׳•׳ ׳‘׳‘׳§׳©׳”</th><th>׳׳×׳™ ׳׳©׳×׳׳©׳™׳</th><th>׳“׳•׳’׳׳”</th></tr>
            <tr><td><b>URL Params (׳ ׳×׳™׳‘)</b></td><td>׳—׳׳§ ׳׳ ׳×׳™׳‘ ׳”-URL ׳¢׳¦׳׳•</td><td>׳–׳™׳”׳•׳™ ׳™׳©׳™׳¨ ׳©׳ ׳׳©׳׳‘ (׳׳₪׳™ ׳׳–׳”׳”)</td><td><code>/users/42</code></td></tr>
            <tr><td><b>Query String (׳©׳׳™׳׳×׳”)</b></td><td>׳׳—׳¨׳™ ׳¡׳™׳׳ ׳”׳©׳׳׳” <code>?</code> ׳‘-URL</td><td>׳¡׳™׳ ׳•׳, ׳׳™׳•׳, ׳׳• ׳“׳₪׳“׳•׳£ (Pagination)</td><td><code>/users?role=admin&page=2</code></td></tr>
            <tr><td><b>Request Body (׳’׳•׳£ ׳”׳‘׳§׳©׳”)</b></td><td>׳ ׳¡׳×׳¨, ׳‘׳×׳•׳ ׳’׳•׳£ ׳”׳•׳“׳¢׳× ׳”-HTTP</td><td>׳©׳׳™׳—׳× ׳׳•׳‘׳™׳™׳§׳˜׳™׳ ׳׳•׳¨׳›׳‘׳™׳ (׳‘׳™׳¦׳™׳¨׳” ׳׳• ׳¢׳“׳›׳•׳)</td><td><code>{"name":"Carol","age":30}</code></td></tr>
            <tr><td><b>Request Headers (׳›׳•׳×׳¨׳•׳×)</b></td><td>׳‘׳¨׳׳© ׳‘׳§׳©׳× ׳”-HTTP (Metadata)</td><td>׳׳™׳׳•׳× (Token), ׳”׳’׳“׳¨׳× ׳¡׳•׳’ ׳§׳׳˜ ׳•׳׳™׳“׳¢ ׳¢׳ ׳”׳׳§׳•׳—</td><td><code>Authorization: Bearer xyz</code></td></tr>
          </table>
        </div>

        <h4>1. ׳—׳™׳׳•׳¥ URL Params (׳ ׳×׳™׳‘ ׳“׳™׳ ׳׳™) ׳‘-Vanilla</h4>
        <p>׳‘׳©׳¨׳× Vanilla, ׳׳™׳ ׳׳¢׳¨׳›׳× ׳׳•׳‘׳ ׳™׳× ׳׳–׳™׳”׳•׳™ ׳׳©׳×׳ ׳™׳ ׳‘׳ ׳×׳™׳‘ (׳›׳׳• <code>/users/:id</code>). ׳¢׳׳™׳ ׳• ׳׳‘׳¦׳¢ ׳₪׳™׳¦׳•׳ ׳™׳“׳ ׳™ ׳©׳ ׳׳—׳¨׳•׳–׳× ׳”-URL:</p>
        <pre><code><span class="t-key">function</span> <span class="t-fn">extractIdFromUrl</span>(url) {
  <span class="t-com">// url = "/users/42"</span>
  <span class="t-key">const</span> parts = url.<span class="t-fn">split</span>(<span class="t-str">"/"</span>);
  <span class="t-com">// parts = ["", "users", "42"]</span>
  <span class="t-key">const</span> id = <span class="t-fn">Number</span>(parts[<span class="t-num">2</span>]);
  <span class="t-ctl">return</span> id;
}

<span class="t-com">// ׳©׳™׳׳•׳© ׳‘׳©׳¨׳×:</span>
<span class="t-ctl">if</span> (req.url.<span class="t-fn">startsWith</span>(<span class="t-str">"/users/"</span>) && req.method === <span class="t-str">"GET"</span>) {
  <span class="t-key">const</span> id = <span class="t-fn">extractIdFromUrl</span>(req.url);
  <span class="t-key">const</span> user = users.<span class="t-fn">find</span>(u => u.id === id);
  <span class="t-ctl">if</span> (!user) {
    res.statusCode = <span class="t-num">404</span>;
    res.<span class="t-fn">end</span>(JSON.<span class="t-fn">stringify</span>({ error: <span class="t-str">"User not found"</span> }));
  } <span class="t-ctl">else</span> {
    res.statusCode = <span class="t-num">200</span>;
    res.<span class="t-fn">end</span>(JSON.<span class="t-fn">stringify</span>(user));
  }
}</code></pre>

        <h4>2. ׳₪׳¨׳¡׳•׳¨ Query String (׳₪׳¨׳׳˜׳¨׳™ ׳©׳׳™׳׳×׳”)</h4>
        <p>׳”׳“׳¨׳ ׳”׳׳•׳“׳¨׳ ׳™׳× ׳•׳”׳‘׳˜׳•׳—׳” ׳‘׳™׳•׳×׳¨ ׳׳ ׳×׳— Query string ׳”׳™׳ ׳‘׳׳׳¦׳¢׳•׳× ׳”׳׳•׳‘׳™׳™׳§׳˜ ׳”׳׳•׳‘׳ ׳” <code>URL</code>:</p>
        <pre><code><span class="t-com">// req.url = "/users?role=admin&limit=5"</span>
<span class="t-key">const</span> baseURL = <span class="t-str">"http://"</span> + req.headers.host; <span class="t-com">// ׳—׳™׳™׳‘׳™׳ ׳׳¡׳₪׳§ ׳”׳•׳¡׳˜ ׳›׳“׳™ ׳׳₪׳¨׳¡׳¨</span>
<span class="t-key">const</span> parsedUrl = <span class="t-key">new</span> <span class="t-fn">URL</span>(req.url, baseURL);
<span class="t-key">const</span> queryParams = parsedUrl.searchParams;

<span class="t-com">// ׳©׳׳™׳₪׳× ׳”׳₪׳¨׳׳˜׳¨׳™׳</span>
<span class="t-key">const</span> role = queryParams.<span class="t-fn">get</span>(<span class="t-str">"role"</span>); <span class="t-com">// "admin"</span>
<span class="t-key">const</span> limit = queryParams.<span class="t-fn">get</span>(<span class="t-str">"limit"</span>) || <span class="t-num">10</span>; <span class="t-com">// ׳‘׳¨׳™׳¨׳× ׳׳—׳“׳ ׳׳ ׳׳ ׳¡׳•׳₪׳§</span></code></pre>
        <div class="callout analogy">
          <span class="ico">נ·ן¸</span>
          <div class="ct"><b>׳׳ ׳׳•׳’׳™׳”:</b> <b>URL Param</b> ׳”׳•׳ ׳›׳׳• ׳׳¡׳₪׳¨ ׳‘׳™׳× ׳‘׳¨׳—׳•׳‘ (׳׳–׳”׳” ׳™׳™׳—׳•׳“׳™ ׳©׳׳¦׳‘׳™׳¢ ׳¢׳ ׳׳§׳•׳ ׳׳—׳“ ׳¡׳₪׳¦׳™׳₪׳™). <b>Query String</b> ׳”׳•׳ ׳›׳׳• ׳₪׳™׳׳˜׳¨ ׳—׳™׳₪׳•׳© ׳‘׳—׳ ׳•׳× ׳‘׳’׳“׳™׳ (׳׳×׳” ׳¨׳•׳¦׳” ׳׳¨׳׳•׳× ׳׳× ׳›׳ ׳”׳—׳•׳׳¦׳•׳×, ׳׳‘׳ ׳¨׳§ ׳‘׳¦׳‘׳¢ ׳›׳—׳•׳ ׳•׳‘׳׳™׳“׳” M).</div>
        </div>

        <h4>3. ׳§׳¨׳™׳׳× Request Body (׳’׳•׳£ ׳”׳‘׳§׳©׳”) ג€” Stream & Buffer</h4>
        <p>׳’׳•׳£ ׳”׳‘׳§׳©׳” ׳‘-Node.js ׳׳’׳™׳¢ ׳‘׳×׳•׳¨ <b>׳–׳¨׳ ׳ ׳×׳•׳ ׳™׳ (Stream)</b> ׳©׳ ׳—׳‘׳™׳׳•׳× ׳§׳˜׳ ׳•׳× (Chunks), ׳•׳׳ ׳‘׳‘׳× ׳׳—׳×. ׳”׳¡׳™׳‘׳” ׳”׳™׳ ׳×׳׳™׳›׳” ׳‘׳§׳‘׳¦׳™ ׳¢׳ ׳§ ׳׳‘׳׳™ ׳׳”׳¢׳׳™׳¡ ׳¢׳ ׳”׳–׳™׳›׳¨׳•׳. ׳¢׳׳™׳ ׳• ׳׳׳¡׳•׳£ ׳׳× ׳›׳ ׳”-Chunks ׳•׳׳– ׳׳—׳‘׳¨ ׳׳•׳×׳ ׳׳˜׳§׳¡׳˜ ׳׳—׳“ ׳•׳׳×׳¨׳’׳ ׳׳•׳×׳• ׳-JSON.
        <br>׳ ׳¢׳˜׳•׳£ ׳׳× ׳”׳×׳”׳׳™׳ ׳‘-Promise ׳›׳“׳™ ׳׳¢׳‘׳•׳“ ׳‘׳¦׳•׳¨׳” ׳׳•׳“׳¨׳ ׳™׳× ׳¢׳ async/await:</p>
        <pre><code><span class="t-key">function</span> <span class="t-fn">readBody</span>(req) {
  <span class="t-ctl">return</span> <span class="t-key">new</span> <span class="t-fn">Promise</span>((resolve, reject) => {
    <span class="t-key">const</span> chunks = [];
    
    <span class="t-com">// ׳׳׳–׳™׳ ׳™׳ ׳׳—׳׳§ ׳”׳׳™׳“׳¢ ׳©׳׳’׳™׳¢</span>
    req.<span class="t-fn">on</span>(<span class="t-str">"data"</span>, (chunk) => {
      chunks.<span class="t-fn">push</span>(chunk);
    });
    
    <span class="t-com">// ׳׳׳–׳™׳ ׳™׳ ׳׳¡׳™׳•׳ ׳”׳¢׳‘׳¨׳× ׳”׳׳™׳“׳¢</span>
    req.<span class="t-fn">on</span>(<span class="t-str">"end"</span>, () => {
      <span class="t-key">const</span> raw = Buffer.<span class="t-fn">concat</span>(chunks).<span class="t-fn">toString</span>();
      <span class="t-ctl">try</span> {
        <span class="t-com">// ׳׳ ׳¡׳™׳ ׳׳”׳₪׳•׳ ׳-JSON</span>
        resolve(JSON.<span class="t-fn">parse</span>(raw));
      } <span class="t-ctl">catch</span> {
        <span class="t-com">// ׳׳ ׳”׳׳™׳“׳¢ ׳׳ ׳×׳§׳™׳, ׳ ׳—׳–׳™׳¨ ׳׳•׳‘׳™׳™׳§׳˜ ׳¨׳™׳§</span>
        resolve({});
      }
    });
    
    req.<span class="t-fn">on</span>(<span class="t-str">"error"</span>, reject);
  });
}

<span class="t-com">// ׳©׳™׳׳•׳© ׳‘׳©׳¨׳×:</span>
<span class="t-ctl">if</span> (req.method === <span class="t-str">"POST"</span> && req.url === <span class="t-str">"/users"</span>) {
  <span class="t-key">const</span> body = <span class="t-ctl">await</span> <span class="t-fn">readBody</span>(req);
  console.<span class="t-fn">log</span>(<span class="t-str">"New user data:"</span>, body);
  
  res.statusCode = <span class="t-num">201</span>;
  res.<span class="t-fn">end</span>(JSON.<span class="t-fn">stringify</span>({ success: <span class="t-key">true</span>, data: body }));
}</code></pre>
        <div class="callout exam">
          <span class="ico">נ“</span>
          <div class="ct"><b>׳׳׳‘׳—׳:</b> ׳–׳›׳¨׳• ׳©׳§׳¨׳™׳׳× ׳”-Body ׳”׳™׳ <b>׳₪׳¢׳•׳׳” ׳׳¡׳™׳ ׳›׳¨׳•׳ ׳™׳×</b>. ׳›׳“׳™ ׳׳§׳¨׳•׳ ׳׳× ׳”-Body ׳‘׳©׳¨׳× Vanilla ׳—׳•׳‘׳” ׳׳”׳©׳×׳׳© ׳‘׳׳׳–׳™׳ ׳™ ׳”׳׳™׳¨׳•׳¢׳™׳ <code>data</code> ׳•-<code>end</code>. ׳‘׳׳™׳“׳” ׳•׳©׳›׳—׳×׳ ׳׳¢׳©׳•׳× ׳–׳׳×, ׳×׳§׳‘׳׳• ׳׳•׳‘׳™׳™׳§׳˜ ׳¨׳™׳§ ׳׳• ׳‘׳׳×׳™ ׳׳₪׳•׳¢׳ ׳—.</div>
        </div>

        <h4>4. ׳¢׳‘׳•׳“׳” ׳¢׳ HTTP Headers (׳›׳•׳×׳¨׳•׳× ׳”׳‘׳§׳©׳” ׳•׳”׳×׳’׳•׳‘׳”)</h4>
        <p>׳›׳•׳×׳¨׳•׳× (Headers) ׳”׳ ׳׳˜׳-׳“׳׳˜׳” ׳©׳ ׳©׳׳— ׳™׳—׳“ ׳¢׳ ׳”׳‘׳§׳©׳” ׳׳• ׳”׳×׳©׳•׳‘׳”. ׳”׳ ׳׳¡׳₪׳§׳•׳× ׳׳™׳“׳¢ ׳¢׳ ׳×׳•׳›׳ ׳”׳”׳•׳“׳¢׳”, ׳”׳׳§׳•׳— ׳”׳©׳•׳׳—, ׳׳• ׳׳™׳׳•׳× ׳–׳”׳•׳×.
        ׳›׳•׳×׳¨׳× ׳׳•׳¨׳›׳‘׳× ׳׳–׳•׳’ ׳©׳ <code>Key: Value</code>.</p>
        
        <ul class="tight">
          <li><b><code class="inl">Content-Type</code></b> ג€” ׳׳¦׳™׳™׳ ׳׳©׳¨׳× ׳׳”׳• ׳¡׳•׳’ ׳”׳×׳•׳›׳ ׳©׳ ׳©׳׳— ׳׳׳™׳• (׳׳׳©׳ <code>application/json</code>).</li>
          <li><b><code class="inl">Authorization</code></b> ג€” ׳׳©׳׳© ׳׳”׳¢׳‘׳¨׳× ׳׳¡׳™׳׳•׳ ׳™ ׳’׳™׳©׳” (Tokens) ׳׳• ׳₪׳¨׳˜׳™ ׳”׳×׳—׳‘׳¨׳•׳× (׳׳׳©׳ <code>Bearer token123</code>).</li>
          <li><b><code class="inl">Accept</code></b> ג€” ׳׳¦׳™׳™׳ ׳׳©׳¨׳× ׳׳™׳–׳” ׳₪׳•׳¨׳׳˜ ׳×׳•׳›׳ ׳”׳׳§׳•׳— ׳׳¦׳₪׳” ׳׳§׳‘׳ ׳‘׳—׳–׳¨׳”.</li>
          <li><b><code class="inl">User-Agent</code></b> ג€” ׳׳™׳“׳¢ ׳¢׳ ׳”׳“׳₪׳“׳₪׳ ׳•׳׳¢׳¨׳›׳× ׳”׳”׳₪׳¢׳׳” ׳©׳ ׳”׳׳§׳•׳—.</li>
        </ul>

        <h5>׳©׳׳™׳₪׳” ׳•׳§׳¨׳™׳׳” ׳©׳ Headers ׳‘׳©׳¨׳× Vanilla:</h5>
        <pre><code><span class="t-com">// ׳›׳ ׳”׳›׳•׳×׳¨׳•׳× ׳׳’׳™׳¢׳•׳× ׳‘-req.headers ׳•׳”׳׳₪׳×׳—׳•׳× ׳©׳׳”׳ ׳”׳•׳₪׳›׳™׳ ׳׳•׳˜׳•׳׳˜׳™׳× ׳׳׳•׳×׳™׳•׳× ׳§׳˜׳ ׳•׳× (Lowercase)!</span>
<span class="t-key">const</span> contentType = req.headers[<span class="t-str">"content-type"</span>];
<span class="t-key">const</span> token = req.headers[<span class="t-str">"authorization"</span>];

<span class="t-ctl">if</span> (!token) {
  res.statusCode = <span class="t-num">401</span>;
  res.<span class="t-fn">end</span>(JSON.<span class="t-fn">stringify</span>({ error: <span class="t-str">"Missing authentication token"</span> }));
}</code></pre>

        <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; border-right: 5px solid #2196f3; margin-bottom: 20px;">
          <h3 style="color: #2196f3; margin-top: 0;">נ“­ ׳׳™׳ ׳©׳•׳׳—׳™׳ ׳₪׳¨׳׳˜׳¨׳™׳ ׳‘-Postman?</h3>
          <p style="font-size: 1.1rem; margin-bottom: 0;">׳ ׳•׳¨׳ ׳₪׳©׳•׳˜! ׳™׳© ׳׳ ׳©׳×׳™ ׳׳₪׳©׳¨׳•׳™׳•׳×: ׳׳• ׳׳›׳×׳•׳‘ ׳™׳©׳™׳¨׳•׳× ׳‘׳©׳•׳¨׳× ׳”-URL ׳‘-Postman ׳׳× ׳”׳›׳×׳•׳‘׳× <code>http://localhost:3000/profile?name=david&age=30</code>. <strong>׳׳•</strong> (׳•׳–׳” ׳”׳™׳×׳¨׳•׳ ׳©׳ ׳”׳×׳•׳›׳ ׳”) ׳׳׳—׳•׳¥ ׳¢׳ ׳׳©׳•׳ ׳™׳× <strong>Params</strong> ׳•׳׳”׳›׳ ׳™׳¡ ׳׳˜׳‘׳׳” ׳‘׳©׳•׳¨׳” ׳׳—׳×: Key: <code>name</code>, Value: <code>david</code>, ׳•׳‘׳©׳•׳¨׳” ׳©׳ ׳™׳™׳” Key: <code>age</code>, Value: <code>30</code>. ׳₪׳•׳¡׳˜׳׳ ׳›׳‘׳¨ ׳™׳™׳¦׳¨ ׳׳× ׳”׳›׳×׳•׳‘׳× ׳”׳׳׳׳” ׳׳‘׳“!</p>
        </div>
      </div>
    `
  },
  express: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up" style="flex-direction:column; gap:12px;">
                <div style="text-align:center; font-weight:bold; color:var(--gold); font-size:1.1rem; margin-bottom:6px;">נ”„ Vanilla ג†’ Express: ׳”׳׳”׳₪׳›׳”</div>
                <div style="display:flex; align-items:center; gap:10px; justify-content:center; flex-wrap:wrap;">
                    <div class="flow-node-enhanced" style="border-color:#fb7185; opacity:0.7; min-width:160px;">
                        <div style="font-size:0.8rem; color:#fb7185;">נ˜° Vanilla HTTP</div>
                        <div style="font-size:0.7rem; color:var(--ink-faint); margin-top:4px;">if/else ׳׳™׳ ׳¡׳•׳₪׳™׳™׳</div>
                        <div style="font-size:0.7rem; color:var(--ink-faint);">׳§׳¨׳™׳׳× Body ׳™׳“׳ ׳™׳×</div>
                        <div style="font-size:0.7rem; color:var(--ink-faint);">res.end() ׳™׳“׳ ׳™</div>
                    </div>
                    <div class="flow-arrow-enhanced"><span class="arrow-icon" style="animation: pulse 1.5s infinite; font-size:1.5rem;">ג¡</span><span class="arrow-label" style="background:var(--gold); color:#11131a; padding:2px 8px; border-radius:4px;">׳©׳“׳¨׳•׳’!</span></div>
                    <div class="flow-node-enhanced active ripple-out" style="border-color:#4ade80; min-width:160px;">
                        <div style="font-size:0.8rem; color:#4ade80;">נ˜ Express</div>
                        <div style="font-size:0.7rem; color:var(--ink-faint); margin-top:4px;">app.get() ׳ ׳§׳™</div>
                        <div style="font-size:0.7rem; color:var(--ink-faint);">express.json() ׳׳•׳˜׳•׳׳˜׳™</div>
                        <div style="font-size:0.7rem; color:var(--ink-faint);">res.json() ׳׳•׳‘׳ ׳”</div>
                    </div>
                </div>
            </div>
            `,
            text: "<b>׳”׳׳¢׳‘׳¨ ׳-Express</b><br>Express ׳”׳™׳ ׳”׳׳¡׳’׳¨׳× ׳”׳׳•׳‘׳™׳׳” ׳׳©׳¨׳×׳™׳. ׳”׳™׳ ׳¢׳•׳˜׳₪׳× ׳׳× ׳׳•׳“׳•׳ ׳”-http ׳”׳׳•׳‘׳ ׳” ׳©׳ Node ׳•׳”׳•׳₪׳›׳× ׳׳× ׳›׳×׳™׳‘׳× ׳”׳¨׳׳•׳˜׳™׳, ׳”׳˜׳™׳₪׳•׳ ׳‘-JSON ׳•׳”׳©׳’׳™׳׳•׳× ׳׳₪׳©׳•׳˜׳™׳ ׳•׳§׳¨׳™׳׳™׳ ׳”׳¨׳‘׳” ׳™׳•׳×׳¨. ׳‘׳׳§׳•׳ ׳׳‘׳ ׳™ if/else ׳׳¨׳•׳›׳™׳ ג€” ׳©׳•׳¨׳” ׳׳—׳× ׳׳›׳ ׳¨׳׳•׳˜."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up" style="flex-direction:column; gap:10px;">
                <div style="text-align:center; font-weight:bold; color:var(--gold); margin-bottom:6px;">נ›‚ ׳©׳¨׳©׳¨׳× Middleware ג€” ׳”׳¦׳ ׳¨׳× ׳©׳ Express</div>
                <div style="display:flex; align-items:center; gap:6px; justify-content:center; flex-wrap:wrap;">
                    <div style="background:rgba(56,189,248,0.15); border:2px solid #38bdf8; border-radius:12px; padding:10px; text-align:center; min-width:90px;">
                        <div style="font-size:1.2rem;">נ“¥</div>
                        <div style="font-size:0.7rem; font-weight:bold; color:#38bdf8;">׳‘׳§׳©׳” ׳ ׳›׳ ׳¡׳×</div>
                    </div>
                    <div style="color:var(--gold); font-size:1.2rem;">ג†’</div>
                    <div style="background:rgba(251,146,60,0.15); border:2px solid #fb923c; border-radius:12px; padding:10px; text-align:center; min-width:90px;">
                        <div style="font-size:1.2rem;">נ“‹</div>
                        <div style="font-size:0.7rem; font-weight:bold; color:#fb923c;">Logger</div>
                        <div style="font-size:0.6rem; color:var(--ink-faint);">next()</div>
                    </div>
                    <div style="color:var(--gold); font-size:1.2rem;">ג†’</div>
                    <div style="background:rgba(167,139,250,0.15); border:2px solid #a78bfa; border-radius:12px; padding:10px; text-align:center; min-width:90px;">
                        <div style="font-size:1.2rem;">נ”</div>
                        <div style="font-size:0.7rem; font-weight:bold; color:#a78bfa;">Auth Check</div>
                        <div style="font-size:0.6rem; color:var(--ink-faint);">next()</div>
                    </div>
                    <div style="color:var(--gold); font-size:1.2rem;">ג†’</div>
                    <div style="background:rgba(74,222,128,0.15); border:2px solid #4ade80; border-radius:12px; padding:10px; text-align:center; min-width:90px;">
                        <div style="font-size:1.2rem;">נ¯</div>
                        <div style="font-size:0.7rem; font-weight:bold; color:#4ade80;">Route Handler</div>
                        <div style="font-size:0.6rem; color:var(--ink-faint);">res.json()</div>
                    </div>
                </div>
                <div style="text-align:center; font-size:0.75rem; color:var(--ink-soft); margin-top:6px;">׳›׳ Middleware ׳™׳›׳•׳ ׳׳—׳¡׳•׳ ׳׳× ׳”׳‘׳§׳©׳” (401/403) ׳׳• ׳׳”׳¢׳‘׳™׳¨ ׳”׳׳׳” ׳¢׳ <code>next()</code></div>
            </div>
            `,
            text: "<b>׳©׳¨׳©׳¨׳× Middleware</b><br>Middleware ׳”׳•׳ ׳”׳§׳•׳ ׳¡׳₪׳˜ ׳”׳׳¨׳›׳–׳™ ׳‘-Express. ׳›׳ ׳₪׳•׳ ׳§׳¦׳™׳™׳× Middleware ׳׳§׳‘׳׳× <code>req</code>, <code>res</code> ׳•-<code>next</code>. ׳”׳™׳ ׳¨׳¦׳” ׳‘׳׳׳¦׳¢ ג€” ׳׳₪׳ ׳™ ׳”-Route Handler. ׳™׳›׳•׳׳” ׳׳¨׳©׳•׳ ׳׳•׳’׳™׳, ׳׳‘׳“׳•׳§ ׳”׳¨׳©׳׳•׳×, ׳׳₪׳¨׳¡׳¨ Body, ׳׳• ׳׳—׳¡׳•׳ ׳‘׳§׳©׳•׳× ׳׳ ׳׳•׳¨׳©׳•׳×."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up" style="flex-direction:column; gap:10px;">
                <div style="text-align:center; font-weight:bold; color:var(--gold); margin-bottom:6px;">נ“ ׳׳¨׳›׳™׳˜׳§׳˜׳•׳¨׳× Express Router</div>
                <div style="display:flex; gap:14px; justify-content:center; flex-wrap:wrap;">
                    <div style="background:rgba(56,189,248,0.1); border:2px solid #38bdf8; border-radius:12px; padding:14px; text-align:center; min-width:120px;">
                        <div style="font-size:1.3rem; margin-bottom:4px;">נ“„</div>
                        <div style="font-weight:bold; font-size:0.85rem; color:#38bdf8;">app.js</div>
                        <div style="font-size:0.7rem; color:var(--ink-faint); margin-top:4px;">app.use('/api/users', usersRouter)</div>
                        <div style="font-size:0.7rem; color:var(--ink-faint);">app.use('/api/products', productsRouter)</div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div style="background:rgba(167,139,250,0.1); border:1px solid #a78bfa; border-radius:8px; padding:8px 12px; font-size:0.75rem;">
                            <span style="color:#a78bfa; font-weight:bold;">routes/users.js</span>
                            <div style="color:var(--ink-faint);">GET / | POST / | DELETE /:id</div>
                        </div>
                        <div style="background:rgba(74,222,128,0.1); border:1px solid #4ade80; border-radius:8px; padding:8px 12px; font-size:0.75rem;">
                            <span style="color:#4ade80; font-weight:bold;">routes/products.js</span>
                            <div style="color:var(--ink-faint);">GET / | POST / | PUT /:id</div>
                        </div>
                    </div>
                </div>
            </div>
            `,
            text: "<b>Express Router ג€” ׳׳•׳“׳•׳׳¨׳™׳•׳×</b><br>׳›׳©׳”׳₪׳¨׳•׳™׳§׳˜ ׳’׳“׳, ׳׳ ׳—׳ ׳• ׳׳ ׳¨׳•׳¦׳™׳ 100 ׳¨׳׳•׳˜׳™׳ ׳‘׳§׳•׳‘׳¥ ׳׳—׳“. <code>express.Router()</code> ׳׳׳₪׳©׳¨ ׳׳₪׳¦׳ ׳›׳ ׳ ׳•׳©׳ ׳׳§׳•׳‘׳¥ ׳ ׳₪׳¨׳“ (users.js, products.js) ׳•׳׳– ׳׳˜׳¢׳•׳ ׳׳•׳×׳ ׳‘׳§׳•׳‘׳¥ ׳”׳¨׳׳©׳™ ׳¢׳ <code>app.use()</code>."
        }
    ],
    title: 'נ€ ׳©׳¨׳×׳™ Express ג€” Framework ׳׳§׳¦׳•׳¢׳™',
    content: `
      <div class="card-body">
        <p class="lead">׳©׳¨׳× Vanilla ׳”׳•׳ ׳׳¦׳•׳™׳ ׳׳”׳‘׳ ׳× ׳”׳¨׳©׳×, ׳׳ ׳›׳×׳™׳‘׳× ׳§׳•׳“ ׳’׳“׳•׳ ׳׳™׳×׳• ׳ ׳”׳™׳™׳× ׳׳¡׳•׳¨׳‘׳׳×, ׳₪׳™׳¨׳׳™׳“׳•׳× ׳©׳ <code>if/else</code>, ׳•׳§׳¨׳™׳׳× ׳–׳¨׳׳™ ׳׳™׳“׳¢ ׳׳›׳ POST. 
        ׳₪׳¨׳™׳™׳׳•׳•׳¨׳§ ׳”-<b>Express</b> ׳‘׳ ׳׳₪׳×׳•׳¨ ׳‘׳“׳™׳•׳§ ׳׳× ׳–׳” ג€” ׳”׳•׳ ׳׳¡׳₪׳§ ׳׳׳©׳§ ׳§׳, ׳׳¡׳•׳“׳¨ ׳•׳׳•׳“׳•׳׳¨׳™ ׳׳₪׳™׳×׳•׳— ׳©׳¨׳×׳™ ׳׳™׳ ׳˜׳¨׳ ׳˜.</p>

        <h4>1. ׳©׳¨׳× Express ׳¨׳׳©׳•׳</h4>
        <pre><code><span class="t-key">const</span> express = <span class="t-fn">require</span>(<span class="t-str">"express"</span>);
<span class="t-key">const</span> app = <span class="t-fn">express</span>();

<span class="t-com">// ׳”׳•׳¡׳₪׳× ׳×׳׳™׳›׳” ׳‘׳₪׳¨׳¡׳•׳¨ ׳׳•׳˜׳•׳׳˜׳™ ׳©׳ JSON ׳‘-Body!</span>
app.use(express.<span class="t-fn">json</span>());

<span class="t-com">// ׳”׳’׳“׳¨׳× ׳ ׳×׳™׳‘ GET ׳₪׳©׳•׳˜</span>
app.get(<span class="t-str">"/"</span>, (req, res) => {
  <span class="t-com">// ׳‘-Express ׳׳©׳×׳׳©׳™׳ ׳‘-res.send ׳‘׳׳§׳•׳ res.end.</span>
  <span class="t-com">// ׳”׳•׳ ׳§׳•׳‘׳¢ ׳׳•׳˜׳•׳׳˜׳™׳× ׳›׳•׳×׳¨׳•׳× ׳•׳¡׳˜׳˜׳•׳¡ 200.</span>
  res.<span class="t-fn">send</span>(<span class="t-str">"Hello, Express!"</span>);
});

<span class="t-com">// GET ׳¢׳ ׳₪׳¨׳¡׳•׳¨ ׳₪׳¨׳׳˜׳¨׳™׳ ׳׳ ׳×׳™׳‘ (req.params)</span>
app.get(<span class="t-str">"/users/:id"</span>, (req, res) => {
  <span class="t-com">// Express ׳׳—׳׳¥ ׳׳•׳˜׳•׳׳˜׳™׳× ׳׳× ׳”׳׳©׳×׳ ׳™׳ ׳׳”׳ ׳×׳™׳‘ ׳•׳©׳•׳׳¨ ׳‘-req.params</span>
  <span class="t-key">const</span> id = <span class="t-fn">parseInt</span>(req.params.id);
  <span class="t-key">const</span> user = users.<span class="t-fn">find</span>(u => u.id === id);
  
  <span class="t-ctl">if</span> (!user) {
    <span class="t-ctl">return</span> res.<span class="t-fn">status</span>(<span class="t-num">404</span>).<span class="t-fn">json</span>({ error: <span class="t-str">"User not found"</span> });
  }
  res.<span class="t-fn">json</span>(user);
});

<span class="t-com">// POST ׳׳§׳‘׳׳× Body ׳‘׳§׳׳•׳× (׳‘׳–׳›׳•׳× express.json)</span>
app.post(<span class="t-str">"/users"</span>, (req, res) => {
  <span class="t-key">const</span> newUser = req.body; <span class="t-com">// ׳׳₪׳¨׳¡׳¨ ׳׳•׳˜׳•׳׳˜׳™׳×! ׳׳׳ Streams ׳•׳׳׳ Promises ׳™׳“׳ ׳™׳™׳</span>
  users.<span class="t-fn">push</span>(newUser);
  res.<span class="t-fn">status</span>(<span class="t-num">201</span>).<span class="t-fn">json</span>(newUser);
});

app.listen(<span class="t-num">3000</span>, () => console.<span class="t-fn">log</span>(<span class="t-str">"Express running on port 3000"</span>));</code></pre>

        <h4>2. ׳׳”׳• Middleware (׳×׳•׳›׳ ׳× ׳‘׳™׳ ׳™׳™׳)?</h4>
        <p>׳”׳§׳•׳ ׳¡׳₪׳˜ ׳”׳׳¨׳›׳–׳™ ׳‘׳™׳•׳×׳¨ ׳‘-Express. Middleware ׳”׳™׳ ׳₪׳•׳ ׳§׳¦׳™׳” ׳©׳׳§׳‘׳׳× ׳׳× <code>req</code>, <code>res</code> ׳•׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳‘׳§׳¨׳” ׳‘׳©׳ <code>next</code>. ׳”׳™׳ ׳¨׳¦׳” <b>׳‘׳׳׳¦׳¢</b>, ׳׳₪׳ ׳™ ׳©׳”׳‘׳§׳©׳” ׳׳’׳™׳¢׳” ׳-handler ׳”׳¡׳•׳₪׳™, ׳•׳™׳›׳•׳׳” ׳׳¢׳©׳•׳× ׳׳—׳“ ׳׳©׳׳•׳©׳” ׳“׳‘׳¨׳™׳:
          <br>1. ׳׳©׳ ׳•׳× ׳׳• ׳׳”׳•׳¡׳™׳£ ׳׳™׳“׳¢ ׳-<code>req</code> ׳׳• ׳-<code>res</code> (׳׳׳©׳, ׳׳—׳׳¥ ׳׳©׳×׳׳© ׳׳×׳•׳ Token).
          <br>2. ׳׳—׳¡׳•׳ ׳׳× ׳”׳‘׳§׳©׳” ׳•׳׳”׳—׳–׳™׳¨ ׳©׳’׳™׳׳” (׳׳׳©׳, ׳׳ ׳”׳׳©׳×׳׳© ׳׳ ׳׳—׳•׳‘׳¨).
          <br>3. ׳׳§׳¨׳•׳ ׳-<code>next()</code> ׳›׳“׳™ ׳׳”׳¢׳‘׳™׳¨ ׳׳× ׳”׳˜׳™׳₪׳•׳ ׳׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳‘׳׳” ׳‘׳×׳•׳¨.</p>
        
        <div class="callout analogy">
          <span class="ico">נ›‚</span>
          <div class="ct"><b>׳׳ ׳׳•׳’׳™׳”:</b> Middleware ׳”׳•׳ ׳›׳׳• ׳׳׳‘׳˜׳— ׳‘׳›׳ ׳™׳¡׳” ׳׳׳•׳¢׳“׳•׳. ׳׳₪׳ ׳™ ׳©׳׳×׳ ׳ ׳›׳ ׳¡׳™׳ (׳׳’׳™׳¢׳™׳ ׳-Route handler), ׳”׳•׳ ׳‘׳•׳“׳§ ׳׳× ׳×׳¢׳•׳“׳× ׳”׳–׳”׳•׳× ׳©׳׳›׳ (Validation/Auth). ׳׳ ׳”׳›׳ ׳×׳§׳™׳ ג†’ ׳”׳•׳ ׳׳׳₪׳©׳¨ ׳׳›׳ ׳׳”׳™׳›׳ ׳¡ (׳§׳•׳¨׳ ׳-<code>next()</code>). ׳׳ ׳׳ ׳×׳§׳™׳ ג†’ ׳”׳•׳ ׳—׳•׳¡׳ ׳׳×׳›׳ ׳•׳׳¢׳™׳£ ׳׳×׳›׳ ׳”׳—׳•׳¦׳” (׳׳—׳–׳™׳¨ ׳×׳©׳•׳‘׳× 401/403 ׳׳׳ ׳”׳׳©׳ ׳¨׳™׳¦׳”).</div>
        </div>

        <p>׳“׳•׳’׳׳” ׳-Middleware ׳׳•׳×׳׳ ׳׳™׳©׳™׳× ׳©׳¨׳•׳©׳ ׳׳•׳’׳™׳ ׳•׳׳•׳“׳“ ׳–׳׳ ׳¨׳™׳¦׳” ׳©׳ ׳›׳ ׳‘׳§׳©׳”:</p>
        <pre><code><span class="t-key">function</span> <span class="t-fn">requestLogger</span>(req, res, next) {
  <span class="t-key">const</span> startTime = Date.<span class="t-fn">now</span>();
  
  <span class="t-com">// ׳‘׳¨׳’׳¢ ׳©׳”׳×׳’׳•׳‘׳” ׳׳¡׳×׳™׳™׳׳× ׳•׳ ׳©׳׳—׳× ׳׳׳§׳•׳—</span>
  res.<span class="t-fn">on</span>(<span class="t-str">"finish"</span>, () => {
    <span class="t-key">const</span> duration = Date.<span class="t-fn">now</span>() - startTime;
    console.<span class="t-fn">log</span>(\`\${req.method} \${req.url} - Status: \${res.statusCode} (\${duration}ms)\`);
  });
  
  <span class="t-fn">next</span>(); <span class="t-com">// ׳—׳•׳‘׳” ׳׳§׳¨׳•׳ ׳›׳“׳™ ׳׳¢׳‘׳•׳¨ ׳׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳‘׳׳”!</span>
}

<span class="t-com">// ׳—׳™׳‘׳•׳¨ ׳’׳׳•׳‘׳׳™ ׳©׳ ׳”-Middleware ׳׳›׳ ׳”׳©׳¨׳×</span>
app.<span class="t-fn">use</span>(requestLogger);</code></pre>

        <h4>3. ׳׳•׳“׳•׳׳¨׳™׳•׳× ׳‘׳׳׳¦׳¢׳•׳× Express Router</h4>
        <p>׳›׳׳©׳¨ ׳”׳₪׳¨׳•׳™׳§׳˜ ׳’׳“׳, ׳׳™׳ ׳ ׳• ׳¨׳•׳¦׳™׳ ׳׳›׳×׳•׳‘ ׳׳× ׳›׳ ׳”-Routes ׳‘׳׳•׳×׳• ׳§׳•׳‘׳¥. ׳ ׳©׳×׳׳© ׳‘-<code>express.Router()</code> ׳›׳“׳™ ׳׳₪׳¦׳ ׳§׳‘׳¦׳™׳ ׳‘׳¦׳•׳¨׳” ׳׳¡׳•׳“׳¨׳×:</p>
        <pre><code><span class="t-com">// ׳§׳•׳‘׳¥ routes/users.js</span>
<span class="t-key">const</span> express = <span class="t-fn">require</span>(<span class="t-str">"express"</span>);
<span class="t-key">const</span> router = express.<span class="t-fn">Router</span>();

router.get(<span class="t-str">"/"</span>, (req, res) => {
  res.<span class="t-fn">json</span>(users);
});

router.delete(<span class="t-str">"/:id"</span>, (req, res) => {
  <span class="t-com">// ׳׳•׳’׳™׳§׳× ׳׳—׳™׳§׳”</span>
  res.<span class="t-fn">status</span>(<span class="t-num">204</span>).<span class="t-fn">send</span>();
});

module.exports = router;

<span class="t-com">// ׳§׳•׳‘׳¥ app.js (׳”׳¨׳׳©׳™)</span>
<span class="t-key">const</span> usersRouter = <span class="t-fn">require</span>(<span class="t-str">"./routes/users"</span>);
<span class="t-com">// ׳›׳ ׳”׳ ׳×׳™׳‘׳™׳ ׳©׳‘׳×׳•׳ ׳׳•׳“׳•׳ ׳–׳” ׳™׳×׳—׳™׳׳• ׳‘- /api/users</span>
app.<span class="t-fn">use</span>(<span class="t-str">"/api/users"</span>, usersRouter);</code></pre>

        <h4>4. ׳˜׳™׳₪׳•׳ ׳׳¨׳›׳–׳™ ׳‘׳©׳’׳™׳׳•׳× (Error Handling Middleware)</h4>
        <p>׳׳ ׳ ׳–׳¨׳§׳× ׳©׳’׳™׳׳” ׳‘׳׳—׳“ ׳”-Routes, ׳׳ ׳—׳ ׳• ׳׳ ׳¨׳•׳¦׳™׳ ׳©׳”׳©׳¨׳× ׳™׳§׳¨׳•׳¡. ׳ ׳›׳×׳•׳‘ Middleware ׳׳™׳•׳—׳“ ׳׳˜׳™׳₪׳•׳ ׳‘׳©׳’׳™׳׳•׳×.
        <br><b>׳—׳•׳§ ׳‘׳¨׳–׳:</b> ׳-Middleware ׳©׳ ׳©׳’׳™׳׳•׳× ׳—׳™׳™׳‘׳™׳ ׳׳”׳™׳•׳× <b>׳‘׳“׳™׳•׳§ 4 ׳₪׳¨׳׳˜׳¨׳™׳</b> ׳‘׳—׳×׳™׳׳× ׳”׳₪׳•׳ ׳§׳¦׳™׳” ג€” <code>(err, req, res, next)</code>. Express ׳׳–׳”׳” ׳׳•׳×׳• ׳›׳›׳–׳” ׳¨׳§ ׳‘׳’׳׳ ׳׳¡׳₪׳¨ ׳”׳₪׳¨׳׳˜׳¨׳™׳!</p>
        <pre><code><span class="t-com">// 1. ׳¢׳˜׳™׳₪׳× ׳§׳•׳“ ׳׳¡׳™׳ ׳›׳¨׳•׳ ׳™ ׳›׳“׳™ ׳׳׳›׳•׳“ ׳©׳’׳™׳׳•׳× ׳•׳׳”׳¢׳‘׳™׳¨׳ ׳-next:</span>
<span class="t-key">const</span> asyncHandler = (fn) => (req, res, next) => {
  Promise.<span class="t-fn">resolve</span>(<span class="t-fn">fn</span>(req, res, next)).<span class="t-fn">catch</span>(next);
};

<span class="t-com">// ׳©׳™׳׳•׳© ׳‘-Route:</span>
app.get(<span class="t-str">"/data"</span>, <span class="t-fn">asyncHandler</span>(<span class="t-ctl">async</span> (req, res) => {
  <span class="t-key">const</span> data = <span class="t-ctl">await</span> fs.<span class="t-fn">readFile</span>(<span class="t-str">"missing.json"</span>);
  res.<span class="t-fn">json</span>(data);
}));

<span class="t-com">// 2. ׳”-Middleware ׳”׳׳¨׳›׳–׳™ ׳׳˜׳™׳₪׳•׳ ׳‘׳©׳’׳™׳׳•׳× (׳׳•׳’׳“׳¨ ׳‘׳¡׳•׳£ ׳§׳•׳‘׳¥ app.js)</span>
app.<span class="t-fn">use</span>((err, req, res, next) => {
  console.<span class="t-fn">error</span>(err.stack);
  res.<span class="t-fn">status</span>(err.statusCode || <span class="t-num">500</span>).<span class="t-fn">json</span>({
    error: err.message || <span class="t-str">"Internal Server Error"</span>
  });
});</code></pre>
        <div class="callout exam">
          <span class="ico">נ“</span>
          <div class="ct"><b>׳׳׳‘׳—׳ (׳ ׳•׳©׳ ׳₪׳•׳₪׳•׳׳¨׳™):</b> ׳׳” ׳׳™׳•׳—׳“ ׳‘-Middleware ׳©׳ ׳©׳’׳™׳׳•׳×? ׳©׳™׳© ׳׳• 4 ׳₪׳¨׳׳˜׳¨׳™׳. ׳׳ ׳×׳©׳׳™׳˜׳• ׳׳× ׳”׳₪׳¨׳׳˜׳¨ ׳”׳¨׳‘׳™׳¢׳™ <code>next</code>, ׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳×׳×׳ ׳”׳’ ׳›-Middleware ׳¨׳’׳™׳ ׳•׳”׳©׳’׳™׳׳•׳× ׳׳ ׳™׳™׳×׳₪׳¡׳• ׳‘׳¦׳•׳¨׳” ׳ ׳›׳•׳ ׳”. ׳×׳׳™׳“ ׳™׳© ׳׳׳§׳ ׳׳× ׳”-Middleware ׳”׳–׳” <b>׳‘׳¡׳•׳£ ׳”׳©׳¨׳×</b>, ׳׳—׳¨׳™ ׳›׳ ׳”-Routes ׳”׳׳—׳¨׳™׳.</div>
        </div>

        <h4>5. ׳׳©׳×׳ ׳™ ׳¡׳‘׳™׳‘׳” ׳¢׳ dotenv</h4>
        <p>׳›׳“׳™ ׳׳ ׳׳©׳׳•׳¨ ׳¡׳™׳¡׳׳׳•׳×, ׳׳₪׳×׳—׳•׳× API ׳•׳₪׳¨׳˜׳™ ׳—׳™׳‘׳•׳¨ ׳¨׳’׳™׳©׳™׳ ׳‘׳§׳•׳“ ׳¢׳¦׳׳• (׳•׳׳ ׳׳“׳—׳•׳£ ׳׳•׳×׳ ׳-GitHub!), ׳׳©׳×׳׳©׳™׳ ׳‘׳§׳•׳‘׳¥ <code>.env</code> ׳‘׳©׳•׳¨׳© ׳”׳₪׳¨׳•׳™׳§׳˜:</p>
        <pre><code><span class="t-com"># ׳§׳•׳‘׳¥ .env (׳‘׳©׳•׳¨׳© ׳”׳₪׳¨׳•׳™׳§׳˜)</span>
PORT=<span class="t-num">3000</span>
DB_HOST=<span class="t-str">localhost</span>
DB_PASSWORD=<span class="t-str">super_secret_password</span>
API_KEY=<span class="t-str">abc123xyz789</span></code></pre>
        <pre><code><span class="t-com">// ׳‘׳§׳•׳‘׳¥ app.js ג€” ׳˜׳•׳¢׳ ׳™׳ ׳׳× dotenv ׳‘׳¨׳׳© ׳”׳§׳•׳‘׳¥</span>
<span class="t-fn">require</span>(<span class="t-str">"dotenv"</span>).<span class="t-fn">config</span>();

<span class="t-com">// ׳¢׳›׳©׳™׳• ׳›׳ ׳”׳׳©׳×׳ ׳™׳ ׳׳”׳§׳•׳‘׳¥ .env ׳–׳׳™׳ ׳™׳ ׳“׳¨׳ process.env</span>
<span class="t-key">const</span> port = process.env.PORT || <span class="t-num">3000</span>;
<span class="t-key">const</span> dbPassword = process.env.DB_PASSWORD;

app.listen(port, () => {
  console.<span class="t-fn">log</span>(<span class="t-str">\`Server running on port \${port}\`</span>);
});</code></pre>
        <div class="callout warn">
          <span class="ico">נ”’</span>
          <div class="ct"><b>׳—׳•׳§ ׳‘׳¨׳–׳:</b> ׳§׳•׳‘׳¥ <code>.env</code> ׳—׳™׳™׳‘ ׳׳”׳™׳•׳× ׳‘-<code>.gitignore</code>! ׳׳¢׳•׳׳ ׳׳ ׳×׳¢׳׳• ׳¡׳™׳¡׳׳׳•׳× ׳׳• ׳׳₪׳×׳—׳•׳× ׳-GitHub. ׳›׳©׳׳™׳©׳”׳• ׳׳—׳¨ ׳׳•׳©׳ ׳׳× ׳”׳₪׳¨׳•׳™׳§׳˜, ׳”׳•׳ ׳™׳•׳¦׳¨ ׳§׳•׳‘׳¥ <code>.env</code> ׳׳©׳׳• ׳¢׳ ׳”׳¢׳¨׳›׳™׳ ׳©׳׳•. ׳׳₪׳©׳¨ ׳׳™׳¦׳•׳¨ ׳§׳•׳‘׳¥ <code>.env.example</code> (׳׳׳ ׳¢׳¨׳›׳™׳ ׳׳׳™׳×׳™׳™׳) ׳›׳×׳‘׳ ׳™׳×.</div>
        </div>

        <h4>6. ׳׳§׳¨׳” ׳‘׳•׳—׳ ׳׳”׳§׳׳׳¡׳¨׳•׳: ׳₪׳¨׳•׳™׳§׳˜ VIGIL (׳׳¨׳›׳™׳•׳ ׳’׳™׳‘׳•׳¨׳™-׳”׳¢׳ ׳”׳¡׳•׳“׳™)</h4>
        <p>׳₪׳¨׳•׳™׳§׳˜ VIGIL ׳׳”׳§׳׳׳¡׳¨׳•׳ ׳”׳•׳ ׳×׳¨׳’׳•׳ ׳׳§׳™׳£ ׳׳‘׳ ׳™׳™׳× ׳©׳¨׳× Express ׳׳׳. ׳”׳•׳ ׳׳©׳׳‘ ׳׳× ׳›׳ ׳׳” ׳©׳׳׳“׳ ׳•: ׳ ׳™׳×׳•׳‘׳™׳, ׳₪׳¨׳׳˜׳¨׳™׳, ׳—׳™׳₪׳•׳© ׳׳×׳§׳“׳ ׳‘-Body, ׳¡׳™׳ ׳•׳ ׳‘-Query, ׳•׳׳™׳“׳¦׳™׳” ׳•׳©׳’׳™׳׳•׳× ׳¡׳˜׳˜׳•׳¡.</p>
        
        <h5>׳. ׳—׳׳•׳§׳” ׳׳•׳׳׳¦׳× ׳׳©׳›׳‘׳•׳× (Layered Architecture)</h5>
        <p>׳¢׳ ׳₪׳™ ׳”׳ ׳—׳™׳•׳× ׳”׳§׳׳׳¡׳¨׳•׳, ׳ ׳—׳׳§ ׳׳× ׳”׳₪׳¨׳•׳™׳§׳˜ ׳-3 ׳©׳›׳‘׳•׳× ׳ ׳₪׳¨׳“׳•׳× ׳׳©׳׳™׳¨׳” ׳¢׳ ׳¡׳“׳¨ ׳•׳§׳׳•׳× ׳‘׳“׳™׳§׳”:</p>
        <ul class="tight">
          <li><b>׳©׳›׳‘׳× ׳”׳ ׳™׳×׳•׳‘ (Routes)</b> ג€” ׳§׳•׳‘׳¥ <code>heroes.route.js</code> ׳©׳׳’׳“׳™׳¨ ׳׳× ׳ ׳×׳™׳‘׳™ ׳”-API ׳•׳׳§׳©׳¨ ׳׳•׳×׳ ׳׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳׳×׳׳™׳׳” ׳‘׳׳‘׳“.</li>
          <li><b>׳©׳›׳‘׳× ׳”׳‘׳§׳¨׳” (Controllers)</b> ג€” ׳§׳•׳‘׳¥ <code>heroes.controller.js</code> ׳©׳׳§׳‘׳ ׳׳× ׳”׳‘׳§׳©׳” ׳•׳׳—׳׳¥ ׳׳× <code>req.params</code>, <code>req.query</code> ׳׳• <code>req.body</code>, ׳•׳׳—׳–׳™׳¨ ׳׳× ׳”׳¡׳˜׳˜׳•׳¡ ׳•׳”-JSON ׳”׳׳×׳׳™׳׳™׳.</li>
          <li><b>׳©׳›׳‘׳× ׳”׳׳•׳’׳™׳§׳” ׳•׳”׳ ׳×׳•׳ ׳™׳ (Services / Storage)</b> ג€” ׳§׳‘׳¦׳™׳ ׳”׳׳—׳¨׳׳™׳ ׳¢׳ ׳¡׳™׳ ׳•׳ ׳”׳ ׳×׳•׳ ׳™׳, ׳—׳™׳©׳•׳‘ ׳”׳¡׳˜׳˜׳™׳¡׳˜׳™׳§׳•׳×, ׳•׳§׳¨׳™׳׳”/׳›׳×׳™׳‘׳” ׳׳§׳•׳‘׳¥ ׳”-JSON ׳”׳׳§׳•׳׳™.</li>
        </ul>

        <h5>׳‘. ׳¡׳™׳ ׳•׳, ׳׳™׳•׳ ׳•׳“׳₪׳“׳•׳£ (GET /heroes)</h5>
        <p>׳‘׳ ׳×׳™׳‘ ׳–׳” ׳¢׳׳™׳ ׳• ׳׳×׳׳•׳ ׳‘׳₪׳¨׳׳˜׳¨׳™׳ ׳׳•׳¨׳›׳‘׳™׳ ׳‘-URL. ׳”׳ ׳” ׳”׳“׳¨׳ ׳”׳ ׳›׳•׳ ׳” ׳׳׳׳© ׳׳× ׳”׳¡׳™׳ ׳•׳ ׳•׳”׳׳™׳•׳ ׳‘׳׳•׳’׳™׳§׳”:</p>
        <pre><code><span class="t-com">// ׳׳•׳’׳™׳§׳× ׳¡׳™׳ ׳•׳ ׳‘׳×׳•׳ ׳”-Service</span>
<span class="t-key">function</span> <span class="t-fn">getAllHeroes</span>(filters) {
  <span class="t-key">let</span> filtered = [...allHeroes]; <span class="t-com">// ׳”׳¢׳×׳§׳× ׳”׳׳¢׳¨׳ ׳”׳׳§׳•׳¨׳™</span>
  
  <span class="t-com">// 1. ׳¡׳™׳ ׳•׳ ׳׳₪׳™ ׳¡׳˜׳˜׳•׳¡</span>
  <span class="t-ctl">if</span> (filters.status) {
    filtered = filtered.<span class="t-fn">filter</span>(h => h.status === filters.status);
  }
  
  <span class="t-com">// 2. ׳¡׳™׳ ׳•׳ ׳׳₪׳™ ׳™׳›׳•׳׳× (׳‘׳“׳™׳§׳” ׳”׳׳ ׳§׳™׳™׳׳× ׳‘׳׳¢׳¨׳ powers)</span>
  <span class="t-ctl">if</span> (filters.power) {
    filtered = filtered.<span class="t-fn">filter</span>(h => h.powers.<span class="t-fn">includes</span>(filters.power));
  }
  
  <span class="t-com">// 3. ׳¡׳™׳ ׳•׳ ׳׳₪׳™ ׳˜׳•׳•׳—׳™ ׳¨׳׳× ׳׳™׳•׳</span>
  <span class="t-ctl">if</span> (filters.minLevel) {
    filtered = filtered.<span class="t-fn">filter</span>(h => h.threatLevel >= <span class="t-fn">Number</span>(filters.minLevel));
  }
  
  <span class="t-com">// 4. ׳׳™׳•׳ ׳“׳™׳ ׳׳™ (׳׳₪׳™ sortBy ׳•-order)</span>
  <span class="t-ctl">if</span> (filters.sortBy) {
    <span class="t-key">const</span> order = filters.order === <span class="t-str">"desc"</span> ? -<span class="t-num">1</span> : <span class="t-num">1</span>;
    filtered.<span class="t-fn">sort</span>((a, b) => {
      <span class="t-ctl">if</span> (a[filters.sortBy] < b[filters.sortBy]) <span class="t-ctl">return</span> -<span class="t-num">1</span> * order;
      <span class="t-ctl">if</span> (a[filters.sortBy] > b[filters.sortBy]) <span class="t-ctl">return</span> <span class="t-num">1</span> * order;
      <span class="t-ctl">return</span> <span class="t-num">0</span>;
    });
  }
  
  <span class="t-ctl">return</span> filtered;
}</code></pre>

        <h5>׳’. ׳—׳™׳₪׳•׳© ׳׳×׳§׳“׳ ׳‘-Body (POST /heroes/search)</h5>
        <p>׳‘׳—׳™׳₪׳•׳© ׳׳×׳§׳“׳, ׳”׳“׳¨׳™׳©׳” ׳”׳™׳ ׳©׳”׳×׳ ׳׳™׳ ׳”׳₪׳ ׳™׳׳™׳™׳ ׳‘׳׳¢׳¨׳›׳™׳ (׳›׳׳• ׳׳¢׳¨׳ ׳¡׳˜׳˜׳•׳¡׳™׳ <code>statuses</code> ׳׳• ׳׳¢׳¨׳ ׳™׳›׳•׳׳•׳× <code>powers</code>) ׳™׳×׳ ׳”׳’׳• ׳‘׳™׳—׳¡ ׳©׳ "׳׳•" (OR), ׳׳ ׳”׳×׳ ׳׳™׳ ׳”׳›׳׳׳™׳™׳ ׳‘׳™׳ ׳”׳©׳“׳•׳× ׳”׳©׳•׳ ׳™׳ ׳™׳×׳ ׳”׳’׳• ׳‘׳™׳—׳¡ ׳©׳ "׳•׳’׳" (AND):</p>
        <pre><code>app.post(<span class="t-str">"/heroes/search"</span>, (req, res) => {
  <span class="t-key">const</span> { statuses, powers, minLevel, maxLevel, affiliations } = req.body;
  <span class="t-key">let</span> results = [...allHeroes];
  
  <span class="t-com">// "׳•׳’׳" (AND) - ׳›׳ ׳©׳“׳” ׳׳¡׳ ׳ ׳׳× ׳”׳×׳•׳¦׳׳•׳× ׳”׳§׳•׳“׳׳•׳×:</span>
  
  <span class="t-com">// 1. statuses (׳™׳—׳¡ OR ׳₪׳ ׳™׳׳™ - ׳”׳’׳™׳‘׳•׳¨ ׳‘׳¡׳˜׳˜׳•׳¡ ׳' ׳׳• ׳¡׳˜׳˜׳•׳¡ ׳‘')</span>
  <span class="t-ctl">if</span> (statuses && statuses.length > <span class="t-num">0</span>) {
    results = results.<span class="t-fn">filter</span>(h => statuses.<span class="t-fn">includes</span>(h.status));
  }
  
  <span class="t-com">// 2. powers (׳™׳—׳¡ OR ׳₪׳ ׳™׳׳™ - ׳׳’׳™׳‘׳•׳¨ ׳™׳© ׳׳₪׳—׳•׳× ׳׳—׳× ׳׳”׳™׳›׳•׳׳•׳× ׳”׳ ׳“׳¨׳©׳•׳×)</span>
  <span class="t-ctl">if</span> (powers && powers.length > <span class="t-num">0</span>) {
    results = results.<span class="t-fn">filter</span>(h => h.powers.<span class="t-fn">some</span>(p => powers.<span class="t-fn">includes</span>(p)));
  }
  
  res.<span class="t-fn">json</span>({ success: <span class="t-key">true</span>, data: results });
});</code></pre>

        <h5>׳“. ׳—׳™׳©׳•׳‘ ׳¡׳˜׳˜׳™׳¡׳˜׳™׳§׳•׳× ׳”׳׳¨׳›׳™׳•׳ (GET /stats)</h5>
        <p>׳›׳“׳™ ׳׳—׳©׳‘ ׳׳× ׳”׳“׳•׳—׳•׳× ׳”׳׳•׳¨׳›׳‘׳™׳ ׳‘׳׳”׳™׳¨׳•׳× ׳•׳‘׳™׳¢׳™׳׳•׳×, ׳ ׳©׳×׳׳© ׳‘׳׳×׳•׳“׳•׳× ׳׳¢׳¨׳›׳™׳:</p>
        <pre><code>app.get(<span class="t-str">"/stats"</span>, (req, res) => {
  <span class="t-key">const</span> totalHeroes = allHeroes.length;
  
  <span class="t-com">// 1. ׳׳׳•׳¦׳¢ ׳¨׳׳× ׳׳™׳•׳</span>
  <span class="t-key">const</span> avgThreat = totalHeroes === <span class="t-num">0</span> ? <span class="t-num">0</span> :
    allHeroes.<span class="t-fn">reduce</span>((sum, h) => sum + h.threatLevel, <span class="t-num">0</span>) / totalHeroes;
    
  <span class="t-com">// 2. ׳”׳’׳™׳‘׳•׳¨ ׳”׳—׳–׳§ ׳‘׳™׳•׳×׳¨</span>
  <span class="t-key">const</span> highestThreat = allHeroes.<span class="t-fn">reduce</span>((max, h) => 
    (!max || h.threatLevel > max.threatLevel) ? h : max, null);
    
  <span class="t-com">// 3. ׳₪׳™׳׳•׳— ׳׳₪׳™ ׳¡׳˜׳˜׳•׳¡</span>
  <span class="t-key">const</span> byStatus = allHeroes.<span class="t-fn">reduce</span>((acc, h) => {
    acc[h.status] = (acc[h.status] || <span class="t-num">0</span>) + <span class="t-num">1</span>;
    <span class="t-ctl">return</span> acc;
  }, {});
  
  res.<span class="t-fn">json</span>({
    success: <span class="t-key">true</span>,
    data: { totalHeroes, averageThreatLevel: avgThreat, highestThreat, byStatus }
  });
});</code></pre>
      </div>
    `
  }
};

const contentPart3 = {
 closures: {
  visualizerSteps: [
        {
            html_visual: `
            <div class="stack-visual">
                <div class="stack-item chain-appear delay-2" style="opacity:1;">Inner Function Memory</div>
                <div class="stack-item chain-appear delay-1" style="opacity:0.8; background:var(--primary);">Outer Function Memory</div>
                <div class="stack-item chain-appear" style="opacity:0.5; background:var(--ink);">Global Memory</div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 1: ׳©׳¨׳©׳¨׳× ׳”׳¡׳‘׳™׳‘׳•׳× (Scope Chain)</b><br>׳›׳׳• ׳‘׳•׳‘׳•׳× ׳‘׳‘׳•׳©׳§׳”! ׳₪׳•׳ ׳§׳¦׳™׳” ׳₪׳ ׳™׳׳™׳× ׳×׳׳™׳“ ׳ ׳׳¦׳׳× ׳‘׳×׳•׳ ׳₪׳•׳ ׳§׳¦׳™׳” ׳—׳™׳¦׳•׳ ׳™׳×. ׳›׳©׳”׳™׳ ׳׳—׳₪׳©׳× ׳׳©׳×׳ ׳”, ׳”׳™׳ ׳‘׳•׳“׳§׳× ׳§׳•׳“׳ ׳׳¦׳׳”, ׳•׳׳– ׳™׳•׳¦׳׳× ׳”׳—׳•׳¦׳” ׳©׳›׳‘׳” ׳׳—׳¨׳™ ׳©׳›׳‘׳”."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced" style="border-color:#ff0055;">Outer() ׳¡׳™׳™׳׳”<br><span style="font-size:10px;text-decoration:line-through;">׳ ׳׳—׳§׳”</span></div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">ג†’</span></div>
                <div class="flow-node-enhanced active bounce-in">Inner() ׳—׳™׳”<br>׳•׳¢׳“׳™׳™׳ ׳–׳•׳›׳¨׳×!</div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 2: ׳׳›׳™׳“׳× ׳§׳׳•׳–'׳¨</b><br>׳”׳§׳¡׳ ׳׳×׳¨׳—׳© ׳₪׳”: ׳’׳ ׳׳—׳¨׳™ ׳©׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳—׳™׳¦׳•׳ ׳™׳× ׳¡׳™׳™׳׳” ׳׳¨׳•׳¥ ׳•׳ ׳¢׳׳׳” ׳׳”׳–׳™׳›׳¨׳•׳, ׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳₪׳ ׳™׳׳™׳× '׳ ׳•׳¢׳׳×' (Closure) ׳׳¦׳׳” ׳׳× ׳”׳׳©׳×׳ ׳™׳ ׳©׳”׳™׳ ׳¦׳¨׳™׳›׳” ׳׳×׳•׳›׳”!"
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced">createCounter()</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">ג†’</span><span class="arrow-label">count=0</span></div>
                <div class="flow-node-enhanced active ripple-out">counter() ג†’ 1<br>counter() ג†’ 2</div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 3: ׳©׳™׳׳•׳© ׳₪׳¨׳§׳˜׳™ - ׳׳•׳ ׳” (Counter)</b><br>׳‘׳¢׳–׳¨׳× ׳§׳׳•׳–'׳¨ ׳׳ ׳—׳ ׳• ׳™׳›׳•׳׳™׳ ׳׳™׳¦׳•׳¨ '׳׳©׳×׳ ׳™׳ ׳₪׳¨׳˜׳™׳™׳'. ׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳©׳•׳׳¨׳× ׳–׳™׳›׳¨׳•׳ ׳₪׳ ׳™׳׳™ ׳׳©׳׳” ׳©׳׳£ ׳׳—׳“ ׳׳‘׳—׳•׳¥ ׳׳ ׳™׳›׳•׳ ׳׳’׳¢׳× ׳‘׳• ׳™׳©׳™׳¨׳•׳×."
        }
    ],
    title: 'נ”’ ׳§׳׳•׳–\'׳¨׳™׳ (Closures)',
  content: `
   <div class="card-body">
    <p class="lead">׳§׳׳•׳–'׳¨ (Closure ׳׳• ׳¡׳’׳™׳¨׳”) ׳”׳•׳ ׳׳—׳“ ׳”׳׳•׳©׳’׳™׳ ׳”׳¢׳•׳¦׳׳×׳™׳™׳ ׳‘׳™׳•׳×׳¨ ׳‘-JavaScript. ׳”׳•׳ ׳׳׳₪׳©׳¨ ׳׳₪׳•׳ ׳§׳¦׳™׳” ׳₪׳ ׳™׳׳™׳× ׳׳–׳›׳•׳¨ ׳•׳׳”׳׳©׳™׳ ׳׳’׳©׳× ׳׳׳©׳×׳ ׳™׳ ׳©׳ ׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳—׳™׳¦׳•׳ ׳™׳× ׳©׳¢׳˜׳₪׳” ׳׳•׳×׳” ג€” ׳’׳ ׳׳׳—׳¨ ׳©׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳—׳™׳¦׳•׳ ׳™׳× ׳›׳‘׳¨ ׳¡׳™׳™׳׳” ׳׳¨׳•׳¥ ׳•׳ ׳¢׳׳׳” ׳׳”׳–׳™׳›׳¨׳•׳.</p>
    
    <h4>1. ׳“׳•׳’׳׳” ׳‘׳¡׳™׳¡׳™׳×: ׳׳•׳ ׳” ׳₪׳¨׳˜׳™</h4>
    <pre><code><span class="t-key">function</span> <span class="t-fn">makeCounter</span>() {
 <span class="t-key">let</span> count = <span class="t-num">0</span>; <span class="t-com">// ׳׳©׳×׳ ׳” ׳׳§׳•׳׳™ ׳‘׳×׳•׳ ׳”׳₪׳•׳ ׳§׳¦׳™׳”</span>

 <span class="t-ctl">return</span> <span class="t-key">function</span>() {
  count++; <span class="t-com">// ׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳₪׳ ׳™׳׳™׳× ׳–׳•׳›׳¨׳× ׳׳× count!</span>
  <span class="t-ctl">return</span> count;
 };
}

<span class="t-key">const</span> counter = <span class="t-fn">makeCounter</span>();
console.<span class="t-fn">log</span>(<span class="t-fn">counter</span>()); <span class="t-com">// 1</span>
console.<span class="t-fn">log</span>(<span class="t-fn">counter</span>()); <span class="t-com">// 2 ג† ׳”׳¢׳¨׳ ׳ ׳©׳׳¨ ׳‘׳™׳ ׳”׳”׳¨׳¦׳•׳×!</span></code></pre>
    
    <div class="callout analogy">
     <span class="ico">נ’</span>
     <div class="ct"><b>׳׳ ׳׳•׳’׳™׳”:</b> ׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳₪׳ ׳™׳׳™׳× ׳™׳•׳¦׳׳× ׳׳“׳¨׳ ׳”׳—׳™׳™׳ ׳©׳׳” ׳¢׳ <b>׳×׳¨׳׳™׳ ׳’׳‘</b>. ׳‘׳×׳•׳ ׳”׳×׳¨׳׳™׳ ׳”׳™׳ ׳׳¨׳–׳” ׳׳× ׳›׳ ׳”׳׳©׳×׳ ׳™׳ ׳©׳”׳™׳• ׳§׳™׳™׳׳™׳ ׳‘"׳‘׳™׳×" ׳©׳‘׳• ׳”׳™׳ ׳’׳“׳׳” (׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳¢׳•׳˜׳₪׳×). ׳’׳ ׳›׳©׳”׳™׳ ׳¨׳—׳•׳§׳” ׳׳׳•׳“ ׳׳”׳‘׳™׳× (׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳—׳™׳¦׳•׳ ׳™׳× ׳¡׳™׳™׳׳” ׳׳¨׳•׳¥), ׳”׳™׳ ׳¢׳“׳™׳™׳ ׳™׳›׳•׳׳” ׳׳₪׳×׳•׳— ׳׳× ׳”׳×׳¨׳׳™׳ ׳•׳׳¢׳¨׳•׳ ׳׳× ׳”׳׳©׳×׳ ׳™׳ ׳©׳‘׳×׳•׳›׳•.</div>
    </div>

    <h4>2. ׳”׳’׳ ׳” ׳¢׳ ׳ ׳×׳•׳ ׳™׳ (Encapsulation)</h4>
    <p>׳‘׳׳׳¦׳¢׳•׳× Closure ׳׳ ׳• ׳™׳›׳•׳׳™׳ ׳׳™׳¦׳•׳¨ "׳׳©׳×׳ ׳™׳ ׳₪׳¨׳˜׳™׳™׳" ׳©׳׳£ ׳׳—׳“ ׳׳—׳•׳¥ ׳׳₪׳•׳ ׳§׳¦׳™׳” ׳׳ ׳™׳›׳•׳ ׳׳©׳ ׳•׳× ׳׳• ׳׳’׳©׳× ׳׳׳™׳”׳ ׳™׳©׳™׳¨׳•׳×, ׳׳׳ ׳¨׳§ ׳“׳¨׳ ׳”׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳©׳׳ ׳• ׳׳—׳–׳™׳¨׳™׳ (׳‘׳“׳•׳׳” ׳׳§׳•׳“ ׳©׳ ׳₪׳¨׳•׳™׳§׳˜ ׳”׳‘׳ ׳§):</p>
    <pre><code><span class="t-key">function</span> <span class="t-fn">createAccount</span>(initialBalance) {
 <span class="t-key">let</span> balance = initialBalance; <span class="t-com">// ׳₪׳¨׳˜׳™ ׳׳—׳׳•׳˜׳™׳!</span>

 <span class="t-ctl">return</span> {
  <span class="t-fn">deposit</span>(amount) {
   <span class="t-ctl">if</span> (amount > <span class="t-num">0</span>) balance += amount;
   <span class="t-ctl">return</span> balance;
  },
  <span class="t-fn">getBalance</span>() {
   <span class="t-ctl">return</span> balance;
  }
 };
}

<span class="t-key">const</span> myAcc = <span class="t-fn">createAccount</span>(<span class="t-num">100</span>);
myAcc.<span class="t-fn">deposit</span>(<span class="t-num">50</span>);
console.<span class="t-fn">log</span>(myAcc.<span class="t-fn">getBalance</span>()); <span class="t-com">// 150</span>
<span class="t-com">// console.log(myAcc.balance); // undefined! ׳׳™׳ ׳’׳™׳©׳” ׳™׳©׳™׳¨׳” ׳׳›׳¡׳£</span></code></pre>
    <div class="callout exam">
     <span class="ico">נ“</span>
     <div class="ct"><b>׳׳׳‘׳—׳:</b> Closure ׳ ׳•׳¦׳¨ ׳‘׳׳•׳₪׳ ׳׳•׳˜׳•׳׳˜׳™ ׳‘׳›׳ ׳₪׳¢׳ ׳©׳׳•׳’׳“׳¨׳× ׳₪׳•׳ ׳§׳¦׳™׳” ׳‘׳×׳•׳ ׳₪׳•׳ ׳§׳¦׳™׳” ׳׳—׳¨׳×. ׳”׳•׳ ׳׳׳₪׳©׳¨ ׳׳ ׳• ׳׳ ׳”׳ "׳׳¦׳‘" (State) ׳₪׳¨׳˜׳™ ׳•׳׳׳•׳‘׳˜׳—. ׳–׳›׳¨׳• ׳›׳™ ׳׳©׳×׳ ׳™׳ ׳©׳ ׳©׳׳¨׳™׳ ׳‘-Closure ׳ ׳©׳׳¨׳™׳ ׳‘׳–׳™׳›׳¨׳•׳, ׳•׳׳›׳ ׳©׳™׳׳•׳© ׳׳ ׳׳‘׳•׳§׳¨ ׳‘׳”׳ ׳¢׳׳•׳ ׳׳’׳¨׳•׳ ׳׳¢׳•׳׳¡ ׳–׳™׳›׳¨׳•׳.</div>
    </div>
   </div>
  `
 },
 factories: {
  visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced">
                <div class="flow-node-enhanced">name: "׳“׳ ׳™"</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">ג†’</span></div>
                <div class="flow-node-enhanced active highlight-flash" style="border-color:#ffd700;">נ­ ׳”׳׳₪׳¢׳</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">ג†’</span></div>
                <div class="flow-node-enhanced bounce-in">{ name:"׳“׳ ׳™", role:"user" }</div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 1: ׳×׳‘׳ ׳™׳× ׳”׳׳₪׳¢׳</b><br>׳‘׳׳§׳•׳ ׳׳™׳¦׳•׳¨ ׳׳•׳‘׳™׳™׳§׳˜׳™׳ ׳׳׳₪׳¡ ׳›׳ ׳₪׳¢׳, ׳׳ ׳—׳ ׳• ׳‘׳•׳ ׳™׳ ׳₪׳•׳ ׳§׳¦׳™׳” ׳©׳׳§׳‘׳׳× ׳—׳•׳׳¨׳™ ׳’׳׳ (׳₪׳¨׳׳˜׳¨׳™׳) ׳•׳׳™׳™׳¦׳¨׳× ׳׳•׳‘׳™׳™׳§׳˜ ׳©׳׳ ׳•׳׳•׳›׳."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced active">נ­ ׳”׳׳₪׳¢׳</div>
                <div style="display:flex; flex-direction:column; gap:5px;" class="delay-2">
                    <div class="flow-arrow-enhanced" style="flex-direction:row;"><span class="arrow-icon">ג†’</span><div class="flow-node-enhanced slide-in-right">User 1</div></div>
                    <div class="flow-arrow-enhanced" style="flex-direction:row;"><span class="arrow-icon">ג†’</span><div class="flow-node-enhanced slide-in-right delay-1">User 2</div></div>
                </div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 2: ׳©׳¢׳×׳•׳§ ׳׳•׳‘׳™׳™׳§׳˜׳™׳</b><br>׳”׳׳₪׳¢׳ ׳™׳›׳•׳ ׳׳™׳™׳¦׳¨ ׳׳™׳ ׳¡׳•׳£ ׳׳•׳‘׳™׳™׳§׳˜׳™׳ ׳‘׳׳×׳™ ׳×׳׳•׳™׳™׳, ׳©׳׳›׳ ׳׳—׳“ ׳׳”׳ ׳™׳© ׳¢׳•׳×׳§ ׳׳©׳׳• ׳©׳ ׳”׳ ׳×׳•׳ ׳™׳ ׳•׳”׳₪׳•׳ ׳§׳¦׳™׳•׳×."
        },
        {
            html_visual: `
            <div class="memory-grid fade-slide-up">
                <div class="memory-cell locked"><div class="cell-label">Private Var</div><div class="cell-value">נ”’ ׳׳•׳¡׳×׳¨</div></div>
                <div class="memory-cell active"><div class="cell-label">Public Method</div><div class="cell-value">ג… ׳—׳©׳•׳£</div></div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 3: ׳›׳™׳׳•׳¡ (Encapsulation)</b><br>׳©׳™׳׳•׳‘ ׳׳ ׳¦׳—: ׳׳₪׳¢׳ + ׳§׳׳•׳–'׳¨. ׳׳ ׳—׳ ׳• ׳™׳›׳•׳׳™׳ ׳׳”׳’׳“׳™׳¨ ׳׳©׳×׳ ׳™׳ ׳©׳™׳™׳©׳׳¨׳• ׳₪׳¨׳˜׳™׳™׳ ׳‘׳×׳•׳ ׳”׳׳₪׳¢׳ (׳׳£ ׳׳—׳“ ׳׳ ׳™׳›׳•׳ ׳׳©׳ ׳•׳× ׳׳•׳×׳ ׳׳‘׳—׳•׳¥), ׳•׳׳—׳©׳•׳£ ׳¨׳§ ׳׳× ׳”׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳©׳׳ ׳—׳ ׳• ׳׳¨׳©׳™׳."
        }
    ],
    title: 'נ­ ׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳׳₪׳¢׳ (Factory Functions)',
  content: `
   <div class="card-body">
    <p class="lead">׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳׳₪׳¢׳ ׳”׳™׳ ׳₪׳•׳ ׳§׳¦׳™׳” ׳₪׳©׳•׳˜׳” ׳©׳׳—׳–׳™׳¨׳” ׳׳•׳‘׳™׳™׳§׳˜ ׳—׳“׳©. ׳‘׳ ׳™׳’׳•׳“ ׳׳׳—׳׳§׳•׳× (Classes) ׳׳• ׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳‘׳ ׳׳™ (Constructor Functions), ׳׳™׳ ׳¦׳•׳¨׳ ׳׳”׳©׳×׳׳© ׳‘׳׳™׳׳× ׳”׳׳₪׳×׳— <code>new</code> ׳׳• ׳׳”׳×׳¢׳¡׳§ ׳¢׳ ׳”׳‘׳׳‘׳•׳ ׳©׳ <code>this</code>.</p>
    
    <h4>1. ׳“׳•׳’׳׳” ׳׳™׳¦׳™׳¨׳× ׳׳©׳×׳׳© ׳¢׳ Factory</h4>
    <pre><code><span class="t-key">function</span> <span class="t-fn">createUser</span>(name, role) {
 <span class="t-key">const</span> createdAt = <span class="t-key">new</span> <span class="t-fn">Date</span>(); <span class="t-com">// ׳׳©׳×׳ ׳” ׳₪׳¨׳˜׳™ ׳‘׳–׳›׳•׳× Closure!</span>

 <span class="t-ctl">return</span> {
  name,
  role,
  <span class="t-fn">getInfo</span>() {
   <span class="t-com">// ׳’׳™׳©׳” ׳™׳©׳™׳¨׳” ׳׳₪׳¨׳׳˜׳¨׳™׳ ׳׳׳ ׳©׳™׳׳•׳© ׳‘-this</span>
   <span class="t-ctl">return</span> \`\${name} is an \${role} (Created: \${createdAt.toLocaleDateString()})\`;
  }
 };
}

<span class="t-key">const</span> user1 = <span class="t-fn">createUser</span>(<span class="t-str">"׳“׳•׳“"</span>, <span class="t-str">"׳׳ ׳”׳"</span>);
console.<span class="t-fn">log</span>(user1.<span class="t-fn">getInfo</span>()); <span class="t-com">// "׳“׳•׳“ is an ׳׳ ׳”׳"</span></code></pre>

    <h4>2. ׳™׳×׳¨׳•׳ ׳•׳× ׳׳¢׳•׳׳× Classes</h4>
    <ul class="tight">
     <li><b>׳”׳™׳׳ ׳¢׳•׳× ׳-<code>this</code></b> ג€” ׳‘-JS, ׳”׳׳¦׳‘׳™׳¢ <code>this</code> ׳׳©׳×׳ ׳” ׳‘׳”׳×׳׳ ׳׳׳•׳₪׳ ׳©׳‘׳• ׳§׳¨׳׳• ׳׳₪׳•׳ ׳§׳¦׳™׳”, ׳׳” ׳©׳™׳•׳¦׳¨ ׳”׳׳•׳ ׳©׳’׳™׳׳•׳×. ׳‘-Factory ׳¢׳•׳‘׳“׳™׳ ׳¢׳ Closures ׳•׳”׳׳©׳×׳ ׳™׳ ׳–׳׳™׳ ׳™׳ ׳×׳׳™׳“ ׳‘׳׳•׳₪׳ ׳§׳‘׳•׳¢ ׳•׳™׳©׳™׳¨.</li>
     <li><b>׳”׳¨׳›׳‘׳” ׳׳•׳ ׳”׳•׳¨׳©׳” (Composition over Inheritance)</b> ג€” ׳§׳ ׳™׳•׳×׳¨ ׳׳—׳‘׳¨ ׳׳•׳‘׳™׳™׳§׳˜׳™׳ ׳׳×׳‘׳ ׳™׳•׳× ׳©׳•׳ ׳•׳× ׳׳׳©׳¨ ׳׳‘׳ ׳•׳× ׳”׳™׳¨׳¨׳›׳™׳” ׳ ׳•׳§׳©׳” ׳©׳ ׳׳—׳׳§׳•׳× ׳׳‘ ׳•׳‘׳ ׳•׳×.</li>
    </ul>
    <div class="callout warn">
     <span class="ico">ג ן¸</span>
     <div class="ct"><b>׳׳§׳¨׳” ׳§׳¦׳” ׳•׳”׳™׳‘׳˜ ׳–׳™׳›׳¨׳•׳:</b> ׳‘׳©׳™׳׳•׳© ׳‘-Factory, ׳›׳ ׳׳•׳‘׳™׳™׳§׳˜ ׳©׳׳™׳•׳¦׳¨ ׳׳§׳‘׳ ׳¢׳•׳×׳§ ׳—׳“׳© ׳׳©׳׳• ׳©׳ ׳”׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳‘׳–׳™׳›׳¨׳•׳. ׳׳ ׳׳×׳ ׳׳™׳™׳¦׳¨׳™׳ ׳׳™׳׳™׳•׳ ׳™ ׳׳•׳‘׳™׳™׳§׳˜׳™׳ ׳›׳׳׳• ׳‘׳¨׳™׳¦׳”, ׳–׳” ׳™׳‘׳–׳‘׳– ׳™׳•׳×׳¨ ׳–׳™׳›׳¨׳•׳ ׳׳׳©׳¨ ׳©׳™׳׳•׳© ׳‘-Classes (׳©׳ ׳”׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳™׳•׳©׳‘׳•׳× ׳₪׳¢׳ ׳׳—׳× ׳‘׳׳‘׳“ ׳¢׳ ׳”-Prototype ׳”׳׳©׳•׳×׳£). ׳׳₪׳¨׳•׳™׳§׳˜׳™׳ ׳§׳˜׳ ׳™׳-׳‘׳™׳ ׳•׳ ׳™׳™׳, Factory ׳¢׳“׳™׳₪׳” ׳‘׳”׳¨׳‘׳”.</div>
    </div>
   </div>
  `
 },
 modules: {
  visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram-enhanced fade-slide-up">
                <div class="flow-node-enhanced">math.js</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">ג†’</span><span class="arrow-label">export</span></div>
                <div class="flow-node-enhanced active">add(), sub()</div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 1: ׳™׳™׳¦׳•׳ (Export)</b><br>׳‘׳׳§׳•׳ ׳׳›׳×׳•׳‘ ׳׳× ׳›׳ ׳”׳§׳•׳“ ׳‘׳§׳•׳‘׳¥ ׳׳—׳“ ׳¢׳ ׳§ ׳•׳׳‘׳•׳׳’׳, ׳׳ ׳—׳ ׳• ׳׳₪׳¦׳׳™׳ ׳׳•׳×׳•. ׳§׳•׳‘׳¥ ׳©׳¨׳•׳¦׳” ׳׳©׳×׳£ ׳›׳׳™׳ ׳›׳•׳×׳‘ <code>export</code> ׳׳₪׳ ׳™ ׳”׳₪׳•׳ ׳§׳¦׳™׳”."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced slide-in-right">
                <div class="flow-node-enhanced active">add(), sub()</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">ג†’</span><span class="arrow-label">import</span></div>
                <div class="flow-node-enhanced">app.js</div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 2: ׳™׳™׳‘׳•׳ (Import)</b><br>׳”׳§׳•׳‘׳¥ ׳”׳¨׳׳©׳™ ׳©׳•׳׳‘ ׳׳׳™׳• ׳¨׳§ ׳׳× ׳”׳›׳׳™׳ ׳”׳¡׳₪׳¦׳™׳₪׳™׳™׳ ׳©׳”׳•׳ ׳¦׳¨׳™׳, ׳׳” ׳©׳”׳•׳₪׳ ׳׳× ׳”׳§׳•׳“ ׳׳§׳ ׳׳©׳§׳, ׳׳׳•׳¨׳’׳, ׳•׳׳•׳ ׳¢ ׳”׳×׳ ׳’׳©׳•׳™׳•׳× ׳©׳׳•׳×."
        },
        {
            html_visual: `
            <div class="flow-diagram-enhanced scale-up">
                <div class="flow-node-enhanced">app.js<br>(׳”׳׳₪׳׳™׳§׳¦׳™׳”)</div>
                <div class="flow-arrow-enhanced"><span class="arrow-icon">ג†</span></div>
                <div style="display:flex; flex-direction:column; gap:5px;">
                    <div class="flow-node-enhanced" style="border-color:#38bdf8;">UI.js (׳׳׳©׳§)</div>
                    <div class="flow-node-enhanced" style="border-color:#ff0055;">API.js (׳©׳¨׳×)</div>
                </div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 3: ׳¢׳¥ ׳”׳×׳׳•׳™׳•׳× (Dependency Tree)</b><br>׳›׳ ׳ ׳¨׳׳™׳× ׳׳₪׳׳™׳§׳¦׳™׳” ׳׳•׳“׳¨׳ ׳™׳×: ׳§׳•׳‘׳¥ ׳¨׳׳©׳™ ׳׳—׳“ ׳©׳׳ ׳¦׳— ׳¢׳ ׳×׳–׳׳•׳¨׳× ׳©׳ ׳§׳‘׳¦׳™׳ ׳§׳˜׳ ׳™׳ ׳•׳¢׳¦׳׳׳™׳™׳ ׳©׳›׳ ׳׳—׳“ ׳׳”׳ ׳׳•׳׳—׳” ׳‘׳×׳—׳•׳׳•."
        }
    ],
    title: 'נ“¦ ׳׳•׳“׳•׳׳™׳ (ES6 Modules)',
  content: `
   <div class="card-body">
    <p class="lead">׳׳•׳“׳•׳׳™׳ (Modules) ׳׳׳₪׳©׳¨׳™׳ ׳׳ ׳• ׳׳₪׳¦׳ ׳׳× ׳”׳§׳•׳“ ׳©׳׳ ׳• ׳׳׳¡׳₪׳¨ ׳§׳‘׳¦׳™׳ ׳ ׳₪׳¨׳“׳™׳, ׳›׳׳©׳¨ ׳›׳ ׳§׳•׳‘׳¥ ׳׳ ׳”׳ ׳׳× ׳”׳¡׳‘׳™׳‘׳” ׳©׳׳•, ׳•׳׳¦׳”׳™׳¨ ׳‘׳׳₪׳•׳¨׳© ׳׳” ׳”׳•׳ ׳׳™׳™׳¦׳ ׳”׳—׳•׳¦׳” ׳•׳׳” ׳”׳•׳ ׳׳™׳™׳‘׳ ׳׳§׳‘׳¦׳™׳ ׳׳—׳¨׳™׳.</p>
    
    <h4>1. ׳™׳™׳¦׳•׳ ׳©׳׳™ (Named Export) ׳׳¢׳•׳׳× ׳™׳™׳¦׳•׳ ׳‘׳¨׳™׳¨׳× ׳׳—׳“׳ (Default Export)</h4>
    <pre><code><span class="t-com">// --- ׳§׳•׳‘׳¥ math.js ---</span>
<span class="t-com">// ׳™׳™׳¦׳•׳ ׳©׳׳™ (׳׳₪׳©׳¨ ׳›׳׳” ׳›׳׳׳• ׳‘׳§׳•׳‘׳¥)</span>
<span class="t-key">export</span> <span class="t-key">const</span> PI = <span class="t-num">3.14</span>;
<span class="t-key">export</span> <span class="t-key">const</span> <span class="t-fn">add</span> = (a, b) => a + b;

<span class="t-com">// ׳™׳™׳¦׳•׳ ׳‘׳¨׳™׳¨׳× ׳׳—׳“׳ (׳׳•׳×׳¨ ׳¨׳§ ׳׳—׳“ ׳›׳–׳” ׳‘׳§׳•׳‘׳¥!)</span>
<span class="t-key">export</span> <span class="t-key">default</span> <span class="t-key">function</span> <span class="t-fn">multiply</span>(a, b) {
 <span class="t-ctl">return</span> a * b;
}

<span class="t-com">// --- ׳§׳•׳‘׳¥ app.js ---</span>
<span class="t-com">// ׳™׳™׳‘׳•׳: ׳™׳™׳¦׳•׳ Default ׳׳—׳•׳¥ ׳׳¡׳•׳’׳¨׳™׳™׳, ׳™׳™׳¦׳•׳ Named ׳‘׳×׳•׳ {}</span>
<span class="t-key">import</span> multiply, { PI, add } <span class="t-key">from</span> <span class="t-str">"./math.js"</span>;</code></pre>

    <h4>2. ׳˜׳‘׳׳× ׳”׳©׳•׳•׳׳”: ES Modules ׳׳¢׳•׳׳× CommonJS</h4>
    <div class="tbl-scroll">
     <table>
      <tr><th>׳×׳›׳•׳ ׳”</th><th>ES Modules (ESM)</th><th>CommonJS (CJS)</th></tr>
      <tr><td><b>׳׳™׳׳•׳× ׳׳₪׳×׳—</b></td><td><code>import</code> / <code>export</code></td><td><code>require</code> / <code>module.exports</code></td></tr>
      <tr><td><b>׳§׳”׳ ׳™׳¢׳“</b></td><td>׳“׳₪׳“׳₪׳ ׳™׳ ׳׳•׳“׳¨׳ ׳™׳™׳ ׳•-Node.js ׳—׳“׳©</td><td>Node.js ׳׳‘׳•׳¡׳¡ ׳₪׳¨׳•׳™׳§׳˜׳™׳ ׳™׳©׳ ׳™׳</td></tr>
      <tr><td><b>׳׳•׳₪׳ ׳”׳₪׳¢׳•׳׳”</b></td><td>׳׳¡׳™׳ ׳›׳¨׳•׳ ׳™ (׳×׳•׳׳ ׳‘-Top-level await)</td><td>׳¡׳™׳ ׳›׳¨׳•׳ ׳™ ׳׳—׳׳•׳˜׳™׳</td></tr>
      <tr><td><b>׳”׳’׳“׳¨׳” ׳‘-Node</b></td><td>׳׳—׳™׳™׳‘ ׳”׳’׳“׳¨׳× <code>"type": "module"</code> ׳‘-package.json</td><td>׳‘׳¨׳™׳¨׳× ׳”׳׳—׳“׳ ׳”׳™׳©׳ ׳” ׳©׳ Node.js</td></tr>
     </table>
    </div>
   </div>
  `
 },
 destructuring: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container"><div class="anim-node">{a: 1, b: 2}</div><div class="anim-packet move-right" style="background:#00d2ff; width:50px;">׳₪׳™׳¨׳•׳§</div><div class="anim-node">const a = 1</div></div>
            `,
            text: "<b>׳₪׳™׳¨׳•׳§ ׳׳‘׳ ׳”</b><br>׳‘׳׳§׳•׳ ׳׳₪׳ ׳•׳× ׳׳׳•׳‘׳™׳™׳§׳˜ ׳›׳ ׳₪׳¢׳ (obj.a), ׳₪׳™׳¨׳•׳§ (Destructuring) ׳׳׳₪׳©׳¨ ׳׳ ׳• '׳׳©׳׳•׳£' ׳׳× ׳”׳¢׳¨׳ ׳׳×׳•׳ ׳”׳׳•׳‘׳™׳™׳§׳˜ ׳™׳©׳™׳¨׳•׳× ׳׳×׳•׳ ׳׳©׳×׳ ׳” ׳¢׳¦׳׳׳™ ׳‘׳§׳׳™ ׳§׳׳•׳×."
        }
    ],

  title: 'נ§© ׳₪׳™׳¨׳•׳§ ׳׳‘׳ ׳” (Destructuring & Spread)',
  content: `
   <div class="card-body">
    <p class="lead">׳₪׳™׳¨׳•׳§ ׳׳‘׳ ׳” (Destructuring) ׳•׳׳•׳₪׳¨׳˜׳•׳¨ ׳”׳₪׳™׳–׳•׳¨ (Spread) ׳”׳ ׳§׳™׳¦׳•׳¨׳™ ׳“׳¨׳ ׳×׳—׳‘׳™׳¨׳™׳™׳ ׳׳•׳“׳¨׳ ׳™׳™׳ ׳׳¢׳‘׳•׳“׳” ׳ ׳•׳—׳” ׳•׳ ׳§׳™׳™׳” ׳¢׳ ׳׳•׳‘׳™׳™׳§׳˜׳™׳ ׳•׳׳¢׳¨׳›׳™׳.</p>
    
    <h4>1. ׳₪׳™׳¨׳•׳§ ׳׳•׳‘׳™׳™׳§׳˜׳™׳ ׳•׳׳¢׳¨׳›׳™׳ (Destructuring)</h4>
    <pre><code><span class="t-key">const</span> user = { name: <span class="t-str">"׳׳׳•׳"</span>, age: <span class="t-num">22</span> };

<span class="t-com">// ׳©׳׳™׳₪׳” ׳™׳©׳™׳¨׳” ׳©׳ ׳׳₪׳×׳—׳•׳× ׳׳׳©׳×׳ ׳™׳ ׳‘׳׳•׳×׳• ׳©׳:</span>
<span class="t-key">const</span> { name, age } = user; 

<span class="t-com">// ׳©׳׳™׳₪׳” ׳¢׳ ׳©׳™׳ ׳•׳™ ׳©׳ ׳”׳׳©׳×׳ ׳” (Alias) ׳•׳¢׳¨׳ ׳‘׳¨׳™׳¨׳× ׳׳—׳“׳:</span>
<span class="t-key">const</span> { name: userName, role = <span class="t-str">"Guest"</span> } = user;
<span class="t-com">// userName = "׳׳׳•׳", role = "Guest"</span>

<span class="t-com">// ׳₪׳™׳¨׳•׳§ ׳׳¢׳¨׳ (׳׳₪׳™ ׳¡׳“׳¨ ׳”׳׳™׳§׳•׳):</span>
<span class="t-key">const</span> colors = [<span class="t-str">"׳׳“׳•׳"</span>, <span class="t-str">"׳›׳—׳•׳"</span>, <span class="t-str">"׳™׳¨׳•׳§"</span>];
<span class="t-key">const</span> [firstColor, secondColor] = colors; <span class="t-com">// "׳׳“׳•׳", "׳›׳—׳•׳"</span>
<span class="t-key">const</span> [first, , third] = colors; <span class="t-com">// ׳“׳™׳׳•׳’ ׳¢׳ ׳׳™׳‘׳¨: "׳׳“׳•׳", "׳™׳¨׳•׳§"</span></code></pre>

    <h4>2. ׳׳•׳₪׳¨׳˜׳•׳¨ ׳”׳₪׳™׳–׳•׳¨ ׳•׳”׳׳™׳¡׳•׳£ (...)</h4>
    <ul class="tight">
     <li><b>Spread (׳₪׳™׳–׳•׳¨)</b> ג€” ׳₪׳•׳¨׳© ׳׳™׳‘׳¨׳™׳ ׳©׳ ׳׳¢׳¨׳ ׳׳• ׳׳₪׳×׳—׳•׳× ׳©׳ ׳׳•׳‘׳™׳™׳§׳˜ ׳׳×׳•׳ ׳™׳¢׳“ ׳—׳“׳©. ׳׳©׳׳© ׳׳™׳¦׳™׳¨׳× ׳¢׳•׳×׳§׳™׳ ׳•׳׳™׳–׳•׳’׳™׳.</li>
     <li><b>Rest (׳׳™׳¡׳•׳£)</b> ג€” ׳׳•׳¡׳£ ׳׳× ׳©׳׳¨ ׳”׳׳™׳‘׳¨׳™׳ ׳©׳ ׳©׳׳¨׳• ׳׳×׳•׳ ׳׳¢׳¨׳ ׳׳—׳“ ׳׳¨׳•׳›׳–.</li>
    </ul>
    <pre><code><span class="t-com">// 1. Spread - ׳׳™׳–׳•׳’ ׳׳¢׳¨׳›׳™׳ ׳•׳™׳¦׳™׳¨׳× ׳¢׳•׳×׳§ ׳—׳“׳©</span>
<span class="t-key">const</span> original = [<span class="t-num">1</span>, <span class="t-num">2</span>];
<span class="t-key">const</span> copy = [...original, <span class="t-num">3</span>, <span class="t-num">4</span>]; <span class="t-com">// [1, 2, 3, 4]</span>

<span class="t-com">// 2. Rest - ׳׳™׳¡׳•׳£ ׳©׳׳¨׳™׳•׳× ׳‘׳×׳•׳ Destructuring</span>
<span class="t-key">const</span> [head, ...tail] = [<span class="t-num">10</span>, <span class="t-num">20</span>, <span class="t-num">30</span>, <span class="t-num">40</span>];
<span class="t-com">// head = 10, tail = [20, 30, 40]</span></code></pre>
   </div>
  `
 },
 syntaxWarehouse: {
  title: 'נ× ׳׳—׳¡׳ ׳”׳¡׳™׳ ׳˜׳§׳¡׳™׳ ׳”׳’׳“׳•׳',
  content: `
   <div class="card-body">
    <p class="lead">׳׳׳’׳¨ ׳©׳ ׳×׳‘׳ ׳™׳•׳× ׳¡׳™׳ ׳˜׳§׳¡ ׳׳•׳›׳ ׳•׳× ׳׳¢׳‘׳•׳“׳” ׳׳”׳™׳¨׳”. ׳”׳©׳×׳׳©׳• ׳‘׳• ׳›׳¨׳₪׳¨׳ ׳¡ ׳₪׳×׳•׳— ׳‘׳–׳׳ ׳›׳×׳™׳‘׳× ׳§׳•׳“.</p>
    
    <div class="legend">
     נ“– <b>׳׳™׳ ׳׳§׳¨׳•׳:</b> ׳›׳ ׳—׳׳§ ׳©׳ ׳׳¦׳ ׳‘׳×׳•׳ <span class="fill">׳×׳™׳‘׳” ׳׳§׳•׳•׳§׳•׳•׳×</span> ׳”׳•׳ ׳׳©׳×׳ ׳” ׳©׳׳×׳ ׳¦׳¨׳™׳›׳™׳ ׳׳”׳—׳׳™׳£ ׳‘׳¢׳¨׳›׳™׳ ׳©׳׳›׳ ׳‘׳”׳×׳׳ ׳׳‘׳¢׳™׳”.
    </div>

    <div class="modal-grid">
     <div class="modal-card">
      <h4>׳׳•׳׳׳” ׳׳׳•׳§׳“׳× ׳׳¢׳¨׳ (map / filter / reduce)</h4>
      <pre><code><span class="t-com">// map - ׳™׳¦׳™׳¨׳× ׳׳¢׳¨׳ ׳׳¢׳•׳‘׳“ ׳—׳“׳©</span>
<span class="t-key">const</span> <span class="fill">newArr</span> = <span class="fill">arr</span>.<span class="t-fn">map</span>(item => <span class="fill">item * 2</span>);

<span class="t-com">// filter - ׳¡׳™׳ ׳•׳ ׳׳₪׳¨׳™׳˜׳™׳ ׳©׳¢׳•׳׳“׳™׳ ׳‘׳×׳ ׳׳™</span>
<span class="t-key">const</span> <span class="fill">filtered</span> = <span class="fill">arr</span>.<span class="t-fn">filter</span>(item => <span class="fill">item.isActive === true</span>);

<span class="t-com">// reduce - ׳¦׳׳¦׳•׳ ׳׳׳¡׳₪׳¨/׳¢׳¨׳ ׳™׳—׳™׳“</span>
<span class="t-key">const</span> <span class="fill">sum</span> = <span class="fill">arr</span>.<span class="t-fn">reduce</span>((acc, cur) => <span class="fill">acc + cur</span>, <span class="t-num">0</span>);</code></pre>
     </div>

     <div class="modal-card">
      <h4>׳§׳¨׳™׳׳” ׳•׳›׳×׳™׳‘׳” ׳©׳ ׳§׳‘׳¦׳™׳ ׳‘-Node (׳׳¡׳™׳ ׳›׳¨׳•׳ ׳™)</h4>
      <pre><code><span class="t-key">const</span> fs = <span class="t-fn">require</span>(<span class="t-str">"fs"</span>).promises;

<span class="t-com">// ׳§׳¨׳™׳׳”</span>
<span class="t-key">const</span> rawData = <span class="t-ctl">await</span> fs.<span class="t-fn">readFile</span>(<span class="fill">"./data.json"</span>, <span class="t-str">"utf-8"</span>);
<span class="t-key">const</span> data = JSON.<span class="t-fn">parse</span>(rawData);

<span class="t-com">// ׳›׳×׳™׳‘׳”</span>
<span class="t-ctl">await</span> fs.<span class="t-fn">writeFile</span>(<span class="fill">"./data.json"</span>, JSON.<span class="t-fn">stringify</span>(<span class="fill">data</span>, <span class="t-key">null</span>, <span class="t-num">2</span>));</code></pre>
     </div>

     <div class="modal-card">
      <h4>׳§׳¨׳™׳׳× ׳‘׳§׳©׳× ׳¨׳©׳× (fetch) ׳‘-try/catch</h4>
      <pre><code><span class="t-ctl">try</span> {
 <span class="t-key">const</span> res = <span class="t-ctl">await</span> <span class="t-fn">fetch</span>(<span class="fill">url</span>);
 <span class="t-ctl">if</span> (!res.ok) <span class="t-ctl">throw</span> <span class="t-key">new</span> <span class="t-fn">Error</span>(<span class="t-str">"Request failed"</span>);
 <span class="t-key">const</span> data = <span class="t-ctl">await</span> res.<span class="t-fn">json</span>();
 console.<span class="t-fn">log</span>(data);
} <span class="t-ctl">catch</span> (err) {
 console.<span class="t-fn">error</span>(err.message);
}</code></pre>
     </div>
    </div>
   </div>
  `
 },
 pythonVsJs: {
  title: 'נ Python ׳׳•׳ JavaScript נ¨',
  content: `
   <div class="card-body">
    <p class="lead">׳˜׳‘׳׳× ׳”׳©׳•׳•׳׳” ׳׳”׳™׳¨׳” ׳׳׳×׳›׳ ׳×׳™׳ ׳©׳׳’׳™׳¢׳™׳ ׳׳¨׳§׳¢ ׳©׳ Python ׳׳׳™׳׳•׳“ JavaScript ׳”׳׳•׳“׳¨׳ ׳™.</p>
    <div class="tbl-scroll">
     <table>
      <thead>
       <tr><th>׳×׳›׳•׳ ׳”</th><th>Python נ</th><th>JavaScript נ¨</th></tr>
      </thead>
      <tbody>
       <tr><td>׳”׳“׳₪׳¡׳” ׳׳§׳•׳ ׳¡׳•׳</td><td><code>print("hello")</code></td><td><code>console.log("hello")</code></td></tr>
       <tr><td>׳”׳›׳¨׳–׳× ׳׳©׳×׳ ׳™׳</td><td><code>x = 5</code></td><td><code>const x = 5;</code> / <code>let x = 5;</code></td></tr>
       <tr><td>׳₪׳•׳ ׳§׳¦׳™׳•׳×</td><td><code>def greet(n): return n</code></td><td><code>function greet(n) { return n }</code> / <code>const greet = n => n</code></td></tr>
       <tr><td>׳׳•׳׳׳× ׳׳™׳‘׳¨׳™׳</td><td><code>for x in list:</code></td><td><code>for (const x of list) { ... }</code></td></tr>
       <tr><td>׳׳•׳׳׳” ׳¢׳ ׳׳₪׳×׳—׳•׳×</td><td><code>for k in dict:</code></td><td><code>for (const k in object) { ... }</code></td></tr>
       <tr><td>׳¨׳©׳× ׳•׳׳™׳׳•׳ ׳™׳</td><td><code>dict = {"a": 1}</code></td><td><code>const obj = { a: 1 };</code></td></tr>
       <tr><td>׳¢׳¨׳ ׳¨׳™׳§</td><td><code>None</code></td><td><code>null</code> / <code>undefined</code></td></tr>
       <tr><td>׳”׳©׳•׳•׳׳” ׳׳“׳•׳™׳™׳§׳×</td><td><code>x is y</code></td><td><code>x === y</code></td></tr>
       <tr><td>׳”׳›׳ ׳¡׳× ׳׳©׳×׳ ׳” ׳׳˜׳§׳¡׳˜</td><td><code>f"Hi {name}"</code></td><td><code>\`Hi \${name}\`</code></td></tr>
       <tr><td>׳׳•׳¨׳ ׳¨׳©׳™׳׳”</td><td><code>len(arr)</code></td><td><code>arr.length</code></td></tr>
       <tr><td>׳”׳•׳¡׳₪׳” ׳׳׳¢׳¨׳</td><td><code>arr.append(x)</code></td><td><code>arr.push(x)</code></td></tr>
      </tbody>
     </table>
    </div>
   </div>
  `
 },
 ironRules: {
  title: 'ג”ן¸ ׳¢׳©׳¨׳× ׳›׳׳׳™ ׳”׳‘׳¨׳–׳ ׳׳׳‘׳—׳',
  content: `
   <div class="card-body">
    <div class="modal-grid">
     <div class="rule-card">
      <h4>1. ׳×׳׳™׳“ ׳׳”׳©׳×׳׳© ׳‘-=== ׳§׳©׳•׳—</h4>
      <p>׳׳ ׳¢׳• ׳”׳׳¨׳•׳× ׳˜׳™׳₪׳•׳¡׳™׳ ׳‘׳׳×׳™ ׳¦׳₪׳•׳™׳•׳×. ׳׳¢׳•׳׳ ׳׳ ׳×׳©׳×׳׳©׳• ׳‘-<code>==</code>.</p>
      <div class="bad">5 == "5" // true (׳©׳’׳™׳׳” ׳¢׳™׳¦׳•׳‘׳™׳×!)</div>
      <div class="good">5 === "5" // false (׳×׳§׳™׳ ׳•׳׳“׳•׳™׳™׳§)</div>
     </div>
     
     <div class="rule-card">
      <h4>2. const ׳”׳•׳ ׳‘׳¨׳™׳¨׳× ׳”׳׳—׳“׳ ׳©׳׳›׳</h4>
      <p>׳”׳’׳“׳™׳¨׳• ׳›׳ ׳׳©׳×׳ ׳” ׳›-<code>const</code>. ׳¨׳§ ׳׳ ׳׳×׳ ׳—׳™׳™׳‘׳™׳ ׳׳©׳ ׳•׳× ׳׳× ׳¢׳¨׳›׳• ׳‘׳”׳׳©׳ ׳”׳׳•׳’׳™׳§׳”, ׳©׳ ׳• ׳׳•׳×׳• ׳-<code>let</code>.</p>
     </div>

     <div class="rule-card">
      <h4>3. ׳–׳”׳™׳¨׳•׳× ׳¢׳ sort() ׳©׳ ׳׳¡׳₪׳¨׳™׳</h4>
      <p>׳”׳׳×׳•׳“׳” <code>sort()</code> ׳׳׳ ׳₪׳¨׳׳˜׳¨׳™׳ ׳×׳׳™׳™׳ ׳׳× ׳”׳׳¡׳₪׳¨׳™׳ ׳›׳˜׳§׳¡׳˜. ׳×׳׳™׳“ ׳¡׳₪׳§׳• ׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳”׳©׳•׳•׳׳”.</p>
      <div class="bad">[10, 2].sort() // [10, 2]</div>
      <div class="good">[10, 2].sort((a,b) => a-b) // [2, 10]</div>
     </div>

     <div class="rule-card">
      <h4>4. res.end() ׳‘׳¡׳™׳•׳ ׳©׳¨׳× Vanilla</h4>
      <p>׳‘׳©׳¨׳× Vanilla, ׳׳ ׳׳ ׳×׳§׳¨׳׳• ׳-<code>res.end()</code> ׳”׳“׳₪׳“׳₪׳ ׳™׳™׳©׳׳¨ ׳×׳§׳•׳¢ ׳‘׳”׳׳×׳ ׳” ׳׳™׳ ׳¡׳•׳₪׳™׳×.</p>
     </div>

     <div class="rule-card">
      <h4>5. ׳׳¨׳‘׳¢׳” ׳₪׳¨׳׳˜׳¨׳™׳ ׳‘-Middleware ׳©׳ ׳©׳’׳™׳׳•׳× ׳‘-Express</h4>
      <p>׳׳˜׳₪׳ ׳©׳’׳™׳׳•׳× ׳׳¨׳›׳–׳™ ׳—׳™׳™׳‘ ׳׳§׳‘׳ ׳‘׳“׳™׳•׳§ 4 ׳₪׳¨׳׳˜׳¨׳™׳: <code>(err, req, res, next)</code> ׳›׳“׳™ ׳©-Express ׳™׳“׳¢ ׳©׳”׳•׳ ׳׳˜׳₪׳ ׳‘׳©׳’׳™׳׳•׳×.</p>
     </div>
    </div>
   </div>
  `
 },
 keyboard: {
  title: 'ג¨ן¸ ׳§׳™׳¦׳•׳¨׳™ VS Code ׳׳׳×׳›׳ ׳×׳™׳ ׳׳”׳™׳¨׳™׳',
  content: `
   <div class="card-body">
    <p class="lead">׳©׳™׳׳•׳© ׳‘׳׳§׳׳“׳× ׳‘׳׳§׳•׳ ׳‘׳¢׳›׳‘׳¨ ׳™׳—׳¡׳•׳ ׳׳›׳ ׳”׳׳•׳ ׳–׳׳ ׳™׳§׳¨ ׳‘׳׳”׳׳ ׳›׳×׳™׳‘׳× ׳₪׳¨׳•׳™׳§׳˜׳™׳ ׳•׳׳‘׳—׳ ׳™׳.</p>
    <div class="modal-grid">
     <div class="modal-card">
      <h4>׳§׳™׳¦׳•׳¨׳™ ׳¢׳¨׳™׳›׳” ׳•׳ ׳™׳•׳•׳˜ ׳׳”׳™׳¨׳™׳</h4>
      <div class="shortcut-row">
       <span class="shortcut-desc">׳‘׳—׳™׳¨׳× ׳”׳׳•׳₪׳¢ ׳”׳‘׳ ׳©׳ ׳”׳˜׳§׳¡׳˜ ׳”׳׳¡׳•׳׳ (׳׳¢׳¨׳™׳›׳” ׳׳¨׳•׳‘׳”)</span>
       <div class="key-combo"><span class="key">Ctrl</span><span class="key-plus">+</span><span class="key">D</span></div>
      </div>
      <div class="shortcut-row">
       <span class="shortcut-desc">׳”׳–׳–׳× ׳©׳•׳¨׳” ׳׳׳¢׳׳”/׳׳׳˜׳”</span>
       <div class="key-combo"><span class="key">Alt</span><span class="key-plus">+</span><span class="key">ג¬†/ג¬‡</span></div>
      </div>
      <div class="shortcut-row">
       <span class="shortcut-desc">׳©׳›׳₪׳•׳ ׳©׳•׳¨׳” ׳׳׳˜׳”</span>
       <div class="key-combo"><span class="key">Shift</span><span class="key-plus">+</span><span class="key">Alt</span><span class="key-plus">+</span><span class="key">ג¬‡</span></div>
      </div>
      <div class="shortcut-row">
       <span class="shortcut-desc">׳₪׳×׳™׳—׳” ׳•׳¡׳’׳™׳¨׳” ׳©׳ ׳”׳˜׳¨׳׳™׳ ׳ ׳”׳׳•׳‘׳ ׳”</span>
       <div class="key-combo"><span class="key">Ctrl</span><span class="key-plus">+</span><span class="key">\`</span></div>
      </div>
      <div class="shortcut-row">
       <span class="shortcut-desc">׳—׳™׳₪׳•׳© ׳§׳•׳‘׳¥ ׳׳”׳™׳¨ ׳‘׳₪׳¨׳•׳™׳§׳˜ ׳׳₪׳™ ׳©׳</span>
       <div class="key-combo"><span class="key">Ctrl</span><span class="key-plus">+</span><span class="key">P</span></div>
      </div>
     </div>
    </div>
   </div>
  `
 },
 libraries: {
  title: 'נ“ ׳¡׳₪׳¨׳™׳•׳× ׳¦׳“-׳©׳׳™׳©׳™ ׳ ׳₪׳•׳¦׳•׳× ׳‘-Node',
  content: `
   <div class="card-body">
    <p class="lead">׳¡׳₪׳¨׳™׳•׳× ׳₪׳•׳₪׳•׳׳¨׳™׳•׳× ׳”׳ ׳™׳×׳ ׳•׳× ׳׳”׳×׳§׳ ׳” ׳‘׳׳׳¦׳¢׳•׳× ׳׳ ׳”׳ ׳”׳—׳‘׳™׳׳•׳× npm:</p>
    <div class="modal-grid">
     <div class="lib-card">
      <h4>readline-sync</h4>
      <p>׳׳©׳׳©׳× ׳׳§׳‘׳׳× ׳§׳׳˜ ׳׳”׳׳©׳×׳׳© ׳‘׳˜׳¨׳׳™׳ ׳ ׳‘׳¦׳•׳¨׳” ׳¡׳™׳ ׳›׳¨׳•׳ ׳™׳× (׳¢׳•׳¦׳¨׳× ׳•׳׳׳×׳™׳ ׳” ׳׳”׳§׳׳“׳”).</p>
      <div class="install-cmd">npm install readline-sync</div>
     </div>
     <div class="lib-card">
      <h4>express</h4>
      <p>׳”׳¡׳₪׳¨׳™׳™׳” ׳”׳₪׳•׳₪׳•׳׳¨׳™׳× ׳‘׳™׳•׳×׳¨ ׳׳”׳§׳׳× ׳©׳¨׳×׳™׳ ׳•-APIs ׳‘׳¦׳•׳¨׳” ׳§׳׳” ׳•׳׳•׳“׳•׳׳¨׳™׳×.</p>
      <div class="install-cmd">npm install express</div>
     </div>
      <p>׳˜׳•׳¢׳ ׳× ׳׳©׳×׳ ׳™ ׳¡׳‘׳™׳‘׳” ׳׳׳•׳‘׳˜׳—׳™׳ ׳׳§׳•׳‘׳¥ <code>.env</code> ׳׳×׳•׳ ׳”׳׳₪׳׳™׳§׳¦׳™׳” (׳׳׳©׳ ׳¡׳™׳¡׳׳׳•׳× ׳•׳׳₪׳×׳—׳•׳× ׳¨׳©׳×).</p>
      <div class="install-cmd">npm install dotenv</div>
     </div>
    </div>
   </div>
  `
 },
 techEnglish: {
  title: 'נ”₪ ׳׳ ׳’׳׳™׳× ׳˜׳›׳ ׳•׳׳•׳’׳™׳× ׳”׳׳׳ (Technology English - 50+ Terms)',
  content: `
   <div class="card-body">
    <p class="lead" style="font-size: 1.1rem; line-height: 1.8;">
    ׳׳™׳׳•׳ ׳”׳׳•׳ ׳—׳™׳ ׳”׳׳•׳¨׳—׳‘! ׳›׳׳ ׳×׳׳¦׳׳• ׳”׳¡׳‘׳¨׳™׳ ׳›׳׳• (׳•׳₪׳—׳•׳× ׳›׳׳• ׳׳¨׳•׳‘׳•׳˜׳™׳ נ₪–) ׳¢׳‘׳•׳¨ ׳›׳ ׳”׳׳™׳׳™׳ ׳‘׳׳ ׳’׳׳™׳× ׳©׳׳ ׳—׳ ׳• ׳©׳•׳׳¢׳™׳ ׳‘׳©׳™׳¢׳•׳¨׳™׳, ׳‘׳”׳¨׳¦׳׳•׳× ׳”׳–׳•׳, ׳•׳¨׳•׳׳™׳ ׳‘׳§׳•׳“ ׳©׳׳ ׳•. <br>
    <strong>נ’¡ ׳—׳“׳©:</strong> ׳×׳•׳›׳׳• ׳׳¡׳׳ "V" ׳¢׳ ׳›׳ ׳׳•׳©׳’ ׳©׳”׳‘׳ ׳×׳ ׳›׳“׳™ ׳׳¢׳§׳•׳‘ ׳׳—׳¨ ׳”׳”׳×׳§׳“׳׳•׳× ׳©׳׳›׳! (׳”׳¡׳™׳׳•׳ ׳™׳ ׳™׳™׳©׳׳¨׳• ׳’׳ ׳׳—׳¨).
    </p>

    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">׳׳•׳©׳’׳™ ׳™׳¡׳•׳“ (Basics)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Variable</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳•ײ¶׳׳¨ײ´׳™׳ײ·׳‘ײ¼ײ¶׳ | ׳×׳¨׳’׳•׳: ׳׳©׳×׳ ׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳§׳•׳₪׳¡׳” ׳‘׳–׳™׳›׳¨׳•׳ ׳©׳ ׳”׳׳—׳©׳‘ ׳©׳׳ ׳—׳ ׳• ׳©׳׳™׳ ׳‘׳” ׳׳™׳“׳¢. ׳›׳׳• ׳§׳•׳₪׳¡׳× ׳ ׳¢׳׳™׳™׳ ׳©׳›׳×׳‘׳ ׳• ׳¢׳׳™׳” '׳’׳™׳' ׳•׳©׳׳ ׳• ׳‘׳₪׳ ׳™׳ ׳׳× ׳”׳׳¡׳₪׳¨ 20.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-variable" onchange="toggleTechWord('variable', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">String</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¡׳˜׳¨׳™׳ ׳’ | ׳×׳¨׳’׳•׳: ׳׳—׳¨׳•׳–׳× / ׳˜׳§׳¡׳˜</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳˜׳§׳¡׳˜ ׳¨׳’׳™׳. ׳ ׳§׳¨׳ ׳›׳›׳” ׳›׳™ ׳–׳” '׳׳—׳¨׳•׳–׳× ׳©׳ ׳׳•׳×׳™׳•׳×'. ׳×׳׳™׳“ ׳™׳•׳₪׳™׳¢ ׳‘׳×׳•׳ ׳׳™׳¨׳›׳׳•׳× ׳›׳׳• '׳©׳׳•׳'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-string" onchange="toggleTechWord('string', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Integer</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ´׳™׳ ײ°׳˜ײ¶׳’ײ¶'׳¨ | ׳×׳¨׳’׳•׳: ׳׳¡׳₪׳¨ ׳©׳׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳¡׳₪׳¨ ׳©׳׳™׳ ׳‘׳• ׳ ׳§׳•׳“׳” ׳¢׳©׳¨׳•׳ ׳™׳×, ׳׳׳©׳ 5, 10, 42.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-integer" onchange="toggleTechWord('integer', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Float</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײ°׳׳•ײ¹׳׳•ײ¼׳˜ | ׳×׳¨׳’׳•׳: ׳׳¡׳₪׳¨ ׳¢׳©׳¨׳•׳ ׳™</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳¡׳₪׳¨ ׳¢׳ ׳ ׳§׳•׳“׳” ׳¢׳©׳¨׳•׳ ׳™׳× ('׳¦׳£' ׳¢׳ ׳₪׳ ׳™ ׳”׳ ׳§׳•׳“׳”), ׳׳׳©׳ 3.14.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-float" onchange="toggleTechWord('float', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Boolean</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳‘ײ¼׳•ײ¼׳ײ´׳™׳ײ·׳ | ׳×׳¨׳’׳•׳: ׳‘׳•׳׳™׳׳ ׳™ (׳׳׳×/׳©׳§׳¨)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳¡׳•׳’ ׳ ׳×׳•׳ ׳©׳™׳›׳•׳ ׳׳”׳™׳•׳× ׳¨׳§ ׳׳—׳“ ׳׳©׳ ׳™ ׳“׳‘׳¨׳™׳: ׳׳׳× (true) ׳׳• ׳©׳§׳¨ (false). ׳›׳׳• ׳׳×׳’ ׳©׳ ׳׳•׳¨.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-boolean" onchange="toggleTechWord('boolean', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Array</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ²׳¨ײµ׳™׳™ | ׳×׳¨׳’׳•׳: ׳׳¢׳¨׳ / ׳¨׳©׳™׳׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳¨׳©׳™׳׳” ׳׳¡׳•׳“׳¨׳× ׳©׳ ׳₪׳¨׳™׳˜׳™׳. ׳›׳׳• ׳׳’׳™׳¨׳× ׳’׳¨׳‘׳™׳™׳ ׳©׳›׳ ׳–׳•׳’ ׳’׳¨׳‘׳™׳™׳ ׳׳¡׳•׳“׳¨ ׳׳₪׳™ ׳׳¡׳₪׳¨.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-array" onchange="toggleTechWord('array', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Object</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳׳•ײ¹׳‘ײ¼ײ°׳’ײ¶'׳§ײ°׳˜ | ׳×׳¨׳’׳•׳: ׳׳•׳‘׳™׳™׳§׳˜</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳‘׳ ׳” ׳ ׳×׳•׳ ׳™׳ ׳©׳׳×׳׳¨ '׳“׳‘׳¨' ׳©׳׳ ׳‘׳¢׳–׳¨׳× ׳×׳›׳•׳ ׳•׳× (׳׳₪׳×׳—׳•׳× ׳•׳¢׳¨׳›׳™׳). ׳›׳׳• ׳×׳™׳§ ׳׳™׳©׳™ ׳©׳ ׳‘׳ ׳׳“׳ ׳©׳™׳© ׳‘׳• ׳©׳, ׳’׳™׳, ׳•׳›׳×׳•׳‘׳×.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-object" onchange="toggleTechWord('object', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Property</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײ°ײ¼׳¨׳•ײ¹׳₪ײ¶ײ¼׳¨ײ°׳˜ײ´׳™ | ׳×׳¨׳’׳•׳: ׳׳׳₪׳™׳™׳ / ׳×׳›׳•׳ ׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳©׳×׳ ׳” ׳©׳ ׳׳¦׳ ׳‘׳×׳•׳ ׳׳•׳‘׳™׳™׳§׳˜. ׳׳׳©׳ ׳‘׳׳•׳‘׳™׳™׳§׳˜ ׳׳•׳˜׳•, ׳”׳×׳›׳•׳ ׳” ׳™׳›׳•׳׳” ׳׳”׳™׳•׳× '׳¦׳‘׳¢'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-property" onchange="toggleTechWord('property', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Method</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ¶׳×ײ¼׳•ײ¹׳“ | ׳×׳¨׳’׳•׳: ׳׳×׳•׳“׳” / ׳₪׳¢׳•׳׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳₪׳•׳ ׳§׳¦׳™׳” ׳©׳ ׳׳¦׳׳× ׳‘׳×׳•׳ ׳׳•׳‘׳™׳™׳§׳˜. ׳׳׳©׳ ׳‘׳׳•׳‘׳™׳™׳§׳˜ ׳׳•׳˜׳•, ׳”׳׳×׳•׳“׳” ׳™׳›׳•׳׳” ׳׳”׳™׳•׳× '׳׳¡׳•׳¢()'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-method" onchange="toggleTechWord('method', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Loop</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳׳•ײ¼׳₪ײ¼ | ׳×׳¨׳’׳•׳: ׳׳•׳׳׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳₪׳¢׳•׳׳” ׳©׳—׳•׳–׳¨׳× ׳¢׳ ׳¢׳¦׳׳” ׳›׳׳” ׳₪׳¢׳׳™׳ ׳©׳׳ ׳—׳ ׳• ׳׳‘׳§׳©׳™׳, ׳׳• ׳¢׳“ ׳©׳×׳ ׳׳™ ׳׳¡׳•׳™׳ ׳׳×׳§׳™׳™׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-loop" onchange="toggleTechWord('loop', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Iteration</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ´׳™׳˜ײ¶׳¨ײµ׳™׳™ײ°׳©ײ¶׳׳ | ׳×׳¨׳’׳•׳: ׳׳™׳˜׳¨׳¦׳™׳” / ׳¡׳‘׳‘</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳₪׳¢׳ ׳׳—׳× ׳׳×׳•׳ ׳›׳ ׳”׳₪׳¢׳׳™׳ ׳©׳”׳׳•׳׳׳” ׳¨׳¦׳”. '׳”׳׳•׳׳׳” ׳¢׳©׳×׳” 5 ׳׳™׳˜׳¨׳¦׳™׳•׳×'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-iteration" onchange="toggleTechWord('iteration', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Condition</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•ײ¹׳ ײ°׳“ײ´׳™׳©ײ¶׳׳ | ׳×׳¨׳’׳•׳: ׳×׳ ׳׳™</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳©׳₪׳˜ ׳׳•׳’׳™ ׳©׳׳•׳׳¨ ׳׳׳—׳©׳‘: '׳¨׳§ ׳׳ X ׳ ׳›׳•׳, ׳×׳¢׳©׳” Y'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-condition" onchange="toggleTechWord('condition', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Syntax</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¡ײ´׳™׳ ײ°׳˜ײ·׳§ײ°׳¡ | ׳×׳¨׳’׳•׳: ׳×׳—׳‘׳™׳¨</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳“׳§׳“׳•׳§ ׳©׳ ׳©׳₪׳× ׳”׳×׳›׳ ׳•׳×. ׳”׳›׳׳׳™׳ ׳׳™׳ ׳‘׳“׳™׳•׳§ ׳¦׳¨׳™׳ ׳׳›׳×׳•׳‘ ׳׳× ׳”׳§׳•׳“ (׳׳™׳₪׳” ׳©׳׳™׳ ׳ ׳§׳•׳“׳”-׳₪׳¡׳™׳§, ׳¡׳•׳’׳¨׳™׳™׳ ׳•׳›׳•').</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-syntax" onchange="toggleTechWord('syntax', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Const</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•ײ¹׳ ײ°׳¡ײ°׳˜ | ׳×׳¨׳’׳•׳: ׳§׳‘׳•׳¢</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳¦׳”׳¨׳” ׳¢׳ ׳׳©׳×׳ ׳” ׳©׳׳™ ׳׳₪׳©׳¨ ׳׳©׳ ׳•׳× ׳׳× ׳”׳¢׳¨׳ ׳©׳׳• ׳׳—׳¨׳™ ׳©׳”׳’׳“׳¨׳ ׳• ׳׳•׳×׳•. ׳›׳׳• ׳—׳•׳–׳” ׳—׳×׳•׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-const" onchange="toggleTechWord('const', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Let</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ¶׳˜ | ׳×׳¨׳’׳•׳: ׳׳©׳×׳ ׳” ׳©׳ ׳™׳×׳ ׳׳©׳™׳ ׳•׳™</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳¦׳”׳¨׳” ׳¢׳ ׳׳©׳×׳ ׳” ׳©׳׳ ׳—׳ ׳• ׳™׳›׳•׳׳™׳ ׳׳¢׳“׳›׳ ׳‘׳”׳׳©׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-let" onchange="toggleTechWord('let', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Var</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳•ײ·׳׳¨ | ׳×׳¨׳’׳•׳: ׳׳©׳×׳ ׳” (׳™׳©׳)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳“׳¨׳ ׳”׳™׳©׳ ׳” (׳׳₪׳ ׳™ ES6) ׳׳”׳’׳“׳™׳¨ ׳׳©׳×׳ ׳™׳. ׳׳ ׳—׳ ׳• ׳׳©׳×׳“׳׳™׳ ׳׳ ׳׳”׳©׳×׳׳© ׳‘׳” ׳™׳•׳×׳¨ ׳›׳™ ׳”׳™׳ ׳¢׳•׳©׳” ׳‘׳׳׳’׳ ׳¢׳ ׳”-Scope.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-var" onchange="toggleTechWord('var', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Null</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ ײ·׳׳ | ׳×׳¨׳’׳•׳: ׳›׳׳•׳ / ׳¨׳™׳§ ׳׳›׳•׳•׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳¢׳¨׳ ׳©׳׳•׳׳¨ '׳׳™׳ ׳₪׳” ׳›׳׳•׳, ׳•׳–׳” ׳‘׳›׳•׳•׳ ׳”'. ׳׳ ׳—׳ ׳• ׳”׳›׳ ׳¡׳ ׳• ׳׳× ׳”׳›׳׳•׳ ׳”׳–׳” ׳׳©׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-null" onchange="toggleTechWord('null', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Undefined</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ·׳ ײ°׳“ײ´׳™׳₪ײ·׳™׳™׳ ײ°׳“ | ׳×׳¨׳’׳•׳: ׳׳ ׳׳•׳’׳“׳¨</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳¢׳¨׳ ׳©׳׳•׳׳¨ '׳”׳׳—׳©׳‘ ׳׳ ׳™׳•׳“׳¢ ׳׳” ׳–׳”'. ׳׳©׳×׳ ׳” ׳©׳ ׳•׳¦׳¨ ׳׳‘׳ ׳׳¢׳•׳׳ ׳׳ ׳”׳›׳ ׳™׳¡׳• ׳׳×׳•׳›׳• ׳©׳•׳ ׳¢׳¨׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-undefined" onchange="toggleTechWord('undefined', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>
    </div>
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">׳₪׳•׳ ׳§׳¦׳™׳•׳×, ׳”׳™׳§׳£ ׳•׳׳×׳§׳“׳ (Functions & Scope)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Function</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײ·׳׳ ײ°׳§ײ°׳©ײ¶׳׳ | ׳×׳¨׳’׳•׳: ׳₪׳•׳ ׳§׳¦׳™׳” / ׳₪׳¢׳•׳׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳—׳×׳™׳›׳× ׳§׳•׳“ ׳©׳¢׳•׳©׳” ׳₪׳¢׳•׳׳” ׳׳¡׳•׳™׳׳× ׳•׳™׳© ׳׳” ׳©׳. ׳׳₪׳©׳¨ ׳׳§׳¨׳•׳ ׳׳” ׳׳×׳™ ׳©׳¨׳•׳¦׳™׳ ׳‘׳׳§׳•׳ ׳׳›׳×׳•׳‘ ׳׳× ׳”׳§׳•׳“ ׳׳—׳“׳©.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-function" onchange="toggleTechWord('function', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Parameter</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײ¸ײ¼׳¨ײ¸׳ײ¶׳˜ײ¶׳¨ | ׳×׳¨׳’׳•׳: ׳₪׳¨׳׳˜׳¨ (׳‘׳×׳•׳ ׳”׳₪׳•׳ ׳§׳¦׳™׳”)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳׳©׳×׳ ׳” (׳”׳׳§׳•׳ ׳”׳©׳׳•׳¨) ׳©׳׳ ׳—׳ ׳• ׳׳’׳“׳™׳¨׳™׳ ׳‘׳×׳•׳ ׳”׳¡׳•׳’׳¨׳™׳™׳ ׳›׳©׳׳ ׳—׳ ׳• ׳‘׳•׳ ׳™׳ ׳׳× ׳”׳₪׳•׳ ׳§׳¦׳™׳”. ׳›׳׳• ׳©׳׳˜ ׳©׳׳•׳׳¨ '׳›׳׳ ׳™׳™׳›׳ ׳¡ ׳©׳'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-parameter" onchange="toggleTechWord('parameter', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Argument</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ·׳¨ײ°׳’ײ°׳™׳•ײ¼׳ײ¶׳ ײ°׳˜ | ׳×׳¨׳’׳•׳: ׳׳¨׳’׳•׳׳ ׳˜ / ׳¢׳¨׳ ׳ ׳©׳׳—</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳¢׳¨׳ ׳”׳׳׳™׳×׳™ ׳©׳׳ ׳—׳ ׳• ׳©׳•׳׳—׳™׳ ׳׳₪׳•׳ ׳§׳¦׳™׳” ׳›׳©׳׳ ׳—׳ ׳• ׳׳₪׳¢׳™׳׳™׳ ׳׳•׳×׳”. (׳׳׳©׳: ׳ ׳×׳, ׳’׳™׳ 20).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-argument" onchange="toggleTechWord('argument', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Return</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¨ײ´׳™׳˜ײ¶׳¨ײ°׳ | ׳×׳¨׳’׳•׳: ׳”׳—׳–׳¨׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳₪׳§׳•׳“׳” ׳©׳–׳•׳¨׳§׳× ׳׳× ׳”׳×׳©׳•׳‘׳” ׳׳×׳•׳ ׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳‘׳—׳–׳¨׳” ׳׳׳™ ׳©׳§׳¨׳ ׳׳”.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-return" onchange="toggleTechWord('return', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Arrow Function</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ¶׳¨׳•ײ¹ ׳₪ײ·׳׳ ײ°׳§ײ°׳©ײ¶׳׳ | ׳×׳¨׳’׳•׳: ׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳—׳¥</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳“׳¨׳ ׳§׳¦׳¨׳” ׳•׳׳•׳“׳¨׳ ׳™׳× (ES6) ׳׳›׳×׳•׳‘ ׳₪׳•׳ ׳§׳¦׳™׳”. ׳‘׳׳™ ׳”׳׳™׳׳” function, ׳¨׳§ ׳—׳¥ ׳׳’׳ ׳™׳‘ =&#62; .</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-arrow_function" onchange="toggleTechWord('arrow_function', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Callback</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•ײ¹׳ײ°׳‘ײ¶ײ¼׳§ | ׳×׳¨׳’׳•׳: ׳§׳¨׳™׳׳” ׳—׳•׳–׳¨׳× (׳§׳•׳׳‘׳§)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳₪׳•׳ ׳§׳¦׳™׳” ׳©׳׳ ׳—׳ ׳• ׳©׳•׳׳—׳™׳ ׳׳×׳•׳ ׳₪׳•׳ ׳§׳¦׳™׳” ׳׳—׳¨׳×, ׳•׳׳•׳׳¨׳™׳ ׳׳”: '׳×׳₪׳¢׳™׳׳™ ׳׳× ׳–׳” ׳›׳©׳׳× ׳׳¡׳™׳™׳׳×!'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-callback" onchange="toggleTechWord('callback', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Scope</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¡ײ°׳§׳•ײ¹׳₪ײ¼ | ׳×׳¨׳’׳•׳: ׳”׳™׳§׳£ / ׳˜׳•׳•׳— ׳”׳›׳¨׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”'׳©׳˜׳—' ׳©׳‘׳• ׳׳©׳×׳ ׳” ׳׳•׳›׳¨. ׳׳©׳×׳ ׳” ׳©׳ ׳›׳×׳‘ ׳‘׳×׳•׳ ׳₪׳•׳ ׳§׳¦׳™׳” (Scope ׳׳§׳•׳׳™) ׳׳ ׳׳•׳›׳¨ ׳‘׳—׳•׳¥.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-scope" onchange="toggleTechWord('scope', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Global</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳’ײ°׳׳•ײ¹׳‘ײ·ײ¼׳ | ׳×׳¨׳’׳•׳: ׳’׳׳•׳‘׳׳™</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳©׳×׳ ׳” ׳©׳›׳×׳•׳‘ ׳׳—׳•׳¥ ׳׳›׳ ׳”׳₪׳•׳ ׳§׳¦׳™׳•׳×. ׳›׳•׳׳ ׳™׳›׳•׳׳™׳ ׳׳¨׳׳•׳× ׳׳•׳×׳• ׳•׳׳©׳ ׳•׳× ׳׳•׳×׳• (׳›׳׳• ׳©׳׳˜ ׳—׳•׳¦׳•׳×).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-global" onchange="toggleTechWord('global', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Local</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳׳•ײ¹׳§ײ·׳ | ׳×׳¨׳’׳•׳: ׳׳§׳•׳׳™</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳©׳×׳ ׳” ׳©׳—׳™ ׳¨׳§ ׳‘׳×׳•׳ ׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳׳• ׳”׳¡׳•׳’׳¨׳™׳™׳ ׳”׳׳¡׳•׳׳¡׳׳™׳ ׳©׳׳• (׳›׳׳• ׳™׳•׳׳ ׳׳™׳©׳™).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-local" onchange="toggleTechWord('local', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Closure</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§ײ°׳׳•ײ¹׳–ײ¶'׳¨ | ׳×׳¨׳’׳•׳: ׳¡׳’׳™׳¨׳” / ׳§׳׳•׳–'׳¨</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳§׳¡׳ ׳‘-JS ׳©׳‘׳• ׳₪׳•׳ ׳§׳¦׳™׳” ׳₪׳ ׳™׳׳™׳× '׳–׳•׳›׳¨׳×' ׳׳× ׳”׳׳©׳×׳ ׳™׳ ׳©׳ ׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳©׳¢׳˜׳₪׳” ׳׳•׳×׳”, ׳’׳ ׳׳—׳¨׳™ ׳©׳”׳—׳™׳¦׳•׳ ׳™׳× ׳¡׳™׳™׳׳” ׳׳¢׳‘׳•׳“.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-closure" onchange="toggleTechWord('closure', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Hoisting</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳”׳•ײ¹׳™ײ°׳¡ײ°׳˜ײ´׳™׳ ײ°׳’ | ׳×׳¨׳’׳•׳: ׳”׳ ׳₪׳” (׳׳©׳™׳›׳” ׳׳׳¢׳׳”)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳ ׳˜׳™׳™׳” ׳©׳ JS ׳׳§׳—׳× ׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳•׳׳©׳×׳ ׳™׳ (var) ׳•׳׳”׳¨׳™׳ ׳׳•׳×׳ ׳׳¨׳׳© ׳”׳§׳•׳‘׳¥ ׳׳₪׳ ׳™ ׳©׳”׳§׳•׳“ ׳¨׳¥.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-hoisting" onchange="toggleTechWord('hoisting', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Destructuring</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳“ײ´׳™׳¡ײ°׳˜ײ°׳¨ײ·׳§ײ°׳¦ײ°'׳¨ײ´׳™׳ ײ°׳’ | ׳×׳¨׳’׳•׳: ׳₪׳™׳¨׳•׳§</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳—׳™׳׳•׳¥ ׳׳©׳×׳ ׳™׳ ׳׳×׳•׳ ׳׳•׳‘׳™׳™׳§׳˜ ׳׳• ׳׳¢׳¨׳ ׳‘׳©׳•׳¨׳” ׳׳—׳×. ׳׳׳©׳ const {name} = obj.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-destructuring" onchange="toggleTechWord('destructuring', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>
    </div>
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">׳׳¡׳™׳ ׳›׳¨׳•׳ ׳™׳•׳× ׳•׳׳™׳•׳•׳ ׳˜ ׳׳•׳₪ (Async & Event Loop)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Synchronous</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¡ײ´׳™׳ ײ°׳›ײ°ײ¼׳¨׳•ײ¹׳ ײ´׳™׳¡ | ׳×׳¨׳’׳•׳: ׳¡׳™׳ ׳›׳¨׳•׳ ׳™ / ׳׳—׳“ ׳׳—׳¨׳™ ׳”׳©׳ ׳™</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳“׳¨׳ ׳”׳¨׳’׳™׳׳” ׳©׳‘׳” ׳§׳•׳“ ׳¨׳¥ - ׳©׳•׳¨׳” ׳׳—׳¨׳™ ׳©׳•׳¨׳”. ׳׳ ׳©׳•׳¨׳” ׳ ׳×׳§׳¢׳×, ׳›׳ ׳”׳×׳•׳›׳ ׳” ׳ ׳×׳§׳¢׳×!</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-synchronous" onchange="toggleTechWord('synchronous', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Asynchronous</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײµ׳¡ײ´׳™׳ ײ°׳›ײ°ײ¼׳¨׳•ײ¹׳ ײ´׳™׳¡ | ׳×׳¨׳’׳•׳: ׳-׳¡׳™׳ ׳›׳¨׳•׳ ׳™ / ׳¢׳‘׳•׳“׳” ׳‘׳¨׳§׳¢</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳§׳•׳“ ׳©׳׳‘׳¦׳¢ ׳׳©׳™׳׳•׳× ׳‘׳¨׳§׳¢ (׳›׳׳• ׳׳—׳›׳•׳× ׳׳˜׳™׳™׳׳¨ ׳׳• ׳׳׳™׳ ׳˜׳¨׳ ׳˜) ׳•׳׳ ׳¢׳•׳¦׳¨ ׳׳× ׳©׳׳¨ ׳”׳×׳•׳›׳ ׳”.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-asynchronous" onchange="toggleTechWord('asynchronous', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Event Loop</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ´׳™׳•ײ¶׳•׳ ײ°׳˜ ׳׳•ײ¼׳₪ײ¼ | ׳×׳¨׳’׳•׳: ׳׳•׳׳׳× ׳”׳׳™׳¨׳•׳¢׳™׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳ ׳•׳¢ ׳”׳§׳¡׳ ׳©׳ JS ׳©׳¨׳¥ ׳›׳ ׳”׳–׳׳, ׳‘׳•׳“׳§ ׳׳ ׳”׳׳—׳¡׳ ׳™׳× (Call Stack) ׳¨׳™׳§׳”, ׳•׳׳ ׳›׳ - ׳“׳•׳—׳£ ׳׳©׳ ׳§׳•׳׳‘׳§׳™׳ ׳©׳¡׳™׳™׳׳• ׳׳—׳›׳•׳×.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-event_loop" onchange="toggleTechWord('event_loop', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Call Stack</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•ײ¹׳ ׳¡ײ°׳˜ײ·׳׳§ | ׳×׳¨׳’׳•׳: ׳׳—׳¡׳ ׳™׳× ׳”׳§׳¨׳™׳׳•׳×</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳©׳•׳׳—׳ ׳”׳¢׳‘׳•׳“׳” ׳©׳ JS. ׳›׳ ׳₪׳•׳ ׳§׳¦׳™׳” ׳©׳¨׳¦׳” ׳ ׳¢׳¨׳׳× ׳©׳, ׳•׳›׳©׳”׳™׳ ׳׳¡׳™׳™׳׳× ׳”׳™׳ ׳™׳•׳¨׳“׳× ׳׳©׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-call_stack" onchange="toggleTechWord('call_stack', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Callback Queue</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•ײ¹׳ײ°׳‘ײ¶ײ¼׳§ ׳§ײ°׳™׳•ײ¼ | ׳×׳¨׳’׳•׳: ׳×׳•׳¨ ׳”׳§׳•׳׳‘׳§׳™׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳—׳“׳¨ ׳”׳”׳׳×׳ ׳”! ׳›׳ ׳׳©׳™׳׳” ׳©׳¡׳™׳™׳׳” ׳׳—׳›׳•׳× ׳‘׳¨׳§׳¢ (׳›׳׳• ׳˜׳™׳™׳׳¨ ׳©׳ ׳’׳׳¨) ׳ ׳›׳ ׳¡׳× ׳׳×׳•׳¨ ׳”׳–׳” ׳•׳׳—׳›׳” ׳©׳”-Call Stack ׳™׳×׳₪׳ ׳”.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-callback_queue" onchange="toggleTechWord('callback_queue', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Promise</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײ°ײ¼׳¨׳•ײ¹׳ײ´׳™׳¡ | ׳×׳¨׳’׳•׳: ׳”׳‘׳˜׳—׳” (׳₪׳¨׳•׳׳™׳¡)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳•׳‘׳™׳™׳§׳˜ ׳—׳›׳ ׳©׳׳•׳׳¨ '׳׳ ׳™ ׳׳‘׳™׳ ׳׳ ׳׳× ׳”׳ ׳×׳•׳ ׳™׳ ׳‘׳¢׳×׳™׳“'. ׳™׳›׳•׳ ׳׳”׳¦׳׳™׳— (Resolve) ׳׳• ׳׳”׳™׳›׳©׳ (Reject).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-promise" onchange="toggleTechWord('promise', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Resolve</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¨ײ´׳™׳–׳•ײ¹׳ײ°׳‘ײ¼ | ׳×׳¨׳’׳•׳: ׳”׳‘׳˜׳—׳” ׳§׳•׳™׳׳” (׳”׳¦׳׳—׳”)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳׳¦׳‘ ׳©׳‘׳• ׳”-Promise ׳¡׳™׳™׳ ׳‘׳”׳¦׳׳—׳” ׳•׳”׳‘׳™׳ ׳׳ ׳• ׳׳× ׳׳” ׳©׳‘׳™׳§׳©׳ ׳•.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-resolve" onchange="toggleTechWord('resolve', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Reject</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¨ײ´׳™׳’ײ¶'׳§ײ°׳˜ | ׳×׳¨׳’׳•׳: ׳”׳‘׳˜׳—׳” ׳ ׳›׳©׳׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳׳¦׳‘ ׳©׳‘׳• ׳”-Promise ׳ ׳×׳§׳ ׳‘׳©׳’׳™׳׳” (׳׳׳©׳, ׳׳™׳ ׳׳™׳ ׳˜׳¨׳ ׳˜).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-reject" onchange="toggleTechWord('reject', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Async</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײµ׳¡ײ´׳™׳ ײ°׳§ | ׳×׳¨׳’׳•׳: ׳₪׳•׳ ׳§׳¦׳™׳” ׳׳¡׳™׳ ׳›׳¨׳•׳ ׳™׳×</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳™׳׳” ׳©׳©׳׳™׳ ׳׳₪׳ ׳™ ׳₪׳•׳ ׳§׳¦׳™׳” ׳›׳“׳™ ׳׳”׳₪׳•׳ ׳׳•׳×׳” ׳׳׳¡׳™׳ ׳›׳¨׳•׳ ׳™׳×. ׳₪׳•׳ ׳§׳¦׳™׳” ׳›׳–׳• ׳×׳׳™׳“ ׳׳—׳–׳™׳¨׳” Promise.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-async" onchange="toggleTechWord('async', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Await</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ¸׳•ײ¶׳•׳™ײ°׳™׳˜ | ׳×׳¨׳’׳•׳: ׳”׳׳×׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳™׳׳” ׳©׳׳₪׳©׳¨ ׳׳›׳×׳•׳‘ ׳¨׳§ ׳‘׳×׳•׳ Async. ׳”׳™׳ ׳׳•׳׳¨׳×: '׳×׳¢׳¦׳•׳¨ ׳₪׳” ׳•׳×׳—׳›׳” ׳¢׳“ ׳©׳”-Promise ׳™׳¡׳™׳™׳, ׳•׳¨׳§ ׳׳– ׳×׳׳©׳™׳'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-await" onchange="toggleTechWord('await', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Fetch</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײ¶׳¦' | ׳×׳¨׳’׳•׳: ׳×׳‘׳™׳ / ׳‘׳§׳©׳× ׳¨׳©׳×</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳₪׳•׳ ׳§׳¦׳™׳” ׳׳•׳‘׳ ׳™׳× ׳©׳׳©׳×׳׳©׳™׳ ׳‘׳” ׳›׳“׳™ ׳׳‘׳§׳© ׳׳™׳“׳¢ ׳׳©׳¨׳× ׳׳—׳¨ ׳“׳¨׳ ׳”׳׳™׳ ׳˜׳¨׳ ׳˜ (׳×׳׳™׳“ ׳׳—׳–׳™׳¨׳” Promise).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-fetch" onchange="toggleTechWord('fetch', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Then</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳“ײ¶'׳ | ׳×׳¨׳’׳•׳: ׳•׳׳– (׳‘׳”׳¦׳׳—׳”)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳—׳׳§ ׳‘-Promise ׳©׳׳•׳₪׳¢׳ ׳‘׳¨׳’׳¢ ׳©׳”׳•׳ ׳׳¦׳׳™׳— (Resolve).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-then" onchange="toggleTechWord('then', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Catch</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§ײ¶׳׳˜ײ°׳¦' | ׳×׳¨׳’׳•׳: ׳×׳₪׳•׳¡ ׳©׳’׳™׳׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳—׳׳§ ׳‘-Promise ׳©׳׳•׳₪׳¢׳ ׳›׳©׳™׳© ׳›׳™׳©׳׳•׳ (Reject).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-catch" onchange="toggleTechWord('catch', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Timeout</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳˜ײ·׳™ײ°׳™׳ײ°׳׳•ײ¼׳˜ | ׳×׳¨׳’׳•׳: ׳”׳©׳”׳™׳™׳” (׳˜׳™׳™׳׳¨)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳›׳׳• setTimeout - ׳₪׳¢׳•׳׳” ׳©׳§׳•׳¨׳™׳× ׳₪׳¢׳ ׳׳—׳× ׳׳—׳¨׳™ ׳–׳׳ ׳׳¡׳•׳™׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-timeout" onchange="toggleTechWord('timeout', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Interval</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ´׳™׳ ײ°׳˜ײ¶׳¨ײ°׳‘ײ·׳ | ׳×׳¨׳’׳•׳: ׳—׳–׳¨׳” ׳§׳‘׳•׳¢׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳›׳׳• setInterval - ׳₪׳¢׳•׳׳” ׳©׳§׳•׳¨׳™׳× ׳©׳•׳‘ ׳•׳©׳•׳‘ ׳›׳ ׳›׳׳” ׳©׳ ׳™׳•׳×.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-interval" onchange="toggleTechWord('interval', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>
    </div>
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">׳©׳¨׳×׳™׳ ׳•-Web (HTTP & APIs)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Server</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¡ײ¶׳¨ײ°׳‘ײ¶׳¨ | ׳×׳¨׳’׳•׳: ׳©׳¨׳×</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳—׳©׳‘ ׳©׳¨׳¥ ׳›׳ ׳”׳–׳׳ ׳•׳׳—׳›׳” ׳©׳׳ ׳©׳™׳ ׳™׳‘׳§׳©׳• ׳׳׳ ׳• ׳׳™׳“׳¢. '׳”׳׳¡׳¢׳“׳”'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-server" onchange="toggleTechWord('server', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Client</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§ײ°׳ײ·׳™ײ¶׳ ײ°׳˜ | ׳×׳¨׳’׳•׳: ׳׳§׳•׳— / ׳¦׳“ ׳׳§׳•׳—</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳“׳₪׳“׳₪׳ ׳׳• ׳”׳׳₪׳׳™׳§׳¦׳™׳” ׳‘׳˜׳׳₪׳•׳ ׳©׳׳‘׳§׳©׳× ׳׳™׳“׳¢ ׳׳”׳©׳¨׳×. '׳”׳¡׳•׳¢׳“ ׳‘׳׳¡׳¢׳“׳”'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-client" onchange="toggleTechWord('client', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Request</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¨ײ´׳™׳§ײ°׳•ײ¶׳•׳¡ײ°׳˜ (req) | ׳×׳¨׳’׳•׳: ׳‘׳§׳©׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳”׳•׳“׳¢׳” ׳©׳”׳׳§׳•׳— ׳©׳•׳׳— ׳׳©׳¨׳×. ׳›׳•׳׳׳× ׳׳× ׳׳” ׳©׳”׳•׳ ׳¨׳•׳¦׳” (Body, URL, Headers).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-request" onchange="toggleTechWord('request', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Response</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¨ײ´׳™׳¡ײ°׳₪ײ¼׳•ײ¹׳ ײ°׳¡ (res) | ׳×׳¨׳’׳•׳: ׳×׳©׳•׳‘׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳×׳©׳•׳‘׳” ׳©׳”׳©׳¨׳× ׳׳—׳–׳™׳¨ ׳׳׳§׳•׳—. (׳‘׳“׳¨׳ ׳›׳׳ JSON ׳׳• HTML).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-response" onchange="toggleTechWord('response', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Header</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳”ײ¶׳“ײ¶׳¨ | ׳×׳¨׳’׳•׳: ׳›׳•׳×׳¨׳× ׳”׳‘׳§׳©׳”/׳×׳©׳•׳‘׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳™׳“׳¢ ׳˜׳›׳ ׳™ ׳ ׳¡׳×׳¨ ׳©׳׳¦׳•׳¨׳£ ׳׳׳¢׳˜׳₪׳” (׳›׳׳• '׳”׳×׳•׳›׳ ׳₪׳” ׳”׳•׳ ׳׳˜׳™׳₪׳•׳¡ JSON' ׳׳• '׳׳™׳–׳” ׳“׳₪׳“׳₪׳ ׳׳ ׳™').</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-header" onchange="toggleTechWord('header', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Method (HTTP)</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ¶׳×ײ¼׳•ײ¹׳“ | ׳×׳¨׳’׳•׳: ׳©׳™׳˜׳× ׳”׳₪׳¢׳•׳׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳₪׳•׳¢׳ ׳©׳׳•׳׳¨ ׳׳©׳¨׳× ׳׳” ׳׳¢׳©׳•׳×: ׳׳§׳‘׳, ׳׳׳—׳•׳§, ׳׳©׳ ׳•׳×... (GET, POST ׳•׳›׳•').</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-method_(http)" onchange="toggleTechWord('method_(http)', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">GET</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳’ײ¶׳˜ | ׳×׳¨׳’׳•׳: ׳”׳‘׳ ׳׳™׳“׳¢</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳‘׳§׳©׳” ׳׳”׳©׳¨׳× ׳׳§׳‘׳ ׳ ׳×׳•׳ ׳™׳ ׳‘׳׳™ ׳׳©׳ ׳•׳× ׳›׳׳•׳ ׳‘׳׳׳’׳¨ (׳›׳׳• ׳׳”׳¡׳×׳›׳ ׳¢׳ ׳×׳₪׳¨׳™׳˜).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-get" onchange="toggleTechWord('get', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">POST</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײ¼׳•ײ¹׳¡ײ°׳˜ | ׳×׳¨׳’׳•׳: ׳¦׳•׳¨ ׳—׳“׳©</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳‘׳§׳©׳” ׳׳”׳©׳¨׳× ׳׳™׳¦׳•׳¨ ׳׳©׳”׳• ׳—׳“׳© (׳›׳׳• ׳׳”׳•׳¡׳™׳£ ׳׳©׳×׳׳© ׳׳• ׳׳‘׳¦׳¢ ׳”׳–׳׳ ׳”). ׳׳’׳™׳¢ ׳¢׳ Body.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-post" onchange="toggleTechWord('post', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">PUT</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײ¼׳•ײ¼׳˜ | ׳×׳¨׳’׳•׳: ׳¢׳“׳›׳ / ׳“׳¨׳•׳¡</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳‘׳§׳©׳” ׳׳”׳©׳¨׳× ׳׳¢׳“׳›׳ ׳׳™׳“׳¢ ׳§׳™׳™׳ ׳׳—׳׳•׳˜׳™׳. (׳׳“׳¨׳•׳¡ ׳₪׳¨׳™׳˜).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-put" onchange="toggleTechWord('put', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">DELETE</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳“ײ´׳™׳ײ´׳™׳˜ | ׳×׳¨׳’׳•׳: ׳׳—׳§</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳‘׳§׳©׳” ׳׳”׳©׳¨׳× ׳׳׳—׳•׳§ ׳׳©׳”׳•.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-delete" onchange="toggleTechWord('delete', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">URL</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳™׳•ײ¼ ׳ײ¸׳¨ ׳ײ¶׳ | ׳×׳¨׳’׳•׳: ׳›׳×׳•׳‘׳× ׳¨׳©׳×</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳›׳×׳•׳‘׳× ׳”׳׳׳׳” ׳©׳׳׳™׳” ׳׳ ׳—׳ ׳• ׳₪׳•׳ ׳™׳ (׳›׳׳• ׳”׳›׳×׳•׳‘׳× ׳©׳ ׳”׳׳¡׳¢׳“׳”).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-url" onchange="toggleTechWord('url', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Endpoint</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ¶׳ ײ°׳“ײ¾׳₪ײ¼׳•ײ¹׳™ײ°׳ ײ°׳˜ | ׳×׳¨׳’׳•׳: ׳ ׳§׳•׳“׳× ׳§׳¦׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳ ׳×׳™׳‘ ׳¡׳₪׳¦׳™׳₪׳™ ׳‘׳©׳¨׳× ׳©׳¢׳•׳©׳” ׳₪׳¢׳•׳׳” ׳׳¡׳•׳™׳׳×. ׳׳׳©׳ '/users/login'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-endpoint" onchange="toggleTechWord('endpoint', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Port</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײ¼׳•ײ¹׳¨ײ°׳˜ | ׳×׳¨׳’׳•׳: ׳©׳¢׳¨ / ׳₪׳•׳¨׳˜</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳¡׳₪׳¨ '׳”׳“׳׳×' ׳‘׳©׳¨׳× ׳©׳׳׳ ׳” ׳׳ ׳—׳ ׳• ׳ ׳›׳ ׳¡׳™׳ (׳׳׳©׳, ׳©׳¨׳× ׳¨׳¥ ׳‘׳“׳¨׳ ׳›׳׳ ׳¢׳ ׳“׳׳×/׳₪׳•׳¨׳˜ 3000).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-port" onchange="toggleTechWord('port', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">JSON</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳’ײ¶'׳™ײ°׳™׳¡׳•ײ¹׳ | ׳×׳¨׳’׳•׳: ׳©׳₪׳× ׳ ׳×׳•׳ ׳™׳ - ׳’'׳™׳™׳¡׳•׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳₪׳•׳¨׳׳˜ ׳”׳ ׳×׳•׳ ׳™׳ ׳”׳׳§׳•׳‘׳ ׳‘׳™׳•׳×׳¨ ׳‘׳׳™׳ ׳˜׳¨׳ ׳˜. ׳ ׳¨׳׳” ׳׳׳© ׳›׳׳• ׳׳•׳‘׳™׳™׳§׳˜ JS ׳¨׳§ ׳©׳›׳ ׳”׳׳₪׳×׳—׳•׳× ׳‘׳×׳•׳ ׳׳™׳¨׳›׳׳•׳× ׳›׳₪׳•׳׳•׳×.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-json" onchange="toggleTechWord('json', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">DOM</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳“׳•ײ¹׳ | ׳×׳¨׳’׳•׳: ׳׳‘׳ ׳” ׳”׳“׳£</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳׳‘׳ ׳” ׳©׳ ׳”-HTML ׳›׳₪׳™ ׳©׳”׳“׳₪׳“׳₪׳ ׳•-JS ׳¨׳•׳׳™׳ ׳׳•׳×׳•. (׳¢׳¥ ׳©׳ ׳׳׳׳ ׳˜׳™׳).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-dom" onchange="toggleTechWord('dom', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Node.js</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ ׳•ײ¹׳“.׳’ײ¶'׳™ײ°׳™.׳ײ¶׳¡ | ׳×׳¨׳’׳•׳: ׳¡׳‘׳™׳‘׳× ׳”׳”׳¨׳¦׳” ׳ ׳•׳“</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳×׳•׳›׳ ׳” ׳©׳׳׳₪׳©׳¨׳× ׳׳ ׳• ׳׳”׳¨׳™׳¥ JS ׳¢׳ ׳”׳׳—׳©׳‘ ׳׳• ׳”׳©׳¨׳× ׳©׳׳ ׳•, ׳•׳׳ ׳¨׳§ ׳‘׳×׳•׳ ׳”׳“׳₪׳“׳₪׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-node.js" onchange="toggleTechWord('node.js', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">NPM</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ¶׳ ׳₪ײ´ײ¼׳™ ׳ײ¶׳ | ׳×׳¨׳’׳•׳: ׳׳ ׳”׳ ׳”׳—׳‘׳™׳׳•׳×</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳—׳ ׳•׳× ׳”׳—׳™׳ ׳׳™׳× ׳©׳ ׳§׳•׳“! ׳׳§׳•׳ ׳©׳׳׳ ׳• ׳׳ ׳—׳ ׳• ׳׳•׳¨׳™׳“׳™׳ ׳¡׳₪׳¨׳™׳•׳× ׳§׳•׳“ ׳©׳ ׳׳ ׳©׳™׳ ׳׳—׳¨׳™׳ ׳׳׳—׳©׳‘ ׳©׳׳ ׳•.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-npm" onchange="toggleTechWord('npm', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Package</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײ¶ײ¼׳§ײ¶׳’' | ׳×׳¨׳’׳•׳: ׳—׳‘׳™׳׳× ׳§׳•׳“</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳¡׳₪׳¨׳™׳™׳× ׳§׳•׳“ ׳©׳׳™׳©׳”׳• ׳›׳×׳‘ ׳•׳׳ ׳—׳ ׳• ׳׳•׳¨׳™׳“׳™׳. (׳׳׳©׳ axios, express).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-package" onchange="toggleTechWord('package', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>
    </div>
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">׳׳§׳¡׳₪׳¨׳¡ ׳•׳¦׳“ ׳©׳¨׳× (Express & Backend)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Express</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ¶׳§ײ°׳¡ײ°׳₪ײ°ײ¼׳¨ײ¶׳¡ | ׳×׳¨׳’׳•׳: ׳¡׳₪׳¨׳™׳™׳× ׳׳§׳¡׳₪׳¨׳¡</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳¡׳₪׳¨׳™׳™׳” ׳”׳₪׳•׳₪׳•׳׳¨׳™׳× ׳‘׳™׳•׳×׳¨ ׳‘-Node.js ׳׳”׳§׳׳× ׳©׳¨׳×. ׳§׳׳” ׳•׳₪׳©׳•׳˜׳” ׳›׳׳• ׳׳’׳•.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-express" onchange="toggleTechWord('express', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Route</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¨ײ·׳׳•ײ¼׳˜ | ׳×׳¨׳’׳•׳: ׳ ׳×׳™׳‘ (׳”׳׳׳¦׳¨)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳¡׳׳•׳ ׳©׳׳•׳’׳“׳¨ ׳‘׳©׳¨׳× ׳©׳׳•׳׳¨: '׳׳ ׳׳§׳•׳— ׳׳‘׳§׳© ׳׳× ׳”׳›׳×׳•׳‘׳× ׳”׳–׳•, ׳×׳¢׳©׳” ׳׳× ׳”׳₪׳¢׳•׳׳” ׳”׳–׳•'.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-route" onchange="toggleTechWord('route', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Router</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¨ײ·׳׳•ײ¼׳˜ײ¶׳¨ | ׳×׳¨׳’׳•׳: ׳¨׳׳•׳˜׳¨ / ׳ ׳×׳‘</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳›׳׳™ ׳‘׳׳§׳¡׳₪׳¨׳¡ ׳©׳׳׳₪׳©׳¨ ׳׳ ׳• ׳׳₪׳¦׳ ׳׳× ׳”׳¨׳׳•׳˜׳™׳ ׳׳§׳‘׳¦׳™׳ ׳©׳•׳ ׳™׳ ׳›׳“׳™ ׳©׳”׳§׳•׳“ ׳™׳”׳™׳” ׳׳¡׳•׳“׳¨ (׳׳—׳¨׳׳™ ׳׳©׳׳¨׳× ׳׳׳׳¦׳¨׳™׳).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-router" onchange="toggleTechWord('router', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Middleware</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ´׳™׳“ײ¶׳ײ¾׳•׳•ײ¶׳¨ | ׳×׳¨׳’׳•׳: ׳©׳•׳׳¨ ׳”׳¡׳£ / ׳×׳•׳•׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳₪׳•׳ ׳§׳¦׳™׳” ׳©׳™׳•׳©׳‘׳× *׳‘׳׳׳¦׳¢* (׳‘׳™׳ ׳”׳׳§׳•׳— ׳׳׳׳¦׳¨). ׳”׳™׳ ׳™׳›׳•׳׳” ׳׳‘׳“׳•׳§, ׳׳©׳ ׳•׳×, ׳׳• ׳׳—׳¡׳•׳ ׳‘׳§׳©׳•׳× ׳׳₪׳ ׳™ ׳©׳”׳ ׳׳’׳™׳¢׳•׳× ׳׳™׳¢׳“.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-middleware" onchange="toggleTechWord('middleware', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Params</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײ¸ײ¼׳¨ײ¸׳׳ײ°׳– (req.params) | ׳×׳¨׳’׳•׳: ׳₪׳¨׳׳˜׳¨׳™׳ ׳‘׳ ׳×׳™׳‘</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳©׳×׳ ׳™׳ ׳©׳׳•׳¢׳‘׳¨׳™׳ ׳׳׳© ׳‘׳×׳•׳ ׳›׳×׳•׳‘׳× ׳”-URL ׳¢׳¦׳׳” (׳׳׳©׳ ׳׳¡׳₪׳¨ ׳–׳”׳•׳× ׳‘׳×׳•׳ /users/1).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-params" onchange="toggleTechWord('params', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Query</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§ײ°׳•׳•ײ¶׳¨ײ´׳™ (req.query) | ׳×׳¨׳’׳•׳: ׳©׳•׳¨׳× ׳”׳—׳™׳₪׳•׳© ׳‘׳ ׳×׳™׳‘</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳₪׳¨׳׳˜׳¨׳™׳ ׳׳•׳₪׳¦׳™׳•׳ ׳׳™׳™׳ ׳׳—׳™׳₪׳•׳© ׳•׳¡׳™׳ ׳•׳ ׳©׳ ׳›׳×׳‘׳™׳ ׳׳—׳¨׳™ ׳¡׳™׳׳ ׳©׳׳׳”.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-query" onchange="toggleTechWord('query', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Body</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳‘ײ¼׳•ײ¹׳“ײ´׳™ (req.body) | ׳×׳¨׳’׳•׳: ׳’׳•׳£ ׳”׳‘׳§׳©׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳×׳•׳›׳ (׳”׳׳¢׳˜׳₪׳” ׳”׳¡׳’׳•׳¨׳”) ׳©׳”׳׳§׳•׳— ׳©׳•׳׳— ׳׳©׳¨׳× ׳‘׳‘׳§׳©׳•׳× POST ׳׳• PUT.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-body" onchange="toggleTechWord('body', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Next</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ ײ¶׳§ײ°׳¡ײ°׳˜ | ׳×׳¨׳’׳•׳: ׳”׳‘׳ ׳‘׳×׳•׳¨!</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳₪׳§׳•׳“׳” ׳©׳›׳ Middleware ׳—׳™׳™׳‘ ׳׳”׳₪׳¢׳™׳ ׳›׳“׳™ ׳׳”׳¢׳‘׳™׳¨ ׳׳× ׳”׳‘׳§׳©׳” ׳׳©׳•׳׳¨/׳׳׳׳¦׳¨ ׳”׳‘׳. ׳‘׳׳¢׳“׳™׳” ׳”׳׳§׳•׳— ׳ ׳×׳§׳¢.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-next" onchange="toggleTechWord('next', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Error Handling</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ¶׳¨׳•ײ¹׳¨ ׳”ײ¶׳ ײ°׳“ײ°׳ײ´׳™׳ ײ°׳’ | ׳×׳¨׳’׳•׳: ׳˜׳™׳₪׳•׳ ׳‘׳©׳’׳™׳׳•׳×</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> Middleware ׳׳™׳•׳—׳“ ׳‘׳¡׳•׳£ ׳”׳§׳•׳‘׳¥ ׳¢׳ 4 ׳₪׳¨׳׳˜׳¨׳™׳ ׳©׳×׳•׳₪׳¡ ׳©׳’׳™׳׳•׳× ׳¨׳¢׳•׳× ׳›׳“׳™ ׳©׳”׳©׳¨׳× ׳׳ ׳™׳§׳¨׳•׳¡ ׳•׳™׳›׳‘׳”.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-error_handling" onchange="toggleTechWord('error_handling', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Status Code</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¡ײ°׳˜ײ¸׳˜׳•ײ¼׳¡ ׳§׳•ײ¹׳“ | ׳×׳¨׳’׳•׳: ׳§׳•׳“ ׳×׳©׳•׳‘׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳¡׳₪׳¨ ׳§׳¦׳¨ ׳©׳”׳©׳¨׳× ׳׳—׳–׳™׳¨. 200 = ׳”׳›׳ ׳˜׳•׳‘, 400 = ׳”׳׳§׳•׳— ׳©׳’׳”, 404 = ׳׳ ׳ ׳׳¦׳, 500 = ׳”׳©׳¨׳× ׳ ׳₪׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-status_code" onchange="toggleTechWord('status_code', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">API</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײµ׳™ײ°׳™ ׳₪ײ´ײ¼׳™ ׳ײ·׳™׳™ | ׳×׳¨׳’׳•׳: ׳׳׳©׳§ ׳”׳×׳׳׳©׳§׳•׳×</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳“׳¨׳ (׳”׳×׳₪׳¨׳™׳˜) ׳©׳‘׳׳׳¦׳¢׳•׳×׳” ׳”׳׳§׳•׳— ׳•׳”׳©׳¨׳× ׳׳“׳‘׳¨׳™׳ ׳‘׳™׳ ׳™׳”׳ ׳•׳׳—׳׳™׳₪׳™׳ ׳ ׳×׳•׳ ׳™׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-api" onchange="toggleTechWord('api', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">REST</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳¨ײ¶׳¡ײ°׳˜ | ׳×׳¨׳’׳•׳: ׳×׳§׳ API</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳¦׳•׳¨׳× ׳‘׳ ׳™׳™׳” ׳׳•׳¡׳›׳׳× ׳-API. (׳׳׳©׳, ׳©׳׳©׳×׳׳©׳™׳ ׳‘-GET ׳׳”׳‘׳™׳ ׳ ׳×׳•׳ ׳™׳ ׳•׳‘-POST ׳׳™׳¦׳•׳¨ ׳—׳“׳©).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-rest" onchange="toggleTechWord('rest', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">CRUD</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§ײ°׳¨ײ·׳׳“ | ׳×׳¨׳’׳•׳: 4 ׳₪׳¢׳•׳׳•׳× ׳”׳‘׳¡׳™׳¡</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳¨׳׳©׳™ ׳×׳™׳‘׳•׳× ׳©׳ Create, Read, Update, Delete. ׳”׳₪׳¢׳•׳׳•׳× ׳”׳‘׳¡׳™׳¡׳™׳•׳× ׳‘׳›׳ ׳׳¢׳¨׳›׳× ׳ ׳×׳•׳ ׳™׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-crud" onchange="toggleTechWord('crud', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
     </div>
    </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Vanilla HTTP</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳•ײ¸׳ ײ´׳™׳ײ¸׳” HTTP | ׳×׳¨׳’׳•׳: ׳©׳¨׳× ׳˜׳”׳•׳¨ ׳׳׳ ׳¡׳₪׳¨׳™׳•׳×</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳‘׳ ׳™׳™׳× ׳©׳¨׳× ׳‘׳׳׳¦׳¢׳•׳× ׳׳•׳“׳•׳ ׳”-<code>http</code> ׳”׳׳•׳‘׳ ׳” ׳‘׳׳‘׳“, ׳׳׳ Express ׳׳• ׳¡׳₪׳¨׳™׳•׳× ׳¢׳–׳¨. ׳›׳׳• ׳׳‘׳ ׳•׳× ׳₪׳™׳¦׳” ׳׳׳₪׳¡ ׳‘׳׳™ ׳×׳‘׳ ׳™׳× ׳׳•׳›׳ ׳”.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-vanilla_http" onchange="toggleTechWord('vanilla_http', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Environment Variable (dotenv)</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ¶׳ ײ°׳•ײ·׳™ײ°׳¨׳•ײ¹׳ ײ°׳ײ¶׳ ײ°׳˜ ׳•ײ¶׳¨ײ°׳™ײ¸׳׳‘ײ°ײ¼׳ | ׳×׳¨׳’׳•׳: ׳׳©׳×׳ ׳” ׳¡׳‘׳™׳‘׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳™׳“׳¢ ׳¨׳’׳™׳© (׳¡׳™׳¡׳׳׳•׳×, ׳׳₪׳×׳—׳•׳×) ׳©׳ ׳©׳׳¨ ׳‘׳§׳•׳‘׳¥ <code>.env</code> ׳•׳ ׳§׳¨׳ ׳“׳¨׳ <code>process.env</code>. ׳›׳׳• ׳›׳¡׳₪׳× ׳¡׳•׳“׳™׳× ׳©׳¨׳§ ׳”׳¦׳•׳•׳× ׳™׳•׳“׳¢ ׳׳× ׳”׳§׳•׳“ ׳©׳׳”.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-env_var" onchange="toggleTechWord('env_var', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">CORS</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•ײ¹׳¨ײ°׳– | ׳×׳¨׳’׳•׳: ׳©׳™׳×׳•׳£ ׳׳©׳׳‘׳™׳ ׳‘׳™׳ ׳׳§׳•׳¨׳•׳×</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> Cross-Origin Resource Sharing. ׳׳ ׳’׳ ׳•׳ ׳׳‘׳˜׳—׳” ׳©׳”׳“׳₪׳“׳₪׳ ׳׳₪׳¢׳™׳ ׳›׳“׳™ ׳׳׳ ׳•׳¢ ׳׳׳×׳¨ ׳–׳¨ ׳׳’׳©׳× ׳׳©׳¨׳× ׳©׳׳. ׳›׳׳• ׳©׳›׳ ׳©׳“׳•׳¨׳© ׳׳™׳©׳•׳¨ ׳›׳“׳™ ׳׳”׳™׳›׳ ׳¡ ׳׳—׳¦׳¨ ׳©׳׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-cors" onchange="toggleTechWord('cors', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Payload</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײµײ¼׳™ײ°׳׳•ײ¹׳ײ·׳“ | ׳×׳¨׳’׳•׳: ׳׳˜׳¢׳ / ׳×׳•׳›׳ ׳©׳™׳׳•׳©׳™</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳׳™׳“׳¢ ׳”׳׳׳™׳×׳™ ׳©׳ ׳©׳׳— ׳‘׳‘׳§׳©׳” ׳׳• ׳‘׳×׳©׳•׳‘׳” ג€” ׳‘׳ ׳™׳’׳•׳“ ׳-Headers ׳©׳”׳ ׳¨׳§ ׳׳˜׳-׳“׳׳˜׳”. ׳›׳׳• ׳”׳×׳•׳›׳ ׳©׳‘׳×׳•׳ ׳—׳‘׳™׳׳× ׳“׳•׳׳¨ (׳׳ ׳”׳׳¢׳˜׳₪׳” ׳¢׳¦׳׳”).</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-payload" onchange="toggleTechWord('payload', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

    </div>
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">׳׳•׳©׳’׳™ ׳“׳•׳§׳¨ (Docker Basics)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳ײ´׳™׳ײ¶׳’' | ׳×׳¨׳’׳•׳: ׳×׳׳•׳ ׳× ׳׳¦׳‘ / ׳©׳¨׳˜׳•׳˜</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳×׳‘׳ ׳™׳× ׳¡׳’׳•׳¨׳” ׳”׳׳›׳™׳׳” ׳§׳•׳“, ׳¡׳₪׳¨׳™׳•׳× ׳•׳”׳’׳“׳¨׳•׳× ׳©׳ ׳“׳¨׳©׳•׳× ׳׳”׳₪׳¢׳׳× ׳”׳×׳•׳›׳ ׳”. ׳׳™ ׳׳₪׳©׳¨ ׳׳©׳ ׳•׳× ׳׳•׳×׳” ׳׳—׳¨׳™ ׳©׳ ׳•׳¦׳¨׳”, ׳›׳׳• ׳©׳¨׳˜׳•׳˜ ׳©׳ ׳‘׳™׳×.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-image" onchange="toggleTechWord('image', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•ײ¹׳ ײ°׳˜ײµ׳™ײ°׳™׳ ײ¶׳¨ | ׳×׳¨׳’׳•׳: ׳׳›׳•׳׳” (׳¡׳‘׳™׳‘׳× ׳¨׳™׳¦׳”)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳–׳” ׳׳” ׳©׳§׳•׳¨׳” ׳›׳©׳׳₪׳¢׳™׳׳™׳ ׳׳× ׳”-Image. ׳¡׳‘׳™׳‘׳” ׳׳‘׳•׳“׳“׳× ׳©׳‘׳” ׳”׳×׳•׳›׳ ׳” ׳‘׳׳׳× ׳¨׳¦׳”. ׳›׳׳• ׳”׳‘׳™׳× ׳©׳ ׳‘׳ ׳” ׳׳”׳©׳¨׳˜׳•׳˜!</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-container" onchange="toggleTechWord('container', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳“ײ´׳™׳׳•ײ¹׳ | ׳×׳¨׳’׳•׳: ׳©׳“׳•׳ ׳¨׳§׳¢ / ׳׳ ׳•׳¢ ׳“׳•׳§׳¨</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳©׳™׳¨׳•׳× ׳©׳ ׳“׳•׳§׳¨ ׳©׳¨׳¥ ׳‘׳¨׳§׳¢ ׳‘׳׳—׳©׳‘ ׳”׳׳׳¨׳— ׳•׳׳ ׳”׳ ׳׳× ׳™׳¦׳™׳¨׳× ׳”׳׳›׳•׳׳•׳×, ׳”׳×׳׳•׳ ׳•׳× ׳•׳”׳¨׳©׳×׳•׳×. ׳”׳•׳ "׳”׳׳•׳—" ׳׳׳—׳•׳¨׳™ ׳”׳§׳׳¢׳™׳.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-daemon" onchange="toggleTechWord('daemon', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Port Mapping</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳₪ײ¼׳•ײ¹׳¨ײ°׳˜ ׳ײµ׳₪ײ¼ײ´׳™׳ ײ°׳’ | ׳×׳¨׳’׳•׳: ׳׳™׳₪׳•׳™ ׳₪׳•׳¨׳˜׳™׳ / ׳“׳׳×׳•׳×</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳“׳¨׳ ׳©׳‘׳” ׳׳ ׳—׳ ׳• ׳׳—׳‘׳¨׳™׳ ׳‘׳™׳ ׳”׳“׳׳× ׳©׳ ׳”׳׳—׳©׳‘ ׳©׳׳ ׳• (׳׳׳©׳ ׳₪׳•׳¨׳˜ 8080) ׳׳“׳׳× ׳”׳₪׳ ׳™׳׳™׳× ׳©׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨ (׳׳׳©׳ ׳₪׳•׳¨׳˜ 80), ׳›׳“׳™ ׳©׳”׳¢׳•׳׳ ׳™׳•׳›׳ ׳׳’׳©׳× ׳׳×׳•׳›׳ ׳”.</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-port_mapping" onchange="toggleTechWord('port_mapping', this.checked)" style="transform: scale(1.3); cursor: pointer;">
        ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
       </label>
      </div>
     </div>

     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳‘ײ¼ײ·׳™׳™׳ ײ°׳“ ׳ײ·׳׳•ײ¼׳ ײ°א₪ | ׳×׳¨׳’׳•׳: ׳—׳™׳‘׳•׳¨ ׳×׳™׳§׳™׳•׳×</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳—׳™׳‘׳•׳¨ ׳×׳™׳§׳™׳™׳” ׳‘׳׳—׳©׳‘ ׳©׳׳ ׳• ׳™׳©׳™׳¨׳•׳× ׳׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨. ׳©׳™׳׳•׳©׳™ ׳׳׳₪׳×׳—׳™׳ ׳©׳¨׳•׳¦׳™׳ ׳©׳›׳ ׳©׳׳™׳¨׳× ׳§׳•׳“ ׳‘׳׳—׳©׳‘ ׳×׳×׳¢׳“׳›׳ ׳׳™׳“ ׳’׳ ׳‘׳×׳•׳ ׳”׳׳›׳•׳׳”, ׳׳‘׳׳™ ׳׳‘׳ ׳•׳× Image ׳׳—׳“׳©!</p>
      <div class="tech-checkbox" style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
       <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; color: var(--emerald); font-weight: bold;">
        <input type="checkbox" class="tech-word-cb" id="cb-bind_mount" onchange="toggleTechWord('bind_mount', this.checked)" style="transform: scale(1.3); cursor: pointer;">
         ׳¡׳™׳׳ ׳×׳™ ׳‘- V (׳”׳‘׳ ׳×׳™!)
        </label>
       </div>
      </div>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">נ³ Docker & Containers (CLI)</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Run (׳”׳₪׳¢׳׳× ׳§׳•׳ ׳˜׳™׳™׳ ׳¨)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker run -d -p 8080:80 --name web nginx</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-d</code> - Detached (׳‘׳¨׳§׳¢)</li>
       <li><code>-p 8080:80</code> - Port Mapping (׳׳׳¨׳—:׳§׳•׳ ׳˜׳™׳™׳ ׳¨)</li>
       <li><code>--name</code> - ׳ ׳×׳™׳ ׳× ׳©׳ ׳§׳¨׳™׳ ׳׳§׳•׳ ׳˜׳™׳™׳ ׳¨</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Build (׳‘׳ ׳™׳™׳× ׳×׳׳•׳ ׳”)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker build -t myapp:v1 .</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-t</code> - ׳ ׳•׳×׳ ׳×׳’׳™׳×/׳©׳ ׳׳׳™׳׳’'</li>
       <li><code>.</code> - ׳”׳ ׳§׳•׳“׳” ׳׳¡׳׳׳× ׳׳× ׳”׳×׳™׳§׳™׳™׳” ׳”׳ ׳•׳›׳—׳™׳×</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Docker Compose (׳”׳₪׳¢׳׳× ׳¡׳‘׳™׳‘׳”)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker-compose up -d</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li>׳§׳•׳¨׳ ׳׳× ׳”׳§׳•׳‘׳¥ <code>docker-compose.yml</code> ׳•׳׳“׳׳™׳§ ׳׳× ׳›׳ ׳”׳©׳¨׳×׳™׳.</li>
       <li><code>down</code> ׳™׳›׳‘׳” ׳•׳™׳׳—׳§ ׳׳× ׳”׳¨׳©׳×.</li>
      </ul>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: var(--bg-card); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">Exec (׳›׳ ׳™׳¡׳” ׳׳§׳•׳ ׳˜׳™׳™׳ ׳¨)</h4>
      <pre style="direction: ltr; text-align: left; background: #111; padding: 10px; border-radius: 5px; color: #fff; font-family: monospace; font-size: 13px; margin-bottom: 10px;"><code class="language-bash">docker exec -it web bash</code></pre>
      <ul style="font-size: 0.9rem; color: var(--ink-main); padding-right: 15px; margin: 0;">
       <li><code>-it</code> - ׳׳™׳ ׳˜׳¨׳׳§׳˜׳™׳‘׳™ (׳׳©׳׳™׳¨ ׳—׳׳•׳ ׳₪׳×׳•׳—)</li>
       <li>׳₪׳•׳×׳— ׳˜׳¨׳׳™׳ ׳ (bash ׳׳• sh) ׳‘׳×׳•׳ ׳§׳•׳ ׳˜׳™׳™׳ ׳¨ ׳—׳™.</li>
      </ul>
     </div>
    </div>
   </div>
`
 }
 , expressKids: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container"><div class="anim-node">׳™׳׳“ ׳¨׳¢׳‘</div><div class="anim-packet move-right" style="background:#ff9800;">׳”׳–׳׳ ׳” ׳׳₪׳¡׳˜׳”</div><div class="anim-node">׳˜׳‘׳— (Express)</div></div>
            `,
            text: "<b>׳©׳¨׳×׳™ Express - ׳”׳׳—׳©׳” ׳׳™׳׳“׳™׳</b><br>Express ׳¢׳•׳‘׳“׳× ׳›׳׳• ׳׳¡׳¢׳“׳”! ׳”׳׳׳¦׳¨ ׳׳•׳§׳— ׳׳× ׳”׳”׳–׳׳ ׳” ׳©׳׳ (׳”׳‘׳§׳©׳”), ׳׳‘׳™׳ ׳׳•׳×׳” ׳׳׳˜׳‘׳— (׳”׳¨׳׳•׳˜׳¨/׳”׳ ׳×׳™׳‘), ׳•׳”׳˜׳‘׳— ׳׳›׳™׳ ׳׳× ׳”׳׳ ׳” ׳•׳׳—׳–׳™׳¨ ׳׳ (׳”׳×׳©׳•׳‘׳”)."
        }
    ],

  title: 'נ‘¶ ׳©׳¨׳× Express - ׳”׳¡׳‘׳¨ ׳׳”׳”׳×׳—׳׳” ׳‘׳©׳₪׳” ׳₪׳©׳•׳˜׳”',
  content: `
   <div class="card-body">
    <p class="lead" style="font-size: 1.1rem; line-height: 1.8;">
    ׳”׳—׳‘׳¨ ׳ ׳×׳ ׳׳ ׳©׳׳“ ׳׳¢׳•׳׳” ׳׳₪׳¨׳•׳™׳§׳˜ ׳—׳ ׳•׳×. ׳׳‘׳ ׳׳™׳ ׳‘׳›׳׳ ׳ ׳™׳’׳©׳™׳ ׳׳׳™׳•? ׳׳™׳ ׳”׳׳—׳©׳‘ ׳—׳•׳©׳‘? <br>
    ׳‘׳•׳׳• ׳ ׳₪׳¨׳§ ׳׳× ׳”׳›׳ ׳׳’׳•׳¨׳׳™׳, ׳›׳׳• ׳©׳׳¡׳‘׳™׳¨׳™׳ ׳׳™׳׳“. ׳‘׳׳™ ׳׳™׳׳™׳ ׳׳₪׳•׳¦׳¦׳•׳×.
    </p>
    
    <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">נ” ׳׳©׳ ׳”׳׳¡׳¢׳“׳” (׳”׳©׳¨׳×)</h3>
    <p>׳×׳“׳׳™׳™׳ ׳©׳©׳¨׳× ׳”׳•׳ <b>׳׳¡׳¢׳“׳”</b>.</p>
    <ul>
     <li><b>׳”׳׳§׳•׳— (Client):</b> ׳–׳” ׳׳×׳”, ׳׳’׳™׳¢ ׳¨׳¢׳‘ ׳׳׳¡׳¢׳“׳” (׳”׳“׳₪׳“׳₪׳ ׳׳• Postman).</li>
     <li><b>׳”׳׳׳¦׳¨ (Router / Route):</b> ׳׳×׳” ׳׳ ׳ ׳›׳ ׳¡ ׳™׳©׳¨ ׳׳׳˜׳‘׳—, ׳ ׳›׳•׳? ׳”׳׳׳¦׳¨ ׳”׳•׳ ׳–׳” ׳©׳׳•׳§׳— ׳׳׳ ׳׳× ׳”׳”׳–׳׳ ׳”. ׳׳ ׳‘׳™׳§׳©׳× ׳¦'׳™׳₪׳¡ (Endpoint: <code>/cart</code>), ׳”׳•׳ ׳”׳•׳׳ ׳׳׳˜׳‘׳— ׳•׳׳•׳׳¨ ׳׳˜׳‘׳— "׳×׳›׳™׳ ׳¦'׳™׳₪׳¡".</li>
     <li><b>׳”׳˜׳‘׳— (Service):</b> ׳”׳׳׳¦׳¨ ׳׳ ׳׳˜׳’׳ ׳‘׳¢׳¦׳׳•. ׳”׳˜׳‘׳— ׳”׳•׳ ׳–׳” ׳©׳ ׳™׳’׳© ׳׳׳§׳¨׳¨ (׳׳•׳§׳— ׳׳× ׳—׳•׳׳¨׳™ ׳”׳’׳׳) ׳•׳׳›׳™׳ ׳׳× ׳”׳׳•׳›׳ ׳‘׳₪׳•׳¢׳.</li>
     <li><b>׳”׳׳§׳¨׳¨ (Database / JSON file):</b> ׳׳™׳₪׳” ׳©׳ ׳׳¦׳ ׳”׳׳•׳›׳ ׳¢׳¦׳׳•.</li>
    </ul>

    <div style="background: rgba(245, 197, 24, 0.05); border-left: 4px solid var(--gold); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
     <h4 style="color: var(--gold);">׳׳׳” ׳”׳—׳‘׳¨ ׳—׳™׳׳§ ׳›׳›׳” ׳׳× ׳”׳§׳‘׳¦׳™׳?</h4>
     <p>
      ׳׳₪׳©׳¨ ׳©׳”׳׳׳¦׳¨ ׳’׳ ׳™׳™׳§׳— ׳”׳–׳׳ ׳”, ׳’׳ ׳™׳˜׳’׳, ׳’׳ ׳™׳׳ ׳׳׳§׳¨׳¨ ׳•׳™׳—׳–׳•׳¨? ׳›׳, ׳׳‘׳ ׳׳– ׳”׳•׳ ׳™׳§׳¨׳•׳¡ ׳׳¢׳•׳׳¡, ׳ ׳›׳•׳? <br>
      ׳׳›׳ <b>׳׳₪׳¨׳™׳“׳™׳ ׳¢׳‘׳•׳“׳”</b>: <br>
      - ׳§׳‘׳¦׳™ ׳”-<code>routes</code> (׳”׳׳׳¦׳¨׳™׳) ׳¨׳§ ׳׳§׳‘׳׳™׳ ׳׳× ׳”׳‘׳§׳©׳” ׳׳”׳׳§׳•׳—: <i>"׳”׳•׳ ׳¨׳•׳¦׳” ׳׳•׳¦׳¨"</i>.<br>
      - ׳”׳ ׳§׳•׳¨׳׳™׳ ׳-<code>services</code> (׳”׳˜׳‘׳—׳™׳): <i>"׳—׳‘׳¨'׳”, ׳׳›׳• ׳׳§׳•׳‘׳¥ JSON ׳•׳×׳‘׳™׳׳• ׳׳× ׳”׳׳•׳¦׳¨"</i>.
     </p>
    </div>

    <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--sky);">נ—ן¸ ׳׳™׳ ׳‘׳•׳ ׳™׳ ׳₪׳¨׳•׳™׳§׳˜ ׳׳׳₪׳¡?</h3>
    
    <ol style="line-height: 1.8;">
     <li>
      <b>׳©׳׳‘ ׳¨׳׳©׳•׳ - ׳׳×׳—׳™׳׳™׳ ׳׳׳₪׳¡:</b> <br>
      ׳₪׳•׳×׳—׳™׳ ׳×׳™׳§׳™׳™׳” ׳¨׳™׳§׳” ׳‘-VSCode, ׳₪׳•׳×׳—׳™׳ ׳׳¡׳•׳£ (Terminal) ׳•׳›׳•׳×׳‘׳™׳: <code>npm init -y</code>.
      <br><em>׳׳” ׳–׳” ׳¢׳©׳”?</em> ׳–׳” ׳™׳¦׳¨ ׳§׳•׳‘׳¥ <code>package.json</code> ׳©׳–׳” ׳›׳׳• "׳×׳¢׳•׳“׳× ׳–׳”׳•׳×" ׳©׳ ׳”׳₪׳¨׳•׳™׳§׳˜ ׳©׳׳. ׳”׳׳—׳©׳‘ ׳›׳•׳×׳‘ ׳©׳ "׳”׳₪׳¨׳•׳™׳§׳˜ ׳”׳–׳” ׳§׳•׳¨׳׳™׳ ׳׳• ׳—׳ ׳•׳×, ׳•׳”׳•׳ ׳׳©׳×׳׳© ׳‘׳¡׳₪׳¨׳™׳™׳× ׳׳§׳¡׳₪׳¨׳¡".
     </li>
     
     <li>
      <b>׳©׳׳‘ ׳©׳ ׳™ - ׳׳‘׳™׳׳™׳ ׳׳× ׳”׳׳’׳• (Express):</b> <br>
      ׳‘׳׳¡׳•׳£ ׳›׳•׳×׳‘׳™׳: <code>npm install express</code>. 
      <br><em>׳׳” ׳–׳” ׳¢׳©׳”?</em> ׳”׳•׳¨׳™׳“ ׳§׳•׳“ ׳׳•׳›׳ ׳׳¨׳׳© ׳©׳™׳—׳¡׳•׳ ׳׳ ׳׳‘׳ ׳•׳× ׳”׳›׳ ׳׳‘׳“. ׳›׳׳• ׳׳§׳ ׳•׳× ׳‘׳¡׳™׳¡ ׳׳₪׳™׳¦׳” ׳‘׳׳§׳•׳ ׳׳׳₪׳•׳× ׳׳‘׳¦׳§.
     </li>

     <li>
      <b>׳©׳׳‘ ׳©׳׳™׳©׳™ - ׳”׳׳ ׳”׳ (index.js):</b> <br>
      ׳™׳•׳¦׳¨׳™׳ ׳§׳•׳‘׳¥ ׳‘׳©׳ <code>index.js</code>. ׳–׳” ׳׳ ׳”׳ ׳”׳׳¡׳¢׳“׳”. ׳”׳•׳ ׳¨׳§ ׳׳₪׳¢׳™׳ ׳׳× ׳”׳׳¡׳¢׳“׳” ׳•׳׳•׳׳¨ ׳׳׳׳¦׳¨׳™׳ ׳׳™׳₪׳” ׳׳¢׳׳•׳“.<br>
      <pre style="margin-top: 8px; font-size: 0.8rem; padding: 10px;"><code>import express from 'express';
const app = express();
app.listen(3000, () => console.log('׳”׳׳¡׳¢׳“׳” ׳₪׳×׳•׳—׳” ׳‘׳₪׳•׳¨׳˜ 3000!'));</code></pre>
     </li>
    </ol>

    <h3 style="border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--emerald);">נ“„ ׳׳‘׳ ׳׳׳” Promises ׳‘׳˜׳‘׳— (file.service)?</h3>
    <p>׳”׳׳¨׳¦׳” ׳©׳׳›׳ (׳‘׳–׳•׳) ׳”׳“׳’׳™׳© ׳ ׳§׳•׳“׳” ׳—׳©׳•׳‘׳”: <b>׳”׳׳§׳¨׳¨ ׳ ׳׳¦׳ ׳‘׳—׳“׳¨ ׳׳—׳¨</b>. ׳›׳©׳”׳˜׳‘׳— ׳”׳•׳׳ ׳׳”׳‘׳™׳ ׳׳©׳”׳• ׳׳”׳׳§׳¨׳¨ (׳§׳•׳¨׳ ׳׳§׳•׳‘׳¥ <code>movies.json</code>), ׳׳•׳§׳— ׳׳• ׳–׳׳! ׳׳ ׳”׳•׳ ׳™׳¢׳¦׳•׳¨ ׳׳× ׳›׳ ׳”׳׳˜׳‘׳— ׳¢׳“ ׳©׳”׳•׳ ׳™׳—׳–׳•׳¨, ׳׳ ׳©׳™׳ ׳™׳¢׳–׳‘׳• ׳׳× ׳”׳׳¡׳¢׳“׳”.</p>
    <p>׳‘׳’׳׳ ׳–׳” ׳§׳¨׳™׳׳” ׳•׳›׳×׳™׳‘׳” ׳©׳ ׳§׳‘׳¦׳™׳ ׳‘-Node.js ׳¢׳•׳©׳™׳ ׳‘׳¢׳–׳¨׳× <b>Promises</b> (׳”׳‘׳˜׳—׳•׳×).</p>
    <pre style="font-size: 0.8rem; padding: 10px;"><code>// ׳©׳™׳˜׳” ׳™׳©׳ ׳” (Callback Hell - ׳”׳׳׳¦׳¨ ׳׳—׳›׳” ׳•׳׳–׳™׳¢)
fs.readFile("movies.json", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// ׳©׳™׳˜׳” ׳—׳“׳©׳” ׳©׳ ׳”׳—׳‘׳¨ ׳©׳׳ - Promise (׳”׳˜׳‘׳— ׳׳•׳׳¨: ׳×׳׳©׳™׳›׳• ׳׳¢׳‘׳•׳“, ׳›׳©׳׳¡׳™׳™׳ ׳׳ ׳™ ׳׳‘׳˜׳™׳— ׳׳”׳—׳–׳™׳¨ ׳×׳©׳•׳‘׳”)
return new Promise((resolve, reject) => {
  fs.readFile("movies.json", (err, data) => {
   if (err) return reject(err); // ׳׳©׳”׳• ׳”׳©׳×׳‘׳©, ׳“׳•׳—׳”!
   resolve(JSON.parse(data)); // ׳”׳¦׳׳—׳×׳™! ׳׳—׳–׳™׳¨ ׳׳™׳“׳¢ ׳׳׳׳¦׳¨
  });
});</code></pre>

    <div style="background: rgba(52, 211, 153, 0.05); border-left: 4px solid var(--emerald); padding: 15px; border-radius: 8px; margin-top: 20px;">
     <h4 style="color: var(--emerald);">נ’¡ ׳˜׳™׳₪ ׳–׳”׳‘ ׳׳”׳׳¨׳¦׳” ׳‘׳–׳•׳:</h4>
     <p>
      ׳׳ ׳×׳›׳×׳•׳‘ ׳׳× ׳›׳ ׳”׳¨׳׳•׳˜׳™׳ ׳׳›׳” ׳׳—׳×! ׳×׳›׳×׳•׳‘ ׳׳׳¦׳¨ ׳׳—׳“ (route ׳׳—׳“). ׳׳׳©׳, ׳¨׳§ ׳׳× ׳”׳׳׳¦׳¨ ׳©׳׳—׳–׳™׳¨ ׳׳× ׳›׳ ׳”׳׳׳׳™ ׳©׳ ׳”׳—׳ ׳•׳× (<code>GET /products</code>).<br>
      ׳₪׳×׳— Postman, ׳×׳‘׳“׳•׳§ ׳©׳”׳•׳ ׳¢׳•׳‘׳“ ׳•׳׳—׳–׳™׳¨ ׳׳ ׳¨׳©׳™׳׳” ׳©׳ ׳׳•׳¦׳¨׳™׳.<br>
      ׳¨׳§ ׳׳—׳¨׳™ ׳©׳”׳•׳ ׳¢׳•׳‘׳“ ׳׳•׳©׳׳ - ׳×׳¢׳‘׳•׳¨ ׳׳׳׳¦׳¨ ׳”׳‘׳!
     </p>
    </div>

   </div>
  `
 }, expressMiddlewaresClassroom: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container">
               <div class="anim-node" style="border-color:#38bdf8;">׳‘׳§׳©׳” ׳ ׳›׳ ׳¡׳×</div>
               <div class="anim-packet move-right" style="color: #11131a; background:#34d399; box-shadow:0 0 15px #34d399;">Request</div>
               <div class="anim-node" style="border-color:#ff0055;">׳©׳•׳׳¨ 1 (Auth)</div>
               <div class="anim-node" style="border-color:#f7df1e;">׳©׳•׳׳¨ 2 (Val)</div>
               <div class="anim-node" style="border-color:#00ff88;">׳”׳׳¡׳¢׳“׳” (Route)</div>
            </div>
            `,
            text: "<b>׳–׳¨׳™׳׳× Middlewares</b><br>׳×׳¡׳×׳›׳ ׳¢׳ ׳—׳‘׳™׳׳× ׳”׳׳™׳“׳¢ ׳”׳™׳¨׳•׳§׳”! ׳”׳™׳ ׳׳ ׳׳’׳™׳¢׳” ׳™׳©׳¨ ׳׳׳¡׳¢׳“׳”. ׳”׳™׳ ׳¢׳•׳‘׳¨׳× ׳§׳•׳“׳ ׳›׳ ׳“׳¨׳ ׳”׳©׳•׳׳¨ ׳”׳¨׳׳©׳•׳ (׳׳׳©׳, ׳‘׳“׳™׳§׳× ׳׳¡׳™׳׳•׳), ׳•׳׳– ׳“׳¨׳ ׳”׳©׳•׳׳¨ ׳”׳©׳ ׳™ (׳‘׳“׳™׳§׳× ׳×׳§׳™׳ ׳•׳× ׳ ׳×׳•׳ ׳™׳), ׳•׳¨׳§ ׳׳ ׳”׳™׳ ׳©׳•׳¨׳“׳× ג€“ ׳”׳™׳ ׳׳’׳™׳¢׳” ׳׳™׳¢׳“."
        }
    ],

  title: 'נ‘¨ג€נ’¼ ׳©׳•׳׳¨׳™ ׳”׳¡׳£ ׳•׳”׳׳ ׳”׳׳™׳ (Middlewares) - ׳׳”׳§׳׳׳¡׳¨׳•׳!',
  content: `
   <div style="direction: rtl; text-align: right; padding: 20px; font-family: 'Rubik', sans-serif; line-height: 1.8; color: #333; background-color: #f9f9f9; border-radius: 10px;">
    <h1 style="color: #2c3e50; text-align: center; font-size: 2.5rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">נ•µן¸ג€ג™‚ן¸ ׳©׳•׳׳¨׳™ ׳”׳¡׳£ ׳©׳ ׳”׳׳¡׳¢׳“׳” (Middlewares)</h1>
    <p style="font-size: 1.3rem;">׳‘׳׳¡׳¢׳“׳” ׳©׳׳ ׳• ׳™׳© ׳׳§׳•׳—׳•׳× (׳‘׳§׳©׳•׳×) ׳©׳׳’׳™׳¢׳™׳ ׳׳©׳•׳׳—׳ (׳”׳¨׳׳•׳˜). ׳׳‘׳ ׳¨׳’׳¢! ׳׳™ ׳׳‘׳¨׳ ׳׳•׳×׳ ׳‘׳›׳ ׳™׳¡׳”? ׳׳™ ׳‘׳•׳“׳§ ׳©׳”׳ ׳׳ ׳׳‘׳™׳׳™׳ ׳׳•׳›׳ ׳׳‘׳—׳•׳¥? ׳›׳׳ ׳ ׳›׳ ׳¡׳™׳ ׳”-<strong>Middlewares</strong> - ׳”׳׳×׳•׳•׳›׳™׳ ׳•׳©׳•׳׳¨׳™ ׳”׳¡׳£!</p>
    
    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #3498db; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #3498db; margin-top: 0;">נ ׳©׳•׳׳¨׳™ ׳¡׳£ ׳’׳׳•׳‘׳׳™׳™׳ (Global Middleware)</h2>
     <p style="font-size: 1.2rem;">׳׳׳• ׳”׳׳׳¨׳—׳™׳ ׳©׳¢׳•׳׳“׳™׳ ׳׳׳© ׳‘׳“׳׳× ׳”׳¨׳׳©׳™׳× ׳•׳₪׳•׳’׳©׳™׳ <strong>׳›׳ ׳׳§׳•׳—</strong> ׳©׳ ׳›׳ ׳¡. (׳×׳¨׳’׳™׳׳™׳ 1, 16, 24, 25 ׳׳”׳§׳׳׳¡׳¨׳•׳):</p>
     <ul style="font-size: 1.2rem;">
      <li><strong>׳©׳¢׳•׳ ׳ ׳•׳›׳—׳•׳× (׳×׳¨׳’׳™׳ 1):</strong> ׳”׳׳׳¨׳— ׳׳“׳‘׳™׳§ ׳׳›׳ ׳׳§׳•׳— ׳׳“׳‘׳§׳” ׳¢׳ ׳©׳¢׳× ׳”׳›׳ ׳™׳¡׳” ׳”׳׳“׳•׳™׳§׳× ׳©׳׳• (׳׳•׳¡׳™׳£ <code>req.requestTime</code>).</li>
      <li><strong>׳׳•׳ ׳” ׳›׳ ׳™׳¡׳•׳× (׳×׳¨׳’׳™׳ 16):</strong> ׳”׳׳׳¨׳— ׳׳—׳–׳™׳§ ׳§׳׳™׳§׳¨ ׳•׳¡׳•׳₪׳¨ "׳׳§׳•׳— 1", "׳׳§׳•׳— 2" - ׳›׳›׳” ׳׳ ׳—׳ ׳• ׳™׳•׳“׳¢׳™׳ ׳›׳׳” ׳‘׳§׳©׳•׳× ׳”׳©׳¨׳× ׳§׳™׳‘׳ ׳”׳™׳•׳.</li>
      <li><strong>׳™׳•׳׳ ׳׳™׳¨׳•׳¢׳™׳ / Logger (׳×׳¨׳’׳™׳ 24, 25):</strong> ׳׳™׳©׳”׳• ׳©׳¨׳•׳©׳ ׳‘׳₪׳ ׳§׳¡ "׳‘׳©׳¢׳” 12:00 ׳׳§׳•׳— ׳ ׳›׳ ׳¡ ׳•׳‘׳™׳§׳© ׳”׳׳‘׳•׳¨׳’׳¨". ׳”׳•׳ ׳¨׳•׳©׳ ׳׳× ׳”-Method (׳›׳׳• GET ׳׳• POST) ׳•׳׳× ׳”-URL. ׳›׳›׳” ׳™׳© ׳׳ ׳• ׳×׳™׳¢׳•׳“ ׳©׳ ׳›׳ ׳׳” ׳©׳§׳¨׳”!</li>
     </ul>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #e67e22; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #e67e22; margin-top: 0;">נ›‘ ׳©׳•׳׳¨׳™ ׳¡׳£ ׳§׳©׳•׳—׳™׳ (Security Middlewares)</h2>
     <p style="font-size: 1.2rem;">׳׳׳• ׳”׳׳׳‘׳˜׳—׳™׳ ׳©׳׳•׳•׳“׳׳™׳ ׳©׳¨׳§ ׳׳™ ׳©׳׳•׳×׳¨ ׳׳• - ׳™׳™׳›׳ ׳¡ ׳₪׳ ׳™׳׳”. (׳×׳¨׳’׳™׳׳™׳ 6, 11, 21, 26 ׳׳”׳§׳׳׳¡׳¨׳•׳):</p>
     <ul style="font-size: 1.2rem;">
      <li><strong>׳”׳’׳ ׳× ׳׳ ׳”׳ (׳×׳¨׳’׳™׳ 6):</strong> ׳׳™׳©׳”׳• ׳׳ ׳¡׳” ׳׳”׳™׳›׳ ׳¡ ׳׳׳˜׳‘׳—? ׳”׳׳׳‘׳˜׳— ׳‘׳•׳“׳§ ׳׳ ׳™׳© ׳׳• ׳×׳’ ׳©׳ ׳׳“׳׳™׳ (<code>admin=true</code>). ׳׳™׳ ׳׳•? ׳¢׳£ ׳”׳—׳•׳¦׳” ׳¢׳ ׳©׳’׳™׳׳” 403 (Forbidden)!</li>
      <li><strong>׳׳™׳׳•׳× ׳׳₪׳×׳— VIP (׳×׳¨׳’׳™׳ 26):</strong> ׳¨׳•׳¦׳” ׳׳”׳™׳›׳ ׳¡ ׳׳—׳“׳¨ ׳”-VIP? ׳׳×׳” ׳—׳™׳™׳‘ ׳׳”׳¨׳׳•׳× ׳׳׳׳‘׳˜׳— ׳›׳¨׳˜׳™׳¡ ׳¡׳•׳“׳™ (<code>x-auth-token: secret123</code>). ׳”׳›׳¨׳˜׳™׳¡ ׳׳–׳•׳™׳£? ׳§׳‘׳ ׳©׳’׳™׳׳” 401 (Unauthorized)!</li>
      <li><strong>׳—׳¡׳™׳׳× ׳‘׳¨׳™׳•׳ ׳™׳ (׳×׳¨׳’׳™׳ 11):</strong> ׳”׳’׳™׳¢ ׳׳§׳•׳— ׳©׳¢׳©׳” ׳׳ ׳• ׳¦׳¨׳•׳× ׳׳×׳׳•׳? ׳”׳׳׳‘׳˜׳— ׳–׳•׳›׳¨ ׳׳× ׳”׳₪׳ ׳™׳ ׳©׳׳• (׳׳× ׳›׳×׳•׳‘׳× ׳”-IP ׳©׳׳•) ׳•׳—׳•׳¡׳ ׳׳•׳×׳• ׳׳™׳“ ׳‘׳›׳ ׳™׳¡׳”.</li>
     </ul>
    </div>
   </div>
  `
 },
 expressValidationsClassroom: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container"><div class="anim-packet move-right" style="background:#ff0055;">{age: -5}</div><div class="anim-node" style="border-color:#f7df1e;">׳©׳•׳׳¨ (Joi)</div><div class="anim-node" style="border-color:#ff0055;">400 Bad Request</div></div>
            `,
            text: "<b>׳•׳׳™׳“׳¦׳™׳•׳× ׳•׳׳™׳׳•׳× ׳ ׳×׳•׳ ׳™׳</b><br>׳׳™ ׳׳₪׳©׳¨ ׳׳¡׳׳•׳ ׳¢׳ ׳”׳׳§׳•׳—! ׳׳₪׳ ׳™ ׳©׳”׳ ׳×׳•׳ ׳™׳ ׳ ׳›׳ ׳¡׳™׳ ׳׳©׳¨׳× ׳©׳׳ ׳•, ׳¡׳₪׳¨׳™׳•׳× ׳›׳׳• Joi (׳”׳©׳•׳׳¨ ׳‘׳¦׳”׳•׳‘) ׳‘׳•׳“׳§׳•׳× ׳׳ ׳”׳ ׳×׳•׳ ׳™׳ ׳—׳•׳§׳™׳™׳. ׳׳ ׳׳ - ׳”׳ ׳–׳•׳¨׳§׳•׳× ׳©׳’׳™׳׳” ׳•׳׳¢׳™׳₪׳•׳× ׳׳× ׳”׳‘׳§׳©׳”."
        }
    ],

  title: 'נ” ׳‘׳“׳™׳§׳•׳× ׳•׳×׳§׳™׳ ׳•׳× ׳ ׳×׳•׳ ׳™׳ (Validations) - ׳׳”׳§׳׳׳¡׳¨׳•׳!',
  content: `
   <div style="direction: rtl; text-align: right; padding: 20px; font-family: 'Rubik', sans-serif; line-height: 1.8; color: #333; background-color: #f9f9f9; border-radius: 10px;">
    <h1 style="color: #9b59b6; text-align: center; font-size: 2.5rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">נ“ ׳‘׳§׳¨׳× ׳”׳׳™׳›׳•׳× ׳©׳ ׳”׳׳˜׳‘׳— (Validations)</h1>
    <p style="font-size: 1.3rem;">׳׳₪׳ ׳™ ׳©׳”׳©׳£ ׳׳×׳—׳™׳ ׳׳‘׳©׳, ׳׳ ׳”׳ ׳”׳׳©׳׳¨׳× ׳‘׳•׳“׳§ ׳׳× ׳”׳₪׳×׳§ (׳”׳‘׳§׳©׳”). ׳”׳׳ ׳”׳›׳×׳‘ ׳§׳¨׳™׳? ׳”׳׳ ׳”׳׳§׳•׳— ׳©׳›׳— ׳׳‘׳—׳•׳¨ ׳×׳•׳¡׳₪׳×? ׳‘׳“׳™׳§׳•׳× ׳׳׳• ׳ ׳§׳¨׳׳•׳× <strong>׳•׳׳™׳“׳¦׳™׳” (Validation)</strong>!</p>
    
    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #2ecc71; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #2ecc71; margin-top: 0;">נ“¦ ׳‘׳“׳™׳§׳•׳× ׳×׳•׳›׳ ׳”׳׳¢׳˜׳₪׳” (Body & JSON)</h2>
     <p style="font-size: 1.2rem;">׳”׳׳§׳•׳— ׳©׳׳— ׳׳¢׳˜׳₪׳” ׳¡׳’׳•׳¨׳” (Body), ׳׳ ׳—׳ ׳• ׳—׳™׳™׳‘׳™׳ ׳׳‘׳“׳•׳§ ׳׳•׳×׳”! (׳×׳¨׳’׳™׳׳™׳ 3, 13, 20 ׳׳”׳§׳׳׳¡׳¨׳•׳):</p>
     <ul style="font-size: 1.2rem;">
      <li><strong>׳׳¢׳˜׳₪׳” ׳¨׳™׳§׳” (׳×׳¨׳’׳™׳ 3):</strong> ׳”׳׳§׳•׳— ׳©׳׳— ׳₪׳×׳§ ׳¨׳™׳§ (<code>req.body</code> ׳¨׳™׳§). ׳”׳׳׳¦׳¨ ׳׳—׳–׳™׳¨ ׳׳• ׳¡׳˜׳˜׳•׳¡ 400: "׳”׳₪׳×׳§ ׳¨׳™׳§ ׳׳™׳©׳™, ׳×׳›׳×׳•׳‘ ׳׳©׳”׳•!".</li>
      <li><strong>׳”׳©׳₪׳” ׳”׳ ׳›׳•׳ ׳” (׳×׳¨׳’׳™׳ 13):</strong> ׳”׳׳¡׳¢׳“׳” ׳׳“׳‘׳¨׳× ׳¨׳§ ׳‘׳©׳₪׳× JSON (<code>content-type: application/json</code>). ׳׳ ׳׳™׳©׳”׳• ׳©׳•׳׳— ׳‘׳¦׳¨׳₪׳×׳™׳×, ׳׳—׳–׳™׳¨׳™׳ ׳©׳’׳™׳׳” 415 (Unsupported Media Type).</li>
      <li><strong>׳׳’׳‘׳׳× ׳’׳•׳“׳ (׳×׳¨׳’׳™׳ 20):</strong> ׳׳™׳©׳”׳• ׳›׳×׳‘ ׳₪׳×׳§ ׳׳¨׳•׳ ׳›׳׳• ׳¡׳₪׳¨? ׳™׳© ׳׳ ׳• ׳׳’׳‘׳׳× ׳׳™׳׳™׳ (׳׳׳©׳ 200 ׳×׳•׳•׳™׳). ׳—׳¨׳’׳×? ׳©׳’׳™׳׳” 413 (Payload too large).</li>
     </ul>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #f1c40f; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #f39c12; margin-top: 0;">נ” ׳‘׳“׳™׳§׳•׳× ׳₪׳¨׳˜׳ ׳™׳•׳× ׳©׳ ׳ ׳×׳•׳ ׳™׳</h2>
     <p style="font-size: 1.2rem;">׳›׳“׳™ ׳©׳”׳”׳¨׳©׳׳” ׳•׳”׳”׳×׳—׳‘׳¨׳•׳× ׳™׳¢׳‘׳“׳•, ׳”׳ ׳×׳•׳ ׳™׳ ׳—׳™׳™׳‘׳™׳ ׳׳”׳™׳•׳× ׳׳“׳•׳™׳§׳™׳! (׳×׳¨׳’׳™׳׳™׳ 5, 12, 14, 17, 30 ׳׳”׳§׳׳׳¡׳¨׳•׳):</p>
     <ul style="font-size: 1.2rem;">
      <li><strong>׳׳™׳׳•׳™ ׳—׳•׳‘׳” (׳×׳¨׳’׳™׳ 12):</strong> ׳׳ ׳¡׳” ׳׳”׳×׳—׳‘׳¨ (Login) ׳‘׳׳™ ׳׳™׳׳™׳™׳ ׳•׳¡׳™׳¡׳׳”? ׳–׳” ׳›׳׳• ׳׳”׳–׳׳™׳ ׳₪׳™׳¦׳” ׳‘׳׳™ ׳₪׳™׳¦׳”! (׳©׳’׳™׳׳” 400).</li>
      <li><strong>׳×׳§׳™׳ ׳•׳× ׳׳™׳׳™׳™׳ (׳×׳¨׳’׳™׳ 30):</strong> ׳‘׳•׳“׳§׳™׳ ׳©׳”׳׳™׳׳™׳™׳ ׳‘׳׳׳× ׳׳›׳™׳ ׳׳× ׳”׳×׳• ׳§׳¨׳•׳›׳™׳× "@". ׳‘׳׳™ ׳–׳”, ׳–׳” ׳¡׳×׳ ׳׳™׳׳” ׳•׳׳ ׳׳™׳׳™׳™׳!</li>
      <li><strong>׳—׳•׳§׳™ ׳¡׳™׳¡׳׳” ׳•׳׳•׳¨׳ ׳׳–׳”׳” (׳×׳¨׳’׳™׳׳™׳ 5, 17):</strong> ׳¡׳™׳¡׳׳” ׳—׳™׳™׳‘׳× ׳׳”׳™׳•׳× ׳׳₪׳—׳•׳× 8 ׳×׳•׳•׳™׳, ׳•׳”׳׳–׳”׳” (ID) ׳—׳™׳™׳‘ ׳׳”׳™׳•׳× ׳‘׳“׳™׳•׳§ 5 ׳×׳•׳•׳™׳! ׳׳—׳¨׳× ׳׳™ ׳׳₪׳©׳¨ ׳׳§׳‘׳ ׳׳•׳×׳.</li>
      <li><strong>׳–׳” ׳׳¡׳₪׳¨ ׳׳• ׳׳•׳×? (׳×׳¨׳’׳™׳׳™׳ 14, 27):</strong> ׳›׳©׳”׳©׳£ ׳׳‘׳§׳© "׳’׳™׳" ׳”׳•׳ ׳—׳™׳™׳‘ ׳©׳–׳” ׳™׳”׳™׳” ׳׳¡׳₪׳¨ ׳’׳“׳•׳ ׳-0. ׳›׳©׳׳‘׳§׳©׳™׳ ׳׳—׳©׳‘ ׳©׳ ׳™ ׳׳¡׳₪׳¨׳™׳ (num1, num2) ׳”׳ ׳—׳™׳™׳‘׳™׳ ׳׳”׳™׳•׳× ׳‘׳׳׳× ׳׳¡׳₪׳¨׳™׳. (׳©׳’׳™׳׳” 400 ׳׳ ׳©׳•׳׳—׳™׳ ׳׳•׳×׳™׳•׳× ׳‘׳׳§׳•׳ ׳׳¡׳₪׳¨׳™׳).</li>
      <li><strong>׳׳™׳׳™׳ ׳׳¡׳•׳¨׳•׳× (׳×׳¨׳’׳™׳ 19):</strong> ׳׳™׳©׳”׳• ׳ ׳™׳¡׳” ׳׳¨׳©׳•׳ ׳׳× ׳”׳׳™׳׳” "spam" ׳‘׳×׳’׳•׳‘׳” ׳©׳׳•? ׳ ׳–׳¨׳•׳§ ׳׳• ׳©׳’׳™׳׳” 400: ׳×׳•׳›׳ ׳׳¡׳•׳¨!</li>
     </ul>
    </div>
   </div>
  `
 },
 expressErrorHandlingClassroom: {
    visualizerSteps: [
        {
            html_visual: `
            <div class="anim-container" style="flex-direction: column; justify-content: space-between; height: 180px;">
               <div class="anim-packet move-circle" style="color: #11131a; position: relative; left: 50%; transform: translateX(-50%); background: #ff0055; width: 50px; height: 30px; box-shadow: 0 0 20px #ff0055; z-index: 5;">׳©׳’׳™׳׳”! נ”¥</div>
               <div class="anim-node" style="width: 100%; border-color: #f7df1e; border-top-style: dashed; padding-top: 20px; text-align: center; margin-top: auto;">׳¨׳©׳× ׳‘׳™׳˜׳—׳•׳ (Error Handler)</div>
            </div>
            `,
            text: "<b>׳˜׳™׳₪׳•׳ ׳‘׳©׳’׳™׳׳•׳× (Error Handling)</b><br>׳›׳©׳”׳§׳•׳“ ׳§׳•׳¨׳¡, ׳׳ ׳—׳ ׳• ׳׳ ׳¨׳•׳¦׳™׳ ׳©׳”׳׳₪׳׳™׳§׳¦׳™׳” ׳×׳™׳₪׳•׳ ׳•׳×׳›׳‘׳”! ׳‘׳׳§׳•׳ ׳–׳”, ׳׳ ׳—׳ ׳• ׳₪׳•׳¨׳¡׳™׳ '׳¨׳©׳× ׳‘׳™׳˜׳—׳•׳' (Error Middleware) ׳©׳×׳•׳₪׳¡׳× ׳׳× ׳”׳‘׳¢׳™׳” (׳”׳§׳•׳‘׳™׳™׳” ׳”׳׳“׳•׳׳”), ׳׳“׳•׳•׳—׳× ׳¢׳׳™׳” ׳‘׳¢׳“׳™׳ ׳•׳× ׳׳׳§׳•׳—, ׳•׳׳׳©׳™׳›׳” ׳׳¢׳‘׳•׳“ ׳›׳¨׳’׳™׳."
        }
    ],

  title: 'נ‘ ׳˜׳™׳₪׳•׳ ׳‘׳©׳’׳™׳׳•׳× (Error Handling) - ׳׳”׳§׳׳׳¡׳¨׳•׳!',
  content: `
   <div style="direction: rtl; text-align: right; padding: 20px; font-family: 'Rubik', sans-serif; line-height: 1.8; color: #333; background-color: #f9f9f9; border-radius: 10px;">
    <h1 style="color: #e74c3c; text-align: center; font-size: 2.5rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">נ¨ ׳¦׳•׳•׳× ׳”׳”׳¦׳׳” ׳©׳ ׳”׳׳¡׳¢׳“׳” (Error Handling)</h1>
    <p style="font-size: 1.3rem;">׳׳₪׳¢׳׳™׳ ׳“׳‘׳¨׳™׳ ׳׳©׳×׳‘׳©׳™׳. ׳׳§׳•׳— ׳׳‘׳§׳© ׳׳©׳”׳• ׳©׳׳ ׳§׳™׳™׳, ׳׳• ׳©׳”׳©׳£ ׳׳₪׳™׳ ׳‘׳˜׳¢׳•׳× ׳¡׳™׳¨ ׳׳¨׳§. ׳׳ ׳׳ ׳ ׳˜׳₪׳ ׳‘׳–׳”, ׳›׳ ׳”׳׳¡׳¢׳“׳” ׳×׳™׳©׳¨׳£ (׳”׳©׳¨׳× ׳™׳§׳¨׳•׳¡)! ׳›׳׳ ׳ ׳›׳ ׳¡ ׳¦׳•׳•׳× ׳”׳”׳¦׳׳”. (׳×׳¨׳’׳™׳׳™׳ 8, 9, 22, 23, 28 ׳׳”׳§׳׳׳¡׳¨׳•׳)</p>
    
    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #34495e; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #34495e; margin-top: 0;">ג“ ׳©׳’׳™׳׳× 404 (Route Not Found)</h2>
     <p style="font-size: 1.2rem;">׳×׳¨׳’׳™׳ 28 ׳׳”׳§׳׳׳¡׳¨׳•׳ ׳¢׳•׳¡׳§ ׳‘׳׳§׳•׳— ׳©׳”׳•׳׳ ׳׳׳™׳‘׳•׳“.</p>
     <p style="font-size: 1.2rem;">׳׳” ׳§׳•׳¨׳” ׳›׳©׳׳§׳•׳— ׳ ׳›׳ ׳¡ ׳׳׳¡׳¢׳“׳” ׳•׳׳‘׳§׳© ׳׳©׳‘׳× ׳‘"׳©׳•׳׳—׳ ׳”׳׳¨׳—׳£ ׳¢׳ ׳¢׳ ׳" (׳›׳×׳•׳‘׳× ׳ ׳×׳™׳‘ ׳©׳׳ ׳”׳׳¦׳׳ ׳• ׳׳¢׳•׳׳)? ׳‘׳׳§׳•׳ ׳©׳”׳׳׳¦׳¨ ׳™׳¢׳׳•׳“ ׳׳‘׳•׳׳‘׳, ׳‘׳¡׳•׳£ ׳”׳׳¡׳¢׳“׳” (׳‘׳¡׳•׳£ ׳”׳§׳•׳‘׳¥ ׳©׳׳ ׳•) ׳¢׳•׳׳“ <strong>׳׳×׳•׳•׳ 404</strong> ׳׳™׳•׳—׳“. ׳”׳•׳ ׳׳•׳׳¨ ׳‘׳׳“׳™׳‘׳•׳×: <code>{ "error": "Route not found" }</code> - ׳”׳׳§׳•׳— ׳׳‘׳™׳ ׳©׳”׳©׳•׳׳—׳ ׳׳ ׳§׳™׳™׳ ׳•׳”׳©׳¨׳× ׳׳׳©׳™׳ ׳׳¢׳‘׳•׳“ ׳›׳¨׳’׳™׳!</p>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #c0392b; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #c0392b; margin-top: 0;">נ› ן¸ ׳׳ ׳”׳ ׳”׳׳©׳‘׳¨׳™׳ ׳”׳׳¨׳›׳–׳™ (Global Error Handler)</h2>
     <p style="font-size: 1.2rem;">׳×׳¨׳’׳™׳ 9 ׳•׳×׳¨׳’׳™׳ 29 ׳“׳•׳¨׳©׳™׳ ׳׳׳™׳×׳ ׳• ׳׳”׳’׳“׳™׳¨ ׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳˜׳™׳₪׳•׳ ׳©׳’׳™׳׳•׳× ׳׳™׳•׳—׳“׳×!</p>
     <p style="font-size: 1.2rem;">׳׳™׳ ׳׳–׳”׳™׳ ׳׳× ׳”׳₪׳¨׳׳׳“׳™׳§? ׳™׳© ׳׳• ׳×׳׳™׳“ <strong>4 ׳›׳׳™ ׳¢׳‘׳•׳“׳”</strong> (4 ׳₪׳¨׳׳˜׳¨׳™׳): <code>(err, req, res, next)</code>. ׳”׳•׳ ׳×׳׳™׳“ ׳׳׳•׳§׳ <strong>׳‘׳¡׳•׳£ ׳”׳§׳•׳‘׳¥</strong>. ׳׳ ׳”׳©׳£ ׳”׳׳¦׳™׳ ׳©׳’׳™׳׳” ׳™׳–׳•׳׳” ׳‘׳›׳•׳•׳ ׳” (<code>throw new Error("׳׳©׳”׳• ׳”׳©׳×׳‘׳©")</code> - ׳×׳¨׳’׳™׳ 8), ׳׳• ׳”׳×׳¨׳¡׳§׳” ׳׳• ׳¢׳•׳’׳”, ׳”׳₪׳¨׳׳׳“׳™׳§ ׳׳™׳“ ׳×׳•׳₪׳¡ ׳׳•׳×׳” ׳•׳׳’׳™׳© ׳׳׳§׳•׳— ׳”׳×׳ ׳¦׳׳•׳× ׳׳¡׳•׳“׳¨׳× ׳‘-JSON ׳›׳“׳™ ׳©׳”׳׳§׳•׳— ׳׳ ׳™׳¨׳׳” ׳”׳•׳“׳¢׳× ׳§׳¨׳™׳¡׳” ׳׳₪׳—׳™׳“׳”.</p>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #d35400; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #d35400; margin-top: 0;">נ“ ׳§׳¨׳™׳׳” ׳׳₪׳¨׳׳׳“׳™׳§: next(error) ׳•׳©׳’׳™׳׳•׳× ׳׳•׳×׳׳׳•׳×</h2>
     <ul style="font-size: 1.2rem;">
      <li><strong>׳”׳§׳¨׳™׳׳” ׳‘׳§׳©׳¨ (׳×׳¨׳’׳™׳ 23):</strong> ׳׳ ׳׳׳¦׳¨ ׳‘׳•׳“׳§ ׳׳§׳•׳— (׳׳׳©׳ ׳”׳’׳™׳ ׳©׳׳• ׳§׳˜׳ ׳-18) ׳•׳׳’׳׳” ׳‘׳¢׳™׳”, ׳”׳•׳ ׳׳ ׳™׳›׳•׳ ׳¡׳×׳ ׳׳–׳¨׳•׳§ ׳׳•׳×׳”. ׳”׳•׳ ׳׳©׳×׳׳© ׳‘׳§׳©׳¨ ׳׳§׳¨׳•׳ ׳׳₪׳¨׳׳׳“׳™׳§: ׳”׳•׳ ׳¨׳•׳©׳ <code>next(new Error("Too young"))</code> ׳•׳–׳” ׳׳“׳׳’ ׳™׳©׳¨ ׳׳׳ ׳”׳ ׳”׳׳©׳‘׳¨׳™׳ ׳”׳׳¨׳›׳–׳™!</li>
      <li><strong>׳©׳’׳™׳׳•׳× ׳•׳׳™׳“׳¦׳™׳” (׳×׳¨׳’׳™׳ 22):</strong> ׳”׳₪׳¨׳׳׳“׳™׳§ ׳›׳ ׳›׳ ׳—׳›׳ ׳©׳”׳•׳ ׳™׳›׳•׳ ׳׳”׳¡׳×׳›׳ ׳¢׳ ׳”׳©׳’׳™׳׳” ׳•׳׳¨׳׳•׳× - ׳׳ ׳¡׳•׳’ ׳”׳©׳’׳™׳׳” ׳”׳•׳ "validation" (׳›׳׳•׳׳¨, ׳”׳׳§׳•׳— ׳׳™׳׳ ׳˜׳•׳₪׳¡ ׳׳ ׳˜׳•׳‘), ׳”׳•׳ ׳׳ ׳׳—׳–׳™׳¨ 500 (׳©׳’׳™׳׳× ׳©׳¨׳× ׳₪׳ ׳™׳׳™׳×), ׳׳׳ 422 (׳©׳’׳™׳׳× ׳ ׳×׳•׳ ׳™׳), ׳›׳™ ׳”׳‘׳¢׳™׳” ׳”׳™׳ ׳׳¦׳ ׳”׳׳§׳•׳— ׳•׳׳ ׳‘׳׳˜׳‘׳—!</li>
     </ul>
    </div>
   </div>
  `
 },
 postmanGuide: {

    visualizerSteps: [
        {
            html_visual: `
            <div class="flow-diagram">
               <div class="flow-node active-node">׳׳§׳•׳— (Postman)</div>
               <div class="flow-arrow highlight">׳‘׳§׳©׳× HTTP (GET)<br><span>ג”</span></div>
               <div class="flow-node">׳׳¡׳¢׳“׳” (׳©׳¨׳×)</div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 1: ׳”׳׳§׳•׳— (׳׳×׳”) ׳׳‘׳§׳©</b><br>׳×׳—׳©׳•׳‘ ׳¢׳ ׳¢׳¦׳׳ ׳›׳׳“׳ ׳©׳¨׳¢׳‘ ׳•׳¨׳•׳¦׳” ׳׳”׳–׳׳™׳ ׳₪׳™׳¦׳”. ׳”׳׳§׳•׳— ׳©׳•׳׳— ׳‘׳§׳©׳”. ׳×׳•׳›׳ ׳× ׳”-Postman ׳”׳™׳ ׳‘׳¢׳¦׳ ׳”׳©׳׳™׳— ׳©׳׳ ׳• ג€“ ׳”׳™׳ ׳׳•׳§׳—׳× ׳׳× ׳”׳‘׳§׳©׳” ׳©׳ ׳™׳¡׳—׳ ׳• (׳׳׳©׳, GET) ׳•׳©׳•׳׳—׳× ׳׳•׳×׳” ׳‘׳“׳™׳•׳§ ׳׳›׳×׳•׳‘׳× ׳©׳ ׳”׳©׳¨׳× (URL)."
        },
        {
            html_visual: `
            <div class="flow-diagram">
               <div class="flow-node">׳׳§׳•׳— (Postman)</div>
               <div class="flow-arrow">׳׳׳×׳™׳ ׳׳×׳©׳•׳‘׳”...<br><span>ג”</span></div>
               <div class="flow-node active-node">׳׳¡׳¢׳“׳” (׳©׳¨׳×)<br><small>׳׳¢׳‘׳“ ׳ ׳×׳•׳ ׳™׳</small></div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 2: ׳”׳©׳¨׳× ׳׳§׳‘׳ ׳•׳׳¢׳‘׳“</b><br>׳”׳‘׳§׳©׳” ׳”׳’׳™׳¢׳” ׳׳׳˜׳‘׳— ׳©׳ ׳”׳׳¡׳¢׳“׳” (׳”׳©׳¨׳× ׳©׳׳ ׳•). ׳”׳§׳•׳“ ׳©׳׳ ׳• ׳‘׳©׳¨׳× ׳׳§׳‘׳ ׳׳× ׳”׳‘׳§׳©׳”, ׳‘׳•׳“׳§ ׳׳•׳×׳” (Middlewares), ׳•׳׳—׳₪׳© ׳׳× ׳”׳ ׳×׳•׳ ׳™׳ ׳”׳¨׳׳•׳•׳ ׳˜׳™׳™׳ ׳‘׳׳¡׳“ ׳”׳ ׳×׳•׳ ׳™׳ ׳›׳“׳™ ׳׳”׳›׳™׳ ׳׳× '׳”׳׳ ׳”'."
        },
        {
            html_visual: `
            <div class="flow-diagram">
               <div class="flow-node active-node">׳׳§׳•׳— (Postman)<br><small>׳׳¦׳™׳’ ׳ ׳×׳•׳ ׳™׳</small></div>
               <div class="flow-arrow highlight">׳×׳’׳•׳‘׳× HTTP (200 OK)<br><span>ג†</span></div>
               <div class="flow-node">׳׳¡׳¢׳“׳” (׳©׳¨׳×)</div>
            </div>
            `,
            text: "<b>׳©׳׳‘ 3: ׳”׳×׳©׳•׳‘׳” ׳—׳•׳–׳¨׳× ׳׳׳§׳•׳—</b><br>׳”׳©׳¨׳× ׳¡׳™׳™׳! ׳”׳•׳ ׳׳•׳¨׳– ׳׳× ׳”׳×׳©׳•׳‘׳” (Response) ׳•׳©׳•׳׳— ׳׳•׳×׳” ׳—׳–׳¨׳”. ׳‘-Postman ׳ ׳¨׳׳” ׳׳× ׳”׳—׳‘׳™׳׳” ׳”׳–׳׳× ׳׳•׳₪׳™׳¢׳” ׳‘׳׳¡׳ ׳”׳×׳—׳×׳•׳ ג€“ ׳–׳• ׳™׳›׳•׳׳” ׳׳”׳™׳•׳× ׳¨׳©׳™׳׳× ׳”׳׳©׳×׳׳©׳™׳ ׳©׳‘׳™׳§׳©׳ ׳• ׳׳• ׳§׳•׳“ ׳”׳¦׳׳—׳” (200 OK)."
        }
    ],title: 'נ“­ ׳”׳׳“׳¨׳™׳ ׳”׳©׳׳ ׳-Postman (׳›׳׳™ ׳”׳”׳–׳׳ ׳•׳×)',
  content: `
   <div style="direction: rtl; text-align: right; padding: 20px; font-family: 'Rubik', sans-serif; line-height: 1.8; color: #333; background-color: #f9f9f9; border-radius: 10px;">
    <h1 style="color: #ff6c37; text-align: center; font-size: 2.5rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">נ€ Postman - ׳׳₪׳׳™׳§׳¦׳™׳™׳× ׳”׳׳©׳׳•׳—׳™׳ ׳©׳׳ ׳•</h1>
    <p style="font-size: 1.3rem;">׳׳ ׳”׳©׳¨׳× ׳©׳׳ ׳• ׳”׳•׳ ׳”׳׳¡׳¢׳“׳”, ׳׳™׳ ׳׳§׳•׳— ׳™׳–׳׳™׳ ׳׳•׳›׳ ׳׳ ׳¢׳“׳™׳™׳ ׳׳™׳ ׳׳׳¡׳¢׳“׳” ׳׳×׳¨ ׳׳™׳ ׳˜׳¨׳ ׳˜ (Frontend) ׳׳• ׳׳₪׳׳™׳§׳¦׳™׳”? ׳”׳׳§׳•׳— ׳™׳©׳×׳׳© ׳‘׳˜׳׳₪׳•׳ ׳׳• ׳‘׳׳₪׳׳™׳§׳¦׳™׳™׳× ׳׳©׳׳•׳—׳™׳ ׳›׳׳• Wolt! ׳×׳•׳›׳ ׳× <strong>Postman</strong> ׳”׳™׳ ׳‘׳“׳™׳•׳§ ׳–׳”. ׳”׳™׳ ׳׳׳₪׳©׳¨׳× ׳׳ ׳• (׳”׳׳₪׳×׳—׳™׳) "׳׳”׳×׳—׳–׳•׳×" ׳׳׳§׳•׳—, ׳׳”׳›׳™׳ ׳”׳–׳׳ ׳” ׳׳•׳©׳׳׳×, ׳•׳׳©׳׳•׳— ׳׳•׳×׳” ׳׳׳˜׳‘׳— (׳”׳©׳¨׳×) ׳›׳“׳™ ׳׳¨׳׳•׳× ׳׳ ׳”׳•׳ ׳׳×׳׳•׳“׳“ ׳׳™׳×׳” ׳ ׳›׳•׳.</p>
    
    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #ff6c37; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #ff6c37; margin-top: 0;">נ› ן¸ ׳׳™׳ ׳¢׳•׳‘׳“׳™׳ ׳¢׳ Postman? (׳׳–׳•׳¨׳™ ׳”׳׳¡׳)</h2>
     <p style="font-size: 1.2rem;">׳”׳׳¡׳ ׳‘-Postman ׳׳—׳•׳׳§ ׳‘׳“׳™׳•׳§ ׳›׳׳• ׳“׳£ ׳”׳–׳׳ ׳”:</p>
     <ul style="font-size: 1.2rem;">
      <li><strong>1. ׳¡׳•׳’ ׳”׳‘׳§׳©׳” (Method):</strong> ׳›׳׳ ׳‘׳•׳—׳¨׳™׳ <code>GET</code> (׳›׳“׳™ ׳׳§׳‘׳ ׳׳× ׳”׳×׳₪׳¨׳™׳˜), <code>POST</code> (׳›׳“׳™ ׳׳©׳׳•׳— ׳”׳–׳׳ ׳” ׳—׳“׳©׳”), ׳׳• <code>DELETE</code> (׳›׳“׳™ ׳׳‘׳˜׳ ׳”׳–׳׳ ׳”).</li>
      <li><strong>2. ׳›׳×׳•׳‘׳× ׳”׳׳¡׳¢׳“׳” (URL):</strong> ׳׳׳ ׳׳ ׳—׳ ׳• ׳׳×׳§׳©׳¨׳™׳? ׳׳׳©׳, <code>http://localhost:3000/api/users</code>.</li>
      <li><strong>3. ׳׳¢׳˜׳₪׳× ׳”׳”׳–׳׳ ׳” (Body):</strong> ׳׳ ׳‘׳—׳¨׳ ׳• <code>POST</code>, ׳׳ ׳—׳ ׳• ׳¦׳¨׳™׳›׳™׳ ׳׳›׳×׳•׳‘ ׳׳” ׳׳ ׳—׳ ׳• ׳¨׳•׳¦׳™׳! ׳ ׳›׳ ׳¡׳™׳ ׳׳׳©׳•׳ ׳™׳× <code>Body</code> ג” ׳׳¡׳׳ ׳™׳ <code>raw</code> ג” ׳‘׳•׳—׳¨׳™׳ ׳‘-<code>JSON</code> ׳׳”׳×׳₪׳¨׳™׳˜ ׳”׳›׳—׳•׳. ׳©׳ ׳›׳•׳×׳‘׳™׳ ׳׳× ׳”׳‘׳§׳©׳”.</li>
      <li><strong>4. ׳¡׳•׳“׳•׳× ׳•׳׳₪׳×׳—׳•׳× (Headers):</strong> ׳׳₪׳¢׳׳™׳ ׳¦׳¨׳™׳ ׳׳”׳–׳“׳”׳•׳× (׳׳׳©׳ ׳›׳¨׳˜׳™׳¡ VIP). ׳ ׳›׳ ׳¡׳™׳ ׳׳׳©׳•׳ ׳™׳× <code>Headers</code> ׳•׳׳•׳¡׳™׳₪׳™׳ Key (׳׳׳©׳ <code>x-auth-token</code>) ׳•-Value (׳׳׳©׳ <code>12345</code>).</li>
     </ul>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 10px; border-right: 6px solid #3498db; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
     <h2 style="color: #3498db; margin-top: 0;">נ’¡ ׳˜׳™׳₪׳™׳ ׳–׳”׳‘ ׳-Postman</h2>
     <ul style="font-size: 1.2rem;">
      <li><strong>׳׳©׳׳•׳¨ ׳¢׳‘׳•׳“׳•׳× (Collections):</strong> ׳‘-Postman ׳׳₪׳©׳¨ ׳׳׳¡׳•׳£ ׳׳× ׳›׳ ׳”׳‘׳§׳©׳•׳× ׳"׳×׳™׳§׳™׳”" (Collection). ׳›׳›׳” ׳׳—׳¨ ׳×׳•׳›׳ ׳׳׳—׳•׳¥ ׳¢׳ ׳‘׳§׳©׳× "Login" ׳‘׳׳™ ׳׳›׳×׳•׳‘ ׳©׳•׳‘ ׳׳× ׳”׳׳™׳׳™׳™׳ ׳•׳”׳¡׳™׳¡׳׳”!</li>
      <li><strong>׳׳©׳×׳ ׳™׳ (Variables):</strong> ׳׳₪׳©׳¨ ׳׳©׳׳•׳¨ ׳׳× ׳”׳›׳×׳•׳‘׳× <code>http://localhost:3000</code> ׳‘׳×׳•׳ ׳׳©׳×׳ ׳” ׳©׳ ׳§׳¨׳ <code>{{url}}</code> ׳•׳›׳›׳” ׳”׳›׳ ׳׳¡׳•׳“׳¨ ׳™׳•׳×׳¨.</li>
      <li><strong>׳×׳¦׳•׳’׳× ׳”׳×׳•׳¦׳׳” (Response):</strong> ׳׳׳˜׳” ׳‘׳׳¡׳, ׳×׳¨׳׳” ׳׳× ׳׳” ׳©׳”׳©׳¨׳× ׳׳—׳–׳™׳¨. ׳©׳™׳ ׳׳‘ ׳׳¡׳˜׳˜׳•׳¡! ׳™׳¨׳•׳§ (200 OK) ׳׳•׳׳¨ ׳©׳”׳”׳–׳׳ ׳” ׳”׳¦׳׳™׳—׳”, ׳׳“׳•׳ (400 Bad Request / 404 Not Found) ׳׳•׳׳¨ ׳©׳”׳™׳™׳×׳” ׳©׳’׳™׳׳” ׳‘׳׳˜׳‘׳— ׳׳• ׳‘׳‘׳§׳©׳”.</li>
     </ul>
    </div>

    <div style="background-color: #fce4ec; padding: 15px; border-radius: 8px; border-right: 5px solid #e91e63; margin-bottom: 20px;">
     <h3 style="color: #e91e63; margin-top: 0;">נ“­ ׳׳™׳ ׳‘׳•׳“׳§׳™׳ ׳׳×׳•׳•׳›׳™׳ ׳‘-Postman?</h3>
     <p style="font-size: 1.1rem; margin-bottom: 0;">׳›׳“׳™ ׳׳¢׳‘׳•׳¨ ׳׳׳‘׳˜׳— (Security Middleware), ׳¢׳׳™׳ ׳• ׳׳©׳׳•׳— ׳׳× ׳”׳›׳¨׳˜׳™׳¡ ׳”׳׳–׳”׳”. ׳‘-Postman ׳ ׳¢׳‘׳•׳¨ ׳׳׳©׳•׳ ׳™׳× <strong>Headers</strong>, ׳‘׳¢׳׳•׳“׳” Key ׳ ׳¨׳©׳•׳ <code>x-auth-token</code> (׳׳• ׳׳” ׳©׳”׳׳׳‘׳˜׳— ׳׳‘׳§׳©), ׳•׳‘׳¢׳׳•׳“׳” Value ׳ ׳¨׳©׳•׳ ׳׳× ׳”׳¡׳•׳“ (׳׳׳©׳ <code>secret123</code>). ׳¨׳§ ׳׳– ׳ ׳׳—׳¥ Send!</p>
    </div>

    <div style="background-color: #e8f5e9; padding: 15px; border-radius: 8px; border-right: 5px solid #4caf50; margin-bottom: 20px;">
     <h3 style="color: #4caf50; margin-top: 0;">נ“­ ׳׳™׳ ׳‘׳•׳“׳§׳™׳ ׳×׳§׳™׳ ׳•׳× ׳ ׳×׳•׳ ׳™׳ ׳‘-Postman?</h3>
     <p style="font-size: 1.1rem; margin-bottom: 0;">׳›׳“׳™ ׳׳©׳׳•׳— ׳₪׳×׳§ ׳׳׳ ׳”׳ ׳”׳׳©׳׳¨׳×: ׳‘-Postman ׳ ׳‘׳—׳¨ ׳‘׳©׳™׳˜׳× <strong>POST</strong>, ׳ ׳™׳›׳ ׳¡ ׳׳׳©׳•׳ ׳™׳× <strong>Body</strong>, ׳ ׳¡׳׳ <strong>raw</strong> ׳•׳׳– ׳ ׳‘׳—׳¨ <strong>JSON</strong> ׳׳”׳×׳₪׳¨׳™׳˜ ׳”׳›׳—׳•׳. ׳©׳ ׳ ׳§׳׳™׳“ ׳׳× ׳”׳₪׳×׳§ ׳©׳׳ ׳•: <code>{ "email": "test@test.com", "age": 20 }</code>. ׳ ׳¡׳” ׳׳©׳׳•׳— ׳׳•׳‘׳™׳™׳§׳˜ ׳¨׳™׳§ <code>{}</code> ׳›׳“׳™ ׳׳¨׳׳•׳× ׳׳™׳ ׳”׳©׳¨׳× ׳׳—׳–׳™׳¨ ׳©׳’׳™׳׳× 400!</p>
    </div>

    <div style="background-color: #fff3e0; padding: 15px; border-radius: 8px; border-right: 5px solid #ff9800; margin-bottom: 20px;">
     <h3 style="color: #ff9800; margin-top: 0;">נ“­ ׳׳™׳ ׳‘׳•׳“׳§׳™׳ ׳©׳’׳™׳׳•׳× ׳‘-Postman?</h3>
     <p style="font-size: 1.1rem; margin-bottom: 0;">׳₪׳©׳•׳˜ ׳׳׳•׳“! ׳ ׳¡׳” ׳׳¨׳©׳•׳ ׳‘׳©׳•׳¨׳× ׳”-URL ׳׳׳¢׳׳” ׳‘-Postman ׳›׳×׳•׳‘׳× ׳©׳׳ ׳§׳™׳™׳׳×, ׳׳׳©׳ <code>http://localhost:3000/api/ghosts</code>. ׳›׳©׳×׳׳—׳¥ Send, ׳×׳¡׳×׳›׳ ׳׳׳˜׳” ׳¢׳ ׳”׳×׳©׳•׳‘׳”: ׳”׳¡׳˜׳˜׳•׳¡ ׳™׳”׳₪׳•׳ ׳׳׳“׳•׳ <strong>404 Not Found</strong>, ׳•׳‘׳’׳•׳£ ׳”׳×׳©׳•׳‘׳” ׳×׳¨׳׳” ׳׳× ׳”-JSON ׳©׳¦׳•׳•׳× ׳”׳”׳¦׳׳” ׳”׳›׳™׳ ׳¢׳‘׳•׳¨׳ (<code>{"error": "Route not found"}</code>).</p>
    </div>
   </div>
  `
 }
};

// --- Global Declarations & State ---
let activeProject = 'bank';
let isPlanSaved = false;

const modalData = {
    ...contentPart1,
    ...contentPart2,
    ...contentPart3,
    ...asyncLearningContent,
    ...serversContent,
    ...dockerBasicContent,
    ...dockerComposeContent,
    ...dockerAdvancedContent,
    ...dockerImagesDeepContent,
    ...dockerComposeAdvancedContent
};

const sectionsList = [
  {
    id: 'section-basics',
    title: 'נ“ ׳™׳¡׳•׳“׳•׳× ׳•׳׳×׳§׳“׳',
    subtitle: '׳”׳‘׳¡׳™׳¡ ׳•׳ ׳•׳©׳׳™׳ ׳׳×׳§׳“׳׳™׳ ׳‘-JavaScript',
    topics: ['basics', 'loops', 'functions', 'closures', 'factories', 'modules', 'destructuring']
  },
  {
    id: 'section-docker',
    title: 'נ³ Docker & Containers',
    subtitle: '׳•׳™׳¨׳˜׳•׳׳׳™׳–׳¦׳™׳”, ׳¨׳©׳×׳•׳× ׳•׳§׳•׳ ׳˜׳™׳™׳ ׳¨׳™׳ ׳‘-Docker',
    topics: ['dockerIntro', 'dockerfile', 'dockerCompose', 'dockerVolumes', 'dockerArchitecture', 'dockerCliMastery', 'dockerPortMapping', 'dockerImagesDeepDive', 'dockerfileInstructions', 'dockerMultiStage', 'dockerComposeAdvanced']
  },
  {
    id: 'section-web',
    title: 'נ–¥ן¸ ׳©׳¨׳×׳™׳ ׳•-Web',
    subtitle: '׳”׳“׳₪׳“׳₪׳, ׳©׳¨׳×׳™ HTTP ׳׳‘׳•׳¡׳¡׳™ Node ׳•-Express',
    topics: ['dom', 'vanillaServer', 'httpParams', 'express', 'expressKids', 'expressMiddlewaresClassroom', 'expressValidationsClassroom', 'expressErrorHandlingClassroom', 'postmanGuide']
  },
  {
    id: 'section-async-full',
    title: 'ג¡ ׳׳¡׳™׳ ׳›׳¨׳•׳ ׳™׳•׳× ׳׳§׳™׳₪׳”',
    subtitle: '׳׳ ׳•׳¢ ׳”-Event Loop, ׳§׳•׳׳‘׳§׳™׳, ׳”׳‘׳˜׳—׳•׳× ׳•׳×׳”׳׳™׳›׳™׳ ׳׳¡׳™׳ ׳›׳¨׳•׳ ׳™׳™׳',
    topics: ['eventLoop', 'callbacksAsync', 'promisesFetch', 'asyncAwait']
  },
  {
    id: 'section-methods',
    title: 'נ› ן¸ ׳׳×׳•׳“׳•׳× ׳׳•׳‘׳ ׳•׳×',
    subtitle: '׳׳ ׳™׳₪׳•׳׳¦׳™׳•׳× ׳©׳ ׳׳¢׳¨׳›׳™׳, ׳׳—׳¨׳•׳–׳•׳× ׳•׳׳•׳‘׳™׳™׳§׳˜׳™׳',
    topics: ['arrayMethods', 'stringMethods', 'objectMethods']
  },
  {
    id: 'section-tools',
    title: 'נ”§ ׳¢׳–׳¨׳™׳ ׳•׳¡׳™׳׳•׳׳˜׳•׳¨׳™׳',
    subtitle: '׳׳—׳¡׳ ׳™׳, ׳”׳©׳•׳•׳׳•׳×, ׳§׳™׳¦׳•׳¨׳™׳, ׳¡׳₪׳¨׳™׳•׳× ׳•׳¡׳™׳׳•׳׳¦׳™׳•׳× ׳׳׳‘׳—׳',
    topics: ['syntaxWarehouse', 'pythonVsJs', 'ironRules', 'keyboard', 'libraries', 'quiz', 'techEnglish']
  }
];

function scrollToSection(id) {
    const card = document.getElementById(`card-${id}`);
    if (card) {
        // Highlight active nav-item
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(el => {
            const onClickAttr = el.getAttribute('onclick');
            if (onClickAttr && onClickAttr.includes(`'${id}'`)) {
                el.classList.add('active');
            }
        });

        if (window.innerWidth <= 1024) {
            document.getElementById('sidebar').classList.remove('open');
        }

        // Close other unpinned cards
        document.querySelectorAll('.card').forEach(other => {
            if (other !== card && other.classList.contains('open') && other.getAttribute('data-pinned') !== 'true') {
                other.classList.remove('open');
            }
        });

        card.classList.add('open');
        
        setTimeout(() => {
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 150);
    }
    updateProgressBar();
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

function togglePinCard(topicKey, event) {
    event.stopPropagation(); // prevent card toggle
    event.preventDefault();
    const card = document.getElementById(`card-${topicKey}`);
    const btn = event.currentTarget;
    if (card && btn) {
        const isPinned = card.getAttribute('data-pinned') === 'true';
        card.setAttribute('data-pinned', !isPinned ? 'true' : 'false');
        btn.classList.toggle('pinned', !isPinned);
        btn.innerHTML = !isPinned ? 'נ“' : 'נ“';
        btn.setAttribute('title', !isPinned ? '׳‘׳˜׳ ׳ ׳¢׳™׳¦׳× ׳›׳¨׳˜׳™׳¡׳™׳”' : '׳ ׳¢׳¥ ׳›׳¨׳˜׳™׳¡׳™׳” ׳₪׳×׳•׳—׳”');
    }
}

function initScrollspy() {
    window.addEventListener('scroll', () => {
        updateProgressBar();
        const scrollPos = window.scrollY || window.pageYOffset;
        let activeKey = '';
        
        const elements = document.querySelectorAll('.section-header, .card');
        elements.forEach(el => {
            const top = el.offsetTop - 120;
            if (scrollPos >= top) {
                if (el.classList.contains('section-header')) {
                    activeKey = el.id.replace('section-', '');
                } else if (el.classList.contains('card')) {
                    activeKey = el.id.replace('card-', '');
                }
            }
        });
        
        if (activeKey) {
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
                const onClick = nav.getAttribute('onclick');
                if (onClick && onClick.includes(`'${activeKey}'`)) {
                    nav.classList.add('active');
                }
            });
        }
    });
}

function updateProgressBar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = `${progressPercent}%`;
    }
}

function onCardClick(topicKey) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => {
        const onClickAttr = el.getAttribute('onclick');
        if (onClickAttr && onClickAttr.includes(`'${topicKey}'`)) {
            el.classList.add('active');
        }
    });

    const card = document.getElementById(`card-${topicKey}`);
    if (card) {
        const isOpening = !card.classList.contains('open');
        
        if (isOpening) {
            const cardRectBefore = card.getBoundingClientRect();
            const initialTop = cardRectBefore.top;

            // Close other unpinned cards
            document.querySelectorAll('.card').forEach(other => {
                if (other !== card && other.classList.contains('open') && other.getAttribute('data-pinned') !== 'true') {
                    other.classList.remove('open');
                }
            });
            
            card.classList.add('open');
            
            // Smoothly maintain scroll position so the card doesn't jump
            const startTime = performance.now();
            function lockScroll(time) {
                const currentTop = card.getBoundingClientRect().top;
                const diff = currentTop - initialTop;
                
                // Adjust scroll to keep card at same screen Y
                if (Math.abs(diff) > 0.5) {
                    window.scrollBy(0, diff);
                }
                
                // Also smoothly update progress bar during the transition
                updateProgressBar();
                
                if (time - startTime < 850) { // 850ms to cover the 800ms CSS transition safely
                    requestAnimationFrame(lockScroll);
                }
            }
            requestAnimationFrame(lockScroll);
        } else {
            card.classList.remove('open');
        }
    }
    updateProgressBar();
}

function renderAllContent() {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    
    let html = '';
    sectionsList.forEach(sec => {
        html += `
            <div class="section-header" id="${sec.id}">
                <div class="sec-head">
                    <span class="idx">${sec.title.split(' ')[0]}</span>
                    <h2>${sec.title.substring(sec.title.indexOf(' ') + 1)}</h2>
                </div>
                <p class="sec-tag">${sec.subtitle}</p>
            </div>
            <div class="cards-grid">
        `;
        
        sec.topics.forEach(topicKey => {
            if (topicKey === 'quiz') {
                html += `
                    <div class="card" id="card-quiz" data-pinned="false">
                        <div class="card-header">
                            <span class="dot" style="background:#4ade80;"></span>
                            <span>נ“ ׳¡׳™׳׳•׳׳˜׳•׳¨ ׳׳‘׳—׳ JS ׳׳™׳ ׳˜׳¨׳׳§׳˜׳™׳‘׳™</span>
                            <button class="pin-card-btn" onclick="togglePinCard('quiz', event)" title="׳ ׳¢׳¥ ׳›׳¨׳˜׳™׳¡׳™׳” ׳₪׳×׳•׳—׳”">נ“</button>
                            <span class="chev">ג–¼</span>
                        </div>
                        <div class="card-body">
                            <div class="card-body-inner">
                                <div class="quiz-modal-container" style="direction: rtl; text-align: right; color: var(--ink); font-family: inherit; padding: 10px;">
                                    <div id="quizContainer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                const data = modalData[topicKey];
                if (data) {
                    let wrappedContent = '';
                    const rawContent = data.content.trim();
                    if (rawContent.startsWith('<div class="card-body">')) {
                        wrappedContent = rawContent.replace(
                            '<div class="card-body">',
                            '<div class="card-body"><div class="card-body-inner">'
                        ).replace(/<\/div>$/, '</div></div>');
                    } else {
                        wrappedContent = `<div class="card-body"><div class="card-body-inner">${rawContent}</div></div>`;
                    }
                    

                    let visHtml = '';
                    if (data.visualizerSteps && data.visualizerSteps.length > 0) {
                        visHtml += `<div class="visualizer-container" id="vis-${topicKey}" data-current="0" data-total="${data.visualizerSteps.length}">`;
                        data.visualizerSteps.forEach((step, idx) => {
                            visHtml += `
                                <div class="visualizer-slide ${idx === 0 ? 'active' : ''}">
                                    ${step.html_visual || ""}
                                    <div class="visualizer-text">${step.text}</div>
                                </div>
                            `;
                        });
                        if (data.visualizerSteps.length > 1) {
                            visHtml += `<div class="visualizer-controls">`;
                            visHtml += `<button class="visualizer-btn btn-prev" onclick="prevVisSlide('${topicKey}')" disabled>׳”׳§׳•׳“׳</button>`;
                            visHtml += `<div class="visualizer-indicator">`;
                            data.visualizerSteps.forEach((_, idx) => {
                                visHtml += `<div class="vis-dot ${idx === 0 ? 'active' : ''}"></div>`;
                            });
                            visHtml += `</div>`;
                            visHtml += `<button class="visualizer-btn btn-next" onclick="nextVisSlide('${topicKey}')">׳”׳‘׳</button>`;
                            visHtml += `</div>`;
                        }
                        visHtml += `</div>`;
                        
                        // Inject into wrappedContent before the inner content
                        wrappedContent = wrappedContent.replace('<div class="card-body-inner">', '<div class="card-body-inner">' + visHtml);
                    }
                    html += `
                        <div class="card" id="card-${topicKey}" data-pinned="false">
                            <div class="card-header">
                                <span class="dot"></span>
                                <span>${data.title}</span>
                                <button class="pin-card-btn" onclick="togglePinCard('${topicKey}', event)" title="׳ ׳¢׳¥ ׳›׳¨׳˜׳™׳¡׳™׳” ׳₪׳×׳•׳—׳”">נ“</button>
                                <span class="chev">ג–¼</span>
                            </div>
                            ${wrappedContent}
                        </div>
                    `;
                }
            }
        });
        
        html += `</div>`; // Close cards-grid
    });
    
    mainContent.innerHTML = html;
    setTimeout(initTechEnglishCheckboxes, 100);
    
    // Bind click events to headers
    document.querySelectorAll('.card-header').forEach(header => {
        header.addEventListener('click', (e) => {
            if (e.target.closest('.pin-card-btn')) return;
            const card = header.parentElement;
            const topicKey = card.id.replace('card-', '');
            onCardClick(topicKey);
        });
    });
    
    initQuiz();
    updateProgressBar();
}

// Render content and initialize Scrollspy on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderAllContent();
    initScrollspy();
    
    // Smoothly update progress bar and scrollspy when document height changes (e.g. accordion open/close)
    const resizeObserver = new ResizeObserver(() => {
        window.dispatchEvent(new Event('scroll'));
    });
    resizeObserver.observe(document.documentElement);
});

// --- Bank IDE Data ---
const bankExplanationHtml = `
<h1>נ“– ׳׳“׳¨׳™׳ ׳”׳₪׳¨׳•׳™׳§׳˜: ׳¡׳™׳׳•׳׳˜׳•׳¨ ׳ ׳™׳”׳•׳ ׳‘׳ ׳§</h1>
<p>׳‘׳¨׳•׳ ׳”׳‘׳ ׳׳₪׳¨׳•׳™׳§׳˜ ׳ ׳™׳”׳•׳ ׳”׳‘׳ ׳§! ׳‘׳׳¡׳׳ ׳–׳” ׳ ׳¡׳‘׳™׳¨ ׳¦׳¢׳“-׳׳—׳¨-׳¦׳¢׳“ ׳׳× ׳”׳׳‘׳ ׳”, ׳”׳”׳™׳’׳™׳•׳, ׳•׳”׳§׳•׳“ ׳׳׳—׳•׳¨׳™ ׳”׳§׳׳¢׳™׳, ׳‘׳“׳™׳•׳§ ׳׳₪׳™ ׳¡׳“׳¨ ׳”׳₪׳¢׳•׳׳•׳× ׳”׳ ׳“׳¨׳©.</p>

<hr style="border-color:#333; margin: 20px 0;">

<h2>נ“‚ ׳׳׳” ׳—׳™׳׳§׳ ׳• ׳׳× ׳”׳₪׳¨׳•׳™׳§׳˜ ׳-4 ׳§׳‘׳¦׳™׳?</h2>
<p>׳›׳×׳™׳‘׳× ׳§׳•׳“ ׳‘׳§׳•׳‘׳¥ ׳׳—׳“ ׳¢׳ ׳§ ׳”׳™׳ ׳׳×׳›׳•׳ ׳׳׳¡׳•׳. ׳›׳©׳׳—׳׳§׳™׳ ׳׳× ׳”׳§׳•׳“ (׳׳•׳“׳•׳׳¨׳™׳•׳×), ׳§׳ ׳™׳•׳×׳¨ ׳׳׳¦׳•׳ ׳‘׳׳’׳™׳, ׳׳‘׳“׳•׳§ ׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳‘׳ ׳₪׳¨׳“, ׳•׳׳”׳‘׳™׳ ׳׳× ׳–׳¨׳™׳׳× ׳”׳׳™׳“׳¢ (Story).</p>
<ul>
    <li><strong><code>utils.js</code> (׳׳¨׳’׳– ׳”׳›׳׳™׳)</strong>: ׳׳›׳™׳ ׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳¢׳–׳¨ ׳©׳׳ ׳§׳©׳•׳¨׳•׳× ׳׳‘׳ ׳§ ׳¢׳¦׳׳•, ׳׳׳ ׳׳©׳׳©׳•׳× ׳›׳›׳׳™ ׳¢׳‘׳•׳“׳” (׳›׳׳• ׳¢׳™׳¦׳•׳‘ ׳׳˜׳‘׳¢ ׳•׳”׳¦׳’׳× ׳×׳₪׳¨׳™׳˜ ׳׳׳©׳×׳׳©).</li>
    <li><strong><code>bankFactory.js</code> (׳₪׳¡ ׳”׳™׳™׳¦׳•׳¨)</strong>: ׳₪׳” ׳׳ ׳—׳ ׳• ׳¨׳§ <em>׳׳’׳“׳™׳¨׳™׳</em> ׳׳” ׳–׳” ׳׳§׳•׳— ׳•׳׳” ׳–׳” ׳—׳©׳‘׳•׳. ׳׳™׳ ׳₪׳” ׳ ׳×׳•׳ ׳™׳ ׳—׳™׳™׳, ׳¨׳§ ׳”׳×׳‘׳ ׳™׳•׳×!</li>
    <li><strong><code>bankManager.js</code> (׳”׳׳ ׳”׳)</strong>: ׳”׳׳‘ ׳”׳₪׳•׳¢׳. ׳›׳׳ ׳ ׳׳¦׳ ׳׳¡׳“ ׳”׳ ׳×׳•׳ ׳™׳ ׳©׳׳ ׳• (׳¨׳©׳™׳׳× ׳”׳׳§׳•׳—׳•׳×), ׳•׳¨׳§ ׳”׳•׳ ׳¨׳©׳׳™ ׳׳—׳₪׳©, ׳׳”׳•׳¡׳™׳£ ׳׳• ׳׳”׳•׳¦׳™׳ ׳¡׳˜׳˜׳™׳¡׳˜׳™׳§׳•׳× ׳¢׳ ׳›׳•׳׳.</li>
    <li><strong><code>main.js</code> (׳”׳׳¡׳•׳£ ׳”׳¨׳׳©׳™)</strong>: ׳”׳§׳•׳‘׳¥ ׳”׳™׳—׳™׳“ ׳©׳”׳׳©׳×׳׳© ׳‘׳׳׳× ׳₪׳•׳’׳©. ׳”׳•׳ ׳§׳•׳¨׳ ׳׳×׳₪׳¨׳™׳˜ ׳•׳׳₪׳¢׳™׳ ׳׳× ׳›׳ ׳”׳§׳‘׳¦׳™׳ ׳”׳׳—׳¨׳™׳ ׳׳₪׳™ ׳”׳‘׳—׳™׳¨׳”.</li>
</ul>

<hr style="border-color:#333; margin: 20px 0;">

<h2>נ§© ׳×׳™׳׳•׳¨ ׳”׳׳˜׳׳•׳× ׳•׳”׳₪׳•׳ ׳§׳¦׳™׳•׳× - ׳׳׳ ׳›׳ ׳“׳‘׳¨ ׳©׳™׳™׳?</h2>

<h3>1. ׳׳ ׳”׳ ׳”׳‘׳ ׳§ (bankManager.js)</h3>
<ul>
    <li><strong>׳™׳¦׳™׳¨׳× ׳¨׳©׳™׳׳” ׳©׳ ׳׳•׳‘׳™׳™׳§׳˜׳™׳ ׳¢׳ ׳ ׳×׳•׳ ׳™ ׳׳§׳•׳—׳•׳×:</strong> ׳׳×׳‘׳¦׳¢ ׳‘׳׳¢׳¨׳ <code>customers: []</code>. ׳–׳”׳• ׳׳¡׳“ ׳”׳ ׳×׳•׳ ׳™׳ ׳©׳׳ ׳• ׳©׳©׳•׳׳¨ ׳׳× ׳›׳ ׳”׳׳•׳‘׳™׳™׳§׳˜׳™׳.</li>
    <li><strong>׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳”׳¦׳’׳× ׳”׳׳§׳•׳—׳•׳× (2):</strong> ׳׳×׳‘׳¦׳¢׳× ׳¢׳ ׳™׳“׳™ ׳”׳׳×׳•׳“׳” <code>getAllCustomers()</code> ׳©׳₪׳©׳•׳˜ ׳©׳•׳׳₪׳× ׳׳× ׳›׳ ׳”׳׳¢׳¨׳.</li>
    <li><strong>׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳”׳—׳™׳₪׳•׳© (5):</strong> ׳׳×׳‘׳¦׳¢׳× ׳¢׳ ׳™׳“׳™ ׳”׳׳×׳•׳“׳” <code>findCustomer()</code>. ׳”׳™׳ ׳¢׳•׳‘׳¨׳× ׳¢׳ ׳”׳׳¢׳¨׳ ׳¢׳ ׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳׳•׳‘׳ ׳™׳× <code>find()</code> ׳•׳׳—׳₪׳©׳× ׳”׳×׳׳׳” ׳׳₪׳™ <code>id</code> ׳׳• <code>name</code>.</li>
    <li><strong>׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳¡׳’׳™׳¨׳× ׳”׳—׳©׳‘׳•׳ (6):</strong> ׳׳×׳‘׳¦׳¢׳× ׳‘-<code>closeCustomerAccount()</code>. ׳”׳׳ ׳”׳ ׳§׳•׳“׳ ׳׳—׳₪׳© ׳׳× ׳”׳׳§׳•׳—, ׳•׳׳ ׳׳¦׳, ׳§׳•׳¨׳ ׳׳₪׳¢׳•׳׳× ׳”׳¡׳’׳™׳¨׳” ׳©׳׳•.</li>
    <li><strong>׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳”׳¦׳’׳× ׳”׳¡׳˜׳˜׳™׳¡׳˜׳™׳§׳•׳× (7):</strong> ׳׳×׳‘׳¦׳¢׳× ׳‘-<code>getStats()</code>. ׳”׳׳ ׳”׳ ׳¢׳•׳‘׳¨ ׳‘׳׳•׳׳׳” ׳¢׳ ׳›׳•׳׳, ׳¡׳•׳›׳ ׳׳× ׳”׳™׳×׳¨׳•׳× ׳©׳ ׳—׳©׳‘׳•׳ ׳•׳× ׳₪׳¢׳™׳׳™׳ ׳‘׳׳‘׳“, ׳•׳¡׳•׳₪׳¨ ׳›׳׳” ׳™׳©.</li>
</ul>

<h3>2. ׳”׳׳₪׳¢׳ (bankFactory.js)</h3>
<ul>
    <li><strong>׳™׳¦׳™׳¨׳× ׳׳‘׳ ׳” ׳©׳ ׳׳§׳•׳— ׳¡׳˜׳ ׳“׳¨׳˜׳™:</strong> ׳”׳₪׳•׳ ׳§׳¦׳™׳” <code>createCustomer()</code> ׳׳§׳‘׳׳× (name, id, accountType, initialBalance) ׳•׳׳—׳–׳™׳¨׳” ׳׳•׳‘׳™׳™׳§׳˜ ׳׳§׳•׳—.</li>
    <li><strong>׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳”׳™׳™׳¦׳•׳¨ ׳©׳ ׳—׳©׳‘׳•׳:</strong> ׳”׳₪׳•׳ ׳§׳¦׳™׳” ׳”׳¡׳•׳“׳™׳× <code>createAccount()</code>. ׳”׳™׳ ׳©׳•׳׳¨׳× ׳׳× ׳”׳™׳×׳¨׳” (balance) ׳‘׳×׳•׳ <em>Closure</em> ׳›׳“׳™ ׳©׳׳£ ׳׳—׳“ ׳׳ ׳™׳•׳›׳ ׳׳©׳ ׳•׳× ׳׳•׳×׳” ׳׳‘׳—׳•׳¥ ׳‘׳׳™ ׳׳¢׳‘׳•׳¨ ׳‘׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳”׳”׳₪׳§׳“׳”.</li>
    <li><strong>׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳”׳₪׳§׳“׳” (3) ׳•׳׳©׳™׳›׳” (4):</strong> ׳׳×׳‘׳¦׳¢׳•׳× ׳‘-<code>deposit()</code> ׳•׳‘-<code>withdraw()</code>. ׳©׳×׳™׳”׳ ׳‘׳•׳“׳§׳•׳× ׳§׳•׳“׳ ׳›׳ ׳׳× ׳¡׳•׳’ ׳”׳—׳©׳‘׳•׳ ׳•׳”׳׳ ׳”׳•׳ ׳‘׳›׳׳ ׳₪׳¢׳™׳ (<code>isActive</code>). ׳‘׳׳™׳“׳” ׳•׳”׳•׳ ׳¡׳’׳•׳¨, ׳”׳₪׳¢׳•׳׳” ׳ ׳“׳—׳™׳× ׳׳™׳“ (Return).</li>
</ul>

<h3>3. ׳׳׳©׳§ ׳”׳׳©׳×׳׳© (main.js)</h3>
<ul>
    <li><strong>׳›׳™׳¦׳“ ׳™׳•׳¦׳’׳• ׳”׳ ׳×׳•׳ ׳™׳ ׳”׳ ׳“׳¨׳©׳™׳:</strong> ׳§׳•׳‘׳¥ ׳”-main ׳׳¨׳™׳¥ ׳׳•׳׳׳× <code>while(true)</code> ׳׳™׳ ׳¡׳•׳₪׳™׳×. ׳›׳ ׳¡׳™׳‘׳•׳‘ ׳”׳•׳ ׳§׳•׳¨׳ ׳-<code>menu()</code> ׳©׳™׳¦׳™׳’ ׳׳× ׳”׳׳₪׳©׳¨׳•׳™׳•׳×, ׳•׳׳׳×׳™׳ ׳׳×׳©׳•׳‘׳”.</li>
    <li><strong>׳”׳‘׳“׳™׳§׳•׳× ׳”׳ ׳“׳¨׳©׳•׳× ׳׳›׳ ׳₪׳•׳ ׳§׳¦׳™׳”:</strong> ׳‘׳›׳ ׳₪׳¢׳ ׳©׳”׳׳©׳×׳׳© ׳‘׳•׳—׳¨ ׳₪׳¢׳•׳׳” (׳›׳׳• ׳”׳₪׳§׳“׳”), ׳”׳§׳•׳‘׳¥ ׳§׳•׳¨׳ ׳׳׳ ׳”׳. ׳׳ ׳”׳׳ ׳”׳ ׳׳•׳¦׳ ׳׳× ׳”׳׳§׳•׳—, ׳׳‘׳§׳©׳™׳ ׳§׳׳˜ ׳ ׳•׳¡׳£ (׳›׳׳• ׳¡׳›׳•׳) ׳•׳¨׳§ ׳׳– ׳׳‘׳¦׳¢׳™׳.</li>
</ul>

<hr style="border-color:#333; margin: 20px 0;">

<h2>נ”’ ׳¨׳’׳¢, ׳׳” ׳–׳” ׳‘׳¢׳¦׳ Closure ׳•׳׳׳” ׳¦׳¨׳™׳ ׳׳× ׳–׳” ׳₪׳”?</h2>
<p>
<strong>Closure (׳¡׳’׳™׳¨׳”)</strong> ׳”׳•׳ ׳׳ ׳’׳ ׳•׳ ׳׳™׳•׳—׳“ ׳‘-JavaScript ׳©׳׳׳₪׳©׳¨ ׳׳₪׳•׳ ׳§׳¦׳™׳” "׳׳–׳›׳•׳¨" ׳׳× ׳”׳׳©׳×׳ ׳™׳ ׳©׳”׳™׳• ׳‘׳¡׳‘׳™׳‘׳” ׳©׳׳” ׳›׳©׳”׳™׳ ׳ ׳•׳¦׳¨׳”, ׳’׳ ׳׳—׳¨׳™ ׳©׳”׳¡׳‘׳™׳‘׳” ׳”׳–׳• ׳¡׳™׳™׳׳” ׳׳¨׳•׳¥!
</p>
<p>
<strong>׳׳™׳ ׳–׳” ׳¢׳•׳‘׳“ ׳׳¦׳׳ ׳•?</strong><br>
׳‘׳§׳•׳‘׳¥ <code>bankFactory.js</code>, ׳‘׳₪׳•׳ ׳§׳¦׳™׳” <code>createAccount</code>, ׳”׳’׳“׳¨׳ ׳• ׳׳©׳×׳ ׳” <code>let balance</code>. ׳”׳׳©׳×׳ ׳” ׳”׳–׳” <strong>׳׳</strong> ׳”׳•׳—׳–׳¨ (returned) ׳›׳׳׳₪׳™׳™׳ ׳©׳ ׳”׳׳•׳‘׳™׳™׳§׳˜, ׳׳׳ ׳¨׳§ ׳”׳₪׳•׳ ׳§׳¦׳™׳•׳× <code>deposit</code> ׳•-<code>withdraw</code> ׳§׳™׳‘׳׳• "׳’׳™׳©׳” ׳׳™׳©׳™׳×" ׳׳׳™׳•.<br>
<br>
<strong>׳׳׳” ׳“׳•׳•׳§׳ ׳›׳׳? (׳׳‘׳˜׳—׳× ׳׳™׳“׳¢)</strong><br>
׳׳ ׳”׳™׳×׳¨׳” ׳”׳™׳™׳×׳” ׳׳׳₪׳™׳™׳ ׳¨׳’׳™׳ ׳‘׳׳§׳•׳—, ׳₪׳¦׳§׳¨ ׳₪׳©׳•׳˜ ׳”׳™׳” ׳™׳›׳•׳ ׳׳›׳×׳•׳‘: <br><code>customer.account.balance = 10000000;</code><br> ׳•׳׳§׳‘׳ ׳׳™׳׳™׳•׳ ׳™׳ ׳‘׳׳™ ׳׳¢׳‘׳•׳¨ ׳‘׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳”׳₪׳§׳“׳”.<br>
׳”׳•׳“׳•׳× ׳-Closure, ׳”׳׳©׳×׳ ׳” ׳ ׳©׳׳¨ <strong>׳₪׳¨׳˜׳™ ׳•׳׳•׳¡׳×׳¨</strong>. ׳”׳“׳¨׳ ׳”׳™׳—׳™׳“׳” ׳׳’׳¢׳× ׳‘׳›׳¡׳£ ׳”׳™׳ ׳“׳¨׳ ׳”׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳”׳¨׳©׳׳™׳•׳× ׳©׳™׳™׳¦׳¨׳ ׳•, ׳׳©׳¨ ׳׳‘׳¦׳¢׳•׳× ׳‘׳“׳™׳§׳•׳× ׳×׳§׳™׳ ׳•׳× (׳”׳׳ ׳”׳—׳©׳‘׳•׳ ׳₪׳¢׳™׳? ׳”׳׳ ׳™׳© ׳׳¡׳₪׳™׳§ ׳™׳×׳¨׳” ׳׳׳©׳™׳›׳”?)!
</p>

<hr style="border-color:#333; margin: 20px 0;">

<h2>נ€ ׳¡׳“׳¨ ׳”׳“׳‘׳¨׳™׳: ׳׳׳™׳₪׳” ׳׳×׳—׳™׳׳™׳ ׳‘׳‘׳ ׳™׳™׳× ׳₪׳¨׳•׳™׳§׳˜ ׳›׳–׳”?</h2>
<ol>
    <li><strong>׳”׳’׳“׳¨׳× ׳”׳›׳׳™׳ (utils):</strong> ׳§׳•׳“׳ ׳›׳ ׳‘׳•׳ ׳™׳ ׳׳× ׳׳” ׳©׳׳ ׳×׳׳•׳™ ׳‘׳›׳׳•׳ (׳”׳×׳₪׳¨׳™׳˜ ׳©׳׳•׳“׳₪׳¡ ׳׳׳¡׳).</li>
    <li><strong>׳”׳’׳“׳¨׳× ׳”׳×׳‘׳ ׳™׳•׳× (Factory):</strong> ׳‘׳•׳ ׳™׳ ׳׳•׳“׳ ׳׳“׳•׳™׳§ ׳©׳ ׳—׳©׳‘׳•׳ ׳•׳׳§׳•׳—. ׳׳—׳׳™׳˜׳™׳ ׳׳™׳׳• ׳׳©׳×׳ ׳™׳ ׳™׳”׳™׳• ׳’׳׳•׳™׳™׳ ׳•׳׳™׳׳• ׳™׳•׳—׳‘׳׳• ׳‘-Closure.</li>
    <li><strong>׳‘׳ ׳™׳™׳× ׳”׳׳ ׳”׳ (Manager):</strong> ׳™׳•׳¦׳¨׳™׳ ׳׳× ׳”׳׳•׳— ׳©׳׳¨׳›׳– ׳׳× ׳”׳׳§׳•׳—׳•׳×, ׳•׳‘׳• ׳›׳•׳×׳‘׳™׳ ׳׳× ׳”׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳©׳׳ ׳”׳׳•׳× ׳׳× ׳”׳׳¢׳¨׳.</li>
    <li><strong>׳—׳™׳‘׳•׳¨ ׳”׳›׳ (Main):</strong> ׳›׳•׳×׳‘׳™׳ ׳׳•׳׳׳” ׳©׳׳₪׳¢׳™׳׳” ׳׳× ׳”׳×׳₪׳¨׳™׳˜, ׳•"׳׳—׳‘׳¨׳× ׳׳× ׳”׳¦׳™׳ ׳•׳¨׳•׳×" ׳‘׳™׳ ׳׳” ׳©׳”׳׳©׳×׳׳© ׳”׳§׳׳™׳“ ׳׳‘׳™׳ ׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳”׳׳ ׳”׳.</li>
</ol>
`;

// Redundant Merge and Declarations Removed (Defined at top of file)

function getIdeHtml(projectKey) {
    const project = projectKey === 'bank' ? { title: "Bank Account Simulator נ¦" } : projectsData[projectKey];
    const title = project.title || "IDE Mode";
    
    // Build sidebar files list
    let sidebarHtml = '';
    if (projectKey === 'bank') {
        sidebarHtml = `
            <div class="ide-sidebar-header">BANK_ACCOUNT... נ“„ נ“ נ”„ ג™</div>
            <div class="ide-folder" onclick="toggleFolder('folder-git', this)">ג–¸ .git</div>
            <div id="folder-git" style="display:none;"></div>
            
            <div class="ide-folder" onclick="toggleFolder('folder-modules', this)">ג–¾ node_modules</div>
            <div id="folder-modules">
                <div class="ide-folder indented" onclick="toggleFolder('folder-readline', this)">ג–¸ readline-sync</div>
                <div id="folder-readline" style="display:none;"></div>
                <div class="ide-file indented"><span style="color:#34d399">{}</span> .package-lock.json</div>
            </div>
            
            <div class="ide-file" onclick="switchIdeFile('utils.js')"><span style="color:#f7df1e">JS</span> utils.js</div>
            <div class="ide-file" onclick="switchIdeFile('bankFactory.js')"><span style="color:#f7df1e">JS</span> bankFactory.js</div>
            <div class="ide-file" onclick="switchIdeFile('bankManager.js')"><span style="color:#f7df1e">JS</span> bankManager.js</div>
            <div class="ide-file" onclick="switchIdeFile('main.js')"><span style="color:#f7df1e">JS</span> main.js</div>
            <div class="ide-file" onclick="switchIdeFile('package-lock.json')"><span style="color:#34d399">{}</span> package-lock.json</div>
            <div class="ide-file" onclick="switchIdeFile('package.json')"><span style="color:#34d399">{}</span> package.json</div>
        `;
    } else if (projectKey === 'asyncFiles') {
        sidebarHtml = `
            <div class="ide-sidebar-header">ASYNC_FILES נ“‚ נ“„ נ“</div>
            <div class="ide-folder" onclick="toggleFolder('folder-git', this)">ג–¸ .git</div>
            <div id="folder-git" style="display:none;"></div>
            
            <div class="ide-file" onclick="switchIdeFile('async-files.js')"><span style="color:#f7df1e">JS</span> async-files.js</div>
            <div class="ide-file" onclick="switchIdeFile('input.txt')"><span style="color:#38bdf8">TXT</span> input.txt</div>
            <div class="ide-file" onclick="switchIdeFile('output.txt')"><span style="color:#38bdf8">TXT</span> output.txt</div>
            <div class="ide-file" onclick="switchIdeFile('output-upper.txt')"><span style="color:#38bdf8">TXT</span> output-upper.txt</div>
        `;
    } else if (projectKey === 'studyPlanner') {
        sidebarHtml = `
            <div class="ide-sidebar-header">STUDY_PLANNER נ“… נ“„ נ“</div>
            <div class="ide-folder" onclick="toggleFolder('folder-git', this)">ג–¸ .git</div>
            <div id="folder-git" style="display:none;"></div>
            
            <div class="ide-file" onclick="switchIdeFile('package.json')"><span style="color:#34d399">{}</span> package.json</div>
            <div class="ide-file" onclick="switchIdeFile('data.js')"><span style="color:#f7df1e">JS</span> data.js</div>
            <div class="ide-file" onclick="switchIdeFile('callbacks.js')"><span style="color:#f7df1e">JS</span> callbacks.js</div>
            <div class="ide-file" onclick="switchIdeFile('promises.js')"><span style="color:#f7df1e">JS</span> promises.js</div>
            <div class="ide-file" onclick="switchIdeFile('asyncAwait.js')"><span style="color:#f7df1e">JS</span> asyncAwait.js</div>
            <div class="ide-file" onclick="switchIdeFile('storage.js')"><span style="color:#f7df1e">JS</span> storage.js</div>
            <div class="ide-file" onclick="switchIdeFile('main.js')"><span style="color:#f7df1e">JS</span> main.js</div>
            <div class="ide-file" onclick="switchIdeFile('saved-plan.json')"><span style="color:#34d399">{}</span> saved-plan.json</div>
        `;
    } else if (projectKey === 'movieCollection') {
        sidebarHtml = `
            <div class="ide-sidebar-header">MOVIE_COLLECTION נ¬ נ“„ נ“</div>
            <div class="ide-folder" onclick="toggleFolder('folder-git', this)">ג–¸ .git</div>
            <div id="folder-git" style="display:none;"></div>
            
            <div class="ide-file" onclick="switchIdeFile('package.json')"><span style="color:#34d399">{}</span> package.json</div>
            <div class="ide-file" onclick="switchIdeFile('data/movies.json')"><span style="color:#34d399">{}</span> movies.json</div>
            <div class="ide-file" onclick="switchIdeFile('utils/validator.js')"><span style="color:#f7df1e">JS</span> validator.js</div>
            <div class="ide-file" onclick="switchIdeFile('services/file.service.js')"><span style="color:#f7df1e">JS</span> file.service.js</div>
            <div class="ide-file" onclick="switchIdeFile('services/movie.service.js')"><span style="color:#f7df1e">JS</span> movie.service.js</div>
            <div class="ide-file" onclick="switchIdeFile('app.js')"><span style="color:#f7df1e">JS</span> app.js</div>
        `;
    } else if (projectKey === 'storeOnlineServer') {
        sidebarHtml = `
            <div class="ide-sidebar-header">STORE_SERVER נ›’ נ“„ נ“</div>
            <div class="ide-folder" onclick="toggleFolder('folder-git', this)">ג–¸ .git</div>
            <div id="folder-git" style="display:none;"></div>
            
            <div class="ide-file" onclick="switchIdeFile('.env')"><span style="color:#a78bfa">ENV</span> .env</div>
            <div class="ide-file" onclick="switchIdeFile('package.json')"><span style="color:#34d399">{}</span> package.json</div>
            <div class="ide-file" onclick="switchIdeFile('data/products.json')"><span style="color:#34d399">{}</span> products.json</div>
            <div class="ide-file" onclick="switchIdeFile('data/customers.json')"><span style="color:#34d399">{}</span> customers.json</div>
            <div class="ide-file" onclick="switchIdeFile('data/orders.json')"><span style="color:#34d399">{}</span> orders.json</div>
            <div class="ide-file" onclick="switchIdeFile('services/file.service.js')"><span style="color:#f7df1e">JS</span> file.service.js</div>
            <div class="ide-file" onclick="switchIdeFile('routes/products.js')"><span style="color:#f7df1e">JS</span> products.js</div>
            <div class="ide-file" onclick="switchIdeFile('routes/cart.js')"><span style="color:#f7df1e">JS</span> cart.js</div>
            <div class="ide-file" onclick="switchIdeFile('routes/account.js')"><span style="color:#f7df1e">JS</span> account.js</div>
            <div class="ide-file" onclick="switchIdeFile('routes/orders.js')"><span style="color:#f7df1e">JS</span> orders.js</div>
            <div class="ide-file" onclick="switchIdeFile('routes/health.js')"><span style="color:#f7df1e">JS</span> health.js</div>
            <div class="ide-file" onclick="switchIdeFile('index.js')"><span style="color:#f7df1e">JS</span> index.js</div>
        `;
    } else if (projectKey === 'restaurantOrdersApi') {
        sidebarHtml = `
            <div class="ide-sidebar-header">RESTAURANT_API נ” נ“„ נ“</div>
            <div class="ide-folder" onclick="toggleFolder('folder-git', this)">ג–¸ .git</div>
            <div id="folder-git" style="display:none;"></div>
            
            <div class="ide-file" onclick="switchIdeFile('package.json')"><span style="color:#34d399">{}</span> package.json</div>
            <div class="ide-file" onclick="switchIdeFile('data/orders.json')"><span style="color:#34d399">{}</span> orders.json</div>
            <div class="ide-file" onclick="switchIdeFile('middlewares/auth.middleware.js')"><span style="color:#f7df1e">JS</span> auth.middleware.js</div>
            <div class="ide-file" onclick="switchIdeFile('middlewares/error.middleware.js')"><span style="color:#f7df1e">JS</span> error.middleware.js</div>
            <div class="ide-file" onclick="switchIdeFile('services/orders.service.js')"><span style="color:#f7df1e">JS</span> orders.service.js</div>
            <div class="ide-file" onclick="switchIdeFile('routes/orders.route.js')"><span style="color:#f7df1e">JS</span> orders.route.js</div>
            <div class="ide-file" onclick="switchIdeFile('index.js')"><span style="color:#f7df1e">JS</span> index.js</div>
        `;
    }

    const prompt = projectKey === 'bank' ? 'natan@ubuntu:~/bank$' : (projectKey === 'asyncFiles' ? 'natan@ubuntu:~/async-files$' : (projectKey === 'studyPlanner' ? 'natan@ubuntu:~/study-planner$' : (projectKey === 'movieCollection' ? 'natan@ubuntu:~/movie-manager$' : (projectKey === 'restaurantOrdersApi' ? 'natan@ubuntu:~/restaurant-api$' : 'natan@ubuntu:~/store-server$'))));
    const initialTermOutput = projectKey === 'bank' 
        ? "> ׳”׳׳¢׳¨׳›׳× ׳׳׳•׳×׳—׳׳×. ׳”׳§׳׳“ 'help' ׳›׳“׳™ ׳׳¨׳׳•׳× ׳₪׳§׳•׳“׳•׳× ׳׳₪׳©׳¨׳™׳•׳×." 
        : (projectKey === 'asyncFiles' 
            ? "> ׳₪׳¨׳•׳™׳§׳˜ ׳¢׳™׳‘׳•׳“ ׳§׳‘׳¦׳™׳ ׳׳•׳›׳. ׳”׳§׳׳“ 'node async-files.js' ׳׳”׳¨׳¦׳” ׳׳• 'help' ׳׳¢׳–׳¨׳”." 
            : (projectKey === 'studyPlanner'
                ? "> ׳₪׳¨׳•׳™׳§׳˜ ׳׳×׳›׳ ׳ ׳׳™׳׳•׳“׳™׳ ׳׳•׳›׳. ׳”׳§׳׳“ 'node main.js' ׳׳”׳¨׳¦׳” ׳׳• 'help' ׳׳¢׳–׳¨׳”."
                : (projectKey === 'movieCollection'
                    ? "> ׳₪׳¨׳•׳™׳§׳˜ ׳ ׳™׳”׳•׳ ׳¡׳¨׳˜׳™׳ ׳׳•׳›׳. ׳”׳§׳׳“ 'node app.js' ׳׳”׳¨׳¦׳” ׳׳• 'help' ׳׳¢׳–׳¨׳”."
                    : (projectKey === 'restaurantOrdersApi'
                        ? "> ׳׳¡׳¢׳“׳× API ׳׳•׳›׳ ׳”. ׳”׳§׳׳“ 'npm start' ׳׳”׳₪׳¢׳׳× ׳”׳©׳¨׳× ׳׳• 'help' ׳׳¢׳–׳¨׳”."
                        : "> ׳©׳¨׳× Express ׳׳•׳›׳. ׳”׳§׳׳“ 'npm start' ׳׳”׳₪׳¢׳׳× ׳”׳©׳¨׳× ׳׳• 'help' ׳׳¢׳–׳¨׳”."))));

    return `
        <div class="ide-container" style="position:relative;">
            <button onclick="document.getElementById('explanationOverlay').style.display='flex'" style="position:absolute; top:20px; left:20px; background:var(--gold); color:#11131a; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:bold; font-family:inherit; z-index:10; box-shadow:0 4px 15px rgba(245,197,24,0.35); transition:0.2s;">
                נ“˜ ׳”׳¡׳‘׳¨ ׳”׳₪׳¨׳•׳™׳§׳˜
            </button>
        
            <div id="explanationOverlay" style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(17,19,26,0.97); z-index:20; flex-direction:column; align-items:center; justify-content:center; padding:20px;">
                <div style="background:var(--surface); width:100%; max-width:900px; height:95%; border-radius:var(--radius); position:relative; display:flex; flex-direction:column; box-shadow:0 10px 30px rgba(0,0,0,0.6); border:1px solid var(--line);">
                    <button onclick="document.getElementById('explanationOverlay').style.display='none'" style="position:absolute; top:15px; right:15px; background:none; border:none; color:var(--ink-soft); font-size:24px; cursor:pointer; z-index:30;">ג•</button>
                    <div id="explanationContent" style="padding:40px 30px; overflow-y:auto; color:var(--ink); font-family:inherit; line-height:1.8; direction:rtl;">
                        ${projectKey === 'bank' ? bankExplanationHtml : project.floatingExplanation}
                    </div>
                </div>
            </div>
        
            <div class="ide-top">
                <div class="ide-sidebar">
                    ${sidebarHtml}
                </div>
                
                <div class="ide-editor" id="ideEditorContent">
                    <!-- Dynamic content -->
                </div>
            </div>
            <div class="ide-terminal">
                <div class="term-header"><span>bash - ${projectKey}</span></div>
                <div class="term-output" id="terminalOutput">
                    <p>${initialTermOutput}</p>
                </div>
                <div class="term-input-wrapper">
                    <span class="term-prompt">${prompt}</span>
                    <input type="text" class="term-input" id="terminalInput" autocomplete="off" spellcheck="false" onkeypress="handleTerminal(event)">
                </div>
            </div>
        </div>
    `;
}

function openIDE(projectKey) {
    activeProject = projectKey;
    const modal = document.getElementById('fullPageModal');
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = getIdeHtml(projectKey);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Close sidebar on mobile
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');
    
    const defaultFile = projectKey === 'bank' ? 'utils.js' : (projectKey === 'asyncFiles' ? 'async-files.js' : (projectKey === 'studyPlanner' ? 'main.js' : (projectKey === 'movieCollection' ? 'app.js' : 'index.js')));
    setTimeout(() => switchIdeFile(defaultFile), 50);
}

function closeModal() {
    document.getElementById('fullPageModal').classList.remove('open');
    document.body.style.overflow = 'auto';
    document.getElementById('modalBody').innerHTML = '';
}

// --- IDE Logic ---
const bankFileContents = {
    'utils.js': `<span class="comment">// 1. ׳§׳•׳‘׳¥ ׳׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳—׳™׳©׳•׳‘ ׳•׳¢׳–׳¨ ׳׳׳¢׳¨׳›׳×</span>
import rl from 'readline-sync';

export const formatCurrency = (amount) => \`ג‚×\${amount.toFixed(2)}\`;

export function isPositive(num) {
    return num > 0;
}

export function menu() {
    console.log(\`
========== ׳׳¢׳¨׳›׳× ׳ ׳™׳”׳•׳ ׳—׳©׳‘׳•׳ ׳•׳× ׳‘׳ ׳§ ==========
1. ׳”׳•׳¡׳£ ׳׳§׳•׳— ׳—׳“׳©
2. ׳”׳₪׳§׳“ ׳›׳¡׳£
3. ׳׳©׳•׳ ׳›׳¡׳£
4. ׳—׳₪׳© ׳׳§׳•׳—
5. ׳¡׳’׳•׳¨ ׳—׳©׳‘׳•׳
6. ׳”׳¦׳’ ׳׳× ׳›׳ ׳”׳׳§׳•׳—׳•׳×
7. ׳¡׳˜׳˜׳™׳¡׳˜׳™׳§׳•׳× ׳”׳‘׳ ׳§
8. ׳”׳¨׳¦׳× ׳×׳¨׳’׳™׳ ׳§׳׳•׳–'׳¨ / ׳₪׳™׳׳˜׳¨ ׳׳“׳•׳’׳׳” (utils)
9. ׳™׳¦׳™׳׳”
=============================================\`);
    return rl.question('׳‘׳—׳¨ ׳₪׳¢׳•׳׳” (1-9): ');
}`,

    'bankFactory.js': `<span class="comment">// 2. ׳©׳׳‘ ׳©׳ ׳™: ׳™׳¦׳™׳¨׳× ׳”׳׳‘׳ ׳” ׳”׳‘׳¡׳™׳¡׳™ (Factory)</span>
export function createAccount() {
    let balance = 0;
    let isActive = true;

    return {
        getBalance: () => balance,
        getStatus: () => isActive,
        deposit: (amount) => {
            if (!isActive) throw new Error("Account is closed.");
            if (amount <= 0) throw new Error("Deposit amount must be positive.");
            balance += amount;
            return balance;
        },
        withdraw: (amount) => {
            if (!isActive) throw new Error("Account is closed.");
            if (amount <= 0) throw new Error("Withdraw amount must be positive.");
            if (amount > balance) throw new Error("Insufficient funds.");
            balance -= amount;
            return balance;
        },
        close: () => {
            isActive = false;
        }
    };
}

export function createCustomer(id, fullName, accountType) {
    const validTypes = ['Regular', 'Premium', 'Student'];
    if (!validTypes.includes(accountType)) {
        throw new Error('Invalid account type. Must be Regular, Premium, or Student.');
    }
    if (!fullName || fullName.trim() === '') {
        throw new Error('Full name cannot be empty.');
    }
    if (!id || id.trim() === '') {
        throw new Error('ID cannot be empty.');
    }

    const account = createAccount();

    return {
        id,
        fullName,
        accountType,
        account
    };
}`,

    'bankManager.js': `<span class="comment">// 3. ׳©׳׳‘ ׳©׳׳™׳©׳™: ׳׳ ׳”׳ ׳”׳‘׳ ׳§ - ׳׳ ׳”׳ ׳׳× ׳›׳ ׳”׳׳§׳•׳—׳•׳×</span>
import { createCustomer } from './bankFactory.js';

const customers = [];

export const bankManager = {
    addCustomer(id, fullName, accountType) {
        const customer = createCustomer(id, fullName, accountType);
        customers.push(customer);
        return customer;
    },
    
    getNextId() {
        if (customers.length === 0) return 100;
        const ids = customers.map(c => Number(c.id));
        return Math.max(...ids) + 1;
    },
    
    deposit(idOrName, amount) {
        const c = bankManager.searchCustomer(idOrName);
        if (!c) throw new Error("Customer not found.");
        return c.account.deposit(amount);
    },
    
    withdraw(idOrName, amount) {
        const c = bankManager.searchCustomer(idOrName);
        if (!c) throw new Error("Customer not found.");
        return c.account.withdraw(amount);
    },
    
    searchCustomer(query) {
        const q = query.trim().toLowerCase();
        return customers.find(c => c.id.toLowerCase() === q || c.fullName.toLowerCase() === q);
    },
    
    closeAccount(id) {
        const c = bankManager.searchCustomer(id);
        if (!c) throw new Error("Customer not found.");
        c.account.close();
    },
    
    showCustomers() {
        return customers;
    },
    
    showStatistics() {
        const totalCustomers = customers.length;
        const active = customers.filter(c => c.account.getStatus());
        const totalMoney = active.reduce((sum, c) => sum + c.account.getBalance(), 0);
        const average = active.length > 0 ? totalMoney / active.length : 0;
        const highest = active.reduce((max, c) => {
            const bal = c.account.getBalance();
            return bal > max ? bal : max;
        }, 0);
        return { totalCustomers, activeCount: active.length, totalMoney, average, highest };
    }
};`,

    'main.js': `<span class="comment">// 4. ׳©׳׳‘ ׳¨׳‘׳™׳¢׳™ ׳•׳׳—׳¨׳•׳: ׳”׳׳ ׳•׳¢ ׳©׳׳—׳‘׳¨ ׳”׳›׳</span>
import { bankManager } from './bankManager.js';
import { menu, formatCurrency } from './utils.js';
import rl from 'readline-sync';

function handleMenu(choice) {
    switch (choice.trim()) {
        case '1': {
            const id = rl.question('׳”׳›׳ ׳¡ ׳×׳¢׳•׳“׳× ׳–׳”׳•׳×: ');
            const name = rl.question('׳”׳›׳ ׳¡ ׳©׳ ׳׳׳: ');
            const type = rl.question('׳¡׳•׳’ ׳—׳©׳‘׳•׳ (Regular/Premium/Student): ');
            
            let isOnlyDigits = true;
            for (let i = 0; i < id.length; i++) {
                const char = id[i];
                if (char < "0" || char > "9") {
                    isOnlyDigits = false;
                }
            }
            const idNum = Number(id);
            if (!isOnlyDigits || idNum < 100) {
                console.log("׳©׳’׳™׳׳”: ׳׳–׳”׳” ׳—׳™׳™׳‘ ׳׳”׳™׳•׳× ׳׳¡׳₪׳¨ ׳’׳“׳•׳ ׳׳• ׳©׳•׳•׳” ׳-100!");
                break;
            }
            if (bankManager.searchCustomer(id)) {
                console.log("׳©׳’׳™׳׳”: ׳׳–׳”׳” ׳׳§׳•׳— ׳›׳‘׳¨ ׳§׳™׳™׳ ׳‘׳׳¢׳¨׳›׳×!");
                break;
            }
            try {
                bankManager.addCustomer(id, name, type);
                console.log(\`׳׳§׳•׳— \${name} ׳ ׳•׳¡׳£ ׳‘׳”׳¦׳׳—׳”!\`);
            } catch (e) {
                console.log('׳©׳’׳™׳׳”:', e.message);
            }
            break;
        }
        case '2': {
            const id = rl.question('׳”׳›׳ ׳¡ ׳×׳¢׳•׳“׳× ׳–׳”׳•׳× ׳׳• ׳©׳: ');
            const amount = rl.question('׳¡׳›׳•׳ ׳׳”׳₪׳§׳“׳”: ');
            try {
                const newBalance = bankManager.deposit(id, Number(amount));
                console.log(\`׳”׳”׳₪׳§׳“׳” ׳‘׳•׳¦׳¢׳”. ׳™׳×׳¨׳” ׳¢׳“׳›׳ ׳™׳×: ג‚×\${newBalance}\`);
            } catch (e) {
                console.log(\`׳©׳’׳™׳׳”:\`, e.message);
            }
            break;
        }
        case '3': {
            const id = rl.question('׳”׳›׳ ׳¡ ׳×׳¢׳•׳“׳× ׳–׳”׳•׳× ׳׳• ׳©׳: ');
            const amount = rl.question('׳¡׳›׳•׳ ׳׳׳©׳™׳›׳”: ');
            try {
                const newBalance = bankManager.withdraw(id, Number(amount));
                console.log(\`׳”׳׳©׳™׳›׳” ׳‘׳•׳¦׳¢׳”. ׳™׳×׳¨׳” ׳¢׳“׳›׳ ׳™׳×: ג‚×\${newBalance}\`);
            } catch (e) {
                console.log(\`׳©׳’׳™׳׳”:\`, e.message);
            }
            break;
        }
        case '4': {
            const query = rl.question('׳”׳›׳ ׳¡ ׳×׳¢׳•׳“׳× ׳–׳”׳•׳× ׳׳• ׳©׳ ׳׳—׳™׳₪׳•׳©: ');
            const c = bankManager.searchCustomer(query);
            if (c) {
                console.log(\`׳ ׳׳¦׳: \${c.fullName} | ׳×.׳–: \${c.id} | ׳¡׳•׳’: \${c.accountType} | ׳™׳×׳¨׳”: \${formatCurrency(c.account.getBalance())} | ׳₪׳¢׳™׳: \${c.account.getStatus()}\`);
            } else {
                console.log('׳׳§׳•׳— ׳׳ ׳ ׳׳¦׳.');
            }
            break;
        }
        case '5': {
            const id = rl.question('׳”׳›׳ ׳¡ ׳×׳¢׳•׳“׳× ׳–׳”׳•׳× ׳׳¡׳’׳™׳¨׳× ׳—׳©׳‘׳•׳: ');
            try {
                bankManager.closeAccount(id);
                console.log('׳—׳©׳‘׳•׳ ׳ ׳¡׳’׳¨ ׳‘׳”׳¦׳׳—׳”.');
            } catch (e) {
                console.log('׳©׳’׳™׳׳”:', e.message);
            }
            break;
        }
        case '6':
            console.table(bankManager.showCustomers());
            break;
        case '7': {
            const stats = bankManager.showStatistics();
            console.log(\`===== Statistics =====\`);
            console.log(\`Total Customers: \${stats.totalCustomers}\`);
            console.log(\`Active Accounts: \${stats.activeCount}\`);
            console.log(\`Total Money: \${formatCurrency(stats.totalMoney)}\`);
            console.log(\`Average Balance: \${formatCurrency(stats.average)}\`);
            console.log(\`Highest Balance: \${formatCurrency(stats.highest)}\`);
            break;
        }
        case '8': {
            console.log('׳”׳¨׳¦׳× ׳×׳¨׳’׳™׳ ׳§׳׳•׳–\\'׳¨ / ׳₪׳™׳׳˜׳¨ ׳׳“׳•׳’׳׳”...');
            break;
        }
        case '9':
            console.log('׳׳”׳×׳¨׳׳•׳×!');
            process.exit(0);
        default:
            console.log('׳‘׳—׳™׳¨׳” ׳׳ ׳×׳§׳™׳ ׳”.');
            break;
    }
}

while (true) {
    const choice = menu();
    handleMenu(choice);
}`,
    'package.json': `{
  "type": "module",
  "dependencies": {
    "readline-sync": "^1.4.10"
  }
}`,
    'package-lock.json': `{}`
};

const bankStoryMap = {
    'utils.js': [
        "׳”׳¡׳™׳₪׳•׳¨ ׳©׳׳ ׳• ׳׳×׳—׳™׳ ׳׳”׳‘׳¡׳™׳¡ ׳”׳§׳˜׳ ׳‘׳™׳•׳×׳¨. ׳׳₪׳ ׳™ ׳©׳‘׳•׳ ׳™׳ ׳‘׳ ׳§, ׳¦׳¨׳™׳ '׳›׳׳™ ׳¢׳‘׳•׳“׳”' (Utils). ׳׳׳” ׳”׳×׳—׳׳ ׳• ׳₪׳”? ׳›׳™ ׳׳׳• ׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳§׳˜׳ ׳•׳× ׳•׳¢׳¦׳׳׳™׳•׳× ׳©׳׳ ׳×׳׳•׳™׳•׳× ׳‘׳›׳׳•׳.",
        "׳׳™׳™׳‘׳׳™׳ ׳׳× ׳¡׳₪׳¨׳™׳™׳× readline-sync ׳›׳™ ׳”׳™׳ ׳–׳• ׳©׳×׳׳₪׳©׳¨ ׳׳ ׳• ׳׳¢׳¦׳•׳¨ ׳•׳׳”׳׳×׳™׳ ׳׳‘׳—׳™׳¨׳× ׳”׳׳©׳×׳׳© ׳‘׳×׳₪׳¨׳™׳˜.",
        "",
        "׳₪׳•׳ ׳§׳¦׳™׳” ׳§׳˜׳ ׳˜׳ ׳” ׳©׳׳•׳§׳—׳× ׳׳¡׳₪׳¨ (׳׳׳©׳ 5) ׳•׳”׳•׳₪׳›׳× ׳׳•׳×׳• ׳׳˜׳§׳¡׳˜ ׳™׳₪׳” ׳¢׳ ׳©׳§׳׳™׳ ׳•׳ ׳§׳•׳“׳” ׳¢׳©׳¨׳•׳ ׳™׳× (ג‚×5.00). ׳”׳׳™׳׳” export ׳׳•׳׳¨׳× ׳©׳§׳‘׳¦׳™׳ ׳׳—׳¨׳™׳ ׳™׳•׳›׳׳• ׳׳”׳©׳×׳׳© ׳‘׳”.",
        "",
        "׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳¢׳–׳¨ ׳”׳‘׳•׳“׳§׳× ׳׳ ׳׳¡׳₪׳¨ ׳”׳•׳ ׳—׳™׳•׳‘׳™ (׳’׳“׳•׳ ׳-0).",
        "׳׳—׳–׳™׳¨׳” true ׳׳ ׳—׳™׳•׳‘׳™, false ׳׳—׳¨׳×.",
        "",
        "",
        "׳•׳›׳׳ ׳׳ ׳—׳ ׳• ׳׳’׳“׳™׳¨׳™׳ ׳׳× ׳”-menu! ׳׳׳” ׳₪׳”? ׳›׳™ ׳×׳₪׳¨׳™׳˜ ׳”׳•׳ ׳‘׳¡׳ ׳”׳›׳ ׳›׳׳™ ׳©׳׳¦׳™׳’ ׳˜׳§׳¡׳˜ ׳׳׳©׳×׳׳© ׳•׳׳•׳¡׳£ ׳׳× ׳”׳‘׳—׳™׳¨׳” ׳©׳׳•.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳׳× ׳”׳×׳₪׳¨׳™׳˜ ׳׳׳¡׳ ׳‘׳¦׳•׳¨׳” ׳™׳₪׳”.",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "׳׳׳×׳™׳ ׳™׳ ׳׳§׳׳˜ ׳”׳‘׳—׳™׳¨׳” ׳׳”׳׳©׳×׳׳© ׳•׳׳—׳–׳™׳¨׳™׳ ׳׳× ׳”׳×׳©׳•׳‘׳” ׳›׳₪׳™ ׳©׳”׳™׳.",
        ""
    ],
    'bankFactory.js': [
        "׳₪׳¡ ׳”׳™׳™׳¦׳•׳¨ ׳©׳׳ ׳• (Factory). ׳₪׳” ׳׳ ׳• ׳׳™׳™׳¦׳¨׳™׳ ׳׳•׳‘׳™׳™׳§׳˜ ׳©׳ ׳—׳©׳‘׳•׳ ׳‘׳ ׳§ ׳•׳©׳ ׳׳§׳•׳—.",
        "׳₪׳•׳ ׳§׳¦׳™׳” ׳©׳׳™׳™׳¦׳¨׳× ׳—׳©׳‘׳•׳ ׳‘׳ ׳§ ׳—׳“׳©.",
        "׳™׳×׳¨׳× ׳”׳—׳©׳‘׳•׳ ׳ ׳©׳׳¨׳× ׳›׳׳©׳×׳ ׳” ׳׳§׳•׳׳™ (balance) ׳‘׳×׳•׳ Closure ׳›׳“׳™ ׳©׳׳ ׳×׳”׳™׳” ׳’׳™׳©׳” ׳™׳©׳™׳¨׳” ׳׳׳™׳” ׳׳‘׳—׳•׳¥.",
        "׳“׳’׳ ׳₪׳¢׳™׳׳•׳× ׳”׳—׳©׳‘׳•׳ (isActive) - ׳׳•׳’׳“׳¨ ׳’׳ ׳”׳•׳ ׳›׳׳©׳×׳ ׳” ׳׳§׳•׳׳™ ׳¡׳•׳“׳™.",
        "",
        "׳׳—׳–׳™׳¨׳™׳ ׳׳•׳‘׳™׳™׳§׳˜ ׳©׳׳›׳™׳ ׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳’׳™׳©׳” ׳•׳¢׳“׳›׳•׳ (Getters/Setters) ׳‘׳׳‘׳“.",
        "׳₪׳•׳ ׳§׳¦׳™׳” ׳׳§׳‘׳׳× ׳”׳™׳×׳¨׳” ׳”׳ ׳•׳›׳—׳™׳×.",
        "׳₪׳•׳ ׳§׳¦׳™׳” ׳׳§׳‘׳׳× ׳¡׳˜׳˜׳•׳¡ ׳”׳₪׳¢׳™׳׳•׳× ׳©׳ ׳”׳—׳©׳‘׳•׳ (׳₪׳¢׳™׳/׳¡׳’׳•׳¨).",
        "׳₪׳¢׳•׳׳× ׳”׳₪׳§׳“׳× ׳›׳¡׳£ ׳׳—׳©׳‘׳•׳.",
        "׳•׳׳™׳“׳¦׳™׳”: ׳׳ ׳”׳—׳©׳‘׳•׳ ׳¡׳’׳•׳¨, ׳ ׳–׳¨׳•׳§ ׳©׳’׳™׳׳” ׳׳×׳׳™׳׳”.",
        "׳•׳׳™׳“׳¦׳™׳”: ׳׳ ׳ ׳™׳×׳ ׳׳”׳₪׳§׳™׳“ ׳¡׳›׳•׳ ׳©׳׳™׳׳™ ׳׳• ׳׳₪׳¡.",
        "׳¢׳“׳›׳•׳ ׳”׳™׳×׳¨׳” ׳”׳ ׳¡׳×׳¨׳×.",
        "׳׳—׳–׳™׳¨׳™׳ ׳׳× ׳”׳™׳×׳¨׳” ׳”׳—׳“׳©׳”.",
        "",
        "׳₪׳¢׳•׳׳× ׳׳©׳™׳›׳× ׳›׳¡׳£ ׳׳”׳—׳©׳‘׳•׳.",
        "׳•׳׳™׳“׳¦׳™׳”: ׳׳ ׳”׳—׳©׳‘׳•׳ ׳¡׳’׳•׳¨, ׳ ׳–׳¨׳•׳§ ׳©׳’׳™׳׳”.",
        "׳•׳׳™׳“׳¦׳™׳”: ׳׳ ׳ ׳™׳×׳ ׳׳׳©׳•׳ ׳¡׳›׳•׳ ׳©׳׳™׳׳™ ׳׳• ׳׳₪׳¡.",
        "׳•׳׳™׳“׳¦׳™׳”: ׳׳ ׳ ׳™׳×׳ ׳׳׳©׳•׳ ׳™׳•׳×׳¨ ׳׳”׳™׳×׳¨׳” ׳”׳§׳™׳™׳׳× ׳‘׳—׳©׳‘׳•׳.",
        "׳¢׳“׳›׳•׳ ׳”׳™׳×׳¨׳” ׳”׳ ׳¡׳×׳¨׳×.",
        "׳׳—׳–׳™׳¨׳™׳ ׳׳× ׳”׳™׳×׳¨׳” ׳”׳—׳“׳©׳”.",
        "",
        "׳₪׳¢׳•׳׳” ׳׳¡׳’׳™׳¨׳× ׳”׳—׳©׳‘׳•׳ ׳׳¦׳׳™׳×׳•׳×.",
        "׳׳¢׳‘׳™׳¨׳™׳ ׳׳× ׳“׳’׳ ׳”׳₪׳¢׳™׳׳•׳× ׳-false.",
        "",
        "",
        "",
        "",
        "׳₪׳•׳ ׳§׳¦׳™׳” ׳©׳׳™׳™׳¦׳¨׳× ׳׳§׳•׳— ׳‘׳•׳“׳“ ׳”׳׳›׳™׳ ׳׳–׳”׳”, ׳©׳ ׳׳׳, ׳¡׳•׳’ ׳—׳©׳‘׳•׳ ׳•׳—׳©׳‘׳•׳ ׳‘׳ ׳§ ׳׳•׳‘׳ ׳”.",
        "׳¨׳©׳™׳׳” ׳©׳ ׳¡׳•׳’׳™ ׳—׳©׳‘׳•׳ ׳•׳× ׳—׳•׳§׳™׳™׳ ׳‘׳׳¢׳¨׳›׳× (Regular, Premium, Student).",
        "׳•׳׳™׳“׳¦׳™׳”: ׳׳ ׳¡׳•׳’ ׳”׳—׳©׳‘׳•׳ ׳׳™׳ ׳• ׳—׳•׳§׳™, ׳ ׳–׳¨׳•׳§ ׳©׳’׳™׳׳”.",
        "",
        "",
        "׳•׳׳™׳“׳¦׳™׳”: ׳׳ ׳”׳©׳ ׳”׳׳׳ ׳¨׳™׳§ ׳׳• ׳׳ ׳×׳§׳™׳, ׳ ׳–׳¨׳•׳§ ׳©׳’׳™׳׳”.",
        "",
        "",
        "׳•׳׳™׳“׳¦׳™׳”: ׳׳ ׳׳–׳”׳” ׳”׳׳§׳•׳— ׳¨׳™׳§, ׳ ׳–׳¨׳•׳§ ׳©׳’׳™׳׳”.",
        "",
        "",
        "",
        "׳׳₪׳¢׳™׳׳™׳ ׳׳× createAccount() ׳›׳“׳™ ׳׳™׳™׳¦׳¨ ׳—׳©׳‘׳•׳ ׳‘׳ ׳§ ׳™׳™׳—׳•׳“׳™ ׳׳׳§׳•׳— ׳–׳”.",
        "",
        "׳׳—׳–׳™׳¨׳™׳ ׳׳•׳‘׳™׳™׳§׳˜ ׳׳§׳•׳— ׳©׳׳ ׳•׳׳•׳‘׳ ׳”.",
        "׳׳–׳”׳” ׳”׳׳§׳•׳—.",
        "׳©׳ ׳׳׳.",
        "׳¡׳•׳’ ׳”׳—׳©׳‘׳•׳.",
        "׳—׳©׳‘׳•׳ ׳”׳‘׳ ׳§ ׳”׳׳•׳‘׳ ׳” ׳©׳׳•.",
        "",
        ""
    ],
    'bankManager.js': [
        "׳׳ ׳”׳ ׳”׳‘׳ ׳§. ׳”׳×׳‘׳ ׳™׳•׳× ׳™׳•׳“׳¢׳•׳× ׳׳™׳™׳¦׳¨ ׳׳§׳•׳— ׳‘׳•׳“׳“, ׳׳‘׳ ׳”׳׳ ׳”׳ ׳׳ ׳”׳ ׳׳× ׳¨׳©׳™׳׳× ׳›׳ ׳”׳׳§׳•׳—׳•׳× ׳‘׳׳¢׳¨׳›׳×.",
        "׳׳™׳™׳‘׳׳™׳ ׳׳× ׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳”׳™׳™׳¦׳•׳¨ ׳©׳ ׳”׳׳§׳•׳—.",
        "",
        "׳–׳”׳• ׳”׳׳‘ ׳©׳ ׳”׳‘׳ ׳§: ׳׳¢׳¨׳ customers ׳©׳‘׳• ׳ ׳׳—׳¡׳ ׳›׳ ׳׳§׳•׳— ׳©׳ ׳™׳™׳¦׳¨. ׳©׳™׳ ׳׳‘: ׳”׳•׳ ׳׳•׳’׳“׳¨ ׳›׳׳©׳×׳ ׳” ׳׳§׳•׳׳™ ׳‘׳§׳•׳‘׳¥ ׳׳׳ ׳©׳™׳׳•׳© ׳‘-this ׳׳• OOP ׳׳•׳¨׳›׳‘.",
        "",
        "׳׳™׳™׳¦׳׳™׳ ׳׳•׳‘׳™׳™׳§׳˜ ׳׳—׳“ ׳™׳—׳™׳“ ׳©׳׳ ׳”׳ ׳׳× ׳”׳›׳ (Singleton pattern).",
        "׳₪׳¢׳•׳׳× ׳”׳•׳¡׳₪׳”: ׳”׳׳ ׳”׳ ׳™׳§׳‘׳ ׳׳× ׳₪׳¨׳˜׳™ ׳”׳׳§׳•׳— ׳”׳—׳“׳©...",
        "׳”׳׳ ׳”׳ ׳™׳§׳¨׳ ׳-Factory, ׳™׳׳¡׳•׳¨ ׳׳• ׳׳× ׳”׳ ׳×׳•׳ ׳™׳, ׳•׳™׳§׳‘׳ ׳—׳–׳¨׳” ׳׳§׳•׳— ׳˜׳¨׳™.",
        "׳”׳׳ ׳”׳ ׳“׳•׳—׳£ (push) ׳׳× ׳”׳׳§׳•׳— ׳׳׳¢׳¨׳ ׳”׳׳§׳•׳׳™.",
        "׳•׳׳—׳–׳™׳¨ ׳׳•׳×׳•.",
        "",
        "",
        "׳₪׳•׳ ׳§׳¦׳™׳™׳× ׳¢׳–׳¨ ׳׳—׳™׳©׳•׳‘ ׳׳–׳”׳” ׳¢׳•׳§׳‘ ׳׳•׳˜׳•׳׳˜׳™ ׳׳׳§׳•׳— ׳”׳‘׳.",
        "׳׳ ׳׳™׳ ׳׳§׳•׳—׳•׳× ׳¢׳“׳™׳™׳, ׳ ׳×׳—׳™׳ ׳׳׳¡׳₪׳¨ 100.",
        "׳ ׳©׳×׳׳© ׳‘-map ׳©׳׳׳“׳ ׳• ׳›׳“׳™ ׳׳™׳¦׳•׳¨ ׳׳¢׳¨׳ ׳—׳“׳© ׳”׳׳›׳™׳ ׳¨׳§ ׳׳× ׳”׳׳–׳”׳™׳ ׳›׳׳¡׳₪׳¨׳™׳ ׳×׳§׳™׳ ׳™׳.",
        "׳ ׳׳¦׳ ׳׳× ׳”׳׳–׳”׳” ׳”׳’׳‘׳•׳” ׳‘׳™׳•׳×׳¨ ׳‘׳׳׳¦׳¢׳•׳× Math.max ׳•׳׳•׳₪׳¨׳˜׳•׳¨ ׳”-Spread (...), ׳•׳ ׳•׳¡׳™׳£ 1.",
        "",
        "",
        "׳₪׳¢׳•׳׳× ׳”׳₪׳§׳“׳” ׳“׳¨׳ ׳”׳׳ ׳”׳.",
        "׳׳—׳₪׳©׳™׳ ׳׳× ׳”׳׳§׳•׳— ׳׳₪׳™ ׳׳–׳”׳” ׳׳• ׳©׳.",
        "׳׳ ׳”׳׳§׳•׳— ׳׳ ׳ ׳׳¦׳, ׳ ׳–׳¨׳•׳§ ׳©׳’׳™׳׳”.",
        "׳׳₪׳¢׳™׳׳™׳ ׳׳× ׳׳×׳•׳“׳× ׳”׳”׳₪׳§׳“׳” ׳‘׳—׳©׳‘׳•׳ ׳•׳׳—׳–׳™׳¨׳™׳ ׳׳× ׳”׳™׳×׳¨׳” ׳”׳¢׳“׳›׳ ׳™׳×.",
        "",
        "",
        "׳₪׳¢׳•׳׳× ׳׳©׳™׳›׳” ׳“׳¨׳ ׳”׳׳ ׳”׳.",
        "׳׳—׳₪׳©׳™׳ ׳׳× ׳”׳׳§׳•׳— ׳׳₪׳™ ׳׳–׳”׳” ׳׳• ׳©׳.",
        "׳׳ ׳”׳׳§׳•׳— ׳׳ ׳ ׳׳¦׳, ׳ ׳–׳¨׳•׳§ ׳©׳’׳™׳׳”.",
        "׳׳₪׳¢׳™׳׳™׳ ׳׳× ׳׳×׳•׳“׳× ׳”׳׳©׳™׳›׳” ׳‘׳—׳©׳‘׳•׳ ׳•׳׳—׳–׳™׳¨׳™׳ ׳׳× ׳”׳™׳×׳¨׳” ׳”׳¢׳“׳›׳ ׳™׳×.",
        "",
        "",
        "׳—׳™׳₪׳•׳© ׳׳§׳•׳— (case-insensitive) ׳׳₪׳™ ׳׳–׳”׳” ׳׳• ׳©׳ ׳׳׳.",
        "׳ ׳ ׳§׳” ׳¨׳•׳•׳—׳™׳ ׳‘׳§׳¦׳•׳•׳× ׳•׳ ׳”׳₪׳•׳ ׳׳׳•׳×׳™׳•׳× ׳§׳˜׳ ׳•׳× ׳‘׳¢׳–׳¨׳× trim ׳•-toLowerCase.",
        "׳ ׳©׳×׳׳© ׳‘-find ׳©׳׳׳“׳ ׳• ׳›׳“׳™ ׳׳׳¦׳•׳ ׳”׳×׳׳׳” ׳׳•׳©׳׳׳×.",
        "",
        "",
        "׳¡׳’׳™׳¨׳× ׳—׳©׳‘׳•׳ ׳׳§׳•׳—.",
        "׳׳—׳₪׳©׳™׳ ׳׳× ׳”׳׳§׳•׳— ׳‘׳׳¢׳¨׳›׳×.",
        "׳׳ ׳׳ ׳ ׳׳¦׳, ׳ ׳–׳¨׳•׳§ ׳©׳’׳™׳׳”.",
        "׳׳₪׳¢׳™׳׳™׳ ׳׳× ׳׳×׳•׳“׳× ׳”׳¡׳’׳™׳¨׳” ׳©׳ ׳”׳—׳©׳‘׳•׳.",
        "",
        "",
        "׳₪׳¢׳•׳׳” ׳₪׳©׳•׳˜׳” ׳©׳׳—׳–׳™׳¨׳” ׳׳× ׳›׳ ׳׳¢׳¨׳ ׳”׳׳§׳•׳—׳•׳× ׳׳”׳¦׳’׳”.",
        "׳׳—׳–׳™׳¨׳™׳ ׳׳× ׳”׳׳¢׳¨׳.",
        "",
        "",
        "׳¡׳˜׳˜׳™׳¡׳˜׳™׳§׳•׳× (׳׳•׳₪׳¦׳™׳” 7): ׳׳¦׳™׳’ ׳“׳•׳— ׳ ׳×׳•׳ ׳™׳ ׳׳׳ ׳¢׳ ׳›׳ ׳”׳‘׳ ׳§.",
        "׳¡׳•׳₪׳¨ ׳׳× ׳¡׳ ׳›׳ ׳”׳׳§׳•׳—׳•׳× ׳‘׳‘׳ ׳§ (׳₪׳¢׳™׳׳™׳ ׳•׳©׳׳™׳ ׳ ׳₪׳¢׳™׳׳™׳).",
        "׳׳©׳×׳׳©׳™׳ ׳‘-filter ׳›׳“׳™ ׳׳¡׳ ׳ ׳•׳׳©׳׳•׳¨ ׳¨׳§ ׳׳× ׳”׳׳§׳•׳—׳•׳× ׳©׳—׳©׳‘׳•׳ ׳ ׳₪׳¢׳™׳.",
        "׳׳©׳×׳׳©׳™׳ ׳‘-reduce ׳›׳“׳™ ׳׳¡׳›׳ ׳׳× ׳›׳ ׳”׳™׳×׳¨׳•׳× ׳©׳ ׳”׳—׳©׳‘׳•׳ ׳•׳× ׳”׳₪׳¢׳™׳׳™׳.",
        "׳׳—׳©׳‘׳™׳ ׳™׳×׳¨׳” ׳׳׳•׳¦׳¢׳× ׳׳—׳©׳‘׳•׳ ׳₪׳¢׳™׳.",
        "׳׳©׳×׳׳©׳™׳ ׳‘-reduce ׳ ׳•׳¡׳£ ׳›׳“׳™ ׳׳׳¦׳•׳ ׳׳× ׳”׳™׳×׳¨׳” ׳”׳’׳‘׳•׳”׳” ׳‘׳™׳•׳×׳¨ ׳‘׳‘׳ ׳§.",
        "׳©׳•׳׳₪׳™׳ ׳׳× ׳”׳™׳×׳¨׳” ׳©׳ ׳”׳—׳©׳‘׳•׳ ׳”׳ ׳•׳›׳—׳™.",
        "׳׳ ׳”׳™׳ ׳’׳“׳•׳׳” ׳׳”׳׳§׳¡׳™׳׳•׳ ׳©׳׳¦׳׳ ׳• ׳¢׳“ ׳›׳”, ׳ ׳—׳–׳™׳¨ ׳׳•׳×׳”.",
        "",
        "׳׳—׳–׳™׳¨׳™׳ ׳׳•׳‘׳™׳™׳§׳˜ ׳¢׳ ׳›׳ ׳”׳ ׳×׳•׳ ׳™׳ ׳”׳¡׳˜׳˜׳™׳¡׳˜׳™׳™׳.",
        "",
        ""
    ],
    'main.js': [
        "׳—׳׳•׳ ׳”׳¨׳׳•׳•׳”. ׳₪׳” ׳”׳›׳ ׳׳×׳—׳‘׳¨. ׳׳׳” ׳”׳×׳—׳׳ ׳• ׳“׳•׳•׳§׳ ׳‘׳¡׳•׳£? ׳›׳™ ׳‘׳“׳¨׳ ׳›׳׳ ׳׳×׳›׳ ׳ ׳™׳ ׳§׳•׳“׳ ׳׳× ׳”׳›׳׳™׳ (Utils), ׳׳× ׳”׳‘׳¡׳™׳¡ (Factory), ׳׳× ׳”׳ ׳™׳”׳•׳ (Manager), ׳•׳¨׳§ ׳‘׳¡׳•׳£ ׳׳× ׳”׳׳׳©׳§.",
        "׳׳™׳™׳‘׳׳™׳ ׳׳× ׳׳ ׳”׳ ׳”׳‘׳ ׳§ ׳›׳“׳™ ׳©׳ ׳•׳›׳ ׳׳₪׳§׳•׳“ ׳¢׳׳™׳• ׳׳” ׳׳¢׳©׳•׳×.",
        "׳׳™׳™׳‘׳׳™׳ ׳׳× ׳”׳×׳₪׳¨׳™׳˜ ׳•׳׳× ׳׳¢׳¦׳‘ ׳”׳׳˜׳‘׳¢ ׳©׳‘׳ ׳™׳ ׳• ׳‘׳§׳•׳‘׳¥ ׳”׳¢׳–׳¨.",
        "׳׳™׳™׳‘׳׳™׳ ׳׳× ׳¡׳₪׳¨׳™׳™׳× ׳”׳§׳׳˜.",
        "",
        "׳›׳׳ ׳‘׳ ׳™׳ ׳• ׳׳× ׳”׳₪׳•׳ ׳§׳¦׳™׳” handleMenu ׳‘׳“׳™׳•׳§ ׳›׳׳• ׳©׳¢׳©׳™׳× ׳‘׳§׳•׳“ ׳©׳׳! ׳”׳™׳ ׳׳§׳‘׳׳× ׳׳× ׳”׳‘׳—׳™׳¨׳”.",
        "׳ ׳©׳×׳׳© ׳‘-switch-case ׳›׳“׳™ ׳׳ ׳×׳‘ ׳›׳ ׳‘׳—׳™׳¨׳” ׳׳₪׳¢׳•׳׳” ׳”׳׳×׳׳™׳׳”.",
        "׳׳§׳¨׳” 1: ׳”׳•׳¡׳₪׳× ׳׳§׳•׳— ׳—׳“׳©.",
        "׳§׳•׳׳˜׳™׳ ׳×׳¢׳•׳“׳× ׳–׳”׳•׳×.",
        "׳§׳•׳׳˜׳™׳ ׳©׳ ׳׳׳.",
        "׳§׳•׳׳˜׳™׳ ׳¡׳•׳’ ׳—׳©׳‘׳•׳ (Regular/Premium/Student).",
        "",
        "׳•׳•׳׳™׳“׳¦׳™׳”: ׳ ׳•׳•׳“׳ ׳©׳›׳ ׳”׳×׳•׳•׳™׳ ׳©׳”׳•׳§׳׳“׳• ׳‘׳׳–׳”׳” ׳”׳ ׳¡׳₪׳¨׳•׳× ׳‘׳׳‘׳“.",
        "׳׳•׳׳׳× ׳¡׳¨׳™׳§׳× ׳×׳•׳•׳™׳ ׳‘׳¡׳™׳¡׳™׳×.",
        "׳‘׳•׳“׳§׳™׳ ׳׳ ׳”׳×׳• ׳”׳•׳ ׳¡׳₪׳¨׳” ׳×׳§׳™׳ ׳”.",
        "",
        "",
        "",
        "",
        "׳׳׳™׳¨׳™׳ ׳׳׳¡׳₪׳¨.",
        "׳׳ ׳™׳© ׳×׳•׳•׳™׳ ׳©׳׳™׳ ׳ ׳¡׳₪׳¨׳•׳×, ׳׳• ׳©׳”׳׳¡׳₪׳¨ ׳§׳˜׳ ׳-100...",
        "׳ ׳“׳₪׳™׳¡ ׳”׳•׳“׳¢׳× ׳©׳’׳™׳׳”.",
        "׳•׳ ׳¢׳¦׳•׳¨ ׳׳× ׳”׳¨׳™׳¦׳” ׳©׳ ׳׳§׳¨׳” ׳–׳” ׳‘׳¢׳–׳¨׳× break.",
        "",
        "׳ ׳‘׳“׳•׳§ ׳‘׳¢׳–׳¨׳× ׳”׳׳ ׳”׳ ׳׳ ׳”׳׳–׳”׳” ׳”׳–׳” ׳›׳‘׳¨ ׳§׳™׳™׳ ׳‘׳׳¢׳¨׳›׳×.",
        "׳ ׳“׳₪׳™׳¡ ׳©׳’׳™׳׳” ׳׳ ׳§׳™׳™׳.",
        "׳•׳ ׳¢׳¦׳¨.",
        "",
        "׳ ׳ ׳¡׳” ׳׳™׳¦׳•׳¨ ׳׳× ׳”׳׳§׳•׳—.",
        "׳©׳•׳׳—׳™׳ ׳׳׳ ׳”׳ ׳׳× ׳”׳₪׳¨׳˜׳™׳ ׳›׳“׳™ ׳׳™׳¦׳•׳¨ ׳•׳׳©׳׳•׳¨.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳”׳•׳“׳¢׳× ׳”׳¦׳׳—׳”.",
        "׳‘׳׳™׳“׳” ׳•׳ ׳–׳¨׳§׳” ׳©׳’׳™׳׳” ׳‘׳׳—׳“ ׳”׳׳₪׳¢׳׳™׳...",
        "׳ ׳“׳₪׳™׳¡ ׳׳•׳×׳” ׳‘׳¦׳•׳¨׳” ׳׳¡׳•׳“׳¨׳×.",
        "",
        "׳¡׳™׳•׳ ׳”׳׳§׳¨׳” ׳”׳¨׳׳©׳•׳.",
        "",
        "׳׳§׳¨׳” 2: ׳”׳₪׳§׳“׳× ׳›׳¡׳£.",
        "׳§׳•׳׳˜׳™׳ ׳׳–׳”׳” ׳׳• ׳©׳ ׳©׳ ׳׳§׳•׳—.",
        "׳§׳•׳׳˜׳™׳ ׳¡׳›׳•׳ ׳׳”׳₪׳§׳“׳”.",
        "׳׳ ׳¡׳™׳ ׳׳‘׳¦׳¢ ׳׳× ׳”׳”׳₪׳§׳“׳”.",
        "׳§׳•׳¨׳׳™׳ ׳׳׳×׳•׳“׳” ׳©׳ ׳”׳׳ ׳”׳ ׳•׳׳§׳‘׳׳™׳ ׳™׳×׳¨׳” ׳—׳“׳©׳”.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳”׳•׳“׳¢׳× ׳”׳¦׳׳—׳” ׳¢׳ ׳”׳™׳×׳¨׳” ׳”׳׳¢׳•׳“׳›׳ ׳×.",
        "׳‘׳׳™׳“׳” ׳•׳”׳׳§׳•׳— ׳׳ ׳ ׳׳¦׳ ׳׳• ׳©׳”׳—׳©׳‘׳•׳ ׳¡׳’׳•׳¨...",
        "׳ ׳“׳₪׳™׳¡ ׳׳× ׳”׳©׳’׳™׳׳”.",
        "",
        "׳¡׳™׳•׳ ׳”׳׳§׳¨׳”.",
        "",
        "׳׳§׳¨׳” 3: ׳׳©׳™׳›׳× ׳›׳¡׳£.",
        "׳§׳•׳׳˜׳™׳ ׳׳–׳”׳” ׳׳• ׳©׳.",
        "׳§׳•׳׳˜׳™׳ ׳¡׳›׳•׳ ׳׳׳©׳™׳›׳”.",
        "׳׳ ׳¡׳™׳ ׳׳‘׳¦׳¢ ׳׳× ׳”׳׳©׳™׳›׳”.",
        "׳§׳•׳¨׳׳™׳ ׳׳׳×׳•׳“׳” ׳©׳ ׳”׳׳ ׳”׳ ׳•׳׳§׳‘׳׳™׳ ׳™׳×׳¨׳” ׳—׳“׳©׳”.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳™׳×׳¨׳” ׳¢׳“׳›׳ ׳™׳×.",
        "׳‘׳׳™׳“׳” ׳•׳׳™׳ ׳׳¡׳₪׳™׳§ ׳›׳¡׳£ ׳׳• ׳©׳”׳—׳©׳‘׳•׳ ׳¡׳’׳•׳¨...",
        "׳ ׳“׳₪׳™׳¡ ׳׳× ׳”׳©׳’׳™׳׳”.",
        "",
        "׳¡׳™׳•׳ ׳”׳׳§׳¨׳”.",
        "",
        "׳׳§׳¨׳” 4: ׳—׳™׳₪׳•׳© ׳׳§׳•׳—.",
        "׳§׳•׳׳˜׳™׳ ׳׳–׳”׳” ׳׳• ׳©׳ ׳׳—׳™׳₪׳•׳©.",
        "׳׳‘׳§׳©׳™׳ ׳׳”׳׳ ׳”׳ ׳׳—׳₪׳©.",
        "׳׳ ׳׳¦׳׳ ׳• ׳׳× ׳”׳׳§׳•׳—...",
        "׳׳“׳₪׳™׳¡׳™׳ ׳׳× ׳›׳ ׳”׳₪׳¨׳˜׳™׳ ׳©׳׳• ׳‘׳¦׳•׳¨׳” ׳™׳₪׳” ׳•׳׳¡׳•׳“׳¨׳×, ׳›׳•׳׳ ׳¡׳˜׳˜׳•׳¡ ׳”׳₪׳¢׳™׳׳•׳× ׳©׳ ׳”׳—׳©׳‘׳•׳.",
        "׳׳—׳¨׳×, ׳׳ ׳׳ ׳׳¦׳׳ ׳•...",
        "׳׳“׳₪׳™׳¡׳™׳ ׳”׳•׳“׳¢׳× '׳׳ ׳ ׳׳¦׳'.",
        "",
        "׳¡׳™׳•׳ ׳”׳׳§׳¨׳”.",
        "",
        "׳׳§׳¨׳” 5: ׳¡׳’׳™׳¨׳× ׳—׳©׳‘׳•׳.",
        "׳§׳•׳׳˜׳™׳ ׳׳–׳”׳” ׳׳¡׳’׳™׳¨׳× ׳—׳©׳‘׳•׳.",
        "׳׳ ׳¡׳™׳ ׳׳¡׳’׳•׳¨.",
        "׳§׳•׳¨׳׳™׳ ׳׳₪׳¢׳•׳׳× ׳”׳׳ ׳”׳ ׳׳¡׳’׳•׳¨ ׳׳× ׳”׳—׳©׳‘׳•׳.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳”׳•׳“׳¢׳× ׳”׳¦׳׳—׳”.",
        "׳‘׳׳™׳“׳” ׳•׳™׳© ׳©׳’׳™׳׳”...",
        "׳ ׳“׳₪׳™׳¡ ׳׳•׳×׳”.",
        "",
        "׳¡׳™׳•׳ ׳”׳׳§׳¨׳”.",
        "",
        "׳׳§׳¨׳” 6: ׳”׳¦׳’׳× ׳›׳׳ ׳”׳׳§׳•׳—׳•׳×.",
        "׳׳©׳×׳׳©׳™׳ ׳‘-console.table ׳©׳׳׳“׳ ׳• ׳›׳“׳™ ׳׳”׳“׳₪׳™׳¡ ׳˜׳‘׳׳” ׳׳•׳‘׳ ׳™׳× ׳©׳ ׳›׳ ׳”׳׳§׳•׳—׳•׳×!",
        "׳¡׳™׳•׳ ׳”׳׳§׳¨׳”.",
        "׳׳§׳¨׳” 7: ׳¡׳˜׳˜׳™׳¡׳˜׳™׳§׳•׳× ׳”׳‘׳ ׳§.",
        "׳׳‘׳§׳©׳™׳ ׳׳”׳׳ ׳”׳ ׳׳× ׳׳•׳‘׳™׳™׳§׳˜ ׳”׳¡׳˜׳˜׳™׳¡׳˜׳™׳§׳•׳×.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳›׳•׳×׳¨׳× ׳׳“׳•׳—.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳׳× ׳¡׳ ׳”׳׳§׳•׳—׳•׳×.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳׳× ׳”׳—׳©׳‘׳•׳ ׳•׳× ׳”׳₪׳¢׳™׳׳™׳.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳׳× ׳¡׳ ׳”׳›׳¡׳£ ׳”׳›׳׳׳™ ׳‘׳‘׳ ׳§.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳׳× ׳™׳×׳¨׳× ׳”׳—׳©׳‘׳•׳ ׳”׳׳׳•׳¦׳¢׳×.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳׳× ׳”׳™׳×׳¨׳” ׳”׳’׳‘׳•׳”׳” ׳‘׳™׳•׳×׳¨ ׳©׳ ׳׳¦׳׳”.",
        "׳¡׳™׳•׳ ׳”׳׳§׳¨׳”.",
        "",
        "׳׳§׳¨׳” 8: ׳”׳¨׳¦׳× ׳×׳¨׳’׳™׳ ׳§׳׳•׳–'׳¨ ׳׳“׳•׳’׳׳”.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳”׳•׳“׳¢׳× ׳”׳¨׳¦׳”.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳”׳•׳“׳¢׳× ׳”׳¨׳¦׳”.",
        "׳¡׳™׳•׳ ׳”׳׳§׳¨׳”.",
        "",
        "׳׳§׳¨׳” 9: ׳™׳¦׳™׳׳” ׳׳”׳×׳•׳›׳ ׳™׳×.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳”׳•׳“׳¢׳× ׳₪׳¨׳™׳“׳”.",
        "׳§׳•׳¨׳׳™׳ ׳-process.exit ׳›׳“׳™ ׳׳¡׳™׳™׳ ׳׳× ׳”׳×׳”׳׳™׳.",
        "׳‘׳¨׳™׳¨׳× ׳׳—׳“׳: ׳׳ ׳”׳•׳§׳׳“ ׳׳©׳”׳• ׳׳—׳¨.",
        "׳׳“׳₪׳™׳¡׳™׳ ׳”׳•׳“׳¢׳× ׳‘׳—׳™׳¨׳” ׳׳ ׳×׳§׳™׳ ׳”.",
        "׳¡׳™׳•׳ ׳”׳׳‘׳ ׳”.",
        "",
        "",
        "",
        "׳”׳׳•׳׳׳” ׳”׳¨׳׳©׳™׳× ׳©׳ ׳”׳×׳•׳›׳ ׳™׳× - while(true) ׳׳™׳ ׳¡׳•׳₪׳™׳×.",
        "׳§׳•׳¨׳׳™׳ ׳׳₪׳•׳ ׳§׳¦׳™׳” menu() ׳©׳׳¦׳™׳’׳” ׳׳× ׳”׳×׳₪׳¨׳™׳˜ ׳•׳׳—׳–׳™׳¨׳” ׳׳× ׳”׳§׳׳˜.",
        "׳©׳•׳׳—׳™׳ ׳׳× ׳”׳‘׳—׳™׳¨׳” ׳׳˜׳™׳₪׳•׳ handleMenu.",
        ""
    ]
};


// --- IDE Operations ---
function switchIdeFile(filename) {
    document.querySelectorAll('.ide-file').forEach(el => {
        el.classList.remove('active');
        if (el.innerText.includes(filename)) {
            el.classList.add('active');
        }
    });

    let content = '';
    let stories = [];
    
    if (activeProject === 'bank') {
        content = bankFileContents[filename] || '<span class="comment">// ׳§׳•׳‘׳¥ ׳¨׳™׳§</span>';
        stories = bankStoryMap[filename] || [];
    } else if (projectsData[activeProject]) {
        content = projectsData[activeProject].files[filename] || '<span class="comment">// ׳§׳•׳‘׳¥ ׳¨׳™׳§</span>';
        stories = projectsData[activeProject].stories[filename] || [];
    }
    
    const lines = content.split('\n');
    let html = '';
    
    lines.forEach((line, index) => {
        const storyHtml = stories[index] ? `<div class="line-story">${stories[index]}</div>` : '';
        html += `<div class="code-line"><div class="line-num">${index + 1}</div><div class="line-code">${line}</div>${storyHtml}</div>`;
    });

    const editorContent = document.getElementById('ideEditorContent');
    if (editorContent) {
        editorContent.innerHTML = html;
    }
}

function toggleFolder(folderId, element) {
    const folder = document.getElementById(folderId);
    if (folder.style.display === 'none') {
        folder.style.display = 'block';
        element.innerText = element.innerText.replace('ג–¸', 'ג–¾');
    } else {
        folder.style.display = 'none';
        element.innerText = element.innerText.replace('ג–¾', 'ג–¸');
    }
}

// --- Terminal Simulator ---
let customers = [];
function handleTerminal(event) {
    if (event.key === 'Enter') {
        const input = event.target.value.trim();
        event.target.value = '';
        
        const output = document.getElementById('terminalOutput');
        const prompt = activeProject === 'bank' ? 'natan@ubuntu:~/bank$' : (activeProject === 'asyncFiles' ? 'natan@ubuntu:~/async-files$' : (activeProject === 'studyPlanner' ? 'natan@ubuntu:~/study-planner$' : (activeProject === 'movieCollection' ? 'natan@ubuntu:~/movie-manager$' : 'natan@ubuntu:~/store-server$')));
        output.innerHTML += `<p><span class="term-prompt">${prompt}</span> ${input}</p>`;
        
        const args = input.split(' ');
        const cmd = args[0].toLowerCase();
        
        if (activeProject === 'bank') {
            if (cmd === 'help') {
                output.innerHTML += `<p>׳₪׳§׳•׳“׳•׳×: add_customer [id] [name], deposit [id] [amount], show_all, clear</p>`;
            } else if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'add_customer') {
                if (args.length < 3) {
                    output.innerHTML += `<p class="term-error">Error: Missing arguments.</p>`;
                } else {
                    const idStr = args[1];
                    let isOnlyDigits = true;
                    for (let i = 0; i < idStr.length; i++) {
                        const char = idStr[i];
                        if (char < "0" || char > "9") {
                            isOnlyDigits = false;
                        }
                    }
                    const idVal = Number(idStr);
                    if (!isOnlyDigits || idVal < 100) {
                        output.innerHTML += `<p class="term-error">Error: ID must be a number greater than or equal to 100.</p>`;
                    } else if (customers.some(c => c.id === args[1])) {
                        output.innerHTML += `<p class="term-error">Error: ID already exists.</p>`;
                    } else {
                        customers.push({ id: args[1], fullName: args[2], accountType: args[3] || 'Regular', balance: 0 });
                        output.innerHTML += `<p class="term-success">Customer ${args[2]} added successfully.</p>`;
                    }
                }
            } else if (cmd === 'deposit') {
                const c = customers.find(x => x.id === args[1]);
                if (!c) {
                    output.innerHTML += `<p class="term-error">Error: Customer not found.</p>`;
                } else {
                    c.balance += Number(args[2] || 0);
                    output.innerHTML += `<p class="term-success">Deposited ${args[2]} to ${c.fullName}. New balance: ${c.balance}</p>`;
                }
            } else if (cmd === 'show_all') {
                output.innerHTML += `<p>Total customers: ${customers.length}</p>`;
                customers.forEach(c => {
                    output.innerHTML += `<p>- [${c.id}] ${c.fullName}: $${c.balance}</p>`;
                });
            } else if (cmd !== '') {
                output.innerHTML += `<p class="term-error">bash: ${cmd}: command not found</p>`;
            }
        } else if (activeProject === 'movieCollection') {
            if (cmd === 'help') {
                output.innerHTML += `<p>Available commands: node app.js, npm start, cat data/movies.json, cat report.json, clear</p>`;
            } else if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'node' || cmd === 'npm') {
                if (args[1] === 'app.js' || args[0] === 'npm') {
                    isPlanSaved = true;
                    output.innerHTML += `
                        <p class="term-success">> Running app.js...</p>
                        <p>==============================</p>
                        <p style="color: #f5c518; font-weight: bold;">Movie Collection Manager</p>
                        <p>==============================</p>
                        <p>1. Show all movies<br>2. Show by id<br>3. Create new movie<br>4. Delete movie<br>5. Update rate<br>6. Search by name<br>7. Sort by genre (Show by genre)<br>8. Show statistics<br>9. Sort movies (Bonus 1)<br>10. Show top 3 movies (Bonus 2)<br>11. Undo delete movie (Bonus 3)<br>12. Export report to JSON (Bonus 4)<br>13. Search movies by year range (Bonus 5)<br>14. Exit</p>
                        <p>==============================</p>
                        <p>Choose an option: <span style="color: #38bdf8;">1</span></p>
                        <p>All movies in collection:</p>
                        <p style="color: #34d399;">1. Inception<br>2. Interstellar<br>3. Titanic</p>
                        <p>Choose an option: <span style="color: #38bdf8;">8</span></p>
                        <p>Statistics Report:</p>
                        <p style="color: #38bdf8;">- Total Movies: 3<br>- Average Rating: 8.40<br>- Best Movie: "Inception" (Rating: 8.8)</p>
                        <p>Choose an option: <span style="color: #38bdf8;">12</span></p>
                        <p class="term-success">Report exported to report.json successfully:</p>
                        <pre style="color: #a78bfa; font-family: monospace;">{
  "totalMovies": 3,
  "averageRating": 8.4,
  "bestMovie": {
    "title": "Inception",
    "rating": 8.8
  },
  "availableGenres": [
    "Sci-Fi",
    "Drama"
  ]
}</pre>
                        <p>Choose an option: <span style="color: #38bdf8;">14</span></p>
                        <p>Goodbye!</p>
                    `;
                } else {
                    output.innerHTML += `<p class="term-error">Error: Cannot find module '\${args[1]}'</p>`;
                }
            } else if (cmd === 'cat') {
                const filename = args[1];
                if (filename === 'data/movies.json') {
                    output.innerHTML += `
                        <pre style="color: #38bdf8; font-family: monospace;">[
  {
    "id": 1,
    "title": "Inception",
    "genre": "Sci-Fi",
    "year": 2010,
    "rating": 8.8
  },
  {
    "id": 2,
    "title": "Interstellar",
    "genre": "Sci-Fi",
    "year": 2014,
    "rating": 8.6
  },
  {
    "id": 3,
    "title": "Titanic",
    "genre": "Drama",
    "year": 1997,
    "rating": 7.8
  }
]</pre>
                    `;
                } else if (filename === 'report.json') {
                    if (isPlanSaved) {
                        output.innerHTML += `
                            <pre style="color: #a78bfa; font-family: monospace;">{
  "totalMovies": 3,
  "averageRating": 8.4,
  "bestMovie": {
    "title": "Inception",
    "rating": 8.8
  },
  "availableGenres": [
    "Sci-Fi",
    "Drama"
  ]
}</pre>
                        `;
                    } else {
                        output.innerHTML += `<p class="term-error">cat: report.json: No such file or directory</p>`;
                    }
                } else {
                    output.innerHTML += `<p class="term-error">cat: \${filename}: No such file or directory</p>`;
                }
            } else if (cmd !== '') {
                output.innerHTML += `<p class="term-error">bash: \${cmd}: command not found</p>`;
            }
        } else if (activeProject === 'asyncFiles') {
            if (cmd === 'help') {
                output.innerHTML += `<p>Available commands: node async-files.js, cat input.txt, cat output.txt, cat output-upper.txt, clear</p>`;
            } else if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'node') {
                if (args[1] === 'async-files.js') {
                    output.innerHTML += `
                        <p class="term-success">> Running async-files.js...</p>
                        <p>׳×׳•׳›׳ ׳”׳§׳•׳‘׳¥ input.txt:</p>
                        <p style="color: #60a5fa;">׳©׳׳•׳ ׳¢׳•׳׳<br>׳–׳” ׳§׳•׳‘׳¥ ׳”׳§׳׳˜ ׳©׳׳™<br>Node.js ׳׳’׳ ׳™׳‘</p>
                        <p class="term-success">׳”׳§׳•׳‘׳¥ output.txt ׳ ׳›׳×׳‘ ׳‘׳”׳¦׳׳—׳”</p>
                        <p class="term-success">׳”׳›׳ ׳”׳¡׳×׳™׳™׳ ׳‘׳”׳¦׳׳—׳”! (׳׳©׳™׳׳” 3)</p>
                        <p>׳§׳¨׳׳×׳™ ׳¢׳ Promise:</p>
                        <p style="color: #60a5fa;">׳©׳׳•׳ ׳¢׳•׳׳<br>׳–׳” ׳§׳•׳‘׳¥ ׳”׳§׳׳˜ ׳©׳׳™<br>Node.js ׳׳’׳ ׳™׳‘</p>
                        <p class="term-success">׳”׳›׳ ׳”׳¡׳×׳™׳™׳ ׳‘׳”׳¦׳׳—׳” ׳‘׳©׳¨׳©׳•׳¨ Promises!</p>
                        <p>׳׳•׳¨׳ ׳§׳•׳‘׳¥ ׳§׳׳˜: 36</p>
                        <p>׳׳•׳¨׳ ׳§׳•׳‘׳¥ ׳₪׳׳˜: 27</p>
                    `;
                } else {
                    output.innerHTML += `<p class="term-error">Error: Cannot find module '${args[1]}'</p>`;
                }
            } else if (cmd === 'cat') {
                const filename = args[1];
                if (filename === 'input.txt') {
                    output.innerHTML += `<p style="color: #cbd5e1;">׳©׳׳•׳ ׳¢׳•׳׳<br>׳–׳” ׳§׳•׳‘׳¥ ׳”׳§׳׳˜ ׳©׳׳™<br>Node.js ׳׳’׳ ׳™׳‘</p>`;
                } else if (filename === 'output.txt') {
                    output.innerHTML += `<p style="color: #cbd5e1;">׳ ׳›׳×׳‘ ׳‘׳”׳¦׳׳—׳” ׳¢׳ ׳™׳“׳™ Node.js!</p>`;
                } else if (filename === 'output-upper.txt') {
                    output.innerHTML += `<p style="color: #cbd5e1;">׳©׳׳•׳ ׳¢׳•׳׳<br>׳–׳” ׳§׳•׳‘׳¥ ׳”׳§׳׳˜ ׳©׳׳™<br>NODE.JS ׳׳’׳ ׳™׳‘</p>`;
                } else if (filename === 'async-files.js') {
                    output.innerHTML += `<p>Error: Use the editor window to read code files!</p>`;
                } else {
                    output.innerHTML += `<p class="term-error">cat: ${filename}: No such file or directory</p>`;
                }
            } else if (cmd !== '') {
                output.innerHTML += `<p class="term-error">bash: ${cmd}: command not found</p>`;
            }
        } else if (activeProject === 'studyPlanner') {
            if (cmd === 'help') {
                output.innerHTML += `<p>Available commands: node main.js, cat saved-plan.json, clear</p>`;
            } else if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'node') {
                if (args[1] === 'main.js') {
                    const loadMsg = isPlanSaved 
                        ? `<p style="color: #34d399;">[׳˜׳¢׳™׳ ׳”] ׳ ׳׳¦׳׳” ׳×׳•׳›׳ ׳™׳× ׳§׳•׳“׳׳× ׳¢׳‘׳•׳¨ ׳ ׳×׳. ׳¡׳”"׳› ׳–׳׳: 105 ׳“׳§׳•׳×.</p>`
                        : `<p style="color: #fb7185;">[׳˜׳¢׳™׳ ׳”] ׳׳ ׳ ׳׳¦׳׳” ׳×׳•׳›׳ ׳™׳× ׳׳™׳׳•׳“׳™׳ ׳§׳•׳“׳׳× ׳©׳׳•׳¨׳”.</p>`;
                    isPlanSaved = true;
                    output.innerHTML += `
                        <p class="term-success">> Running main.js...</p>
                        <p>=== ׳×׳—׳™׳׳× ׳¨׳™׳¦׳× ׳”׳׳₪׳׳™׳§׳¦׳™׳” Study Planner ===</p>
                        <p>[׳¡׳™׳ ׳›׳¨׳•׳ ׳™] ׳§׳•׳“ ׳¨׳’׳™׳ ׳׳׳©׳™׳ ׳׳¨׳•׳¥ ׳׳™׳™׳“ ׳׳׳ ׳”׳׳×׳ ׳”!</p>
                        ${loadMsg}
                        <p>[׳§׳•׳׳‘׳§] ׳‘׳¨׳•׳ ׳”׳‘׳, ׳ ׳×׳! ׳׳•׳›׳ ׳׳×׳›׳ ׳ ׳׳× ׳™׳•׳ ׳”׳׳™׳׳•׳“׳™׳ ׳©׳׳?</p>
                        <p style="color: #fb7185;">[׳₪׳¨׳•׳׳™׳¡ ׳©׳’׳™׳׳” ׳׳×׳•׳›׳ ׳ ׳×] ׳׳©׳™׳׳” ׳‘׳©׳ "׳׳©׳™׳׳” ׳“׳׳™׳•׳ ׳™׳×" ׳׳ ׳ ׳׳¦׳׳” ׳‘׳׳׳’׳¨</p>
                        <p>[׳§׳•׳׳‘׳§] ׳ ׳׳¦׳ ׳¡׳˜׳•׳“׳ ׳˜: ׳ ׳×׳</p>
                        <p>[׳₪׳¨׳•׳׳™׳¡] ׳׳×׳—׳™׳ ׳׳‘׳ ׳•׳× ׳×׳•׳›׳ ׳™׳× ׳׳™׳׳•׳“׳™׳...</p>
                        <p style="color: #fb7185;">[׳§׳•׳׳‘׳§ ׳©׳’׳™׳׳” ׳׳×׳•׳›׳ ׳ ׳×] ׳¡׳˜׳•׳“׳ ׳˜ ׳¢׳ ׳׳–׳”׳” 99 ׳׳ ׳ ׳׳¦׳ ׳‘׳׳¢׳¨׳›׳×</p>
                        <p style="color: #a78bfa;">[׳׳¡׳™׳ ׳›׳¨׳•׳ ׳™ ׳‘׳¨׳§׳¢] ׳׳©׳™׳׳” ׳׳•׳©׳”׳™׳× ׳”׳¡׳×׳™׳™׳׳”!</p>
                        <p>[׳₪׳¨׳•׳׳™׳¡] ׳×׳•׳›׳ ׳™׳× ׳”׳׳™׳׳•׳“׳™׳ ׳ ׳‘׳ ׳×׳” ׳¢׳‘׳•׳¨ ׳ ׳×׳:</p>
                        <p> - ׳×׳¨׳’׳•׳ ׳§׳•׳׳‘׳§׳™׳ ׳‘-JS (45 ׳“׳§׳•׳×)</p>
                        <p> - ׳׳™׳׳•׳“ ׳₪׳¨׳•׳׳™׳¡׳™׳ ׳•-Fetch (60 ׳“׳§׳•׳×)</p>
                        <p>[׳₪׳¨׳•׳׳™׳¡] ׳¡׳”"׳› ׳–׳׳ ׳׳™׳׳•׳“: 105 ׳“׳§׳•׳×.</p>
                        <p class="term-success">[׳©׳׳™׳¨׳”] ׳×׳•׳›׳ ׳™׳× ׳”׳׳™׳׳•׳“׳™׳ ׳ ׳©׳׳¨׳” ׳‘׳”׳¦׳׳—׳” ׳׳§׳•׳‘׳¥ saved-plan.json</p>
                        <p>[׳₪׳¨׳•׳׳™׳¡ Finally] ׳‘׳ ׳™׳™׳× ׳”׳×׳•׳›׳ ׳™׳× ׳”׳¡׳×׳™׳™׳׳”.</p>
                        <p style="color: #34d399;">[Async/Await] ׳×׳–׳›׳•׳¨׳× ׳ ׳©׳׳—׳” ׳׳ ׳ ׳×׳ ׳׳׳¡׳₪׳¨ 050-1234567</p>
                        <p style="color: #fb7185;">[Async/Await ׳©׳’׳™׳׳” ׳׳×׳•׳›׳ ׳ ׳×] ׳׳ ׳ ׳™׳×׳ ׳׳”׳›׳™׳ ׳×׳–׳›׳•׳¨׳× ׳¢׳‘׳•׳¨ ׳׳©׳” - ׳—׳¡׳¨׳™׳ ׳₪׳¨׳˜׳™ ׳§׳©׳¨!</p>
                    `;
                } else {
                    output.innerHTML += `<p class="term-error">Error: Cannot find module '${args[1]}'</p>`;
                }
            } else if (cmd === 'cat') {
                if (args[1] === 'saved-plan.json') {
                    if (isPlanSaved) {
                        output.innerHTML += `
                            <pre style="color: #38bdf8; font-family: monospace;">{
  "studentName": "׳ ׳×׳",
  "totalDuration": 105,
  "tasks": [
    "׳×׳¨׳’׳•׳ ׳§׳•׳׳‘׳§׳™׳ ׳‘-JS",
    "׳׳™׳׳•׳“ ׳₪׳¨׳•׳׳™׳¡׳™׳ ׳•-Fetch"
  ]
}</pre>
                        `;
                    } else {
                        output.innerHTML += `<p class="term-error">cat: saved-plan.json: No such file or directory</p>`;
                    }
                } else {
                    output.innerHTML += `<p class="term-error">cat: ${args[1]}: No such file or directory</p>`;
                }
            } else if (cmd !== '') {
                output.innerHTML += `<p class="term-error">bash: ${cmd}: command not found</p>`;
            }
        } else if (activeProject === 'storeOnlineServer') {
            if (cmd === 'help') {
                output.innerHTML += `<p>Available commands: npm start, node index.js, curl [url], cat [filename], clear</p>`;
            } else if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'npm' || cmd === 'node') {
                if ((cmd === 'npm' && args[1] === 'start') || (cmd === 'node' && args[1] === 'index.js')) {
                    isPlanSaved = true;
                    output.innerHTML += `
                        <p class="term-success">> starting store_online_server_express...</p>
                        <p style="color: #34d399;">[Express] Server running on port 3000</p>
                        <p style="color: #60a5fa;">[Database] Connected to JSON files base path: ./data/</p>
                    `;
                } else {
                    output.innerHTML += `<p class="term-error">Error: Command not recognized. Did you mean 'npm start' or 'node index.js'?</p>`;
                }
            } else if (cmd === 'curl') {
                if (!isPlanSaved) {
                    output.innerHTML += `<p class="term-error">curl: (7) Failed to connect to localhost port 3000: Connection refused. Did you run the server first?</p>`;
                } else {
                    const urlStr = args[1] || '';
                    if (urlStr.includes('/health')) {
                        output.innerHTML += `<p>All is good</p>`;
                    } else if (urlStr.includes('/products')) {
                        if (urlStr.includes('inStock=true') && urlStr.includes('maxPrice=15')) {
                            output.innerHTML += `
                                <pre style="color: #34d399; font-family: monospace;">{
  "success": true,
  "data": [
    {
      "id": "book_003",
      "name": "The Hitchhiker's Guide to the Galaxy - Douglas Adams",
      "price": 14.95,
      "stock": 12
    },
    {
      "id": "book_004",
      "name": "1984 - George Orwell",
      "price": 11.99,
      "stock": 50
    },
    {
      "id": "book_005",
      "name": "To Kill a Mockingbird - Harper Lee",
      "price": 13.25,
      "stock": 8
    }
  ]
}</pre>
                            `;
                        } else {
                            output.innerHTML += `
                                <pre style="color: #34d399; font-family: monospace;">{
  "success": true,
  "data": [
    { "id": "book_001", "name": "The Hobbit - J.R.R. Tolkien", "price": 19.99, "stock": 45 },
    { "id": "book_002", "name": "Sapiens: A Brief History - Yuval Noah Harari", "price": 24.5, "stock": 30 },
    { "id": "book_003", "name": "The Hitchhiker's Guide - Douglas Adams", "price": 14.95, "stock": 12 }
  ]
}</pre>
                            `;
                        }
                    } else if (urlStr.includes('/cart')) {
                        output.innerHTML += `
                            <pre style="color: #38bdf8; font-family: monospace;">{
  "success": true,
  "data": {
    "customerId": "cust_101",
    "items": [
      { "productId": "book_001", "name": "The Hobbit - J.R.R. Tolkien", "price": 19.99, "quantity": 1, "subtotal": 19.99 }
    ],
    "total": 19.99
  }
}</pre>
                        `;
                    } else {
                        output.innerHTML += `<p>{"success": true, "message": "Welcome to Natan's Online Store API"}</p>`;
                    }
                }
            } else if (cmd === 'cat') {
                const filename = args[1];
                if (filename === '.env') {
                    output.innerHTML += `
                        <pre style="color: #a78bfa; font-family: monospace;">PORT=3000
DATA_BASE=./data/
STARTING_BALANCE=500</pre>
                    `;
                } else if (filename === 'package.json') {
                    output.innerHTML += `
                        <pre style="color: #a78bfa; font-family: monospace;">{
  "name": "store_online_server_express",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "dependencies": {
    "express": "^5.2.1"
  }
}</pre>
                    `;
                } else {
                    output.innerHTML += `<p class="term-error">cat: ${filename}: No such file or directory. Try '.env' or 'package.json'</p>`;
                }
            } else if (cmd !== '') {
                output.innerHTML += `<p class="term-error">bash: ${cmd}: command not found</p>`;
            }
        }
        
        output.scrollTop = output.scrollHeight;
    }
}

// --- Freezer Logic ---
function openFreezer() {
    document.getElementById('freezerModal').classList.add('open');
}
function closeFreezer() {
    document.getElementById('freezerModal').classList.remove('open');
}




// --- Interactive Theme Switcher Logic ---
function toggleThemeMenu() {
    const menu = document.getElementById('themeMenu');
    if (menu) {
        menu.classList.toggle('open');
    }
}

function changeTheme(themeName) {
    document.body.setAttribute('data-theme', themeName);
    localStorage.setItem('natan_study_theme', themeName);
    
    const menu = document.getElementById('themeMenu');
    if (menu) {
        menu.classList.remove('open');
    }
}

// Close theme menu when clicking outside
document.addEventListener('click', (e) => {
    const btn = document.getElementById('themeBtn');
    const menu = document.getElementById('themeMenu');
    if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
    }
});

function initTheme() {
    changeTheme('ocean');
}


// --- Interactive Quiz Simulator (14 Exams & 14 Questions) ---
const examTopics = {
    basics: { name: 'נ“ ׳™׳¡׳•׳“׳•׳× ׳•׳׳©׳×׳ ׳™׳', desc: '׳׳©׳×׳ ׳™ var, let, const, Temporal Dead Zone, Hoisting, ׳˜׳™׳₪׳•׳¡׳™ ׳ ׳×׳•׳ ׳™׳ ׳•-typeof' },
    loops: { name: 'נ”„ ׳×׳ ׳׳™׳ ׳•׳׳•׳׳׳•׳×', desc: '׳×׳ ׳׳™ if-else, switch, ׳׳•׳׳׳•׳× for/while/do-while, ׳׳•׳₪׳¨׳˜׳•׳¨׳™׳ ׳׳•׳’׳™׳™׳ ׳•-Nullish' },
    functions: { name: 'נ¯ ׳₪׳•׳ ׳§׳¦׳™׳•׳×', desc: '׳”׳¦׳”׳¨׳” ׳׳¢׳•׳׳× ׳‘׳™׳˜׳•׳™ ׳₪׳•׳ ׳§׳¦׳™׳”, ׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳—׳¥, arguments, return ׳•׳§׳•׳ ׳˜׳§׳¡׳˜ this' },
    closures: { name: 'נ”’ ׳§׳׳•׳–\'׳¨׳™׳ ׳•׳¡׳§׳•׳₪ ׳׳§׳¡׳™׳§׳׳™', desc: 'Lexical Scope, closures, IIFE, ׳©׳™׳׳•׳©׳™׳ ׳׳¢׳©׳™׳™׳ ׳•׳©׳™׳׳•׳¨ ׳׳©׳×׳ ׳™׳ ׳‘׳–׳™׳›׳¨׳•׳' },
    factories: { name: 'נ­ ׳₪׳•׳ ׳§׳¦׳™׳•׳× ׳׳₪׳¢׳ ׳•׳׳•׳‘׳™׳™׳§׳˜׳™׳', desc: 'Factory Functions, Property Shorthand, Object.create, ׳”׳¢׳×׳§׳” ׳¨׳“׳•׳“׳”/׳¢׳׳•׳§׳”' },
    modules: { name: 'נ“¦ ׳׳•׳“׳•׳׳™׳ (ES6 & CommonJS)', desc: 'require ׳•-module.exports ׳׳¢׳•׳׳× import ׳•-export, ׳˜׳¢׳™׳ ׳” ׳¡׳˜׳˜׳™׳× ׳•׳“׳™׳ ׳׳™׳×' },
    destructuring: { name: 'נ§© ׳₪׳™׳¨׳•׳§ ׳•׳”׳©׳׳”', desc: 'Destructuring ׳©׳ ׳׳¢׳¨׳›׳™׳ ׳•׳׳•׳‘׳™׳™׳§׳˜׳™׳, Rest, Spread ׳•׳¢׳¨׳›׳™ ׳‘׳¨׳™׳¨׳× ׳׳—׳“׳' },
    promises: { name: 'נ₪ ׳₪׳¨׳•׳׳™׳¡׳™׳ ׳•׳׳¡׳™׳ ׳§-׳׳•׳•׳™׳˜', desc: 'Promise Lifecycle, then/catch, async/await, Promise.all/race/allSettled' },
    eventLoop: { name: 'נ”„ ׳׳ ׳•׳¢ ׳”-Event Loop', desc: 'Call Stack, Callback Queue, Microtasks Queue, nextTick ׳•׳—׳¡׳׳™ Thread' },
    vanillaServer: { name: 'נ–¥ן¸ ׳©׳¨׳× HTTP ׳‘׳¡׳™׳¡׳™ (Node)', desc: 'http.createServer, Request, Response, writeHead, statusCodes, streams ׳•-buffers' },
    express: { name: 'נ€ ׳©׳¨׳×׳™ Express ׳•׳₪׳¨׳•׳™׳§׳˜ VIGIL', desc: 'Routing, middleware, req.params, req.query, req.body ׳•׳˜׳™׳₪׳•׳ ׳‘׳©׳’׳™׳׳•׳×' },
    arrayMethods: { name: 'נ“ ׳׳×׳•׳“׳•׳× ׳׳¢׳¨׳›׳™׳', desc: 'map, filter, reduce, find, findIndex, splice, slice ׳•׳׳™׳˜׳¨׳¦׳™׳•׳×' },
    stringMethods: { name: 'נ“ ׳׳×׳•׳“׳•׳× ׳׳—׳¨׳•׳–׳•׳×', desc: 'indexOf, split, slice, replace, replaceAll, trim ׳•׳—׳™׳₪׳•׳©׳™ ׳×׳•׳•׳™׳' },
    objectMethods: { name: 'נ—‚ן¸ ׳׳×׳•׳“׳•׳× ׳׳•׳‘׳™׳™׳§׳˜׳™׳', desc: 'Object.keys/values/entries, Object.freeze/seal ׳•׳¡׳¨׳™׳§׳× ׳׳׳₪׳™׳™׳ ׳™׳' }
};

let currentExamTopic = '';
let currentExamQuestions = [];
let currentExamAnswers = [];
let currentExamScore = 0;
let currentQuestionIndex = 0;

function getQuizHtml() {
    return `
        <div class="modal-header" style="border-bottom: 1px solid var(--line); padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="font-family: 'Rubik', sans-serif; font-weight: 800; color: var(--gold); text-shadow: 0 0 10px rgba(245,197,24,0.15); margin:0;">נ“ ׳¡׳™׳׳•׳׳˜׳•׳¨ ׳׳‘׳—׳ ׳™ JS ׳׳™׳ ׳˜׳¨׳׳§׳˜׳™׳‘׳™</h2>
        </div>
        <div class="quiz-modal-container" style="direction: rtl; text-align: right; color: var(--ink); font-family: inherit; max-height: 78vh; overflow-y: auto;">
            <div id="quizContainer"></div>
        </div>
    `;
}

function initQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;

    const savedScores = JSON.parse(localStorage.getItem('natan_study_scores') || '{}');
    
    let html = `
        <div style="margin-bottom: 20px; background: rgba(245, 197, 24, 0.05); border: 1px solid var(--line); border-radius: 12px; padding: 18px;">
            <p style="font-size: 15.5px; line-height: 1.6; margin-bottom: 12px; color: var(--ink-soft);">
                ׳‘׳¨׳•׳›׳™׳ ׳”׳‘׳׳™׳ ׳׳¡׳™׳׳•׳׳˜׳•׳¨ ׳”׳׳‘׳—׳ ׳™׳ ׳”׳׳©׳•׳“׳¨׳’ ׳©׳ ׳ ׳×׳! ׳׳₪׳ ׳™׳ <strong>14 ׳׳‘׳—׳ ׳™׳ ׳׳׳•׳§׳“׳™׳</strong> ׳”׳׳›׳¡׳™׳ ׳׳× ׳›׳ ׳”׳—׳•׳׳¨ ׳”׳ ׳“׳¨׳© ׳׳׳‘׳—׳ ׳‘׳׳“׳¢׳™ ׳”׳׳—׳©׳‘. ׳׳›׳ ׳׳‘׳—׳ ׳™׳© <strong>14 ׳©׳׳׳•׳×</strong> ׳¢׳ ׳₪׳™׳“׳‘׳§ ׳׳™׳™׳“׳™ ׳•׳”׳¡׳‘׳¨ ׳׳₪׳•׳¨׳˜.
            </p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button onclick="resetQuizScores()" style="background: rgba(239, 68, 68, 0.12); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.25); border-radius: 6px; padding: 6px 12px; font-size: 13px; font-weight: bold; cursor: pointer; transition: 0.15s;">נ—‘ן¸ ׳׳₪׳¡ ׳׳× ׳›׳ ׳”׳¦׳™׳•׳ ׳™׳</button>
            </div>
        </div>
        <div class="quiz-dashboard">
    `;

    Object.keys(examTopics).forEach(topicKey => {
        const topic = examTopics[topicKey];
        const highScore = savedScores[topicKey];
        const hasTaken = highScore !== undefined;
        
        let scoreBadge = '';
        if (hasTaken) {
            const pct = (highScore / 14) * 100;
            let badgeColor = '#ef4444'; // red
            if (pct >= 80) badgeColor = '#10b981'; // green
            else if (pct >= 50) badgeColor = '#f5c518'; // yellow
            
            scoreBadge = `
                <span class="quiz-score-badge completed" style="color: ${badgeColor}; border-color: ${badgeColor}40; background: ${badgeColor}12;">
                    ׳”׳•׳©׳׳: ${highScore}/14 (${pct.toFixed(0)}%)
                </span>
            `;
        } else {
            scoreBadge = `<span class="quiz-score-badge pending">ג³ ׳˜׳¨׳ ׳‘׳•׳¦׳¢</span>`;
        }

        html += `
            <div class="quiz-topic-card">
                <div>
                    <div class="quiz-topic-title">${topic.name}</div>
                    <div class="quiz-topic-desc">${topic.desc}</div>
                </div>
                <div class="quiz-topic-footer">
                    ${scoreBadge}
                    <button class="quiz-start-btn" onclick="startExam('${topicKey}')">
                        ${hasTaken ? '׳ ׳¡׳” ׳©׳•׳‘ נ”„' : '׳”׳×׳—׳ ׳׳‘׳—׳ נ€'}
                    </button>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    quizContainer.innerHTML = html;
}

function startExam(topicKey) {
    currentExamTopic = topicKey;
    currentExamQuestions = quizDatabase[topicKey] || [];
    currentExamAnswers = new Array(currentExamQuestions.length).fill(null);
    currentExamScore = 0;
    currentQuestionIndex = 0;

    renderQuizQuestion();
}

function renderQuizQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer || currentExamQuestions.length === 0) return;

    const qObj = currentExamQuestions[currentQuestionIndex];
    const topicInfo = examTopics[currentExamTopic];
    const progressPercent = ((currentQuestionIndex + 1) / currentExamQuestions.length) * 100;

    let codeBlock = '';
    if (qObj.code) {
        codeBlock = `
            <pre style="background: #0d0e14; padding: 14px; border-radius: 8px; overflow-x: auto; color: var(--teal); font-family: 'JetBrains Mono', monospace; text-align: left; direction: ltr; margin: 15px 0; border: 1px solid var(--line);"><code style="font-size:14.5px; white-space:pre-wrap;">${qObj.code}</code></pre>
        `;
    }

    let optionsHtml = '';
    qObj.opts.forEach((opt, optIndex) => {
        optionsHtml += `
            <button class="quiz-opt-btn" onclick="selectQuizOption(${optIndex})" id="opt-${optIndex}" style="background: var(--surface-2); border: 1px solid var(--line); border-radius: 8px; color: var(--ink); padding: 14px; font-size: 14.5px; cursor: pointer; text-align: right; direction: ltr; transition: 0.15s; font-family: 'JetBrains Mono', monospace; font-weight: 600; width:100%; margin-bottom: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                ${opt}
            </button>
        `;
    });

    quizContainer.innerHTML = `
        <div style="background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
            <!-- Exam Header -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
                <span style="font-size: 13.5px; color: var(--gold); font-weight: bold;">
                    נ“ ׳ ׳•׳©׳: ${topicInfo.name}
                </span>
                <span style="font-size: 13px; color: var(--ink-faint); font-weight: bold;">
                    ׳©׳׳׳” ${currentQuestionIndex + 1} ׳׳×׳•׳ ${currentExamQuestions.length}
                </span>
            </div>
            
            <!-- Progress Bar -->
            <div style="width:100%; height:6px; background:var(--line); border-radius:3px; margin-bottom: 20px; overflow:hidden;">
                <div style="width:${progressPercent}%; height:100%; background:var(--gold); transition: width 0.3s ease;"></div>
            </div>

            <!-- Question Code & Text -->
            <div style="font-size: 17px; font-weight: 700; margin-bottom: 15px; font-family: 'Rubik', sans-serif; line-height: 1.5;">
                ${qObj.q}
            </div>
            ${codeBlock}

            <!-- Options -->
            <div class="quiz-options-container" style="margin-top: 15px;">
                ${optionsHtml}
            </div>

            <!-- Explanation Callout -->
            <div class="quiz-explain" id="quizExplain" style="display: none; margin-top: 18px; background: rgba(245, 197, 24, 0.05); border: 1px solid rgba(245, 197, 24, 0.2); border-radius: 8px; padding: 14px; font-size: 14.5px; line-height: 1.6; color: var(--ink-soft);">
                <strong style="color: var(--gold);">נ’¡ ׳”׳¡׳‘׳¨:</strong> ${qObj.explain}
            </div>

            <!-- Next Button -->
            <div style="margin-top: 20px; text-align: left; display:flex; justify-content:space-between; align-items:center;">
                <button onclick="initQuiz()" style="background:none; border:1px solid var(--line); border-radius:6px; color:var(--ink-soft); padding:8px 15px; font-size:13.5px; cursor:pointer; font-weight:bold; transition:0.15s;">
                    ג ׳¦׳ ׳׳”׳׳‘׳—׳
                </button>
                <button id="nextBtn" onclick="nextQuizQuestion()" style="display:none; background:var(--gold); color:#11131a; border:none; border-radius:6px; padding:8px 20px; font-size:14px; font-weight:bold; cursor:pointer; transition:0.15s;">
                    ${currentQuestionIndex === currentExamQuestions.length - 1 ? '׳¡׳™׳™׳ ׳׳‘׳—׳ נ' : '׳”׳©׳׳׳” ׳”׳‘׳׳” ג”'}
                </button>
            </div>
        </div>
    `;
}

function selectQuizOption(optIndex) {
    if (currentExamAnswers[currentQuestionIndex] !== null) return; // Answered already
    
    currentExamAnswers[currentQuestionIndex] = optIndex;
    const qObj = currentExamQuestions[currentQuestionIndex];
    const correct = qObj.correct;

    if (optIndex === correct) {
        currentExamScore++;
    }

    // Color options
    qObj.opts.forEach((opt, idx) => {
        const btn = document.getElementById(`opt-${idx}`);
        if (btn) {
            btn.style.cursor = 'not-allowed';
            if (idx === correct) {
                btn.style.background = 'rgba(74, 222, 128, 0.12)';
                btn.style.borderColor = '#10b981';
                btn.style.color = '#bbf7d0';
                btn.innerHTML += ' <span style="color: #10b981; float:left;">ג“</span>';
            } else if (idx === optIndex) {
                btn.style.background = 'rgba(239, 68, 68, 0.1)';
                btn.style.borderColor = '#ef4444';
                btn.style.color = '#fca5a5';
                btn.innerHTML += ' <span style="color: #ef4444; float:left;">ג—</span>';
            }
        }
    });

    // Reveal explanation and Next button
    const explain = document.getElementById('quizExplain');
    if (explain) explain.style.display = 'block';
    
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.style.display = 'block';
}

function nextQuizQuestion() {
    if (currentQuestionIndex < currentExamQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuizQuestion();
    } else {
        finishExam();
    }
}

function finishExam() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;

    // Save Score
    const savedScores = JSON.parse(localStorage.getItem('natan_study_scores') || '{}');
    const previousHigh = savedScores[currentExamTopic] || 0;
    
    let isNewHigh = false;
    if (currentExamScore > previousHigh) {
        savedScores[currentExamTopic] = currentExamScore;
        localStorage.setItem('natan_study_scores', JSON.stringify(savedScores));
        isNewHigh = true;
    }

    const pct = (currentExamScore / currentExamQuestions.length) * 100;
    let feedbackColor = '#ef4444'; // red
    let feedbackTitle = '׳¦׳¨׳™׳ ׳׳׳׳•׳“ ׳¢׳•׳“ ׳§׳¦׳×! נ“';
    if (pct >= 80) {
        feedbackColor = '#10b981'; // green
        feedbackTitle = '׳׳¦׳•׳™׳! ׳©׳׳™׳˜׳” ׳₪׳ ׳˜׳¡׳˜׳™׳× ׳‘׳—׳•׳׳¨! נ†';
    } else if (pct >= 50) {
        feedbackColor = '#f5c518'; // yellow
        feedbackTitle = '׳¢׳•׳‘׳¨! ׳™׳© ׳׳§׳•׳ ׳׳©׳™׳₪׳•׳¨. גן¸';
    }

    quizContainer.innerHTML = `
        <div style="background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 25px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
            <div style="font-size: 60px; margin-bottom: 15px;">נ‰</div>
            <h2 style="color: ${feedbackColor}; font-family: 'Rubik', sans-serif; font-weight: 800; margin-bottom: 10px;">
                ${feedbackTitle}
            </h2>
            <p style="font-size: 16.5px; color: var(--ink-soft); margin-bottom: 20px;">
                ׳¡׳™׳™׳׳× ׳׳× ׳”׳׳‘׳—׳ ׳‘׳ ׳•׳©׳ <strong>${examTopics[currentExamTopic].name}</strong>
            </p>
            
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--line); border-radius: 10px; padding: 20px; max-width: 320px; margin: 0 auto 25px;">
                <div style="font-size: 14px; color: var(--ink-faint); margin-bottom: 5px;">׳”׳¦׳™׳•׳ ׳©׳׳ ׳‘׳׳‘׳—׳ ׳”׳ ׳•׳›׳—׳™:</div>
                <div style="font-size: 38px; font-weight: 900; color: var(--gold);">${currentExamScore} / 14</div>
                <div style="font-size: 16px; font-weight: bold; color: var(--ink-soft); margin-top: 5px;">(${pct.toFixed(0)}%)</div>
            </div>

            ${isNewHigh ? `
                <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 8px; padding: 10px 15px; color: #10b981; font-weight: bold; font-size: 14px; display: inline-block; margin-bottom: 20px;">
                    נ”¥ ׳©׳™׳ ׳—׳“׳© ׳ ׳©׳׳¨ ׳‘׳׳¢׳¨׳›׳×!
                </div>
            ` : `
                <div style="font-size:13.5px; color:var(--ink-faint); margin-bottom:20px;">
                    (׳”׳¦׳™׳•׳ ׳”׳’׳‘׳•׳” ׳‘׳™׳•׳×׳¨ ׳”׳©׳׳•׳¨: ${previousHigh}/14)
                </div>
            `}

            <div style="display:flex; justify-content:center; gap: 15px;">
                <button onclick="startExam('${currentExamTopic}')" style="background:var(--surface-2); border:1px solid var(--line); color:var(--ink); border-radius:8px; padding:10px 20px; font-weight:bold; cursor:pointer; transition:0.15s;">
                    נ”„ ׳ ׳¡׳” ׳©׳•׳‘
                </button>
                <button onclick="initQuiz()" style="background:var(--gold); color:#11131a; border:none; border-radius:8px; padding:10px 20px; font-weight:bold; cursor:pointer; transition:0.15s;">
                    נ“‹ ׳—׳–׳•׳¨ ׳׳׳•׳— ׳”׳׳‘׳—׳ ׳™׳
                </button>
            </div>
        </div>
    `;
}

function resetQuizScores() {
    if (confirm('׳”׳׳ ׳׳×׳” ׳‘׳˜׳•׳— ׳©׳‘׳¨׳¦׳•׳ ׳ ׳׳׳₪׳¡ ׳׳× ׳›׳ ׳”׳™׳¡׳˜׳•׳¨׳™׳™׳× ׳”׳¦׳™׳•׳ ׳™׳ ׳©׳ ׳”׳׳‘׳—׳ ׳™׳?')) {
        localStorage.removeItem('natan_study_scores');
        initQuiz();
    }
}


// --- Tech Dictionary Checkbox System ---
let knownTechWords = JSON.parse(localStorage.getItem('knownTechWords')) || {};

window.toggleTechWord = function(wordId, isChecked) {
    knownTechWords[wordId] = isChecked;
    localStorage.setItem('knownTechWords', JSON.stringify(knownTechWords));
}

window.initTechEnglishCheckboxes = function() {
    const checkboxes = document.querySelectorAll('.tech-word-cb');
    checkboxes.forEach(cb => {
        const wordId = cb.id.replace('cb-', '');
        if (knownTechWords[wordId]) {
            cb.checked = true;
        }
    });
}


// --- Visualizer Functions ---
window.nextVisSlide = function(topicKey) {
    const container = document.getElementById('vis-' + topicKey);
    if (!container) return;
    
    let current = parseInt(container.getAttribute('data-current'));
    const total = parseInt(container.getAttribute('data-total'));
    
    if (current < total - 1) {
        current++;
        updateVisSlide(container, current, total, topicKey);
    }
};

window.prevVisSlide = function(topicKey) {
    const container = document.getElementById('vis-' + topicKey);
    if (!container) return;
    
    let current = parseInt(container.getAttribute('data-current'));
    const total = parseInt(container.getAttribute('data-total'));
    
    if (current > 0) {
        current--;
        updateVisSlide(container, current, total, topicKey);
    }
};

window.updateVisSlide = function(container, current, total, topicKey) {
    container.setAttribute('data-current', current);
    
    // Update slides
    const slides = container.querySelectorAll('.visualizer-slide');
    slides.forEach((slide, idx) => {
        if (idx === current) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    // Update dots
    const dots = container.querySelectorAll('.vis-dot');
    dots.forEach((dot, idx) => {
        if (idx === current) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Update buttons
    const btnPrev = container.querySelector('.btn-prev');
    const btnNext = container.querySelector('.btn-next');
    
    btnPrev.disabled = (current === 0);
    btnNext.disabled = (current === total - 1);
};

