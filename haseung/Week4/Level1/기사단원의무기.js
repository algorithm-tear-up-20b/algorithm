const getDivisors = (n) => {
  let divisors = 1;
  let divisible = 2;
  while (n > 1) {
    let exponent = 0;
    while (n % divisible === 0) {
      exponent++;
      n = n / divisible;
    }
    divisors *= exponent + 1;
    divisible++;
  }
  return divisors;
};

function solution(number, limit, power) {
  const numberArray = [];
  let count = 0;
  for (let i = 1; i <= number; i++) {
    let divisor = 0;
    numberArray.push(getDivisors(i));
  }
  return numberArray.map((n) => (n > limit ? power : n)).reduce((acc, cur) => acc + cur, 0);
}

/*정확성  테스트
테스트 1 〉	통과 (54.02ms, 36.9MB)
테스트 2 〉	통과 (6.07ms, 36.5MB)
테스트 3 〉	통과 (2.72ms, 36.5MB)
테스트 4 〉	통과 (7.38ms, 36.4MB)
테스트 5 〉	통과 (2.69ms, 36.5MB)
테스트 6 〉	통과 (51.13ms, 36.7MB)
테스트 7 〉	통과 (6.21ms, 36.4MB)
테스트 8 〉	통과 (3.97ms, 36.4MB)
테스트 9 〉	통과 (56.39ms, 36.9MB)
테스트 10 〉	통과 (2.87ms, 36.4MB)
테스트 11 〉	통과 (2896.49ms, 38.8MB)
테스트 12 〉	통과 (3101.57ms, 39MB)
테스트 13 〉	통과 (2792.63ms, 38.8MB)
테스트 14 〉	통과 (3075.78ms, 38.9MB)
테스트 15 〉	통과 (3252.94ms, 38.9MB)
테스트 16 〉	통과 (3336.62ms, 39.1MB)
테스트 17 〉	통과 (0.10ms, 33.4MB)
테스트 18 〉	통과 (3457.48ms, 38.9MB)
테스트 19 〉	통과 (5.48ms, 36.4MB)
테스트 20 〉	통과 (5.53ms, 36.4MB)
테스트 21 〉	통과 (0.08ms, 33.4MB)
테스트 22 〉	통과 (0.08ms, 33.5MB)
테스트 23 〉	통과 (0.16ms, 33.4MB)
테스트 24 〉	통과 (3187.25ms, 38.9MB)
테스트 25 〉	통과 (3342.14ms, 39MB)
테스트 26 〉	통과 (2.15ms, 36.4MB)
테스트 27 〉	통과 (2.16ms, 36.4MB)
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
