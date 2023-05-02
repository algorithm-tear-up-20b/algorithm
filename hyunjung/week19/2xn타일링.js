const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")
const [N] = input.map(Number)

function solution(N) {
  const DP = new Array(1001).fill(-1)

  DP[1] = 1
  DP[2] = 2

  for (let i = 3; i <= N; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2]) % 10007
    DP[i] %= 10007
  }
  return DP[N]
}

const answer = solution(N)
console.log(answer)
