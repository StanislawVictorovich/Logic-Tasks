// есть баг, попробуй пофиксить

let arr1 = [1, 4, 6, 7, 3];
let arr2 = [1, 4, 6, 7, 2];

const compare = (array1, array2) => {
    array1.length !== array2.length && {return: false};
    for (i = 0; i < array1.length; i++) {
        array1[i] !== array2[i] && {return: false};
    }
    return true;
}


console.log(compare(arr1, arr2));
