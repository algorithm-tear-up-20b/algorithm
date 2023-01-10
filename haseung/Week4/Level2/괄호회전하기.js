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
    if (!stack.length) return true;
  };
  for (let i = 0; i < s.length; i++) {
    if (isValid(arr)) result++;
    arr.push(arr.shift());
  }
  return result;
}

/*정확성  테스트
정확성  테스트
테스트 1 〉	통과 (4.94ms, 37MB)
테스트 2 〉	통과 (3.73ms, 36.9MB)
테스트 3 〉	통과 (5.95ms, 36.7MB)
테스트 4 〉	통과 (5.10ms, 36.8MB)
테스트 5 〉	통과 (9.39ms, 37.3MB)
테스트 6 〉	통과 (5.77ms, 36.8MB)
테스트 7 〉	통과 (5.35ms, 36.9MB)
테스트 8 〉	통과 (6.66ms, 37.1MB)
테스트 9 〉	통과 (10.13ms, 37.4MB)
테스트 10 〉	통과 (23.17ms, 37.6MB)
테스트 11 〉	통과 (19.23ms, 37.8MB)
테스트 12 〉	통과 (0.09ms, 33.7MB)
테스트 13 〉	통과 (0.10ms, 33.5MB)
테스트 14 〉	통과 (0.10ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
