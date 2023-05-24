// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")

// const input = ["4", "120 110 140 150", "485"];
const input = ["5", "70 80 30 40 100", "450"];

const [N, requests, M] = [
  +input[0],
  input[1].split(" ").map(Number),
  +input[2],
];

const solution = (requests, m) => {
  let mid = Math.max(...requests);
  let newMid;
  let high = mid,
    low = 0;
  let sum,
    maxSum = 0;

  while (true) {
    sum = requests.reduce((prev, cur) => {
      if (cur > mid) return prev + mid;
      else return prev + cur;
    }, 0);

    if (sum > m) {
      high = mid;
    } else if (sum < m) {
      low = mid;
      maxSum = Math.max(sum, maxSum);
    } else {
      break;
    }
    newMid = Math.floor((low + high) / 2);
    if (newMid === mid) break;
    else mid = newMid;
  }

  return mid;
};

console.log(solution(requests, M));
