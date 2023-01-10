/*
정확성  테스트
테스트 1 〉	통과 (2.58ms, 35.6MB)
테스트 2 〉	통과 (1.11ms, 33.7MB)
테스트 3 〉	통과 (1.14ms, 33.6MB)
테스트 4 〉	통과 (1.06ms, 33.7MB)
테스트 5 〉	통과 (1.14ms, 33.6MB)
테스트 6 〉	통과 (0.42ms, 33.5MB)
테스트 7 〉	통과 (0.62ms, 33.7MB)
테스트 8 〉	통과 (0.16ms, 33.5MB)
테스트 9 〉	통과 (0.20ms, 33.5MB)
테스트 10 〉	통과 (1.06ms, 33.6MB)
테스트 11 〉	통과 (0.96ms, 33.6MB)
테스트 12 〉	통과 (0.87ms, 33.5MB)
테스트 13 〉	통과 (1.12ms, 33.7MB)
테스트 14 〉	통과 (1.88ms, 33.6MB)
테스트 15 〉	통과 (0.30ms, 33.6MB)
효율성  테스트
테스트 1 〉	통과 (12.80ms, 38.2MB)
테스트 2 〉	통과 (12.75ms, 38.3MB)
테스트 3 〉	통과 (12.50ms, 38.2MB)
테스트 4 〉	통과 (10.44ms, 38.5MB)
테스트 5 〉	통과 (10.48ms, 38.1MB)
*/

function solution(people, limit) {
  /*
      1. 가장 가벼운사람과 가장 무거운사람이 짝지어 나가는게 제일 베스트.
      2. left right 인덱스를 지정하고 for문이 한번돌때마다 꼭 한번씩은 나가야함.
      3. left 와 right가 교차하는 시점이 탈출 조건
  */

  people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;

  //break문이 for문 제일 처음에 있으니까 0부터 시작(한번 다 돌면 +1되는 형식이므로)
  let i = 0;

  for (; ; i++) {
    if (left > right) break;

    if (people[left] + people[right] <= limit) left++;
    right--;
  }

  return i;
}
