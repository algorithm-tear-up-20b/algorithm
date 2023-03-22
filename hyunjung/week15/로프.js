const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n")
  .map(Number)

const [N, ...arr] = input

const solution = (N, arr) => {
  let sort = arr.sort((a, b) => a - b)
  let min = sort[0] * N
  let target = 0
  for (let i = 1; i < N; i++) {
    target = sort[i] * (N - i)
    if (min < target) {
      min = target
    }
  }
  return min
}

const answer = solution(N, arr)
console.log(answer)
