const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")
const [n, m] = input[0].split(" ").map(Number)

const solution = (n, m, input) => {
  let A = []
  let cnt = 0
  let visited = new Array(n + 1).fill(false)

  for (let i = 1; i < n + 1; i++) {
    A[i] = []
  }

  //A 인접 리스트에 그래프 데이터 저장하기
  for (let i = 0; i < m; i++) {
    let [from, to] = input[i + 1].split(" ").map(Number)
    A[from].push(to)
    A[to].push(from)
  }

  const DFS = (start) => {
    if (visited[start]) return
    visited[start] = true //방문처리

    for (let i = 0; i < A[start].length; i++) {
      const next = A[start][i]
      if (!visited[next]) {
        DFS(next) //방문하지 않은 노드만 탐색
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      DFS(i) //방문하지 않은 노드가 있으면 dfs실행
      cnt++ //연결 요소 개수++
    }
  }

  return cnt
}

//제출
const answer = solution(n, m, input)
console.log(answer)
