/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.14ms, 33.5MB)
테스트 2 〉	통과 (0.31ms, 33.4MB)
테스트 3 〉	통과 (0.13ms, 33.4MB)
테스트 4 〉	통과 (0.13ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.15ms, 33.6MB)
테스트 7 〉	통과 (0.14ms, 33.4MB)
테스트 8 〉	통과 (0.25ms, 33.5MB)
테스트 9 〉	통과 (0.13ms, 33.5MB)
테스트 10 〉	통과 (0.15ms, 33.4MB)
테스트 11 〉	통과 (0.22ms, 33.4MB)
테스트 12 〉	통과 (0.13ms, 33.5MB)
테스트 13 〉	통과 (0.22ms, 33.5MB)
테스트 14 〉	통과 (0.04ms, 33.4MB)
테스트 15 〉	통과 (0.05ms, 33.4MB)
테스트 16 〉	통과 (0.13ms, 33.5MB)
테스트 17 〉	통과 (0.27ms, 33.4MB)
테스트 18 〉	통과 (0.13ms, 33.5MB)
테스트 19 〉	통과 (0.24ms, 33.4MB)
테스트 20 〉	통과 (0.19ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(priorities, location) {
  let count = 0;
  while (true) {
    const max = Math.max(...priorities);
    const n = priorities.shift();
    if (n === max) {
      count++;
      if (location === 0) return count;
      location--;
    } else {
      priorities.push(n);
      location--;
    }
    if (location < 0) location = priorities.length - 1;
  }
}
