/*
정확성  테스트
테스트 1 〉	통과 (8.60ms, 36.9MB)
테스트 2 〉	통과 (3.24ms, 36.8MB)
테스트 3 〉	통과 (1.70ms, 36.7MB)
테스트 4 〉	통과 (3.28ms, 36.7MB)
테스트 5 〉	통과 (1.29ms, 36.7MB)
테스트 6 〉	통과 (10.99ms, 37MB)
테스트 7 〉	통과 (3.10ms, 36.7MB)
테스트 8 〉	통과 (2.17ms, 36.7MB)
테스트 9 〉	통과 (7.17ms, 37MB)
테스트 10 〉	통과 (2.66ms, 36.7MB)
테스트 11 〉	통과 (147.68ms, 38.9MB)
테스트 12 〉	통과 (98.52ms, 39MB)
테스트 13 〉	통과 (61.63ms, 39MB)
테스트 14 〉	통과 (133.00ms, 39MB)
테스트 15 〉	통과 (102.08ms, 38.9MB)
테스트 16 〉	통과 (96.38ms, 38.9MB)
테스트 17 〉	통과 (0.11ms, 33.5MB)
테스트 18 〉	통과 (19.81ms, 38.9MB)
테스트 19 〉	통과 (2.38ms, 36.7MB)
테스트 20 〉	통과 (3.74ms, 36.7MB)
테스트 21 〉	통과 (0.11ms, 33.5MB)
테스트 22 〉	통과 (0.12ms, 33.6MB)
테스트 23 〉	통과 (0.22ms, 33.6MB)
테스트 24 〉	통과 (108.27ms, 38.9MB)
테스트 25 〉	통과 (106.09ms, 38.9MB)
테스트 26 〉	통과 (1.21ms, 36.6MB)
테스트 27 〉	통과 (1.17ms, 36.7MB)
15분
*/
function solution(number, limit, power) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(divisorCount(i, limit, power));
  }
  return arr.reduce((a, b) => a + b, 0);
}

function divisorCount(number, limit, power) {
  let max = Math.floor(Math.sqrt(number));
  let count = 0;

  for (let i = 1; i <= max; i++) {
    //약수의 개수 +2
    if (number % i === 0) count += 2;
    //2*2는 약수가 2하나이므로 -1
    if (i * i === number) count--;
    //문제조건인 약수의개수보다 limit가크면 power를적용
    if (count > limit) return power;
  }
  return count;
}
