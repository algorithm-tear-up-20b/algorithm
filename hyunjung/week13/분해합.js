const fs = require("fs");
const readFileSyncAddress = "/dev/stdin";

const input = fs.readFileSync(readFileSyncAddress).toString();

const n = parseInt(input);

const solution = (n) => {
  /*
    생성자의 범위를 제한하기 위한 자릿수 계산
    n이 3자리인 경우, 999인 경우 자릿수의 합의 최대값은 9 * 3 = 27
    분해합 = 생성자 + 자릿수의 합
    생성자 = 분해합 - 자릿수의 합
    따라서 생성자는 분해합(n) - 27부터 탐색
  */

  let digit = 0;

  const getDigit = (n) => {
    if (n / 10 <= 0) return digit;
    digit++;
    getDigit(n / 10);
  };

  getDigit(n);

  let answer = 0;

  for (let i = n - digit * 9; i < n; i++) {
    let sum = i; //생성자 후보
    const stringN = String(i);

    for (let j = 0; j < stringN.length; j++) {
      sum += parseInt(stringN[j]);
    }

    //생성자 후보 + 자릿수 합계가 분해합과 같은 경우
    if (sum === n) {
      answer = i;
      break;
    }
  }
  return answer;
};

//제출
const answer = solution(n);
console.log(answer);
