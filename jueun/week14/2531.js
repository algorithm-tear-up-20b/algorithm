// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["8 30 4 30", "7", "9", "7", "30", "2", "7", "9", "25"];
// const input = ["8 50 4 7", "2", "7", "9", "25", "7", "9", "7", "30"];

const [N, d, k, c] = input[0].split(" ").map(Number);
const sushies = input.slice(1).map(Number);

let lt = 0,
  rt = k;
const map = new Map();

for (let i = 0; i < k; i++) {
  let count = map.get(sushies[i]);
  if (count !== undefined) map.set(sushies[i], count + 1);
  else map.set(sushies[i], 1);
}
let max = 0;

while (lt < sushies.length) {
  let rCount = map.get(sushies[rt]);
  if (rCount !== undefined) map.set(sushies[rt], rCount + 1);
  else map.set(sushies[rt], 1);
  let lCount = map.get(sushies[lt]);
  if (lCount > 1) map.set(sushies[lt], lCount - 1);
  else if (lCount <= 1) map.delete(sushies[lt]);

  let size = map.size;
  if (!map.has(c)) size += 1;
  max = Math.max(max, size);

  lt++, rt++;
  if (rt === sushies.length) rt = 0;
}

console.log(max);
