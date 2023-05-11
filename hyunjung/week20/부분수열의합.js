const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, s] = input[0].split(" ").map(Number)
const array = input[1].split(" ").map(Number)

function solution(n, s, array) {
  let count = 0

  const recursive = (i, sum) => {
    if (i === n) return

    sum += array[i]
    if (sum === s) count++

    recursive(i + 1, sum)
    recursive(i + 1, sum - array[i])
  }

  recursive(0, 0)
  return count
}

const answer = solution(n, s, array)
console.log(answer)
