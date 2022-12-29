/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.17ms, 33.6MB)
테스트 2 〉	통과 (0.10ms, 33.4MB)
테스트 3 〉	통과 (0.12ms, 33.3MB)
테스트 4 〉	통과 (0.12ms, 33.5MB)
테스트 5 〉	통과 (0.22ms, 33.6MB)
테스트 6 〉	통과 (0.10ms, 33.6MB)
테스트 7 〉	통과 (0.20ms, 33.5MB)
테스트 8 〉	통과 (0.21ms, 33.4MB)
테스트 9 〉	통과 (0.22ms, 33.4MB)
테스트 10 〉	통과 (0.29ms, 33.6MB)
테스트 11 〉	통과 (0.25ms, 33.5MB)
테스트 12 〉	통과 (0.97ms, 34MB)
테스트 13 〉	통과 (1.01ms, 34MB)
테스트 14 〉	통과 (0.77ms, 33.8MB)
테스트 15 〉	통과 (1.49ms, 34.2MB)
테스트 16 〉	통과 (1.31ms, 34.1MB)
테스트 17 〉	통과 (1.38ms, 34.2MB)
테스트 18 〉	통과 (1.40ms, 34.2MB)
테스트 19 〉	통과 (0.46ms, 33.6MB)
테스트 20 〉	통과 (0.47ms, 33.6MB)
테스트 21 〉	통과 (0.49ms, 33.6MB)
테스트 22 〉	통과 (0.47ms, 33.7MB)
테스트 23 〉	통과 (0.46ms, 33.6MB)
테스트 24 〉	통과 (0.52ms, 33.6MB)
테스트 25 〉	통과 (0.49ms, 33.7MB)
테스트 26 〉	통과 (0.09ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(k, score) {
  let hall = [];
  let announcement = [];

  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      hall.push(score[i]);
      hall = hall.sort((a, b) => b - a);
    } else if (hall[0] < score[i]) {
      hall.unshift(score[i]);
      hall = hall.slice(0, k);
    } else if (hall.at(-1) >= score[i]) {
      announcement.push(hall.at(-1));
      continue;
    } else {
      for (j = 0; j < k; j++) {
        if (hall[j] < score[i]) {
          hall.splice(j, 0, score[i]);
          hall = hall.slice(0, k);
          break;
        }
      }
    }
    announcement.push(hall.at(-1));
  }
  return announcement;
}
