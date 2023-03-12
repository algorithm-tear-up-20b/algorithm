let fs = require("fs");
let [K, ...numbers] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const triangulars = [];

let i = 2;
let number = 1;
while (number <= 998) {
  triangulars.push(number);
  number += i;
  i++;
}

function isCorrect(number) {
  const len = triangulars.length;
  for (let first = 0; first < len; first++) {
    for (let second = 0; second < len; second++) {
      for (let third = 0; third < len; third++) {
        const result =
          number -
          triangulars[first] -
          triangulars[second] -
          triangulars[third];
        if (result < 0) break;
        if (result === 0) return 1;
      }
    }
  }
  return 0;
}

console.log(numbers.map((e) => isCorrect(e)).join("\n"));
