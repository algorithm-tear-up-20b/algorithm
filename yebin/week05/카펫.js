/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.6MB)
테스트 3 〉	통과 (0.20ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.5MB)
테스트 6 〉	통과 (0.15ms, 33.5MB)
테스트 7 〉	통과 (0.19ms, 33.6MB)
테스트 8 〉	통과 (0.21ms, 33.6MB)
테스트 9 〉	통과 (0.20ms, 33.5MB)
테스트 10 〉	통과 (0.24ms, 33.8MB)
테스트 11 〉	통과 (0.04ms, 33.6MB)
테스트 12 〉	통과 (0.04ms, 33.5MB)
테스트 13 〉	통과 (0.04ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(brown, yellow) {
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    const x = yellow / i;
    if (i * x === yellow && (i + 2) * (x + 2) - yellow === brown)
      return [x + 2, i + 2];
  }
}
