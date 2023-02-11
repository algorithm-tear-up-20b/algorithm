function solution(msg) {
  // 길이가 1인 모든 단어 포함하도록 사전 초기화
  // 현재 입력과 일치하는 '가징 긴' 문자열 'w'를 찾는다.
  // w에 해당하는 사전의 번호 출력하고, 입력에서 w 제거
  // 처리 안 된 남은 글자가 남아있다면(c) `w+c`에 해당하는 단어를 사전에 등록
  // 다시 가장 긴 문자열 'w'를 찾는다.

  // KAKAO가 들어올 경우
  // indexOf('K')로 번호 찾기 -> 11
  // 계속 진행하면, "KA"는 원래 없었으므로 기존에 26번까지 있었던 색인 번호에 추가로 '27번째'에 등록한다.

  // indexOf('A')로 번호 찾기 -> 1
  // 'AK'는 원래 없었으므로 추가로 28번째에 등록

  // KA의 위치는 27이고 KAO를 29번째에 등록

  //....

  const dictionary = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const idxArray = [];
  //msg 길이가 존재하지 않을 때까지 반복
  // 빈 문자열로 초기화
  // 0번째 인덱스부터 i번째 문자열까지 자르기
  // 잘린 문자열이 처음에 선언한 dictionary에 포함되지 않은 경우 dictionary에 push
  // 포함되어 있으면 빈 문자열에 잘린 문자열 재할당

  while (msg.length !== 0) {
    let word = "";
    for (let i = 1; i <= msg.length; i++) {
      const character = msg.slice(0, i);
      if (!dictionary.includes(character)) {
        dictionary.push(character);
        break;
      }
      word = character;
    }
    idxArray.push(dictionary.indexOf(word) + 1);
    msg = msg.slice(word.length);
  }
  return idxArray;
}

/*정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.6MB)
테스트 2 〉	통과 (0.16ms, 33.6MB)
테스트 3 〉	통과 (0.15ms, 33.6MB)
테스트 4 〉	통과 (0.49ms, 33.6MB)
테스트 5 〉	통과 (0.24ms, 33.6MB)
테스트 6 〉	통과 (0.67ms, 33.6MB)
테스트 7 〉	통과 (0.34ms, 33.6MB)
테스트 8 〉	통과 (0.41ms, 33.6MB)
테스트 9 〉	통과 (0.09ms, 33.6MB)
테스트 10 〉	통과 (0.39ms, 33.5MB)
테스트 11 〉	통과 (0.48ms, 33.6MB)
테스트 12 〉	통과 (0.53ms, 33.6MB)
테스트 13 〉	통과 (2.09ms, 33.6MB)
테스트 14 〉	통과 (1.32ms, 33.6MB)
테스트 15 〉	통과 (1.29ms, 33.7MB)
테스트 16 〉	통과 (0.93ms, 33.6MB)
테스트 17 〉	통과 (0.46ms, 33.7MB)
테스트 18 〉	통과 (0.23ms, 33.4MB)
테스트 19 〉	통과 (0.37ms, 33.4MB)
테스트 20 〉	통과 (0.49ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
