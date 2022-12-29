/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.15ms, 33.5MB)
테스트 2 〉	통과 (0.20ms, 33.5MB)
테스트 3 〉	통과 (0.16ms, 33.5MB)
테스트 4 〉	통과 (0.17ms, 33.6MB)
테스트 5 〉	통과 (0.25ms, 33.5MB)
테스트 6 〉	통과 (0.17ms, 33.6MB)
테스트 7 〉	통과 (0.14ms, 33.6MB)
테스트 8 〉	통과 (0.21ms, 33.5MB)
테스트 9 〉	통과 (0.14ms, 33.6MB)
테스트 10 〉	통과 (0.24ms, 33.6MB)
테스트 11 〉	통과 (0.19ms, 33.4MB)
테스트 12 〉	통과 (0.16ms, 33.6MB)
테스트 13 〉	통과 (0.22ms, 33.6MB)
테스트 14 〉	통과 (0.22ms, 33.6MB)
테스트 15 〉	통과 (0.22ms, 33.6MB)
테스트 16 〉	통과 (0.30ms, 33.5MB)
테스트 17 〉	통과 (0.26ms, 33.5MB)
테스트 18 〉	통과 (0.22ms, 33.6MB)
테스트 19 〉	통과 (0.41ms, 33.6MB)
테스트 20 〉	통과 (0.17ms, 32.5MB)
테스트 21 〉	통과 (0.36ms, 33.5MB)
테스트 22 〉	통과 (0.16ms, 33.5MB)
테스트 23 〉	통과 (0.21ms, 33.5MB)
테스트 24 〉	통과 (0.34ms, 33.6MB)
테스트 25 〉	통과 (0.23ms, 33.7MB)
테스트 26 〉	통과 (0.32ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .match(/[a-z0-9-_\.]/g)
    .join("")
    .replace(/\.{2,}/g, ".");
  if (new_id[0] === ".") new_id = new_id.substring(1);
  if (new_id.at(-1) === ".") new_id = new_id.substring(new_id.length - 1, -1);
  if (new_id === "") new_id = "a";
  new_id = new_id.substring(0, 15);
  if (new_id.at(-1) === ".") new_id = new_id.substring(new_id.length - 1, -1);
  while (new_id.length < 3) {
    new_id += new_id.at(-1);
  }
  return new_id;
}

//다른 사람의 풀이
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    // \w === [A-Za-z0-9_]
    .replace(/[^\w-.]/g, "") // 2
    // + : 최소 한개 or 여러개
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
