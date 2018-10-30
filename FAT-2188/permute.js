/**
 * @description permutation of input string
 * @param {string} string input string 
 * @param {*} callback function
 */
function permute(string, callback) {
    if (string.length > 1) {
        for (let i = 0; i < string.length; i++) {
            let tmp = string.substr(0, i) + string.substr(i + 1);
            let prefix = string.substr(i, 1);
            permute(tmp, function (str) {
                callback(prefix + str)
            })
        }
    } else {
        callback(string);
    }
}

let str1 = prompt();
permute(str1, function (str) {
    console.log(str);
})
