function solution(arr1, arr2) {
  const [row, col] = [arr1.length, arr2[0].length]; //3 2
  let answer = new Array(row);
  for (let i = 0; i < row; i++) {
    answer[i] = new Array(col);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      answer[i][j] = arr1[i].reduce((acc, val, index) => acc + val * arr2[index][j], 0);
    }
  }
  return answer;
}

/*정확성  테스트
테스트 1 〉	통과 (1.54ms, 37.1MB)
테스트 2 〉	통과 (10.78ms, 38.4MB)
테스트 3 〉	통과 (14.19ms, 38.7MB)
테스트 4 〉	통과 (1.21ms, 33.6MB)
테스트 5 〉	통과 (8.51ms, 38.5MB)
테스트 6 〉	통과 (5.93ms, 38.2MB)
테스트 7 〉	통과 (0.65ms, 33.5MB)
테스트 8 〉	통과 (0.41ms, 33.5MB)
테스트 9 〉	통과 (0.39ms, 33.5MB)
테스트 10 〉	통과 (9.44ms, 38.4MB)
테스트 11 〉	통과 (1.96ms, 37.1MB)
테스트 12 〉	통과 (0.58ms, 33.7MB)
테스트 13 〉	통과 (6.95ms, 38.5MB)
테스트 14 〉	통과 (16.57ms, 38.6MB)
테스트 15 〉	통과 (4.02ms, 36.1MB)
테스트 16 〉	통과 (2.65ms, 37.2MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
