const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")

const [city, loads, prices] = [
  parseInt(input[0]),
  input[1].split(" ").map(BigInt),
  input[2].split(" ").map(BigInt),
]

const solution = (loads, prices) => {
  let minPrice = prices[0]
  let charge = 0n

  for (let i = 0; i < loads.length; i++) {
    if (minPrice > prices[i]) minPrice = prices[i]
    charge += minPrice * loads[i]
  }

  return String(charge)
}

const answer = solution(loads, prices)
console.log(answer)
