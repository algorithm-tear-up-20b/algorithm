function solution(numbers, target) {
  //특정 숫자 몇 개를 negative가 되게(?) 바꿔야 함
  // 연산 결과가 target이 될 때까지 loop 돌기
  let count = 0;
  const dfs = (sum, index) => {
    if (index === numbers.length) {
      if (sum === target) count++;
      return;
    }
    dfs(sum + numbers[index], index + 1);
    dfs(sum - numbers[index], index + 1);
  };
  dfs(0, 0);
  return count;
}

// console.log(solution([4, 1, 2, 1], 4));

/*정확성  테스트
테스트 1 〉	통과 (13.22ms, 35.4MB)
테스트 2 〉	통과 (16.07ms, 35.5MB)
테스트 3 〉	통과 (0.19ms, 33.5MB)
테스트 4 〉	통과 (0.41ms, 33.4MB)
테스트 5 〉	통과 (1.82ms, 35.5MB)
테스트 6 〉	통과 (0.27ms, 33.5MB)
테스트 7 〉	통과 (0.31ms, 33.4MB)
테스트 8 〉	통과 (1.76ms, 35.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
