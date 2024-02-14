const dom = require("./document");
const getPath = require("./getPath");
test("Returns unique selector", () => {
    expect(getPath(dom.window.document.querySelector("button"))).toBe("Test");
});