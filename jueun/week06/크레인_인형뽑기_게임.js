/*
정확성  테스트
테스트 1 〉	통과 (0.17ms, 33.4MB)
테스트 2 〉	통과 (0.17ms, 33.4MB)
테스트 3 〉	통과 (0.18ms, 33.4MB)
테스트 4 〉	통과 (27.66ms, 36.9MB)
테스트 5 〉	통과 (0.17ms, 33.4MB)
테스트 6 〉	통과 (0.17ms, 33.4MB)
테스트 7 〉	통과 (0.20ms, 33.5MB)
테스트 8 〉	통과 (0.32ms, 33.5MB)
테스트 9 〉	통과 (0.30ms, 33.5MB)
테스트 10 〉	통과 (0.32ms, 33.4MB)
테스트 11 〉	통과 (1.00ms, 36.3MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/

function solution(board, moves) {
  let answer = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    answer += play(moves[i] - 1, board, basket);
  }

  return answer;
}

const play = (move, board, basket) => {
  let score = 0;
  let board_size = board.length;
  for (let j = 0; j < board_size; j++) {
    if (board[j][move] !== 0) {
      score += remove(board[j], move, basket);
      break;
    }
  }
  return score;
};

const remove = (boardRow, move, basket) => {
  let score = 0;
  if (basket.length > 0 && basket.slice(-1)[0] === boardRow[move]) {
    basket.pop();
    score += 2;
  } else {
    basket.push(boardRow[move]);
  }
  boardRow[move] = 0;
  return score;
};
