/*
[PGS] 옹알이(2) /LV.1 / 50분
*/

/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.30ms, 33.6MB)
테스트 2 〉	통과 (0.28ms, 33.5MB)
테스트 3 〉	통과 (0.28ms, 33.5MB)
테스트 4 〉	통과 (0.24ms, 33.5MB)
테스트 5 〉	통과 (0.27ms, 33.4MB)
테스트 6 〉	통과 (0.27ms, 33.5MB)
테스트 7 〉	통과 (0.26ms, 33.5MB)
테스트 8 〉	통과 (0.40ms, 33.5MB)
테스트 9 〉	통과 (0.22ms, 33.5MB)
테스트 10 〉	통과 (0.22ms, 33.5MB)
테스트 11 〉	통과 (0.34ms, 33.6MB)
테스트 12 〉	통과 (0.49ms, 33.5MB)
테스트 13 〉	통과 (0.88ms, 33.6MB)
테스트 14 〉	통과 (0.48ms, 33.5MB)
테스트 15 〉	통과 (0.72ms, 33.6MB)
테스트 16 〉	통과 (0.52ms, 33.6MB)
테스트 17 〉	통과 (0.77ms, 33.6MB)
테스트 18 〉	통과 (0.51ms, 33.6MB)
테스트 19 〉	통과 (0.46ms, 33.5MB)
테스트 20 〉	통과 (0.43ms, 33.5MB)
*/

function solution(babbling) {
  const mapObj = {
    aya: 'A',
    ye: 'B',
    woo: 'C',
    ma: 'D',
  };
  const N = babbling.length;

  for (let i = 0; i < N; i++) {
    babbling[i] = babbling[i].replace(
      /aya|ye|woo|ma/gi,
      matched => mapObj[matched],
    );
  }
  const patternA = /[a-z]/g;
  const patternB = /A{2,}|B{2,}|C{2,}|D{2,}/g;

  return babbling.filter(el => !el.match(patternA) && !el.match(patternB))
    .length;
}

console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']));

/*
[문제]
- 조카는 aya, ye, woo, ma 네 가지 발음 + 이 발음의 조합밖에 말할 수 없음.
- 연속해서 같은 발음도 어려움.
- 랜덤한 문자열이 들어있는 배열이 주어질 때, 조카가 말할 수 있는 단어의 갯수를 리턴

[접근 1]
- 주어진 문자열을 loop 한다.
- available 배열을 반복해 각 단어의 포함 여부를 확인한다.
- 포함된 경우 해당 부분을 replace로 변경하여 없앤다.
- 그렇게해서 공백이 된 문자열의 갯수를 센다.
# 1,9,10,11,14,16,17,19,20 실패, 조건을 만족하지 못했나?
=> 연속되지 않은 같은 단어일 경우를 생각하지 않은 것 같다..!

[접근 2]
- 대응되는 단어를 치환하는 mapObj 생성
- replace 의 첫 번째 인자로 조카가 말할 수 있는 단어들을 전달
- 두 번째 인자로 그에 대응되는 단어로 치환하는 함수 전달
- 정규 표현식으로 치환된 문자열을 비교
- 1. 소문자가 있는 경우 말할 수 없는 단어
- 2. A,B,C,D로 치환된 문자열에 연속된 문자가 있는 경우 말할 수 없는 단어
- match 메서드로 해당 정규식을 통과한 요소들의 길이를 반환
*/

// 정규식을 활용한 다른 풀이
function ref(babbling) {
  // \1+ : 역참조 - 현재 단어를 역으로 참조해서 반복되는 두 문자를 식별하기 위해서 사용.
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  // ^...+$ : 완전히 일치하는 것이 있는지, 그게 여러개 있는지.
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0,
  );
}
