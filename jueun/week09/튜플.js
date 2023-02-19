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

/*
정확성  테스트
테스트 1 〉	통과 (0.09ms, 33.5MB)
테스트 2 〉	통과 (0.10ms, 33.5MB)
테스트 3 〉	통과 (0.10ms, 33.6MB)
테스트 4 〉	통과 (0.21ms, 33.4MB)
테스트 5 〉	통과 (0.33ms, 33.4MB)
테스트 6 〉	통과 (0.42ms, 33.4MB)
테스트 7 〉	통과 (4.21ms, 34.6MB)
테스트 8 〉	통과 (11.37ms, 40MB)
테스트 9 〉	통과 (5.99ms, 38.2MB)
테스트 10 〉	통과 (16.80ms, 40.1MB)
테스트 11 〉	통과 (18.79ms, 43.3MB)
테스트 12 〉	통과 (22.29ms, 45.9MB)
테스트 13 〉	통과 (22.44ms, 45.5MB)
테스트 14 〉	통과 (28.68ms, 46.1MB)
테스트 15 〉	통과 (0.08ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
