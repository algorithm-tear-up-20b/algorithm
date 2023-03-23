const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")
const [[n, k], list] = input.map((v) => v.split(" ").map(Number))

// solution
function solution(n, k, list) {
  const obj = {}
  let left = 0
  let right = 0
  let maxLength = 0

  while (left <= right && right < n) {
    while (obj[list[right]] === k) {
      obj[list[left]]--
      left++
    }

    maxLength = Math.max(maxLength, right - left + 1)
    obj[list[right]] = (obj[list[right]] ?? 0) + 1
    right++
  }

  return maxLength
}

// 제출
const answer = solution(n, k, list)
console.log(answer)
