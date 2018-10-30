let object1 = {
    a: 2,
    b: 4,
    c: {},
    e: 456
}

let object2 = {
    f: 34234,
    g: {},
    h: {},
    i: 91,
    j: 33,
    k: {}
}

/**
 * @description Represents assignDeep, that unions two object onto new one
 * like {...object1, ...object2} in ECMA 2018
 * @param {Object} object1 first object
 * @param {Object} object2 second object
 * @returns new Object
 */
const assignDeep = (object1, object2) => { // 
    let resultObject = new Object;
    for (let key in object1) { 
        resultObject[key] = object1[key];
    }
    for (let key in object2) {
        resultObject[key] = object2[key];
    }
    return resultObject;
}

console.log(assignDeep(object1, object2));

/*

https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c

*/