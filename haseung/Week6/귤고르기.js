function solution(k, tangerine) {
  const obj = {};
  for (let i = 0; i < tangerine.length; i++) {
    obj[tangerine[i]] = ++obj[tangerine[i]] || 1;
  }
  const values = Object.values(obj).sort((a, b) => b - a);

  let sum = 0;
  let result = 0;

  for (const value of values) {
    result++;
    sum += value;

    if (sum >= k) break;
  }
  return result;
}
