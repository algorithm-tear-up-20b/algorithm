function solution(priorities, location) {
  // 입력값 : 1번째 - 중요도가 순서대로 담긴 배열 / 2번째 - 인쇄를 요청한 문서가 현재 대기 목록의 어떤 위치에 있는지를 알려주는 location
  // 출력값 : 인쇄를 요청한 문서가 몇 번째로 인쇄되는지?

  // 인쇄 작업의 중요도는 1~9로 표현

  // priorities - [2,1,3,2], location - 2

  let stack = [];
  let count = 0;

  while (location !== -1) {
    // const max = Math.max(...priorities); // 가장 높은 우선순위 뽑기
    const length = priorities.length;
    if (priorities[0] !== Math.max(...priorities)) {
      priorities.push(priorities.shift());
      //나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.

      // 처음 [2,1,3,2]
      // [1,3,2,2]
      // [3,2,2,1]
      if (location == 0) location = length - 1;
      else location -= 1;
    } else {
      stack.push(priorities.shift());
      //[3]
      location -= 1;
    }
  }
  count += stack.length;
  return count;
}

// console.log(solution([2, 1, 3, 2], 2));

/*정확성  테스트
테스트 1 〉	통과 (0.15ms, 33.4MB)
테스트 2 〉	통과 (0.32ms, 33.4MB)
테스트 3 〉	통과 (0.23ms, 33.5MB)
테스트 4 〉	통과 (0.14ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.16ms, 33.5MB)
테스트 7 〉	통과 (0.23ms, 33.5MB)
테스트 8 〉	통과 (0.42ms, 33.5MB)
테스트 9 〉	통과 (0.18ms, 33.4MB)
테스트 10 〉	통과 (0.19ms, 33.5MB)
테스트 11 〉	통과 (0.36ms, 33.5MB)
테스트 12 〉	통과 (0.17ms, 33.6MB)
테스트 13 〉	통과 (0.32ms, 33.5MB)
테스트 14 〉	통과 (0.05ms, 33.6MB)
테스트 15 〉	통과 (0.08ms, 33.4MB)
테스트 16 〉	통과 (0.14ms, 33.5MB)
테스트 17 〉	통과 (0.29ms, 33.5MB)
테스트 18 〉	통과 (0.14ms, 33.5MB)
테스트 19 〉	통과 (0.25ms, 33.4MB)
테스트 20 〉	통과 (0.19ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
