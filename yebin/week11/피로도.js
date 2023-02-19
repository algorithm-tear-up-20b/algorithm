/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.45ms, 33.5MB)
테스트 2 〉	통과 (0.62ms, 33.6MB)
테스트 3 〉	통과 (0.89ms, 33.9MB)
테스트 4 〉	통과 (0.88ms, 34MB)
테스트 5 〉	통과 (4.56ms, 38.3MB)
테스트 6 〉	통과 (19.72ms, 47.2MB)
테스트 7 〉	통과 (92.85ms, 73.5MB)
테스트 8 〉	통과 (84.05ms, 74.9MB)
테스트 9 〉	통과 (0.93ms, 33.9MB)
테스트 10 〉	통과 (24.81ms, 48MB)
테스트 11 〉	통과 (0.50ms, 33.5MB)
테스트 12 〉	통과 (84.49ms, 74.5MB)
테스트 13 〉	통과 (111.06ms, 74.8MB)
테스트 14 〉	통과 (88.55ms, 75.1MB)
테스트 15 〉	통과 (88.08ms, 74.9MB)
테스트 16 〉	통과 (19.81ms, 47.1MB)
테스트 17 〉	통과 (103.51ms, 71.1MB)
테스트 18 〉	통과 (0.44ms, 33.6MB)
테스트 19 〉	통과 (0.89ms, 34MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(k, dungeons) {
  // 던전을 차례대로 돌고 플레이한 던전 수를 리턴
  function explore(sortedDungeons) {
    let fatigue = k;
    let count = 0;
    for (let i = 0; i < sortedDungeons.length; i++) {
      const [req, con] = sortedDungeons[i];
      if (fatigue >= req) {
        fatigue -= con;
        count++;
      }
    }
    return count;
  }

  // 모든 던전의 순열을 생성
  function getPermutations(arr, number) {
    const result = [];
    if (number === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
      const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
      const permutations = getPermutations(rest, number - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      result.push(...attached);
    });
    return result;
  }

  // 던전의 모든 순열
  const permutations = getPermutations(dungeons, dungeons.length);
  let max = 0;
  // 순열 중 중복되는 값을 소거하여 max(최대 플레이 던전 수) 값을 설정
  [...new Set(permutations)].map((dungeons) => {
    max = max < explore(dungeons) ? explore(dungeons) : max;
  });
  return max;
}

//다른 사람의 풀이
// dfs를 사용하면 훨씬 빠르다 ^_^
function solution(k, d) {
  const N = d.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - d[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }

  dfs(k, 0);
  return ans;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.18ms, 33.4MB)
테스트 2 〉	통과 (0.16ms, 33.5MB)
테스트 3 〉	통과 (0.22ms, 33.4MB)
테스트 4 〉	통과 (0.26ms, 33.4MB)
테스트 5 〉	통과 (0.61ms, 33.4MB)
테스트 6 〉	통과 (1.66ms, 36.3MB)
테스트 7 〉	통과 (3.58ms, 36.3MB)
테스트 8 〉	통과 (5.04ms, 36.3MB)
테스트 9 〉	통과 (0.17ms, 33.5MB)
테스트 10 〉	통과 (0.46ms, 33.4MB)
테스트 11 〉	통과 (0.16ms, 33.4MB)
테스트 12 〉	통과 (2.18ms, 36.4MB)
테스트 13 〉	통과 (0.26ms, 33.6MB)
테스트 14 〉	통과 (0.18ms, 33.4MB)
테스트 15 〉	통과 (0.18ms, 33.4MB)
테스트 16 〉	통과 (0.18ms, 33.5MB)
테스트 17 〉	통과 (0.19ms, 33.5MB)
테스트 18 〉	통과 (0.17ms, 33.4MB)
테스트 19 〉	통과 (0.18ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
