const path = require('path')
const fs = require('fs')
const rootPath = path.resolve('node') 

let rootObj = {}
function tree(obj, currentPath, depth) {
    fs.readdir(currentPath, { withFileTypes: true }, (err, elements) => {
        if(err){
            console.log(err)
            return
        }
        let rootPathName = path.basename(currentPath)
        obj.name = rootPathName
        obj.items = []
        for (let element of elements){          
            let itemName = element.name
            elementObj = {}
            elementObj.name = itemName            
            if(element.isDirectory()){
                elementObj.items = []
                obj.items.push(elementObj)
                let itemPath = path.join(currentPath,itemName)                
                tree(elementObj, itemPath,depth)
            }
            else{
                obj.items.push(elementObj)
            }
        }     
    });
}

tree(rootObj, rootPath, 2)
