const [K, N] = [4, 11];
const lines = [802, 743, 457, 539];

const solution = (K, N, lines) => {
  lines.sort((a, b) => a - b);
  let left = 0;
  let right = lines[K - 1];
  let answer = Number.MIN_SAFE_INTEGER;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let lineNum = lines.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

    if (lineNum >= N) {
      if (mid > answer) answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
};

console.log(solution(K, N, lines));
