/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.44ms, 33.6MB)
테스트 2 〉	통과 (0.46ms, 33.5MB)
테스트 3 〉	통과 (0.13ms, 33.5MB)
테스트 4 〉	통과 (1.87ms, 34MB)
테스트 5 〉	통과 (13.95ms, 38.8MB)
테스트 6 〉	통과 (6.63ms, 38.5MB)
테스트 7 〉	통과 (1.32ms, 33.8MB)
테스트 8 〉	통과 (1.89ms, 34.1MB)
테스트 9 〉	통과 (0.36ms, 33.5MB)
테스트 10 〉	통과 (1.02ms, 33.8MB)
테스트 11 〉	통과 (2.18ms, 34MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(m, n, board) {
  // 4개 모인 좌표를 확인하는 함수
  function getLocationToDelete() {
    const result = new Set();
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        const target = board[i][j];
        if (target === 0) continue;
        if (
          board[i - 1][j - 1] === target &&
          board[i - 1][j] === target &&
          board[i][j - 1] === target
        ) {
          result.add(i - 1 + "," + (j - 1));
          result.add(i - 1 + "," + j);
          result.add(i + "," + (j - 1));
          result.add(i + "," + j);
        }
      }
    }
    return [...result];
  }

  // 위에 있는 블록을 내리는 함수
  function downItems() {
    const bottomItem = Array(n).fill(-1),
      bottomZero = Array(n).fill(m);
    for (let i = m - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        if (!board[i][j] && bottomZero[j] === m) bottomZero[j] = i;
        if (board[i][j] && bottomZero[j] !== m && bottomItem[j] === -1)
          bottomItem[j] = i;
      }
    }

    let count = Math.max(...bottomZero);

    while (count > 0) {
      bottomZero.forEach((i, j) => {
        if (i !== m && bottomItem[j] >= 0 && board[bottomItem[j]][j]) {
          board[i][j] = board[bottomItem[j]][j];
          board[bottomItem[j]][j] = 0;
          bottomZero[j]--;
        }
        bottomItem[j]--;
      });
      count--;
    }
  }

  board = board.map((e) => e.split(""));

  while (1) {
    const locations = getLocationToDelete();
    if (!locations.length)
      return board.reduce(
        (count, _, idx) => count + board[idx].filter((e) => !e).length,
        0
      );
    locations.forEach((e) => {
      const [left, right] = e.split(",").map((e) => +e);
      board[left][right] = 0;
    });
    downItems();
  }
}
