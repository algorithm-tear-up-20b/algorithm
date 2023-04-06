const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const graph = input.slice(1).map((v) => v.split(" ").map(Number));

const answer = [...Array(N)].map(() => Array(N).fill(0));
const DFS = (node, start, visited) => {
  for (let i = 0; i < N; i++) {
    if (graph[node][i] && !visited[i]) {
      visited[i] = true;
      answer[start][i] = 1;
      DFS(i, start, visited);
    }
  }
};

for (let i = 0; i < N; i++) {
  const visited = Array(N).fill(false);
  DFS(i, i, visited);
}

console.log(answer.map((v) => v.join(" ")).join("\n"));
