/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.18ms, 33.6MB)
테스트 2 〉	통과 (0.30ms, 33.4MB)
테스트 3 〉	통과 (0.19ms, 33.5MB)
테스트 4 〉	통과 (0.18ms, 33.6MB)
테스트 5 〉	통과 (0.13ms, 33.4MB)
테스트 6 〉	통과 (0.08ms, 33.6MB)
테스트 7 〉	통과 (0.28ms, 33.5MB)
테스트 8 〉	통과 (0.27ms, 33.4MB)
테스트 9 〉	통과 (0.07ms, 33.5MB)
테스트 10 〉	통과 (0.08ms, 33.4MB)
테스트 11 〉	통과 (0.07ms, 33.4MB)
테스트 12 〉	통과 (0.27ms, 33.6MB)
테스트 13 〉	통과 (0.19ms, 33.6MB)
테스트 14 〉	통과 (0.11ms, 33.5MB)
테스트 15 〉	통과 (0.08ms, 33.5MB)
테스트 16 〉	통과 (0.07ms, 33.4MB)
테스트 17 〉	통과 (0.24ms, 33.5MB)
테스트 18 〉	통과 (0.17ms, 33.5MB)
테스트 19 〉	통과 (0.12ms, 33.5MB)
테스트 20 〉	통과 (0.10ms, 33.5MB)
테스트 21 〉	통과 (0.12ms, 33.5MB)
테스트 22 〉	통과 (0.08ms, 33.6MB)
테스트 23 〉	통과 (0.08ms, 33.5MB)
테스트 24 〉	통과 (0.08ms, 33.4MB)
테스트 25 〉	통과 (0.23ms, 33.5MB)
테스트 26 〉	통과 (0.18ms, 33.6MB)
테스트 27 〉	통과 (0.07ms, 33.5MB)
테스트 28 〉	통과 (0.26ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(clothes) {
  let clothesTable = new Map();
  for (el of clothes) {
    clothesTable.set(el[1], clothesTable.get(el[1]) + 1 || 1);
  }
  let result = 1;
  clothesTable.forEach((_, key) => {
    result *= 1 + clothesTable.get(key);
  });
  return result - 1;
}
// 옷의 종류 3가지, 종류별 옷의 수가 a, b, c이면
// 경우의 수는 (a+b+c) + (ab+bc+ca) + (abc)
// (x+a)(x+b)(x+c) = x^3 + (a+b+c)x^2 + (ab+bc+ca)x + (abc)
// (1+a)(1+b)(1+c) = 1 + (a+b+c) + (ab+bc+ca) + (abc)
// x에 1을 대입하면 맨 앞에 x^3이 빠져야 하므로 return 값에서 1을 빼줘야 한다.
