/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.07ms, 33.4MB)
테스트 2 〉	통과 (0.19ms, 33.4MB)
테스트 3 〉	통과 (0.20ms, 33.4MB)
테스트 4 〉	통과 (0.32ms, 33.7MB)
테스트 5 〉	통과 (5.68ms, 38.1MB)
테스트 6 〉	통과 (0.75ms, 37.2MB)
테스트 7 〉	통과 (5.43ms, 38.2MB)
테스트 8 〉	통과 (0.65ms, 37MB)
테스트 9 〉	통과 (4.98ms, 37.9MB)
테스트 10 〉	통과 (0.45ms, 33.7MB)
테스트 11 〉	통과 (5.05ms, 38MB)
테스트 12 〉	통과 (0.06ms, 33.5MB)
테스트 13 〉	통과 (0.06ms, 33.5MB)
테스트 14 〉	통과 (0.25ms, 33.5MB)
테스트 15 〉	통과 (0.06ms, 33.4MB)
테스트 16 〉	통과 (0.17ms, 33.5MB)
테스트 17 〉	통과 (0.19ms, 33.4MB)
테스트 18 〉	통과 (0.43ms, 33.6MB)
테스트 19 〉	통과 (0.52ms, 33.7MB)
테스트 20 〉	통과 (0.23ms, 33.5MB)
테스트 21 〉	통과 (0.20ms, 33.5MB)
테스트 22 〉	통과 (0.88ms, 37.3MB)
테스트 23 〉	통과 (0.24ms, 33.5MB)
테스트 24 〉	통과 (0.30ms, 33.6MB)
테스트 25 〉	통과 (0.30ms, 33.6MB)
테스트 26 〉	통과 (0.29ms, 33.4MB)
테스트 27 〉	통과 (0.28ms, 33.6MB)
테스트 28 〉	통과 (0.29ms, 33.6MB)
테스트 29 〉	통과 (0.06ms, 33.4MB)
테스트 30 〉	통과 (5.13ms, 38.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(s) {
  let result = [];
  const indexObj = {};
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      result.push(-1);
    } else {
      const distance = i - indexObj[s[i]];
      result.push(distance);
    }
    indexObj[s[i]] = i;
  }
  return result;
}

//다른 사람의 풀이

//통과 시간 매우 짧음

function solution(s) {
  const hash = {};

  // [...s]로 배열 만드는거 충격...처음 알았다.
  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}
