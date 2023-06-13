const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"

const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n")
  .map(Number)

const solution = (n) => {
  let A = new Array(n + 1).fill(0)

  for (let i = 2; i <= n; i++) {
    A[i] = A[i - 1] + 1
    if (i % 2 === 0) A[i] = Math.min(A[i], A[i / 2] + 1)
    if (i % 3 === 0) A[i] = Math.min(A[i], A[i / 3] + 1)
  }
  return A[n]
}

const answer = solution(input[0])
console.log(answer)
