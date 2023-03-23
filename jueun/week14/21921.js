// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["5 2", "1 4 2 5 1"];
// const input = ["7 5", "1 1 1 1 1 5 1"];
// const input = ["5 3", "0 0 0 0 0"];

const [N, X] = input[0].split(" ").map(Number);
const visitors = input[1].split(" ").map(Number);

const solution = (x, visitors) => {
  let sum = visitors.slice(0, x).reduce((prev, cur) => prev + cur);
  let sumArr = [sum];
  let max = sum;

  for (let i = 0; i + x < visitors.length; i++) {
    sum = sum - visitors[i] + visitors[i + x];
    sumArr.push(sum);
    max = Math.max(max, sum);
  }

  const count = sumArr.reduce(
    (prev, cur) => (cur === max ? prev + 1 : prev),
    0
  );

  if (max > 0) {
    return `${max}\n${count}`;
  } else {
    return "SAD";
  }
};

console.log(solution(X, visitors));

/*
메모리: 38396 KB
시간: 300ms
*/
