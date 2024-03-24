const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [, ...targetInput] = input;

const result = targetInput.map(item => item.split(" ")).sort((a, b) => Number(a[0]) - Number(b[0]))

console.log(result.map(item => item.join(" ")).join("\n"))