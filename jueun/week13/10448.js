// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number);

let input = [3, 10, 20, 1000];

const triangulars = [1];
let plusNum = 2;

for (let i = 0; i < 44; i++) {
  triangulars.push(triangulars[i] + plusNum++);
}

const isTriangularNum = (num) => {
  for (let i1 = 0; i1 < triangulars.length; i1++) {
    for (let i2 = i1; i2 < triangulars.length; i2++) {
      for (let i3 = i2; i3 < triangulars.length; i3++) {
        if (triangulars[i1] + triangulars[i2] + triangulars[i3] === num) {
          return 1;
        }
      }
    }
  }

  return 0;
};

for (let i = 1; i < input.length; i++) {
  console.log(isTriangularNum(input[i]));
}
