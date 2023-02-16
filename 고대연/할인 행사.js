/*
정확성  테스트
테스트 1 〉	통과 (12.43ms, 37.1MB)
테스트 2 〉	통과 (69.27ms, 39.9MB)
테스트 3 〉	통과 (21.40ms, 37.4MB)
테스트 4 〉	통과 (27.31ms, 39.6MB)
테스트 5 〉	통과 (27.76ms, 38.9MB)
테스트 6 〉	통과 (10.18ms, 37.2MB)
테스트 7 〉	통과 (31.75ms, 37.6MB)
테스트 8 〉	통과 (61.95ms, 43.1MB)
테스트 9 〉	통과 (11.97ms, 38.7MB)
테스트 10 〉	통과 (28.85ms, 39.4MB)
테스트 11 〉	통과 (23.86ms, 37.2MB)
테스트 12 〉	통과 (0.27ms, 33.5MB)
*/

function solution(want, number, discount) {
  // 한가지 제품 할인, 하루에 하나만 구매가능
  // 10일 연속으로 사려는게 할인할 날짜에 맞춰 회원가입하려고 함.
  // 조건을 만족하는 날짜의 수를 구하는게 문제
  // 50분

  const wantObj = {};
  let count = 0;

  want.forEach((el, idx) => {
    wantObj[el] = number[idx];
  });

  for (let i = 0; i < discount.length; i++) {
    let bool = false; //조건을 만족했는지 보는 flag
    // wantObj의 모든 값들이 0 이 될때 flag를 true로
    // 중간에 없는 key가 있거나 value가 음수가 되면 flag를 false로
    if (wantObj[discount[i]]) {
      let tempObj = { ...wantObj };
      for (let j = i; j < discount.length; j++) {
        if (tempObj[discount[j]] === 0) delete tempObj[discount[j]];

        if (!tempObj[discount[j]]) {
          bool = false;
          break;
        } else {
          tempObj[discount[j]] -= 1;
          //모든 값들이 0인지 판단.
          if (
            Object.keys(tempObj).filter((key) => tempObj[key] !== 0).length ===
            0
          ) {
            bool = true;
            break;
          }
        }
      }
    }
    if (bool) count++;
  }
  return count;
}
// 다른사람풀이
/*
  10개 단위로 묶어서 판단하면 됨.
*/
