/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	통과 (0.17ms, 33.6MB)
테스트 4 〉	통과 (0.06ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.5MB)
테스트 6 〉	통과 (0.15ms, 33.5MB)
테스트 7 〉	통과 (0.17ms, 33.5MB)
테스트 8 〉	통과 (0.17ms, 33.5MB)
테스트 9 〉	통과 (0.18ms, 33.5MB)
테스트 10 〉	통과 (0.19ms, 33.6MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
테스트 12 〉	통과 (0.05ms, 33.6MB)
테스트 13 〉	통과 (0.07ms, 33.5MB)
*/

function solution(brown, yellow) {
  // 1. 제곱근 절반범위의 약수를 구한다.
  // 2. 약수의 쌍으로 필요한 brown의 값을 출력한다.
  // 3. brown과 문제에서 주어진 brown의 개수가 같으면 종료한다.
  // 4. yellow가20개이면 가로세로 2,10 4,5 일경우도있으므로 해당크기와 brown의 개수가 같을때가 답.

  let divisor = Math.floor(Math.sqrt(yellow));
  for (let i = 1; i <= divisor; i++) {
    //yellow의 가로 : row , 세로 : i
    //감싸려면 row *2 i*2 +4만큼 필요
    let row = yellow / i;
    if (brown === (row + i + 2) * 2) return [row + 2, i + 2];
  }
}
