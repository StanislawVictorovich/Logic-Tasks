const arr = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];

/**
 * @description calculating the biggest sequence of nulls in array
 * @param {Array} array 
 */
const numberOfNulls = (array) => {
    let nullCounter = 0, result = 0;
    for (let i = 0; i < array.length; i++) {
        !array[i] ? nullCounter++ : nullCounter = 0;
        if (nullCounter > result) {
            result = nullCounter;
        }
    }
    return result;
}

console.log(numberOfNulls(arr));