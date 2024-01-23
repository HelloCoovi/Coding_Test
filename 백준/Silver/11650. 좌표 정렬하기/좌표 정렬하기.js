const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [_, ...arr] = input;

const sortedArr = arr.map((nums) => nums.split(" ").map(Number));

sortedArr.sort((a, b) => {
  if (a[0] - b[0] === 0) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

let result = ''
sortedArr.forEach(num => {
  result += `${num[0]} ${num[1]}\n`
})

console.log(result);