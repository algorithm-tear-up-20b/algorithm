/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.4MB)
테스트 2 〉	통과 (0.09ms, 33.4MB)
테스트 3 〉	통과 (0.08ms, 33.4MB)
테스트 4 〉	통과 (0.11ms, 33.6MB)
테스트 5 〉	통과 (0.12ms, 33.5MB)
테스트 6 〉	통과 (0.13ms, 33.4MB)
테스트 7 〉	통과 (0.17ms, 33.4MB)
테스트 8 〉	통과 (0.17ms, 33.4MB)
테스트 9 〉	통과 (0.17ms, 33.5MB)
테스트 10 〉	통과 (0.18ms, 33.6MB)
테스트 11 〉	통과 (0.17ms, 33.5MB)
테스트 12 〉	통과 (0.29ms, 33.5MB)
테스트 13 〉	통과 (0.22ms, 33.5MB)
테스트 14 〉	통과 (0.25ms, 33.5MB)
테스트 15 〉	통과 (0.42ms, 33.6MB)
테스트 16 〉	통과 (0.29ms, 33.5MB)
테스트 17 〉	통과 (0.29ms, 33.4MB)
테스트 18 〉	통과 (0.28ms, 33.4MB)
테스트 19 〉	통과 (0.28ms, 33.5MB)
테스트 20 〉	통과 (0.53ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(survey, choices) {
  const points = [false, 3, 2, 1, 0, 1, 2, 3];
  let types = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  for (let i = 0; i < choices.length; i++) {
    const choice = choices[i] < 4 ? 0 : 1;
    types[survey[i][choice]] = types[survey[i][choice]] + points[choices[i]];
  }
  let type = "";
  types.R >= types.T ? (type += "R") : (type += "T");
  types.C >= types.F ? (type += "C") : (type += "F");
  types.J >= types.M ? (type += "J") : (type += "M");
  types.A >= types.N ? (type += "A") : (type += "N");

  return type;
}

//다른 사람의 풀이
function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}
