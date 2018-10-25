let arr = [1, 2, 3, 4, 5, 6, 8, 1];

const isSorted = (array) => {
    for (i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            console.log('array is not sorted');
            return;
        }
    }
    console.log('array is sorted');
}

isSorted(arr);