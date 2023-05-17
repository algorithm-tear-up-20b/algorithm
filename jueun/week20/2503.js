// 숫자 야구

const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2503.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const logs = input.slice(1).map((line) => line.split(" ").map(Number));

const solution = (n, logs) => {
  let numCanBeAnswer = 0;

  const countStrikesNBalls = (logNum, num) => {
    const logNumArr = logNum.toString().split("");
    const numArr = num.toString().split("");
    let strikes = 0,
      balls = 0;

    for (let i = 0; i < 3; i++) {
      if (logNumArr[i] === numArr[i]) {
        strikes++;
      } else if (
        logNumArr[i] === numArr[(i + 1) % 3] ||
        logNumArr[i] === numArr[(i + 2) % 3]
      ) {
        balls++;
      }
    }

    return [strikes, balls];
  };

  for (let num = 123; num <= 987; num++) {
    const numArr = num.toString().split("");
    if (
      numArr.includes("0") ||
      numArr[0] === numArr[1] ||
      numArr[1] === numArr[2] ||
      numArr[0] === numArr[2]
    )
      continue;
    let check = 0;
    let strikes,
      balls = 0;

    for (let i = 0; i < n; i++) {
      [strikes, balls] = countStrikesNBalls(logs[i][0], num);
      if (logs[i][1] === strikes && logs[i][2] === balls) {
        check++;
      }
    }
    if (check === n) {
      numCanBeAnswer++;
    }
  }

  return numCanBeAnswer;
};

console.log(solution(N, logs));
