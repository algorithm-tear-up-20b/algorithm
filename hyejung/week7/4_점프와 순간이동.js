/*
[PGS] 점프와 순간이동 /LV.2
*/

// 이진수를 구하는 것과 비슷한 규칙이 있다.
// reference
function solution(n) {
  let battery = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      battery++;
      n--;
    } else n /= 2;
  }
  return battery;
}

console.log(solution(5));

/*
* k칸 앞으로 점프 => 배터리 k만큼 사용
* 현재까지 온 거리 * 2 => 배터리 사용 X

N만큼 떨어진 거리를 갈 때 배터리 사용량의 최솟값 리턴

* 배터리 사용량을 1씩 늘려서 해당 칸에 도착할 수 있는지 확인? 

*/
