// 2512번 문제
const arr = [70, 80, 30, 40, 100];
const budget = 450;

const solution = (arr, budget) => {
  arr.sort((a, b) => a - b);
  let min = 1;
  let max = arr[arr.length - 1];

  while (min <= max) {
    let mid = parseInt((min + max) / 2);
    let sum = arr.reduce((acc, cur) => acc + (cur <= mid ? cur : mid), 0);
    if (sum <= budget) min = mid + 1;
    else max = mid - 1;
  }

  return max;
};

console.log(solution(arr, budget));
