// 사탕 게임
// reference 참고

const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/3085.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const candy = input.slice(1).map((el) => el.split(""));

let max = 1;

for (let i = 0; i < N; i++) {
  if (max == N) break;
  for (let j = 0; j < N; j++) {
    if (max == N) break;
    candySwap(i, j);
  }
}
console.log(max);

function candySwap(i, j) {
  const dir = [
    [0, 1],
    [1, 0],
  ];
  dir.forEach((v) => {
    const [x, y] = v;

    if (
      i + x > -1 &&
      j + y > -1 &&
      i + x < N &&
      j + y < N &&
      candy[i + x][j + y] != candy[i][j]
    ) {
      let temp = candy[i][j];
      candy[i][j] = candy[i + x][j + y];
      candy[i + x][j + y] = temp;
      checkRow();
      checkColumn();
      candy[i + x][j + y] = candy[i][j];
      candy[i][j] = temp;
    }
  });
}

function checkRow() {
  for (let i = 0; i < N; i++) {
    let checkArr = [1];
    for (let j = 1; j < N; j++) {
      checkArr[j] = candy[i][j - 1] == candy[i][j] ? checkArr[j - 1] + 1 : 1;
    }
    max = Math.max(...checkArr, max);
  }
}

function checkColumn() {
  for (let i = 0; i < N; i++) {
    let checkArr = [1];
    for (let j = 1; j < N; j++) {
      checkArr[j] = candy[j - 1][i] == candy[j][i] ? checkArr[j - 1] + 1 : 1;
    }
    max = Math.max(...checkArr, max);
  }
}
