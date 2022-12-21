/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.20ms, 33.5MB)
테스트 2 〉	통과 (0.16ms, 33.6MB)
테스트 3 〉	통과 (0.21ms, 33.5MB)
테스트 4 〉	통과 (0.26ms, 33.6MB)
테스트 5 〉	통과 (0.32ms, 33.5MB)
테스트 6 〉	통과 (35.54ms, 44.5MB)
테스트 7 〉	통과 (24.29ms, 40.1MB)
테스트 8 〉	통과 (5.87ms, 36.5MB)
테스트 9 〉	통과 (24.36ms, 40.3MB)
테스트 10 〉	통과 (18.86ms, 41.5MB)
테스트 11 〉	통과 (239.16ms, 114MB)
테스트 12 〉	통과 (234.59ms, 112MB)
테스트 13 〉	통과 (258.83ms, 113MB)
테스트 14 〉	통과 (273.78ms, 110MB)
테스트 15 〉	통과 (240.73ms, 110MB)
테스트 16 〉	통과 (0.11ms, 33.5MB)
테스트 17 〉	통과 (0.08ms, 33.5MB)
테스트 18 〉	통과 (0.21ms, 33.6MB)
테스트 19 〉	통과 (0.19ms, 33.6MB)
테스트 20 〉	통과 (0.24ms, 33.5MB)
테스트 21 〉	통과 (0.08ms, 33.6MB)
테스트 22 〉	통과 (0.08ms, 33.5MB)
테스트 23 〉	통과 (0.08ms, 33.6MB)
테스트 24 〉	통과 (0.23ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(k, m, score) {
  const sorted = score.sort((a, b) => b - a);
  let container = [];
  let box = [];
  for (let i = 0; i < sorted.length; i++) {
    if (box.length < m) {
      box.push(sorted[i]);
      if (box.length === m) {
        container.push([...box]);
        box = [];
      }
    }
  }
  return container.reduce((pre, now) => pre + Math.min(...now) * m, 0);
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.27ms, 33.6MB)
테스트 2 〉	통과 (0.08ms, 33.5MB)
테스트 3 〉	통과 (0.20ms, 33.5MB)
테스트 4 〉	통과 (0.08ms, 33.5MB)
테스트 5 〉	통과 (0.09ms, 33.5MB)
테스트 6 〉	통과 (20.98ms, 42.7MB)
테스트 7 〉	통과 (21.52ms, 40.7MB)
테스트 8 〉	통과 (4.56ms, 36.5MB)
테스트 9 〉	통과 (22.14ms, 40.8MB)
테스트 10 〉	통과 (17.68ms, 42.2MB)
테스트 11 〉	통과 (283.70ms, 122MB)
테스트 12 〉	통과 (334.70ms, 121MB)
테스트 13 〉	통과 (312.09ms, 122MB)
테스트 14 〉	통과 (297.45ms, 125MB)
테스트 15 〉	통과 (252.58ms, 124MB)
테스트 16 〉	통과 (0.08ms, 33.5MB)
테스트 17 〉	통과 (0.08ms, 33.5MB)
테스트 18 〉	통과 (0.23ms, 33.6MB)
테스트 19 〉	통과 (0.26ms, 33.5MB)
테스트 20 〉	통과 (0.28ms, 33.5MB)
테스트 21 〉	통과 (0.11ms, 33.5MB)
테스트 22 〉	통과 (0.08ms, 33.6MB)
테스트 23 〉	통과 (0.08ms, 33.5MB)
테스트 24 〉	통과 (0.11ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// map을 이용한 풀이
// 효율이 크게 나아진 것 같지는 않다...
function solution(k, m, score) {
  let map = new Map();
  // false는 0번째 인덱스를 채우기 위한 허수
  const sorted = [false, ...score.sort((a, b) => b - a)];

  for (let i = m; i <= score.length; i += m) {
    const valueGot = map.get(sorted[i]);
    valueGot ? map.set(sorted[i], valueGot + 1) : map.set(sorted[i], 1);
  }

  let result = 0;
  const iterator = map.entries();
  let i = map.size;
  while (i > 0) {
    const item = iterator.next().value;
    result += item[0] * m * item[1];
    i--;
  }
  return result;
}
