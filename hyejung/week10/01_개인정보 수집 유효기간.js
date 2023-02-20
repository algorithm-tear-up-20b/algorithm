/*
[PGS] 개인정보 수집 유효기간 /LV.1 / 60분
*/

/*
[문제]
- 1 ~ n 번으로 분류되는 개인정보 n개
- 약관 종류마다 정해진 유효기간 있음
- 어떤 약관에 의해 수집되었는지 알고있음
- 유효기간이 지난 후 파기 필요
- 오늘 날짜로 파기해야할 개인정보를 구하려고 함
- 모든 달은 28일까지 있다고 가정
- today, terms, privacies 가 주어질 때 파기해야할 개인정보 번호 오름차순 정렬

[접근]
1. 날짜, 약관이 주어질 때 날짜에 약관 종류에 따른 보관기한 +1 을 한다.
- year,month,day 가 있을 때,
  month + term > 12 => year++
  day + 1 > 29 => month ++
- term 의 보관 기한이 1 ~ 100 이하이므로, 나눈 나머지값을 더해야할 것 같다.

2. 해당 일자를 오늘 날짜와 비교해 유효기간이 지났는지 파악한다.
- 오늘 날짜를 year, month, day 로 분해하여 숫자로 변환한 뒤 값을 비교한다. 
- year > 약관 -> push
  year == 약관 && month > 약관 => push
  year & month == 약관 && day > 약관 => push

3. 파기해야할 정보라면 answer 배열에 해당 인덱스 +1 을 push 한다.
*/

function solution(today, terms, privacies) {
  const answer = [];

  const expirationDates = privacies.map(privacy => {
    // 각 개인정보의 등록 일자를 year, month, day로 분리
    let [year, month, day] = privacy.split('.').map(date => {
      return +date ? +date : date;
    });

    // 개인정보별 약관 유형
    const type = day.at(-1);
    day = Number(day.split(' ')[0]);

    // 해당하는 약관의 보관 기한
    const term = Number(
      terms.filter(term => term[0] === type)[0].split(' ')[1],
    );

    // 월을 더한다.
    month += term;

    if (month > 12) {
      month = Math.floor(month % 12);
      // 년도를 증감할 때는 term 12 즉 1년인 경우를 고려하여 증가
      year += month / 12 > 1 ? Math.floor(month / 12) : 1;
    }
    return {year, month, day};
  });

  const [todayYear, todayMonth, todayDay] = today.split('.').map(date => +date);

  // 유효기간이 지났는지 확인
  for (let i = 0; i < expirationDates.length; i++) {
    const date = expirationDates[i];
    // 년도가 지난 경우
    if (todayYear > date.year) {
      answer.push(i + 1);
      continue;
    }
    // 년도가 같은 경우
    else if (todayYear === date.year) {
      // 월이 지난 경우
      if (todayMonth > date.month) {
        answer.push(i + 1);
        continue;
      }
      // 월은 같은데 날짜가 지난 경우
      else if (todayMonth === date.month && todayDay > date.day) {
        answer.push(i + 1);
        continue;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'],
  ),
);
