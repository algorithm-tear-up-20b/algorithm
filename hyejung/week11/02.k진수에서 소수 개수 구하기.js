/*
[PGS] k진수에서 소수 개수 구하기 /LV.2 / 30분
*/

/*
[문제]
- 양의 정수 n이 주어짐
- 이 숫자를 k 진수로 바꿨을 때 조건에 맞는 소수가 몇개?

조건
1. 0P0 => 양쪽에 0이 있음
2. P0 => 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없음
3. 0P => 왼쪽에만 0이 있고 오른쪽에는 없음
4. P => 양쪽에 아무것도 없음
5. 단 P 는 각 자릿수에 0을 포함하지 않는 소수
ex) 101 은 P가 될 수 없음

[예시]
437674를 3진수로 바꾸면 211020101011
10진법 기준으로 조건에 맞는 소수 211, 2, 11

[접근]
1. 주어진 수를 K진법으로 변환
2. 0을 기준으로 split
3. 하나씩 돌면서 소수인지 판별
4. 소수면 하나씩 카운트

*/

function solution(n, k) {
  let count = 0;

  const translated = n.toString(k).split('0');

  translated.forEach(num => {
    num = +num;
    // 숫자가 2를 넘는 경우에만 isPrime 호출
    if (num >= 2 && isPrime(num)) count++;
  });

  return count;
}

function isPrime(num) {
  if (num === 2) return true;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(solution(437674, 3));

/*
테스트 1 〉	통과 (10.53ms, 37MB)
테스트 2 〉	통과 (0.07ms, 33.5MB)
테스트 3 〉	통과 (0.07ms, 33.6MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33.5MB)
테스트 6 〉	통과 (0.07ms, 33.5MB)
테스트 7 〉	통과 (0.07ms, 33.6MB)
테스트 8 〉	통과 (0.07ms, 33.4MB)
테스트 9 〉	통과 (0.07ms, 33.6MB)
테스트 10 〉	통과 (0.07ms, 33.5MB)
테스트 11 〉	통과 (0.07ms, 31.4MB)
테스트 12 〉	통과 (0.07ms, 31.2MB)
테스트 13 〉	통과 (0.07ms, 33.4MB)
테스트 14 〉	통과 (0.07ms, 33.4MB)
테스트 15 〉	통과 (0.07ms, 33.4MB)
테스트 16 〉	통과 (0.07ms, 33.5MB)
*/
