function solution(dirs) {
  // U: 위쪽으로 한 칸 가기
  // D: 아래쪽으로 한 칸 가기
  // R: 오른쪽으로 한 칸 가기
  // L: 왼쪽으로 한 칸 가기

  // 게임 캐릭터가 지나간 길 중 '캐릭터가 처음 걸어본 길의 길이'를 구해야 함

  // BFS or DFS..?

  const visited = new Set();

  let x = 0,
    y = 0,
    count = 0;

  for (let i = 0; i < dirs.length; i++) {
    let newX = x,
      newY = y;

    if (dirs[i] === "U" && y < 5) newY++;
    else if (dirs[i] === "D" && y > -5) newY--;
    else if (dirs[i] === "R" && x < 5) newX++;
    else if (dirs[i] === "L" && x > -5) newX--;
    else continue;
    /* 방문 처리 확인 */
    if (
      !visited.has(`${x},${y},${newX},${newY}`) &&
      !visited.has(`${newX},${newY},${x},${y}`)
    ) {
      visited.add(`${x},${y},${newX},${newY}`);
      visited.add(`${newX},${newY},${x},${y}`);
      count++;
    }
    x = newX;
    y = newY;
  }
  return count;
}

/*정확성  테스트
테스트 1 〉	통과 (0.30ms, 33.4MB)
테스트 2 〉	통과 (0.08ms, 33.3MB)
테스트 3 〉	통과 (0.08ms, 33.3MB)
테스트 4 〉	통과 (0.32ms, 33.1MB)
테스트 5 〉	통과 (0.48ms, 33.4MB)
테스트 6 〉	통과 (0.23ms, 33.4MB)
테스트 7 〉	통과 (0.23ms, 33.4MB)
테스트 8 〉	통과 (0.21ms, 33.6MB)
테스트 9 〉	통과 (0.21ms, 33.4MB)
테스트 10 〉	통과 (0.21ms, 33.4MB)
테스트 11 〉	통과 (0.22ms, 33.4MB)
테스트 12 〉	통과 (0.25ms, 33.5MB)
테스트 13 〉	통과 (0.24ms, 33.4MB)
테스트 14 〉	통과 (0.38ms, 33.5MB)
테스트 15 〉	통과 (0.32ms, 33.4MB)
테스트 16 〉	통과 (0.42ms, 33.6MB)
테스트 17 〉	통과 (0.43ms, 33.5MB)
테스트 18 〉	통과 (0.48ms, 33.6MB)
테스트 19 〉	통과 (0.43ms, 33.2MB)
테스트 20 〉	통과 (0.44ms, 33.2MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
