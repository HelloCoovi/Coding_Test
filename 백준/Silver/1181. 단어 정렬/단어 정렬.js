const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [, ...targetArr] = input;
const result = [...new Set(targetArr)];

result.sort((a, b) => {
  if (a.length === b.length) return a.localeCompare(b)
  return a.length - b.length
})

console.log(result.join("\n"))
