function solution(N) {
  const candidateArr = [];

  function makeCandidate(n) {
    let strArr = n.toString().split("");
    let num = n + strArr.reduce((acc, cur) => (acc += parseInt(cur)), 0);
    return num;
  }

  for (let i = 1; i <= N; i++) {
    if (makeCandidate(i) === N) {
      candidateArr.push(i);
    }
  }

  return candidateArr.length === 0 ? 0 : Math.min(...candidateArr);
}
