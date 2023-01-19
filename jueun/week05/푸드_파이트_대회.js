function solution(food) {
  let table = "";
  let foodCount;

  for (let i = 1; i < food.length; i++) {
    foodCount = parseInt(food[i] / 2);
    if (foodCount > 0) table += String(i).repeat(foodCount);
  }
  table += "0" + table.split("").reverse().join("");

  return table;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.26ms, 33.5MB)
테스트 2 〉	통과 (0.16ms, 33.4MB)
테스트 3 〉	통과 (0.14ms, 33.5MB)
테스트 4 〉	통과 (0.24ms, 33.4MB)
테스트 5 〉	통과 (0.10ms, 33.4MB)
테스트 6 〉	통과 (0.20ms, 33.4MB)
테스트 7 〉	통과 (0.24ms, 33.4MB)
테스트 8 〉	통과 (0.19ms, 33.5MB)
테스트 9 〉	통과 (0.11ms, 33.4MB)
테스트 10 〉	통과 (0.12ms, 33.5MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
테스트 12 〉	통과 (0.05ms, 33.4MB)
테스트 13 〉	통과 (0.05ms, 33.4MB)
테스트 14 〉	통과 (0.38ms, 33.6MB)
테스트 15 〉	통과 (0.05ms, 33.4MB)
테스트 16 〉	통과 (0.05ms, 33.6MB)
테스트 17 〉	통과 (0.05ms, 33.4MB)
테스트 18 〉	통과 (0.05ms, 33.6MB)
테스트 19 〉	통과 (0.05ms, 33.4MB)
테스트 20 〉	통과 (0.05ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
