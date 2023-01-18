/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (5.12ms, 42.7MB)
테스트 2 〉	통과 (24.79ms, 52.5MB)
테스트 3 〉	통과 (32.76ms, 52.9MB)
테스트 4 〉	통과 (0.14ms, 33.5MB)
테스트 5 〉	통과 (0.14ms, 33.5MB)
테스트 6 〉	통과 (4.98ms, 42.8MB)
테스트 7 〉	통과 (5.53ms, 43.4MB)
테스트 8 〉	통과 (4.98ms, 43.9MB)
테스트 9 〉	통과 (5.15ms, 43.5MB)
테스트 10 〉	통과 (5.16ms, 43.8MB)
테스트 11 〉	통과 (5.05ms, 44.2MB)
테스트 12 〉	통과 (5.15ms, 46.5MB)
테스트 13 〉	통과 (6.16ms, 47.7MB)
테스트 14 〉	통과 (5.51ms, 43.2MB)
테스트 15 〉	통과 (5.55ms, 49.6MB)
테스트 16 〉	통과 (5.72ms, 49.5MB)
테스트 17 〉	통과 (5.92ms, 44.2MB)
테스트 18 〉	통과 (6.15ms, 49.3MB)
테스트 19 〉	통과 (5.80ms, 50.2MB)
테스트 20 〉	통과 (5.30ms, 43.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(n, left, right) {
  const array = Array(right - left + 1)
    .fill(0)
    .map((_, idx) => {
      const realIdx = idx + left;
      if (realIdx >= n * (n - 1)) return parseInt(realIdx / n) + 1;
      return Math.max(parseInt(realIdx / n), realIdx % n) + 1;
    });

  return array;
}

// 시간초과
function solution(n, left, right) {
  const lineIndex = [left, right].map((el) => Math.floor(el / n));
  const bothEndIndex = [left, right].map((el) => el % n);
  let result = [];
  for (let i = lineIndex[0]; i <= lineIndex[1]; i++) {
    if (i === n - 1) {
      result.push(...Array(bothEndIndex[1] + 1).fill(n));
      return result;
    }
    for (let j = 0; j < n; j++) {
      if (i === lineIndex[0] && j === 0) {
        j = bothEndIndex[0] - 1;
        continue;
      }
      if (i === lineIndex[1] && j > bothEndIndex[1]) return result;
      j <= i ? result.push(i + 1) : result.push(j + 1);
    }
  }
  return result;
}

//다른 사람의 풀이
function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}
