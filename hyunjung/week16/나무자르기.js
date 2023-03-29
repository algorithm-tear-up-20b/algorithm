const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")

const [n, m] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)

function solution(n, m, trees) {
  arr.sort((a, b) => a - b)
  let height = 0
  start = 0
  end = Math.max(...trees)

  for (let i = 0; i < n; i++) {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2)
      let woodSum = 0
      trees.forEach((tree) => {
        let wood = tree - mid
        if (wood > 0) woodSum += wood
      })
      if (woodSum >= m) {
        if (mid > height) height = mid
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  return height
}
//제출
const answer = solution(n, m, arr)
console.log(answer)
