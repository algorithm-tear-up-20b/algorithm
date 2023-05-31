const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, ...games] = input
n = +n
games = games.map((el) => el.split(' ').map(Number))

function solution(n, games) {
  let result = 0

  for (let i = 123; i < 988; i++) {
    let hundreds = parseInt(i / 100) //100의 자리
    let tens = parseInt((i / 10) % 10) //10의 자리
    let units = i % 10

    // 중복 제거
    if (hundreds === tens || hundreds === units || tens === units) continue

    // 0 제거 : 102 120 ...
    if (tens === 0 || units === 0) continue

    let check = true

    for (let i = 0; i < n; i++) {
      let strike = 0,
        ball = 0

      let answer = games[i][0] // 생각한 숫자
      let strikeAnswer = games[i][1]
      let ballAnswer = games[i][2]

      let hundredsOfAnswer = parseInt(answer / 100)
      let tensOfAnswer = parseInt((answer / 10) % 10)
      let unitsOfAnswer = answer % 10

      //정확하게 일치하는 경우
      if (hundreds === hundredsOfAnswer) strike++
      if (tens === tensOfAnswer) strike++
      if (units === unitsOfAnswer) strike++

      // 숫자 일치 && 자리 일치 X
      if (hundredsOfAnswer === tens || hundredsOfAnswer === units) ball++
      if (tensOfAnswer === hundreds || tensOfAnswer === units) ball++
      if (unitsOfAnswer === hundreds || unitsOfAnswer === tens) ball++

      if (ball !== ballAnswer || strike !== strikeAnswer) {
        // ball이나 strike 개수가 다른 경우 counting 되지 않음
        check = false
        break
      }
    }

    if (check) {
      result++
    }
  }
  return result
}

const answer = solution(n, games)
console.log(answer)
