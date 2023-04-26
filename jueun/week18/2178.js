const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2178.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((el) => el.split("").map(Number));

const solution = (n, m, maze) => {
  const visited = new Array(n);
  for (let i = 0; i < n; i++) visited[i] = new Array(m).fill(false);

  const bfs = (i, j) => {
    const queue = [[i, j]];
    const lengths = [1];
    let nowIdx = 0,
      nowI,
      nowJ,
      nowLength;
    visited[0][0] = true;

    let answer;

    while (nowIdx < queue.length) {
      nowLength = lengths[nowIdx];
      [nowI, nowJ] = queue[nowIdx++];

      if (nowI === n - 1 && nowJ === m - 1) {
        answer = nowLength;
        break;
      }

      if (maze[nowI - 1]?.[nowJ] && !visited[nowI - 1]?.[nowJ]) {
        visited[nowI - 1][nowJ] = true;
        queue.push([nowI - 1, nowJ]);
        lengths.push(nowLength + 1);
      }
      if (maze[nowI + 1]?.[nowJ] && !visited[nowI + 1]?.[nowJ]) {
        visited[nowI + 1][nowJ] = true;
        queue.push([nowI + 1, nowJ]);
        lengths.push(nowLength + 1);
      }
      if (maze[nowI]?.[nowJ - 1] && !visited[nowI]?.[nowJ - 1]) {
        visited[nowI][nowJ - 1] = true;
        queue.push([nowI, nowJ - 1]);
        lengths.push(nowLength + 1);
      }
      if (maze[nowI]?.[nowJ + 1] && !visited[nowI]?.[nowJ + 1]) {
        visited[nowI][nowJ + 1] = true;
        queue.push([nowI, nowJ + 1]);
        lengths.push(nowLength + 1);
      }
    }

    return answer;
  };

  return bfs(0, 0);
};

console.log(solution(N, M, maze));
