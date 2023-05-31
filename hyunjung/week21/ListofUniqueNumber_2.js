const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)

function solution(n, arr) {
  let count = 0,
    L = 0,
    R = 0
  let visited = new Array(n + 1).fill(0)

  for (L; L < n; L++) {
    while (R < n) {
      if (visited[arr[R]]) break
      visited[arr[R]] = 1
      R++
    }
    count += R - L
    visited[arr[L]] = 0
  }

  return count
}

const answer = solution(n, arr)
console.log(answer)
