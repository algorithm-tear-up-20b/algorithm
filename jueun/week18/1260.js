const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1260.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((edge) => edge.split(" ").map(Number));

const makeAdjMatix = (n, edges) => {
  const matrix = new Array(n + 1);
  for (let i = 0; i <= n; i++) matrix[i] = new Array(n + 1).fill(0);
  edges.forEach((edge) => {
    matrix[edge[0]][edge[1]] = 1;
    matrix[edge[1]][edge[0]] = 1;
  });
  return matrix;
};

const dfsSolution = (n, m, v, adjMatrix) => {
  const answer = [];
  const visited = new Array(n + 1).fill(false);

  const dfs = (node) => {
    if (!visited[node]) answer.push(node);
    visited[node] = true;
    adjMatrix[node].forEach((isConnected, idx) => {
      if (isConnected && !visited[idx]) dfs(idx);
    });
  };

  dfs(v);

  return answer.join(" ");
};

const bfsSolution = (n, m, v, adjMatrix) => {
  /*
  1. 인접 행렬 만들기
  2. visited 배열 생성
  3. queue 생성 (처음에 V 넣고 시작)
  4. queue에 있는 노드를 빼고 해당 노드의 (방문하지 않은) 인접 노드들을 queue에 넣는다. 이때 queue에서 빠지면
     visited 배열에 체크하고, 정답에 추가한다.
  */

  const visited = new Array(n + 1).fill(false);
  const queue = [v];
  visited[v] = true;

  const answer = [];
  let now,
    nowIdx = 0;

  while (nowIdx < queue.length) {
    now = queue[nowIdx++];
    answer.push(now);

    adjMatrix[now].forEach((isConnected, idx) => {
      if (isConnected && !visited[idx]) {
        queue.push(idx);
        visited[idx] = true;
      }
    });
  }

  return answer.join(" ");
};

const adjMatrix = makeAdjMatix(N, edges);

console.log(dfsSolution(N, M, V, adjMatrix));
console.log(bfsSolution(N, M, V, adjMatrix));
