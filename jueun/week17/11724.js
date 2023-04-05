/*
1. 인접 행렬 만들기
adj[i][j]: 노드 i에서 노드 j로 가는 간선이 있으면 1, 아니면 0

adj[1][2]: 1
adj[2][1]: 1
adj[2][5]: 1
adj[5][2]: 1
...

2. visited 배열 만들기
모든 노드를 false로 초기화 한 후, dfs 실행할 때 방문한 노드는 true 할당하기

3. dfs 실행
count = 0으로 정하고, dfs 실행이 끝날 때마다 count++
for문 내에서
visited에 방문하지 않은 노드가 있을 경우 그 노드로 dfs 실행

for문이 끝나면 return count
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["6 5", "1 2", "2 5", "5 1", "3 4", "4 6"];
// const input = ["6 8", "1 2", "2 5", "5 1", "3 4", "4 6", "5 4", "2 4", "2 3"];

const [[N, M], edges] = [
  input[0].split(" ").map(Number),
  input.slice(1).map((el) => el.split(" ").map(Number)),
];

const solution = (n, edges) => {
  const visited = new Array(n + 1).fill(false); // node 개수만큼
  visited[0] = true;

  const adjacent = new Array(n + 1);
  // adjacent 배열을 new Array(n + 1).fill(new Array(n + 1).fill(0))로 했을 경우 왜 밑에 forEach문이 제대로 동작하지 않는가?
  // 한번에 여러 인덱스가 같이 바뀌어버리는 이유?

  for (let i = 0; i < adjacent.length; i++) {
    adjacent[i] = new Array(n + 1).fill(0);
  }

  edges.forEach((edge) => {
    adjacent[edge[0]][edge[1]] = 1;
    adjacent[edge[1]][edge[0]] = 1;
  });

  const dfs = (node) => {
    visited[node] = true;
    for (let i = 1; i < adjacent[node].length; i++) {
      if (adjacent[node][i] === 1 && !visited[i]) dfs(i);
    }
    return;
  };

  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
};

console.log(solution(N, edges));
