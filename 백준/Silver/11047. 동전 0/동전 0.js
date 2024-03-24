const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = 0

let targetPrice = Number(input[0].split(" ")[1]);
const targetInput = input.slice(1).map(Number);

for (let i = targetInput.length - 1; i >= 0; i--) {
  const coin = targetInput[i];

  result += Math.floor(targetPrice / coin);
  targetPrice %= coin;
}

console.log(result);