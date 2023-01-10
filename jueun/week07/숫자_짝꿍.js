function solution(X, Y) {
  // map
  const yMap = new Map();

  for (let y of Y) {
    let count = yMap.get(y);
    if (count !== undefined) {
      yMap.set(y, count + 1);
    } else {
      yMap.set(y, 1);
    }
  }

  const xyArr = [];

  for (let [x] of X) {
    let count = yMap.get(x);
    if (count && count > 0) {
      xyArr.push(x);
      yMap.set(x, count - 1);
    }
  }

  if (xyArr.length === 0) return "-1";
  else {
    xyArr.sort((a, b) => b - a);
  }

  const xySet = new Set(xyArr);
  if (xySet.size === 1 && xySet.has("0")) {
    return "0";
  }

  return xyArr.join("");
}

/*
정확성  테스트
테스트 1 〉	통과 (0.11ms, 32.8MB)
테스트 2 〉	통과 (0.10ms, 32.8MB)
테스트 3 〉	통과 (0.10ms, 33.6MB)
테스트 4 〉	통과 (0.10ms, 33.4MB)
테스트 5 〉	통과 (0.11ms, 33.4MB)
테스트 6 〉	통과 (0.58ms, 33.8MB)
테스트 7 〉	통과 (0.45ms, 33.6MB)
테스트 8 〉	통과 (0.93ms, 33.5MB)
테스트 9 〉	통과 (0.79ms, 33.3MB)
테스트 10 〉	통과 (0.78ms, 33.6MB)
테스트 11 〉	통과 (1533.27ms, 202MB)
테스트 12 〉	통과 (1722.29ms, 203MB)
테스트 13 〉	통과 (1381.21ms, 202MB)
테스트 14 〉	통과 (1690.86ms, 209MB)
테스트 15 〉	통과 (1693.49ms, 201MB)
테스트 16 〉	통과 (0.10ms, 33.4MB)
테스트 17 〉	통과 (0.16ms, 33.4MB)
테스트 18 〉	통과 (0.14ms, 33.4MB)
테스트 19 〉	통과 (0.10ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
