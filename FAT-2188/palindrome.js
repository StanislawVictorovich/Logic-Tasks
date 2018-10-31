const array1 = [0, 4, 5, 7, 7, 5, 4, 0];
const array2 = [6, 6, 7, 8, 9, 6, 5, 45, -5, 67];

/**
 * 
 * @param {array} array array :-)
 * @returns if array palindrome or not 
 */
const isPalindrome = (array) => {
    for (i = 0; i < array.length; i++) {
        if (array[i] !== array[array.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(array1));
console.log(isPalindrome(array2));
