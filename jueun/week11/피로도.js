// Reference 참고

function solution(k, dungeons) {
  let visited = Array.from({ length: dungeons.length }, () => false);
  let max = 0;

  const dfs = (count, k) => {
    max = Math.max(max, count);

    for (let i = 0; i < dungeons.length; i++) {
      if (dungeons[i][0] <= k && !visited[i]) {
        visited[i] = true;
        dfs(count + 1, k - dungeons[i][1]);
        visited[i] = false;
      }
    }
  };

  dfs(0, k);
  return max;
}
