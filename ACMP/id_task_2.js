const number = 5;

/**
 * @description adding all numbers from 0 to N
 * @param {number} number 
 */
const summ = (number) => {
    let result = 0, i = number;
    while(i) {
        result += i--;
    }
    return result;
}

console.log(summ(number));