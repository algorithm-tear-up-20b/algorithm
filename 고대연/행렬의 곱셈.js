/*
정확성  테스트
테스트 1 〉	통과 (2.66ms, 36.9MB)
테스트 2 〉	통과 (5.32ms, 38.7MB)
테스트 3 〉	통과 (4.59ms, 38.7MB)
테스트 4 〉	통과 (2.63ms, 36.8MB)
테스트 5 〉	통과 (5.22ms, 38.6MB)
테스트 6 〉	통과 (3.62ms, 38.4MB)
테스트 7 〉	통과 (0.74ms, 33.6MB)
테스트 8 〉	통과 (0.39ms, 33.5MB)
테스트 9 〉	통과 (0.35ms, 33.5MB)
테스트 10 〉	통과 (4.79ms, 38.4MB)
테스트 11 〉	통과 (2.74ms, 36.8MB)
테스트 12 〉	통과 (0.45ms, 33.6MB)
테스트 13 〉	통과 (4.80ms, 38.4MB)
테스트 14 〉	통과 (5.60ms, 38.8MB)
테스트 15 〉	통과 (2.91ms, 37MB)
테스트 16 〉	통과 (2.77ms, 38MB)
*/
function solution(arr1, arr2) {
  /*
  arr1의 행과 arr2의 열을 각각 곱해서 겹치는곳의 행과열의 인덱스가 새로만드는 배열의 좌표
  이떄 곱할시 행과 열의 인덱스는 같다.
  곱한 행렬의 크기는 m * n, a * b = m * b
  */

  let arr = Array.from({ length: arr1.length }, () =>
    new Array(arr2[0].length).fill(0)
  );

  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2[0].length; k++) {
      let total = 0;
      for (let j = 0; j < arr1[i].length; j++) {
        total += arr1[i][j] * arr2[j][k];
      }
      arr[i][k] = total;
    }
  }
  return arr;
}
