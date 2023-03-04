//실패한 풀이

function solution(n, k) {
  let count = 0;
  let arr = [];
  //k진법으로 변환
  n = n.toString(k);

  let regexArr = regex(n);
  if (regexArr) arr.push(...regexArr.map((el) => el.split("0")[1]));

  let splited = n.split("0");
  if (splited.length > 1) {
    arr.push(splited[0]);
    splited[splited.length - 1] && arr.push(splited[splited.length - 1]);
  }

  if (n.length === 1) arr.push(n);

  return arr.filter((el) => isPrime(parseInt(el, k))).length;
}

const regex = (num) => {
  const regex = new RegExp("01*[2-9]+1*0", "g");
  return num.match(regex);
};

const isPrime = (num) => {
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

//성공한 풀이
function solution(n, k) {
  return n
    .toString(k)
    .split("0") //' 1230' => ['123','']
    .filter((el) => el !== "" && el !== "1")
    .filter((el) => isPrime(el)).length;
}

const isPrime = (num) => {
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
