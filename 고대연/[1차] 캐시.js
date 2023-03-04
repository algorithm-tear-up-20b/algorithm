/*
정확성  테스트
테스트 1 〉	통과 (0.07ms, 33.5MB)
테스트 2 〉	통과 (0.11ms, 33.5MB)
테스트 3 〉	통과 (0.21ms, 33.4MB)
테스트 4 〉	통과 (0.15ms, 33.4MB)
테스트 5 〉	통과 (0.09ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	통과 (0.04ms, 33.4MB)
테스트 8 〉	통과 (0.26ms, 33.5MB)
테스트 9 〉	통과 (0.08ms, 33.5MB)
테스트 10 〉	통과 (0.19ms, 33.5MB)
테스트 11 〉	통과 (35.64ms, 44MB)
테스트 12 〉	통과 (0.25ms, 33.6MB)
테스트 13 〉	통과 (0.21ms, 33.4MB)
테스트 14 〉	통과 (0.25ms, 33.4MB)
테스트 15 〉	통과 (0.26ms, 33.5MB)
테스트 16 〉	통과 (0.47ms, 33.4MB)
테스트 17 〉	통과 (0.04ms, 33.5MB)
테스트 18 〉	통과 (0.45ms, 33.6MB)
테스트 19 〉	통과 (0.87ms, 33.5MB)
테스트 20 〉	통과 (0.52ms, 33.5MB)

매개변수로 배열전달시 값변경 개념오류가 있었음.
*/
function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let runtime = 0;
  let arr = [];
  for (let i = 0; i < cities.length; i++) {
    cities[i] = cities[i].toLowerCase();
    runtime += searchIndex(arr, cities[i], cacheSize);
  }
  return runtime;
}

function searchIndex(arr, word, cacheSize) {
  let index = arr.indexOf(word);
  if (index === -1) {
    if (cacheSize === arr.length) {
      arr.shift();
      arr.push(word);
    } else arr.push(word);

    return 5;
  } else {
    _switch(arr, index);
    return 1;
  }
}

function _switch(arr, a) {
  let temp = arr[a];
  arr.splice(a, 1);
  arr.push(temp);
}
