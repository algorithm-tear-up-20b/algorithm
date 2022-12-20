/*
[PGS] 짝지어 제거하기 /LV.2/30분
풀이 시간 : 30분
통과 여부 : O
*/
function solution(str) {
  const stack = [str[0]];

  for (let i = 1; i < str.length; i++) {
    if (stack[stack.length - 1] === str[i]) {
      stack.pop();
    } else stack.push(str[i]);
  }
  return stack.length ? 0 : 1;
}

console.log(solution('cdcd'));

/*
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (8.21ms, 37.5MB)
테스트 3 〉	통과 (5.86ms, 38MB)
테스트 4 〉	통과 (6.17ms, 38.5MB)
테스트 5 〉	통과 (6.74ms, 38.5MB)
테스트 6 〉	통과 (6.11ms, 38.7MB)
테스트 7 〉	통과 (9.73ms, 38.5MB)
테스트 8 〉	통과 (7.83ms, 38.5MB)
테스트 9 〉	통과 (0.04ms, 33.4MB)
테스트 10 〉	통과 (0.13ms, 33.5MB)
테스트 11 〉	통과 (0.04ms, 33.6MB)
테스트 12 〉	통과 (0.04ms, 33.6MB)
테스트 13 〉	통과 (0.07ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (27.12ms, 52MB)
테스트 2 〉	통과 (48.33ms, 38.7MB)
테스트 3 〉	통과 (21.23ms, 43.1MB)
테스트 4 〉	통과 (24.41ms, 44.1MB)
테스트 5 〉	통과 (23.38ms, 43MB)
테스트 6 〉	통과 (22.00ms, 44.1MB)
테스트 7 〉	통과 (24.02ms, 43.8MB)
테스트 8 〉	통과 (25.07ms, 45.9MB)
*/
