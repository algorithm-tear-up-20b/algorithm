/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.10ms, 33.4MB)
테스트 2 〉	통과 (0.12ms, 33.4MB)
테스트 3 〉	통과 (0.12ms, 33.4MB)
테스트 4 〉	통과 (0.10ms, 33.4MB)
테스트 5 〉	통과 (0.13ms, 33.4MB)
테스트 6 〉	통과 (0.14ms, 33.4MB)
테스트 7 〉	통과 (0.12ms, 33.4MB)
테스트 8 〉	통과 (0.21ms, 33.5MB)
테스트 9 〉	통과 (0.20ms, 33.5MB)
테스트 10 〉	통과 (0.20ms, 33.4MB)
테스트 11 〉	통과 (0.23ms, 33.4MB)
테스트 12 〉	통과 (0.22ms, 33.4MB)
테스트 13 〉	통과 (0.24ms, 33.4MB)
테스트 14 〉	통과 (0.30ms, 33.4MB)
테스트 15 〉	통과 (0.41ms, 33.5MB)
테스트 16 〉	통과 (0.40ms, 33.5MB)
테스트 17 〉	통과 (0.56ms, 33.7MB)
테스트 18 〉	통과 (0.55ms, 33.7MB)
테스트 19 〉	통과 (0.60ms, 33.7MB)
테스트 20 〉	통과 (0.58ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(numbers, hand) {
  let result = "";
  const converted = numbers.map((el) => {
    if (el === 0) return 11;
    else return el;
  });
  const left = [1, 4, 7];
  const right = [3, 6, 9];
  const base = hand === "left" ? "L" : "R";
  let L = 10;
  let R = 12;

  converted.map((number) => {
    if (left.includes(number)) {
      result += "L";
      L = number;
    } else if (right.includes(number)) {
      result += "R";
      R = number;
    } else {
      let distance = [L, R];
      distance = distance.map((thumb) => {
        const diff = Math.abs(number - thumb);
        return Math.floor(diff / 3) + (diff % 3);
      });
      if (distance[0] < distance[1]) {
        result += "L";
        L = number;
      } else if (distance[0] > distance[1]) {
        result += "R";
        R = number;
      } else {
        result += base;
        base === "L" ? (L = number) : (R = number);
      }
    }
  });

  return result;
}
