// 10448번
let testCase = 3;
let input = [10, 20, 1000];

function eureka(n) {
  let triNum = new Array(45);

  for (let i = 0; i < 45; i++) {
    triNum[i] = (i * (i + 1)) / 2;
  }

  for (let a = 1; a < 45; a++) {
    for (let b = 1; b < 45; b++) {
      for (let c = 1; c < 45; c++) {
        const sum = triNum[a] + triNum[b] + triNum[c];
        if (sum === n) {
          return true;
        }
      }
    }
  }
  return false;
}

function solution(testCase) {
  for (let i = 0; i < testCase; i++) {
    eureka(input[i]) ? console.log(1) : console.log(0);
  }
}

solution(testCase);
