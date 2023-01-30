function solution(priorities, location) {
  // 입력값 : 1번째 - 중요도가 순서대로 담긴 배열 / 2번째 - 인쇄를 요청한 문서가 현재 대기 목록의 어떤 위치에 있는지를 알려주는 location
  // 출력값 : 인쇄를 요청한 문서가 몇 번째로 인쇄되는지?

  // 인쇄 작업의 중요도는 1~9로 표현

  // priorities - [2,1,3,2], location - 2

  let stack = [];
  let count = 0;
  let order = location;
  while (order !== -1) {
    // const max = Math.max(...priorities); // 가장 높은 우선순위 뽑기
    const length = priorities.length;
    if (priorities[0] !== Math.max(...priorities)) {
      priorities.push(priorities.shift());
      //나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.

      // 처음 [2,1,3,2]
      // [1,3,2,2]
      // [3,2,2,1]
      if (order == 0) order = length - 1;
      else order -= 1;
    } else {
      stack.push(priorities.shift());
      //[3]
      order -= 1;
    }
  }
  count += stack.length;
  return count;
}
