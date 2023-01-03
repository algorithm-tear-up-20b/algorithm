function solution(s) {
  let answer = [];
  const arr = [...s];
  for (let i = 0; i < arr.length; ++i) {
    if (i === 0) {
      answer[0] = -1;
    } else {
      let count = 1;

      for (let j = i - 1; j >= 0; --j) {
        if (arr[i] === arr[j]) {
          answer[i] = count;
          count = 1;
          break;
        } else {
          answer[i] = -1;
        }
        count++;
      }
    }
  }
  return answer;
}
