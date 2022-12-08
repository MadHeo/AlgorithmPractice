const input = require("fs").readFileSync("/dev/stdin").toString();

const today = new Date();
const hours = ('0' + today.getHours());
const munutes = ('0' + today.getMinutes());

