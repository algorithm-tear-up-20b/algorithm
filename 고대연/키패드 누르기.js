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
  //2차원 배열의 인덱스로 풀이 0~9 , *, #에 해당하는 좌표를 설정
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
      //2,5,8,0 일때 누를 좌표의 값과 L,R의 현재 위치한 값의 이동길이를 측정후 비교
      default:
        let Ldistance =
          Math.abs(coordinate[numbers[i]][0] - left[0]) +
          Math.abs(coordinate[numbers[i]][1] - left[1]);
        let Rdistance =
          Math.abs(coordinate[numbers[i]][0] - right[0]) +
          Math.abs(coordinate[numbers[i]][1] - right[1]);

        if (Ldistance > Rdistance) {
          right = coordinate[numbers[i]];
          sentence = sentence + "R";
        } else if (Ldistance < Rdistance) {
          left = coordinate[numbers[i]];
          sentence = sentence + "L";
        } else {
          //같을경우엔 hand값에 따라결정
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
