let array = [90, 5, 6, -3, -56, 19, 48, 4, 9, 11, 45];

/**
 * @description Represents sorting array
 * @param {array} arr 
 * @returns sorted array
 */
const sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            (arr[j] > arr[j+1]) && ([arr[j], arr[j+1]] = [arr[j+1], arr[j]]);
        }    
    }
    return arr;
}

console.log(sort(array));