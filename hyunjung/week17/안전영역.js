const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")
let n = input[0]
n = +n
const map = input.slice(1).map((el) => el.split(" ").map(Number))

const solution = (n, area) => {
  let max = 0

  const DFS = (row, col, h, visited) => {
    let dx = [0, 1, 0, -1]
    let dy = [1, 0, -1, 0]

    for (let i = 0; i < 4; i++) {
      let ax = row + dx[i],
        ay = col + dy[i]
      if (ax >= 0 && ay >= 0 && ax < n && ay < n) {
        if (!visited[ax][ay]) {
          visited[ax][ay] = true
          DFS(ax, ay, h, visited)
        }
      }
    }
  }

  for (let h = 0; h <= 100; h++) {
    let cnt = 0
    const visited = [...Array(n)].map((_, x) =>
      [...Array(n)].map((_, y) => area[x][y] <= h)
    )
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (!visited[row][col]) {
          visited[row][col] = true
          DFS(row, col, h, visited)
          cnt++
        }
      }
    }
    max = Math.max(max, cnt)
  }

  return max
}

const answer = solution(n, map)
console.log(answer)
