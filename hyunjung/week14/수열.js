const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")

let [n, k] = input[0].split(" ")
const arr = input[1]
  .trim()
  .split(" ")
  .map((el) => parseInt(el))

n = +n
k = +k

const solution = (n, k, arr) => {
  let curTemp = arr.reduce((acc, cur, idx) => {
    if (0 <= idx && idx < k) {
      return acc + cur
    }
    return acc
  }, 0)

  let maxSumTemp = curTemp

  for (let i = 0; i < n; i++) {
    curTemp = curTemp - arr[i] + arr[i + k]
    if (curTemp > maxSumTemp) maxSumTemp = curTemp
  }
  return maxSumTemp
}

// 제출
const answer = solution(n, k, arr)
console.log(answer)
