const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")

let [n, m, arr] = input
const list = arr
  .trim()
  .split(" ")
  .map((el) => parseInt(el))
  .sort((a, b) => a - b)

n = +n
m = +m

const solution = (n, m, list) => {
  let count = 0
  let startIdx = 0
  let endIdx = n - 1

  //포인터 2개를 양끝에서 중앙으로 진행
  while (startIdx < endIdx) {
    let sum = list[startIdx] + list[endIdx]
    if (sum === m) count++
    if (sum > m) endIdx--
    if (sum <= m) startIdx++
  }
  return count
}

//제출
const answer = solution(n, m, list)
console.log(answer)
