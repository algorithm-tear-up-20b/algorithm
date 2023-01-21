function solution(id_list, report, k) {
  // 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return
  // k번 이상 신고된 유저 -> 정지. 신고한 모든 유저에게 정지 사실 메일 발송

  const mailCount = new Array(id_list.length).fill(0);
  const reportSet = new Set(report); // 중복 제거
  const reporteeMap = new Map();

  let reporter, reportee;

  // report 처리
  for (let reportValue of reportSet) {
    [reporter, reportee] = reportValue.split(" ");
    let reporterList = reporteeMap.get(reportee);
    if (reporterList) {
      reporteeMap.set(reportee, [...reporterList, reporter]);
    } else {
      reporteeMap.set(reportee, [reporter]);
    }
  }

  // 정지 처리, 메일 발송
  for (let [reporteeId, reporters] of reporteeMap) {
    if (reporters.length >= k) {
      reporters.map((el) => mailCount[id_list.indexOf(el)]++);
    }
  }

  return mailCount;
}
