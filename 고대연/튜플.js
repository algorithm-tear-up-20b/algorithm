/*
정확성  테스트
테스트 1 〉	통과 (0.30ms, 33.5MB)
테스트 2 〉	통과 (0.29ms, 33.6MB)
테스트 3 〉	통과 (0.23ms, 33.6MB)
테스트 4 〉	통과 (0.45ms, 33.5MB)
테스트 5 〉	통과 (0.53ms, 33.6MB)
테스트 6 〉	통과 (0.91ms, 33.8MB)
테스트 7 〉	통과 (15.26ms, 40.7MB)
테스트 8 〉	통과 (48.49ms, 53.3MB)
테스트 9 〉	통과 (30.64ms, 45.1MB)
테스트 10 〉	통과 (52.67ms, 54.4MB)
테스트 11 〉	통과 (77.74ms, 58.7MB)
테스트 12 〉	통과 (189.84ms, 78.3MB)
테스트 13 〉	통과 (164.78ms, 77.2MB)
테스트 14 〉	통과 (170.78ms, 79.4MB)
테스트 15 〉	통과 (0.26ms, 33.4MB)
  빈도수를 기준으로 내림차순으로 정렬
  20분
*/

function solution(s) {
  //'{', '}' 제거
  let regex = new RegExp(/({||})+/g);
  s = s.replace(regex, "").split(",");

  //빈도수 측정
  let obj = {};
  for (let v of s) {
    obj[v] = (obj[v] || 0) + 1;
  }

  //빈도수 기준으로 정렬뒤 원하는값으로 가공
  let arr = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0] * 1);

  return arr;
}
