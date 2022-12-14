/*
[PGS] H-Index /LV.2
통과 여부 : O
*/

// [ 0, 1, 3, 5, 6 ]
function solution(citations) {
  let answer = 0;
  // 오름차순 정렬 =>
  const sorted = citations.sort((a, b) => a - b);
  const n = sorted.length;
  for (let i = 0; i < n; i++) {
    // 각 반복에서 비교할만한 h의 값은 n-i 이다.
    // h번 이상 인용된 것이 h개 이상 있어야 하기 때문에, h 값을 n-i 로 두면 특정 값 이상이면서, 갯수가 특정 값 보다 많다는 두 가지 조건을 동시에 충족할 수 있다. 이 특정 값이 n - i 가 되는 것.
    let h = n - i;
    if (sorted[i] >= h) {
      answer = h;
      break;
    }
  }
  return answer;
}

console.log(solution([10000, 9999, 9998, 9997, 9996]));

/*
[문제]
* 논문 n 편 중 h번 이상 인용된 논문이 h편 이상, 나머지가 h번 이하로 인용되었다면 그 h 값을 리턴
* 기준이 되는 값을 찾으라는건가? 

* h번 이상 인용된 논문이 h편 이상 => 논문이 인용된 횟수가 h번 이상이면서 논문의 갯수가 h개 이상.

- 나눠서 계산하느냐, 1씩 더해가면서 계산하느냐? 
- 각 논문의 인용횟수가 중요하므로 값을 더해서 나누는 것은 안됨
그러면...

// 1번 접근 : fail
1. 내림차순이 아니고 오름차순 정렬
2. 0부터 시작해서 n까지 오름차순 반복
3. 현재 인덱스를 h 값이라고 봤을 때,
- 앞으로 남은 논문이 h 개 이상
- 나머지 논문이 h 이하
- 현재 h 값과 비교했을 때 현재 논문이 i 이상인지 h <= arr[h]
- 남은 논문이 h개 이상인지 h <= n - i

// 2번 접근 : 

*/
