/*
[PGS] 과일 장수 /LV.1/15분
풀이 시간 :15분
통과 여부 : O
*/

function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  for (let i = m - 1; i < score.length; i += m) {
    answer += score[i] * m;
  }
  return answer;
}
console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));

/*
1. 한 상자에서 최대 점수를 얻게하려면 어떻게 해야하지... 최소 점수와 최대 점수의 차가 최대한 적게 나야함. 

2. 1번의 조합을 차출하고 남은 값들로 그 다음 조합을 만들어야함.

3. score 배열의 length 가 m보다 작아질 때까지...

그러면... 아래와 같이 해볼 수 있겠다.
1. score 배열을 내림차순으로 정렬
2. m의 배수만큼 score 배열을 반복하여 해당 인덱스의 값 * m
3. 이를 answer에 누적합산하여 리턴
*/
