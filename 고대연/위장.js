//1시간

//재귀 풀이
function solution(clothes) {
  const obj = {};
  for (let i = 0; i < clothes.length; i++) {
    if (obj[clothes[i][1]]) obj[clothes[i][1]].push(clothes[i][0]);
    else obj[clothes[i][1]] = [clothes[i][0]];
  }

  const totalArr = [];
  const keys = Object.keys(obj);
  const recursive = (i, arr) => {
    for (; i < keys.length; i++) {
      for (let j = 0; j < obj[keys[i]].length; j++) {
        let temparr = [...arr, obj[keys[i]][j]];
        totalArr.push(temparr);
        recursive(i + 1, temparr);
      }
    }
  };
  recursive(0, []);
  return totalArr.length;
}

// 수학적 풀이
// 경우의 수의 형태와 연립방적식의 형태가같음
function solution(clothes) {
  const obj = {};
  for (let i = 0; i < clothes.length; i++) {
    if (obj[clothes[i][1]]) obj[clothes[i][1]].push(clothes[i][0]);
    else obj[clothes[i][1]] = [clothes[i][0]];
  }

  let total = [];
  for (let k in obj) {
    total.push(obj[k].length + 1);
  }

  return total.reduce((a, b) => a * b, 1) - 1;
}
