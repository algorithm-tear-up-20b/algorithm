function solution(board, moves) {
  //board 복사
  const boards = board;
  //바구니
  const basket = [];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let row = 0; row < boards.length; row++) {
      const col = moves[i] - 1;
      //인형이 존재하면
      if (boards[row][col] > 0) {
        // 인형이 2개되면 +2
        if (basket[basket.length - 1] === boards[row][col]) {
          basket.pop();
          count += 2;
        } else {
          basket.push(boards[row][col]);
        }
        // 인형 비워주기
        boards[row][col] = 0;
        // 다 돌면 멈추기
        break;
      }
    }
  }
  return count;
}

/* [[0,0,0,0,0],
        [0,0,1,0,3],
        [0,2,5,0,1],
        [4,2,4,4,2],
        [3,5,1,3,1]]
    // [1, 5, 3, 5, 1, 2, 1, 4] 
    // 4,[3,[1,1],3],2,x,4
    */
