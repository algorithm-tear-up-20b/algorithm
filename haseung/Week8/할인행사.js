const solution = (want, number, discount) => {
  // 원하는 제품과 수량이 할인하는 날짜와 '10일 연속'으로 일치할 경우에 맞춰서 회원가입

  // 입력
  // want - 원하는 제품을 나타내는 문자열 배열
  // number - 원하는 제품의 수량을 나타내는 정수 배열
  // discount - 할인하는 제품을 나타내는 문자열 배열

  // 출력
  // 회원등록시 원하는 제품을 모두 할인받을 수 있는 회원등록 날짜의 총 일수

  let answer = 0;
  const isMatch = (discount) => {
    const wantMap = new Map();
    discount.forEach((dis) => wantMap.set(dis, (wantMap.get(dis) || 0) + 1));
    return want.every((item, index) => wantMap.get(item) == number[index]);
  };

  discount.forEach((_, j) => {
    if (j <= discount.length - 10) {
      const idx = discount.slice(j, j + 10);
      if (isMatch(idx)) answer++;
    }
  });
  return answer;
};

/*정확성  테스트
테스트 1 〉	통과 (9.92ms, 37.7MB)
테스트 2 〉	통과 (45.64ms, 41.4MB)
테스트 3 〉	통과 (12.11ms, 38.9MB)
테스트 4 〉	통과 (39.66ms, 40.1MB)
테스트 5 〉	통과 (29.18ms, 39.4MB)
테스트 6 〉	통과 (7.99ms, 37.5MB)
테스트 7 〉	통과 (19.07ms, 39.3MB)
테스트 8 〉	통과 (51.16ms, 43.4MB)
테스트 9 〉	통과 (12.31ms, 39.1MB)
테스트 10 〉	통과 (33.50ms, 40.8MB)
테스트 11 〉	통과 (8.20ms, 38.8MB)
테스트 12 〉	통과 (0.18ms, 33.5MB)
*/
