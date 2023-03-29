// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["7 5", "100", "400", "300", "100", "500", "101", "400"];

const [[N, M], moneys] = [
  input[0].split(" ").map(Number),
  input.slice(1).map(Number),
];

const solution = (n, m, moneys) => {
  let minMoney = moneys.reduce((prev, cur) => prev + cur);
  let low = Math.max(...moneys),
    high = minMoney;
  let mid = high;
  let count;

  while (low <= high) {
    count = getCount(n, mid, moneys);

    if (count > m) {
      low = mid + 1;
    } else {
      minMoney = mid;
      high = mid - 1;
    }
    mid = Math.floor((low + high) / 2);
  }

  return minMoney;
};

const getCount = (n, mid, moneys) => {
  let count = 0,
    remain = 0;

  for (let i = 0; i < n; i++) {
    if (remain < moneys[i]) {
      count++;
      remain = mid - moneys[i];
    } else remain -= moneys[i];
  }
  return count++;
};

console.log(solution(N, M, moneys));
