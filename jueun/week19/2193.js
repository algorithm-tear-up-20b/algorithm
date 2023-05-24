const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2193.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const dp = [BigInt(0), BigInt(1)];

const pinary = (n) => {
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(String(pinary(n)));
