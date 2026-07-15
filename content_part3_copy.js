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
    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">׳׳•׳©׳’׳™ Docker ׳•-Containers נ³</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳׳™׳׳’' | ׳×׳¨׳’׳•׳: ׳×׳׳•׳ ׳” / ׳©׳‘׳׳•׳ ׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳©׳¨׳˜׳•׳˜ ׳׳• ׳×׳‘׳ ׳™׳× ׳׳§׳¨׳™׳׳” ׳‘׳׳‘׳“ ׳©׳׳›׳™׳׳” ׳׳× ׳”׳§׳•׳“, ׳”׳¡׳₪׳¨׳™׳•׳× ׳•׳׳¢׳¨׳›׳× ׳”׳”׳₪׳¢׳׳” ׳©׳“׳¨׳•׳©׳™׳ ׳׳”׳¨׳¦׳× ׳”׳׳₪׳׳™׳§׳¦׳™׳”. ׳–׳” ׳›׳׳• ׳§׳•׳‘׳¥ ׳”׳×׳§׳ ׳” (ISO) ׳©׳׳ ׳ ׳™׳×׳ ׳׳©׳ ׳•׳×.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•׳ ׳˜׳™׳™׳ ׳¨ | ׳×׳¨׳’׳•׳: ׳׳›׳•׳׳” / ׳׳™׳›׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳•׳₪׳¢ ׳—׳™ ׳•׳¨׳¥ ׳©׳ Image. ׳–׳”׳• ׳”׳׳—׳©׳‘ ׳”׳§׳˜׳ ׳•׳”׳׳‘׳•׳“׳“ ׳©׳׳ ׳• ׳‘׳×׳•׳ ׳”׳׳—׳©׳‘. ׳™׳›׳•׳׳™׳ ׳׳¨׳•׳¥ ׳¢׳©׳¨׳•׳× ׳§׳•׳ ׳˜׳™׳™׳ ׳¨׳™׳ ׳׳׳•׳×׳• Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳“׳™׳׳•׳ | ׳×׳¨׳’׳•׳: ׳©׳“׳•׳ (׳©׳™׳¨׳•׳× ׳¨׳§׳¢)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳׳ ׳•׳¢ ׳”׳׳¨׳›׳–׳™ ׳©׳ ׳“׳•׳§׳¨ ׳©׳¨׳¥ ׳‘׳¨׳§׳¢ (Docker Engine). ׳”׳•׳ ׳–׳” ׳©׳׳׳–׳™׳ ׳׳‘׳§׳©׳•׳× ׳©׳ ׳”׳׳§׳•׳— ׳•׳׳‘׳¦׳¢ ׳׳•׳×׳ ׳‘׳₪׳•׳¢׳.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳‘׳™׳™׳ ׳“ ׳׳׳•׳ ׳˜ | ׳×׳¨׳’׳•׳: ׳¢׳™׳’׳•׳ / ׳—׳™׳‘׳•׳¨ ׳™׳©׳™׳¨</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳—׳™׳‘׳•׳¨ ׳×׳™׳§׳™׳™׳” ׳¡׳₪׳¦׳™׳₪׳™׳× ׳׳”׳׳—׳©׳‘ ׳©׳׳›׳ ׳׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨. ׳›׳ ׳©׳™׳ ׳•׳™ ׳‘׳׳₪׳˜׳•׳₪ ׳™׳©׳×׳§׳£ ׳׳™׳“ ׳‘׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨ (׳׳•׳©׳׳ ׳׳₪׳™׳×׳•׳—).</p>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">נ³ Docker & Containers</h3>
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

    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">׳׳•׳©׳’׳™ Docker ׳•-Containers נ³</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳׳™׳׳’' | ׳×׳¨׳’׳•׳: ׳×׳׳•׳ ׳” / ׳©׳‘׳׳•׳ ׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳©׳¨׳˜׳•׳˜ ׳׳• ׳×׳‘׳ ׳™׳× ׳׳§׳¨׳™׳׳” ׳‘׳׳‘׳“ ׳©׳׳›׳™׳׳” ׳׳× ׳”׳§׳•׳“, ׳”׳¡׳₪׳¨׳™׳•׳× ׳•׳׳¢׳¨׳›׳× ׳”׳”׳₪׳¢׳׳” ׳©׳“׳¨׳•׳©׳™׳ ׳׳”׳¨׳¦׳× ׳”׳׳₪׳׳™׳§׳¦׳™׳”. ׳–׳” ׳›׳׳• ׳§׳•׳‘׳¥ ׳”׳×׳§׳ ׳” (ISO) ׳©׳׳ ׳ ׳™׳×׳ ׳׳©׳ ׳•׳×.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•׳ ׳˜׳™׳™׳ ׳¨ | ׳×׳¨׳’׳•׳: ׳׳›׳•׳׳” / ׳׳™׳›׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳•׳₪׳¢ ׳—׳™ ׳•׳¨׳¥ ׳©׳ Image. ׳–׳”׳• ׳”׳׳—׳©׳‘ ׳”׳§׳˜׳ ׳•׳”׳׳‘׳•׳“׳“ ׳©׳׳ ׳• ׳‘׳×׳•׳ ׳”׳׳—׳©׳‘. ׳™׳›׳•׳׳™׳ ׳׳¨׳•׳¥ ׳¢׳©׳¨׳•׳× ׳§׳•׳ ׳˜׳™׳™׳ ׳¨׳™׳ ׳׳׳•׳×׳• Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳“׳™׳׳•׳ | ׳×׳¨׳’׳•׳: ׳©׳“׳•׳ (׳©׳™׳¨׳•׳× ׳¨׳§׳¢)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳׳ ׳•׳¢ ׳”׳׳¨׳›׳–׳™ ׳©׳ ׳“׳•׳§׳¨ ׳©׳¨׳¥ ׳‘׳¨׳§׳¢ (Docker Engine). ׳”׳•׳ ׳–׳” ׳©׳׳׳–׳™׳ ׳׳‘׳§׳©׳•׳× ׳©׳ ׳”׳׳§׳•׳— ׳•׳׳‘׳¦׳¢ ׳׳•׳×׳ ׳‘׳₪׳•׳¢׳.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳‘׳™׳™׳ ׳“ ׳׳׳•׳ ׳˜ | ׳×׳¨׳’׳•׳: ׳¢׳™׳’׳•׳ / ׳—׳™׳‘׳•׳¨ ׳™׳©׳™׳¨</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳—׳™׳‘׳•׳¨ ׳×׳™׳§׳™׳™׳” ׳¡׳₪׳¦׳™׳₪׳™׳× ׳׳”׳׳—׳©׳‘ ׳©׳׳›׳ ׳׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨. ׳›׳ ׳©׳™׳ ׳•׳™ ׳‘׳׳₪׳˜׳•׳₪ ׳™׳©׳×׳§׳£ ׳׳™׳“ ׳‘׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨ (׳׳•׳©׳׳ ׳׳₪׳™׳×׳•׳—).</p>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">נ³ Docker & Containers</h3>
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

    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">׳׳•׳©׳’׳™ Docker ׳•-Containers נ³</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳׳™׳׳’' | ׳×׳¨׳’׳•׳: ׳×׳׳•׳ ׳” / ׳©׳‘׳׳•׳ ׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳©׳¨׳˜׳•׳˜ ׳׳• ׳×׳‘׳ ׳™׳× ׳׳§׳¨׳™׳׳” ׳‘׳׳‘׳“ ׳©׳׳›׳™׳׳” ׳׳× ׳”׳§׳•׳“, ׳”׳¡׳₪׳¨׳™׳•׳× ׳•׳׳¢׳¨׳›׳× ׳”׳”׳₪׳¢׳׳” ׳©׳“׳¨׳•׳©׳™׳ ׳׳”׳¨׳¦׳× ׳”׳׳₪׳׳™׳§׳¦׳™׳”. ׳–׳” ׳›׳׳• ׳§׳•׳‘׳¥ ׳”׳×׳§׳ ׳” (ISO) ׳©׳׳ ׳ ׳™׳×׳ ׳׳©׳ ׳•׳×.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•׳ ׳˜׳™׳™׳ ׳¨ | ׳×׳¨׳’׳•׳: ׳׳›׳•׳׳” / ׳׳™׳›׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳•׳₪׳¢ ׳—׳™ ׳•׳¨׳¥ ׳©׳ Image. ׳–׳”׳• ׳”׳׳—׳©׳‘ ׳”׳§׳˜׳ ׳•׳”׳׳‘׳•׳“׳“ ׳©׳׳ ׳• ׳‘׳×׳•׳ ׳”׳׳—׳©׳‘. ׳™׳›׳•׳׳™׳ ׳׳¨׳•׳¥ ׳¢׳©׳¨׳•׳× ׳§׳•׳ ׳˜׳™׳™׳ ׳¨׳™׳ ׳׳׳•׳×׳• Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳“׳™׳׳•׳ | ׳×׳¨׳’׳•׳: ׳©׳“׳•׳ (׳©׳™׳¨׳•׳× ׳¨׳§׳¢)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳׳ ׳•׳¢ ׳”׳׳¨׳›׳–׳™ ׳©׳ ׳“׳•׳§׳¨ ׳©׳¨׳¥ ׳‘׳¨׳§׳¢ (Docker Engine). ׳”׳•׳ ׳–׳” ׳©׳׳׳–׳™׳ ׳׳‘׳§׳©׳•׳× ׳©׳ ׳”׳׳§׳•׳— ׳•׳׳‘׳¦׳¢ ׳׳•׳×׳ ׳‘׳₪׳•׳¢׳.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳‘׳™׳™׳ ׳“ ׳׳׳•׳ ׳˜ | ׳×׳¨׳’׳•׳: ׳¢׳™׳’׳•׳ / ׳—׳™׳‘׳•׳¨ ׳™׳©׳™׳¨</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳—׳™׳‘׳•׳¨ ׳×׳™׳§׳™׳™׳” ׳¡׳₪׳¦׳™׳₪׳™׳× ׳׳”׳׳—׳©׳‘ ׳©׳׳›׳ ׳׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨. ׳›׳ ׳©׳™׳ ׳•׳™ ׳‘׳׳₪׳˜׳•׳₪ ׳™׳©׳×׳§׳£ ׳׳™׳“ ׳‘׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨ (׳׳•׳©׳׳ ׳׳₪׳™׳×׳•׳—).</p>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">נ³ Docker & Containers</h3>
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

    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">׳׳•׳©׳’׳™ Docker ׳•-Containers נ³</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳׳™׳׳’' | ׳×׳¨׳’׳•׳: ׳×׳׳•׳ ׳” / ׳©׳‘׳׳•׳ ׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳©׳¨׳˜׳•׳˜ ׳׳• ׳×׳‘׳ ׳™׳× ׳׳§׳¨׳™׳׳” ׳‘׳׳‘׳“ ׳©׳׳›׳™׳׳” ׳׳× ׳”׳§׳•׳“, ׳”׳¡׳₪׳¨׳™׳•׳× ׳•׳׳¢׳¨׳›׳× ׳”׳”׳₪׳¢׳׳” ׳©׳“׳¨׳•׳©׳™׳ ׳׳”׳¨׳¦׳× ׳”׳׳₪׳׳™׳§׳¦׳™׳”. ׳–׳” ׳›׳׳• ׳§׳•׳‘׳¥ ׳”׳×׳§׳ ׳” (ISO) ׳©׳׳ ׳ ׳™׳×׳ ׳׳©׳ ׳•׳×.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•׳ ׳˜׳™׳™׳ ׳¨ | ׳×׳¨׳’׳•׳: ׳׳›׳•׳׳” / ׳׳™׳›׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳•׳₪׳¢ ׳—׳™ ׳•׳¨׳¥ ׳©׳ Image. ׳–׳”׳• ׳”׳׳—׳©׳‘ ׳”׳§׳˜׳ ׳•׳”׳׳‘׳•׳“׳“ ׳©׳׳ ׳• ׳‘׳×׳•׳ ׳”׳׳—׳©׳‘. ׳™׳›׳•׳׳™׳ ׳׳¨׳•׳¥ ׳¢׳©׳¨׳•׳× ׳§׳•׳ ׳˜׳™׳™׳ ׳¨׳™׳ ׳׳׳•׳×׳• Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳“׳™׳׳•׳ | ׳×׳¨׳’׳•׳: ׳©׳“׳•׳ (׳©׳™׳¨׳•׳× ׳¨׳§׳¢)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳׳ ׳•׳¢ ׳”׳׳¨׳›׳–׳™ ׳©׳ ׳“׳•׳§׳¨ ׳©׳¨׳¥ ׳‘׳¨׳§׳¢ (Docker Engine). ׳”׳•׳ ׳–׳” ׳©׳׳׳–׳™׳ ׳׳‘׳§׳©׳•׳× ׳©׳ ׳”׳׳§׳•׳— ׳•׳׳‘׳¦׳¢ ׳׳•׳×׳ ׳‘׳₪׳•׳¢׳.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳‘׳™׳™׳ ׳“ ׳׳׳•׳ ׳˜ | ׳×׳¨׳’׳•׳: ׳¢׳™׳’׳•׳ / ׳—׳™׳‘׳•׳¨ ׳™׳©׳™׳¨</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳—׳™׳‘׳•׳¨ ׳×׳™׳§׳™׳™׳” ׳¡׳₪׳¦׳™׳₪׳™׳× ׳׳”׳׳—׳©׳‘ ׳©׳׳›׳ ׳׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨. ׳›׳ ׳©׳™׳ ׳•׳™ ׳‘׳׳₪׳˜׳•׳₪ ׳™׳©׳×׳§׳£ ׳׳™׳“ ׳‘׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨ (׳׳•׳©׳׳ ׳׳₪׳™׳×׳•׳—).</p>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">נ³ Docker & Containers</h3>
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

    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">׳׳•׳©׳’׳™ Docker ׳•-Containers נ³</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳׳™׳׳’' | ׳×׳¨׳’׳•׳: ׳×׳׳•׳ ׳” / ׳©׳‘׳׳•׳ ׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳©׳¨׳˜׳•׳˜ ׳׳• ׳×׳‘׳ ׳™׳× ׳׳§׳¨׳™׳׳” ׳‘׳׳‘׳“ ׳©׳׳›׳™׳׳” ׳׳× ׳”׳§׳•׳“, ׳”׳¡׳₪׳¨׳™׳•׳× ׳•׳׳¢׳¨׳›׳× ׳”׳”׳₪׳¢׳׳” ׳©׳“׳¨׳•׳©׳™׳ ׳׳”׳¨׳¦׳× ׳”׳׳₪׳׳™׳§׳¦׳™׳”. ׳–׳” ׳›׳׳• ׳§׳•׳‘׳¥ ׳”׳×׳§׳ ׳” (ISO) ׳©׳׳ ׳ ׳™׳×׳ ׳׳©׳ ׳•׳×.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•׳ ׳˜׳™׳™׳ ׳¨ | ׳×׳¨׳’׳•׳: ׳׳›׳•׳׳” / ׳׳™׳›׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳•׳₪׳¢ ׳—׳™ ׳•׳¨׳¥ ׳©׳ Image. ׳–׳”׳• ׳”׳׳—׳©׳‘ ׳”׳§׳˜׳ ׳•׳”׳׳‘׳•׳“׳“ ׳©׳׳ ׳• ׳‘׳×׳•׳ ׳”׳׳—׳©׳‘. ׳™׳›׳•׳׳™׳ ׳׳¨׳•׳¥ ׳¢׳©׳¨׳•׳× ׳§׳•׳ ׳˜׳™׳™׳ ׳¨׳™׳ ׳׳׳•׳×׳• Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳“׳™׳׳•׳ | ׳×׳¨׳’׳•׳: ׳©׳“׳•׳ (׳©׳™׳¨׳•׳× ׳¨׳§׳¢)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳׳ ׳•׳¢ ׳”׳׳¨׳›׳–׳™ ׳©׳ ׳“׳•׳§׳¨ ׳©׳¨׳¥ ׳‘׳¨׳§׳¢ (Docker Engine). ׳”׳•׳ ׳–׳” ׳©׳׳׳–׳™׳ ׳׳‘׳§׳©׳•׳× ׳©׳ ׳”׳׳§׳•׳— ׳•׳׳‘׳¦׳¢ ׳׳•׳×׳ ׳‘׳₪׳•׳¢׳.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳‘׳™׳™׳ ׳“ ׳׳׳•׳ ׳˜ | ׳×׳¨׳’׳•׳: ׳¢׳™׳’׳•׳ / ׳—׳™׳‘׳•׳¨ ׳™׳©׳™׳¨</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳—׳™׳‘׳•׳¨ ׳×׳™׳§׳™׳™׳” ׳¡׳₪׳¦׳™׳₪׳™׳× ׳׳”׳׳—׳©׳‘ ׳©׳׳›׳ ׳׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨. ׳›׳ ׳©׳™׳ ׳•׳™ ׳‘׳׳₪׳˜׳•׳₪ ׳™׳©׳×׳§׳£ ׳׳™׳“ ׳‘׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨ (׳׳•׳©׳׳ ׳׳₪׳™׳×׳•׳—).</p>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">נ³ Docker & Containers</h3>
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

    <h3 style="margin-top: 30px; border-bottom: 2px solid #555; padding-bottom: 5px; color: var(--gold);">׳׳•׳©׳’׳™ Docker ׳•-Containers נ³</h3>
    <div class="modal-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Image</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳׳™׳׳’' | ׳×׳¨׳’׳•׳: ׳×׳׳•׳ ׳” / ׳©׳‘׳׳•׳ ׳”</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳©׳¨׳˜׳•׳˜ ׳׳• ׳×׳‘׳ ׳™׳× ׳׳§׳¨׳™׳׳” ׳‘׳׳‘׳“ ׳©׳׳›׳™׳׳” ׳׳× ׳”׳§׳•׳“, ׳”׳¡׳₪׳¨׳™׳•׳× ׳•׳׳¢׳¨׳›׳× ׳”׳”׳₪׳¢׳׳” ׳©׳“׳¨׳•׳©׳™׳ ׳׳”׳¨׳¦׳× ׳”׳׳₪׳׳™׳§׳¦׳™׳”. ׳–׳” ׳›׳׳• ׳§׳•׳‘׳¥ ׳”׳×׳§׳ ׳” (ISO) ׳©׳׳ ׳ ׳™׳×׳ ׳׳©׳ ׳•׳×.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Container</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳§׳•׳ ׳˜׳™׳™׳ ׳¨ | ׳×׳¨׳’׳•׳: ׳׳›׳•׳׳” / ׳׳™׳›׳</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳׳•׳₪׳¢ ׳—׳™ ׳•׳¨׳¥ ׳©׳ Image. ׳–׳”׳• ׳”׳׳—׳©׳‘ ׳”׳§׳˜׳ ׳•׳”׳׳‘׳•׳“׳“ ׳©׳׳ ׳• ׳‘׳×׳•׳ ׳”׳׳—׳©׳‘. ׳™׳›׳•׳׳™׳ ׳׳¨׳•׳¥ ׳¢׳©׳¨׳•׳× ׳§׳•׳ ׳˜׳™׳™׳ ׳¨׳™׳ ׳׳׳•׳×׳• Image.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Daemon</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳“׳™׳׳•׳ | ׳×׳¨׳’׳•׳: ׳©׳“׳•׳ (׳©׳™׳¨׳•׳× ׳¨׳§׳¢)</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳”׳׳ ׳•׳¢ ׳”׳׳¨׳›׳–׳™ ׳©׳ ׳“׳•׳§׳¨ ׳©׳¨׳¥ ׳‘׳¨׳§׳¢ (Docker Engine). ׳”׳•׳ ׳–׳” ׳©׳׳׳–׳™׳ ׳׳‘׳§׳©׳•׳× ׳©׳ ׳”׳׳§׳•׳— ׳•׳׳‘׳¦׳¢ ׳׳•׳×׳ ׳‘׳₪׳•׳¢׳.</p>
     </div>
     <div class="lib-card" style="border-left: 4px solid var(--gold); background: rgba(245, 197, 24, 0.05); padding: 15px; border-radius: 8px;">
      <h4 style="color: var(--gold); font-size: 1.25rem; margin-bottom: 2px;">Bind Mount</h4>
      <p style="font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 8px; font-style: italic;">׳”׳’׳™׳™׳”: ׳‘׳™׳™׳ ׳“ ׳׳׳•׳ ׳˜ | ׳×׳¨׳’׳•׳: ׳¢׳™׳’׳•׳ / ׳—׳™׳‘׳•׳¨ ׳™׳©׳™׳¨</p>
      <p style="margin-bottom: 15px;"><b>׳׳©׳׳¢׳•׳×:</b> ׳—׳™׳‘׳•׳¨ ׳×׳™׳§׳™׳™׳” ׳¡׳₪׳¦׳™׳₪׳™׳× ׳׳”׳׳—׳©׳‘ ׳©׳׳›׳ ׳׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨. ׳›׳ ׳©׳™׳ ׳•׳™ ׳‘׳׳₪׳˜׳•׳₪ ׳™׳©׳×׳§׳£ ׳׳™׳“ ׳‘׳×׳•׳ ׳”׳§׳•׳ ׳˜׳™׳™׳ ׳¨ (׳׳•׳©׳׳ ׳׳₪׳™׳×׳•׳—).</p>
     </div>
    </div>

    <h3 style="margin-top: 30px; border-bottom: 2px solid var(--gold); padding-bottom: 5px; color: var(--text-main);">נ³ Docker & Containers</h3>
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
};

