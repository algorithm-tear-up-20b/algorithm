function solution(arr) {
  let answer = 0;

  const gcd = (first, second) => {
    if (second === 0) return first;
    return gcd(second, first % second);
  };

  const lcm = (first, second) => (first * second) / gcd(first, second);
  answer = arr.reduce((acc, cur) => lcm(acc, cur));
  return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.3MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.13ms, 33.4MB)
