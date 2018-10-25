const isPrime = (number) => {
    if ((number % 2 == 0) && (number != 2))
        console.log("Composite number");
    else if (number == 2)
        console.log("Prime number");
    else {
        k = Math.round(Math.sqrt(number));
        flag = false;
        for (i = 2; i < k + 1; i++)
            if (number % i == 0) {
                console.log("Composite number");
                flag = true;
                break;
            }
        if (flag == false)
            console.log("Prime number");
    }
}

isPrime(prompt());