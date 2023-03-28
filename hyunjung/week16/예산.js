const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")

let [n, arr, budget] = [+input[0], input[1].split(" ").map(Number), +input[2]]

const solution = (n, arr, budget) => {
  arr = arr.sort((a, b) => a - b)

  let start = 0
  let end = arr.at(-1)

  while (start <= end) {
    let mid = parseInt((start + end) / 2)
    let sum = 0
    for (let i = 0; i < n; i++) {
      if (arr[i] > mid) {
        //요청금액 > 상한액
        sum += mid //상한액 더하기
      } else {
        //요청금액 < 상한액
        sum += arr[i] //요청금액 더하기
      }
    }
    sum <= budget ? (start = mid + 1) : (end = mid - 1) //총액이 예산보다 작으면 최소금액 증가, 크면 최소금액 감소
  }
  return end
}

const answer = solution(n, arr, budget)
console.log(answer)
