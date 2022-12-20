function solution(numbers, hand) {
  // *와 #을 특정 숫자로 가정(*은 star, #은 hashTag로 )
  // 누른 숫자에 따라 *,#에 할당된 숫자를 업데이트한 후에 L인지 R인지를 리턴
  // 1,4,7 중에 하나를 누르면 *에 할당된 수를 누른 숫자로 재할당
  // 3,6,9 중에 하나를 누르면 #에 할당된 수를 누른 숫자로 재할당
  // 2,5,8 중에 하나를 누르면 그 누른 숫자의 위치를 알아내서 변수에 할당
  // 0이면 무조건 R 리턴(이거는 맞는지는 불확실)
  // 누른 숫자의 좌표와 왼손으로 눌렀었던 숫자 좌표와의 거리 계산
  // 누른 숫자의 좌표와 오른손으로 눌렀었던 숫자 좌표와의 거리 계산
  // 거리가 같은 경우, 왼손,오른손 여부를 따져서 L or R 리턴
  // left가 작으면 더 가까운 거리라는 말이니까 그 숫자를 leftNum으로 할당하고 L 리턴
  // right가 작으면 그 숫자를 rightNum으로 할당하고 R 리턴

  let star = 10;
  let hashTag = 12;

  const leftTo = (num) => {
    star = num;
    return "L";
  };

  const rightTo = (num) => {
    hashTag = num;
    return "R";
  };

  const numOfLocation = (num) => [Math.floor((num - 1) / 3), (num - 1) % 3]; // 누른 숫자의 현재 위치

  const distanceBetweenLocation = (numArrayOne, numArrayTwo) =>
    Math.abs(numArrayOne[0] - numArrayTwo[0]) + Math.abs(numArrayOne[1] - numArrayTwo[1]); // 두 숫자 사이의 간격

  const isLeftOrRightHand = (hand, number) => (hand === "left" ? leftTo(number) : rightTo(number));

  return numbers
    .map((number) => {
      if (number === 0) number = 11;
      //1,4,7을 누른 경우
      if (number % 3 === 1) return leftTo(number);
      //3,6,9를 누른 경우
      else if (number % 3 === 0) return rightTo(number);
      //그 외의 번호를 누른 경우
      else {
        const location = numOfLocation(number);
        const leftNumber = distanceBetweenLocation(numOfLocation(star), location);
        const rightNumber = distanceBetweenLocation(numOfLocation(hashTag), location);

        if (leftNumber === rightNumber) return isLeftOrRightHand(hand, number);
        else if (leftNumber < rightNumber) return leftTo(number);
        return rightTo(number);
      }
    })
    .join("");
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));

// isLeftOrRightHand 함수로 뺀 것까지의 결과
// 정확성  테스트
// 테스트 1 〉	통과 (0.15ms, 33.5MB)
// 테스트 2 〉	통과 (0.23ms, 33.5MB)
// 테스트 3 〉	통과 (0.18ms, 33.5MB)
// 테스트 4 〉	통과 (0.10ms, 33.6MB)
// 테스트 5 〉	통과 (0.16ms, 33.5MB)
// 테스트 6 〉	통과 (0.14ms, 33.4MB)
// 테스트 7 〉	통과 (0.16ms, 33.4MB)
// 테스트 8 〉	통과 (0.25ms, 33.6MB)
// 테스트 9 〉	통과 (0.27ms, 33.5MB)
// 테스트 10 〉	통과 (0.28ms, 33.5MB)
// 테스트 11 〉	통과 (0.27ms, 33.5MB)
// 테스트 12 〉	통과 (0.27ms, 33.7MB)
// 테스트 13 〉	통과 (0.29ms, 33.5MB)
// 테스트 14 〉	통과 (0.34ms, 33.6MB)
// 테스트 15 〉	통과 (0.46ms, 33.6MB)
// 테스트 16 〉	통과 (0.44ms, 33.6MB)
// 테스트 17 〉	통과 (0.64ms, 33.6MB)
// 테스트 18 〉	통과 (0.61ms, 33.8MB)
// 테스트 19 〉	통과 (0.64ms, 33.8MB)
// 테스트 20 〉	통과 (0.60ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
