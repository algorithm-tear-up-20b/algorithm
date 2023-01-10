function solution(arr1, arr2) {
  const product = [];

  const m = arr1.length,
    k = arr1[0].length,
    n = arr2[0].length;

  for (let i = 0; i < m; i++) {
    product.push([]);
    for (let j = 0; j < k; j++) {
      for (let l = 0; l < n; l++) {
        if (product[i][l] === undefined) product[i][l] = 0;
        product[i][l] += arr1[i][j] * arr2[j][l];
      }
    }
  }

  return product;
}

/*
정확성  테스트
테스트 1 〉	통과 (4.74ms, 37.3MB)
테스트 2 〉	통과 (11.45ms, 39.3MB)
테스트 3 〉	통과 (14.30ms, 39.2MB)
테스트 4 〉	통과 (4.38ms, 37.2MB)
테스트 5 〉	통과 (9.96ms, 39.2MB)
테스트 6 〉	통과 (8.76ms, 39.1MB)
테스트 7 〉	통과 (4.66ms, 37.2MB)
테스트 8 〉	통과 (0.59ms, 33.8MB)
테스트 9 〉	통과 (0.79ms, 33.7MB)
테스트 10 〉	통과 (8.26ms, 38.9MB)
테스트 11 〉	통과 (4.51ms, 37.5MB)
테스트 12 〉	통과 (0.56ms, 33.8MB)
테스트 13 〉	통과 (9.43ms, 39.3MB)
테스트 14 〉	통과 (12.47ms, 39.2MB)
테스트 15 〉	통과 (5.04ms, 37.3MB)
테스트 16 〉	통과 (4.17ms, 38MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
