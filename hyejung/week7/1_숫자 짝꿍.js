/*
[PGS] 숫자 짝꿍 /LV.1
통과 여부 : O
*/

// 레퍼런스 참고 : 배열의 인덱스 활용
function solution(X, Y) {
  // 정답 문자열
  let answer = '';

  // 길이 10, 0으로 초기화된 두 배열
  const hashX = new Array(10).fill(0);
  const hashY = new Array(10).fill(0);

  // 원본 문자열로 인덱스에 접근하여 갯수 카운팅
  X.split('').forEach(item => hashX[item]++);
  Y.split('').forEach(item => hashY[item]++);

  // 배열 반복하며 겹치는 갯수만큼 answer 에 추가
  hashX.forEach((x, i) => {
    if (x && hashY[i]) {
      answer += String(i).repeat(Math.min(hashX[i], hashY[i]));
    }
  });

  // 공백이 아니면서 0으로만 이루어진 경우 0 리턴
  if (answer !== '' && +answer === 0) return '0';

  // 그 외에 정답 혹은 -1 리턴
  return answer.length ? [...answer].reverse().join('') : '-1';
}

function fail(X, Y) {
  // 정답이 들어갈 배열
  let answer = [];

  // X 와 Y 를 배열화한 뒤 내림차순 정렬
  const Xc = X.split('').sort((a, b) => b - a);
  const Yc = Y.split('').sort((a, b) => b - a);

  // 반복문을 돌면서 비교해주기 위해 길이가 더 긴 배열, 작은 배열로 나눔
  const larger = Xc.length > Yc.length ? Xc : Yc;
  const smaller = Xc.length <= Yc.length ? Xc : Yc;

  // 포인터 변수 선언
  let p1 = 0;
  let p2 = 0;

  // p1, p2 모두 배열을 끝까지 탐색하도록 반복문의 조건 설정
  while (p1 < smaller.length && p2 < larger.length) {
    // 같은 숫자가 나온 경우 포인터를 모두 이동한다.
    if (smaller[p1] === larger[p2]) {
      answer.push(smaller[p1]);
      p1++;
      p2++;
      continue;
    }
    // 서로 다른 숫자인 경우
    else {
      // p2를 우선해서 돌리고, 마지막에 다다른 경우 p1을 움직인다.
      if (p2 === larger.length - 1) p1++;
      else p2++;
    }
  }

  return answer;
}

console.log(solution('100', '2345'));

/*
* 3자리 이상의 두 정수 X,Y 에서 공통적으로 등장하면서 짝지어지는 수들을 가지고 만들 수 있는 가장 큰 정수를 리턴하는 문제.

1. 짝지어지는 정수를 찾아야 함
2. 내림차순 정렬 후 join, 숫자화하여 리턴

* 짝지어지는 정수를 찾을 때 최대한 효율적으로 탐색하여 찾아야 함.

// 1번 풀이 : 실패 ㅜㅜ
1. 두 수를 배열로 만들고 내림차순 정렬
2. 두 개의 포인터를 사용해 두 배열을 가리키며 탐색
- 포인터 1 : 작은 쪽 가리킴
- 포인터 2 : 큰 쪽 가리킴
- 포인터 1 === 포인터 2 => 둘 다 ++
- 포인터 1 !== 포인터 2 => 포인터 2++
3. answer 배열에 push 하면 자동적으로 큰 수 -> 작은 수 순서가 됨
4. return answer.length > 0 ? answer.join('').toString() : "-1"

=> 단순 투포인터로 돌리면 이미 탐색한 내용에 대해서 다시 되돌아가기가 복잡해짐.

*/
