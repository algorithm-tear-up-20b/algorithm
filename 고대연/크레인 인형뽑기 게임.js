/* eslint-disable */
/*
정확성  테스트
테스트 1 〉	통과 (0.16ms, 33.3MB)
테스트 2 〉	통과 (0.16ms, 33.4MB)
테스트 3 〉	통과 (0.16ms, 33.4MB)
테스트 4 〉	통과 (0.36ms, 33.4MB)
테스트 5 〉	통과 (0.16ms, 33MB)
테스트 6 〉	통과 (0.16ms, 33.4MB)
테스트 7 〉	통과 (0.18ms, 33.4MB)
테스트 8 〉	통과 (0.23ms, 33.3MB)
테스트 9 〉	통과 (0.23ms, 33.4MB)
테스트 10 〉	통과 (0.23ms, 33.3MB)
테스트 11 〉	통과 (0.31ms, 33.5MB)
*/
function solution(board, moves) {
  //가로 세로가 바뀌어야해서 인덱스를 다르게 줘야함. 90도 회전.

  let newboard = new Array(board[0].length);
  for (let i = 0; i < board.length; i++) {
    newboard[i] = new Array(board.length);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      newboard[j][i] = board[i][j];
    }
  }

  let arr = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    let shift = newboard[moves[i] - 1].shift();
    if (shift === undefined) continue;

    if (shift === 0) {
      i--;
      continue;
    }

    if (arr.at(-1) === shift) {
      count++;
      arr.pop();
    } else arr.push(shift);
  }

  //삭제된 횟수 *2가 삭제된 캐릭터 개수
  return count * 2;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.15ms, 33.4MB)
테스트 2 〉	통과 (0.15ms, 33.4MB)
테스트 3 〉	통과 (0.21ms, 33.6MB)
테스트 4 〉	통과 (5.18ms, 36.7MB)
테스트 5 〉	통과 (0.17ms, 33.6MB)
테스트 6 〉	통과 (0.14ms, 33.5MB)
테스트 7 〉	통과 (0.17ms, 33.5MB)
테스트 8 〉	통과 (0.27ms, 33.5MB)
테스트 9 〉	통과 (0.26ms, 33.4MB)
테스트 10 〉	통과 (0.28ms, 33.6MB)
테스트 11 〉	통과 (0.46ms, 33.5MB)
*/
function solution2(board, moves) {
  let arr = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    let xpos = moves[i] - 1;

    for (let j = 0; j < board.length; j++) {
      if (board[j][xpos] !== 0) {
        if (arr.at(-1) === board[j][xpos]) {
          count++;
          arr.pop();
        } else arr.push(board[j][xpos]);

        board[j][xpos] = 0;
        break;
      }
    }
  }

  //삭제된 횟수 *2가 삭제된 캐릭터 개수
  return count * 2;
}
