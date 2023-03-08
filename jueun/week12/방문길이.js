function solution(dirs) {
  // visited = [[false, false], [false, false], ..., [false, false]] 11 * 11 좌표
  //              가로    세로
  // 5, 5에서 시작

  let answer = 0;
  let visited = [];

  for (let i = 0; i < 11; i++) {
    visited.push([]);
    for (let j = 0; j < 11; j++) {
      visited[i].push([false, false]);
    }
  }

  let i = 5,
    j = 5;

  dirs.split("").map((direction) => {
    if (direction === "U" && i > 0) {
      if (!visited[--i][j][1]) answer++;
      visited[i][j][1] = true;
      // visited[i + 1][j][1] = true;
    } else if (direction === "D" && i < 10) {
      if (!visited[i][j][1]) answer++;
      visited[i++][j][1] = true;
      // visited[i - 1][j][1] = true;
    } else if (direction === "L" && j > 0) {
      if (!visited[i][--j][0]) answer++;
      visited[i][j][0] = true;
      // visited[i][j + 1][0] = true;
    } else if (direction === "R" && j < 10) {
      if (!visited[i][j][0]) answer++;
      visited[i][j++][0] = true;
      // visited[i][j - 1][0] = true;
    }
  });

  return answer;
}

console.log(solution("LRLRL"));
