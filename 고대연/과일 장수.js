/*
정확성  테스트
테스트 1 〉	통과 (0.16ms, 33.7MB)
테스트 2 〉	통과 (0.08ms, 33.5MB)
테스트 3 〉	통과 (0.17ms, 33.7MB)
테스트 4 〉	통과 (0.16ms, 33.5MB)
테스트 5 〉	통과 (0.23ms, 33.5MB)
테스트 6 〉	통과 (2.50ms, 39.8MB)
테스트 7 〉	통과 (2.52ms, 38MB)
테스트 8 〉	통과 (0.78ms, 33.9MB)
테스트 9 〉	통과 (2.46ms, 38MB)
테스트 10 〉	통과 (2.45ms, 39.1MB)
테스트 11 〉	통과 (8.16ms, 68.9MB)
테스트 12 〉	통과 (9.10ms, 68.9MB)
테스트 13 〉	통과 (9.16ms, 68.9MB)
테스트 14 〉	통과 (8.56ms, 68.8MB)
테스트 15 〉	통과 (8.83ms, 68.8MB)
테스트 16 〉	통과 (0.08ms, 33.5MB)
테스트 17 〉	통과 (0.08ms, 33.5MB)
테스트 18 〉	통과 (0.22ms, 33.5MB)
테스트 19 〉	통과 (0.16ms, 33.5MB)
테스트 20 〉	통과 (0.18ms, 33.5MB)
테스트 21 〉	통과 (0.08ms, 33.5MB)
테스트 22 〉	통과 (0.10ms, 33.5MB)
테스트 23 〉	통과 (0.08ms, 33.5MB)
테스트 24 〉	통과 (0.08ms, 33.5MB)
*/
/*
  최대 이익을 남기려면 최상품 사과부터 담아야 한다.
  이때 최상품 사과가 남으면 다음 상자에 담고
  부족하면 다음 등급사과에 넘겨서 같이 계산시킨다.
*/
function solution(k, m, score) {
  //arr를 k크기, 0으로 초기화
  const arr = Array.from({ length: k }, (_) => 0);

  for (let i = 0; i < score.length; i++) {
    //1 -> 0번 인덱스
    //사과의 등급을 index, 값을 개수로 대입
    arr[--score[i]]++;
  }


  let remainder = 0;
  let total = 0;
  //등급높은 사과부터 계산
  for (let i = arr.length - 1; i >= 0; i--) {
    let value = arr[i] + remainder;
    //몫만큼 담을수 있고 나머지는 다음 등급과 계산
    let quotient = Math.floor(value / m);
    total += quotient * m * (i + 1);
    remainder = value % m;
  }
  return total;
}
