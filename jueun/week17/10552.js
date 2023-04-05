// 메모리 초과

const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/10552.txt"
  )
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [[N, M, P], ...channelPreference] = input;

/*
0~2번 노인의 채널 선호도

    favorite hate
0:   1        2
1:   2        3
2:   3        2

1. 인접 행렬 만들기
- hate -> favorite 방향으로 간선 생성
- 이미 어린 사람이 hate하는 채널이면 나이 많은 사람 간선은 생성 X

2. dfs로 돌기
- visited 배열에 방문 체크하기
- dfs 한번 호출할 때마다 count++
- 이미 방문한 노드에 재방문할 경우 return -1

*/

const solution = (m, first, channelPreference) => {
  let count = 0;
  const makeAdjMatrix = (m, channelPreference) => {
    const matrix = new Array(m + 1);
    for (let i = 0; i <= m; i++) matrix[i] = new Array(m + 1).fill(0);
    const alreadyHate = new Array(m + 1).fill(false);
    for (let [favorite, hate] of channelPreference) {
      if (!alreadyHate[hate]) {
        matrix[hate][favorite] = 1;
        alreadyHate[hate] = true;
      }
    }
    return matrix;
  };

  const adjMatrix = makeAdjMatrix(m, channelPreference);

  const visited = new Array(m + 1).fill(false);
  const dfs = (node) => {
    if (visited[node]) return -1;
    visited[node] = true;
    for (let i = 1; i <= m; i++) {
      if (adjMatrix[node][i]) {
        count++;
        return dfs(i);
      }
    }
  };

  if (dfs(first) === -1) return -1;

  return count;
};

console.log(solution(M, P, channelPreference));
