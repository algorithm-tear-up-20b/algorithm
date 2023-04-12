const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")

let [n, m] = input[0].split(" ")
n = +n
m = +m

const map = input
  .slice(1)
  .map((el) => el.split("").map(Number))
  .map((el) => el)

const solution = (n, m, map) => {
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]

  const A = [...Array(map.length)].map(() => Array(map[0].length).fill(0))

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      A[i][j] = map[i][j]
    }
  }

  const visited = [...Array(map.length)].map(() =>
    Array(map[0].length).fill(false)
  )

  const BFS = (startX, startY) => {
    const queue = [[startX, startY]]
    visited[startX][startY] = 1

    while (queue.length) {
      const now = queue.shift()

      for (let i = 0; i < 4; i++) {
        let nx = now[0] + dx[i]
        let ny = now[1] + dy[i]
        if (nx >= 0 && ny >= 0 && nx < map.length && ny < map[0].length) {
          if (A[nx][ny] !== 0 && !visited[nx][ny]) {
            visited[nx][ny] = true
            A[nx][ny] = A[now[0]][now[1]] + 1
            queue.push([nx, ny])
          }
        }
      }
    }
  }

  BFS(0, 0)
  return A[n - 1][m - 1]
}

const answer = solution(n, m, map)
console.log(answer)
