const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")
const [n, m, p] = input[0].split(" ").map(Number)
const channels = input.slice(1).map((el) => el.split(" ").map(Number))

const solution = (n, m, first, channels) => {
  let A = []
  let cnt = 0

  let visited = [...Array(m + 1)].fill(false)
  for (let i = 1; i <= m; i++) {
    A[i] = []
  }

  for (let i = 0; i < n; i++) {
    let [like, hate] = channels[i]
    if (A[hate].length === 0) A[hate] = like
  }

  const DFS = (node) => {
    if (visited[node]) return -1
    visited[node] = true
    for (let i = 1; i <= m; i++) {
      if (A[node] === i) {
        cnt++
        return DFS(i)
      }
    }
  }

  if (DFS(first) === -1) return -1
  return cnt
}

const answer = solution(n, m, p, channels)
console.log(answer)
