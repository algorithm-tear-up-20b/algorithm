/*
정확성  테스트
테스트 1 〉	통과 (0.15ms, 33.5MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.07ms, 33.3MB)
테스트 4 〉	통과 (0.06ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (32.61ms, 39.2MB)
테스트 7 〉	통과 (31.06ms, 37.4MB)
테스트 8 〉	통과 (51.47ms, 35.6MB)
테스트 9 〉	통과 (14.97ms, 37.7MB)
테스트 10 〉	통과 (39.10ms, 38.6MB)
테스트 11 〉	통과 (190.55ms, 83.1MB)
테스트 12 〉	통과 (212.59ms, 83.6MB)
테스트 13 〉	통과 (190.95ms, 83.1MB)
테스트 14 〉	통과 (206.40ms, 82.3MB)
테스트 15 〉	통과 (192.01ms, 82.3MB)
테스트 16 〉	통과 (0.06ms, 33.3MB)
테스트 17 〉	통과 (0.06ms, 33.4MB)
테스트 18 〉	통과 (0.16ms, 33.5MB)
테스트 19 〉	통과 (0.07ms, 33.4MB)
테스트 20 〉	통과 (0.07ms, 33.4MB)
테스트 21 〉	통과 (0.06ms, 33.5MB)
테스트 22 〉	통과 (0.05ms, 33.4MB)
테스트 23 〉	통과 (0.06ms, 33.4MB)
테스트 24 〉	통과 (0.06ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/

function solution(k, m, score) {
  const sizeOfBox = parseInt(score.length / m);
  const sortedScore = score.slice().sort((a, b) => b - a);
  let price = 0;

  for (let i = m - 1; i < sizeOfBox * m; i += m) {
    price += sortedScore[i] * m;
  }

  return price;
}

let k = 4,
  m = 3,
  score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

console.log(solution(k, m, score));
