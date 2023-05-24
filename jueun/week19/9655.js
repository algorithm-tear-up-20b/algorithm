const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/9655.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const solution = (n) => {
  if (n % 2) return "SK";
  else return "CY";
};

console.log(solution(n));
