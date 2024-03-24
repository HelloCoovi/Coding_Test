const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [, ...targetArr] = input;
const result = targetArr.map((data) => data.split(" ").map(Number));

result.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0]
  }
  return a[1] - b[1]
})

console.log(result.map(data => data.join(" ")).join("\n"))
