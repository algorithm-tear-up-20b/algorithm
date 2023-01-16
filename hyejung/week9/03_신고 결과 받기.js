/*
[PGS] 신고 결과 받기 /LV.1 / 60분
*/

/*
정확성  테스트
테스트 1 〉	통과 (0.12ms, 33.4MB)
테스트 2 〉	통과 (0.26ms, 33.4MB)
테스트 3 〉	통과 (246.33ms, 88.9MB)
테스트 4 〉	통과 (0.34ms, 33.4MB)
테스트 5 〉	통과 (0.32ms, 33.4MB)
테스트 6 〉	통과 (1.87ms, 34.2MB)
테스트 7 〉	통과 (3.94ms, 34MB)
테스트 8 〉	통과 (5.52ms, 34.3MB)
테스트 9 〉	통과 (117.12ms, 66.7MB)
테스트 10 〉	통과 (82.97ms, 66.6MB)
테스트 11 〉	통과 (233.32ms, 88.4MB)
테스트 12 〉	통과 (0.82ms, 33.3MB)
테스트 13 〉	통과 (0.69ms, 33.6MB)
테스트 14 〉	통과 (75.46ms, 59.9MB)
테스트 15 〉	통과 (105.55ms, 68.7MB)
테스트 16 〉	통과 (0.63ms, 33.6MB)
테스트 17 〉	통과 (1.01ms, 33.7MB)
테스트 18 〉	통과 (1.32ms, 33.6MB)
테스트 19 〉	통과 (2.15ms, 34MB)
테스트 20 〉	통과 (112.07ms, 59.9MB)
테스트 21 〉	통과 (101.94ms, 68.7MB)
테스트 22 〉	통과 (0.14ms, 33.4MB)
테스트 23 〉	통과 (0.11ms, 33.4MB)
테스트 24 〉	통과 (0.15ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/

/*
[문제]
- 각 유저는 1회 1유저 신고 가능, 횟수 제한 없음
- 한 유저가 같은 유저를 여러번 신고해도 1회로 처리됨
- k번 이상 신고당한 유저는 게시판 이용 정지
- 해당 유저를 신고한 모든 유저에게 정지 사실을 메일 발송
- 각 유저별로 처리 결과 메일을 받는 횟수를 리턴

[접근 1]
1. 중복 신고를 제거하기 위해 먼저 set으로 만든 뒤 배열화한다.

2. id 별로 어떤 유저를 신고했는지 알 수 있는 해시 맵을 만든다.

3. report배열의 두번째 인자만 추출, map을 만들어 각 유저가 몇 번 신고당했는지 기록한다.

4. 2번에서 만든 객체의 값에 k번 이상 신고당한 유저가 존재하면 카운트가 올라간다.


*/

function solution(id_list, report, k) {
  const answer = [];
  const dedupedReport = [...new Set(report)];
  const reportedId = {};
  const reportedCount = new Map();

  // 전체 유저 id로 키값 지정
  for (let id of id_list) {
    reportedId[id] = [];
  }

  for (let report of dedupedReport) {
    const [reporter, reported] = report.split(' ');

    // 각 유저가 어떤 유저를 신고했는지 확인
    reportedId[reporter].push(reported);

    // 각 유저가 몇 번 신고당했는지 카운트
    if (reportedCount.has(reported)) {
      reportedCount.set(reported, reportedCount.get(reported) + 1);
    } else {
      reportedCount.set(reported, 1);
    }
  }

  // reported 배열에 k 이상 누적된 신고자를 찾아 카운트하고 answer 배열에 추가한다
  for (let reporter of id_list) {
    const reportedIds = reportedId[reporter];
    let count = 0;
    for (let reported of reportedIds) {
      if (reportedCount.get(reported) >= k) {
        count++;
      }
    }
    answer.push(count);
  }

  return answer;
}

console.log(
  solution(
    ['con', 'ryan'],
    ['ryan con', 'ryan con', 'ryan con', 'ryan con'],
    3,
  ),
);

// 다른 풀이
function ref(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  const report_list = {};

  // 불량이용자 : [신고한 유저들] 로 이루어질 맵 생성 (빈 배열 할당)
  id_list.map(user => (report_list[user] = []));

  report.map(user => {
    const [user_id, report_id] = user.split(' ');
    // user_id 가 없을 때만 추가해서 중복카운트 방지
    if (!report_list[report_id].includes(user_id))
      report_list[report_id].push(user_id);
  });

  for (let [key, val] of Object.entries(report_list)) {
    // 신고 건수가 k를 넘는 정지대상 이용자
    if (val.length >= k) {
      // id_list의 유저 인덱스와 동일한 answer 배열 증가
      val.map(user => (answer[id_list.indexOf(user)] += 1));
    }
  }
  return answer;
}
