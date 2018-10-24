const isPrime = (number) => {
    if ((number%2==0)&&(number!=2)) 
        console.log("Составное число");
    else if (number==2)
        console.log("Простое число");
    else{ 
        k=Math.round(Math.sqrt(number));
        flag = false;
        for(i=2; i<k+1; i++)
            if(number%i==0)
            {
                console.log("Составное число");
                flag = true;
                break;
         } 
    if (flag == false)
       console.log("Простое число");
    }
}

isPrime(prompt());