const array1 = [0, 4, 5, 7, 7, 5, 4, 0];
const array2 = [6, 6, 7, 8, 9, 6, 5, 45, -5, 67];

/**
 * @description Represents intersection of two arrays
 * @param {array} arr1 array number one
 * @param {array} arr2 array number two
 */
const intersection = (arr1, arr2) => {
    let arrResult = [];
    if (arr1.arrLength > arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                arr1[i] == arr2[j] && arrResult.push(arr1[i]);
            }
        }
    } else {
        for (let i = 0; i < arr2.length; i++) {
            for (let j = 0; j < arr1.length; j++) {
                arr1[i] == arr2[j] && arrResult.push(arr1[i]);
            }
        }     
    }
    return arrResult;
}

console.log(intersection(array1, array2));

/* 

или еще вариант - превращать массив в объект
const arr1 = [1,2,5] превратиться в
const obj1 = {
  '1': true,
  '2': true,
  '5': true
}
где ключ - это элемент массива, а значение - просто true
потом проходим по второму массиву, например const arr2 = [2, 5, 8]
и проверяем
if obj1[ arr2[i] ] === true -> пушить в финальный массив

можно как-то попытаться частотность юзать

obj = {
  '1' : 1,
  '2' : 3
}
ключ- элемент массива
значение - кол-во повторений
*/