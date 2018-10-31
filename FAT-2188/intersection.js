const array1 = [0, 4, 5, 7, 7, 5, 4, 0];
const array2 = [6, 6, 7, 8, 9, 6, 5, 45, -5, 67];

/**
 * @description Represents intersection of two arrays
 * @param {Array} arr1 array number one
 * @param {Array} arr2 array number two
 * @returns {Array} array after intersection
 */
const intersection = (array1, array2) => {
    object = new Object();
    for (let i = 0, j = 0, r = 0; r < array1.length + array2.length; i++, j++, r++) {
        if (i < array1.length) {
            object[array1[i]] = true;
        }
        if (j < array2.length) {
            object[array2[j]] = true;
        }
    }
    return Object.keys(object); 
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
