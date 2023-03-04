/*
 반복문이 돌때마다 speeds의 값을 progresses에 대입하거나 배포될것의 100%가 되는 값을 찾아서 모든 배열에 곱함.
 가장 오래된 작업물이 배포될때 작업률이 100이상인 것만뺌. 
 배포가 완료된 개수를 큐에 넣음
*/

function solution(progresses, speeds) {
  let count = [];
  while (progresses.length > 0) {
    let day = Math.ceil((100 - progresses[0]) / speeds[0]);
    prosessingProgresses(progresses, speeds, day);
    count.push(depolyment(progresses, speeds));
  }
  return count;
}

function prosessingProgresses(progresses, speeds, day) {
  for (let i = 0; i < progresses.length; i++) {
    progresses[i] += day * speeds[i];
  }
}

function depolyment(progresses, speeds) {
  let count = 0;
  for (let i = 0; i < progresses.length; i++) {
    if (progresses[i] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
      i--;
    } else break;
  }
  return count;
}
