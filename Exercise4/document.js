const html = `<HTML>
<BODY>
    <button class="myButton">Нажми меня</button>
    <button class="myButton2">Нажми меня повторно</button>
</BODY>
</HTML>`;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(html);

module.exports = dom;