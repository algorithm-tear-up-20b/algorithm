// let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let input = 500;
let now = 1;
let numOfEnd = 666;

const isNumOfEnd = (num) => {
  if (String(num).includes("666")) {
    return true;
  }
  return false;
};

while (true) {
  if (isNumOfEnd(numOfEnd++)) {
    if (input === now) {
      console.log(numOfEnd - 1);
      break;
    } else {
      now++;
    }
  }
}

/*
메모리: 23264 KB
시간: 444 ms
*/
