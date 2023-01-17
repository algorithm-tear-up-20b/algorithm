function solution(id_list, report, k) {
  //한 번에 한 명의 유저 신고 가능
  //신고 횟수에 제한 X, 서로 다른 유저를 계속 신고 가능
  //k번 이상 신고된 유저는 게시판 이용 정지, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송(내용 취합해서 한꺼번에)

  const newList = [...new Set(report)]; //중복제거

  const out = []; //정지 아이디
  const count = Array(id_list.length).fill(0); //[0,0,0,0];
  const mail = Array(id_list.length).fill(0); //[0,0,0,0];

  for (const list of newList) {
    const reportId = list.split(" ")[1];
    const idx = id_list.indexOf(reportId);
    count[idx] += 1;
    if (count[idx] >= k) out.push(id_list[idx]);
  }

  newList.map((el) => {
    const mailId = el.split(" ")[0];
    const mailreportId = el.split(" ")[1];

    if (out.indexOf(mailreportId) >= 0) {
      const idx = id_list.indexOf(mailId);
      mail[idx] += 1;
    }
  });
  return mail;
}

// console.log(
//   solution(
//     ["muzi", "frodo", "apeach", "neo"],
//     ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
//     2
//   )
// );

/*정확성  테스트
테스트 1 〉	통과 (0.16ms, 33.4MB)
테스트 2 〉	통과 (0.30ms, 33.4MB)
테스트 3 〉	통과 (3618.28ms, 89.1MB)
테스트 4 〉	통과 (0.28ms, 33.4MB)
테스트 5 〉	통과 (0.28ms, 33.4MB)
테스트 6 〉	통과 (2.58ms, 34.1MB)
테스트 7 〉	통과 (4.48ms, 34.7MB)
테스트 8 〉	통과 (4.90ms, 34.9MB)
테스트 9 〉	통과 (844.50ms, 62MB)
테스트 10 〉	통과 (193.59ms, 61.5MB)
테스트 11 〉	통과 (1526.84ms, 89MB)
테스트 12 〉	통과 (0.79ms, 33.5MB)
테스트 13 〉	통과 (0.71ms, 33.5MB)
테스트 14 〉	통과 (655.26ms, 60.4MB)
테스트 15 〉	통과 (234.29ms, 68.8MB)
테스트 16 〉	통과 (0.59ms, 33.6MB)
테스트 17 〉	통과 (0.69ms, 33.6MB)
테스트 18 〉	통과 (1.29ms, 33.8MB)
테스트 19 〉	통과 (2.18ms, 34MB)
테스트 20 〉	통과 (539.77ms, 60.4MB)
테스트 21 〉	통과 (857.77ms, 68.8MB)
테스트 22 〉	통과 (0.10ms, 33.4MB)
테스트 23 〉	통과 (0.10ms, 33.4MB)
테스트 24 〉	통과 (0.10ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
