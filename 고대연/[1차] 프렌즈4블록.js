/*
정확성  테스트
테스트 1 〉	통과 (0.41ms, 33.5MB)
테스트 2 〉	통과 (0.31ms, 33.6MB)
테스트 3 〉	통과 (0.12ms, 33.4MB)
테스트 4 〉	통과 (1.33ms, 33.7MB)
테스트 5 〉	통과 (56.81ms, 39.1MB)
테스트 6 〉	통과 (17.18ms, 38.4MB)
테스트 7 〉	통과 (1.40ms, 33.6MB)
테스트 8 〉	통과 (1.32ms, 33.8MB)
테스트 9 〉	통과 (0.45ms, 33.5MB)
테스트 10 〉	통과 (1.32ms, 33.7MB)
테스트 11 〉	통과 (2.30ms, 34MB)
*/

function solution(m, n, board) {
  // 모든 좌표를 순회하면서 해당좌표기준 4칸이 같은 모양이있으면,
  // 매판마다 지워지는 칸의 좌표를 set에 저장한다.
  // 이떄의 set의 key들의 길이가 제거되는 좌표이다.
  // 같은 모양의 블록을 제거후 다시 배열을 만들고 같은 과정을 반복한다.
  // 이때 배열을 다시 만들 시에는 첫번째열의 마지막 행부터 복사를 하고 값이 '0'인 좌표는 넘어간뒤 마지막에 '0'을 넣어준다.

  let count = 0;

  while (1) {
    //제거되는 좌표들 모음
    const deleteCoordinate = new Set();

    // 전체 -1 만큼 탐색
    for (let row = 0; row < board.length - 1; row++) {
      for (let col = 0; col < board[row].length - 1; col++) {
        if (isFourBlock(row, col, board)) {
          addSet(row, col, deleteCoordinate);
        }
      }
    }
    if (!deleteCoordinate.size) break;
    count += deleteCoordinate.size;
    board = makeNewBoard(deleteCoordinate, board);
  }

  return count;
}

// 매판마다 지워지는 칸의 좌표를 set에 저장한다.
function addSet(row, col, deleteCoordinate) {
  deleteCoordinate.add(`${row},${col}`);
  deleteCoordinate.add(`${row + 1},${col}`);
  deleteCoordinate.add(`${row + 1},${col + 1}`);
  deleteCoordinate.add(`${row},${col + 1}`);
}

// 모든 좌표를 순회하면서 해당좌표기준 4칸이 같은 모양이있으면,
function isFourBlock(row, col, board) {
  if (board[row][col] === "0") return false;

  if (
    board[row][col] === board[row][col + 1] &&
    board[row][col] === board[row + 1][col] &&
    board[row][col] === board[row + 1][col + 1]
  )
    return true;
  return false;
}

//새로운 block을 만듬
function makeNewBoard(deleteCoordinate, board) {
  let newBoard = [];

  // 배열을 다시 만들 시에는 첫번째열의 마지막 행부터 복사를 하고 값이 '0'인 좌표는 넘어간뒤 마지막에 '0'을 넣어준다.
  for (let col = 0; col < board[0].length; col++) {
    let newCol = [];
    for (let row = board.length - 1; row >= 0; row--) {
      if (!deleteCoordinate.has(`${row},${col}`)) {
        newCol.push(board[row][col]);
      }
    }
    //지워진 공간
    let diff = board[0].length - newCol.length;
    for (let i = 0; i < diff; i++) {
      newCol.push("0");
    }
    newBoard.push(newCol);
  }
  //배열을 원하는 형태로 반전시킨다.
  //마지막 열의 모든 행들 -> 새로운 행
  let reverseBoard = [];
  for (let col = newBoard.length - 1; col >= 0; col--) {
    const newRow = [];
    for (let row = 0; row < newBoard[col].length; row++) {
      newRow.push(newBoard[row][col]);
    }
    reverseBoard.push(newRow);
  }
  return reverseBoard;
}
