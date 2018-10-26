const arr = [10, 300, -18, 405, 45, 93, 57, 1 , 4, -5];

const map = (array, callback) => {
    if (typeof callback !== 'function') {
        return 0;
    }
    let arr = [];
    for (i = 0; i < array.length; i++){
        arr.push(callback(array[i]));
    }
    return arr;
}

map(arr, (number) => {
    return number * 20;
});