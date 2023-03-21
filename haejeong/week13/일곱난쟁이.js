// 2309번
let input = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(input) {
  let answer;
  input.sort((a, b) => a - b);

  const total = input.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (total - input[i] - input[j] === 100) {
        answer = input.filter((el) => el !== input[i] && el !== input[j]);
        break;
      }
    }
    if (answer) {
      break;
    }
  }

  for (let i = 0; i < 7; i++) {
    console.log(answer[i]);
  }
}

solution(input);
