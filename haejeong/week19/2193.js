// 2193: 이친수
const input = require("fs").readFileSync("/dev/stdin").toString();
const n = Number(input);
const memo = new Array(n + 1);

memo[1] = 1;
memo[2] = 1;

for (let i = 3; i < memo.length; i++) {
  memo[i] = BigInt(memo[i - 1]) + BigInt(memo[i - 2]);
}

console.log(memo[input].toString());
