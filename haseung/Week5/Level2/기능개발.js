function solution(progresses, speeds) {
  let answer = [];
  let days = 1;
  let cnt = 0;
  let progress = 0;

  while (progresses[0]) {
    progress = progresses[0] + speeds[0] * days;
    if (progress >= 100) {
      cnt++;
      progresses.shift();
      speeds.shift();
    } else {
      if (cnt > 0) answer.push(cnt);
      days++;
      cnt = 0;
    }
  }
  answer.push(cnt);
  return answer;
}

// console.log(solution([93, 30, 55], [1, 30, 5]));

/*정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.22ms, 33.6MB)
테스트 3 〉	통과 (0.14ms, 33.4MB)
테스트 4 〉	통과 (0.20ms, 33.5MB)
테스트 5 〉	통과 (0.16ms, 33.5MB)
테스트 6 〉	통과 (0.18ms, 33.4MB)
테스트 7 〉	통과 (0.14ms, 33.5MB)
테스트 8 〉	통과 (0.15ms, 33.5MB)
테스트 9 〉	통과 (0.13ms, 33.4MB)
테스트 10 〉	통과 (0.14ms, 33.5MB)
테스트 11 〉	통과 (0.04ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
