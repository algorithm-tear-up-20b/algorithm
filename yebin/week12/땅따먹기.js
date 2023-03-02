/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.67ms, 33.8MB)
테스트 2 〉	통과 (0.64ms, 33.8MB)
테스트 3 〉	통과 (0.67ms, 33.7MB)
테스트 4 〉	통과 (0.65ms, 33.8MB)
테스트 5 〉	통과 (0.64ms, 33.8MB)
테스트 6 〉	통과 (1.10ms, 33.8MB)
테스트 7 〉	통과 (0.67ms, 33.9MB)
테스트 8 〉	통과 (0.68ms, 33.8MB)
테스트 9 〉	통과 (0.67ms, 33.8MB)
테스트 10 〉	통과 (0.69ms, 33.7MB)
테스트 11 〉	통과 (0.94ms, 33.7MB)
테스트 12 〉	통과 (0.74ms, 33.7MB)
테스트 13 〉	통과 (1.24ms, 33.8MB)
테스트 14 〉	통과 (0.69ms, 33.8MB)
테스트 15 〉	통과 (1.26ms, 33.9MB)
테스트 16 〉	통과 (0.72ms, 33.8MB)
테스트 17 〉	통과 (1.22ms, 33.8MB)
테스트 18 〉	통과 (0.66ms, 33.8MB)
효율성  테스트
테스트 1 〉	통과 (24.19ms, 77MB)
테스트 2 〉	통과 (22.27ms, 77.7MB)
테스트 3 〉	통과 (45.68ms, 77.1MB)
테스트 4 〉	통과 (24.81ms, 77.3MB)
채점 결과
정확성: 59.8
효율성: 40.2
합계: 100.0 / 100.0
 */

// 레퍼런스 참고 풀이
function solution(land) {
  const len = land.length;
  for (let i = 1; i < len; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }
  return Math.max(...land[len - 1]);
}

// 시간초과로 통과 못함
function solution(land) {
  let maxTotal = 0;
  function getTotal(land, lastIdx, total) {
    if (!land.length) {
      maxTotal = Math.max(maxTotal, total);
      return;
    }
    const row = land[0];
    const [firstIdx, secondIdx] = getFirstSecondIdx(row);
    const secondLand = land.slice(1);
    if (firstIdx !== lastIdx)
      getTotal(secondLand, firstIdx, total + row[firstIdx]);
    if (secondIdx !== lastIdx)
      getTotal(secondLand, secondIdx, total + row[secondIdx]);
  }
  getTotal(land, "noIdx", 0);
  return maxTotal;
}

function getFirstSecondIdx(row) {
  const first = Math.max(...row);
  const firstIdx = row.indexOf(first);
  const second = Math.max(...row.filter((_, i) => i !== firstIdx));
  let secondIdx = row.indexOf(second);
  if (firstIdx === secondIdx)
    secondIdx = row.slice(firstIdx + 1).indexOf(second) + firstIdx + 1;
  return [firstIdx, secondIdx];
}

//다른 사람의 풀이
function solution(land) {
  return Math.max(
    ...land.reduce(
      (a, c) => {
        return [
          c[0] + Math.max(a[1], a[2], a[3]),
          c[1] + Math.max(a[0], a[2], a[3]),
          c[2] + Math.max(a[0], a[1], a[3]),
          c[3] + Math.max(a[0], a[1], a[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}
