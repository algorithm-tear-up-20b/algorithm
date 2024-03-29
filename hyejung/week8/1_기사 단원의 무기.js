/*
[PGS] 기사 단원의 무기 /LV.1 / 40분
*/

/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (9.07ms, 35.4MB)
테스트 2 〉	통과 (2.19ms, 35.3MB)
테스트 3 〉	통과 (2.24ms, 35.2MB)
테스트 4 〉	통과 (3.11ms, 35.3MB)
테스트 5 〉	통과 (2.20ms, 35.3MB)
테스트 6 〉	통과 (5.92ms, 35.3MB)
테스트 7 〉	통과 (2.31ms, 35.3MB)
테스트 8 〉	통과 (1.95ms, 35.3MB)
테스트 9 〉	통과 (5.83ms, 35.4MB)
테스트 10 〉	통과 (2.24ms, 35.2MB)
테스트 11 〉	통과 (94.82ms, 36.7MB)
테스트 12 〉	통과 (101.73ms, 36.8MB)
테스트 13 〉	통과 (100.87ms, 36.8MB)
테스트 14 〉	통과 (123.52ms, 36.8MB)
테스트 15 〉	통과 (106.15ms, 37MB)
테스트 16 〉	통과 (109.18ms, 37MB)
테스트 17 〉	통과 (0.10ms, 33.4MB)
테스트 18 〉	통과 (109.62ms, 37.1MB)
테스트 19 〉	통과 (2.06ms, 35.3MB)
테스트 20 〉	통과 (2.11ms, 35.3MB)
테스트 21 〉	통과 (0.10ms, 33.4MB)
테스트 22 〉	통과 (0.09ms, 33.4MB)
테스트 23 〉	통과 (0.17ms, 33.5MB)
테스트 24 〉	통과 (108.00ms, 37.1MB)
테스트 25 〉	통과 (115.64ms, 37MB)
테스트 26 〉	통과 (1.49ms, 35.2MB)
테스트 27 〉	통과 (1.13ms, 35.3MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/

function getTotalDivisor(num) {
  let count = 0;
  // 제곱근이 될 때까지 반복
  for (let i = 1; i * i <= num; i++) {
    // 만약 제곱근이 약수라면 1개만 카운트
    if (i * i === num) count++;
    // 제곱근이 아니면서 나누어 떨어진다면 2개씩 카운트
    else if (num % i === 0) count += 2;
  }
  return count;
}

function solution(number, limit, power) {
  // 기사의 수 만큼 배열을 만들고 약수의 갯수를 구해줌
  // 각 값이 limit 을 초과하는 경우 power로 치환
  const powers = Array.from({length: number + 1}, (_, i) =>
    getTotalDivisor(i),
  ).map(v => (v > limit ? power : v));

  // 합산하여 return
  return powers.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(5, 3, 2));

/*
[문제]
- 1 ~ number 까지의 기사가 있음.
- 각 기사는 자신의 번호에 "약수 개수"에 해당하는 공격력의 무기 구매 가능
- limit 초과의 공격력을 갖는 경우 지정된 power에 해당하는 무기를 가짐.
- 전체 기사의 무기 공격력의 합을 구해야 함.

[접근 1]
- 1부터 number 까지 숫자 배열을 만들고,각 수의 약수의 갯수를 구한다.
- 해당 약수 갯수 배열을 loop 하여 limit 초과 숫자는 power로 치환하여 합산한다.
- 합산된 결과물을 return 한다.

* 약수란 어떤 수와 나누어 떨어지는 수를 말함.
* 4의 약수는 1, 2, 4가 있다.

* 약수의 갯수를 구하는 알고리즘
1. 1 ~ num 까지 loop하여 해당 수와 나누어 떨어지는지 여부를 확인한다.
2. 1 ~ √num 까지 loop 하여 나누어 떨어지는 수를 구한다. 해당 수는 약수의 절반의 갯수이므로, 구한 값의 *2 하여 전체 약수 갯수를 구할 수 있다.
- 10의 약수 1,2,5,10 => 10/1 => 10, 10/2 => 5 
- 즉, 약수를 구하고 싶은 수를 n, 그 약수 중 하나를 m 이라고 할 때, 다른 나머지 약수는 n/m 이 되므로, loop 종료 기준을 제곱근까지로 하면 된다. (소수 구하기와 마찬가지임)

* 제곱근까지 반복을 할 때 i <= Math.sqrt(num) 과 i*i <= num 의 차이는 뭘까.왜 i * i <= num의 조건을 주면 제곱근까지 돌게되는거지
* 아!!! 제곱근 => 제곱해서 num이 되는 수
* 16의 제곱근 4, 4 * 4 = 16이기 때문에 4까지만 반복하는 것...

# 메서드를 사용한 풀이가 2중 for loop보다 아주 약간 더 오래걸림
*/
