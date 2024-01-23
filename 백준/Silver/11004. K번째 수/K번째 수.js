const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [kArr, arr] = input;
const k = Number(kArr.split(" ")[1]);

const sortedArr = arr.split(" ").map(Number).sort((a, b) => a - b);

console.log(sortedArr[k - 1]);