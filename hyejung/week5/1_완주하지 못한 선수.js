/*
[PGS]완주하지 못한 선수/LV.1/15분
풀이 시간 : 15분
통과 여부 : O
*/

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (completion[i] !== participant[i]) return participant[i];
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));

/*
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	통과 (0.32ms, 33.6MB)
테스트 4 〉	통과 (0.62ms, 33.8MB)
테스트 5 〉	통과 (0.69ms, 33.7MB)

효율성  테스트
테스트 1 〉	통과 (41.87ms, 47.5MB)
테스트 2 〉	통과 (74.66ms, 53MB)
테스트 3 〉	통과 (83.91ms, 54.8MB)
테스트 4 〉	통과 (94.42ms, 60MB)
테스트 5 〉	통과 (101.40ms, 56.9MB)
*/
