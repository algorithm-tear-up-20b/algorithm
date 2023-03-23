const { execFileSync } = require("child_process")
const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString()
const n = +input

function solution(n) {
  let five = 0
  let two = 0
  if (n < 2) return -1 // 거슬러 줄 수 없는 경우
  five += parseInt(n / 5) // 5원의 개수
  n %= 5
  if (n % 5 === 0) return five
  while (n % 2 !== 0 && five > 0) {
    five--
    n = n + 5
  }
  two += parseInt(n / 2) //2원의 개수
  n %= 2
  if (n === 0 && five + two !== 0) {
    return five + two
  } else {
    return -1
  }
}
// 제출
const answer = solution(n)
console.log(answer)
