/*
[PGS] N개의 최소공배수 /LV.2/30분
풀이 시간 :30분
통과 여부 : O
*/

function solution(arr) {
  let answer = 0;
  const max = arr.pop();
  let tmp = max;
  let count = 1;

  while (!answer) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
      if (tmp % arr[i] !== 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      answer = tmp;
      break;
    }
    tmp = max * ++count;
  }
  return answer;
}
console.log(solution([2, 6, 8, 14]));

/*
여러개의 수 들이 주어졌을 때, 이들의 배수 중 공통이 되는 가장 작은 배수를 구해야함.

* 먼저 무식하게 푼다면 각 숫자를 계속 거듭하여 곱해나간 뒤에 공통이 되는 시점을 찾아서 그 수를 리턴.

* 최소공배수 -> 어떤 수에서 시작하더라도 곱하면 그 수가 나와야함.. 그러면 한 배열에서 가장 큰 수를 찾아서 해당 수를 곱하고 나머지 숫자들로 나누었을 때 나누어 떨어지는지 여부를 확인...?

1.배열의 max 값을 찾는다.
2.max를 제외한 모든 수로 나누어 떨어지는지 확인한다.
3.나누어 떨어지지 않으면 max를 곱하고, 나누어 떨어진다면 그 수를 리턴
*/

// reference
// 최대공약수를 가지고 푸는 방법인 것 같은데 잘 이해가 되지 않는다..!
function solution(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
