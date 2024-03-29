let object1 = {
  a: 2,
  e: 4,
  c: {},
  b: 456,
  t: {}
}

let object2 = {
  f: 34234,
  g: {},
  h: {},
  i: 91,
  j: 33,
  k: {}
}

/**
 * @description Represents assignDeep, that unions two object onto new one
 * like {...object1, ...object2} in ECMA 2018
 * @param {Object} object1 first object
 * @param {Object} object2 second object
 * @returns new Object
 */
const assignDeep = (object1, object2) => {
  let resultString = `${JSON.stringify(object1).slice(0, -1)},${JSON.stringify(object2).slice(1)}`;
  return eval('(' + resultString + ')');
}

console.log(assignDeep(object1, object2));

/*


const aObj = {
		b: 11,
		c:  22
	};

const o1 = {
	a: aObj,
	d: [1, 2, 3]
};

const o2 = {
	x: {
		b: 1111,
		c:  2211
	},
	y: [21, 31]
}

const res = assignDeep(o1, o2);

res.a.b = false;
console.log(aObj); 

*/

