const factorial = (number) => {
    let result=number;
    if (result==0) return 0;
    if (result==1) return 1;
    for(i=1;i<number;i++){
        result *= i;
    }
    return result;
}

console.log(factorial(prompt()));