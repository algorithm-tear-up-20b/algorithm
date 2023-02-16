function solution(land) {
  // [[1, 2, 30, 40], [1, 2, 3, 40], [1, 2, 3, 100]] , 143
  // [[1, 2, 30, 40], [1, 2, 3, 40]], 70
  // dp문제
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]); //이전의 열을 기준으로 0번째 입장에선 1 2 3 번째중 가장 큰 열을 밟고온것이므로
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][1], land[i - 1][0], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][0]);
  }

  return Math.max(...land.map((el) => Math.max(...el)));
}
