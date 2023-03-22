const board = "XX....XXXX";

const solution = (board) => {
  board = board.replace(/XXXX/g, "AAAA");
  board = board.replace(/XX/g, "BB");

  return board.split("").includes("X") ? -1 : board;
};

const answer = solution(board);
console.log(answer);
