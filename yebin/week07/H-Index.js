/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.29ms, 33.6MB)
테스트 2 〉	통과 (0.36ms, 33.5MB)
테스트 3 〉	통과 (0.32ms, 33.6MB)
테스트 4 〉	통과 (0.30ms, 33.6MB)
테스트 5 〉	통과 (0.43ms, 33.6MB)
테스트 6 〉	통과 (0.38ms, 33.5MB)
테스트 7 〉	통과 (0.20ms, 33.5MB)
테스트 8 〉	통과 (0.13ms, 33.5MB)
테스트 9 〉	통과 (0.15ms, 33.4MB)
테스트 10 〉	통과 (0.36ms, 33.5MB)
테스트 11 〉	통과 (0.41ms, 33.6MB)
테스트 12 〉	통과 (0.15ms, 33.5MB)
테스트 13 〉	통과 (0.44ms, 33.5MB)
테스트 14 〉	통과 (0.37ms, 33.6MB)
테스트 15 〉	통과 (0.40ms, 33.5MB)
테스트 16 〉	통과 (0.06ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(citations) {
  const sorted = citations.sort((a, b) => b - a);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] <= i) return i;
  }
  // [4, 4, 4]
  return sorted.length;
}
