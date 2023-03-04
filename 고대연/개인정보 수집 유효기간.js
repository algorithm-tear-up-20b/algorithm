/*
정확성  테스트
테스트 1 〉	통과 (0.11ms, 33.6MB)
테스트 2 〉	통과 (0.22ms, 33.5MB)
테스트 3 〉	통과 (0.20ms, 33.6MB)
테스트 4 〉	통과 (0.21ms, 33.6MB)
테스트 5 〉	통과 (0.26ms, 33.5MB)
테스트 6 〉	통과 (0.25ms, 33.5MB)
테스트 7 〉	통과 (0.25ms, 33.5MB)
테스트 8 〉	통과 (0.38ms, 33.5MB)
테스트 9 〉	통과 (0.34ms, 33.5MB)
테스트 10 〉	통과 (0.34ms, 33.5MB)
테스트 11 〉	통과 (0.34ms, 33.5MB)
테스트 12 〉	통과 (0.73ms, 33.6MB)
테스트 13 〉	통과 (0.45ms, 33.6MB)
테스트 14 〉	통과 (0.34ms, 33.6MB)
테스트 15 〉	통과 (0.35ms, 33.5MB)
테스트 16 〉	통과 (0.46ms, 33.5MB)
테스트 17 〉	통과 (0.49ms, 33.5MB)
테스트 18 〉	통과 (0.46ms, 33.5MB)
테스트 19 〉	통과 (0.77ms, 33.6MB)
테스트 20 〉	통과 (0.49ms, 33.6MB)
30분
*/

function solution(today, terms, privacies) {
  const map = new Map();

  for (let i = 0; i < terms.length; i++) {
    const splited = terms[i].split(" ");
    map.set(splited[0], splited[1]);
  }

  let arr = [];

  for (let i = 0; i < privacies.length; i++) {
    const splited = privacies[i].split(" ");
    if (calDate(today, splited[0], map.get(splited[1]))) arr.push(i + 1);
  }

  return arr;
}

const calDate = (today, date, month) => {
  today = today.split(".").map((el) => el * 1);
  date = date.split(".").map((el) => el * 1);

  today = totalDay(today);
  //-1은 문제에서 그렇게나옴..
  date = totalDay(date) + month * 28 - 1;

  if (today > date) return true;
  else return false;
};

const totalDay = (arr) => {
  return (arr[0] - 2000) * 12 * 28 + arr[1] * 28 + arr[2];
};
