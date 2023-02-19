/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.12ms, 33.4MB)
테스트 2 〉	통과 (0.11ms, 33.4MB)
테스트 3 〉	통과 (0.09ms, 33.5MB)
테스트 4 〉	통과 (0.23ms, 33.4MB)
테스트 5 〉	통과 (0.38ms, 33.5MB)
테스트 6 〉	통과 (0.56ms, 33.5MB)
테스트 7 〉	통과 (43.92ms, 37.8MB)
테스트 8 〉	통과 (65.49ms, 40MB)
테스트 9 〉	통과 (45.86ms, 39.5MB)
테스트 10 〉	통과 (57.46ms, 40MB)
테스트 11 〉	통과 (42.15ms, 44.1MB)
테스트 12 〉	통과 (67.81ms, 47.9MB)
테스트 13 〉	통과 (58.22ms, 45.3MB)
테스트 14 〉	통과 (50.98ms, 46.7MB)
테스트 15 〉	통과 (0.13ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(s) {
  let array = s
    .slice(2, -2)
    .split("},{")
    .map((el) => el.split(","))
    .map((el) => el.map((el1) => +el1))
    .sort((a, b) => a.length - b.length);

  let result = array[0];
  for (el of array) {
    for (let i = 0; i < el.length; i++) {
      if (!result.includes(el[i])) result.push(el[i]);
    }
  }
  return result;
}
