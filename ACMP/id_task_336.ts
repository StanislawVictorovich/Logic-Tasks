const arr = [1, 2, 2, 2, 1, 1, 2, 1, 2, 1, 2];

/**
 * @description calculating amount of floors in house 
 * @param {Array} array sequense of pushing buttons in lift
 * @returns amount of floors in house 
 */
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