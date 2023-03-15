// const input = ["9 2", "3 2 5 5 6 4 4 5 7"];
const input = ["10 1", "1 2 3 4 5 6 6 7 8 9"];
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const elements = input[1].split(" ").map(Number);

const solution = (k) => {
  let countArr = new Array(100000).fill(0);

  let elLength = elements.length;
  let max = 0;
  let lt = 0,
    rt = 0;
  while (rt < elLength) {
    if (countArr[elements[rt]] >= k) {
      countArr[elements[lt]]--;
      lt++;
    } else {
      countArr[elements[rt]]++;
      rt++;
    }

    max = Math.max(max, rt - lt);
  }

  return max;
};

console.log(solution(K));
