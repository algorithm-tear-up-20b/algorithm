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
