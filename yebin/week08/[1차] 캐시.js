/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.11ms, 33.5MB)
테스트 2 〉	통과 (0.07ms, 33.4MB)
테스트 3 〉	통과 (0.08ms, 33.5MB)
테스트 4 〉	통과 (0.08ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.07ms, 33.4MB)
테스트 8 〉	통과 (0.23ms, 33.5MB)
테스트 9 〉	통과 (0.10ms, 33.4MB)
테스트 10 〉	통과 (0.18ms, 33.4MB)
테스트 11 〉	통과 (39.25ms, 45.3MB)
테스트 12 〉	통과 (0.24ms, 33.5MB)
테스트 13 〉	통과 (0.21ms, 33.5MB)
테스트 14 〉	통과 (0.22ms, 33.6MB)
테스트 15 〉	통과 (0.24ms, 33.5MB)
테스트 16 〉	통과 (0.34ms, 33.5MB)
테스트 17 〉	통과 (0.08ms, 33.5MB)
테스트 18 〉	통과 (0.41ms, 33.6MB)
테스트 19 〉	통과 (0.48ms, 33.6MB)
테스트 20 〉	통과 (0.50ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  let cache = [];
  let time = 0;
  cities = cities.map((el) => el.toLowerCase());
  for (let i = 0; i < cities.length; i++) {
    if (!cache.includes(cities[i])) {
      cache.push(cities[i]);
      time += 5;
    } else {
      let index = cache.indexOf(cities[i]);
      cache.splice(index, 1);
      cache.push(cities[i]);
      time++;
    }
    if (cache.length > cacheSize) cache.shift();
  }
  return time;
}

// 정확성: 65점
// 캐시에 동일한 항목이 들어가지 않는 것을 고려하지 않은 코드
function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  let time = 5;
  cities = cities.map((el) => el.toLowerCase());
  for (let i = 1; i < cities.length; i++) {
    const start = i - cacheSize < 0 ? 0 : i - cacheSize;
    if (cities.slice(start, i).includes(cities[i])) {
      time++;
    } else time += 5;
  }
  return time;
}
