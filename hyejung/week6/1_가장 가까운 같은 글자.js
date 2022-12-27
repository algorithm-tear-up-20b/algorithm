/*
[PGS] 가장 가까운 같은 글자 /LV.1/10분
풀이 시간 :10분
통과 여부 : O
*/
function solution(s) {
  const answer = [];
  const visited = [];
  for (let char of s) {
    const index = visited.indexOf(char);
    answer.push(index === -1 ? index : index + 1);
    visited.unshift(char);
  }
  return answer;
}

console.log(solution('foobar'));

/*
1. indexOf 를 활용하자 => 찾는 문자열이 없으면 -1, 있으면 해당 문자열의 첫번째 인덱스를 반환

2. 현재 탐색중인 문자열을 떼어서 다른 배열에 unshift 하면, 탐색하면서 지나온 값들 중 최신 값의 인덱스를 찾을 수 있다.

3. 0부터 시작하는 인덱스 번호가 아니라 몇 칸 앞에 있다는 의미이기 때문에 indexOf 로 찾은값 +1 을 해주어야 할 것 같다.


*/
