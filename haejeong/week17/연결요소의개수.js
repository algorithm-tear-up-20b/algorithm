let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

const [N, M] = input.shift();
const graph = [...Array(N + 1)].map(() => []);
const visited = [...Array(N + 1)].map(() => []).fill(false);
input.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});
let result = 0;

const DFS = (start) => {
  let stack = [...start];
  while (stack.length) {
    let node = stack.pop();
    if (visited[node]) continue;
    visited[node] = true;
    stack.push(...graph[node]);
  }
};

for (let i = 1; i < graph.length; i++) {
  if (!visited[i]) {
    result++;
    DFS(graph[i]);
  }
}

console.log(result);
