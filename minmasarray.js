const arr = [4, 67, 7, 90, 1, 45, 78, 92, 64];

const minMasArray = (array) => {
    // можно решить одним циклом, только небольшой баг в инициализации этих переменных
    let min=0, max=0;
    for(i = 0; i < array.length; i++){
        if (array[i] < min) min = array[i];
        if (array[i] > max) max = array[i];
    }
    min = max;
    for(i = 0; i < array.length; i++){
        if (array[i] < min) min = array[i]; 
    }
    console.log(`min = ${min}; max = ${max}`);
}

minMasArray(arr);
