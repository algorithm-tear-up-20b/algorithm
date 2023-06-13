const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n")
  .map(Number)

const solution = (stone) => {
  return stone % 2 === 0 ? "CY" : "SK"
}

const answer = solution(input)
console.log(answer)
