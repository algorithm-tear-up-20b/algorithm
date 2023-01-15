/*
[PGS] 햄버거 만들기 /LV.1 / 60분
*/

/*
[문제]
* 숫자 배열에서 1,2,3,1 의 연속된 수가 나올 수 있는 횟수를 구하여야함. 

[접근 1]
* 재귀적인 방식으로 접근하자!
1. 종료조건 : 배열에 1231이 연속적으로 존재하지 않는 경우
2. 반복조건 
- 배열에 1231이 순차적으로 존재하는 경우
- 카운트를 1 증가하고
- 해당 위치를 제거하여 새로운 배열 생성 => replace를 사용했다.
- 다음 재귀 호출 
=> 38.9 점 나왔다...
=> replace에서 정규식을 사용하면 replaceAll처럼 동작한다.
=> 해당 부분 수정 후 채점 돌리니 3~9, 12번 테스트에서 "실패 (signal: aborted (core dumped))" 메시지가 출력된다. 재귀를 써서 그런가? 

[접근 1-1]
- while문으로 변경했는데 시간초과가 뜨는 것을 보니, replace를 사용하고 반복적으로 호출하는 것이 문제가 되나보다.

[접근 2]
* stack을 사용하자!
- 재귀적으로 푸는 방식은 시간초과 오류때문에 힘들것 같다.
1. ing. 배열을 돌며 길이 4가 될 때까지 stack에 push한다.
2. stack이 길이 4 이상이 되면 현재까지 쌓인 재료를 문자열로 변경하고 1231이 되는지 확인
3. 1231이 되는 경우 스택의 재료를 삭제하고 카운트를 올린다.
4. 다음 반복부터는 연속된 1231이 없어지고 그 다음 재료부터 또 쌓이게 됨.

=> stack = stack.slice(0, -4) 으로 연속된 원소를 제거할경우 stack을 다시 탐색하기 때문에 시간초과가 뜨는 것으로 예상됨..!

*/

function solution(ingredient) {
  let count = 0;
  let stack = [];

  for (let item of ingredient) {
    stack.push(item);

    if (stack.length >= 4) {
      let burger = stack.slice(-4).join('');

      if (burger === '1231') {
        // stack = stack.slice(0, -4);
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count++;
      }
    }
  }
  return count;
}
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));

// 다른 풀이
function ref(ingredient) {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    // 현재 인덱스부터 4칸까지가 일치하는지 확인
    if (ingredient.slice(i, i + 4).join('') === '1231') {
      count++;
      // splice로 일치하는 부분을 삭제
      ingredient.splice(i, 4);
      // 인덱스를 다시 뒤로 돌려서 탐색 시작 **
      i -= 3;
    }
  }

  return count;
}

// console.log(ref([1, 2, 3, 1, 2, 3, 1, 1]));

/*
function whileFail(ingredient) {
  let count = 0;
  ingredient = ingredient.join('');

  while (ingredient.match(/1231/g)) {
    ingredient = ingredient.replace('1231', '');
    count++;
  }
  return count;
}
*/

/*
function recursiveFail(ingredient) {
  let count = 0;
  ingredient = ingredient.join('');

  function aux(ingStr) {
    if (!ingStr) return;
    else {
      if (ingStr.match(/1231/g)) {
        count++;
        aux(ingStr.replace('1231', ''));
      } else {
        return false;
      }
    }
  }

  aux(ingredient);

  return count;
}
*/
