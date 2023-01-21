function solution(clothes) {
  const closet = new Map();
  let typeCount;

  for (let i = 0; i < clothes.length; i++) {
    typeCount = closet.get(clothes[i][1]);
    if (typeCount) {
      closet.set(clothes[i][1], typeCount + 1);
    } else {
      closet.set(clothes[i][1], 1);
    }
  }

  if (closet.size === 1) return clothes.length;

  let cases = 1;
  for (let [type, count] of closet) {
    cases *= count + 1;
  }

  return cases - 1;
}
