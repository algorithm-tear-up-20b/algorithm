// 8×8 크기의 체스판으로 만들려고 한다.
// 체스판은 검은색과 흰색이 번갈아서 칠해져 있어야 한다. 구체적으로, 각 칸이 검은색과 흰색 중 하나로 색칠되어 있고,
// 변을 공유하는 두 개의 사각형은 다른 색으로 칠해져 있어야 한다.

// 다시 칠해야 하는 정사각형의 최소 개수를 구하는 프로그램

// 입력
// N과 M은 8보다 크거나 같고, 50보다 작거나 같은 자연수이다.
// 둘째 줄부터 N개의 줄에는 보드의 각 행의 상태가 주어진다. B는 검은색이며, W는 흰색이다.

// 출력
// 다시 칠해야 하는 정사각형 개수의 최솟값

// const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

const input = [
  "8 8",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBBBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map((row) => row.split(""));

const countPaint = (rowStart, colStart, color) => {
  console.log(rowStart, colStart);
  let count = 0;
  for (let i = rowStart; i < rowStart + 8; i++) {
    for (let j = colStart; j < colStart + 8; j++) {
      // 8X8 크기의 체스판을 탐색하면서 각 칸이 color와 일치하는지 여부를 따져서 칠해야 하는 정사각형의 크기를 계산
      count +=
        (i + j) % 2 === 0 ? board[i][j] !== color : board[i][j] === color;
    }
  }
  return count;
};

let minCount = Infinity;
for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    minCount = Math.min(minCount, countPaint(i, j, "W"), countPaint(i, j, "B"));
  }
}

console.log(minCount);
