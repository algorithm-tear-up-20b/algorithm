/*
[PGS] 영어 끝말잇기 /LV.2/30분
풀이 시간 :30분
통과 여부 : O
*/

function solution(n, words) {
  const answer = [0, 0];
  let prev = words[0];
  let turn = 1;

  for (let i = 1; i < words.length; i++) {
    const player = (i % n) + 1;
    // 이전 단어와 이어지지 않는 경우
    if (prev.slice(-1) !== words[i][0]) {
      // 틀린 사람 번호 및 몇번째 순서인지.
      return [player, turn];
    }
    // 중복된 단어를 말한 경우
    else if (words.indexOf(words[i]) !== i) {
      return [player, turn];
    }

    prev = words[i];
    if (player === n) turn++;
  }

  return answer;
}

console.log(
  solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']),
);

/*
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.15ms, 33.7MB)
테스트 3 〉	통과 (0.05ms, 33.5MB)
테스트 4 〉	통과 (0.14ms, 33.5MB)
테스트 5 〉	통과 (0.15ms, 33.6MB)
테스트 6 〉	통과 (0.09ms, 33.7MB)
테스트 7 〉	통과 (0.14ms, 33.5MB)
테스트 8 〉	통과 (0.05ms, 33.5MB)
테스트 9 〉	통과 (0.06ms, 33.7MB)
테스트 10 〉	통과 (0.15ms, 33.5MB)
테스트 11 〉	통과 (0.15ms, 33.6MB)
테스트 12 〉	통과 (0.15ms, 33.5MB)
테스트 13 〉	통과 (0.05ms, 33.6MB)
테스트 14 〉	통과 (0.07ms, 33.5MB)
테스트 15 〉	통과 (0.05ms, 33.5MB)
테스트 16 〉	통과 (0.05ms, 33.6MB)
테스트 17 〉	통과 (0.07ms, 33.6MB)
테스트 18 〉	통과 (0.06ms, 33.5MB)
테스트 19 〉	통과 (0.06ms, 33.5MB)
테스트 20 〉	통과 (0.25ms, 33.5MB)

*/
