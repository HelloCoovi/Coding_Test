const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [, ...targetArr] = input;

const tempResultArr = targetArr[0].split(" ").map(Number);

const sortObj = {};

[...new Set(tempResultArr)]
  .sort((a, b) => a - b)
  .forEach((item, idx) => {
    sortObj[item] = idx;
  });

const result = tempResultArr.map((item) => sortObj[item]);

console.log(result.join(" "));