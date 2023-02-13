function solution(msg) {
  const obj = {};
  initObj(obj);

  let idx = 0;
  let length = 26;
  const arr = [];

  while (idx < msg.length) {
    let { saved, target, i } = findString(obj, msg, idx);
    idx = i;
    outputKey(obj, arr, saved);
    length = addKey(obj, target, length);
  }

  return arr;
}

//객체 초기화 (1번 문항)
const initObj = (obj) => {
  for (let i = 65; i < 91; i++) {
    const word = String.fromCharCode(i);
    obj[word] = i - 64;
  }
};

//(2번 문항)
const findString = (obj, msg, i) => {
  let saved = "";
  let target = msg[i];

  while (obj[target]) {
    saved = target;
    target = target + msg[++i];
  }

  //가장긴 문자열, 사전에 등록되지 않은 문자열, msg의 위치를 가리키는 포인터
  return { saved, target, i };
};

//obj에 새로운 키를 등록 (4번문항)
const addKey = (obj, key, length) => {
  obj[key] = ++length;

  //총길이 리턴(다음 키의 번호)
  return length;
};

//색인번호 출력 (3번문항)
const outputKey = (obj, arr, key) => {
  arr.push(obj[key]);
};
