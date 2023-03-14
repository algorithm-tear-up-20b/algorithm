function solution(n, x, input) {
  let max = 0,
    count = 0,
    i = 0,
    j = x;

  while (j <= n) {
    let sum = input.slice(i, j).reduce((acc, cur) => acc + cur);

    if (sum === max) {
      count++;
    } else if (sum > max) {
      max = sum;
      count = 1;
    }
    i++;
    j++;
  }

  max === 0 ? console.log("SAD") : console.log(max + "\n" + count);
}

solution(5, 2, [1, 4, 2, 5, 1]);
// solution(7, 5, [1, 1, 1, 1, 1, 5, 1]);
// solution(5, 3, [0, 0, 0, 0, 0]);
