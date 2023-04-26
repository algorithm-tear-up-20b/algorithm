// 7562: 나이트의 이동
const offset = [
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
];

const bfs = (start, [ex, ey], l, visited) => {
  const queue = [start];
  while (queue.length) {
    const [x, y, depth] = queue.shift();
    if (x === ex && y === ey) {
      return depth;
    }
    for (let i = 0; i < 8; i++) {
      const nx = x + offset[i][0];
      const ny = y + offset[i][1];
      if (nx >= 0 && nx < l && ny >= 0 && ny < l && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, depth + 1]);
      }
    }
  }
};

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
for (let i = 0; i < +input[0]; i++) {
  const l = +input[i * 3 + 1];
  const [sx, sy] = input[i * 3 + 2].split(" ").map((v) => +v);
  const [ex, ey] = input[i * 3 + 3].split(" ").map((v) => +v);
  const visited = [...Array(l)].map(() => Array(l).fill(false));
  visited[sx][sy] = true;
  console.log(bfs([sx, sy, 0], [ex, ey], l, visited));
}
