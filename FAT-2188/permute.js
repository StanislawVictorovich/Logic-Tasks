/**
 * @description permutation of input string
 * @param {string} string input string 
 * @param {*} callback function
 */
function permute(string, callback) {
    if (string.length > 1) {
        for (var i = 0; i < string.length; i++) {
            var tmp = string.substr(0, i) + string.substr(i + 1);
            var prefix = string.substr(i, 1);
            permute(tmp, function (str) {
                callback(prefix + str)
            })
        }
    } else {
        callback(string);
    }
}

var str1 = prompt();
permute(str1, function (str) {
    console.log(str);
})
