const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")

const city = parseInt(input[0])
const loads = input[1].split(" ").map(Number) //[ 2, 3, 1 ]
const prices = input[2].split(" ").map(Number) //[ 5, 2, 4, 1 ]

const solution = (city, loads, prices) => {
  let current = 0
  let charge = 0
  let destination = 1
  //마지막 도시가 될 때까지 while(current < city)
  //prices[current] < prices[current+1]
  //현재 도시와 다음 도시의 기름 가격 비교해서 가격이 저렴한 동안
  //목적지++
  //현재 도시에서 목적지 도시에 도착하는 거리만큼 충전 => 현재 도시 = 목적지
  //아니면 다음 도시에 도착하는 거리만큼 충전 => 현재 도시 ++
  //current++
  while (destination < city && current < city) {
    if (prices[current] < prices[current + 1]) {
      while (prices[current] < prices[destination]) {
        destination++
      }
      charge += (loads[current] + loads[destination - 1]) * prices[current]
      current = destination + 1
    } else {
      charge += loads[current] * prices[current]
      current++
      destination = current + 1
    }
  }
  return charge
}

const answer = solution(city, loads, prices)
console.log(answer)
