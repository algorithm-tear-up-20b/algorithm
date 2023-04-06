const fs = require("fs")
const readFileSyncAddress = "/dev/stdin"
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n")
const [n, m, p] = input[0].split(" ").map(Number)
const channels = input.slice(1).map((el) => el.split(" ").map(Number))

const solution = (n, m, p, channels) => {
  let curChannel = p
  let cnt = 0
  let searched = new Array(m + 1).fill(false)

  const changeChannel = (channels, curChannel) => {
    if (searched[curChannel]) {
      return (cnt = -1)
    }
    searched[curChannel] = true

    for (let i = 0; i < channels.length; i++) {
      if (channels[i][1] === curChannel) {
        //현재 채널이 싫어하는 채널이면
        curChannel = channels[i][0] //좋아하는 채널로 변경

        if (searched[curChannel]) {
          // 변경한 채널이 검색한 채널이면 리턴
          return (cnt = -1)
        } else {
          cnt++
          return changeChannel(channels, curChannel)
        }
      }
    }
  }

  changeChannel(channels, curChannel)

  return cnt
}

//제출
const answer = solution(n, m, p, channels)
console.log(answer)
