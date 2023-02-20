/*
[PGS] n진수 게임 /LV.2 / 15분
*/

/*
[문제]
- 여러사람이 둥글게 앉아 차례로 숫자를 말하는 게임
- 0부터 시작해 차례로 말함. 
- 10이상의 숫자는 한 자리씩 끊어말하기
ex) 10이면 11번째 사람이 1, 12번째 사람이 2...
-이진법 삼진법 등으로 게임을 즐김.
-내가 말해야 하는 숫자를 미리 출력해주는 프로그램 개발

진법 n
미리 구할 숫자 갯수 t
게임 참여 인원 m
튜브의 순서 p
튜브가 말해야하는 숫자 t개를 공백없이 차례대로 출력
10~15는 각각 대문자 A~F로 출력 (?)

[접근]
- 0부터 시작해서 매 p마다 숫자를 말해야한다.
- 미리구할 갯수 t가 주어지기 때문에 t 내에서 매 p마다 말해야한다.
- 당장 생각나는 방법은 0부터 t까지 돌며 전체 숫자를 n진법으로 다시 변환하여 배열에 넣는 것.
-그리고 그 배열에서 매 p마다 숫자를 뽑아 문자열에 넣고
- 그 문자열에서 10~15에 해당하는 숫자를 뽑아 알파벳으로 치환

-m명 중에서 내 순서 p 이니까...
-순회의 첫 스타트를 p-1로 하고 m만큼 증가시키면서 건너뛰면 됨.
*/

//n진법, t만큼, m명이 참여, 내 순서 p
function solution(n, t, m, p) {
  let numbers = [];
  let answers = '';
  for (let i = 0; i < t; i++) {
    const nownum = i.toString(n);
    numbers.push(String(nownum));
  }
  numbers = numbers.join('');

  console.log(numbers);

  for (let i = p - 1; i <= t; i += m) {
    console.log(i);
    answers += numbers[i];
  }
  return answers;
}

console.log(solution(2, 4, 2, 1));
