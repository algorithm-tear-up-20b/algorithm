let fs = require("fs");
let [[N, M], ...board] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));
N = +N;
M = +M;
board = board.map((e) => e[0].split(""));

const getPaintingCount = (board, firstColor) => {
  let count = 0;
  for (let row = 0; row < board.length; row++) {
    for (let square = 0; square < board[0].length; square++) {
      if ((row + square) % 2 === 0 && board[row][square] !== firstColor) {
        count++;
        continue;
      }
      if ((row + square) % 2 === 1 && board[row][square] === firstColor)
        count++;
    }
  }
  return count;
};

let answer = 64;
for (let i = 7; i < N; i++) {
  for (let j = 7; j < M; j++) {
    const boardCut = board
      .slice(i - 7, i + 1)
      .map((row) => row.slice(j - 7, j + 1));
    answer = Math.min(
      answer,
      getPaintingCount(boardCut, "W"),
      getPaintingCount(boardCut, "B")
    );
  }
}

console.log(answer);
