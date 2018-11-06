/**
 * Calculating if the runes is true
 */
interface Runable {
    isTrue(): boolean;
    statement(someString: string);
  }
  
  abstract class ArrayOfRunes implements Runable {
    protected arrayOfString: string[];
    constructor (inputString: string) {
      this.arrayOfString = inputString.split('');
    }
  }
  
  class Runes extends ArrayOfRunes implements Runable {
    constructor (inputString: string) {
      super(inputString);
    }
    public get isTrue(): boolean {
      let lettersInWordCounter = 0;
      for (let i:number = 0; i < this.arrayOfString.length; i++) {
        if (this.arrayOfString[i].toUpperCase() === this.arrayOfString[i]) {
          lettersInWordCounter = 0;
        } else {
          lettersInWordCounter++;
        }
        if (lettersInWordCounter > 3) {
          return false;
        }
      }
      return true;
    }
    public set statement(newString: string) {
      this.arrayOfString = newString.split('');
    }
  }
  
  let runes = new Runes('IoIsTheBest');
  console.log(runes.isTrue);
  runes.statement = 'IoItIsWaste';
  console.log(runes.isTrue)
  