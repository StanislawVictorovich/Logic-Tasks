/**
 * @description Calculate the maximum of even numbers and minimum of odd numbers
 */
class MinMax {
    private readonly numbersArray: number[];
    protected numberEvenMax: number;
    protected numberOddMin: number;
    constructor(inputArrayOfNumbers:number[]) {
      this.numbersArray = inputArrayOfNumbers;
      this.numberEvenMax = 0;
      this.numberOddMin = 0;
      this.calcAllNumbers();
    }
    private calcAllNumbers(): void {
      for (let i:number = 0; i < this.numbersArray.length; i++) {
        if (this.numbersArray[i] & 1 && this.numbersArray[i] > this.numberOddMin) {
          this.numberOddMin = this.numbersArray[i];
        } 
        if (!(this.numbersArray[i] & 1) && this.numbersArray[i] > this.numberEvenMax) {
          this.numberEvenMax = this.numbersArray[i];
        }
      }
    }
  }
  
  class GetResultMinMax extends MinMax {
    public get calculateEvenMax(): number {
      return this.numberEvenMax;
    }
    public get calculateOddMin(): number {
      return this.numberOddMin;
    }
  }
  
  let newNumbers = new GetResultMinMax([1, 4, 6, 8, 9, 34, 89]);
  
  console.log('Maximum of even numbers is - ' + newNumbers.calculateEvenMax);
  console.log('Minimum of odd numbers is - ', newNumbers.calculateOddMin);