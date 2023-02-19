// function solution(s) {
//   const answer = [];
//   s.slice(2, s.length - 2)
//     .split("},{")
//     .map((str) => str.split(",").map(Number))
//     .sort((a, b) => a.length - b.length)
//     .flatMap((arr) => {
//       arr.map((value) => {
//         if (!answer.includes(value)) answer.push(value);
//       });
//     });
//   return answer;
// }

function solution(s) {
  const answer = new Set();
  // 가장 바깥에 {{, }}을 제외하고 그 안에 },{ 패턴이 반복되므로
  // 우선 {{, }}를 제거하고 },{으로 구분하여 분리
  // 각 숫자가 얼마나 등장했는지 비교해보기 위해 Number로 형변환해서 map 돌리기
  // 이후에 sort 메소드 이용

  const sortedArr = s
    .slice(2, s.length - 2)
    .split("},{")
    .map((str) => str.split(",").map(Number))
    .sort((a, b) => a.length - b.length);

  sortedArr.forEach((arr) => {
    arr.forEach((value) => {
      answer.add(value);
    });
  });
  return Array.from(answer);
}

console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));

/*정확성  테스트
테스트 1 〉	통과 (0.10ms, 33.6MB)
테스트 2 〉	통과 (0.08ms, 33.6MB)
테스트 3 〉	통과 (0.08ms, 33.4MB)
테스트 4 〉	통과 (0.20ms, 33.5MB)
테스트 5 〉	통과 (0.48ms, 33.5MB)
테스트 6 〉	통과 (0.43ms, 33.5MB)
테스트 7 〉	통과 (3.72ms, 37MB)
테스트 8 〉	통과 (9.30ms, 38.1MB)
테스트 9 〉	통과 (5.16ms, 36.9MB)
테스트 10 〉	통과 (10.53ms, 38.2MB)
테스트 11 〉	통과 (14.61ms, 39MB)
테스트 12 〉	통과 (19.50ms, 42.5MB)
테스트 13 〉	통과 (25.34ms, 42.6MB)
테스트 14 〉	통과 (22.75ms, 42.9MB)
테스트 15 〉	통과 (0.09ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
