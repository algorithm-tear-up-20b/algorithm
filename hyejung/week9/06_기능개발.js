/*
[PGS] 기능 개발 /LV.2 / 30분
*/

/*
테스트 1 〉	통과 (0.07ms, 33.1MB)
테스트 2 〉	통과 (0.17ms, 33.2MB)
테스트 3 〉	통과 (0.27ms, 33.5MB)
테스트 4 〉	통과 (0.23ms, 33.5MB)
테스트 5 〉	통과 (0.09ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.4MB)
테스트 7 〉	통과 (0.19ms, 33.4MB)
테스트 8 〉	통과 (0.08ms, 33.4MB)
테스트 9 〉	통과 (0.26ms, 33.4MB)
테스트 10 〉	통과 (0.28ms, 33.5MB)
테스트 11 〉	통과 (0.10ms, 33.5MB)
*/

/*
[문제]
- 각 기능이 진도 100일 때 서비스 반영 가능
- 개발 속도가 모두 달라서, 뒤에 있는 기능이 먼저 개발될 수 있다.
-이 때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포된다.
- 먼저 배포되어야 하는 순서, 개발 속도가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지 리턴

[접근]
아... 이거 할 수 있을거같은데;

*/

// 시간이 부족해서 레퍼런스를 공부해왔습니다..^^ 죄송해요 ㅠ
function solution(progresses, speeds) {
  // 배포 횟수를 세는 answer 배열
  let answer = [0];
  // 각 progress를 배포하기 위해 걸리는 날짜
  // 남은 progress 를 일일 작업 시간으로 나누면 날짜가 나옵니다.
  let days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx]),
  );
  // 첫 번째 기능이 먼저 배포되어야 다음 기능이 배포될 수 있기 때문에 maxDay 변수를 days 의 첫 번째 요소로 할당해줍니다.
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    // 현재 day 가 maxDay보다 작거나 같다면 같이 배포될 수 있기 때문에 배포횟수 +1
    if (days[i] <= maxDay) {
      answer[j] += 1;
    }
    // 그 이외의 경우는 기다렸다가 배포되는 경우가 아닙니다.
    else {
      // 따라서 배포되는 기준을 현재 days 로 변경하고
      maxDay = days[i];
      // 그 다음 배포 횟수에 1을 추가합니다.
      answer[++j] = 1;
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
