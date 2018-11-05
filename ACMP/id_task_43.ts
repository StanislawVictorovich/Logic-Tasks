let list: number[] = new Array (0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0);

 /**
  * @description calculating the biggest sequence of nulls in array
  * @param {Array} array
  */
class numberOfNulls {
    private nullCounter: number;
    private result: number;
    private arr: number[] = new Array();
    constructor (a: number[]) {
      this.nullCounter = 0;
      this.result = 0;
      this.arr = a;
    }
    public get calculate(): number {
      for (let i: number = 0; i < this.arr.length; i++) {
        !this.arr[i] ? this.nullCounter++ : this.nullCounter = 0;
        if (this.nullCounter > this.result) {
          this.result = this.nullCounter;
        }
      }
      return this.result;
    }
}

const o = new numberOfNulls(list);
console.log(o.calculate);