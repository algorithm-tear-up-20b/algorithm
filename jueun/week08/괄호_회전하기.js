function solution(s) {
  let proper = 0;
  let rotatedS = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (isProper(rotatedS)) proper++;
    rotatedS = rotate(rotatedS);
  }

  return proper;
}

const rotate = (str) => {
  const first = str.shift();
  str.push(first);
  return str;
};

const isProper = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      if (stack.at(-1) === "(") stack.pop();
      else return false;
    } else if (str[i] === "}") {
      if (stack.at(-1) === "{") stack.pop();
      else return false;
    } else if (str[i] === "]") {
      if (stack.at(-1) === "[") stack.pop();
      else return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
};

/*
정확성  테스트
테스트 1 〉	통과 (10.34ms, 37.5MB)
테스트 2 〉	통과 (7.42ms, 37.3MB)
테스트 3 〉	통과 (7.53ms, 37.2MB)
테스트 4 〉	통과 (7.52ms, 37.3MB)
테스트 5 〉	통과 (15.52ms, 37.5MB)
테스트 6 〉	통과 (8.66ms, 37.2MB)
테스트 7 〉	통과 (6.70ms, 37.4MB)
테스트 8 〉	통과 (9.04ms, 37.5MB)
테스트 9 〉	통과 (12.60ms, 37.8MB)
테스트 10 〉	통과 (18.55ms, 38.5MB)
테스트 11 〉	통과 (21.87ms, 38.3MB)
테스트 12 〉	통과 (0.23ms, 33.5MB)
테스트 13 〉	통과 (0.13ms, 33.5MB)
테스트 14 〉	통과 (0.09ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
