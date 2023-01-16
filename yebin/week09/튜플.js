/**
채점을 시작합니다.
 */

function solution(s) {
  let array = s
    .slice(2, -2)
    .split("},{")
    .map((el) => el.split(","))
    .map((el) => el.map((el1) => +el1))
    .sort((a, b) => a.length - b.length);

  let result = array[0];
  for (el of array) {
    for (let i = 0; i < el.length; i++) {
      if (!result.includes(el[i])) result.push(el[i]);
    }
  }
  return result;
}

//다른 사람의 풀이
