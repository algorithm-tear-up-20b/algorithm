function solution(X, Y) {
  //X,Y에서 공통된 숫자가 없으면 -1
  const hashX = [...Array(10)].fill(0);
  const hashY = [...Array(10)].fill(0);

  [...X].forEach((item) => hashX[item]++);
  [...Y].forEach((item) => hashY[item]++);

  const answer = hashX.map((item, index) => {
    if (item !== 0 && hashY[index] !== 0) return String(index).repeat(Math.min(item, hashY[index]));
  });

  const result = answer.reverse().join("");

  return result ? (Number(result) ? result : "0") : "-1";
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.09ms, 33.4MB)
// 테스트 3 〉	통과 (0.17ms, 33.4MB)
// 테스트 4 〉	통과 (0.12ms, 33.4MB)
// 테스트 5 〉	통과 (0.10ms, 33.5MB)
// 테스트 6 〉	통과 (0.27ms, 33.3MB)
// 테스트 7 〉	통과 (0.25ms, 33.3MB)
// 테스트 8 〉	통과 (0.26ms, 33.5MB)
// 테스트 9 〉	통과 (0.24ms, 33.5MB)
// 테스트 10 〉	통과 (0.24ms, 33.5MB)
// 테스트 11 〉	통과 (224.37ms, 95.9MB)
// 테스트 12 〉	통과 (228.76ms, 95.8MB)
// 테스트 13 〉	통과 (257.03ms, 96MB)
// 테스트 14 〉	통과 (231.52ms, 96MB)
// 테스트 15 〉	통과 (248.90ms, 95.9MB)
// 테스트 16 〉	통과 (0.11ms, 33.4MB)
// 테스트 17 〉	통과 (0.13ms, 33.5MB)
// 테스트 18 〉	통과 (0.09ms, 33.4MB)
// 테스트 19 〉	통과 (0.18ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
