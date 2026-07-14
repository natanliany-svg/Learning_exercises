const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// Mock the data objects
dom.window.content_basics = { basics: { content: '<div></div>' } };
dom.window.content_docker = { dockerIntro: { content: '<div></div>' } };
// ... wait, JSDOM won't execute scripts unless runScripts: 'dangerously' is set.

// Let's just use Puppeteer again! It worked perfectly earlier!
