const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, s] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

function solution(n, s, arr) {
  let max = 987654321
  let min_length = max
  let L = 0,
    R = 0,
    sum = 0

  for (L; L < n; L++) {
    while (sum < s && R < n) {
      sum += arr[R++]
    }

    if (sum >= s) {
      min_length = Math.min(min_length, R - L)
    }
    sum -= arr[L]
  }
  return min_length === max ? 0 : min_length
}
const answer = solution(n, s, arr)
console.log(answer)
