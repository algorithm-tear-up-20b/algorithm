function solution(s) {
  const tuple = [];
  const sArr = s.slice(1, s.length - 1).split("},{");
  sArr[0] = sArr[0].slice(1);
  sArr[sArr.length - 1] = sArr[sArr.length - 1].slice(0, -1);

  sArr.sort((a, b) => a.length - b.length);

  const sSet = new Set();

  for (let i = 0; i < sArr.length; i++) {
    sArr[i] = sArr[i].split(",");
    for (let j = 0; j < sArr[i].length; j++) {
      if (!sSet.has(sArr[i][j])) {
        tuple.push(+sArr[i][j]);
        sSet.add(sArr[i][j]);
        break;
      }
    }
  }

  return tuple;
}
