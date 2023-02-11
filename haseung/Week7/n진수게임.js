function solution(n, t, m, p) {
  // n: 몇진법으로 바꿀 것인지?
  // t: 미리 구할 숫자 개수
  // m: 게임 참가 인원
  // p: '튜브'의 순서

  // 한 자리 숫자의 경우
  // i번째 사람은 i-1를 말한다.

  // 10이상 숫자부터인 경우
  // 11번째 사람 -> 1 12번째 사람 -> 0
  // 13번째 사람 => 1 14번째 사람 -> 1
  // 14번째 사람 -> 1 15번째 사람 -> 2

  let answer = "";
  const numArr = [];

  // 0부터 (t*m)-1까지 들어오는 모든 숫자들을 n진법으로 바꾸기
  for (let i = 0; i < t * m; i++) {
    numArr.push(i.toString(n)); // "011011100101110111"
  }

  const numStr = numArr.join("");

  for (let j = 0; j < t * m; j++) {
    if (j % m === p - 1) answer += numStr[j].toUpperCase(); //"0111"
  }
  return answer;
}
