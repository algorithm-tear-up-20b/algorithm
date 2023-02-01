/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.4MB)
테스트 2 〉	통과 (9.92ms, 39.1MB)
테스트 3 〉	통과 (16.14ms, 41.8MB)
테스트 4 〉	통과 (16.59ms, 41.7MB)
테스트 5 〉	통과 (35.90ms, 46.8MB)
테스트 6 〉	통과 (43.03ms, 47.3MB)
테스트 7 〉	통과 (73.81ms, 58.1MB)
테스트 8 〉	통과 (87.75ms, 58.1MB)
테스트 9 〉	통과 (84.50ms, 58.9MB)
테스트 10 〉	통과 (84.75ms, 59.7MB)
테스트 11 〉	통과 (33.02ms, 47MB)
테스트 12 〉	통과 (30.79ms, 47.4MB)
테스트 13 〉	통과 (32.49ms, 47.5MB)
테스트 14 〉	통과 (52.69ms, 58.1MB)
테스트 15 〉	통과 (51.43ms, 58.1MB)
테스트 16 〉	통과 (57.34ms, 58.5MB)
테스트 17 〉	통과 (66.12ms, 58.8MB)
테스트 18 〉	통과 (72.05ms, 59MB)
테스트 19 〉	통과 (100.81ms, 59.4MB)
테스트 20 〉	통과 (78.01ms, 59.7MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// sliding window algorithm을 이용한 풀이
function solution(elements) {
  // 연속된 수열을 확인하기 위해 array 변수 선언
  let array = elements.concat(elements);
  // 길이가 1인 연속 부분 수열의 합인 elements를 먼저 set에 넣는다.
  let set = new Set(elements);
  // 길이가 2 이상인 연속 부분 수열의 합 구하기
  for (let i = 2; i <= elements.length; i++) {
    let sum;
    for (let j = i; j < elements.length + i; j++) {
      // elements의 0부터 j인덱스까지 합을 구함
      if (!sum) {
        sum = elements.slice(0, j).reduce((a, b) => a + b, 0);
        set.add(sum);
      }
      // 연속 부분 수열의 맨 앞 요소를 빼고 새로운 요소를 더하면서 연속적으로 합을 구한 뒤 set에 추가한다.
      sum = sum - elements[j - i] + array[j];
      set.add(sum);
    }
  }
  return set.size;
}
