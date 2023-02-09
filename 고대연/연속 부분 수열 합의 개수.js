/**
정확성  테스트
테스트 1 〉	통과 (0.20ms, 33.6MB)
테스트 2 〉	통과 (29.57ms, 37.8MB)
테스트 3 〉	통과 (57.86ms, 40.1MB)
테스트 4 〉	통과 (84.81ms, 47.7MB)
테스트 5 〉	통과 (184.12ms, 46MB)
테스트 6 〉	통과 (338.62ms, 58.2MB)
테스트 7 〉	통과 (482.95ms, 61.7MB)
테스트 8 〉	통과 (802.93ms, 63.9MB)
테스트 9 〉	통과 (813.90ms, 83.5MB)
테스트 10 〉	통과 (934.80ms, 86.4MB)
테스트 11 〉	통과 (218.63ms, 50.1MB)
테스트 12 〉	통과 (226.24ms, 56.8MB)
테스트 13 〉	통과 (290.76ms, 59.4MB)
테스트 14 〉	통과 (376.99ms, 60.8MB)
테스트 15 〉	통과 (491.84ms, 61.9MB)
테스트 16 〉	통과 (514.51ms, 63.1MB)
테스트 17 〉	통과 (645.42ms, 73.8MB)
테스트 18 〉	통과 (812.87ms, 82.1MB)
테스트 19 〉	통과 (851.95ms, 74.9MB)
테스트 20 〉	통과 (949.35ms, 76.3MB)
 */

function solution(elements) {
  const obj = {};

  for (let i = 0; i < elements.length; i++) {
    s2(i + 1);
  }

  function s2(len) {
    for (let i = 0; i < elements.length; i++) {
      let total = 0;
      let templen = len;
      for (let j = i; ; j++) {
        total += elements[j];
        templen--;
        if (j + 1 >= elements.length) j = -1;

        if (templen <= 0) break;
      }
      obj[total] = obj[total] || 0 + 1;
    }
  }

  return Object.keys(obj).length;
}
