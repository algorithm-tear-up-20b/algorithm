const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")
let n = input[0]
n = +n
const graph = input.slice(1).map((el) => el.split(" ").map(Number))

const solution = (n, graph) => {
  const result = [...Array(n)].map(() => Array(n).fill(0)) // 답을 저장할 2차원 배열

  const DFS = (edge, line, visited) => {
    for (let i = 0; i < n; i++) {
      if (graph[edge][i] && !visited[i]) {
        visited[i] = true
        result[line][i] = 1
        DFS(i, line, visited) //line은 계속 고정
      }
    }
  }

  for (let i = 0; i < n; i++) {
    const visited = new Array(n).fill(false)
    DFS(i, i, visited)
  }
  return result.map((v) => v.join(" ")).join("\n")
}

const answer = solution(n, graph)
console.log(answer)
