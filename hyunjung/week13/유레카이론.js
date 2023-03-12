const fs = require("fs");
const readFileSyncAddress = "/dev/stdin";

const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const n = input.map((el) => parseInt(el));
const [size, ...num] = n;

const solution = (num) => {
  //삼각수를 구하는 함수
  const getTriNum = (n) => {
    return (n * (n + 1)) / 2;
  };

  let T = [];
  for (let i = 1; i <= 1000; i++) {
    T.push(getTriNum(i));
  }

  let arr = new Array(num.length).fill(0);

  for (let n = 0; n < num.length; n++) {
    for (let i = 0; i < T.length; i++) {
      if (T[i] > num[n]) break;
      for (let j = 0; j < T.length; j++) {
        if (T[j] > num[n]) break;
        for (let k = 0; k < T.length; k++) {
          if (T[k] > num[n]) break;
          if (T[i] + T[j] + T[k] === num[n]) {
            arr[n] = 1;
            break;
          }
          if (T[i] + T[j] + T[k] > num[n]) continue;
        }
      }
    }
  }

  return arr.join("\n");
};

//제출
const answer = solution(num);
console.log(answer);
