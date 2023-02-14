function solution(record) {
  // uid로 사용자 구분해서 배열 관리
  // Enter : user 추가 (uid, 닉네임 형식)
  // Leave : 퇴장
  // Change : user의 닉네임 변경
  // 마지막에 입퇴장 메세지 작성
  let users = {};
  let message = [];
  let result = [];

  for (let i = 0; i < record.length; i++) {
    message = record[i].split(" ");
    switch (message[0]) {
      case "Enter":
        users[message[1]] = message[2];
        result.push([message[1], `님이 들어왔습니다.`]);
        break;
      case "Change":
        users[message[1]] = message[2];
        break;
      case "Leave":
        result.push([message[1], `님이 나갔습니다.`]);
        break;
    }
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = users[result[i][0]] + result[i][1];
  }

  return result;
}
