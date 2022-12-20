/*
정확성  테스트
테스트 1 〉	통과 (0.30ms, 33.6MB)
테스트 2 〉	통과 (0.29ms, 33.5MB)
테스트 3 〉	통과 (0.26ms, 33.6MB)
테스트 4 〉	통과 (0.40ms, 33.6MB)
테스트 5 〉	통과 (0.17ms, 33.5MB)
테스트 6 〉	통과 (0.33ms, 33.6MB)
테스트 7 〉	통과 (0.39ms, 33.6MB)
테스트 8 〉	통과 (0.27ms, 33.5MB)
테스트 9 〉	통과 (0.21ms, 33.5MB)
테스트 10 〉	통과 (0.22ms, 33.5MB)
테스트 11 〉	통과 (0.05ms, 33.5MB)
테스트 12 〉	통과 (0.05ms, 33.5MB)
테스트 13 〉	통과 (0.07ms, 33.5MB)
테스트 14 〉	통과 (0.60ms, 33.6MB)
테스트 15 〉	통과 (0.08ms, 33.4MB)
테스트 16 〉	통과 (0.05ms, 33.5MB)
테스트 17 〉	통과 (0.06ms, 33.4MB)
테스트 18 〉	통과 (0.05ms, 33.5MB)
테스트 19 〉	통과 (0.05ms, 33.5MB)
테스트 20 〉	통과 (0.05ms, 33.5MB)
*/

function solution(food) {
  let result = "";

  //0번째인 물을 빼고 시작
  for (let i = 1; i < food.length; i++) {
    //두선수가 먹을수 있는 최대갯수로 설정 하고 for문으로 한쪽먼서 완성
    let limit = Math.floor(food[i] / 2);
    for (let j = 1; j <= limit; j++) {
      result = `${result}${i}`;
    }
  }
  //물을 포함해서 나머지한쪽 완성 reverse : 배열 뒤집기
  return result + "0" + result.split("").reverse().join("");
}
