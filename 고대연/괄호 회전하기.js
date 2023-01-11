/*
정확성  테스트
테스트 1 〉	통과 (241.46ms, 37MB)
테스트 2 〉	통과 (104.58ms, 37MB)
테스트 3 〉	통과 (75.49ms, 37.1MB)
테스트 4 〉	통과 (53.36ms, 37MB)
테스트 5 〉	통과 (38.28ms, 37MB)
테스트 6 〉	통과 (92.16ms, 37MB)
테스트 7 〉	통과 (73.15ms, 37MB)
테스트 8 〉	통과 (61.59ms, 37MB)
테스트 9 〉	통과 (48.33ms, 37.1MB)
테스트 10 〉	통과 (29.12ms, 37MB)
테스트 11 〉	통과 (15.57ms, 36.8MB)
테스트 12 〉	통과 (0.11ms, 33.5MB)
테스트 13 〉	통과 (0.19ms, 33.6MB)
테스트 14 〉	통과 (0.29ms, 33.5MB)
*/
function solution(s) {
  let count = 0;
  const length = s.length;
  for (let x = 0; x < length; x++) {
    // count+=isRight(s)
    count += regex(s);
    s = leftRotation(s);
  }
  return count;
}

function isRight(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.at(-1) === "{" && s[i] === "}") stack.pop();
    else if (stack.at(-1) === "[" && s[i] === "]") stack.pop();
    else if (stack.at(-1) === "(" && s[i] === ")") stack.pop();
    else stack.push(s[i]);
  }

  return stack.length ? 0 : 1;
}

function leftRotation(s) {
  return s.substring(s.length - 1, s.length) + s.substring(0, s.length - 1);
}

function regex(s) {
  let regex = new RegExp(/(\(\)|\{\}|\[\])+/, "g");

  const length = Math.floor(s.length / 2);

  for (let i = 0; i < length; i++) {
    s = s.replace(regex, "");
    if (s.length === 0) return 1;
  }

  return 0;
}
