function solution(s) {
  const pair = { "}": "{", "]": "[", ")": "(" };

  const arr = s.split("");
  let result = 0;

  const isValid = (arr) => {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (pair[element] === undefined) stack.push(element);
      else {
        if (stack[stack.length - 1] !== pair[element]) return false;
        stack.pop();
      }
    }
    if (stack.length) return false;
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    if (isValid(arr)) result++;
    arr.push(arr.shift());
  }
  return result;
}

/*정확성  테스트
테스트 1 〉	통과 (4.86ms, 37MB)
테스트 2 〉	통과 (3.45ms, 36.9MB)
테스트 3 〉	통과 (4.25ms, 36.7MB)
테스트 4 〉	통과 (4.18ms, 36.8MB)
테스트 5 〉	통과 (9.28ms, 37.1MB)
테스트 6 〉	통과 (4.59ms, 36.7MB)
테스트 7 〉	통과 (7.25ms, 36.8MB)
테스트 8 〉	통과 (7.66ms, 36.9MB)
테스트 9 〉	통과 (13.50ms, 37.3MB)
테스트 10 〉	통과 (28.37ms, 37.6MB)
테스트 11 〉	통과 (30.39ms, 37.7MB)
테스트 12 〉	통과 (0.10ms, 33.4MB)
테스트 13 〉	통과 (0.10ms, 33.4MB)
테스트 14 〉	통과 (0.09ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/