function solution(s) {
  //b를 x라고 가정
  //b가 나온 횟수와 b가 아닌 다른 글자들이 나온 횟수를 세보자
  //b가 나온 횟수와 다른 글자들이 처음으로 같아지는 순간 break
  //문자열 분리
  let count = 0;
  let stack = [];
  let [firstLetterCount, otherLetterCount] = [0, 0];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    // x가 나온 횟수와 x가 아닌 글자의 횟수를 세는 과정
    if (stack[0] === s[i]) firstLetterCount++;
    else otherLetterCount++;
    //firstLetterCount랑 otherLetterCount가 같아지면
    //count 증가
    //어떻게 분리시킬지 감이 안와서 아예 초기 상태로 만들어버리기
    if (firstLetterCount === otherLetterCount) {
      count++;
      stack = [];
      [firstLetterCount, otherLetterCount] = [0, 0];
    }
  }
  if (stack.length !== 0) count++;
  return count;
}

//20분

/*정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.6MB)
테스트 2 〉	통과 (1.31ms, 34.3MB)
테스트 3 〉	통과 (3.28ms, 34.6MB)
테스트 4 〉	통과 (0.09ms, 33.5MB)
테스트 5 〉	통과 (0.07ms, 33.5MB)
테스트 6 〉	통과 (0.09ms, 33.4MB)
테스트 7 〉	통과 (0.06ms, 33.5MB)
테스트 8 〉	통과 (0.07ms, 33.4MB)
테스트 9 〉	통과 (0.84ms, 34MB)
테스트 10 〉	통과 (1.83ms, 34.4MB)
테스트 11 〉	통과 (0.76ms, 33.8MB)
테스트 12 〉	통과 (2.13ms, 34.4MB)
테스트 13 〉	통과 (5.52ms, 37.8MB)
테스트 14 〉	통과 (5.15ms, 37.7MB)
테스트 15 〉	통과 (1.07ms, 33.9MB)
테스트 16 〉	통과 (7.88ms, 37.7MB)
테스트 17 〉	통과 (1.07ms, 34.3MB)
테스트 18 〉	통과 (1.93ms, 34.5MB)
테스트 19 〉	통과 (1.87ms, 34.3MB)
테스트 20 〉	통과 (6.32ms, 37.7MB)
테스트 21 〉	통과 (5.18ms, 37.7MB)
테스트 22 〉	통과 (1.33ms, 34.6MB)
테스트 23 〉	통과 (0.71ms, 33.9MB)
테스트 24 〉	통과 (1.69ms, 34.1MB)
테스트 25 〉	통과 (5.38ms, 37.7MB)
테스트 26 〉	통과 (5.34ms, 37.8MB)
테스트 27 〉	통과 (2.02ms, 34.4MB)
테스트 28 〉	통과 (1.17ms, 34.2MB)
테스트 29 〉	통과 (5.54ms, 37.7MB)
테스트 30 〉	통과 (1.55ms, 34.3MB)
테스트 31 〉	통과 (0.09ms, 33.4MB)
테스트 32 〉	통과 (0.10ms, 33.5MB)
테스트 33 〉	통과 (0.06ms, 33.5MB)
테스트 34 〉	통과 (0.06ms, 33.5MB)
테스트 35 〉	통과 (0.11ms, 33.3MB)
테스트 36 〉	통과 (0.07ms, 33.4MB)
테스트 37 〉	통과 (0.07ms, 33.4MB)
테스트 38 〉	통과 (0.12ms, 33.5MB)
테스트 39 〉	통과 (0.11ms, 33.5MB)
테스트 40 〉	통과 (0.23ms, 33.5MB)
테스트 41 〉	통과 (2.51ms, 34.6MB)
테스트 42 〉	통과 (2.60ms, 34.2MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
