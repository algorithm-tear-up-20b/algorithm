function solution(clothes) {
  let answer = 1;
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }

  for (const key in obj) {
    answer *= obj[key];
  }

  return answer - 1;
}

/*정확성  테스트
테스트 1 〉	통과 (0.19ms, 33.5MB)
테스트 2 〉	통과 (0.13ms, 33.5MB)
테스트 3 〉	통과 (0.15ms, 33.5MB)
테스트 4 〉	통과 (0.18ms, 33.5MB)
테스트 5 〉	통과 (0.14ms, 33.6MB)
테스트 6 〉	통과 (0.07ms, 33.5MB)
테스트 7 〉	통과 (0.16ms, 33.6MB)
테스트 8 〉	통과 (0.16ms, 33.6MB)
테스트 9 〉	통과 (0.06ms, 33.5MB)
테스트 10 〉	통과 (0.05ms, 33.6MB)
테스트 11 〉	통과 (0.06ms, 33.6MB)
테스트 12 〉	통과 (0.25ms, 33.5MB)
테스트 13 〉	통과 (0.16ms, 33.5MB)
테스트 14 〉	통과 (0.06ms, 33.5MB)
테스트 15 〉	통과 (0.06ms, 33.4MB)
테스트 16 〉	통과 (0.07ms, 33.5MB)
테스트 17 〉	통과 (0.16ms, 33.4MB)
테스트 18 〉	통과 (0.15ms, 33.5MB)
테스트 19 〉	통과 (0.14ms, 33.5MB)
테스트 20 〉	통과 (0.06ms, 33.6MB)
테스트 21 〉	통과 (0.06ms, 33.4MB)
테스트 22 〉	통과 (0.06ms, 33.4MB)
테스트 23 〉	통과 (0.06ms, 33.5MB)
테스트 24 〉	통과 (0.14ms, 33.4MB)
테스트 25 〉	통과 (0.19ms, 33.4MB)
테스트 26 〉	통과 (0.17ms, 33.5MB)
테스트 27 〉	통과 (0.06ms, 33.4MB)
테스트 28 〉	통과 (0.21ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
