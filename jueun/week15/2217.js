// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["2", "10", "15"];
const [N, M] = [input[0], input.slice(1).map(Number)];

const solution = (ropes) => {
  const sortedRopes = ropes.slice().sort((a, b) => a - b);
  let max = 0;

  for (let i = 0; i < sortedRopes.length; i++) {
    max = Math.max(max, sortedRopes[i] * (sortedRopes.length - i));
  }

  return max;
};

console.log(solution(M));
