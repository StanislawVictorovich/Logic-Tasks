const number = 5;

const summ = (number) => {
    let result = 0, i = number;
    while(i) {
        result += i--;
    }
    return result;
}

console.log(summ(number));