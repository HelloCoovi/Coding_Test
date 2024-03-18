const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [_, ...arr] = input;

const result = arr.map(Number);
result.sort((a, b) => a - b)

console.log(result.join("\n").trim());