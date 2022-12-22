/*
정확성  테스트
테스트 1 〉	통과 (3.23ms, 35.5MB)
테스트 2 〉	통과 (2.03ms, 33.6MB)
테스트 3 〉	통과 (2.20ms, 33.7MB)
테스트 4 〉	통과 (1.94ms, 33.7MB)
테스트 5 〉	통과 (0.72ms, 33.7MB)
테스트 6 〉	통과 (0.42ms, 33.7MB)
테스트 7 〉	통과 (0.61ms, 33.7MB)
테스트 8 〉	통과 (0.16ms, 33.6MB)
테스트 9 〉	통과 (0.20ms, 33.6MB)
테스트 10 〉	통과 (1.47ms, 33.7MB)
테스트 11 〉	통과 (1.43ms, 33.7MB)
테스트 12 〉	통과 (1.59ms, 33.6MB)
테스트 13 〉	통과 (1.74ms, 33.7MB)
테스트 14 〉	통과 (2.32ms, 33.6MB)
테스트 15 〉	통과 (0.34ms, 33.6MB)
효율성  테스트
테스트 1 〉	통과 (33.23ms, 37.8MB)
테스트 2 〉	통과 (41.19ms, 38MB)
테스트 3 〉	통과 (32.64ms, 37.6MB)
테스트 4 〉	통과 (31.09ms, 38.1MB)
테스트 5 〉	통과 (31.95ms, 37.7MB)
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
