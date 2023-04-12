const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")
let n = input[0]
n = +n
let line = 1
let meta = []
let map = []

for (let i = 0; i < n; i++) {
  let [M, N, K] = input[line].split(" ").map(Number)
  let bug = input.slice(line + 1, line + 1 + K).map((el) => el.split(" "))
  meta.push([M, N, K])
  map.push(bug)
  line += K + 1
}

const solution = (test, meta, map) => {
  let result = []

  for (let T = 0; T < test; T++) {
    let [M, N, cabbages] = meta[T]
    let bug = 0

    const visited = [...Array(N)].map(() => Array(M).fill(0))
    const A = [...Array(N)].map(() => Array(M).fill(0))

    for (let i = 0; i < cabbages; i++) {
      let [row, col] = map[T][i].map((v) => +v)
      A[col][row] = 1
    }
    const BFS = (startX, startY) => {
      const queue = [[startX, startY]]
      visited[startX][startY] = 1
      let dx = [0, 1, 0, -1]
      let dy = [1, 0, -1, 0]

      while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
          const [x, y] = queue.shift()
          if (A[x][y] === 0) continue
          A[x][y] = 0

          for (let j = 0; j < 4; j++) {
            let nx = x + dx[j]
            let ny = y + dy[j]
            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < N &&
              ny < M &&
              A[nx][ny] === 1 &&
              !visited[nx][ny]
            ) {
              queue.push([nx, ny])
            }
          }
        }
      }
    }

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < M; col++) {
        if (visited[row][col] === 0 && A[row][col] === 1) {
          BFS(row, col)
          bug++
        }
      }
    }
    result.push(bug)
  }
  return result.join("\n")
}

const answer = solution(n, meta, map)
console.log(answer)
