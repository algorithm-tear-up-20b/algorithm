const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")

let [arr1, j, ...arr2] = input
let [m, n] = arr1.split(" ").map((v) => +v)
let arr = arr2.map((v) => (v = +v))

const solution = (n, arr) => {
  let count = 0
  let box = [0, n]
  arr.map((el) => {
    while (el - 1 < box[0] || el > box[1]) {
      if (el - 1 < box[0]) {
        box[0]--
        box[1]--
        count++
      } else if (el > box[1]) {
        box[0]++
        box[1]++
        count++
      }
    }
  })
  return count
}

const answer = solution(n, arr)
console.log(answer)
