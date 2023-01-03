/*
[PGS] 명예의 전당 (1) /LV.1
통과 여부 : O
*/

function solution2(k, score) {
  let answer = [];
  let stack = [];

  // score 배열 전체 반복
  for (let i = 0; i < score.length; i++) {
    // stack 에 현재 값 push
    stack.push(score[i]);
    // stack 내림차순 정렬
    stack.sort((a, b) => b - a);
    // 만약 현재 i 가 k이하라면 정렬된 stack 의 가장 마지막 값을 answer 배열에 추가
    if (i < k) answer.push(stack[stack.length - 1]);
    // k 이상이라면 정렬된 stack에서 k번째 값을 answer 배열에 추가
    else {
      answer.push(stack[k - 1]);
    }
  }
  return answer;
}

function solution1(k, score) {
  const answer = [];

  // 1) 명예의전당(k)을 담는 배열 생성
  const nums = [];

  // 2) score에 담긴 점수를 하나씩 꺼낸다.
  score.forEach(num => {
    // 3) 명예의 전당에 넣는다.
    nums.push(num);

    // 4) 명예의 전당 배열을 내림차순으로 정렬하고 상위 k번까지 자른다.
    nums.sort((a, b) => b - a).splice(k);

    // 5) 명예의 전당 배열의 최소 값을 answer에 담는다
    answer.push(Math.min.apply(null, nums));
  });

  // 6) 일차별 명예의 전당에 담긴 최소값을 return 한다.
  return answer;
}

// 테스트케이스 9,11번 통과 X : 이유가 뭘까..?
// 이중은 아니지만 for문을 두 번 사용하고, 정렬과 Math.min을 함께 사용하는게 그리 효율적이지 않은 것 같음.
function fail(k, score) {
  let answer = [];
  let stack = [];

  // i 부터 k 번째까지 반복
  for (let i = 0; i < k; i++) {
    // stack 에 현재 값을 넣음
    stack.push(score[i]);
    // 지금까지 stack에 들어간 값중 최솟값 넣음
    answer.push(Math.min(...stack));
  }
  // 현재까지의 stack 내림차순 정렬
  stack.sort((a, b) => b - a);

  // 다시 k번째부터 나머지 배열 반복
  for (let i = k; i < score.length; i++) {
    // 스택의 마지막 값이 현재 값보다 작으면
    if (stack[k - 1] < score[i]) {
      // 스택의 마지막 값을 현재 값으로 갱신
      stack[k - 1] = score[i];
    }
    // 현재까지의 스택 중 최솟값을 answer에 추가
    answer.push(Math.min(...stack));
    // 스택 내림차순 정렬(마지막 값이 큰지 작은지를 비교하기 때문에.)
    stack.sort((a, b) => b - a);
  }
  return answer;
}

console.log(solution2(3, [10, 100, 20, 150, 1, 100, 200]));

/*
* 매일 출연한 가수의 점수가 scores 배열에 담김
* 상위 k 번째 이내인 경우 명예의 전당에 올림
* 매일 명예의 전당 최하위 점수 발표
* 매일 발표된 최하위 점수의 배열을 리턴

1. i <= k => 현재 요소까지 중 최하위 요소
2. i > k => 현재 요소까지 중 k 번째 요소
=> k 번째까지 들어갈 수 있는 배열을 만들고 정렬하며 유지. 
*/
