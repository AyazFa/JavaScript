const html = `<html>
<body>
<button class="myButton">Нажми меня повторно</button>
</body>
</html>`;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(html);

module.exports = dom;