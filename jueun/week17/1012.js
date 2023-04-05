const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1012.txt"
  )
  .toString()
  .split("\n");

// const input = [
//   "2",
//   "10 8 17",
//   "0 0",
//   "1 0",
//   "1 1",
//   "4 2",
//   "4 3",
//   "4 5",
//   "2 4",
//   "3 4",
//   "7 4",
//   "8 4",
//   "9 4",
//   "7 5",
//   "8 5",
//   "9 5",
//   "7 6",
//   "8 6",
//   "9 6",
//   "10 10 1",
//   "5 5",
// ];

// const input = ["1", "5 3 6", "0 2", "1 2", "2 2", "3 2", "4 2", "4 0"];

const T = +input[0];

/*
1. 배추밭 만들기
    makeField 함수 구현

2. visited 2차원 배열 만들기
  모든 위치를 false로 초기화 한 후, dfs 실행할 때 방문한 노드는 true 할당하기

3. dfs 실행
worms = 0으로 정하고, dfs 실행이 끝날 때마다 worms++
for문 내에서
visited에 방문하지 않은 노드가 있을 경우 그 노드로 dfs 실행

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

  const dfs = (i, j) => {
    visited[i][j] = true;
    if (cabbageField[i - 1]?.[j] === 1 && !visited[i - 1]?.[j]) dfs(i - 1, j);
    if (cabbageField[i + 1]?.[j] === 1 && !visited[i + 1]?.[j]) dfs(i + 1, j);
    if (cabbageField[i]?.[j - 1] === 1 && !visited[i]?.[j - 1]) dfs(i, j - 1);
    if (cabbageField[i]?.[j + 1] === 1 && !visited[i]?.[j + 1]) dfs(i, j + 1);

    return;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (cabbageField[i][j] === 1 && !visited[i][j]) {
        dfs(i, j);
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
