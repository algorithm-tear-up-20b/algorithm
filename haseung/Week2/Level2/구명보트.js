function solution(people, limit) {
  let answer = 0;
  const peopleArray = people.sort((a, b) => a - b);

  let start = 0;
  let end = peopleArray.length - 1;

  while (start <= end) {
    if (peopleArray[start] + peopleArray[end] <= limit) {
      start++;
      end--;
      answer++;
    } else {
      end--;
      answer++;
    }
  }
  return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (21.90ms, 35.4MB)
// 테스트 2 〉	통과 (1.23ms, 33.5MB)
// 테스트 3 〉	통과 (1.40ms, 33.5MB)
// 테스트 4 〉	통과 (1.13ms, 33.6MB)
// 테스트 5 〉	통과 (0.72ms, 33.5MB)
// 테스트 6 〉	통과 (0.48ms, 33.4MB)
// 테스트 7 〉	통과 (0.68ms, 33.5MB)
// 테스트 8 〉	통과 (0.17ms, 33.4MB)
// 테스트 9 〉	통과 (0.20ms, 33.5MB)
// 테스트 10 〉	통과 (1.07ms, 33.5MB)
// 테스트 11 〉	통과 (1.46ms, 33.5MB)
// 테스트 12 〉	통과 (0.90ms, 33.6MB)
// 테스트 13 〉	통과 (1.10ms, 33.6MB)
// 테스트 14 〉	통과 (1.29ms, 33.6MB)
// 테스트 15 〉	통과 (0.22ms, 33.6MB)

// 효율성  테스트
// 테스트 1 〉	통과 (13.35ms, 38.2MB)
// 테스트 2 〉	통과 (12.80ms, 38.4MB)
// 테스트 3 〉	통과 (13.18ms, 38.1MB)
// 테스트 4 〉	통과 (10.86ms, 38.4MB)
// 테스트 5 〉	통과 (10.79ms, 38MB)
// 채점 결과
// 정확성: 75.0
// 효율성: 25.0
// 합계: 100.0 / 100.0
