let x = new Object();
console.log(x);

const yolo = Object.getPrototypeOf(x);

console.log(x.__proto__);
console.log(x.toString());

let y = [];
console.log(y.__proto__);