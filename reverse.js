const reverse = (string) => {
    let result = ' ', i = string.length;
    while(i-- >= 0) {
        result += string[i];
    }
    return result;
}

console.log(reverse(prompt()));