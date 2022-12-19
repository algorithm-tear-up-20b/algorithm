/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (9.27ms, 37.9MB)
테스트 3 〉	통과 (19.33ms, 38.6MB)
테스트 4 〉	통과 (20.35ms, 38.9MB)
테스트 5 〉	통과 (39.54ms, 39MB)
테스트 6 〉	통과 (24.75ms, 38.8MB)
테스트 7 〉	통과 (19.41ms, 39MB)
테스트 8 〉	통과 (17.03ms, 38.9MB)
테스트 9 〉	통과 (0.05ms, 33.3MB)
테스트 10 〉	통과 (0.15ms, 33.4MB)
테스트 11 〉	통과 (0.06ms, 33.4MB)
테스트 12 〉	통과 (0.07ms, 33.4MB)
테스트 13 〉	통과 (0.05ms, 33.4MB)
효율성  테스트
테스트 1 〉	통과 (96.36ms, 60.4MB)
테스트 2 〉	통과 (59.93ms, 49.9MB)
테스트 3 〉	통과 (89.77ms, 56MB)
테스트 4 〉	통과 (127.02ms, 55.8MB)
테스트 5 〉	통과 (107.60ms, 55.7MB)
테스트 6 〉	통과 (80.18ms, 56.1MB)
테스트 7 〉	통과 (115.33ms, 56.1MB)
테스트 8 〉	통과 (83.78ms, 56.1MB)
채점 결과
정확성: 60.2
효율성: 39.8
합계: 100.0 / 100.0
*/

function solution(s) {
  let left = [];
  let right = s.split("");
  let rightIdx = 0;
  let sLength = s.length;

  for (let i = 0; i < sLength; i++) {
    if (left.at(-1) === right[rightIdx]) {
      left.pop();
    } else {
      left.push(right[rightIdx]);
    }
    rightIdx++;
  }

  if (left.length > 0) return 0;
  else return 1;
}
