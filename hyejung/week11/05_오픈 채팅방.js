/*
[PGS] 오픈 채팅방 /LV.2 / 15분
*/

/*
[문제]
- 채팅방에 누군가 들어오면 [닉네임]님이 들어왔습니다.
- 누군가 나가면 [닉네임] 님이 나갔습니다.

- 채팅방에서 닉네임을 변경하는 방법
1. 채팅방 나간 후, 새 닉네임으로 다시 들어간다.
2. 채팅방에서 닉네임을 변경한다.

- 닉네임을 변경할 땐 기존 채팅방에 출력된 메시지의 닉네임 전부 변경.
- 닉네임은 중복을 허용한다.

- 채팅방에 들어오고, 나가고, 닉네임을 변경한 기록이 담긴 문자열 배열 record
- 모든 기록이 처리되고, 최종적으로 보이는 메시지를 문자열 배열로 return

ex) ['입장 유저아이디 유저닉네임' ...] => 유저 아이디로 구분. 

[접근]
1. record 를 돌면서 uuid를 키로 하여 닉네임을 계속 바꿔준다.
2. 최종적으로 바뀐 닉네임을 토대로 Enter인지 Leave 인지 판단해 id가 일치하는 닉네임으로 문자열 만들어서 붙인다.
*/

function solution(record) {
  const users = {};
  const answers = [];
  record.forEach(log => {
    const [_, id, nickname = ''] = log.split(' ');
    nickname ? (users[id] = nickname) : '';
  });
  record.forEach(log => {
    const [action, id, _] = log.split(' ');
    switch (action) {
      case 'Enter':
        answers.push(`${users[id]}님이 들어왔습니다.`);
        break;
      case 'Leave':
        answers.push(`${users[id]}님이 나갔습니다.`);
        break;
      default:
        break;
    }
  });
  return answers;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ]),
);

/*
테스트 1 〉	통과 (0.32ms, 33.4MB)
테스트 2 〉	통과 (0.15ms, 33.5MB)
테스트 3 〉	통과 (0.48ms, 33.6MB)
테스트 4 〉	통과 (0.33ms, 33.5MB)
테스트 5 〉	통과 (2.29ms, 34.4MB)
테스트 6 〉	통과 (3.42ms, 34.3MB)
테스트 7 〉	통과 (2.18ms, 34.4MB)
테스트 8 〉	통과 (3.98ms, 34.3MB)
테스트 9 〉	통과 (2.65ms, 34.6MB)
테스트 10 〉	통과 (3.04ms, 34.3MB)
테스트 11 〉	통과 (1.66ms, 34MB)
테스트 12 〉	통과 (2.26ms, 33.9MB)
테스트 13 〉	통과 (4.11ms, 34.4MB)
테스트 14 〉	통과 (3.77ms, 34.5MB)
테스트 15 〉	통과 (0.18ms, 33.4MB)
테스트 16 〉	통과 (0.14ms, 33.4MB)
테스트 17 〉	통과 (0.59ms, 33.7MB)
테스트 18 〉	통과 (0.61ms, 33.6MB)
테스트 19 〉	통과 (2.32ms, 34.4MB)
테스트 20 〉	통과 (2.69ms, 34.2MB)
테스트 21 〉	통과 (2.68ms, 34.2MB)
테스트 22 〉	통과 (2.40ms, 34.3MB)
테스트 23 〉	통과 (3.69ms, 34.4MB)
테스트 24 〉	통과 (3.52ms, 34.3MB)
테스트 25 〉	통과 (215.96ms, 76.9MB)
테스트 26 〉	통과 (257.00ms, 82.1MB)
테스트 27 〉	통과 (307.42ms, 86.8MB)
테스트 28 〉	통과 (335.39ms, 99.6MB)
테스트 29 〉	통과 (252.92ms, 95.6MB)
테스트 30 〉	통과 (246.47ms, 76.3MB)
테스트 31 〉	통과 (297.67ms, 96.4MB)
테스트 32 〉	통과 (202.28ms, 79.1MB)
*/

// 다른 사람의 풀이
function ref(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  record.forEach(v => {
    const [state, id, nick] = v.split(' ');

    if (state !== 'Change') {
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

/*
테스트 1 〉	통과 (0.33ms, 33.6MB)
테스트 2 〉	통과 (0.18ms, 33.5MB)
테스트 3 〉	통과 (0.34ms, 33.6MB)
테스트 4 〉	통과 (0.33ms, 33.5MB)
테스트 5 〉	통과 (1.31ms, 34.2MB)
테스트 6 〉	통과 (1.54ms, 34.2MB)
테스트 7 〉	통과 (1.29ms, 34.1MB)
테스트 8 〉	통과 (1.52ms, 34.2MB)
테스트 9 〉	통과 (1.73ms, 34.5MB)
테스트 10 〉	통과 (1.52ms, 34.2MB)
테스트 11 〉	통과 (1.09ms, 34.1MB)
테스트 12 〉	통과 (1.66ms, 33.9MB)
테스트 13 〉	통과 (1.67ms, 34.2MB)
테스트 14 〉	통과 (2.93ms, 34.5MB)
테스트 15 〉	통과 (0.14ms, 33.4MB)
테스트 16 〉	통과 (0.14ms, 33.6MB)
테스트 17 〉	통과 (0.35ms, 33.6MB)
테스트 18 〉	통과 (0.37ms, 33.5MB)
테스트 19 〉	통과 (1.55ms, 34.4MB)
테스트 20 〉	통과 (1.41ms, 34.2MB)
테스트 21 〉	통과 (1.38ms, 34.2MB)
테스트 22 〉	통과 (1.38ms, 34.1MB)
테스트 23 〉	통과 (1.53ms, 34.3MB)
테스트 24 〉	통과 (1.55ms, 34.2MB)
테스트 25 〉	통과 (101.11ms, 85MB)
테스트 26 〉	통과 (153.55ms, 100MB)
테스트 27 〉	통과 (166.20ms, 104MB)
테스트 28 〉	통과 (169.61ms, 108MB)
테스트 29 〉	통과 (161.12ms, 107MB)
테스트 30 〉	통과 (138.34ms, 98.7MB)
테스트 31 〉	통과 (147.36ms, 106MB)
테스트 32 〉	통과 (116.87ms, 97.8MB)
*/
