const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);


    if (A > B) {
        console.log(">");
    } else if (A < B){
        console.log("<");
    } else if (A == B) {
        console.log("==");
    }
