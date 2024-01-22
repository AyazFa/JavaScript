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
const obj1 = null;
const obj2 = { a:1 };
const obj3 = null;
const arr3 = [0,null,2,3];
const arr4 = [0,1,2,4];

function areEqual(actual, expected) {
    if (actual === null) {
        if (expected === null){
            return '';
        }
        else {
            return 'Сравниваемые элементы не равны';
        }
    }
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

console.log('Сравнение arr3 и arr4: ')
deepEqual(arr3,arr4)

console.log('Сравнение obj1 и obj3: ')
deepEqual(obj1,obj3)

console.log('Сравнение obj1 и obj2: ')
deepEqual(obj1,obj2)

console.log('Сравнение 1 и 2: ')
deepEqual(1,2)

console.log('Сравнение arr1 и arr2: ')
deepEqual(arr1, arr2)

console.log('Сравнение cat и shark: ')
deepEqual(cat, shark)

console.log('Сравнение cat и cat: ')
deepEqual(cat, cat)

console.log('Сравнение cat и bear: ')
deepEqual(cat, bear)
