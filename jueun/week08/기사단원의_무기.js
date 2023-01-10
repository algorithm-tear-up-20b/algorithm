function solution(number, limit, power) {
  let weights = 0;
  let divisor;

  for (let i = 1; i <= number; i++) {
    divisor = getDivisor(i);
    if (divisor > limit) {
      weights += power;
    } else {
      weights += divisor;
    }
  }

  return weights;
}

const getDivisor = (num) => {
  let divisor = 0;

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisor++;
      if (num / i !== i) divisor++;
    }
  }

  return divisor;
};

// number:  1 ~ number까지의 약수 개수 -> [1, 2, ..., number의 약수 개수]
// limit:   공격력 제한수치
// power:   제한수치를 초과한 기사가 사용할 무기의 공격력

/*
정확성  테스트
테스트 1 〉	통과 (11.19ms, 36MB)
테스트 2 〉	통과 (2.58ms, 36.1MB)
테스트 3 〉	통과 (1.86ms, 35.9MB)
테스트 4 〉	통과 (2.32ms, 36.3MB)
테스트 5 〉	통과 (1.45ms, 37.1MB)
테스트 6 〉	통과 (7.01ms, 36.2MB)
테스트 7 〉	통과 (2.37ms, 36.2MB)
테스트 8 〉	통과 (2.14ms, 36.2MB)
테스트 9 〉	통과 (8.97ms, 35.9MB)
테스트 10 〉	통과 (1.91ms, 36.1MB)
테스트 11 〉	통과 (76.77ms, 36MB)
테스트 12 〉	통과 (86.58ms, 36.1MB)
테스트 13 〉	통과 (80.64ms, 36.1MB)
테스트 14 〉	통과 (81.27ms, 36.2MB)
테스트 15 〉	통과 (85.86ms, 35.9MB)
테스트 16 〉	통과 (87.81ms, 36.1MB)
테스트 17 〉	통과 (0.06ms, 33.6MB)
테스트 18 〉	통과 (89.23ms, 36.3MB)
테스트 19 〉	통과 (2.93ms, 35.8MB)
테스트 20 〉	통과 (3.26ms, 35.9MB)
테스트 21 〉	통과 (0.05ms, 33.6MB)
테스트 22 〉	통과 (0.08ms, 33.6MB)
테스트 23 〉	통과 (0.19ms, 33.6MB)
테스트 24 〉	통과 (96.45ms, 36.2MB)
테스트 25 〉	통과 (94.17ms, 36MB)
테스트 26 〉	통과 (1.43ms, 36MB)
테스트 27 〉	통과 (2.05ms, 36MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
