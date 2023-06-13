const fs = require("fs")
// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = "예제.txt"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")

let people = input[0]

let [n, m] = input[1].split(" ")
const arr = input.slice(3).map((el) => el.split(" ").map(Number))
people = +people
n = +n
m = +m

const solution = (people, start, target, arr) => {
  const graph = Array.from({length: people + 1}).map(() => [])
  const visited = Array.from({length: people + 1}).map(() => false)

  for (let i = 0; i < arr.length; i++) {
    const [x, y] = arr[i]
    graph[x].push(y)
    graph[y].push(x)
  }

  //graph : [[], [2, 3], [1, 7, 8, 9], [1], [5, 6], [4], [4], [2], [2], [2]]

  const BFS = (start) => {
    const queue = [[start, 0]]

    while (queue.length) {
      let [person, cnt] = queue.shift()
      let nearRelation = graph[person] //1촌
      if (!visited[person]) {
        if (person === target) return cnt
        visited[person] = true
      }

      //1촌 순회
      for (let i = 0; i < nearRelation.length; i++) {
        let person = nearRelation[i]
        if (visited[person]) continue
        if (person === target) return cnt + 1
        queue.push([person, cnt + 1])
      }
    }
    return -1
  }

  return BFS(start)
}

// 제출
const answer = solution(people, n, m, arr)
console.log(answer)
