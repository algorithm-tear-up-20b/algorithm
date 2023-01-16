/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.09ms, 33.4MB)
테스트 2 〉	통과 (0.22ms, 33.5MB)
테스트 3 〉	통과 (0.21ms, 33.4MB)
테스트 4 〉	통과 (0.21ms, 33.4MB)
테스트 5 〉	통과 (0.09ms, 33.4MB)
테스트 6 〉	통과 (0.12ms, 33.4MB)
테스트 7 〉	통과 (0.31ms, 33.4MB)
테스트 8 〉	통과 (0.11ms, 33.5MB)
테스트 9 〉	통과 (0.19ms, 33.4MB)
테스트 10 〉	통과 (0.21ms, 33.4MB)
테스트 11 〉	통과 (0.09ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(progresses, speeds) {
  let result = [];
  function deploy(progresses, speeds) {
    if (progresses.length === 0) return result;
    if (progresses.length === 1) {
      result.push(1);
      return result;
    }
    const days = Math.ceil((100 - progresses[0]) / speeds[0]);
    progresses = progresses.map((el, idx) =>
      el >= 100 ? el : el + speeds[idx] * days
    );
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) {
        result.push(i);
        break;
      }
      if (i === progresses.length - 1) result.push(progresses.length);
    }
    return deploy(progresses.slice(result.at(-1)), speeds.slice(result.at(-1)));
  }
  return deploy(progresses, speeds);
}

//다른 사람의 풀이
// 코드가 너무 예뻐서 가져와봤습니다..
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
