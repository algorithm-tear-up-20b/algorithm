/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (2.06ms, 37MB)
테스트 2 〉	통과 (6.46ms, 38.7MB)
테스트 3 〉	통과 (7.99ms, 38.6MB)
테스트 4 〉	통과 (1.56ms, 36.6MB)
테스트 5 〉	통과 (3.55ms, 38.5MB)
테스트 6 〉	통과 (4.44ms, 38.3MB)
테스트 7 〉	통과 (1.74ms, 36.6MB)
테스트 8 〉	통과 (0.64ms, 33.7MB)
테스트 9 〉	통과 (0.57ms, 33.5MB)
테스트 10 〉	통과 (5.79ms, 38.4MB)
테스트 11 〉	통과 (2.08ms, 37MB)
테스트 12 〉	통과 (0.89ms, 33.7MB)
테스트 13 〉	통과 (2.98ms, 38.4MB)
테스트 14 〉	통과 (4.62ms, 38.7MB)
테스트 15 〉	통과 (2.38ms, 37.1MB)
테스트 16 〉	통과 (3.09ms, 37.8MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function getValue(arr1, arr2, i, j) {
  let value = 0;
  for (let k = 0; k < arr2.length; k++) {
    value += arr1[i][k] * arr2[k][j];
  }
  return value;
}

function solution(arr1, arr2) {
  const col = arr1.length;
  const row = arr2[0].length;
  let answer = [...Array(col)].map((el) => Array(row));
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      answer[i][j] = getValue(arr1, arr2, i, j);
    }
  }
  return answer;
}

//다른 사람의 풀이
// 언제쯤 이렇게 풀 수 있을까요? ㅎㅎ..
function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (2.45ms, 37.2MB)
테스트 2 〉	통과 (14.50ms, 38.6MB)
테스트 3 〉	통과 (12.31ms, 38.8MB)
테스트 4 〉	통과 (0.61ms, 33.6MB)
테스트 5 〉	통과 (8.80ms, 38.8MB)
테스트 6 〉	통과 (5.26ms, 38.6MB)
테스트 7 〉	통과 (0.54ms, 33.6MB)
테스트 8 〉	통과 (0.34ms, 33.6MB)
테스트 9 〉	통과 (0.28ms, 33.6MB)
테스트 10 〉	통과 (8.23ms, 38.6MB)
테스트 11 〉	통과 (3.06ms, 37.1MB)
테스트 12 〉	통과 (0.37ms, 33.7MB)
테스트 13 〉	통과 (6.38ms, 38.8MB)
테스트 14 〉	통과 (12.10ms, 39MB)
테스트 15 〉	통과 (3.75ms, 36MB)
테스트 16 〉	통과 (2.17ms, 37.3MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
