// 런타임 에러 (TypeError)
const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")
const [n, m, v] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((el) => el.split(" ").map(Number))

const solution = (n, m, v, graph) => {
  // n: 노드 개수, m: 에지 개수, v: 시작점

  let result = []

  //그래프를 저장할 인접 리스트
  let A = []
  //인접 리스트 초기화
  for (let i = 1; i <= n; i++) {
    A[i] = []
  }
  //인접 리스트에 그래프 저장하기(m 개수만큼)
  for (let i = 0; i < m; i++) {
    let [start, end] = graph[i]
    A[start].push(end)
    A[end].push(start)
  }

  //오름차순 정렬
  for (let i = 1; i <= m; i++) {
    A[i].sort((a, b) => a - b)
  }

  //방문 배열 초기화
  let visited = new Array(m + 1).fill(false)
  let curResult = []

  const DFS = (node) => {
    if (visited[node]) return
    //방문 노드를 배열에 추가
    curResult.push(node)
    visited[node] = true

    for (let i = 0; i < A[node].length; i++) {
      let next = A[node][i]
      if (!visited[next]) {
        DFS(next)
      }
    }
  }

  DFS(v)
  result.push(curResult)

  //visited 초기화
  visited = new Array(m + 1).fill(false)
  curResult = []

  const BFS = (node) => {
    let Q = []
    Q.push(node)
    visited[node] = true

    while (Q.length > 0) {
      cur_node = Q.shift()
      curResult.push(cur_node)

      for (let i = 0; i < A[cur_node].length; i++) {
        let next = A[cur_node][i]
        if (!visited[next]) {
          visited[next] = true
          Q.push(next)
        }
      }
    }
  }
  BFS(v)
  result.push(curResult)

  return result.map((v) => v.join(" ")).join("\n")
}

//제출
const answer = solution(n, m, v, graph)
console.log(answer)
