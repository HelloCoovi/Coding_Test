const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(Number(input[0].split("").map(Number).sort((a, b) => b - a).join("")))