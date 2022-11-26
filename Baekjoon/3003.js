const a = [1,1,2,2,2,8];
const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);

const white = input.map((i, index) => {
    return a[index] - i;
})

console.log(...white)