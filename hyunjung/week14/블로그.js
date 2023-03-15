const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number))

const [N, X] = input.shift()
const visit = input[0]

const solution = (N, X, visit) => {
  let mxVisit = visit.slice(0, X).reduce((acc, cur) => acc + cur)
  let cur = mxVisit
  let count = 1

  for (let i = 1; i < N - X + 1; i++) {
    cur += visit[X + i - 1] - visit[i - 1]
    if (mxVisit < cur) {
      mxVisit = cur
      count = 1
    } else if (mxVisit === cur) {
      count++
    }
  }
  if (mxVisit === 0) return "SAD"
  return [mxVisit, count].join("\n")
}

// 제출
const answer = solution(N, X, visit)
console.log(answer)
