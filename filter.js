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
    let a = [];
    for (i = 0; i < array.length; i++){
        if (callback(array[i])) a.push(array[i]);
    }
    return a;
}

filter(arr, (number) => {
    return number >= 20;
});