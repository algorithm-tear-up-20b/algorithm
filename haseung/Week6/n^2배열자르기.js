function solution(n, left, right) {
  // 1. n행 n열 비어있는 2차원 배열 생성
  // 2. i=1부터 n까지 루프 돌기
  // 2-1. 1행 1열부터 i행 i열까지 영역 내 모든 빈 칸은 숫자 i로 채우기
  // 3. 1,...n행을 잘라서 모두 이어붙인 새로운 1차원 배열 생성
  // 4. 생성된 새로운 1차원 배열을 arr라고 할 때
  // arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지우기
  const result = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n); //y
    const col = i % n; //x
    result.push(Math.max(row, col) + 1);
  }
  return result;
}

//row col 0 2 result [3]
//row col 1 0 result [3,2]
//row col 1 1 result [3,2,2]
//row col 1 2 result [3,2,2,3]

/* 정확성  테스트
정확성  테스트
테스트 1 〉	통과 (4.71ms, 43.6MB)
테스트 2 〉	통과 (4.92ms, 49.5MB)
테스트 3 〉	통과 (4.89ms, 49.7MB)
테스트 4 〉	통과 (0.13ms, 33.5MB)
테스트 5 〉	통과 (0.12ms, 33.5MB)
테스트 6 〉	통과 (4.91ms, 43.7MB)
테스트 7 〉	통과 (4.98ms, 43.7MB)
테스트 8 〉	통과 (4.89ms, 43.4MB)
테스트 9 〉	통과 (4.85ms, 44.3MB)
테스트 10 〉	통과 (4.88ms, 44.4MB)
테스트 11 〉	통과 (6.51ms, 44.1MB)
테스트 12 〉	통과 (5.21ms, 47.1MB)
테스트 13 〉	통과 (5.55ms, 47.6MB)
테스트 14 〉	통과 (5.17ms, 44.4MB)
테스트 15 〉	통과 (5.11ms, 49.6MB)
테스트 16 〉	통과 (5.07ms, 50MB)
테스트 17 〉	통과 (6.94ms, 44.6MB)
테스트 18 〉	통과 (5.25ms, 49.6MB)
테스트 19 〉	통과 (5.79ms, 49.8MB)
테스트 20 〉	통과 (5.03ms, 43.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0 */
