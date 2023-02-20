/*
[PGS] 타겟 넘버 /LV.2 / 20분
*/

/*
[문제]
- n개의 음이 아닌 정수
- 순서 바꾸지 않고 적절히 더하기/빼기로 타겟 넘버 생성
- 배열이 주어질 때 적절히 더하고 빼서 타겟넘버 만드는 방법의 수

[접근]
- 완전 탐색? 
- 전체 숫자를 사용해야하고, 더하기 빼기로 타겟 숫자가 되어야 함

** DFS 를 활용한 문제풀이!
- 각 숫자는 두 가지 경우를 가진다. 더해지느냐 빼지느냐
*/

function solution(numbers, target) {
  let count = 0;
  const DFS = (level, sum) => {
    // 종료 조건
    if (level === numbers.length) {
      if (sum === target) count++;
      return;
    }
    // 반복 조건
    else {
      DFS(level + 1, sum + numbers[level]);
      DFS(level + 1, sum - numbers[level]);
    }
  };

  // level 로 numbers 에 접근하기 때문에 0부터 시작하는게 좋겠다
  DFS(0, 0);

  return count;
}

console.log(solution([1, 1, 1, 1, 1], 3));

/*
테스트 1 〉	통과 (12.72ms, 35.4MB)
테스트 2 〉	통과 (12.24ms, 35.5MB)
테스트 3 〉	통과 (0.20ms, 33.3MB)
테스트 4 〉	통과 (0.40ms, 33.5MB)
테스트 5 〉	통과 (1.78ms, 35.5MB)
테스트 6 〉	통과 (0.27ms, 33.4MB)
테스트 7 〉	통과 (0.19ms, 33.5MB)
테스트 8 〉	통과 (1.05ms, 35.5MB)
*/
