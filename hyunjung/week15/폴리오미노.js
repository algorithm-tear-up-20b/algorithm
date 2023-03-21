const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim()

function solution(n) {
  n = n.split(".")

  for (let i = 0; i < n.length; i++) {
    if (n[i].length % 2 === 1) {
      return -1
    } else if (n[i].length % 4 === 0) {
      n[i].replaceAll("X", "A")
    }
  }

  const result = n.map((el) => {
    let str = ""
    let leng = el.length
    while (leng > 0) {
      let a = 0
      let b = 0
      if (leng === 2) {
        b += parseInt(leng / 2)
        str += "B".repeat(b * 2)
        leng -= b * 2
      } else {
        a += parseInt(leng / 4)
        leng -= a * 4
        str += "A".repeat(a * 4)
      }
    }
    if (leng !== 0) return -1
    return str
  })
  return result.reduce((acc, cur) => acc + "." + cur)
}
//제출
const answer = solution(input)
console.log(answer)
