/*
[PGS] 위장 /LV.2 / 30분
*/

/*
정확성  테스트
테스트 1 〉	통과 (0.24ms, 33.4MB)
테스트 2 〉	통과 (0.24ms, 33.6MB)
테스트 3 〉	통과 (0.17ms, 33.5MB)
테스트 4 〉	통과 (0.21ms, 33.5MB)
테스트 5 〉	통과 (0.17ms, 33.6MB)
테스트 6 〉	통과 (0.22ms, 33.5MB)
테스트 7 〉	통과 (0.17ms, 33.5MB)
테스트 8 〉	통과 (0.18ms, 33.6MB)
테스트 9 〉	통과 (0.08ms, 33.5MB)
테스트 10 〉	통과 (0.07ms, 33.4MB)
테스트 11 〉	통과 (0.08ms, 33.5MB)
테스트 12 〉	통과 (0.20ms, 33.6MB)
테스트 13 〉	통과 (0.17ms, 33.5MB)
테스트 14 〉	통과 (0.08ms, 33.5MB)
테스트 15 〉	통과 (0.11ms, 33.6MB)
테스트 16 〉	통과 (0.07ms, 33.5MB)
테스트 17 〉	통과 (0.16ms, 33.5MB)
테스트 18 〉	통과 (0.19ms, 33.5MB)
테스트 19 〉	통과 (0.17ms, 33.5MB)
테스트 20 〉	통과 (0.08ms, 33.5MB)
테스트 21 〉	통과 (0.07ms, 33.4MB)
테스트 22 〉	통과 (0.09ms, 33.4MB)
테스트 23 〉	통과 (0.14ms, 33.5MB)
테스트 24 〉	통과 (0.17ms, 33.4MB)
테스트 25 〉	통과 (0.17ms, 33.5MB)
테스트 26 〉	통과 (0.20ms, 33.6MB)
테스트 27 〉	통과 (0.08ms, 33.6MB)
테스트 28 〉	통과 (0.17ms, 33.5MB)
*/

/*
[문제]
- 매일 다른 옷을 조합하여 입을 수 있는 2차원 배열의 경우의 수

- ["의상 이름", "종류"] 의 형태로 2차원 배열이 주어진다. 

- 각 종류별로 한 개씩 입을 수 있고, 거기에 다른 종류를 추가할 수 있음.

[접근 1]
1. 2차원 배열을 돌면서 종류별로 의상 이름의 갯수를 카운트한다. 
2. 각 item 을 가지고 모든 경우의 수를 구한다 (??)
- 각 item 의 갯수를 구하고 이를 모두 곱하면 경우의 수를 구할 수 있다.
- 단 해당 item 을 입지 않는 경우도 있을 수 있기 때문에 item 갯수 + 1을 해준다.

*/

function solution(clothes) {
  let answer = 1;

  // 각 옷을 item, category로 나누어 item의 갯수 +1 만큼 count 된 Map 객체 생성
  const clothesMap = new Map();
  clothes.forEach(cloth => {
    const [_, category] = cloth;
    if (clothesMap.has(category)) {
      clothesMap.set(category, clothesMap.get(category) + 1);
    } else {
      // 해당 item을 아예 입지 않는 경우도 있기 때문에 전체 갯수 +1
      clothesMap.set(category, 2);
    }
  });

  // Map을 반복하며 카운트를 모두 곱한다.
  for (let count of clothesMap) {
    answer *= count[1];
  }

  // 옷을 아무것도 입지 않는 경우는 없기 때문에 해당 경우를 제외하고 리턴
  return answer - 1;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ]),
);

function ref(clothes) {
  var answer = 1;
  var obj = {};
  // 객체를 사용하니 set, get을 할 필요가 없어서 더 깔끔해보인다. 간단한 상황에서는 이렇게 해도 되지 않을까.
  for (var i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }

  console.log(obj);

  for (var key in obj) {
    answer *= obj[key];
  }

  // 모든 옷을 입지 않는 경우는 없기에 -1
  return answer - 1;
}
