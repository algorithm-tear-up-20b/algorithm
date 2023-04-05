const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2468.txt"
  )
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const N = input[0][0];
const map = input.slice(1);

const solution = (n, map) => {
  let maxCount = 0;

  let visited = new Array(n);
  for (let i = 0; i < n; i++) visited[i] = new Array(n).fill(false);

  const dfs = (i, j, height) => {
    visited[i][j] = true;
    if (map[i - 1]?.[j] >= height && !visited[i - 1]?.[j])
      dfs(i - 1, j, height);
    if (map[i + 1]?.[j] >= height && !visited[i + 1]?.[j])
      dfs(i + 1, j, height);
    if (map[i]?.[j - 1] >= height && !visited[i]?.[j - 1])
      dfs(i, j - 1, height);
    if (map[i]?.[j + 1] >= height && !visited[i]?.[j + 1])
      dfs(i, j + 1, height);
  };

  let count;
  for (let rainfall = 1; rainfall <= 100; rainfall++) {
    count = 0;
    visited = new Array(n);
    for (let i = 0; i < n; i++) visited[i] = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (map[i][j] >= rainfall && !visited[i][j]) {
          dfs(i, j, rainfall);
          count++;
        }
      }
    }
    maxCount = Math.max(maxCount, count);
    if (count === 0) break;
  }

  return maxCount;
};

console.log(solution(N, map));
