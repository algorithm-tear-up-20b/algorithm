/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.5MB)
테스트 2 〉	통과 (0.19ms, 33.5MB)
테스트 3 〉	통과 (0.07ms, 33.4MB)
테스트 4 〉	통과 (0.22ms, 33.5MB)
테스트 5 〉	통과 (0.25ms, 33.4MB)
테스트 6 〉	통과 (0.08ms, 33.5MB)
테스트 7 〉	통과 (0.16ms, 33.5MB)
테스트 8 〉	통과 (0.13ms, 33.4MB)
테스트 9 〉	통과 (0.08ms, 33.6MB)
테스트 10 〉	통과 (0.20ms, 33.5MB)
테스트 11 〉	통과 (0.19ms, 33.5MB)
테스트 12 〉	통과 (0.18ms, 33.4MB)
테스트 13 〉	통과 (0.08ms, 33.4MB)
테스트 14 〉	통과 (0.07ms, 33.5MB)
테스트 15 〉	통과 (0.07ms, 33.5MB)
테스트 16 〉	통과 (0.07ms, 33.4MB)
테스트 17 〉	통과 (0.07ms, 33.4MB)
테스트 18 〉	통과 (0.08ms, 33.4MB)
테스트 19 〉	통과 (0.09ms, 33.5MB)
테스트 20 〉	통과 (0.22ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(n, words) {
  let number = 0;
  let turn = 0;

  function lastChar(word) {
    return word[word.length - 1];
  }

  for (let i = 0; i < words.length; i++) {
    if (
      (words[i - 1] && lastChar(words[i - 1]) !== words[i][0]) ||
      words.slice(0, i).includes(words[i]) ||
      words[i].length === 1
    ) {
      number = (i + 1) % n === 0 ? n : (i + 1) % n;
      turn = (i + 1) % n === 0 ? (i + 1) / n : Math.floor((i + 1) / n) + 1;
      break;
    }
  }
  return [number, turn];
}

//다른 사람의 풀이
function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer =
      answer ||
      (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]
        ? idx
        : answer);
    return now[now.length - 1];
  }, "");

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}
