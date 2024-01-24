const { resolve, basename } = require('path');
const { readdir } = require('fs').promises;

let rootPath = '';
let rootDepth = 0;
if (process.argv.length !== 5) {
    console.error('Нужно передать аргументы вызова: корневой путь и глубину поиска. Пример вызова "node tree.js ./node -d 2"');
    process.exit(1);
}
else{  
    rootPath = process.argv[2];
    if (process.argv[3] && process.argv[3] !== '-d') {
        console.log('Не передан флаг -d');
    }  
    rootDepth = process.argv[4];
}

let level = 0;
async function* getFiles(dir,depth) {
    console.log("- ".repeat(level), basename(dir));
    level = level + 1; 
    if (level > depth){
        level = level - 1;
        return
    }   
    const dirents = await readdir(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        const res = resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            yield* getFiles(res,depth);
        } else {
            yield `${"- ".repeat(level)}${basename(res)}`;
        }
    }
    level = 1;
}

(async () => {
    for await (const f of getFiles(rootPath,rootDepth)) {
      console.log(f);
    }
  })()