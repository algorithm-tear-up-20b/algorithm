// const input = Number(require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim());

const input = 13;
// const input = 14;

const solution = (money) => {
  let fives = Math.floor(money / 5);
  let twos = Math.floor((money - fives * 5) / 2);

  while (true) {
    if (fives < 0) break;
    if (fives * 5 + twos * 2 === money) return twos + fives;
    fives--;
    twos = Math.floor((money - fives * 5) / 2);
  }

  return -1;
};

console.log(solution(input));
