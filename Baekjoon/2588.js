const [A, B] = require("fs").readFileSync("/dev/stdin").toString().split('\n').map(Number);

const num1 = B%10;
const num2 = Math.floor((B%100)/10);
const num3 = Math.floor(B/100);

console.log(A*num1);
console.log(A*num2);
console.log(A*num3);
console.log(A*B);