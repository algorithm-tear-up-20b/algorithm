// let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let input = 216;
let sum,
  answer = 0;

for (let i = 1; i <= input; i++) {
  sum =
    i +
    i
      .toString()
      .split("")
      .reduce((acc, cur) => +acc + +cur, 0);
  if (sum === input) {
    answer = i;
    break;
  }
}

console.log(answer);

/*
메모리: 28032 KB
시간: 484 ms
*/
