let fs = require("fs");

let N = +fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function getDec(number) {
  return (
    number
      .toString()
      .split("")
      .map((e) => +e)
      .reduce((p, c) => p + c, 0) + number
  );
}

let result = 0;

for (let i = 1; i < N; i++) {
  if (getDec(i) === N) {
    result = i;
    break;
  }
}

console.log(result);

// console.log(getDec(21));
