function solution(records) {
  //채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두 가지이다.
  // 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
  // 채팅방에서 닉네임을 변경한다.

  //유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.

  // 큐 자료구조?

  //첫 단어는 Enter, Leave, Change 중 하나이다.
  // Enter, Leave, Change 이렇게 분기 나눠서 해야할 듯?

  let answers = []; // 결과값을 넣을 배열
  let people = [];

  records.map((record) => {
    const [action, id, character] = record.split(" "); // 첫 단어 / 유저 아이디 / 닉네임
    if (action === "Enter") {
      answers.push(`${id}  님이 들어왔습니다.`); //Enter면 이 메세지를 answer에 집어넣고
      people[id] = character; // 유저 아이디랑 닉네임 맵핑시키기
    } else if (action === "Leave")
      answers.push(
        `${id}  님이 나갔습니다.`
      ); // Leave면 이 메세지 answer에 집어넣기 이 때는 나갔기 때문에 유저 아이디랑 닉네임 맵핑시킬 필요 없음
    else people[id] = character; // Change면 그냥 맵핑만 시키기
    // console.log(people)

    // [ uid1234: 'Muzi' ]
    // [ uid1234: 'Muzi', uid4567: 'Prodo' ]
    // [ uid1234: 'Muzi', uid4567: 'Prodo' ]
    // [ uid1234: 'Prodo', uid4567: 'Prodo' ]
    // [ uid1234: 'Prodo', uid4567: 'Ryan' ]
  });

  // console.log(answers);

  // [
  //   ("uid1234  님이 들어왔습니다.",
  //   "uid4567  님이 들어왔습니다.",
  //   "uid1234  님이 나갔습니다.",
  //   "uid1234  님이 들어왔습니다.")
  // ];

  const result = [];
  answers.map((answer) => {
    const [uid, message] = answer.split("  "); //uid: uid1234 / message: 님이 들어왔습니다.
    result.push(people[uid] + message);
  });
  return result;
}

/*정확성  테스트
테스트 1 〉	통과 (0.15ms, 33.7MB)
테스트 2 〉	통과 (0.14ms, 33.6MB)
테스트 3 〉	통과 (0.37ms, 33.6MB)
테스트 4 〉	통과 (0.34ms, 33.8MB)
테스트 5 〉	통과 (2.41ms, 34.4MB)
테스트 6 〉	통과 (1.86ms, 34.4MB)
테스트 7 〉	통과 (1.56ms, 34.4MB)
테스트 8 〉	통과 (1.89ms, 34.4MB)
테스트 9 〉	통과 (2.25ms, 34.7MB)
테스트 10 〉	통과 (3.79ms, 34.4MB)
테스트 11 〉	통과 (1.35ms, 34.2MB)
테스트 12 〉	통과 (1.28ms, 34.1MB)
테스트 13 〉	통과 (1.88ms, 34.4MB)
테스트 14 〉	통과 (3.77ms, 34.6MB)
테스트 15 〉	통과 (0.16ms, 33.6MB)
테스트 16 〉	통과 (0.17ms, 33.5MB)
테스트 17 〉	통과 (0.69ms, 33.8MB)
테스트 18 〉	통과 (0.64ms, 33.7MB)
테스트 19 〉	통과 (4.38ms, 34.5MB)
테스트 20 〉	통과 (1.61ms, 34.2MB)
테스트 21 〉	통과 (2.73ms, 34.3MB)
테스트 22 〉	통과 (2.69ms, 34.1MB)
테스트 23 〉	통과 (1.98ms, 34.5MB)
테스트 24 〉	통과 (4.20ms, 34.5MB)
테스트 25 〉	통과 (190.90ms, 97.7MB)
테스트 26 〉	통과 (217.25ms, 104MB)
테스트 27 〉	통과 (257.78ms, 101MB)
테스트 28 〉	통과 (255.88ms, 104MB)
테스트 29 〉	통과 (267.65ms, 104MB)
테스트 30 〉	통과 (167.80ms, 102MB)
테스트 31 〉	통과 (231.16ms, 99.1MB)
테스트 32 〉	통과 (198.03ms, 106MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
