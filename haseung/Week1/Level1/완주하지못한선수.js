function solution(participants, completion) {
  //완주하지 못한 선수의 이름을 return
  // completion,participant 배열 원소를 비교해서 겹치는 부분을 제외한 원소만 리턴?
  // 동명이인일 경우에는 겹치는 부분 하나만 제외하고 리턴

  //participants와 completion index 비교를 위해 정렬 실시
  participants.sort();
  completion.sort();

  const isNotEqual = (participants, completion, i) => {
    return participants[i] !== completion[i];
  };

  const ComparePlayer = (participants, completion) => {
    for (let i = 0; i < participants.length; i++) {
      if (isNotEqual(participants, completion, i)) return participants[i];
    }
  };

  return ComparePlayer(participants, completion);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.09ms, 33.5MB)
// 테스트 3 〉	통과 (0.40ms, 33.5MB)
// 테스트 4 〉	통과 (0.81ms, 33.7MB)
// 테스트 5 〉	통과 (0.69ms, 33.7MB)

// 효율성  테스트
// 테스트 1 〉	통과 (45.87ms, 47.2MB)
// 테스트 2 〉	통과 (74.46ms, 51.9MB)
// 테스트 3 〉	통과 (93.25ms, 55.6MB)
// 테스트 4 〉	통과 (94.48ms, 56.9MB)
// 테스트 5 〉	통과 (103.20ms, 58.2MB)

// 채점 결과
// 정확성: 50.0
// 효율성: 50.0
// 합계: 100.0 / 100.0
