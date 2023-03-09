// 1018번

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

let NM = input.shift().split(" ").map(Number);
let N = NM.shift();
let M = NM.shift();
const candidates = [];

const whiteFirstBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackFirstBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function paintWhiteFirst(x, y) {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (input[i][j] !== whiteFirstBoard[i - y][j - x]) {
        count++;
      }
    }
  }

  return count;
}

function paintBlackFirst(x, y) {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (input[i][j] !== blackFirstBoard[i - y][j - x]) {
        count++;
      }
    }
  }

  return count;
}

for (let i = 0; i + 7 < N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    candidates.push(paintWhiteFirst(j, i));
    candidates.push(paintBlackFirst(j, i));
  }
}

console.log(Math.min(...candidates));
