const sequencePushedButtons: number[] = new Array(1, 2, 2, 1, 1, 2, 1, 2, 1, 2);

/**
 * @description calculating amount of floors in house 
 * @param {Array} array sequense of pushing buttons in lift
 * @returns amount of floors in house 
 */
class Lift {
  private numberOfFloors: number;
  private floorsCounter: number;
  private arrayOfButtons: number[];
  constructor (buttonSequence: number[]) {
    this.numberOfFloors = 0;
    this.floorsCounter = 0;
    this.arrayOfButtons = buttonSequence;
  }
  public get calculate():number {
    for (let i:number = 0; i < this.arrayOfButtons.length; i++) {
      this.arrayOfButtons[i] == 2 ? this.floorsCounter++ : this.floorsCounter--; 
      if (this.floorsCounter > this.numberOfFloors) {
        this.numberOfFloors = this.floorsCounter;
      }
    }
    return this.numberOfFloors;
  }
}

const myButtons = new Lift(sequencePushedButtons);

console.log(myButtons.calculate);