function solution(survey, choices) {
  //비동의면 네오형(네오형이 아닐수도 있음)
  //동의면 어피치형(어피치형이 아닐수도 있음)
  //모르겠음이면 성격 유형, 점수 아무것도 없음

  //매우 동의/비동의 -> 3점
  //동의/비동의 -> 2점
  //약간 동의/비동의 -> 1점

  //입력값1 : 판단하는 지표를 담은 1차원 문자열 배열 survey
  //입력값2 : 선택한 선택지를 담은 1차원 정수 배열 choices

  //출력값 : 검사자의 성격 유형 검사 결과(지표 번호 순서대로 정렬)

  //survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나

  //survey[i]의 '첫 번째' 캐릭터는 i+1번 질문의 비동의 관련 선택지를 선택하면 받는 성격 유형
  //survey[i]의 '두 번째' 캐릭터는 i+1번 질문의 동의 관련 선택지를 선택하면 받는 성격 유형

  //'AN'.split(',').join(' ')[0] -> 'A'
  //choice[0]은 5니까 매우 동의가 1이라고 가정하면, 약간 동의가 5에 해당하기 때문에 네오형 1점을 얻음

  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  let answer = "";

  for (let i = 0; i < choices.length; i++) {
    const [left, right] = survey[i].split("");
    const result = Math.abs(choices[i] - 4);
    if (choices[i] < 4) types[left] += result;
    else if (choices[i] > 4) types[right] += result;
  }
  const keys = Object.keys(types);
  for (let i = 0; i < keys.length; i += 2) {
    const disAgreeChosenType = types[keys[i]];
    const agreeChosenType = types[keys[i + 1]];
    if (disAgreeChosenType >= agreeChosenType) answer += keys[i];
    else answer += keys[i + 1];
  }
  return answer;
}

// console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));

/*정확성  테스트
  테스트 1 〉	통과 (0.15ms, 33.5MB)
  테스트 2 〉	통과 (0.11ms, 33.4MB)
  테스트 3 〉	통과 (0.11ms, 33.6MB)
  테스트 4 〉	통과 (0.11ms, 33.6MB)
  테스트 5 〉	통과 (0.14ms, 33.6MB)
  테스트 6 〉	통과 (0.11ms, 33.5MB)
  테스트 7 〉	통과 (0.33ms, 33.4MB)
  테스트 8 〉	통과 (0.24ms, 33.4MB)
  테스트 9 〉	통과 (0.25ms, 33.5MB)
  테스트 10 〉	통과 (0.40ms, 33.6MB)
  테스트 11 〉	통과 (0.35ms, 33.6MB)
  테스트 12 〉	통과 (0.54ms, 33.7MB)
  테스트 13 〉	통과 (0.49ms, 33.7MB)
  테스트 14 〉	통과 (0.54ms, 33.7MB)
  테스트 15 〉	통과 (0.63ms, 33.8MB)
  테스트 16 〉	통과 (0.65ms, 33.7MB)
  테스트 17 〉	통과 (0.65ms, 33.8MB)
  테스트 18 〉	통과 (0.89ms, 33.7MB)
  테스트 19 〉	통과 (1.02ms, 33.8MB)
  테스트 20 〉	통과 (1.13ms, 33.7MB)
  채점 결과
  정확성: 100.0
  합계: 100.0 / 100.0*/

/*정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (12.85ms, 53.2MB)
테스트 4 〉	통과 (29.00ms, 73.3MB)
테스트 5 〉	통과 (24.65ms, 76.6MB)
테스트 6 〉	통과 (22.20ms, 53.9MB)
테스트 7 〉	통과 (23.34ms, 64.9MB)
테스트 8 〉	통과 (23.70ms, 54.2MB)
테스트 9 〉	통과 (12.30ms, 54.1MB)
테스트 10 〉	통과 (0.89ms, 34MB)
테스트 11 〉	통과 (9.68ms, 51MB)
테스트 12 〉	통과 (33.60ms, 90.7MB)
테스트 13 〉	통과 (0.04ms, 33.4MB)
테스트 14 〉	통과 (0.05ms, 33.4MB)
테스트 15 〉	통과 (0.05ms, 33.5MB)
테스트 16 〉	통과 (0.05ms, 33.6MB)
테스트 17 〉	통과 (0.05ms, 33.5MB)
테스트 18 〉	통과 (0.05ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
