let a = 2; 
let b = 5; 
a = a + b; 
b = a - b; 
a = a - b; 
console.log(a); 
console.log(b);

// деструктуризация, новый синтаксис ES6
[a, b] = [b, a];
