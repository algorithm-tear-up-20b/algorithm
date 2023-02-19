/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (12.84ms, 35.6MB)
테스트 2 〉	통과 (13.36ms, 35.6MB)
테스트 3 〉	통과 (0.19ms, 33.6MB)
테스트 4 〉	통과 (0.41ms, 33.5MB)
테스트 5 〉	통과 (2.03ms, 35.6MB)
테스트 6 〉	통과 (0.44ms, 33.6MB)
테스트 7 〉	통과 (0.19ms, 33.6MB)
테스트 8 〉	통과 (1.07ms, 35.5MB)
채점 결과
정확성: 100.0
 */

function solution(numbers, target) {
  let answer = 0;
  function dfs(level, sum) {
    if (level === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(level + 1, sum + numbers[level]);
    dfs(level + 1, sum - numbers[level]);
  }
  dfs(0, 0);
  return answer;
}
