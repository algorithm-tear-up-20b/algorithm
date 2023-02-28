/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (7.27ms, 37.4MB)
테스트 2 〉	통과 (29.84ms, 40MB)
테스트 3 〉	통과 (10.39ms, 37.4MB)
테스트 4 〉	통과 (20.64ms, 42MB)
테스트 5 〉	통과 (18.90ms, 39MB)
테스트 6 〉	통과 (6.83ms, 37.2MB)
테스트 7 〉	통과 (13.26ms, 39MB)
테스트 8 〉	통과 (29.04ms, 43.3MB)
테스트 9 〉	통과 (11.22ms, 37.6MB)
테스트 10 〉	통과 (19.22ms, 39.4MB)
테스트 11 〉	통과 (8.24ms, 37.2MB)
테스트 12 〉	통과 (0.08ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(want, number, discount) {
  let count = 0;

  function isPossible(arr) {
    for (let i = 0; i < want.length; i++) {
      if (arr.filter((el) => el === want[i]).length < number[i]) return false;
    }
    return true;
  }

  if (!isPossible(discount)) return 0;

  for (let i = 0; i < discount.length - 9; i++) {
    const tenItems = discount.slice(i, i + 10);
    if (isPossible(tenItems)) count++;
  }

  return count;
}
