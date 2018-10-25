const factorial = (number) => {
    let result = number;
    for (i = 1; i < number; i++) {
        result *= i;
    }
    return result;
}

const factorialRecurse = (number) => {
    if (number === 0) return 0;
    if (number === 1) return 1;
    return number * factorialRecurse(--number);
}

console.log(factorial(prompt()));
console.log(factorialRecurse(prompt()));
