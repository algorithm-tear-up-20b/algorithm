function solution(n, left, right) {
  // 1. n행 n열 비어있는 2차원 배열 생성
  // 2. i=1부터 n까지 루프 돌기
  // 2-1. 1행 1열부터 i행 i열까지 영역 내 모든 빈 칸은 숫자 i로 채우기
  // 3. 1,...n행을 잘라서 모두 이어붙인 새로운 1차원 배열 생성
  // 4. 생성된 새로운 1차원 배열을 arr라고 할 때
  // arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지우기
  const result = [];

  for (let i = left; i <= right; i++) {
    const row = parseInt(i / n); //y
    const col = i % n; //x
    result.push(Math.max(row, col) + 1);
  }
  return result;
}

//30분

//row col 0 2 result [3]
//row col 1 0 result [3,2]
//row col 1 1 result [3,2,2]
//row col 1 2 result [3,2,2,3]
