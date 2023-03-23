// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// const input = ["5 1", "3", "1", "5", "3"];
const input = ["5 2", "3", "1", "5", "3"];

// const input = ["5 2", "2", "5", "1"];
// const input = ["9 1", "4", "5", "6", "1", "7"];

const [N, M] = input[0].split(" ").map(Number);
const J = +input[1];
const positions = input.slice(2).map(Number);

const solution = (n, m, positions) => {
  let nowStart = 1,
    nowEnd = m;
  let moves = 0;

  for (let i = 0; i < positions.length; i++) {
    if (positions[i] > nowEnd) {
      moves += positions[i] - nowEnd;
      nowEnd = positions[i];
      nowStart = nowEnd - m + 1;
    } else if (positions[i] < nowStart) {
      moves += nowStart - positions[i];
      nowStart = positions[i];
      nowEnd = nowStart + m - 1;
    }
  }

  return moves;
};

console.log(solution(N, M, positions));
