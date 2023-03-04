/*
성능	
Map : 키-값 쌍의 빈번한 추가 및 제거와 관련된 상황에서는 성능이 좀 더 좋습니다.
Object : 키-값 쌍의 빈번한 추가 및 제거에 최적화되지 않았습니다.
*/

/*
정확성  테스트
테스트 1 〉	통과 (0.19ms, 33.5MB)
테스트 2 〉	통과 (0.41ms, 33.5MB)
테스트 3 〉	통과 (288.79ms, 100MB)
테스트 4 〉	통과 (0.56ms, 33.5MB)
테스트 5 〉	통과 (0.50ms, 33.5MB)
테스트 6 〉	통과 (3.54ms, 34.2MB)
테스트 7 〉	통과 (8.35ms, 34.8MB)
테스트 8 〉	통과 (13.23ms, 35.2MB)
테스트 9 〉	통과 (122.33ms, 68.7MB)
테스트 10 〉	통과 (98.50ms, 68.1MB)
테스트 11 〉	통과 (248.14ms, 99.1MB)
테스트 12 〉	통과 (8.00ms, 36.2MB)
테스트 13 〉	통과 (1.07ms, 33.7MB)
테스트 14 〉	통과 (154.09ms, 65MB)
테스트 15 〉	통과 (183.84ms, 78.5MB)
테스트 16 〉	통과 (1.08ms, 33.6MB)
테스트 17 〉	통과 (1.70ms, 33.8MB)
테스트 18 〉	통과 (6.14ms, 36MB)
테스트 19 〉	통과 (7.88ms, 36.2MB)
테스트 20 〉	통과 (174.05ms, 64.7MB)
테스트 21 〉	통과 (289.63ms, 78.6MB)
테스트 22 〉	통과 (0.17ms, 33.5MB)
테스트 23 〉	통과 (0.11ms, 33.5MB)
테스트 24 〉	통과 (0.10ms, 33.5MB)
set으로 먼저 중복제거 했으면 더 간단히 구현이 가능

*/

function solution(id_list, report, k) {
  const userIds = {};
  const reportedIds = {};

  for (let i = 0; i < id_list.length; i++) {
    userIds[id_list[i]] = {};
    reportedIds[id_list[i]] = 0;
  }

  //신고된 Id의 갯수들을 찾음
  for (let i = 0; i < report.length; i++) {
    const reports = report[i].split(" ");

    //한 신고자가 다른 유저를 중복으로 신고한지 검사
    if (!userIds[reports[0]][reports[1]]) {
      userIds[reports[0]][reports[1]] = true;
      reportedIds[reports[1]] += 1;
    }
  }

  //k 이상인것만 찾음
  let reportedArr = [];
  for (let id in reportedIds) {
    if (reportedIds[id] >= k) reportedArr.push(id);
  }

  let arr = [];
  for (let id in userIds) {
    let count = 0;
    reportedArr.forEach((el) => {
      if (userIds[id][el]) count++;
    });
    arr.push(count);
  }
  return arr;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.16ms, 33.4MB)
테스트 2 〉	통과 (0.45ms, 33.5MB)
테스트 3 〉	통과 (404.11ms, 98.6MB)
테스트 4 〉	통과 (0.41ms, 33.5MB)
테스트 5 〉	통과 (0.56ms, 33.4MB)
테스트 6 〉	통과 (4.84ms, 34.2MB)
테스트 7 〉	통과 (5.48ms, 34.7MB)
테스트 8 〉	통과 (14.92ms, 35.2MB)
테스트 9 〉	통과 (142.04ms, 68.5MB)
테스트 10 〉	통과 (144.85ms, 68.1MB)
테스트 11 〉	통과 (315.29ms, 99.8MB)
테스트 12 〉	통과 (8.14ms, 36.3MB)
테스트 13 〉	통과 (1.77ms, 33.7MB)
테스트 14 〉	통과 (175.44ms, 64.7MB)
테스트 15 〉	통과 (239.73ms, 78.4MB)
테스트 16 〉	통과 (1.09ms, 33.6MB)
테스트 17 〉	통과 (1.11ms, 33.6MB)
테스트 18 〉	통과 (6.99ms, 36.2MB)
테스트 19 〉	통과 (11.04ms, 36.4MB)
테스트 20 〉	통과 (163.15ms, 64.7MB)
테스트 21 〉	통과 (270.47ms, 78.8MB)
테스트 22 〉	통과 (0.13ms, 33.4MB)
테스트 23 〉	통과 (0.13ms, 33.4MB)
테스트 24 〉	통과 (0.17ms, 33.5MB)
*/
function solution(id_list, report, k) {
  const userIds = new Map();
  const reportedIds = new Map();

  for (let i = 0; i < id_list.length; i++) {
    userIds.set(id_list[i], {});
    reportedIds.set(id_list[i], 0);
  }

  //신고된 Id의 갯수들을 찾음
  for (let i = 0; i < report.length; i++) {
    const reports = report[i].split(" ");

    //한 신고자가 다른 유저를 중복으로 신고한지 검사
    if (!userIds.get(reports[0])[reports[1]]) {
      userIds.get(reports[0])[reports[1]] = true;
      reportedIds.set(reports[1], reportedIds.get(reports[1]) + 1);
    }
  }

  //k 이상인것만 찾음
  let reportedArr = [];
  for (let id of reportedIds.keys()) {
    if (reportedIds.get(id) >= k) reportedArr.push(id);
  }

  let arr = [];
  for (let id of userIds.keys()) {
    let count = 0;
    reportedArr.forEach((el) => {
      if (userIds.get(id)[el]) count++;
    });
    arr.push(count);
  }
  return arr;
}
