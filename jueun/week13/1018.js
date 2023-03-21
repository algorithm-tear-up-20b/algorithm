// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

let input = [
  "10 13",
  "BBBBBBBBWBWBW",
  "BBBBBBBBBWBWB",
  "BBBBBBBBWBWBW",
  "BBBBBBBBBWBWB",
  "BBBBBBBBWBWBW",
  "BBBBBBBBBWBWB",
  "BBBBBBBBWBWBW",
  "BBBBBBBBBWBWB",
  "WWWWWWWWWWBWB",
  "WWWWWWWWWWBWB",
];

// 첫번째가 W인 경우, B인 경우 두 가지 모두 검사 -> 그 중 더 적게 바꾸는 쪽 선택
// 0,0 부터 시작해서 m - 8, n - 8이 0인 인덱스까지
// 미리 두 가지 경우로 바꿔야 하는지 여부를 배열로 저장

const [m, n] = input[0].split(" ").map(Number);
const board = input.slice(1);

const isRightW = getRight("W", "B");
const isRightB = getRight("B", "W");

// console.table(isRightW);

const minOfW = getMinChange(isRightW, m, n);
const minOfB = getMinChange(isRightB, m, n);

console.log(Math.min(minOfW, minOfB));

function getRight(firstLetter, secondLetter) {
  let rights = [];
  let now = firstLetter;
  for (let i = 0; i < m; i++) {
    rights.push([]);
    for (let j = 0; j < n; j++) {
      if (board[i][j] === now) rights[i][j] = true;
      else rights[i][j] = false;
      now = now === firstLetter ? secondLetter : firstLetter;
    }

    if ((firstLetter === "B" && i % 2) || (firstLetter === "W" && i % 2 === 0))
      now = "B";
    else if (
      (firstLetter === "W" && i % 2) ||
      (firstLetter === "B" && i % 2 === 0)
    )
      now = "W";
  }
  return rights;
}

function getMinChange(rightArr, m, n) {
  let minChange = Number.MAX_SAFE_INTEGER;

  let sum = 0;
  let nowBoard;

  for (let i = 0; i <= m - 8; i++) {
    for (let j = 0; j <= n - 8; j++) {
      nowBoard = rightArr.slice(i, i + 8).map((arr) => arr.slice(j, j + 8));
      sum = nowBoard.reduce(
        (acc, cur) => acc + cur.reduce((acc, cur) => acc + (cur ? 0 : 1), 0),
        0
      );
      minChange = Math.min(minChange, sum);
    }
  }

  return minChange;
}

/*
메모리: 12000 KB
시간: 208 ms
*/
