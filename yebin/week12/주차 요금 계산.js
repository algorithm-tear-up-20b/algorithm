/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.42ms, 33.5MB)
테스트 2 〉	통과 (0.37ms, 33.6MB)
테스트 3 〉	통과 (0.63ms, 33.4MB)
테스트 4 〉	통과 (0.61ms, 33.5MB)
테스트 5 〉	통과 (0.87ms, 33.7MB)
테스트 6 〉	통과 (1.12ms, 33.6MB)
테스트 7 〉	통과 (5.69ms, 34.6MB)
테스트 8 〉	통과 (2.46ms, 34.2MB)
테스트 9 〉	통과 (0.87ms, 33.7MB)
테스트 10 〉	통과 (3.26ms, 34.5MB)
테스트 11 〉	통과 (6.84ms, 34.7MB)
테스트 12 〉	통과 (4.20ms, 34.6MB)
테스트 13 〉	통과 (0.28ms, 33.5MB)
테스트 14 〉	통과 (0.34ms, 33.4MB)
테스트 15 〉	통과 (0.22ms, 33.4MB)
테스트 16 〉	통과 (0.21ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  const inTimes = new Map();
  const parkedTimes = {};

  // 주차한 시간을 계산하는 함수
  function getParkedTime(inTime, outTime) {
    return intoMinutes(outTime) - intoMinutes(inTime);
  }

  // 특정 차 번호의 요금을 계산하는 함수
  function getRate(carNumber) {
    const billingTime =
      parkedTimes[carNumber] - defaultTime > 0
        ? parkedTimes[carNumber] - defaultTime
        : 0;
    return defaultFee + Math.ceil(billingTime / unitTime) * unitFee;
  }

  for (let record of records) {
    const [time, carNumber, action] = record.split(" ");
    // 입차 기록이라면 inTimes에 입장 시간 기록
    if (action === "IN") {
      inTimes.set(carNumber, time);
      continue;
    }
    // 출차 기록이라면 parkedTimes에 주차 시간 기록
    const inTime = inTimes.get(carNumber);
    const parkedTime = getParkedTime(inTime, time);
    parkedTimes[carNumber]
      ? (parkedTimes[carNumber] += parkedTime)
      : (parkedTimes[carNumber] = parkedTime);
    inTimes.delete(carNumber);
  }

  // 출차 기록이 없는 차량 주차 시간 기록
  if (inTimes.size) {
    inTimes.forEach((inTime, carNumber) => {
      const parkedTime = getParkedTime(inTime, "23:59");
      parkedTimes[carNumber]
        ? (parkedTimes[carNumber] += parkedTime)
        : (parkedTimes[carNumber] = parkedTime);
    });
  }

  const sortedCarNumbers = Object.keys(parkedTimes).sort((a, b) => a - b);
  const answer = [];
  for (carNumber of sortedCarNumbers) {
    answer.push(getRate(carNumber));
  }

  return answer;
}

// 시각을 분으로 계산하는 함수
function intoMinutes(time) {
  const [h, m] = time.split(":").map((e) => +e);
  return h * 60 + m;
}

//다른 사람의 풀이
function solution(fees, records) {
  const parkingTime = {};
  records.forEach((r) => {
    let [time, id, type] = r.split(" ");
    let [h, m] = time.split(":");
    time = h * 1 * 60 + m * 1;
    if (!parkingTime[id]) parkingTime[id] = 0;
    if (type === "IN") parkingTime[id] += 1439 - time;
    if (type === "OUT") parkingTime[id] -= 1439 - time;
  });
  const answer = [];
  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.20ms, 33.5MB)
테스트 2 〉	통과 (0.15ms, 33.4MB)
테스트 3 〉	통과 (0.32ms, 33.5MB)
테스트 4 〉	통과 (0.43ms, 33.5MB)
테스트 5 〉	통과 (1.11ms, 33.7MB)
테스트 6 〉	통과 (1.09ms, 33.5MB)
테스트 7 〉	통과 (3.20ms, 34.5MB)
테스트 8 〉	통과 (3.37ms, 34.2MB)
테스트 9 〉	통과 (0.75ms, 33.7MB)
테스트 10 〉	통과 (4.09ms, 34.5MB)
테스트 11 〉	통과 (6.13ms, 34.7MB)
테스트 12 〉	통과 (7.99ms, 34.7MB)
테스트 13 〉	통과 (0.19ms, 33.6MB)
테스트 14 〉	통과 (0.18ms, 33.5MB)
테스트 15 〉	통과 (0.15ms, 33.6MB)
테스트 16 〉	통과 (0.20ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
