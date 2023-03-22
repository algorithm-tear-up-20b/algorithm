const N = 13;

const solution = (N) => {
  if (N === 1 || N === 3) return -1;

  let count = Math.floor(N / 5);
  N = N % 5;

  if (N % 2 === 1) {
    // 나머지가 홀수일 경우 5를 더하면 짝수가 됨
    count--;
    N += 5;
  }
  return count + N / 2;
};

console.log(solution(Number(N)));
