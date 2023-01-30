function solution(today, terms, privacies) {
  // 모든 달은 28일까지 있다고 가정
  // 입력값
  // 오늘 날짜를 의미하는 문자열 - today, 약관의 유효기간을 담은 1차원 문자열 배열 - terms
  // 수집된 개인정보를 담은 1차원 문자열 배열 - privacies

  // today는 "YYYY.MM.DD" 형태
  // terms의 원소는 "약관 종류 유효기간" 형태의 약관 종류와 유효기간을 공백 하나로 구분한 문자열

  //약관 종류는 A~Z중 알파벳 대문자 하나, 약관 종류는 중복되지 않습니다.
  //     const term = [...new Set(terms)]

  //     // privacies[i]는 i+1번 개인정보의 수집 일자와 약관 종류
  //     for(let i=0;i<privacies.length;i++){
  //         console.log(term.map(str=>Number(str.split(' ')[1])))
  //         const date = privacies[i].split(' ')[0];
  //         const species = privacies[i].split(' ')[1];
  //     }

  // privacies의 원소는 "날짜 약관 종류" 형태의 날짜와 약관 종류를 공백 하나로 구분한 문자열
  // privacies의 약관 종류는 항상 terms에 나타난 약관 종류만 주어집니다.

  // today와 privacies에 등장하는 날짜의 YYYY는 연도, MM은 월, DD는 일을 나타내며 점(.) 하나로 구분
  // MM이 한 자릿수인 경우 앞에 0이 붙습니다. DD가 한 자릿수인 경우 앞에 0이 붙습니다.

  const answer = [];

  const todayDate = new Date(today);

  const term = {};

  for (let i = 0; i < terms.length; i++) {
    const [type, species] = terms[i].split(" ");
    term[type] = Number(species);
  }

  for (let i = 0; i < privacies.length; i++) {
    const [date, species] = privacies[i].split(" ");
    const chosenDate = new Date(date);
    chosenDate.setMonth(chosenDate.getMonth() + term[species]);

    if (chosenDate <= todayDate) answer.push(i + 1);
  }
  return answer;
}

// console.log(
//   solution(
//     "2022.05.19",
//     ["A 6", "B 12", "C 3"],
//     ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
//   )
// );
