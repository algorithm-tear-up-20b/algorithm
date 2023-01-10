/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.14ms, 33.4MB)
테스트 4 〉	통과 (0.17ms, 33.4MB)
테스트 5 〉	통과 (0.20ms, 33.4MB)
테스트 6 〉	통과 (0.14ms, 33.4MB)
테스트 7 〉	통과 (0.18ms, 33.5MB)
테스트 8 〉	통과 (0.27ms, 33.4MB)
테스트 9 〉	통과 (0.17ms, 33.5MB)
테스트 10 〉	통과 (0.24ms, 33.4MB)
테스트 11 〉	통과 (0.45ms, 33.7MB)
테스트 12 〉	통과 (0.43ms, 33.6MB)
테스트 13 〉	통과 (0.31ms, 33.6MB)
테스트 14 〉	통과 (0.64ms, 33.7MB)
테스트 15 〉	통과 (0.63ms, 33.7MB)
테스트 16 〉	통과 (0.46ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 문제 풀이를 위해 피보나치 일부 코드 수정
const fibonacci = (n) => {
  let array = [1, 1];
  const fib = (n) => {
    if (array[n] !== undefined) return array[n];
    array[n] = (fib(n - 1) + fib(n - 2)) % 1234567;
    return array[n];
  };
  return fib(n);
};

function solution(n) {
  return fibonacci(n);
}
