const fs = require("fs");
const readFileSyncAddress = "/dev/stdin";

const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input);

//n이 500이라면
const solution = (n) => {
  let title = 666;
  let count = 0;
  while (true) {
    if (title.toString().includes("666")) {
      //666이 제목에 들어있으면 count 증가
      count++;
      if (n === count) {
        //count가 500이 되면 리턴
        return title;
      }
    }
    title++; //666부터 1씩 증가시키면서 666이 들었는지 모두 탐색
  }
};

//제출
const answer = solution(n);
console.log(answer);
