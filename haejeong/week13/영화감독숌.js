// 1436번
const input = 17;

function solution(input) {
  let num = 665;

  while (input > 0) {
    num++;
    if (num.toString().includes("666")) {
      input--;
    }
  }
  console.log(num);
}

solution(input);
