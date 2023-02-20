/*
[PGS] 성격 유형 검사하기 /LV.1 / 60분
*/

/*
정확성  테스트
테스트 1 〉	통과 (0.17ms, 33.5MB)
테스트 2 〉	통과 (0.16ms, 33.4MB)
테스트 3 〉	통과 (0.17ms, 33.6MB)
테스트 4 〉	통과 (0.17ms, 33.5MB)
테스트 5 〉	통과 (0.27ms, 33.4MB)
테스트 6 〉	통과 (0.18ms, 33.4MB)
테스트 7 〉	통과 (0.54ms, 33.4MB)
테스트 8 〉	통과 (0.36ms, 33.6MB)
테스트 9 〉	통과 (0.58ms, 33.5MB)
테스트 10 〉	통과 (0.48ms, 33.7MB)
테스트 11 〉	통과 (0.49ms, 33.7MB)
테스트 12 〉	통과 (0.89ms, 33.7MB)
테스트 13 〉	통과 (0.85ms, 33.9MB)
테스트 14 〉	통과 (1.12ms, 33.9MB)
테스트 15 〉	통과 (1.19ms, 34MB)
테스트 16 〉	통과 (1.32ms, 34MB)
테스트 17 〉	통과 (1.36ms, 34MB)
테스트 18 〉	통과 (1.33ms, 34MB)
테스트 19 〉	통과 (2.07ms, 34MB)
테스트 20 〉	통과 (2.01ms, 34MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/

function solution(survey, choices) {
  let answer = '';
  const indicators = {
    1: {R: 0, T: 0},
    2: {C: 0, F: 0},
    3: {J: 0, M: 0},
    4: {A: 0, N: 0},
  };

  for (let i = 0; i < survey.length; i++) {
    const [lower, higher] = survey[i].split('');
    let n = 0;

    if (survey[i].match(/R/g)) n = 1;
    if (survey[i].match(/C/g)) n = 2;
    if (survey[i].match(/J/g)) n = 3;
    if (survey[i].match(/A/g)) n = 4;

    // lower +1
    if (choices[i] < 4) {
      indicators[n][lower] += Math.abs(choices[i] - 4);
    }
    // higher +1
    else if (choices[i] > 4) {
      indicators[n][higher] += Math.abs(choices[i] - 4);
    } else {
    }
  }

  for (let indicator of Object.values(indicators)) {
    const key = Object.keys(indicator);
    const [lower, higher] = key;
    if (indicator[lower] >= indicator[higher]) answer += lower;
    else answer += higher;
  }

  return answer;
}

// console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));

/*
[문제]
- 4개의 지표 (순서는 좌우 바뀔 수 있다)
1. R.T
2. C.F
3. J.M
4. A.N

- 검사지에 총 N개의 질문, 각 질문마다 7개의 선택지
- 좌측지표 +3 +2 +1 0 +1 +2 +3 우측지표

- survey 각 질문의 측정 지표
- choices 선택한 답변 (1~7 : 매우 비동의 ~ 매우 동의)
- 각 지표별 점수를 계산해서 성격 유형을 출력, 두 유형이 동일한 경우 사전순으로 빠른 것을 지표로 선택

[접근 1]
1. 각 지표별로 카운트를 할 수 있는 객체 생성
2. 주어진 배열을 돌면서 각 지표를 계산하며 값을 추가
- 각 점수가 3미만, 초과인지 여부 확인
- 인덱스에 해당하는 지표를 split 하여 3미만일 경우 0번째 값, 초과일 경우 1번째 값을 키로 하여 객체에 값을 합산
3. 각 객체를 돌며 어떤 키의 값이 더 큰지 확인
- {
    AN:{A:0,N:0} 이렇게 해야될듯?
}

* 1~4 그룹중 어디에 속하는 요소인지 파악하는 작업 필요

=> 왜 실패하지?
* 점수가 1점씩 오르는게 아니고 3~0~3 으로 추가됨
* -4를 뺀 절댓값을 누적합산해주었다.
=> 10, 14, 20 실패
*모르겠음은 3점이 아니고 4점이었다. 문제를 제대로 읽지 않은 실수.
*/

// 다른 풀이

function ref(survey, choices) {
  const MBTI = {};
  const types = ['RT', 'CF', 'JM', 'AN'];

  // forEach문을 활용해 각 지표와 점수를 계산하는 해시맵 생성
  types.forEach(type => type.split('').forEach(char => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    // 동의, 비동의 지표를
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join('');
}

console.log(ref(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
