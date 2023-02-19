function solution(cacheSize, cities) {
  // 캐시를 queue로 구현.
  // 최근 참조한 것 -> 오래된 것 순으로 배치
  // ["asd", "Asd", "dsf"] (cacheSize === 3일 때)
  // 앞에서부터 넣고 (unshift), 뒤에서부터 제거(pop)
  // cache hit : queue에 있는 경우 => 실행시간 += 1
  // cache miss : queue에 없는 경우 => 실행시간 += 5

  if (cacheSize === 0) return cities.length * 5; // cache 사용 X

  let time = 0;
  let cache = new Array(cacheSize).fill(""); // cacheSize만큼 cache 배열 선언

  for (let i = 0; i < cities.length; i++) {
    if (cache.includes(cities[i].toLowerCase())) {
      cache.splice(cache.indexOf(cities[i].toLowerCase()), 1);
      time += 1;
    } else {
      cache.splice(-1);
      time += 5;
    }
    cache.unshift(cities[i].toLowerCase());
  }

  return time;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.08ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.5MB)
테스트 5 〉	통과 (0.06ms, 33.5MB)
테스트 6 〉	통과 (0.07ms, 33.5MB)
테스트 7 〉	통과 (0.05ms, 33.5MB)
테스트 8 〉	통과 (0.22ms, 33.4MB)
테스트 9 〉	통과 (0.10ms, 33.4MB)
테스트 10 〉	통과 (0.26ms, 33.4MB)
테스트 11 〉	통과 (43.75ms, 42.7MB)
테스트 12 〉	통과 (0.62ms, 33.5MB)
테스트 13 〉	통과 (0.20ms, 33.4MB)
테스트 14 〉	통과 (0.33ms, 33.5MB)
테스트 15 〉	통과 (0.44ms, 33.6MB)
테스트 16 〉	통과 (0.48ms, 33.6MB)
테스트 17 〉	통과 (0.08ms, 33.4MB)
테스트 18 〉	통과 (0.48ms, 33.7MB)
테스트 19 〉	통과 (0.58ms, 33.6MB)
테스트 20 〉	통과 (0.59ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
