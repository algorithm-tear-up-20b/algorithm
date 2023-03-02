/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.37ms, 33.5MB)
테스트 2 〉	통과 (0.09ms, 33.4MB)
테스트 3 〉	통과 (0.13ms, 33.3MB)
테스트 4 〉	통과 (0.33ms, 33.5MB)
테스트 5 〉	통과 (0.31ms, 33.5MB)
테스트 6 〉	통과 (0.35ms, 33.5MB)
테스트 7 〉	통과 (0.22ms, 33.5MB)
테스트 8 〉	통과 (0.25ms, 33.3MB)
테스트 9 〉	통과 (0.24ms, 33.4MB)
테스트 10 〉	통과 (0.26ms, 33.5MB)
테스트 11 〉	통과 (0.24ms, 33.5MB)
테스트 12 〉	통과 (0.32ms, 33.6MB)
테스트 13 〉	통과 (0.42ms, 33.5MB)
테스트 14 〉	통과 (0.30ms, 33.4MB)
테스트 15 〉	통과 (0.29ms, 33.6MB)
테스트 16 〉	통과 (0.64ms, 33.7MB)
테스트 17 〉	통과 (1.09ms, 33.7MB)
테스트 18 〉	통과 (0.74ms, 33.6MB)
테스트 19 〉	통과 (0.62ms, 33.6MB)
테스트 20 〉	통과 (1.11ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(dirs) {
  const paths = new Set();
  const dirValues = {
    U: [1, 0],
    D: [-1, 0],
    R: [0, 1],
    L: [0, -1],
  };
  let now = [5, 5];

  for (let dir of dirs) {
    const to = [now[0] + dirValues[dir][0], now[1] + dirValues[dir][1]];
    if (!(to[0] < 0 || to[0] > 10 || to[1] < 0 || to[1] > 10)) {
      paths.add(now.join("") + to.join(""));
      paths.add(to.join("") + now.join(""));
      now = to;
    }
  }
  return paths.size / 2;
}

//다른 사람의 풀이
