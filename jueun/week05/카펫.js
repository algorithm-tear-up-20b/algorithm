function solution(brown, yellow) {
  let rowCol = brown / 2 - 2;
  let row = rowCol - 1,
    col = 1;

  while (true) {
    if (row * col === yellow) return [row + 2, col + 2];
    row--, col++;
  }

  return;
}

// brown의 24 / 2 - 2 === 10으로 노랑의 가로 세로를 정하면

// 9 1
// 8 2
// 7 3
// 6 4 === 24 (yellow 당첨) -> return [6+2, 4+2]
// 5 5

/*
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.03ms, 33.6MB)
테스트 3 〉	통과 (0.16ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.12ms, 33.5MB)
테스트 7 〉	통과 (0.12ms, 33.5MB)
테스트 8 〉	통과 (0.13ms, 33.4MB)
테스트 9 〉	통과 (0.14ms, 33.5MB)
테스트 10 〉	통과 (0.14ms, 33.6MB)
테스트 11 〉	통과 (0.03ms, 33.4MB)
테스트 12 〉	통과 (0.05ms, 33.6MB)
테스트 13 〉	통과 (0.04ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
