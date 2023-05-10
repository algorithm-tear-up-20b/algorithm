// 부분수열의 합

const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1182.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, s] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

function solution(n, s, nums) {
  let count = 0;
  function dfs(idx, sum) {
    if (idx >= n) return;

    sum += nums[idx];

    if (sum === s) count += 1;

    dfs(idx + 1, sum - nums[idx]);
    dfs(idx + 1, sum);
  }

  dfs(0, 0);

  return count;
}

console.log(solution(n, s, nums));
