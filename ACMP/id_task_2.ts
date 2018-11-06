const number: number = 5;

/**
 * @description adding all elements in sequense 0 ... N
 */
class Summator {
    private readonly n: number = 0;
    constructor (n: number) {
        this.n = n;
    }
    get calculate(): number {
        let i: number = this.n, result: number = 0;
        while (i) {
            i -= i;
            result += i;
        }
        return result;
    }
}

let a = new Summator(number);

console.log(a.calculate);