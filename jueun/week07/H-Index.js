function solution(citations) {
  let hIndex = 0;
  let sortedCitations = citations.slice().sort((a, b) => b - a);
  for (let i = 0; i < sortedCitations.length; i++) {
    if (
      sortedCitations[i] >= i + 1 &&
      sortedCitations[i] >= sortedCitations.length - i
    ) {
      hIndex++;
    } else {
      break;
    }
  }
  return hIndex;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.27ms, 33.6MB)
테스트 2 〉	통과 (0.37ms, 33.5MB)
테스트 3 〉	통과 (0.34ms, 33.5MB)
테스트 4 〉	통과 (0.35ms, 33.4MB)
테스트 5 〉	통과 (0.36ms, 33.6MB)
테스트 6 〉	통과 (0.39ms, 33.5MB)
테스트 7 〉	통과 (0.22ms, 33.5MB)
테스트 8 〉	통과 (0.18ms, 33.5MB)
테스트 9 〉	통과 (0.18ms, 33.5MB)
테스트 10 〉	통과 (0.37ms, 33.5MB)
테스트 11 〉	통과 (0.61ms, 33.5MB)
테스트 12 〉	통과 (0.25ms, 33.6MB)
테스트 13 〉	통과 (0.44ms, 33.6MB)
테스트 14 〉	통과 (0.44ms, 33.4MB)
테스트 15 〉	통과 (0.40ms, 33.5MB)
테스트 16 〉	통과 (0.05ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
