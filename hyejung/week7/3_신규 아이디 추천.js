/*
[PGS] 신규 아이디 추천 /LV.1
통과 여부 : O
*/

function solution(new_id) {
  let answer = '';

  // 1. 소문자 치환
  answer = new_id.toLowerCase();

  // 2. 소문자, -, _, . 제외한 모든 문자 제거
  let reg1 = /[`~!@#$%^&*()|+=?;:'"<>,\{\}\[\]\/]/g;
  answer = answer.replace(reg1, '');

  // 3. 마침표 연속 2개 => 1개로
  const answerArr = [...answer];
  answerArr.forEach((s, i) => {
    if (s === '.' && (answerArr[i - 1] === '.' || answerArr[i + 1] === '.')) {
      answerArr[i] = '';
    }
  });
  answer = answerArr.join('');
  // 4. 마침표가 처음,끝 => 둘 다 제거
  if (answer[0] === '.') answer = answer.slice(1);
  if (answer[answer.length - 1] === '.') answer = answer.slice(0, -1);

  // 5. 빈 문자열 => a 대입
  if (answer === '') answer = 'a';

  // 6. 16자 이상 => 첫 15글자 이외의 나머지 문자열 제거
  if (answer.length > 15) answer = answer.slice(0, 15);
  // 6-1. 자른 후에도 마침표가 있다면 잘라야함.
  if (answer[answer.length - 1] === '.') answer = answer.slice(0, -1);

  // 7. 길이 2 이하 => 마지막 문자를 길이 3이 될 때까지 반복
  if (answer.length < 3)
    answer += answer[answer.length - 1].repeat(3 - answer.length);
  return answer;
}
console.log(solution('-.~!@#$%&*()=+[{]}:?,<>/.-'));

// 메서드 체이닝을 활용한 레퍼런스 코드
function ref(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15)
    .replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
