function solution(elements) {
  // 투포인터 알고리즘
  // lt, rt 포인터 선언
  // 길이 1 lt === rt
  //     2 rt = lt + 1
  //     3 rt = lt + 2 ...

  const set = new Set();

  for (let size = 1; size <= elements.length; size++) {
    addSumOfSequence(size, set, elements);
  }

  return set.size;
}

const addSumOfSequence = (size, set, elements) => {
  let sum = elements.slice(0, size).reduce((acc, cur) => acc + cur);
  set.add(sum);

  for (let lt = 1, rt = lt + size - 1; lt < elements.length; lt++, rt++) {
    if (rt === elements.length) rt = rt % elements.length;
    sum -= elements[lt - 1];
    sum += elements[rt];
    set.add(sum);
  }
};
