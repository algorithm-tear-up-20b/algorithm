function solution(N, M, input) {
  let arr = input.sort();
  let start = 0,
    end = N - 1,
    count = 0;

  while (start < end) {
    if (arr[start] + arr[end] === M) {
      count++;
      start++;
      end--;
    } else if (arr[start] + arr[end] < M) start++;
    else if (arr[start] + arr[end] > M) end--;
  }

  return count;
}

const answer = solution(6, 9, [2, 7, 4, 1, 5, 3]);
console.log(answer);
