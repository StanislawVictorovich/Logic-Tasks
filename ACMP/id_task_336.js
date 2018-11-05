const arr = [1, 2, 2, 2, 1, 1, 2, 1, 2, 1, 2];

const lift = (array) => {
    let numberOfFloors = 0, floorsCounter = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] == 2 ? floorsCounter++ : floorsCounter--;
        if (floorsCounter > numberOfFloors) {
            numberOfFloors = floorsCounter;
        }
    }
    return numberOfFloors;
}

console.log(lift(arr));