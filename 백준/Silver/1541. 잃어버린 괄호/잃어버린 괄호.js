const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const plusGroup = input[0].split('-').map(item => item.split('+')
                                          .map(Number)
                                          .reduce((cur, acc) => cur + acc))

let result = 0;

plusGroup.forEach((group, idx) => {
  if (idx === 0) return result += group

  result -= group
})

console.log(result)