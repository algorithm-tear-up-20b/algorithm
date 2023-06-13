const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
const [n, m] = input[0].split(" ").map(Number)
const map = input.slice(1).map((el) => el.split(" ").map(Number))

const solution = (n, m, map) => {
  let min = 600
  let visited

  const dy = [-1, 0, 1]

  const dfs = (depth, y, preD) => {
    if (depth === n) {
      let sum = map[0][visited[0]]

      for (let i = 1; i < n; i++) {
        sum += map[i][visited[i]]
      }
      min = min > sum ? sum : min
      return
    }

    for (let i = 0; i < 3; i++) {
      let ay = dy[i] + y

      if (ay >= 0 && ay < m && i !== preD) {
        visited[depth] = ay
        dfs(depth + 1, ay, i)
      }
    }
  }

  for (let i = 0; i < m; i++) {
    visited = new Array(n)
    visited[0] = i
    dfs(1, i, -1)
  }

  return min
}
const answer = solution(n, m, map)
console.log(answer)
