/*
정확성  테스트
테스트 1 〉	통과 (0.24ms, 33.5MB)
테스트 2 〉	통과 (0.21ms, 33.6MB)
테스트 3 〉	통과 (0.23ms, 33.5MB)
테스트 4 〉	통과 (0.26ms, 33.6MB)
테스트 5 〉	통과 (0.35ms, 33.4MB)
테스트 6 〉	통과 (0.25ms, 33.4MB)
테스트 7 〉	통과 (0.21ms, 33.5MB)
테스트 8 〉	통과 (0.24ms, 33.5MB)
테스트 9 〉	통과 (0.22ms, 33.4MB)
테스트 10 〉	통과 (0.35ms, 33.5MB)
테스트 11 〉	통과 (0.28ms, 33.5MB)
테스트 12 〉	통과 (0.28ms, 33.5MB)
테스트 13 〉	통과 (0.29ms, 33.1MB)
테스트 14 〉	통과 (0.24ms, 33.5MB)
테스트 15 〉	통과 (0.24ms, 33.5MB)
테스트 16 〉	통과 (0.24ms, 33.5MB)
테스트 17 〉	통과 (0.27ms, 33.5MB)
테스트 18 〉	통과 (0.26ms, 33.5MB)
테스트 19 〉	통과 (0.32ms, 33.6MB)
테스트 20 〉	통과 (0.23ms, 33.4MB)
테스트 21 〉	통과 (0.30ms, 33.5MB)
테스트 22 〉	통과 (0.20ms, 33.5MB)
테스트 23 〉	통과 (0.20ms, 33.5MB)
테스트 24 〉	통과 (0.22ms, 33.5MB)
테스트 25 〉	통과 (0.31ms, 33.5MB)
테스트 26 〉	통과 (0.20ms, 33.4MB)
subString 정규표현식
*/

function solution(new_id) {
  return s7(s6(s5(s4(s3(s2(s1(new_id)))))));
}

function s1(id) {
  return id.toLowerCase();
}

function s2(id) {
  return id.match(/[\w|\.|_|-]+/g).join("");
}

function s3(id) {
  return id.split(/\.\.+/g).join(".");
}

function s4(id) {
  if (id[0] === ".") id = id.substring(1, id.length);
  if (id[id.length - 1] === ".") id = id.substring(0, id.length - 1);
  return id;
}

function s5(id) {
  return id.length === 0 ? "a" : id;
}

function s6(id) {
  if (id.length >= 16) {
    id = id.substring(0, 15);
    if (id[id.length - 1] === ".") id = id.substring(0, id.length - 1);
  }
  return id;
}

function s7(id) {
  if (id.length <= 2) {
    for (; id.length < 3; ) id = id + id[id.length - 1];
  }
  return id;
}
