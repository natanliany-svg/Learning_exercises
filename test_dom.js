const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });

setTimeout(() => {
    const lastCardBody = dom.window.document.querySelector('.card:last-child .card-body');
    if (lastCardBody) {
        console.log("Last card outer HTML:", lastCardBody.outerHTML.substring(0, 500));
        console.log("Last card inner HTML ends with:", lastCardBody.innerHTML.substring(lastCardBody.innerHTML.length - 200));
    } else {
        console.log("Not found");
    }
}, 3000);
