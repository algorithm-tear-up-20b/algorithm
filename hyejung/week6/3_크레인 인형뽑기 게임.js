/*
[PGS] 크레인 인형뽑기 게임 /LV.1
통과 여부 : O
*/
function solution(board, moves) {
  const bascket = [];
  let count = 0;
  for (let pos of moves) {
    for (let i = 0; i < board.length; i++) {
      // 해당 칸에 인형이 존재할 때
      if (board[i][pos - 1]) {
        let target = board[i][pos - 1];
        board[i][pos - 1] = 0;
        // 바구니의 마지막 요소가 뽑으려는 인형이랑 같으면
        if (bascket[bascket.length - 1] === target) {
          // 바구니에서 마지막 요소를 뺀다음 카운트를 올린다.
          count += 2;
          bascket.pop();
        }
        // 뽑으려는 인형이랑 마지막 요소가 다르다면 바구니에 넣고,
        // 인형뽑기 기계의 해당 칸을 0으로 초기화한다.
        else {
          bascket.push(target);
        }
        break;
      }
      // 인형이 존재하지 않으면 다음 행으로 넘어감.
      else {
        continue;
      }
    }
  }
  return count;
}
