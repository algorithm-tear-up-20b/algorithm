const N = 4;
const distance = [2, 3, 1];
const price = [5, 2, 4, 1];
price.pop();

const solution = (N, distance, price) => {
  let answer = 0;
  for (let i = 0; i < N; i++) {
    if (price[i] === Math.min(...price)) {
      answer += price[i] * distance.slice(i).reduce((acc, cur) => acc + cur, 0);
      break;
    } else {
      answer += price[i] * distance[i];
    }
  }
  return answer;
};

console.log(solution(N, distance, price));
