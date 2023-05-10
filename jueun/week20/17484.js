const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/17484.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(" ").map(Number));

const solution = (map, n, m) => {
  let minFuel = 600;

  const explore = (x, y, fuel, direction) => {
    if (x === n) {
      minFuel = Math.min(minFuel, fuel);
      return;
    }
    fuel += map[x][y];
    for (let i = -1; i <= 1; i++) {
      if (x + 1 <= n && y + i >= 0 && y + i < m && direction !== i)
        explore(x + 1, y + i, fuel, i);
    }
  };

  for (let i = 0; i < m; i++) {
    explore(0, i, 0, -2);
  }

  return minFuel;
};

console.log(solution(map, N, M));
