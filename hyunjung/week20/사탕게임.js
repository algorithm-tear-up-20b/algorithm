const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let [n, ...candies] = input
n = +n
candies = candies.map((el) => el.split(""))

function solution(n, candyMap) {
  let maxCandies = 1
  const visited = [...Array(n)].map(() => Array(n).fill(false))

  const dx = [0, 0, 1, -1]
  const dy = [1, -1, 0, 0]

  const getMaxCandies = () => {
    let count = 0
    let res = 0
    let pre = ""
    for (let i = 0; i < n; i++) {
      //행 검사
      count = 1
      pre = candyMap[0][i]
      for (let j = 1; j < n; j++) {
        if (pre === candyMap[j][i]) {
          count++
        } else {
          res = Math.max(res, count)
          pre = candyMap[j][i]
          count = 1
        }
      }
      res = Math.max(res, count)

      // 열 검사
      count = 1
      pre = candyMap[i][0]
      for (let j = 1; j < n; j++) {
        if (pre === candyMap[i][j]) {
          count++
        } else {
          res = Math.max(res, count)
          pre = candyMap[i][j]
          count = 1
        }
      }
      res = Math.max(res, count)
    }
    return res
  }

  const searchMap = (x, y) => {
    for (let i = 0; i < 4; i++) {
      let ax = x + dx[i]
      let ay = y + dy[i]
      let temp

      if (ax >= 0 && ay >= 0 && ax < n && ay < n) {
        if (!visited[ax][ay]) {
          temp = candyMap[x][y]
          candyMap[x][y] = candyMap[ax][ay]
          candyMap[ax][ay] = temp

          maxCandies = Math.max(maxCandies, getMaxCandies())

          temp = candyMap[x][y]
          candyMap[x][y] = candyMap[ax][ay]
          candyMap[ax][ay] = temp
        }

        visited[x][y] = true
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      searchMap(i, j)
    }
  }
  return maxCandies
}

const answer = solution(n, candies)
console.log(answer)
