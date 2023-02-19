/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.26ms, 33.5MB)
테스트 2 〉	통과 (0.27ms, 33.5MB)
테스트 3 〉	통과 (0.31ms, 33.5MB)
테스트 4 〉	통과 (5.21ms, 35.6MB)
테스트 5 〉	통과 (0.28ms, 33MB)
테스트 6 〉	통과 (0.20ms, 33.5MB)
테스트 7 〉	통과 (0.52ms, 33.6MB)
테스트 8 〉	통과 (0.27ms, 33MB)
테스트 9 〉	통과 (0.48ms, 33.5MB)
테스트 10 〉	통과 (0.82ms, 33.6MB)
테스트 11 〉	통과 (1.62ms, 33.7MB)
테스트 12 〉	통과 (0.26ms, 33.6MB)
테스트 13 〉	통과 (0.38ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(str1, str2) {
  const arr1 = preprocess(str1);
  const arr2 = preprocess(str2);
  const set = new Set([...arr1, ...arr2]);
  // 교집합 수
  let intersection = 0;
  // 합집합 수
  let union = 0;

  set.forEach((setEl) => {
    const count1 = arr1.filter((el) => el === setEl).length;
    const count2 = arr2.filter((el) => el === setEl).length;

    count1 < count2
      ? ((intersection += count1), (union += count2))
      : ((intersection += count2), (union += count1));

    // Math를 사용하는게 코드는 훨씬 간결하지만 시간이 아주 조금 더 걸린다...비교 대상이 2개라 큰 의미 없는듯
    // intersection += Math.min(count1, count2)
    // union += Math.max(count1, count2)
  });

  return union > 0 ? parseInt((intersection / union) * 65536) : 65536;
}

function preprocess(string) {
  let result = [];
  string = string.toLowerCase();
  for (let i = 0; i < string.length - 1; i++) {
    const el = string[i] + string[i + 1];
    if (!/[^a-z]/.test(el)) result.push(el);
  }
  return result;
}
