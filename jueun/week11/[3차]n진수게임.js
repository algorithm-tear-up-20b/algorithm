function solution(n, t, m, p) {
  // toString(n).toUpperCase()
  let result = "";
  let now;
  let keepGoing = true;
  let count = 0;

  for (let i = 0; keepGoing; i++) {
    now = i.toString(n).toUpperCase();
    for (let j = 0; j < now.length; j++) {
      count++;
      let tmp = count % m;
      if (tmp === 0) tmp = m;
      if (tmp === p) result += now[j];
      if (result.length === t) {
        keepGoing = false;
        break;
      }
    }
  }

  return result;
}
