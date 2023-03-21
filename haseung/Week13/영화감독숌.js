// let inputs = require("fs").readFileSync(0, "utf-8").toString().trim();
let inputs = 2;

let theNumberAtTheEnd = 665;

const theNumberEnd = (input, num = 665) => {
  while (input > 0) {
    num++;
    if (num.toString().includes("666")) input--;
  }
  return num;
};

console.log(theNumberEnd(inputs));
