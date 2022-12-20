// 반복문으로 다시 돌려서 해봤는데 효율성 안되서 수정하고 통과된 코드 먼저 sort로 정렬해주기
function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();
  for (let a = 0; a < participant.length; a++) {
    if (participant[a] !== completion[a]) {
      return participant[a];
    }
  }
  return participant;
}

// 처음 한 건데 안 풀림
function solution(participant, completion) {
  participant.filter((el) => completion.includes(el));
}

// 해시라는 자료구조에 맞게 푸는 방법
// 덕분에 해시에 대해서 찾아보고 맵과 셋에 대해서도 공부할 수 있었다.
function solution(participant, completion) {
  //맵을 만들기
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    // key로 a이용 value에 map.get(a)값을 넣었지만 없기에 0이 들어감
    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  // map을 for of 반복해서 value가 1이면 key 리턴
  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}
