const { resolve, basename } = require('path');
const { readdir } = require('fs').promises;

let level = 0;
async function* getFiles(dir) {
    console.log("-".repeat(level), basename(dir));
    level = level + 1;    
    const dirents = await readdir(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        const res = resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            yield* getFiles(res);
        } else {
            yield `${"- ".repeat(level)}${basename(res)}`;
        }
    }
    level = 1;
}

;(async () => {
    for await (const f of getFiles('Exercise3/node')) {
      console.log(f);
    }
  })()