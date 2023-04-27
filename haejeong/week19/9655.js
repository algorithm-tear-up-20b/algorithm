// 9655: 돌 게임

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const solution = (input) => {
  return input % 2 === 0 ? "CY" : "SK";
};

console.log(solution(input));
