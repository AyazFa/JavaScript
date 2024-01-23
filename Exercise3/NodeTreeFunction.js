const path = require('path')
const fs = require('fs')
const myPath = path.resolve('Exercise3/node') 

function tree(rootPath, depth) {
    fs.readdir(rootPath, {withFileTypes: true}, (err, elements) => {
        if(err){
            console.log(err)
            return
        }
        let rootPathName = path.basename(myPath)
        for (let i=0; i<elements.length; i++){
            let item = elements[i]           
            let itemName = item.name
            if(item.isDirectory()){
                console.log(itemName)
                let itemPath = path.join(myPath,itemName)                
                tree(itemPath)
            }
            else{
                console.log(itemName)
            }

        }      
    });
}

tree(myPath, 2)
