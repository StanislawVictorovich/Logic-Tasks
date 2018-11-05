const inputString: string = '<<<<>>--><--<<--<<>>>--><<<<<';

/**
 * @description calculating amount of arrows by 
 * templates in the input string
 * @param {String} string 
 * @returns counter
 */
class ArrowsCount {
  private s: string;
  private template1: string;
  private template2: string;
  constructor (str: string) {
    this.s = str;
    this.template1 = '>>-->';
    this.template2 = '<--<<';
  }
  public get calculate(): number { 
    let counter:number = 0;
    for (let i:number = 0; i < this.s.length; i++) {
      if (this.s.substr(i, 5) == this.template1 || 
      this.s.substr(i, 5) == this.template2) {
        counter++;
      }
    }
    return counter;
  }
}

const myObject = new ArrowsCount(inputString);
console.log(myObject.calculate);
