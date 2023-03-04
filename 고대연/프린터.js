function solution(priorities, location) {
  let count = 0;
  
  //타겟의 배열에서 위치를 바꾸고 그에따른 인덱스도 바꿈.
  while (1) {
    //큐에 0번인덱스의 값보다 큰수가 있을때 가장 마지막으로 보냄

    if (queueMax(priorities)) {
      priorities.push(priorities.shift());
      if (location === 0) location = priorities.length - 1;
      else location--;
    }
    //큐에 0번인덱스의 값보다 큰수가 없을때
    else {
      priorities.shift();
      count++;
      if (location === 0) break;
      else location--;
    }
  }
  return count;
}
//대기열 문서중에 우선순위가 높은게 있는지 판단
function queueMax(priorities) {
  let maxIndex = 0;
  for (let i = 0; i < priorities.length; i++) {
    if (priorities[i] > priorities[maxIndex]) return true;
  }
  return false;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.28ms, 33.3MB)
테스트 2 〉	통과 (0.37ms, 33.4MB)
테스트 3 〉	통과 (0.15ms, 33.4MB)
테스트 4 〉	통과 (0.16ms, 33.3MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.17ms, 33.5MB)
테스트 7 〉	통과 (0.17ms, 33.4MB)
테스트 8 〉	통과 (0.32ms, 33.4MB)
테스트 9 〉	통과 (0.15ms, 33.4MB)
테스트 10 〉	통과 (0.18ms, 33.5MB)
테스트 11 〉	통과 (0.27ms, 33.4MB)
테스트 12 〉	통과 (0.14ms, 33.5MB)
테스트 13 〉	통과 (0.26ms, 33.4MB)
테스트 14 〉	통과 (0.05ms, 33.4MB)
테스트 15 〉	통과 (0.06ms, 33.4MB)
테스트 16 〉	통과 (0.15ms, 33.4MB)
테스트 17 〉	통과 (0.33ms, 33.4MB)
테스트 18 〉	통과 (0.14ms, 33.4MB)
테스트 19 〉	통과 (0.31ms, 32.2MB)
테스트 20 〉	통과 (0.19ms, 32.2MB)
1시간
*/
