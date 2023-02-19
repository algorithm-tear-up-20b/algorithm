function solution(progresses, speeds) {
  // 7 3 9
  // 5 10 1 1 20 1
  let remainProgress,
    nowDaysNeed = 0,
    prevDaysNeed = 0;
  let funcToDistribute = 0;
  const result = [];

  for (let i = 0; i < progresses.length; i++) {
    remainProgress = 100 - progresses[i];
    nowDaysNeed = Math.ceil(remainProgress / speeds[i]);
    if (nowDaysNeed === prevDaysNeed) {
      funcToDistribute++;
      continue;
    }
    prevDaysNeed = Math.max(nowDaysNeed, prevDaysNeed);

    if (nowDaysNeed !== prevDaysNeed) {
      funcToDistribute++;
    } else {
      result.push(funcToDistribute);
      funcToDistribute = 1;
    }
  }

  result.push(funcToDistribute);

  if (result[0] === 0) return result.slice(1);
  if (result.at(-1) === 0) return result.slice(0, -1);
  return result;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.21ms, 33.5MB)
테스트 3 〉	통과 (0.16ms, 33.5MB)
테스트 4 〉	통과 (0.15ms, 33.6MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.16ms, 33.5MB)
테스트 8 〉	통과 (0.06ms, 33.4MB)
테스트 9 〉	통과 (0.15ms, 33.5MB)
테스트 10 〉	통과 (0.15ms, 33.5MB)
테스트 11 〉	통과 (0.06ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
