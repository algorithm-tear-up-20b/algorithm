/*
정확성  테스트
테스트 1 〉	통과 (0.27ms, 33.5MB)
테스트 2 〉	통과 (0.37ms, 33.5MB)
테스트 3 〉	통과 (0.34ms, 33.6MB)
테스트 4 〉	통과 (0.32ms, 33.5MB)
테스트 5 〉	통과 (0.36ms, 33.3MB)
테스트 6 〉	통과 (0.40ms, 33.3MB)
테스트 7 〉	통과 (0.24ms, 33.5MB)
테스트 8 〉	통과 (0.15ms, 33.5MB)
테스트 9 〉	통과 (0.16ms, 33.5MB)
테스트 10 〉	통과 (0.24ms, 33.4MB)
테스트 11 〉	통과 (0.42ms, 33.5MB)
테스트 12 〉	통과 (0.18ms, 33.6MB)
테스트 13 〉	통과 (0.42ms, 33.5MB)
테스트 14 〉	통과 (0.37ms, 33.5MB)
테스트 15 〉	통과 (0.39ms, 33.5MB)
테스트 16 〉	통과 (0.14ms, 33.5MB)
20분
*/

function solution(citations) {
  /*
      오름차순정렬을 하고
      최대 h개부터 성립이 가능한지 판단한다.
      성립이되면 해당 h값을 리턴한다.
  */
  citations.sort((a, b) => a - b);
  const isCitation = (h) => {
    // 제일 작은것 부터 판단.
    // citations.length-h미만의 citations[j] 인덱스값은 무조건 성립이 안되므로 sort후
    // citations.length-h 부터 해야함.
    for (let j = citations.length - h; j < citations.length; j++) {
      if (citations[j] < h) {
        return false;
      }
    }
    return true;
  };

  //h가 0 이면 citations.length-h, citations[j]에서 오류
  for (let h = citations.length; h >= 1; h--) {
    if (isCitation(h)) {
      return h;
    }
  }
  return 0;
}
