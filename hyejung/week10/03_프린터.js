/*
[PGS] 프린터 /LV.2 / 60분
*/
/*
[문제] 스택/큐
1. 인쇄 대기목록 가장 첫번째문서 꺼냄
2. 나머지 목록에서 1번 보다 중요도 높은 문서 존재할 경우 1번 문서를 가장 마지막에.
3. 그렇지 않은 경우 인쇄

- 내가 인쇄 요청한 문서 몇번째 인쇄인지?
*/

/*
[접근]
1. 1번째 요소 shift
2. 1번째 요소와 나머지 요소 비교 ~ 값이 하나라도 클 경우 다시 push
3. 순서를 어떻게 추적하지?
- location 값을 업데이트 할 때마다 카운트를 한다.
- location이 0이 되는 경우 카운트를 리턴한다. 

*/

function solution(priorities, location) {
  let count = 1;
  let queue = priorities.slice();

  while (true) {
    const max = Math.max(...queue);
    const now = queue.shift();
    // 반복
    // 1. now 가 max와 같은 경우
    if (now === max) {
      // location 이 0이라면 바로 카운트를 리턴
      if (location === 0) return count;
      else count++;
    }
    // 2. now 가 max 와 다른 경우
    // - now 를 queue 에 push
    else {
      queue.push(now);
    }

    // 순서가 줄었으므로 location 감소
    location--;

    // 0번째 차례에서 감소되었다면 음수이기 때문에, 순서를 다시 맨 뒤로 초기화
    if (location < 0) {
      location = queue.length - 1;
    }
  }
}

// console.log(solution([1, 1, 9, 1, 1, 1], 0));

/*
테스트 1 〉	통과 (0.14ms, 33.4MB)
테스트 2 〉	통과 (0.31ms, 33.4MB)
테스트 3 〉	통과 (0.13ms, 33.5MB)
테스트 4 〉	통과 (0.13ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.3MB)
테스트 6 〉	통과 (0.15ms, 33.3MB)
테스트 7 〉	통과 (0.14ms, 33.4MB)
테스트 8 〉	통과 (0.25ms, 33.5MB)
테스트 9 〉	통과 (0.13ms, 33.4MB)
테스트 10 〉	통과 (0.15ms, 33.5MB)
테스트 11 〉	통과 (0.22ms, 33.4MB)
테스트 12 〉	통과 (0.13ms, 33.4MB)
테스트 13 〉	통과 (0.21ms, 32.6MB)
테스트 14 〉	통과 (0.04ms, 32.8MB)
테스트 15 〉	통과 (0.05ms, 33.4MB)
테스트 16 〉	통과 (0.13ms, 33.4MB)
테스트 17 〉	통과 (0.27ms, 33.5MB)
테스트 18 〉	통과 (0.12ms, 33.4MB)
테스트 19 〉	통과 (0.23ms, 33.4MB)
테스트 20 〉	통과 (0.14ms, 33.4MB)
*/

// 다른 사람의 풀이
function ref(priorities, location) {
  // 내가 추적하려는 task 여부와 priority 값을 넣어 객체로 변경
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));

  var count = 0;
  while (true) {
    // 첫번째 요소 특정
    var cur = list.splice(0, 1)[0];
    // some 메서드로 하나라도 우선순위가 높은 값이 있는지 찾는다.
    if (list.some(t => t.val > cur.val)) {
      // 우선순위가 더 높은 것이 있는 경우 배열 맨 뒤로 push
      list.push(cur);
    }
    // 아닌 경우 카운트를 증감
    else {
      count++;
      // 만약 현재 task 가 내가 뽑으려는 task 라면 리턴
      if (cur.my) return count;
    }
  }
}

console.log(ref([1, 1, 9, 1, 1, 1], 0));
