/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.51ms, 33.5MB)
테스트 2 〉	통과 (0.34ms, 33.5MB)
테스트 3 〉	통과 (0.69ms, 33.6MB)
테스트 4 〉	통과 (0.72ms, 33.6MB)
테스트 5 〉	통과 (16.67ms, 38.3MB)
테스트 6 〉	통과 (6.08ms, 37.7MB)
테스트 7 〉	통과 (14.63ms, 38.2MB)
테스트 8 〉	통과 (6.15ms, 37.8MB)
테스트 9 〉	통과 (3.73ms, 34.5MB)
테스트 10 〉	통과 (4.54ms, 37.8MB)
테스트 11 〉	통과 (1.45ms, 33.9MB)
테스트 12 〉	통과 (2.07ms, 33.8MB)
테스트 13 〉	통과 (7.66ms, 37.9MB)
테스트 14 〉	통과 (3.79ms, 34.6MB)
테스트 15 〉	통과 (0.32ms, 33.6MB)
테스트 16 〉	통과 (0.34ms, 33.5MB)
테스트 17 〉	통과 (0.64ms, 33.7MB)
테스트 18 〉	통과 (1.05ms, 33.7MB)
테스트 19 〉	통과 (6.86ms, 38MB)
테스트 20 〉	통과 (9.64ms, 38MB)
테스트 21 〉	통과 (7.50ms, 38MB)
테스트 22 〉	통과 (6.46ms, 37.7MB)
테스트 23 〉	통과 (11.87ms, 38MB)
테스트 24 〉	통과 (8.79ms, 37.9MB)
테스트 25 〉	통과 (856.80ms, 95.3MB)
테스트 26 〉	통과 (620.14ms, 105MB)
테스트 27 〉	통과 (582.33ms, 109MB)
테스트 28 〉	통과 (579.45ms, 111MB)
테스트 29 〉	통과 (451.23ms, 113MB)
테스트 30 〉	통과 (210.49ms, 99.4MB)
테스트 31 〉	통과 (208.60ms, 106MB)
테스트 32 〉	통과 (186.15ms, 106MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(record) {
  const commands = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
    Change: "",
  };
  let result = [];
  // users { uid: [nickname, ...recordIdx] } 이런 형식으로 들어갈 것
  // recordIdx는 해당 uid가 활동한 모든 record의 인덱스
  const users = {};

  record.map((el, idx) => {
    [activity, uid, nickname] = el.split(" ");
    users[uid] ? users[uid].push(idx) : (users[uid] = [nickname, idx]);
    const string = commands[activity];
    result.push(string ? users[uid][0] + string : string);

    // 닉네임이 기존과 다른 경우 recordIdx를 돌면서 기존의 result 값을 수정
    if (activity !== "Leave" && users[uid][0] !== nickname) {
      users[uid][0] = nickname;
      for (let i = 1; i < users[uid].length; i++) {
        const recordIdx = users[uid][i];
        // 닉네임 변경의 경우 result 값이 빈 문자열이기 때문에 한번 조건 걸어줌
        if (result[recordIdx]) {
          result[recordIdx] =
            nickname + commands[record[recordIdx].split(" ")[0]];
        }
      }
    }
  });
  // 빈 문자열 거르기
  return result.filter((el) => el);
}

//다른 사람의 풀이
function solution(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  record.forEach((v) => {
    const [state, id, nick] = v.split(" ");

    if (state !== "Change") {
      action.push([state, id]);
    }

    if (nick) {
      userInfo[id] = nick;
    }
  });

  return action.map(([state, uid]) => {
    return `${userInfo[uid]}${stateMapping[state]}`;
  });
}
