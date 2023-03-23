// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim();

const input = "XXXXXX";
// const input = "XX.XX";

const solution = (str) => {
  let xcount = 0;
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") {
      if (xcount % 2 !== 0) return -1;
      if (xcount % 4 === 0) answer += "A".repeat(xcount);
      else {
        answer += "A".repeat(xcount - 2) + "BB";
      }
      answer += ".";
      xcount = 0;
    } else if (str[i] === "X") {
      xcount++;
    }
  }

  if (str.at(-1) === "X") {
    if (xcount % 2 !== 0) return -1;
    if (xcount % 4 === 0) answer += "A".repeat(xcount);
    else {
      answer += "A".repeat(xcount - 2) + "BB";
    }
  }

  return answer;
};

console.log(solution(input));
