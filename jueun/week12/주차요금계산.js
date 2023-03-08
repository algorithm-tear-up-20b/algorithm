// n = 누적 주차 시간
// fees[1] + (Math.ceil((n - fees[0]) / fees[2]) * fees[3])
// 차량 번호 작은 자동차부터 청구할 주차 요금 배열로 리턴

function solution(fees, records) {
  let answer;

  const cars = new Map();
  let time, num, inout, prevTime, inhm, outhm;

  records.map((record) => {
    [time, num, inout] = record.split(" ");

    if (inout === "IN") {
      prevTime = cars.get(num);
      if (prevTime) {
        cars.set(num, [time, prevTime[1]]);
      } else {
        cars.set(num, [time, 0]);
      }
    } else if (inout === "OUT") {
      prevTime = cars.get(num);
      inhm = prevTime[0].split(":").map(Number);
      outhm = time.split(":").map(Number);
      cars.set(num, [
        null,
        prevTime[1] + (outhm[0] * 60 + outhm[1]) - (inhm[0] * 60 + inhm[1]),
      ]);
    }
  });

  for (let [key, value] of cars) {
    if (value[0]) {
      inhm = value[0].split(":").map(Number);
      outhm = [23, 59];
      cars.set(key, [
        null,
        value[1] + (outhm[0] * 60 + outhm[1]) - (inhm[0] * 60 + inhm[1]),
      ]);
    }
  }

  const carArr = Array.from(cars);
  carArr.sort((a, b) => a[0] - b[0]);

  answer = carArr
    .map((el) => el[1][1])
    .map((time) => {
      if (time <= fees[0]) return fees[1];
      return fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
    });

  return answer;
}

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
);
