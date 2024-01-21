const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const data = input[0].split(" ")

console.log(Number(data[0]) + Number(data[1]))