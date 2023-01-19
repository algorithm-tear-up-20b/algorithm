function solution(arr) {
  let lcm = arr[0];

  for (let i = 1; i < arr.length; i++) {
    lcm = getLcm(lcm, arr[i]);
  }

  return lcm;
}

function getLcm(num1, num2) {
  const lcm = (num1 * num2) / getGcd(num1, num2);
  return lcm;
}

function getGcd(num1, num2) {
  let remain = 0;
  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  }
  while (num1 !== 0) {
    remain = num2 % num1;
    num2 = num1;
    num1 = remain;
  }
  return num2;
}
