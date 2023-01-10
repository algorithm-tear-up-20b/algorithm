function solution(number, limit, power) {
  const numberArray = [];

  for (let i = 1; i <= number; i++) {
    let divisor = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) divisor += 1;
    }
    numberArray.push(divisor + 1);
  }
  return numberArray.map((n) => (n > limit ? power : n)).reduce((acc, cur) => acc + cur, 0);
}

/*정확성  테스트
테스트 1 〉	통과 (117.32ms, 37.1MB)
테스트 2 〉	통과 (7.60ms, 37MB)
테스트 3 〉	통과 (3.65ms, 36.9MB)
테스트 4 〉	통과 (10.13ms, 36.8MB)
테스트 5 〉	통과 (4.25ms, 36.9MB)
테스트 6 〉	통과 (80.26ms, 37.3MB)
테스트 7 〉	통과 (8.14ms, 37MB)
테스트 8 〉	통과 (5.05ms, 36.9MB)
테스트 9 〉	통과 (98.79ms, 37.2MB)
테스트 10 〉	통과 (3.63ms, 36.9MB)
테스트 11 〉	통과 (6969.44ms, 38.7MB)
테스트 12 〉	통과 (7508.00ms, 38.8MB)
테스트 13 〉	통과 (7211.05ms, 38.7MB)
테스트 14 〉	통과 (7493.80ms, 38.8MB)
테스트 15 〉	통과 (7708.54ms, 38.7MB)
테스트 16 〉	통과 (8019.66ms, 38.8MB)
테스트 17 〉	통과 (0.08ms, 33.4MB)
테스트 18 〉	통과 (8103.17ms, 38.8MB)
테스트 19 〉	통과 (7.29ms, 36.9MB)
테스트 20 〉	통과 (7.28ms, 37MB)
테스트 21 〉	통과 (0.06ms, 33.4MB)
테스트 22 〉	통과 (0.07ms, 33.4MB)
테스트 23 〉	통과 (0.17ms, 33.5MB)
테스트 24 〉	통과 (8155.93ms, 38.7MB)
테스트 25 〉	통과 (7883.62ms, 38.8MB)
테스트 26 〉	통과 (2.83ms, 36.8MB)
테스트 27 〉	통과 (2.82ms, 37.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/

//다른 사람 풀이

function solution(number, limit, power) {
  var answer = 0;
  for (let n = 1; n <= number; n++) {
    let count = 0;
    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++;
      else if (n % j == 0) count += 2;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}
