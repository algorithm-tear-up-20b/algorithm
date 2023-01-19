/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.21ms, 33.6MB)
테스트 2 〉	통과 (0.22ms, 33.5MB)
테스트 3 〉	통과 (0.13ms, 33.5MB)
테스트 4 〉	통과 (0.24ms, 33.6MB)
테스트 5 〉	통과 (0.16ms, 33.5MB)
테스트 6 〉	통과 (0.21ms, 33.5MB)
테스트 7 〉	통과 (0.19ms, 33.5MB)
테스트 8 〉	통과 (0.22ms, 33.5MB)
테스트 9 〉	통과 (0.15ms, 33.4MB)
테스트 10 〉	통과 (0.15ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(arr) {
  arr = arr.sort((a, b) => a - b);
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  if (arr.length === 1) return arr[0];
  let result = lcm(arr[0], arr[1]);
  if (arr.length > 2) {
    for (let i = 2; i < arr.length; i++) {
      result = lcm(result, arr[i]);
    }
  }
  return result;
}
