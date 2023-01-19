function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return participant.slice(-1)[0];
}

/*
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.6MB)
테스트 3 〉	통과 (0.36ms, 33.5MB)
테스트 4 〉	통과 (0.82ms, 33.7MB)
테스트 5 〉	통과 (0.64ms, 33.7MB)
효율성  테스트
테스트 1 〉	통과 (42.11ms, 47MB)
테스트 2 〉	통과 (102.69ms, 52.6MB)
테스트 3 〉	통과 (123.03ms, 54.3MB)
테스트 4 〉	통과 (131.63ms, 58.5MB)
테스트 5 〉	통과 (92.30ms, 57MB)
채점 결과
정확성: 50.0
효율성: 50.0
합계: 100.0 / 100.0
*/
