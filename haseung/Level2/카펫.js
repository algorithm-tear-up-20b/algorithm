function solution(brown, yellow) {
  let answer = []; // 리턴값을 위해 빈 배열 할당
  let sum = brown + yellow; // 전체 카펫 타일 수

  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      let width = sum / height; // 가로 길이
      if ((height - 2) * (width - 2) === yellow) return [width, height];
    }
  }
  return answer; // 해당 경우가 존재하지 않으면 빈 배열 리턴
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 33.6MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.16ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.6MB)
// 테스트 6 〉	통과 (0.14ms, 33.4MB)
// 테스트 7 〉	통과 (0.13ms, 33.4MB)
// 테스트 8 〉	통과 (0.13ms, 33.5MB)
// 테스트 9 〉	통과 (0.21ms, 33.5MB)
// 테스트 10 〉	통과 (0.14ms, 33.4MB)
// 테스트 11 〉	통과 (0.04ms, 33.5MB)
// 테스트 12 〉	통과 (0.04ms, 33.4MB)
// 테스트 13 〉	통과 (0.06ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
