const solution = (N, K, arr) => {
  let elements = {};
  let maxLen = 1,
    start = 0,
    end = 0;

  while (start <= end && end < N) {
    while (elements[arr[end]] === K) {
      elements[arr[start]]--;
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
    elements[arr[end]] = (elements[arr[end]] ?? 0) + 1;
    end++;
  }

  return maxLen;
};

const answer = solution(9, 2, [3, 2, 5, 5, 6, 4, 4, 5, 7]);
console.log(answer);
