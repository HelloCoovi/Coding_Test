const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const targetInput = input[0].split(" ");

const N = BigInt(targetInput[0]);
const M = BigInt(targetInput[1]);

console.log(N / M + "\n" + N % M);