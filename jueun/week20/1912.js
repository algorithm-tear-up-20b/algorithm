// 연속합

const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1912.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const nums = input[1].split(" ").map(Number);

const solution = (n, nums) => {
  let max = Number.MIN_SAFE_INTEGER;

  let lt = 0,
    rt = 0;
  let sum = 0;

  while (rt < n) {
    sum += nums[rt];
    max = Math.max(max, sum);

    if (sum < 0) {
      lt = rt + 1;
      rt = lt;
      if (lt === n) break;
      sum = 0;
    } else {
      rt++;
    }
  }

  return max;
};

console.log(solution(n, nums));
