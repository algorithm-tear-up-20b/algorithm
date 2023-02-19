/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (8.34ms, 36.8MB)
테스트 2 〉	통과 (0.24ms, 33.5MB)
테스트 3 〉	통과 (0.08ms, 33.4MB)
테스트 4 〉	통과 (0.15ms, 33.4MB)
테스트 5 〉	통과 (0.10ms, 33.5MB)
테스트 6 〉	통과 (0.08ms, 33.6MB)
테스트 7 〉	통과 (0.08ms, 33.5MB)
테스트 8 〉	통과 (0.08ms, 33.4MB)
테스트 9 〉	통과 (0.08ms, 33.4MB)
테스트 10 〉	통과 (0.08ms, 33.5MB)
테스트 11 〉	통과 (0.18ms, 33.4MB)
테스트 12 〉	통과 (0.07ms, 33.4MB)
테스트 13 〉	통과 (0.12ms, 33.4MB)
테스트 14 〉	통과 (0.12ms, 33.4MB)
테스트 15 〉	통과 (0.07ms, 33.4MB)
테스트 16 〉	통과 (0.08ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 소수 판별 함수
function isPrime(num) {
  if (num === 1) return false;
  if (num % 2 === 0) {
    if (num === 2) return true;
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  // k진수 문자열로 변환
  const converted = n.toString(k);
  let arr = converted
    .split("0")
    .map((el) => isPrime(+el))
    // 소수 판별 true인 경우만 필터링
    .filter((el) => el);
  return arr.length;
}

//다른 사람의 풀이
