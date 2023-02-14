function solution(n, k) {
  // toString으로 진수 변환
  // split으로 구분
  // filter로 공백 제거

  let count = 0;
  const changed = n.toString(k);
  const numArray = changed.split("0").filter((el) => el);

  const isPrime = (n) => {
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++)
      if (i !== n && n % i === 0) return false;
    return true;
  };

  for (let i = 0; i < numArray.length; i++) {
    if (isPrime(+numArray[i])) count++;
  }

  return count;
}
