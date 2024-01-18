const cat = {
    color: "black",
    type: {name: "animal", area: "home"},  
    age: 1
};
const shark = {
    color: "green",
    type: {name: "fish", area: "sea"},  
    age: 1
};
const bear = {
    color: "black",
    type: {name: "animal", area: "forest"},  
    age: 10
};
const arr1 = [0,1,2,3];
const arr2 = [0,1,2,4];

function areEqual(actual, expected) {
    if (typeof actual !== typeof expected){
        return 'Разные типы';
    }
    switch (typeof actual){
        case "string":
        case "number":                    
        case "bigint":
        case "boolean":
        case "undefined":
            if(actual !== expected) {
                return ` Значение ${actual} не равно ${expected}.`
            }
            break;    
        case "object":
            if (Array.isArray(actual)){
                const res = equalArray(actual, expected)
                if(res !== '') {
                    return res;
                };
            }
            else{
                const res = equalObject(actual, expected)
                if(res !== '') {
                    return res;
                };                              
            }
            break;
    }
    return '';
}

/** для массивов */ 
function equalArray(actual, expected) {
    let message = '';
    for(let i=0; i<actual.length; i++){
        const res = areEqual(actual[i], expected[i])
        if(!res) {
            message = message.concat(`[${i}]`) 
        }
        else{
            message = message.concat(`[${i}]`) + `.${res}`
            break; 
        }
    }
    return message;
}

/** для объектов */
function equalObject(actual, expected) {
    let propsActual = Object.keys(actual);
    let propsExpected = Object.keys(expected);
    let message = '';
    let errMessage = '';    
    /** сравнение по каждому свойству */ 
    for(let i=0; i<propsActual.length; i++){
        if(propsActual[i] !== propsExpected[i]){
            return 'Разные типы';
        }                  
        const res = areEqual(actual[propsActual[i]], expected[propsExpected[i]])
        if(!res) {
            message = message.concat(`${propsActual[i]}.`)
        }
        else{
            errMessage = message.concat(`${propsActual[i]}.`) + `${res}`;
            break; 
        }
    }
    return errMessage; 
}

function deepEqual(actual,expected) {
    let res = areEqual(actual, expected)
    if(!res){
        console.log('OK. Объекты равны.')
    }
    else{
        console.log(`Ошибка. Путь до неидентичного свойства: ${res}`)
    }
}

deepEqual(1,2)
deepEqual(arr1, arr2)
deepEqual(cat, shark)
deepEqual(cat, cat)
deepEqual(cat, bear)
