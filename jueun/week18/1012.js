const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1012.txt"
  )
  .toString()
  .split("\n");

const T = +input[0];

/*
1. 배추밭 만들기
    makeField 함수 구현

2. visited 2차원 배열 만들기
  모든 위치를 false로 초기화 한 후, dfs 실행할 때 방문한 노드는 true 할당하기

3. bfs 실행
worms = 0으로 정하고, bfs 실행이 끝날 때마다 worms++
for문 내에서
visited에 방문하지 않은 노드가 있을 경우 그 노드로 bfs 실행

for문이 끝나면 return worms
*/

const makeField = (m, n, positions) => {
  const field = new Array(m);
  for (let i = 0; i < m; i++) field[i] = new Array(n).fill(0);

  positions.forEach((xy) => {
    field[xy[0]][xy[1]] = 1;
  });

  return field;
};

const solution = (m, n, k, posOfCabbages) => {
  let worms = 0;

  const cabbageField = makeField(m, n, posOfCabbages);

  const visited = new Array(m);
  for (let i = 0; i < m; i++) visited[i] = new Array(n).fill(false);

  const bfs = (i, j) => {
    const queue = [[i, j]];
    let nowIdx = 0,
      nowI,
      nowJ;
    while (nowIdx < queue.length) {
      [nowI, nowJ] = queue[nowIdx++];
      if (cabbageField[nowI - 1]?.[nowJ] && !visited[nowI - 1]?.[nowJ]) {
        visited[nowI - 1][nowJ] = true;
        queue.push([nowI - 1, nowJ]);
      }
      if (cabbageField[nowI + 1]?.[nowJ] && !visited[nowI + 1]?.[nowJ]) {
        visited[nowI + 1][nowJ] = true;
        queue.push([nowI + 1, nowJ]);
      }
      if (cabbageField[nowI]?.[nowJ - 1] && !visited[nowI]?.[nowJ - 1]) {
        visited[nowI][nowJ - 1] = true;
        queue.push([nowI, nowJ - 1]);
      }
      if (cabbageField[nowI]?.[nowJ + 1] && !visited[nowI]?.[nowJ + 1]) {
        visited[nowI][nowJ + 1] = true;
        queue.push([nowI, nowJ + 1]);
      }
    }
    return;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (cabbageField[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
        worms++;
      }
    }
  }

  return worms;
};

let MNKIdx = 1;
for (let i = 0; i < T; i++) {
  let [M, N, K] = input[MNKIdx].split(" ").map(Number);
  let posOfCabbages = input
    .slice(MNKIdx + 1, MNKIdx + K + 1)
    .map((xy) => xy.split(" ").map(Number));
  MNKIdx += K + 1;

  console.log(solution(M, N, K, posOfCabbages));
}
