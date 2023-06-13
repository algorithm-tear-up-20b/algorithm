// 시간 초과
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)

function solution(n, arr) {
  let count = 0
  let left = 0
  let right = 0

  while (left < n) {
    if (arr[left] === arr[right + 1] || right === n - 1) {
      left++
      right = left
      count++
      continue
    }
    right++
    count++
  }
  return count
}

const answer = solution(n, arr)
console.log(answer)
