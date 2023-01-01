/*
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.4MB)
테스트 2 〉	통과 (0.09ms, 33.4MB)
테스트 3 〉	통과 (0.09ms, 33.4MB)
테스트 4 〉	통과 (0.09ms, 33.5MB)
테스트 5 〉	통과 (0.10ms, 33.4MB)
테스트 6 〉	통과 (0.35ms, 33.5MB)
테스트 7 〉	통과 (0.27ms, 33.5MB)
테스트 8 〉	통과 (0.35ms, 33.5MB)
테스트 9 〉	통과 (0.27ms, 33.5MB)
테스트 10 〉	통과 (0.28ms, 33.6MB)
테스트 11 〉	통과 (428.61ms, 190MB)
테스트 12 〉	통과 (397.49ms, 190MB)
테스트 13 〉	통과 (405.82ms, 189MB)
테스트 14 〉	통과 (404.24ms, 189MB)
테스트 15 〉	통과 (395.38ms, 190MB)
테스트 16 〉	통과 (0.09ms, 33.4MB)
테스트 17 〉	통과 (0.08ms, 33.3MB)
테스트 18 〉	통과 (0.11ms, 33.3MB)
테스트 19 〉	통과 (0.09ms, 33.3MB)
15분
*/

function solution(X, Y) {
  let Xobj = {};
  let Yobj = {};
  for (let i = 0; i < X.length; i++) {
    if (Xobj[X[i]] !== undefined) Xobj[X[i]]++;
    else Xobj[X[i]] = 1;
  }

  for (let i = 0; i < Y.length; i++) {
    if (Yobj[Y[i]] !== undefined) Yobj[Y[i]]++;
    else Yobj[Y[i]] = 1;
  }

  let obj = {};
  for (let key in Xobj) {
    if (Xobj[key] && Yobj[key]) {
      obj[key] = Math.min(Xobj[key], Yobj[key]);
    }
  }

  let arr = [];
  for (let key in obj) {
    for (let i = 0; i < obj[key]; i++) {
      arr.push(key);
    }
  }

  if (arr.length === 0) return "-1";
  else if (arr[arr.length - 1] === "0") return "0";
  else return arr.reverse().join("");
}
