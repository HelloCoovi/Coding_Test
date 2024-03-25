const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [ , targetInput] = input;

let increaseNum = 0;
let increaseNumArr = [];

const sortedInput = targetInput.split(" ").map(Number).sort((a, b) => a - b);
sortedInput.forEach(item => {
  increaseNum += item
  increaseNumArr = [...increaseNumArr, increaseNum]
});

const result = increaseNumArr.reduce((acc, cur) => acc + cur, 0);

console.log(result);