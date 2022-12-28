/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.13ms, 33.4MB)
테스트 2 〉	통과 (0.19ms, 33.4MB)
테스트 3 〉	통과 (0.20ms, 33.5MB)
테스트 4 〉	통과 (0.14ms, 33.5MB)
테스트 5 〉	통과 (0.11ms, 33.5MB)
테스트 6 〉	통과 (0.82ms, 33.7MB)
테스트 7 〉	통과 (0.66ms, 33.7MB)
테스트 8 〉	통과 (0.77ms, 33.6MB)
테스트 9 〉	통과 (0.60ms, 33.7MB)
테스트 10 〉	통과 (0.56ms, 33.6MB)
테스트 11 〉	통과 (1844.34ms, 196MB)
테스트 12 〉	통과 (1747.24ms, 196MB)
테스트 13 〉	통과 (2036.03ms, 196MB)
테스트 14 〉	통과 (1701.94ms, 196MB)
테스트 15 〉	통과 (1733.21ms, 196MB)
테스트 16 〉	통과 (0.07ms, 33.5MB)
테스트 17 〉	통과 (0.07ms, 33.5MB)
테스트 18 〉	통과 (0.06ms, 33.6MB)
테스트 19 〉	통과 (0.07ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
const getNumber = (string, el) =>
  string.split("").reduce((ac, v) => ac + (v === el), 0);

function solution(X, Y) {
  const setArr = [...new Set(X.split("").filter((el) => Y.includes(el)))].sort(
    (a, b) => b - a
  );

  if (!setArr.length) return "-1";
  if (setArr[0] === "0") return "0";
  return setArr
    .map((el) => {
      const repeatNumber = Math.min(getNumber(X, el), getNumber(Y, el));
      return el.repeat(repeatNumber);
    })
    .join("");
}
