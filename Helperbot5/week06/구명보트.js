function solution(people, limit) {
  let answer = 0;
  let sortedPeople = people.sort((a, b) => b - a)[(80, 70, 50, 50)];
  for (let i = 0, j = people.length - 1; i <= j; i++) {
    if (sortedPeople[i] + sortedPeople[j] > limit) {
      answer++;
    } else {
      answer++;
      j--;
    }
  }
  return answer;
}
