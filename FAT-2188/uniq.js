const array1 = [0, 4, 5, 7, 7, 5, 4, 0];
const array2 = [9, 6, 7, 8, 79, 64, 5, 45, -5, 67];

/**
 * Represetns genereting new array with unique numbers
 * @param {array} array 
 * @returns new array of unique numbers
 */
const uniq = (array) => {
    let object = {};
    for (let i = 0; i < array.length; i++) {
        object[array[i]] = 0;
    }
    return Object.keys(object);
}

console.log(uniq(array1));
console.log(uniq(array2));

/* 
newIteration:continue newIteration;
vэто не самая хорошая практика
постарайся переписать код без этой штуки
uniq.js
*/