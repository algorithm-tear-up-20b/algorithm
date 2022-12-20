/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.23ms, 33.6MB)
테스트 2 〉	통과 (0.23ms, 33.5MB)
테스트 3 〉	통과 (0.24ms, 33.5MB)
테스트 4 〉	통과 (0.35ms, 33.5MB)
테스트 5 〉	통과 (0.11ms, 33.4MB)
테스트 6 〉	통과 (0.29ms, 33.5MB)
테스트 7 〉	통과 (0.62ms, 33.6MB)
테스트 8 〉	통과 (0.22ms, 33.5MB)
테스트 9 〉	통과 (0.15ms, 33.4MB)
테스트 10 〉	통과 (0.27ms, 33.5MB)
테스트 11 〉	통과 (0.08ms, 33.4MB)
테스트 12 〉	통과 (0.07ms, 33.5MB)
테스트 13 〉	통과 (0.07ms, 33.5MB)
테스트 14 〉	통과 (1.05ms, 33.6MB)
테스트 15 〉	통과 (0.09ms, 33.4MB)
테스트 16 〉	통과 (0.06ms, 33.4MB)
테스트 17 〉	통과 (0.06ms, 33.5MB)
테스트 18 〉	통과 (0.07ms, 33.4MB)
테스트 19 〉	통과 (0.06ms, 33.4MB)
테스트 20 〉	통과 (0.07ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(food) {
  let left = [];
  food.map((quantity, number) => {
    for (let i = 0; i < Math.floor(quantity / 2); i++) {
      left.push(number);
    }
  });
  const right = [...left].reverse();
  const result = left.join("") + 0 + right.join("");
  return result;
}
