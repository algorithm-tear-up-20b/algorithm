/*
[PGS] 카펫 /LV.2/1시간
풀이 시간 : 1시간
통과 여부 : O
*/
function solution(brown, yellow) {
  let answer = [];

  let sum = brown + yellow;
  let height = 3;
  let width = parseInt(sum / height);

  while (height <= width) {
    if ((height - 2) * (width - 2) === yellow) {
      return [width, height];
    } else {
      height++;
      width = parseInt(sum / height);
    }
  }
  return answer;
}

console.log(solution(24, 24));

/*
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.17ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (0.15ms, 33.6MB)
테스트 7 〉	통과 (0.24ms, 33.4MB)
테스트 8 〉	통과 (0.24ms, 33.5MB)
테스트 9 〉	통과 (0.23ms, 33.5MB)
테스트 10 〉	통과 (0.17ms, 33.4MB)
테스트 11 〉	통과 (0.04ms, 33.5MB)
테스트 12 〉	통과 (0.04ms, 33.6MB)
테스트 13 〉	통과 (0.05ms, 33.4MB)

*/
