const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1904.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const tiles = [1, 1];

const solution = (n) => {
  for (let i = 2; i <= n; i++) {
    tiles[i] = (tiles[i - 1] % 15746) + (tiles[i - 2] % 15746);
  }

  return tiles[n];
};

console.log(solution(n) % 15746);
