function solution(s) {
  /*
   정확성  테스트
  테스트 1 〉	통과 (0.05ms, 33.4MB)
  테스트 2 〉	통과 (8.49ms, 37.3MB)
  테스트 3 〉	통과 (6.11ms, 37.9MB)
  테스트 4 〉	통과 (6.07ms, 38.5MB)
  테스트 5 〉	통과 (6.14ms, 38.4MB)
  테스트 6 〉	통과 (6.07ms, 38.4MB)
  테스트 7 〉	통과 (6.18ms, 38.5MB)
  테스트 8 〉	통과 (15.26ms, 39.6MB)
  테스트 9 〉	통과 (0.05ms, 33.4MB)
  테스트 10 〉	통과 (0.14ms, 33.4MB)
  테스트 11 〉	통과 (0.05ms, 33.5MB)
  테스트 12 〉	통과 (0.05ms, 33.4MB)
  테스트 13 〉	통과 (0.05ms, 33.4MB)
  효율성  테스트
  테스트 1 〉	통과 (27.50ms, 51.8MB)
  테스트 2 〉	통과 (45.78ms, 38.7MB)
  테스트 3 〉	통과 (21.33ms, 42.9MB)
  테스트 4 〉	통과 (23.33ms, 43.9MB)
  테스트 5 〉	통과 (22.28ms, 43.1MB)
  테스트 6 〉	통과 (24.45ms, 43.8MB)
  테스트 7 〉	통과 (23.85ms, 43.9MB)
  테스트 8 〉	통과 (22.08ms, 45.8MB)
      */

  while (1) {
    let stack = [s[0]];

    for (let i = 1; i < s.length; i++) {
      if (stack[stack.length - 1] !== s[i]) stack.push(s[i]);
      else stack.pop();
    }

    stack = stack.join("");

    if (stack === "") return 1;
    if (s === stack) break;
    s = stack;
  }

  return 0;
}
