/*
정확성  테스트
테스트 1 〉	통과 (0.28ms, 33.5MB)
테스트 2 〉	통과 (0.20ms, 33.6MB)
테스트 3 〉	통과 (0.60ms, 33.6MB)
테스트 4 〉	통과 (0.87ms, 33.5MB)
테스트 5 〉	통과 (1.08ms, 33.8MB)
테스트 6 〉	통과 (0.84ms, 33.7MB)
테스트 7 〉	통과 (3.28ms, 34.7MB)
테스트 8 〉	통과 (2.56ms, 34.2MB)
테스트 9 〉	통과 (0.80ms, 33.7MB)
테스트 10 〉	통과 (5.58ms, 34.5MB)
테스트 11 〉	통과 (4.23ms, 34.8MB)
테스트 12 〉	통과 (6.98ms, 34.7MB)
테스트 13 〉	통과 (0.40ms, 33.5MB)
테스트 14 〉	통과 (0.27ms, 33.5MB)
테스트 15 〉	통과 (0.21ms, 33.5MB)
테스트 16 〉	통과 (0.20ms, 33.5MB)
*/

function solution(fees, records) {
  const obj = {};

  records.forEach((record) => {
    let [time, carNum, action] = record.split(" ");
    carNum *= 1; //obj에 키값을 오름차순으로 해주기 위함

    // In일때만 기록하고 Out이면 시간을 계산
    if (action === "IN") {
      obj[carNum] = !obj[carNum]
        ? (obj[carNum] = { cumulativeTime: 0, IN: time })
        : (obj[carNum] = Object.assign(obj[carNum], { IN: time }));
    } else if (action === "OUT") {
      obj[carNum].cumulativeTime += calTime(obj[carNum].IN, time);
      obj[carNum].IN = 0;
    }
  });

  const result = [];
  Object.keys(obj).forEach((key) => {
    // action이 OUT일때 obj[carNum].IN = 0; 처리를 해줬으므로 출차를 안했을 경우 0이아니므로.
    if (obj[key].IN) {
      obj[key].cumulativeTime += calTime(obj[key].IN);
    }

    result.push(calPay(fees, obj[key].cumulativeTime));
  });
  return result;
}

const calTime = (start, end = "23:59") => {
  const [startH, startM] = start.split(":");
  const [endH, endM] = end.split(":");
  const hour = (endH - startH) * 60;
  const minute = endM - startM;
  return hour + minute;
};

const calPay = (fees, time) => {
  //fees : 기본시간(분) 기본요금(원) 단위시간(분) 단위요금(원)
  const [defaultT, defaultP, unitT, unitP] = fees;
  return time <= defaultT
    ? defaultP
    : Math.ceil((time - defaultT) / unitT) * unitP + defaultP;
};
