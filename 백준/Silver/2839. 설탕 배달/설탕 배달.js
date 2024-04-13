const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const targetNumber = Number(input[0]);

let result = -1;
let fiveDivNum = Math.floor(targetNumber / 5);

while (fiveDivNum !== -1) {
  const divFiveRestNum = targetNumber - 5 * fiveDivNum;
  if (divFiveRestNum % 3 === 0) {
    result = divFiveRestNum / 3 + fiveDivNum;
    break;
  }
  fiveDivNum -= 1;
}

console.log(result);