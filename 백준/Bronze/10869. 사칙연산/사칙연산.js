const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const data = input[0].split(" ").map(el => Number(el))
const [a, b] = data

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(Math.floor(a / b))
console.log(a % b)