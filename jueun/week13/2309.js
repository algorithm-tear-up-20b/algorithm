// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let input = [20, 7, 23, 19, 10, 15, 25, 8, 13];

// 9명 중 2명을 고르는 것과 같다
// 2명 빼고 모두 더한 값이 100일 경우 찾기

// 투포인터
// 0 1, 0 2, 0 3, 0 4, ..., 0 8, 1 2, ..., 7 6, 7 8

const totalSum = input.reduce((acc, cur) => acc + cur, 0);
const needToSubtract = totalSum - 100;

let first = 0,
  second = 1,
  nowSum;

for (second; second < 9; second++) {
  if (input[first] + input[second] === needToSubtract) {
    break;
  }
  if (second === 8) second = first++ + 1;
}

const answer = input
  .filter((_, idx) => idx !== first && idx !== second)
  .sort((a, b) => a - b);

console.log(answer.join("\n"));

/*
메모리: 9320 KB
시간: 120 ms
*/
