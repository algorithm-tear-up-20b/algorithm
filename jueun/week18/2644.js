const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2644.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const [p1, p2] = input[1].split(" ").map(Number);
const relations = input.slice(3).map((el) => el.split(" ").map(Number));

const makeAdjMatix = (n, edges) => {
  const matrix = new Array(n + 1);
  for (let i = 0; i <= n; i++) matrix[i] = new Array(n + 1).fill(0);
  edges.forEach((edge) => {
    matrix[edge[0]][edge[1]] = 1;
    matrix[edge[1]][edge[0]] = 1;
  });
  return matrix;
};

const solution = (n, p1, p2, relations) => {
  const bfs = (p1, p2) => {
    const adjMatrix = makeAdjMatix(n, relations);
    const visited = new Array(n + 1).fill(false);
    const queue = [p1];
    const degrees = [0];
    visited[p1] = true;
    let now,
      nowDegree,
      nowIdx = 0;
    let answer;

    while (nowIdx < queue.length) {
      now = queue[nowIdx];
      nowDegree = degrees[nowIdx++];

      if (now === p2) {
        answer = nowDegree;
        break;
      }

      adjMatrix[now].forEach((isConnected, idx) => {
        if (isConnected && !visited[idx]) {
          visited[idx] = true;
          queue.push(idx);
          degrees.push(nowDegree + 1);
        }
      });
    }

    return answer;
  };

  return bfs(p1, p2) || -1;
};

console.log(solution(n, p1, p2, relations));
