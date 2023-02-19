/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.14ms, 33.5MB)
테스트 2 〉	통과 (0.24ms, 33.6MB)
테스트 3 〉	통과 (2708.28ms, 125MB)
테스트 4 〉	통과 (0.32ms, 33.4MB)
테스트 5 〉	통과 (0.35ms, 33.5MB)
테스트 6 〉	통과 (1.87ms, 34.2MB)
테스트 7 〉	통과 (3.61ms, 34.7MB)
테스트 8 〉	통과 (5.34ms, 36.9MB)
테스트 9 〉	통과 (632.87ms, 81.5MB)
테스트 10 〉	통과 (66.92ms, 61.7MB)
테스트 11 〉	통과 (860.50ms, 99.9MB)
테스트 12 〉	통과 (2.23ms, 35.6MB)
테스트 13 〉	통과 (0.76ms, 33.6MB)
테스트 14 〉	통과 (1009.91ms, 74.8MB)
테스트 15 〉	통과 (105.54ms, 69.4MB)
테스트 16 〉	통과 (0.67ms, 33.6MB)
테스트 17 〉	통과 (0.74ms, 33.7MB)
테스트 18 〉	통과 (2.86ms, 35.7MB)
테스트 19 〉	통과 (3.66ms, 36MB)
테스트 20 〉	통과 (666.60ms, 73MB)
테스트 21 〉	통과 (1274.31ms, 92.9MB)
테스트 22 〉	통과 (0.13ms, 33.5MB)
테스트 23 〉	통과 (0.12ms, 33.5MB)
테스트 24 〉	통과 (0.12ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(id_list, report, k) {
  let reportMap = new Map();
  for (id of id_list) {
    reportMap.set(id, new Array());
  }
  report = [...new Set(report)];
  for (el of report) {
    const [reporter, reported] = el.split(" ");
    reportMap.get(reported).push(reporter);
  }
  let reporters = [];
  reportMap.forEach((value, key) => {
    if (value.length >= k) reporters = reporters.concat(reportMap.get(key));
  });
  return id_list.map((id) => reporters.filter((el) => el === id).length);
}

//다른 사람의 풀이
// Map을 두 개 사용함. 시간 복잡도가 훨씬 낮다.
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.12ms, 33.5MB)
테스트 2 〉	통과 (0.22ms, 33.6MB)
테스트 3 〉	통과 (193.09ms, 102MB)
테스트 4 〉	통과 (0.26ms, 33.5MB)
테스트 5 〉	통과 (0.26ms, 33.4MB)
테스트 6 〉	통과 (1.50ms, 34.1MB)
테스트 7 〉	통과 (2.36ms, 34.5MB)
테스트 8 〉	통과 (2.79ms, 34.6MB)
테스트 9 〉	통과 (104.41ms, 76.7MB)
테스트 10 〉	통과 (99.65ms, 75.5MB)
테스트 11 〉	통과 (189.30ms, 101MB)
테스트 12 〉	통과 (0.50ms, 33.6MB)
테스트 13 〉	통과 (0.48ms, 33.5MB)
테스트 14 〉	통과 (71.48ms, 65.9MB)
테스트 15 〉	통과 (110.57ms, 77.4MB)
테스트 16 〉	통과 (0.45ms, 33.5MB)
테스트 17 〉	통과 (0.49ms, 33.6MB)
테스트 18 〉	통과 (0.72ms, 33.6MB)
테스트 19 〉	통과 (1.17ms, 33.9MB)
테스트 20 〉	통과 (73.97ms, 65.9MB)
테스트 21 〉	통과 (128.42ms, 77MB)
테스트 22 〉	통과 (0.15ms, 33.6MB)
테스트 23 〉	통과 (0.12ms, 33.5MB)
테스트 24 〉	통과 (0.09ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
