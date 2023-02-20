function solution(fees, records) {
  // 주차장의 요금표, 입차,출차 기록이 주어졌을 때, 차량별로 주차 요금을 구해야 함
  // 입차된 후에 출차 내역이 없으면 23:59에 출차된 것으로 간주
  // 0000번 차량은 18:59에 입차되고 나서, 출차 내역이 없음 따라서 23:59분에 나간걸로 간주

  // 누적 주차 시간 <= 기본 시간 => 기본 요금
  // 누적 주차 시간 > 기본 시간 => 기본 요금 + 초과 시간에 대해 단위 시간마다 단위 요금 청구

  // 초과 시간이 단위 시간으로 나누어 떨어지지 않으면 올림
  // ⌈a⌉ : a보다 작지 않은 최소의 정수. 즉, 올림

  // 입력값: 주차 요금을 나타내는 정수 배열, 자동차의 입/출차 내역을 나타내는 문자열 배열
  // 출력값: 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 담은 정수 배열

  // records는 시각, 차량 번호, 내역 하나의 공백으로 구분
  // HH:MM은 00:00부터 23:59까지
  // 차량 번호는 '0'~'9'로 구성된 길이가 4인 문자열
  // 내역 IN 또는 OUT

  //records는 시각을 기준으로 오름차순으로 정렬되어 주어짐

  const reduceParkTime = new Map();
  const parked = new Map();

  const [defaultTime, defaultFee, perHour, perPrice] = fees; // 각각 기본 시간, 기본 요금, 단위 시간, 단위 요금

  records.forEach((record) => {
    const [time, num, history] = record.split(" "); //시각, 차량 번호, 내역
    const [hours, minutes] = time.split(":"); // 시간,분 나타내기
    const entryTime = 60 * Number(hours) + Number(minutes);

    // IN인 경우 차량번호와 입차 기록 세팅
    if (history == "IN") parked.set(num, entryTime);
    // OUT인 경우
    else {
      reduceParkTime.set(
        num,
        getReducedParkTime(reduceParkTime, num) + (entryTime - parked.get(num))
      );
      // 차량의 누적 주차 시간 + 출차할 때의 현재 시간에서 입차했을 때 시간을 뺀 값
      parked.delete(num); //parked에서 삭제
    }
  });

  for (let [num, time] of parked.entries()) {
    reduceParkTime.set(
      num,
      getReducedParkTime(reduceParkTime, num) + (1439 - time)
    );
  }

  // 차량의 누적 주차 시간 기록, 만약 기록이 안됐으면 0
  function getReducedParkTime(price, num) {
    return price.get(num) || 0;
  }

  //reduceParkTime이 정렬되어 나온 time이 기본 시간보다 작으면 기본 요금, 아니면 기본 요금에 더해서, 초과한 시간에 대해서 단위 시간 마다 단위 요금을 청구
  return [...reduceParkTime]
    .sort((a, b) => a[0] - b[0])
    .map((time) =>
      time[1] < defaultTime
        ? defaultFee
        : defaultFee + Math.ceil((time[1] - defaultTime) / perHour) * perPrice
    );
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
); // [14600, 34400, 5000]

// console.log(
//   solution(
//     [120, 0, 60, 591],
//     [
//       "16:00 3961 IN",
//       "16:00 0202 IN",
//       "18:00 3961 OUT",
//       "18:00 0202 OUT",
//       "23:58 3961 IN",
//     ]
//   )
// ); // [0, 591]

// console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"])); // [14841]
