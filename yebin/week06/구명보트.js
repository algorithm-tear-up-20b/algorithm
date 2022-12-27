/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (3.83ms, 35.4MB)
테스트 2 〉	통과 (2.18ms, 33.5MB)
테스트 3 〉	통과 (2.33ms, 33.6MB)
테스트 4 〉	통과 (1.82ms, 33.6MB)
테스트 5 〉	통과 (0.75ms, 33.5MB)
테스트 6 〉	통과 (0.63ms, 33.5MB)
테스트 7 〉	통과 (0.99ms, 33.5MB)
테스트 8 〉	통과 (0.22ms, 33.5MB)
테스트 9 〉	통과 (0.22ms, 33.5MB)
테스트 10 〉	통과 (2.04ms, 33.7MB)
테스트 11 〉	통과 (1.07ms, 33.5MB)
테스트 12 〉	통과 (1.64ms, 33.5MB)
테스트 13 〉	통과 (1.19ms, 33.6MB)
테스트 14 〉	통과 (1.31ms, 33.5MB)
테스트 15 〉	통과 (0.23ms, 33.4MB)
효율성  테스트
테스트 1 〉	통과 (57.90ms, 38.5MB)
테스트 2 〉	통과 (11.95ms, 38.4MB)
테스트 3 〉	통과 (49.46ms, 37.8MB)
테스트 4 〉	통과 (10.59ms, 38.6MB)
테스트 5 〉	통과 (11.43ms, 38.3MB)
채점 결과
정확성: 75.0
효율성: 25.0
합계: 100.0 / 100.0
 */

function solution(people, limit) {
  people = people.sort((a, b) => a - b);
  let count = 0;
  while (people.length > 0) {
    const heaviest = people.pop();
    count++;
    if (people[0] + heaviest <= limit) {
      // 첫 번째 시도(효율성 1, 3 시간초과)
      // people = people.slice(1);

      // 두 번째 시도
      people.shift();
    }
  }
  return count;
}
