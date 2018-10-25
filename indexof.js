const indexOf = (array,element) => {
    for (i = 0; i < array.length; i++){
        if (array[i] === element) return i;
    }
    return -1;
}

console.log(indexOf([345,5,6,2,45,7,8],45));