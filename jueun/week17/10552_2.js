// 인접 행렬을 1차원 배열로 만듦 -> 통과

const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/10552.txt"
  )
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [[N, M, P], ...channelPreference] = input;

const solution = (m, first, channelPreference) => {
  let count = 0;
  const makeAdjMatrix = (m, channelPreference) => {
    const matrix = new Array(m + 1);
    const alreadyHate = new Array(m + 1).fill(false);
    for (let [favorite, hate] of channelPreference) {
      if (!alreadyHate[hate]) {
        matrix[hate] = favorite;
        alreadyHate[hate] = true;
      }
    }
    return matrix;
  };

  const adjMatrix = makeAdjMatrix(m, channelPreference);

  const visited = new Array(m + 1).fill(false);
  const dfs = (node) => {
    if (visited[node]) return -1;
    visited[node] = true;
    for (let i = 1; i <= m; i++) {
      if (adjMatrix[node] === i) {
        count++;
        return dfs(i);
      }
    }
  };

  if (dfs(first) === -1) return -1;

  return count;
};

console.log(solution(M, P, channelPreference));
