/*
정확성  테스트
테스트 1 〉	통과 (0.11ms, 33.5MB)
테스트 2 〉	통과 (0.22ms, 33.5MB)
테스트 3 〉	통과 (0.22ms, 33.4MB)
테스트 4 〉	통과 (0.23ms, 33.5MB)
테스트 5 〉	통과 (0.29ms, 33.6MB)
테스트 6 〉	통과 (0.30ms, 33.5MB)
테스트 7 〉	통과 (0.29ms, 33.5MB)
테스트 8 〉	통과 (0.34ms, 33.6MB)
테스트 9 〉	통과 (0.34ms, 33.6MB)
테스트 10 〉	통과 (0.34ms, 33.6MB)
테스트 11 〉	통과 (0.38ms, 33.6MB)
테스트 12 〉	통과 (0.38ms, 33.6MB)
테스트 13 〉	통과 (0.61ms, 33.6MB)
테스트 14 〉	통과 (16.35ms, 39.1MB)
테스트 15 〉	통과 (15.81ms, 39MB)
테스트 16 〉	통과 (14.89ms, 39MB)
테스트 17 〉	통과 (1.21ms, 34MB)
테스트 18 〉	통과 (1.96ms, 34.4MB)
테스트 19 〉	통과 (0.56ms, 33.7MB)
테스트 20 〉	통과 (1.43ms, 34.3MB)
테스트 21 〉	통과 (16.66ms, 39.2MB)
테스트 22 〉	통과 (7.45ms, 38.2MB)
테스트 23 〉	통과 (10.84ms, 39MB)
테스트 24 〉	통과 (10.22ms, 38.4MB)
테스트 25 〉	통과 (8.88ms, 38.4MB)
테스트 26 〉	통과 (8.62ms, 39.1MB)
*/

function solution(n, t, m, p) {
  //말한 숫자들
  const result = [];

  // t번 말 할 때 까지 계속 진행
  let turn = 1;
  for (let i = 0; result.length < t; i++) {
    let num = convertN(i, n).toString();
    for (let j = 0; j < num.length && result.length < t; j++) {
      //내 turn일때
      if (turn === p) {
        result.push(num[j]);
      }

      //모든사람이 다 말했을 경우
      if (turn === m) {
        turn = 0;
      }
      turn++;
    }
  }

  return result.join("");
}

//숫자 , 진법
const convertN = (num, n) => {
  if (num === 0) return 0;

  let arr = [];
  let obj = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  while (num) {
    let remainder = num % n;
    num = Math.floor(num / n);
    obj[remainder] ? arr.push(obj[remainder]) : arr.push(remainder);
  }
  return arr.reverse().join("");
};
