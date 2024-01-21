const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, ...arr] = input;
let result = ''

for(let i = 0; i < n; i++) {
  const [a, b] = arr[i].split(' ').map(Number)
  result += a + b + '\n'
}

console.log(result)