/*
정확성  테스트
테스트 1 〉	통과 (0.15ms, 33.4MB)
테스트 2 〉	통과 (0.10ms, 33.5MB)
테스트 3 〉	통과 (0.11ms, 33.4MB)
테스트 4 〉	통과 (0.20ms, 33.5MB)
테스트 5 〉	통과 (0.10ms, 33.5MB)
테스트 6 〉	통과 (0.10ms, 33.4MB)
테스트 7 〉	통과 (0.29ms, 33.5MB)
테스트 8 〉	통과 (0.22ms, 33.6MB)
테스트 9 〉	통과 (0.22ms, 33.5MB)
테스트 10 〉	통과 (0.23ms, 33.5MB)
테스트 11 〉	통과 (0.23ms, 33.6MB)
테스트 12 〉	통과 (0.29ms, 33.5MB)
테스트 13 〉	통과 (0.35ms, 33.5MB)
테스트 14 〉	통과 (0.44ms, 33.4MB)
테스트 15 〉	통과 (0.49ms, 33.5MB)
테스트 16 〉	통과 (0.51ms, 33.6MB)
테스트 17 〉	통과 (0.52ms, 33.4MB)
테스트 18 〉	통과 (0.51ms, 33.4MB)
테스트 19 〉	통과 (0.51ms, 33.5MB)
테스트 20 〉	통과 (0.51ms, 33.5MB)
15분
 */
function solution(survey, choices) {
  const personality = {};

  for (let i = 0; i < survey.length; i++) {
    for (let j = 0; j < survey[i].length; j++) {
      personality[survey[i][j]] = personality[survey[i][j]] || 0;
    }

    if (choices[i] < 4) {
      personality[survey[i][0]] += 4 - choices[i];
    } else if (choices[i] > 4) {
      personality[survey[i][1]] += choices[i] - 4;
    }
  }

  let mbti = "";
  mbti = mbti + de(personality, "R", "T");
  mbti = mbti + de(personality, "C", "F");
  mbti = mbti + de(personality, "J", "M");
  mbti = mbti + de(personality, "A", "N");

  return mbti;
}

function de(personality, l, r) {
  if (personality[l] > personality[r]) return l;
  else if (personality[l] < personality[r]) return r;
  else return l;
}
