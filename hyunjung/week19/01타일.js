const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")
const [N] = input.map(Number)

function solution(N) {
  const DP = new Array(1000001).fill(-1)

  DP[0] = 0
  DP[1] = 1
  DP[2] = 2

  for (let i = 3; i <= N; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2]) % 15746
    DP[i] %= 15746 //시간 280ms -> 196ms
  }
  // console.log(DP) //[0,  1,  2,  3,  5,..]
  return DP[N]
}
//제출
const answer = solution(N)
console.log(answer)
