/*
테스트 1 〉	통과 (22.39ms, 57.6MB)
테스트 2 〉	통과 (26.96ms, 59.6MB)
테스트 3 〉	통과 (30.97ms, 64.5MB)
테스트 4 〉	통과 (48.50ms, 74.8MB)
테스트 5 〉	통과 (54.46ms, 75.1MB)
*/

function solution(participant, completion) {
  let obj = {};
  for (let i = 0; i < participant.length; i++) {
    if (obj[participant[i]]) obj[participant[i]] += 1;
    else obj[participant[i]] = 1;
  }

  for (let i = 0; i < completion.length; i++) {
    if (obj[completion[i]] === 1) delete obj[completion[i]];
    else obj[completion[i]] -= 1;
  }
  return Object.keys(obj)[0];
}
