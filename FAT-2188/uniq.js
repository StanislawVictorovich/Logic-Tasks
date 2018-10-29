const array1 = [0, 4, 5, 7, 7, 5, 4, 0];
const array2 = [9, 6, 7, 8, 79, 64, 5, 45, -5, 67];

/**
 * Represetns genereting new array with unique numbers
 * @param {array} array 
 * @returns new array of unique numbers
 */
const uniq = (array) => {
    let resultArr = [];
    newIteration:
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++){
            if (array[i] === array[j]) {
                continue newIteration;
            }
        }
        resultArr.push(array[i]);
    }
    return resultArr;
}

console.log(uniq(array1));
console.log(uniq(array2));