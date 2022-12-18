/*
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.4MB)
테스트 2 〉	통과 (0.09ms, 33.6MB)
테스트 3 〉	통과 (0.11ms, 33.5MB)
테스트 4 〉	통과 (0.08ms, 33.5MB)
테스트 5 〉	통과 (0.09ms, 33.4MB)
테스트 6 〉	통과 (0.09ms, 33.4MB)
테스트 7 〉	통과 (0.09ms, 33.4MB)
테스트 8 〉	통과 (0.20ms, 33.6MB)
테스트 9 〉	통과 (0.11ms, 33.4MB)
테스트 10 〉	통과 (0.09ms, 33.6MB)
테스트 11 〉	통과 (0.23ms, 33.5MB)
테스트 12 〉	통과 (0.19ms, 33.4MB)
테스트 13 〉	통과 (0.21ms, 33.4MB)
테스트 14 〉	통과 (0.22ms, 33.4MB)
테스트 15 〉	통과 (0.28ms, 33.6MB)
테스트 16 〉	통과 (0.27ms, 33.6MB)
테스트 17 〉	통과 (0.36ms, 33.5MB)
테스트 18 〉	통과 (0.35ms, 33.6MB)
테스트 19 〉	통과 (0.37ms, 33.5MB)
테스트 20 〉	통과 (0.36ms, 33.4MB)
*/

function solution(numbers, hand) {
  const coordinate = [
    [1, 3],
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
  ];

  let left = [0, 3];
  let right = [2, 3];
  let sentence = "";

  for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
      case 1:
      case 4:
      case 7:
        left = coordinate[numbers[i]];
        sentence = sentence + "L";
        break;
      case 3:
      case 6:
      case 9:
        right = coordinate[numbers[i]];
        sentence = sentence + "R";
        break;
      default:
        let temp1 =
          Math.abs(coordinate[numbers[i]][0] - left[0]) +
          Math.abs(coordinate[numbers[i]][1] - left[1]);
        let temp2 =
          Math.abs(coordinate[numbers[i]][0] - right[0]) +
          Math.abs(coordinate[numbers[i]][1] - right[1]);

        let res = temp1 - temp2;

        if (res > 0) {
          right = coordinate[numbers[i]];
          sentence = sentence + "R";
        } else if (res < 0) {
          left = coordinate[numbers[i]];
          sentence = sentence + "L";
        } else {
          if (hand === "left") {
            left = coordinate[numbers[i]];
            sentence = sentence + "L";
          } else {
            right = coordinate[numbers[i]];
            sentence = sentence + "R";
          }
        }
        break;
    }
  }
  return sentence;
}
