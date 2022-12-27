/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.27ms, 33.4MB)
테스트 2 〉	통과 (0.18ms, 33.6MB)
테스트 3 〉	통과 (0.18ms, 33.5MB)
테스트 4 〉	통과 (2.84ms, 36.8MB)
테스트 5 〉	통과 (0.18ms, 33.5MB)
테스트 6 〉	통과 (0.18ms, 33.5MB)
테스트 7 〉	통과 (0.22ms, 33.5MB)
테스트 8 〉	통과 (0.34ms, 33.6MB)
테스트 9 〉	통과 (0.32ms, 33.6MB)
테스트 10 〉	통과 (0.60ms, 33.6MB)
테스트 11 〉	통과 (0.56ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(board, moves) {
  let basket = [];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    const x = moves[i] - 1;
    let y;
    for (let j = 0; j < board.length; j++) {
      if (board[j][x]) {
        y = j;
        break;
      } else y = board.length - 1;
    }
    const target = board[y][x];
    basket.push(target);
    board[y][x] = 0;
  }
  basket = basket.filter((el) => el !== 0);
  let stack = [];
  for (let i = 0; i < basket.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== basket[i])
      stack.push(basket[i]);
    else {
      stack.pop();
      count += 2;
    }
  }
  return count;
}
