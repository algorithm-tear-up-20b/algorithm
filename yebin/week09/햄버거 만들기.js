/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.5MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (34.45ms, 58.1MB)
테스트 4 〉	통과 (64.29ms, 76.5MB)
테스트 5 〉	통과 (79.55ms, 83.8MB)
테스트 6 〉	통과 (50.62ms, 59.7MB)
테스트 7 〉	통과 (85.97ms, 70.7MB)
테스트 8 〉	통과 (54.81ms, 61MB)
테스트 9 〉	통과 (33.96ms, 60MB)
테스트 10 〉	통과 (1.59ms, 34.3MB)
테스트 11 〉	통과 (31.81ms, 54.6MB)
테스트 12 〉	통과 (104.52ms, 97MB)
테스트 13 〉	통과 (0.04ms, 33.5MB)
테스트 14 〉	통과 (0.05ms, 33.5MB)
테스트 15 〉	통과 (0.05ms, 33.4MB)
테스트 16 〉	통과 (0.05ms, 33.4MB)
테스트 17 〉	통과 (0.07ms, 33.4MB)
테스트 18 〉	통과 (0.06ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function checkTable(table) {
  const burger = "1231";
  if (table.slice(-4).join("") === burger) return true;
  return false;
}

function solution(ingredient) {
  let table = [],
    i = 0,
    count = 0;
  while (i < ingredient.length) {
    table.push(ingredient[i]);
    if (ingredient[i] === 1 && checkTable(table)) {
      table.splice(-4, 4);
      count++;
    }
    i++;
  }
  return count;
}
