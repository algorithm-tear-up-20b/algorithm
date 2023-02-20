/*
[PGS] 피로도 /LV.2 / 60분
*/

/*
[문제]
일정 피로도를 사용해 던전 탐험
- 던전 탐험마다 필요한 최소 피로도
- 소모되는 소모 피로도
- 하루 한 번 탐험할 수 있는 던전, 최대한 많이 탐험하고자.
- 유저가 탐험할 수 있는 최대 던전 수 ??

- 유저의 현재 피로도 k
- 각 던전별 최소 피로도, 소모 피로도 담긴 2차원 배열

[접근]
1. 모든 경우의 수를 탐색하는 완전탐색
2. 전체 던전이 있을 경우 1-2-3... 2-1-3.. 처럼 각 던전을 도는 경우의 수를 확인해야함.
3. 이중 반복문으로 경우 탐색하기
4. 첫 번째 던전에서 피로도 소모하고 다음 던전으로 갈 수 있는지 확인. 피로도가 적어서 넘어가지 못하는 경우 break하고 Max 카운트를 계산.
=> 순열이구나!
=> 0-1-2, 1-0-2, 2-0-1 세가지 경우 밖에 돌지 못하기 때문에 틀렸다.

[접근 2 dfs]
- visited를 체크할 수 있는 빈 배열을 만든다.
- 각 던전은 간다 || 가지 못한다를 선택할 수 있음.
- 순열이기 때문에 for문을 써서 출발지점을 지정해준다.
*/

function solution(k, dungeons) {
  let answer = [];
  const N = dungeons.length;
  const visited = new Array(N).fill(0);

  const DFS = (fatigue, count) => {
    answer.push(count);

    // DFS의 출발 지점 : 1번 던전 ~, 2번 던전 ~, 3번 던전~
    for (let L = 0; L < N; L++) {
      // 방문한 적이 없고 피로도가 최소 피로도보다 높다면
      if (!visited[L] && fatigue >= dungeons[L][0]) {
        visited[L] = 1; // 방문 처리
        DFS(fatigue - dungeons[L][1], count + 1); // DFS 호출
        visited[L] = 0; // 다녀왔으므로 방문 해제
      }
    }
  };

  DFS(k, 0);

  return Math.max(...answer);
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ]),
);

/*
테스트 1 〉	통과 (0.21ms, 33.5MB)
테스트 2 〉	통과 (0.24ms, 33.4MB)
테스트 3 〉	통과 (0.21ms, 33.4MB)
테스트 4 〉	통과 (0.36ms, 33.6MB)
테스트 5 〉	통과 (0.48ms, 33.5MB)
테스트 6 〉	통과 (2.72ms, 36.7MB)
테스트 7 〉	통과 (4.16ms, 37.1MB)
테스트 8 〉	통과 (8.41ms, 38.2MB)
테스트 9 〉	통과 (0.19ms, 33.4MB)
테스트 10 〉	통과 (0.51ms, 33.5MB)
테스트 11 〉	통과 (0.17ms, 33.5MB)
테스트 12 〉	통과 (2.22ms, 36.5MB)
테스트 13 〉	통과 (0.26ms, 33.5MB)
테스트 14 〉	통과 (0.19ms, 33.4MB)
테스트 15 〉	통과 (0.18ms, 33.5MB)
테스트 16 〉	통과 (0.18ms, 33.5MB)
테스트 17 〉	통과 (0.20ms, 33.4MB)
테스트 18 〉	통과 (0.17ms, 33.4MB)
테스트 19 〉	통과 (0.19ms, 33.5MB)
*/

// n개 중에서 m개를 뽑아 순열 만들기
function ref(m, arr) {
  let answer = '';
  const n = arr.length;
  const visited = new Array(n).fill(0);
  let tmp = new Array(m).fill(0);

  function DFS(L) {
    // m에 도달하면 정답문자열을 추가
    if (L === m) {
      answer += `${tmp}\n`;
    }
    // 반복 조건
    else {
      for (let i = 0; i < n; i++) {
        if (visited[i] === 0) {
          visited[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          visited[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(ref(2, arr));
