[
  "DDABBAABBA",
  "AAAAAABBBA",
  "DDACCBBBAA",
  "DDABBBBBAA",
  "AAABBABBBA",
  "CCADDAABBB",
  "CCADDAABBB",
  "BBACCABBBA",
  "BBAAABBBAA",
  "DDABBBBAAA",
];

function solution(m, n, board) {
  // 행 열 바꾸기
  // 해당 칸의 오른쪽, 아래, 오른쪽 아래 대각선 모두 같은 캐릭터일 경우 해당 행의 lowest, highest 인덱스 기록
  // lowest, highest 인덱스를 토대로 매 행마다 splice
  // splice 하면서 highest - lowest로 지워진 블록 계산

  let rotated = [];
  let answer = 0;

  for (let i = 0; i < board[0].length; i++) {
    rotated.push([]);
    for (let j = 0; j < board.length; j++) {
      rotated[i].push(board[j][i]);
    }
    rotated[i] = rotated[i].reverse();
  }

  // console.log(rotated);

  const removeAll4 = (board) => {
    let lowest = new Array(board.length),
      highest = new Array(board.length);
    // [undefined, 0, 2, undefined, undefined]
    // [undefined, 2, 4, undefined, undefined]
    let count = 0;
    for (let i = 0; i < board.length - 1; i++) {
      for (let j = 0; j < board[i].length - 1; j++) {
        if (
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          // lowest, highest 기록
          lowest[i] = Math.min(j, lowest[i] || Number.MAX_SAFE_INTEGER);
          highest[i] = Math.max(j + 1, highest[i] || Number.MIN_SAFE_INTEGER);
          lowest[i + 1] = Math.min(j, lowest[i + 1] || Number.MAX_SAFE_INTEGER);
          highest[i + 1] = Math.max(
            j + 1,
            highest[i + 1] || Number.MIN_SAFE_INTEGER
          );
        }

        // console.log("i    : ", i, lowest[i], highest[i]);
        // console.log("i + 1: ", i + 1, lowest[i + 1], highest[i + 1]);
      }
      console.log("--------------------------------");
    }
    // 여기서 splice
    for (let i = 0; i < board.length; i++) {
      console.log(board[i], lowest[i], highest[i] + 1);
      if (lowest[i] !== undefined && highest[i] !== undefined) {
        board[i].splice(lowest[i], highest[i] - lowest[i] + 1);
        count += highest[i] - lowest[i] + 1;
      }
      // console.log(board[i]);
    }
    console.log(board);

    console.log(count);
    return count;
  };

  let removed = 1;
  while (removed > 0) {
    removed = removeAll4(rotated);
    answer += removed;
  }

  return answer;
}

console.log(
  "answer",
  solution(4, 5, [
    "DDABBAABBA",
    "AAAAAABBBA",
    "DDACCBBBAA",
    "DDABBBBBAA",
    "AAABBABBBA",
    "CCADDAABBB",
    "CCADDAABBB",
    "BBACCABBBA",
    "BBAAABBBAA",
    "DDABBBBAAA",
  ])
);
