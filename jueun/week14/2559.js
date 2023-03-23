// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["10 2", "3 -2 -4 -9 0 3 7 13 8 -3"];
// const input = ["7 5", "1 1 1 1 1 5 1"];
// const input = ["5 3", "0 0 0 0 0"];

const [N, X] = input[0].split(" ").map(Number);
const temperatures = input[1].split(" ").map(Number);

const solution = (x, temperatures) => {
  let sum = temperatures.slice(0, x).reduce((prev, cur) => prev + cur);
  let max = sum;

  for (let i = 0; i + x < temperatures.length; i++) {
    sum = sum - temperatures[i] + temperatures[i + x];
    max = Math.max(max, sum);
  }

  return max;
};

console.log(solution(X, temperatures));

/*
메모리: 16388 KB
시간: 212 ms
*/
