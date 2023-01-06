/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (5.39ms, 34.7MB)
테스트 2 〉	통과 (0.49ms, 33.5MB)
테스트 3 〉	통과 (2.68ms, 34.7MB)
테스트 4 〉	통과 (1.09ms, 34.1MB)
테스트 5 〉	통과 (0.94ms, 33.9MB)
테스트 6 〉	통과 (0.54ms, 33.6MB)
테스트 7 〉	통과 (0.50ms, 33.6MB)
테스트 8 〉	통과 (0.53ms, 33.6MB)
테스트 9 〉	통과 (0.88ms, 33.8MB)
테스트 10 〉	통과 (0.89ms, 33.8MB)
테스트 11 〉	통과 (0.58ms, 33.7MB)
테스트 12 〉	통과 (0.08ms, 33.4MB)
테스트 13 〉	통과 (0.09ms, 33.5MB)
테스트 14 〉	통과 (0.09ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

const OPEN = ["[", "{", "("];
const CLOSE = ["]", "}", ")"];

function checkS(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (OPEN.includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (OPEN.indexOf(stack.at(-1)) === CLOSE.indexOf(s[i])) stack.pop();
      else return false;
    }
  }
  return stack.length === 0 ? true : false;
}

function solution(s) {
  let answer = 0,
    nowString = s;
  while (!checkS(nowString)) {
    let temp = nowString.split("");
    temp.push(temp.shift());
    nowString = temp.join("");
    if (nowString === s) return 0;
  }
  let stack = [];
  for (let i = 0; i < nowString.length; i++) {
    if (OPEN.includes(nowString[i])) stack.push(nowString[i]);
    else {
      stack.pop();
      if (stack.length === 0) answer++;
    }
  }
  return answer;
}
