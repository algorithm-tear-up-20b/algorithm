function solution(ingredient) {
  let stack = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      count++;
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
    }
  }
  return count;
}

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
