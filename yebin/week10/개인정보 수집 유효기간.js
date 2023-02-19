/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.15ms, 33.5MB)
테스트 2 〉	통과 (0.29ms, 33.5MB)
테스트 3 〉	통과 (0.20ms, 33.4MB)
테스트 4 〉	통과 (0.25ms, 33.5MB)
테스트 5 〉	통과 (0.29ms, 33.5MB)
테스트 6 〉	통과 (0.39ms, 33.5MB)
테스트 7 〉	통과 (0.37ms, 33.4MB)
테스트 8 〉	통과 (0.34ms, 33.5MB)
테스트 9 〉	통과 (0.46ms, 33.5MB)
테스트 10 〉	통과 (0.47ms, 33.5MB)
테스트 11 〉	통과 (0.44ms, 33.6MB)
테스트 12 〉	통과 (0.60ms, 33.5MB)
테스트 13 〉	통과 (0.62ms, 33.6MB)
테스트 14 〉	통과 (0.62ms, 33.6MB)
테스트 15 〉	통과 (0.57ms, 33.6MB)
테스트 16 〉	통과 (0.68ms, 33.6MB)
테스트 17 〉	통과 (0.71ms, 33.6MB)
테스트 18 〉	통과 (0.71ms, 33.2MB)
테스트 19 〉	통과 (0.71ms, 33.3MB)
테스트 20 〉	통과 (0.72ms, 33.7MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(today, terms, privacies) {
  let termDays = {};
  for (term of terms) {
    const [name, month] = term.split(" ");
    termDays[name] = +month * 28;
  }

  const result = privacies
    .map((privacy) => {
      const [date, term] = privacy.split(" ");
      return intoDays(date) + termDays[term];
    })
    .map((days, idx) => {
      if (days - intoDays(today) <= 0) return idx + 1;
      return "not yet";
    })
    .filter((el) => el !== "not yet");

  return result;
}

// 날짜를 일수로 변환하는 함수
function intoDays(date) {
  const [year, month, day] = date.split(".").map((el) => +el);
  return (year * 12 + month) * 28 + day;
}

// 일수를 날짜로 변환하는 함수(디버깅용 함수)
function intoDate(days) {
  let month = days % 28 === 0 ? days / 28 - 1 : Math.floor(days / 28);
  let day = days - month * 28;
  const year = month % 12 === 0 ? month / 12 - 1 : Math.floor(month / 12);
  month -= year * 12;
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  return `${year}.${month}.${day}`;
}

//다른 사람의 풀이
function solution(today, terms, privacies) {
  var answer = [];
  var [year, month, date] = today.split(".").map(Number);
  var todates = year * 12 * 28 + month * 28 + date;
  var t = {};
  terms.forEach((e) => {
    let [a, b] = e.split(" ");
    t[a] = Number(b);
  });
  privacies.forEach((e, i) => {
    var [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  return answer;
}
