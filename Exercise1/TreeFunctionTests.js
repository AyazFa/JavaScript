const input = {
    "name": 1,
    "items": [{
        "name": 2,
        "items": [{ "name": 3 }, { "name": 4 }]
    }, {
        "name": 5,
        "items": [{ "name": 6 }, { "name": 7, "items": [{ "name": 8 }, { "name": 9 }] }]
    }]
};

let level = 0;
function tree(input) {
    console.log("-".repeat(level), input["name"]);
    if (input?.items !== undefined) {
        input.level = level + 1;
        level = input.level;
        for (let i = 0; i < input.items.length; i++) {
            input.items[i].level = input.level;
            level = input.items[i].level;
            tree(input.items[i]);
        }
    }
}

tree(input);