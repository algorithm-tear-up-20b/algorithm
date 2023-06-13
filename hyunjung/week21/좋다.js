const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)

function solution(n, arr) {
  let good = 0

  arr.sort((a, b) => a - b)

  for (let i = 0; i < n; i++) {
    let left = 0
    let right = n - 1
    while (left < right) {
      if (arr[left] + arr[right] === arr[i]) {
        if (left !== i && right !== i) {
          good++
          break
        } else if (left === i) {
          left++
        } else if (right === i) {
          right--
        }
      } else if (arr[left] + arr[right] > arr[i]) {
        right--
      } else {
        left++
      }
    }
  }
  return good
}

const answer = solution(n, arr)
console.log(answer)
