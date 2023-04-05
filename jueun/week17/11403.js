const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/11403.txt"
  )
  .toString()
  .split("\n");

const N = +input[0];
const adjMatrix = input.slice(1).map((el) => el.split(" ").map(Number));

const solution = (n, adjMatrix) => {
  let visited = new Array(n).fill(false);
  const wayMatrix = new Array(n);
  for (let i = 0; i < n; i++) wayMatrix[i] = new Array(n).fill(0);

  const dfs = (node, start) => {
    for (let i = 0; i < adjMatrix[node].length; i++) {
      if (adjMatrix[node][i] === 1 && !visited[i]) {
        visited[i] = true;
        wayMatrix[start][i] = 1;
        dfs(i, start);
      }
    }
  };

  const makeWayMatrix = (n) => {
    for (let i = 0; i < n; i++) {
      visited = Array(n).fill(false);
      dfs(i, i);
    }
  };

  const matrix2String = (matrix) => {
    let str = "";

    matrix.forEach((arr) => {
      str += arr.join(" ");
      str += "\n";
    });

    return str;
  };

  makeWayMatrix(n);
  const matrixStr = matrix2String(wayMatrix);

  return matrixStr;
};

console.log(solution(N, adjMatrix));
