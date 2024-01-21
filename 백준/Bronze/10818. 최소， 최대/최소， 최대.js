const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const data = input[1].split(" ").map(Number);

console.log(`${Math.min(...data)} ${Math.max(...data)}`);
