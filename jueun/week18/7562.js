const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/7562.txt"
  )
  .toString()
  .trim()
  .split("\n");

const T = +input[0];

const solution = (I, start, end) => {
  const visited = new Array(I);
  for (let i = 0; i < I; i++) visited[i] = new Array(I).fill(false);

  const bfs = (start, end) => {
    let [startI, startJ] = start;
    let [endI, endJ] = end;
    const queue = [[startI, startJ]];
    const counts = [0];
    let nowIdx = 0,
      nowI,
      nowJ,
      count;
    visited[startI][startJ] = true;
    const moveRanges = [
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [-2, -1],
      [-1, -2],
      [2, -1],
      [1, -2],
    ];

    let answer;

    while (nowIdx < queue.length) {
      count = counts[nowIdx];
      [nowI, nowJ] = queue[nowIdx++];

      if (nowI === endI && nowJ === endJ) {
        answer = count;
        break;
      }

      moveRanges.forEach(([x, y]) => {
        if (
          nowI + x >= 0 &&
          nowI + x < I &&
          nowJ + y >= 0 &&
          nowJ + y < I &&
          !visited[nowI + x][nowJ + y]
        ) {
          visited[nowI + x][nowJ + y] = true;
          queue.push([nowI + x, nowJ + y]);
          counts.push(count + 1);
        }
      });
    }

    return answer;
  };

  return bfs(start, end);
};

let I, start, end;
for (let i = 0; i < T; i++) {
  I = +input[1 + i * 3];
  start = input[2 + i * 3].split(" ").map(Number);
  end = input[3 + i * 3].split(" ").map(Number);
  console.log(solution(I, start, end));
}
