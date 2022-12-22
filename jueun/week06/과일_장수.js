function solution(k, m, score) {
  const sizeOfBox = parseInt(score.length / m);
  const sortedScore = score.slice().sort((a, b) => b - a);
  let price = 0;

  for (let i = m - 1; i < sizeOfBox * m; i += m) {
    price += sortedScore[i] * m;
  }

  return price;
}

let k = 4,
  m = 3,
  score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

console.log(solution(k, m, score));
