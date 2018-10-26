/*const Array.prototype.myFilter = () => {
    for (var i = 0; i < this.length; i++) {
        arr.push(this[i]);
    }
    return arr;
};
const numbers = [10, 300, -18, 405, 45, 93, 57, 1 , 4, -5];
const newArrMoreThenFourty = numbers.myFilter((number) => {
    return number >= 40;
});
const newArrLessThenTwenty = numbers.myFilter((number) => {
    return number <= 20;
})
console.log(newArrMoreThenFourty);
console.log(newArrLessThenTwenty);*/

const arr = [10, 300, -18, 405, 45, 93, 57, 1 , 4, -5];

const filter = (array, callback) => {
    if (typeof callback !== 'function') {
        return 0;
    }
    let arr = [];
    for (i = 0; i < array.length; i++){
        if (callback(array[i])) arr.push(array[i]);
    }
    return arr;
}

filter(arr, (number) => {
    return number >= 20;
});