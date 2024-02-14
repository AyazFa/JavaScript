const html = `<!DOCTYPE html>
<html>
<head>
    <title>Использование JavaScript метода .getAttributeNames() и getAttribute()</title>
</head>
<body>
    <div class="info">
        <button onclick="myFunc()" class="myButton" name="active-button" value="100" data-val="123">Нажми меня</button>      
        <div class="info">
            <a class="link"></a>        
        </div>     
    </div>
    <button onclick="mySecondFunc()" class="myButton" name="active-button" value="100" data-val="456">Нажми меня повторно</button> 
</body>
</html>`;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(html);

module.exports = dom;