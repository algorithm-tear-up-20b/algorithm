let fs = require("fs");

let N = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const series = [false];
const doom = "666";

let number = 666;
while (series.length <= N) {
  if (number.toString().indexOf(doom) >= 0) series.push(number);
  number++;
}

console.log(series.at(-1));
