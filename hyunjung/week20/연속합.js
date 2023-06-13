const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const array = input[1].split(" ").map(Number)

function solution(n, arr) {
  let maxSum = []

  for (let i = 0; i < n; i++) {
    maxSum[i] = arr[i]

    if (maxSum[i] < maxSum[i - 1] + arr[i]) {
      maxSum[i] = maxSum[i - 1] + arr[i]
    }
  }

  return Math.max(...maxSum)
}

const answer = solution(n, array)
console.log(answer)
