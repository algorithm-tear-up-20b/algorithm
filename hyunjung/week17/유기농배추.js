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

    //방문 목록
    const visited = [...Array(N)].map(() => Array(M).fill(0))

    const A = [...Array(N)].map(() => Array(M).fill(0))

    //그래프 데이터 저장하기
    for (let i = 0; i < cabbages; i++) {
      let [row, col] = map[T][i].map((v) => +v)
      A[col][row] = 1
    }

    const DFS = (row, col) => {
      let dx = [0, 1, 0, -1]
      let dy = [1, 0, -1, 0]

      visited[row][col] = 1

      for (let i = 0; i < 4; i++) {
        //현재 노드의 4면 조사
        let ax = row + dx[i],
          ay = col + dy[i]
        if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
          //범위를 벗어나지 않으면
          if (visited[ax][ay] === 0 && A[ax][ay] === 1) {
            DFS(ax, ay)
          }
        }
      }
    }

    //  배추 위치 전체 탐색
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < M; col++) {
        if (visited[row][col] === 0 && A[row][col] === 1) {
          DFS(row, col)
          bug++
        }
      }
    }
    result.push(bug)
  }
  return result.join("\n")
}
//제출
const answer = solution(n, meta, map)
console.log(answer)
