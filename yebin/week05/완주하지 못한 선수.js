/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33MB)
테스트 3 〉	통과 (0.30ms, 33.2MB)
테스트 4 〉	통과 (0.62ms, 33.6MB)
테스트 5 〉	통과 (0.58ms, 33.7MB)
효율성  테스트
테스트 1 〉	통과 (41.95ms, 46.8MB)
테스트 2 〉	통과 (68.91ms, 53.4MB)
테스트 3 〉	통과 (130.50ms, 56.8MB)
테스트 4 〉	통과 (105.36ms, 60.1MB)
테스트 5 〉	통과 (92.24ms, 57.1MB)
채점 결과
정확성: 50.0
효율성: 50.0
합계: 100.0 / 100.0
 */

function solution(participant, completion) {
  let partiArr = participant.sort();
  let compArr = completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (partiArr[i] !== compArr[i]) {
      return partiArr[i];
    }
  }
}
