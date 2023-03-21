let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v)
  .sort((a, b) => a - b);

function findHobbits(allHobbits) {
  let total = allHobbits.reduce((pre, cur) => pre + cur);
  let hobbits;
  for (let i = 0; i < 9; i++) {
    const newTotal = total - allHobbits[i];
    const target = newTotal - 100;
    if (allHobbits.indexOf(target) >= 0) {
      hobbits = allHobbits.filter((el, idx) => el !== target && idx !== i);
      return hobbits;
    }
  }
}

console.log(findHobbits(input).join("\n"));
