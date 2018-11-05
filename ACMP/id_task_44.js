const str = '<<<<>>--><--<<--<<>>>--><<<<<';

/**
 * @description calculating amount of arrows in string
 * @param {String} string 
 * @returns counter
 */
const arrowsCount = (string) => {
    const template1 = '>>-->', template2 = '<--<<';
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.substr(i, 5) === template1 || string.substr(i, 5) === template2) {
            counter++;
        }
    }
    return counter;
}

console.log(arrowsCount(str));