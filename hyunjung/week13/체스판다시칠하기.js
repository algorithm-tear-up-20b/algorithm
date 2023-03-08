const fs = require("fs");
const readFileSyncAddress = "/dev/stdin";
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const [size, ...map] = input;
const [m, n] = size.split(" ");

const solution = (m, n, map) => {
  const countList = [];

  //시작지점, 체스판을 벗어나는 일을 방지하기 위해 -7
  for (let col = 0; col < m - 7; col++) {
    for (let row = 0; row < n - 7; row++) {
      let countWB = 0; //WB로 시작하는 경우 -> 짝수 칸은 W, 홀수 칸은 B
      let countBW = 0; //BW로 시작하는 경우 -> 짝수 칸은 B, 홀수 칸은 W

      // 첫번째 칸 + 8개만큼 반복
      for (let i = col; i < col + 8; i++) {
        for (let j = row; j < row + 8; j++) {
          if ((i + j) % 2 === 0) {
            // 짝수칸
            if (map[i][j] !== "W") countWB++; //WB
            if (map[i][j] !== "B") countBW++; //BW
          } else {
            //홀수칸
            if (map[i][j] !== "B") countWB++; //WB
            if (map[i][j] !== "W") countBW++; //BW
          }
        }
      }
      countList.push(countWB);
      countList.push(countBW);
    }
  }
  return Math.min(...countList);
};
//제출
const answer = solution(m, n, map);
console.log(answer);
