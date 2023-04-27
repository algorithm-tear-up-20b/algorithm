// 1904: 타일
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const memo = Array.from({ length: input }, () => 0);

memo[1] = 1;
memo[2] = 2;
memo[3] = 3;

for (let i = 4; i <= input; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
}

console.log(memo[input]);
