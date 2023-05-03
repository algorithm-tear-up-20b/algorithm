const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1463.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const dp = [0, 0, 1, 1];

const solution = (n) => {
  for (let i = 4; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      // 2랑 3으로 둘 다 나누어떨어지는 경우
      dp[i] = Math.min(dp[i / 2], dp[i / 3]) + 1;
    } else if (i % 2 === 0) {
      // 2로만 나누어떨어지는 경우
      dp[i] = Math.min(dp[i / 2], dp[i - 1]) + 1;
    } else if (i % 3 === 0) {
      // 3으로만 나누어떨어지는 경우
      dp[i] = Math.min(dp[i / 3], dp[i - 1]) + 1;
    } else {
      // -1만 가능한 경우
      dp[i] = dp[i - 1] + 1;
    }
  }

  return dp[n];
};

console.log(solution(n));
