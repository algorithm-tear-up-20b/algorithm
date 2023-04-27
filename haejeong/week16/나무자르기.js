const [N, M] = [4, 7];
const trees = [20, 15, 10, 17];

const solution = (N, M, trees) => {
  trees.sort((a, b) => a - b);
  let start = 0;
  let end = trees[N - 1];
  let answer = Number.MIN_SAFE_INTEGER;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    for (let el of trees) {
      if (el > mid) sum += el - mid;
    }

    if (sum >= M) {
      if (mid > answer) answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
};

console.log(solution(N, M, trees));
