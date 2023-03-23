const [N, M] = [5, 1];
const J = 3;
const locations = [1, 3, 5];

const solution = (N, M, J, locations) => {
  let answer = 0;

  for (let i = 0; i < J - 1; i++) {
    let distance = Math.abs(locations[i] - locations[i + 1]);
    answer = answer + distance + 1 - M;
  }
  return answer;
};

console.log(solution(N, M, J, locations));
