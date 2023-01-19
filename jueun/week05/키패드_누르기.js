/*
정확성  테스트
테스트 1 〉	통과 (0.10ms, 33.6MB)
테스트 2 〉	통과 (0.10ms, 33.6MB)
테스트 3 〉	통과 (0.14ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.10ms, 33.5MB)
테스트 6 〉	통과 (0.10ms, 33.4MB)
테스트 7 〉	통과 (0.11ms, 33.4MB)
테스트 8 〉	통과 (0.24ms, 33.4MB)
테스트 9 〉	통과 (0.29ms, 33.4MB)
테스트 10 〉	통과 (0.22ms, 33.5MB)
테스트 11 〉	통과 (0.29ms, 33.5MB)
테스트 12 〉	통과 (0.25ms, 33.5MB)
테스트 13 〉	통과 (0.30ms, 33.6MB)
테스트 14 〉	통과 (0.42ms, 33.7MB)
테스트 15 〉	통과 (0.84ms, 34MB)
테스트 16 〉	통과 (0.77ms, 34.1MB)
테스트 17 〉	통과 (1.76ms, 34.5MB)
테스트 18 〉	통과 (1.61ms, 34.4MB)
테스트 19 〉	통과 (1.69ms, 34.4MB)
테스트 20 〉	통과 (1.69ms, 34.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/

function solution(numbers, hand) {
  let result = "";
  const numLength = numbers.length;
  let leftLoc = 10,
    rightLoc = 12;
  let num;

  for (let i = 0; i < numLength; i++) {
    if (numbers[i] === 0) num = 11;
    else num = numbers[i];

    result += getHand(num, leftLoc, rightLoc, hand);

    if (result[i] === "L") leftLoc = num;
    else rightLoc = num;
  }

  return result;
}

function getHand(num, leftLoc, rightLoc, hand) {
  let nowHand;

  if (num === 1 || num === 4 || num === 7) {
    nowHand = "L";
  } else if (num === 3 || num === 6 || num === 9) {
    nowHand = "R";
  } else {
    const leftDistance = getDistance(num, leftLoc);
    const rightDistance = getDistance(num, rightLoc);

    if (leftDistance === rightDistance) {
      nowHand = hand[0].toUpperCase();
    } else if (leftDistance < rightDistance) {
      nowHand = "L";
    } else {
      nowHand = "R";
    }
  }

  return nowHand;
}

// *은 10, 0은 11, #은 12로 계산
function getDistance(num1, num2) {
  const coord = [
    null, // 인덱스 0은 비우기
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [0, 3],
    [1, 3],
    [2, 3],
  ];
  const X = 0,
    Y = 1;
  const distance =
    Math.abs(coord[num1][X] - coord[num2][X]) +
    Math.abs(coord[num1][Y] - coord[num2][Y]);

  return distance;
}
