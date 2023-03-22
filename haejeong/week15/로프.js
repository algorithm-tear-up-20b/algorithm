const N = 2;
const arr = [10, 15];

const solution = (N, arr) => {
  arr.sort((a, b) => a - b);
  let candidates = new Array(N).fill(0);

  for (let i = 0; i < arr.length; i++) {
    candidates[i] = arr[i] * N;
    N--;
  }

  return Math.max(...candidates);
};

console.log(solution(N, arr));
