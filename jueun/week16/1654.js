// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["4 11", "802", "743", "457", "539"];
// const input = ["1 1", "5"];

const [[K, N], lanLines] = [
  input[0].split(" ").map(BigInt),
  input.slice(1).map(BigInt),
];

const solution = (lanLines, n) => {
  let mid = bigIntMax(...lanLines);
  let low = 0n,
    high = mid;
  let newMid;
  let maxLength = 0n;
  let nowCount;

  while (true) {
    nowCount = getNowCount(lanLines, mid);

    if (nowCount < n) {
      high = mid;
    } else if (nowCount >= n) {
      low = mid;
      maxLength = bigIntMax(maxLength, mid);
    }

    newMid = BigInt(BigInt(low) + BigInt(high)) / 2n;

    if (newMid === mid || newMid === low || newMid === high) break;
    mid = newMid;
  }

  return maxLength;
};

const bigIntMin = (...args) =>
  args.reduce((prev, cur) => (cur < prev ? cur : prev));

const bigIntMax = (...args) =>
  args.reduce((prev, cur) => (cur > prev ? cur : prev));

const getNowCount = (lanLines, mid) =>
  lanLines.reduce((prev, cur) => prev + cur / mid, 0n);

console.log(String(solution(lanLines, N)));
