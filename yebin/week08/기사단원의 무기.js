/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (6.13ms, 37MB)
테스트 2 〉	통과 (2.84ms, 36.4MB)
테스트 3 〉	통과 (2.06ms, 37MB)
테스트 4 〉	통과 (3.49ms, 36.1MB)
테스트 5 〉	통과 (1.58ms, 36MB)
테스트 6 〉	통과 (6.13ms, 36.5MB)
테스트 7 〉	통과 (2.39ms, 36.3MB)
테스트 8 〉	통과 (2.19ms, 36.2MB)
테스트 9 〉	통과 (6.21ms, 36.5MB)
테스트 10 〉	통과 (2.86ms, 36.3MB)
테스트 11 〉	통과 (75.61ms, 39.2MB)
테스트 12 〉	통과 (85.02ms, 39.4MB)
테스트 13 〉	통과 (88.94ms, 39.3MB)
테스트 14 〉	통과 (79.77ms, 39.2MB)
테스트 15 〉	통과 (82.43ms, 39.2MB)
테스트 16 〉	통과 (111.98ms, 39.2MB)
테스트 17 〉	통과 (0.08ms, 33.7MB)
테스트 18 〉	통과 (90.80ms, 39.3MB)
테스트 19 〉	통과 (3.18ms, 36.3MB)
테스트 20 〉	통과 (2.73ms, 36.3MB)
테스트 21 〉	통과 (0.12ms, 33.6MB)
테스트 22 〉	통과 (0.08ms, 33.8MB)
테스트 23 〉	통과 (0.26ms, 33.7MB)
테스트 24 〉	통과 (96.60ms, 39.4MB)
테스트 25 〉	통과 (111.42ms, 40.4MB)
테스트 26 〉	통과 (1.45ms, 36MB)
테스트 27 〉	통과 (1.42ms, 36MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// num의 약수 개수 출력
const getDivNum = (num) => {
  let number = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      number++;
      if (num / i !== i) number++;
    }
  }
  return number;
};

function solution1(number, limit, power) {
  let divNums = [];
  for (let i = 1; i <= number; i++) {
    divNums.push(getDivNum(i));
  }
  divNums = divNums.map((el) => {
    if (el > limit) return power;
    return el;
  });
  return divNums.reduce((acc, cur) => acc + cur, 0);
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (9.03ms, 36.6MB)
테스트 2 〉	통과 (4.27ms, 36.1MB)
테스트 3 〉	통과 (2.78ms, 36.3MB)
테스트 4 〉	통과 (8.23ms, 36.2MB)
테스트 5 〉	통과 (2.42ms, 36.2MB)
테스트 6 〉	통과 (14.25ms, 36.5MB)
테스트 7 〉	통과 (3.70ms, 36.3MB)
테스트 8 〉	통과 (4.01ms, 37.5MB)
테스트 9 〉	통과 (15.06ms, 36.2MB)
테스트 10 〉	통과 (3.12ms, 36.3MB)
테스트 11 〉	통과 (198.85ms, 38.5MB)
테스트 12 〉	통과 (283.27ms, 41.4MB)
테스트 13 〉	통과 (125.54ms, 39.5MB)
테스트 14 〉	통과 (260.38ms, 39.6MB)
테스트 15 〉	통과 (296.99ms, 39.9MB)
테스트 16 〉	통과 (225.99ms, 39.6MB)
테스트 17 〉	통과 (0.12ms, 33.6MB)
테스트 18 〉	통과 (125.17ms, 39.8MB)
테스트 19 〉	통과 (3.63ms, 36.4MB)
테스트 20 〉	통과 (4.54ms, 36.1MB)
테스트 21 〉	통과 (0.15ms, 33.7MB)
테스트 22 〉	통과 (0.25ms, 33.7MB)
테스트 23 〉	통과 (0.24ms, 33.6MB)
테스트 24 〉	통과 (218.33ms, 39.6MB)
테스트 25 〉	통과 (201.90ms, 39.6MB)
테스트 26 〉	통과 (2.12ms, 36MB)
테스트 27 〉	통과 (3.74ms, 36.3MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 코드는 더 짧지만 시간복잡도가 더 높다.
function solution2(number, limit, power) {
  const divNums = Array(number)
    .fill()
    .map((_, i) => i + 1)
    .map((el) => (getDivNum(el) > limit ? power : getDivNum(el)));
  return divNums.reduce((acc, cur) => acc + cur, 0);
}
