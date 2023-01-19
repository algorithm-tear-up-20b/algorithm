/*
[PGS] 푸드 파이트 대회/LV.1/20분
풀이 시간 : 15분
통과 여부 : O
점수 : +3
*/

/*
입력 : 오름차순 정수 배열 food, food[i]는 i번 음식의 수
출력 : 0을 기준으로 "오름차순 0 내림차순" 의 대칭 문자열
*/
function solution(food) {
  let left = [0];
  let leftStr = '';
  for (let i = 1; i < food.length; i++) {
    left.push(Math.floor(food[i] / 2));
  }
  for (let i = 1; i < left.length; i++) {
    leftStr += i.toString().repeat(left[i]);
  }

  let rightStr = leftStr.split('').reverse().join('');

  return leftStr + '0' + rightStr;
}

console.log(solution([1, 3, 4, 6]));

// 레퍼런스코드
function ref(food) {
  let res = '';
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + '0' + [...res].reverse().join('');
}
