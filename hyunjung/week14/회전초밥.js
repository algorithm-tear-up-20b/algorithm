const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")

let [n, d, k, c] = input[0].split(" ").map(Number)
const dishes = input.slice(1).map(Number)

const solution = (n, d, k, c, dishes) => {
  let count = 0
  let maxCount = 0

  let sushi = dishes.slice(0, k).reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++
    } else {
      acc[cur] = 1
      count++
      maxCount++
    }
    return acc
  }, {})

  let i = 0
  let j = k - 1

  while (i < n) {
    if (sushi[dishes[i]] === 1) {
      count--
    }
    sushi[dishes[i]]--

    i++
    j++

    if (j === n) {
      j = 0
    }

    if (sushi[dishes[j]]) {
      sushi[dishes[j]]++
    } else {
      sushi[dishes[j]] = 1
      count++
    }
    maxCount = Math.max(maxCount, count + !sushi[c])
  }
  return maxCount
}

//제출
const answer = solution(n, d, k, c, dishes)
console.log(answer)
