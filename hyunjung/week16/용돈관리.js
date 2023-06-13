const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")

let [n, m] = input[0].split(" ")
const arr = input.slice(1).map(Number)

n = +n
m = +m

const solution = (days, withdrawal, A) => {
  let start = Math.min(...A)
  let end = A.reduce((a, c) => a + c, 0)
  let K = Infinity

  while (start <= end) {
    let min = 0
    let mid = Math.floor((start + end) / 2)
    let sum = mid
    let cnt = 0

    for (let i = 0; i < days; i++) {
      if (sum - A[i] >= 0) {
        sum -= A[i]
      } else {
        cnt++
        sum = mid - A[i]
        if (sum < 0) {
          min = A[i]
          break
        }
      }
    }
    if (min > 0) {
      start = min
      continue
    }

    if (sum < mid) cnt++
    if (cnt <= withdrawal) {
      if (K > mid) {
        K = mid
      }
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return K
}

// 제출
const answer = solution(n, m, arr)
console.log(answer)
