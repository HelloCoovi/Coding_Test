const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [_, ...arr] = input.map(Number)

arr.sort((a, b) => a - b)

let result = ""

arr.forEach((num) => result += num + "\n")


console.log(result)
