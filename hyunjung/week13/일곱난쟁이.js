const fs = require("fs");
const readFileSyncAddress = "/dev/stdin";
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const n = input.map((el) => parseInt(el));

const solution = (n) => {
  //ex.151-100=51 (가짜 난쟁이 둘을 합친 숫자)
  let fake = n.reduce((acc, cur) => acc + cur) - 100;
  let answer = [];

  //  1 2 3 4 5 6 7 8  (0번째 인덱스 ~ 7번째 인덱스 순회)
  for (let i = 0; i < n.length - 1; i++) {
    // 2 3 4 5 6 7 8 9 (1번째 인덱스 ~ 8번째 인덱스 순회 : 8번째 인덱스가 9번째 난쟁이)
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] + n[j] === fake) {
        answer = n.filter((n, idx) => idx !== i && idx !== j);
        break;
      }
    }
  }

  return answer.sort((a, b) => a - b).join("\n");
};

//제출
const answer = solution(n);
console.log(answer);
