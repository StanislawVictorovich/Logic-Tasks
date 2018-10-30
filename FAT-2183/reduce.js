const arr = [10, 300, 18, 405, 45, 93, 57, 1, 4, 5];

// начальное значение тоже нужно передавать
const reduce = (array, callback) => {
    if (typeof callback !== 'function') {
        return 0;
    }
    let arr = [], result = 0;
    for (i = 0; i < array.length; i++) {
        result = callback(result, array[i], i, array);
    }
    return result;
}

reduce(arr, (previousValue, currentItem, index, arr) => {
    return previousValue + currentItem;
});

