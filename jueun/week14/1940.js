// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

let input = ["6", "9", "2 7 4 1 5 3"];

const [M, N] = [+input[0], +input[1]];
const materials = input[2].split(" ").map(Number);

const solution = (m, n, materials) => {
  let count = 0;
  for (let lt = 0, rt = 1; lt < m - 1; rt++) {
    if (rt === m) {
      lt++;
      rt = lt + 1;
    }
    if (materials[lt] + materials[rt] === n) count++;
  }

  return count;
};

console.log(solution(M, N, materials));
