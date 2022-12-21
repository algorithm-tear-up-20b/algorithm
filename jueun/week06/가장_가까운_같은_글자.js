function solution(s) {
  let result = [];
  let idxOfLetter = new Map();
  let idx;
  let sLength = s.length;

  for (let i = 0; i < sLength; i++) {
    idx = idxOfLetter.get(s[i]);
    if (idx !== undefined) {
      result.push(i - idx);
    } else {
      result.push(-1);
    }
    idxOfLetter.set(s[i], i);
  }

  return result;
}
