/*
[PGS] 구명보트 /LV.2/90분
풀이 시간 :90분
통과 여부 : O
*/

// 2번 풀이
function solution(people, limit) {
  let count = 0;
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    const sum = people[left] + people[right];
    if (sum <= limit) right--;
    left++;
    count++;
  }
  return count;
}

console.log(solution([70, 80, 50], 100));

// 1번 풀이
function fail(people, limit) {
  let count = 0;
  people.sort((a, b) => b - a);
  const N = people.length;
  for (let i = 0; i < N; i++) {
    let sum = people[i];
    for (let j = i + 1; j < N; j++) {
      sum += people[j];
      if (sum <= limit) count++;
    }
  }
  return count + (people.length - count * 2);
}

/*
1. 한 번에 2명씩 탑승
2. 무게 제한 O
3. 구명 보트 최대한 적게 사용하여 모든 사람 구출
=> 한 번에 최대한 많은 사람을 태우겠다!
4. 필요한 구명 보트의 최솟값은??

그리디 문제 : 현재 상황에 맞는 최적의 풀이로 답을 도출하는 유형.

// 1번 풀이 => 대부분 실패하고 효율성에서도 시간초과가 떴다.
1. 내림차순 정렬
2. 하나씩 그 다음 것과 비교하여 더해진 값을 확인
3. 더해진 값이 limit 보다 같거나 작을 경우 카운트 up
4. 정렬이 된 상태이기 때문에 더할 수 있는 값 중에 최대값이 나올 것이다.
5. 두 값을 더해서 모든 경우를 살펴봤는데, 두 명이서 탑승할 수 없는 경우가 나온다면 그냥 +1 => 기준을 어떻게 알고하지?
6. people.length - answer * 2

* 2중 for문을 사용한 것 반복을 한 번 돌고 문제를 풀 수 있도록 해야할 것 같다.=> 투포인터 알고리즘 사용

1. 내림차순 정렬
2. 한 배열의 양 끝에서부터 출발해 가운데로 이동하며 탐색하는 left, right 변수를 선언한다.
3. 첫 번째 반복에서 오른쪽 끝과 왼쪽 끝에 위치한 두 요소를 더하여 limit 이 넘는지 확인
4. limit 이 넘는다면 left ++, 넘지 않는다면 right -- 하여 rigth가 left보다 작아질 때까지 (즉 양 끝에서 비교를 끝내어 만나는 지점까지) 반복한다. => 넘는 경우, 넘지 않는 경우 모두 left를 증가시키고, 넘지 않는 경우에만 right 를 --하여 혼자 마지막으로 탑승하는 경우에 대해서도 카운트를 한다.
5. 반복문을 돌면서 카운트를 센다.

*/
