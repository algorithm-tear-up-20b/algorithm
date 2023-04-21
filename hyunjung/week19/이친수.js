const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n")
  .map(Number)

const solution = (n) => {
  const A = new Array(n + 1).fill(BigInt(0))
  A[1] = BigInt(1)

  for (let i = 2; i <= n; i++) {
    A[i] = A[i - 1] + A[i - 2]
  }
  return A[n].toString()
}

const answer = solution(input[0])
console.log(answer)
