let arr = [1, 2, 3, 4, 5, 6, 8, 1];

const isSorted = (array) => {
    let flag = true;
    for (i = 0; i < array.length; i++) {
        if (array[i]>array[i+1]){
            console.log('Массив не отсортирован');
            flag = false;
        }
    }
    if (flag) console.log('Массив отсортирован');
}

isSorted(arr);