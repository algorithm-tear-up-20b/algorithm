/*
정확성  테스트
테스트 1 〉	통과 (0.09ms, 33MB)
테스트 2 〉	통과 (0.07ms, 32.8MB)
테스트 3 〉	통과 (0.08ms, 33.1MB)
테스트 4 〉	통과 (0.08ms, 32.8MB)
테스트 5 〉	통과 (0.18ms, 33.3MB)
테스트 6 〉	통과 (0.08ms, 33.3MB)
테스트 7 〉	통과 (0.17ms, 33.3MB)
테스트 8 〉	통과 (0.17ms, 33.4MB)
테스트 9 〉	통과 (0.20ms, 33.4MB)
테스트 10 〉	통과 (0.22ms, 33.4MB)
테스트 11 〉	통과 (0.22ms, 33.3MB)
테스트 12 〉	통과 (1.05ms, 33.9MB)
테스트 13 〉	통과 (1.09ms, 33.9MB)
테스트 14 〉	통과 (0.77ms, 33.7MB)
테스트 15 〉	통과 (1.37ms, 34.1MB)
테스트 16 〉	통과 (1.51ms, 34.1MB)
테스트 17 〉	통과 (1.54ms, 34MB)
테스트 18 〉	통과 (1.52ms, 34.1MB)
테스트 19 〉	통과 (0.30ms, 33.6MB)
테스트 20 〉	통과 (0.29ms, 33.6MB)
테스트 21 〉	통과 (0.32ms, 33.6MB)
테스트 22 〉	통과 (0.34ms, 33.6MB)
테스트 23 〉	통과 (0.32ms, 33.7MB)
테스트 24 〉	통과 (0.35ms, 33.6MB)
테스트 25 〉	통과 (0.36ms, 33.5MB)
테스트 26 〉	통과 (0.07ms, 33.5MB)

10분
*/

function solution(k, score) {
  let fame = [];
  let arr = [];
  for (let i = 0; i < score.length; i++) {
    if (k > fame.length) {
      fame.push(score[i]);
      fame.sort((a, b) => b - a);
    } else if (score[i] > fame[fame.length - 1]) {
      fame.pop();
      fame.push(score[i]);
      fame.sort((a, b) => b - a);
    }

    arr.push(fame[fame.length - 1]);
  }
  return arr;
}
