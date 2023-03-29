// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")

// const input = ["4 7", "20 15 10 17"];
const input = ["5 20", "4 42 40 26 46"];

const [[N, M], trees] = [
  input[0].split(" ").map(Number),
  input[1].split(" ").map(Number),
];

const solution = (trees, m) => {
  const treeSum = trees.reduce((prev, cur) => prev + cur) - m;
  let mid = Math.max(...trees);
  let newMid;
  let high = mid,
    low = 0;
  let sum,
    maxSum = 0;

  while (true) {
    sum = trees.reduce((prev, cur) => {
      if (cur > mid) return prev + mid;
      else return prev + cur;
    }, 0);

    if (sum > treeSum) {
      high = mid;
    } else if (sum < treeSum) {
      low = mid;
      maxSum = Math.max(sum, maxSum);
    } else {
      break;
    }
    newMid = Math.floor((low + high) / 2);
    if (newMid === mid) break;
    else mid = newMid;
  }

  return mid;
};

console.log(solution(trees, M));
