const solution = (N, K, arr) => {
  let sum = arr.slice(0, K).reduce((acc, cur) => acc + cur);
  let max = sum;

  for (let i = 0; i < N - K; i++) {
    sum = sum - arr[i] + arr[i + K];
    max = Math.max(max, sum);
  }

  return max;
};

const answer = solution(10, 2, [3, -2, -4, -9, 0, 3, 7, 13, 8, -3]);
console.log(answer);
