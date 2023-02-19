function solution(msg) {
  const answer = [];
  const dictionary = new Map();

  // 65 ~ 90 === A ~ Z
  for (let i = 65; i <= 90; i++) {
    dictionary.set(String.fromCodePoint(i), i - 64);
  }

  let newWordIdx = 27;
  let idx;
  let found = false;

  for (let i = 0; i < msg.length; i++) {
    for (let j = msg.length; j > 0; j--) {
      idx = dictionary.get(msg.slice(i, j));
      if (idx) {
        answer.push(idx);
        dictionary.set(msg.slice(i, j + 1), newWordIdx++);
        found = true;
        i = j - 1;
        break;
      }
    }
  }

  return answer;
}
