function solution(citations) {
  citations.sort((a, b) => b - a);

  let answers = 0;
  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      answers++;
    }
  }

  return answers;
}

/*정확성  테스트
테스트 1 〉	통과 (0.27ms, 33.5MB)
테스트 2 〉	통과 (0.37ms, 33.5MB)
테스트 3 〉	통과 (0.31ms, 33.5MB)
테스트 4 〉	통과 (0.28ms, 33.6MB)
테스트 5 〉	통과 (0.36ms, 33.4MB)
테스트 6 〉	통과 (0.38ms, 33.6MB)
테스트 7 〉	통과 (0.20ms, 33.4MB)
테스트 8 〉	통과 (0.13ms, 33.4MB)
테스트 9 〉	통과 (0.19ms, 33.4MB)
테스트 10 〉	통과 (0.23ms, 33.4MB)
테스트 11 〉	통과 (0.39ms, 33.4MB)
테스트 12 〉	통과 (0.17ms, 33.5MB)
테스트 13 〉	통과 (0.40ms, 33.5MB)
테스트 14 〉	통과 (0.36ms, 33.6MB)
테스트 15 〉	통과 (0.39ms, 33.4MB)
테스트 16 〉	통과 (0.05ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
