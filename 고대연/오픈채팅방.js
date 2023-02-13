/*
정확성  테스트
테스트 1 〉	통과 (0.24ms, 33.4MB)
테스트 2 〉	통과 (0.14ms, 33.5MB)
테스트 3 〉	통과 (0.34ms, 33.5MB)
테스트 4 〉	통과 (0.38ms, 33.5MB)
테스트 5 〉	통과 (1.83ms, 34.3MB)
테스트 6 〉	통과 (3.90ms, 34.3MB)
테스트 7 〉	통과 (2.03ms, 34.3MB)
테스트 8 〉	통과 (2.36ms, 34.3MB)
테스트 9 〉	통과 (2.62ms, 34.7MB)
테스트 10 〉	통과 (3.18ms, 34.3MB)
테스트 11 〉	통과 (2.41ms, 33.9MB)
테스트 12 〉	통과 (1.39ms, 33.9MB)
테스트 13 〉	통과 (2.48ms, 34.2MB)
테스트 14 〉	통과 (3.28ms, 34.5MB)
테스트 15 〉	통과 (0.13ms, 33.4MB)
테스트 16 〉	통과 (0.14ms, 33.3MB)
테스트 17 〉	통과 (0.42ms, 33.6MB)
테스트 18 〉	통과 (0.43ms, 33.5MB)
테스트 19 〉	통과 (2.24ms, 34.4MB)
테스트 20 〉	통과 (2.37ms, 34.2MB)
테스트 21 〉	통과 (2.33ms, 34.3MB)
테스트 22 〉	통과 (2.37ms, 34.2MB)
테스트 23 〉	통과 (2.22ms, 34.3MB)
테스트 24 〉	통과 (2.30ms, 34.4MB)
테스트 25 〉	통과 (193.34ms, 78.5MB)
테스트 26 〉	통과 (217.34ms, 93.7MB)
테스트 27 〉	통과 (281.23ms, 98.7MB)
테스트 28 〉	통과 (291.56ms, 102MB)
테스트 29 〉	통과 (286.85ms, 102MB)
테스트 30 〉	통과 (236.26ms, 75.5MB)
테스트 31 〉	통과 (252.59ms, 104MB)
테스트 32 〉	통과 (181.21ms, 80.3MB)
*/
function solution(record) {
  //id, nickname
  const obj = {};
  //callback함수들을 담아놓는 queue
  const queue = [];
  const result = [];

  //처음 record를 돌면서 obj를 초기화하고 callback함수를 큐에 쌓는다
  for (let i = 0; i < record.length; i++) {
    const [action, id, nickname] = record[i].split(" ");
    obj[id] = nickname || obj[id];
    queue.push(callback);
  }

  //한번더 돌면서 큐에 인자를 줘서 callback함수를 실행시킨다.
  for (let i = 0; i < record.length; i++) {
    const [action, id, nickname] = record[i].split(" ");
    queue[i](obj[id], result, action);
  }

  return result;
}

const callback = (nickname, result, action) => {
  switch (action) {
    case "Enter":
      result.push(`${nickname}님이 들어왔습니다.`);
      break;
    case "Leave":
      result.push(`${nickname}님이 나갔습니다.`);
      break;
    case "Change":
      break;
    default:
      break;
  }
};
