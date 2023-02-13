/*
정확성  테스트
테스트 1 〉	통과 (0.26ms, 33.5MB)
테스트 2 〉	통과 (0.27ms, 33.5MB)
테스트 3 〉	통과 (0.25ms, 33.5MB)
테스트 4 〉	통과 (0.49ms, 33.6MB)
테스트 5 〉	통과 (1.96ms, 37.2MB)
테스트 6 〉	통과 (3.68ms, 37.6MB)
테스트 7 〉	통과 (7.51ms, 37.6MB)
테스트 8 〉	통과 (12.62ms, 37.6MB)
테스트 9 〉	통과 (0.26ms, 33.4MB)
테스트 10 〉	통과 (2.10ms, 36.9MB)
테스트 11 〉	통과 (0.21ms, 33.5MB)
테스트 12 〉	통과 (3.01ms, 37.7MB)
테스트 13 〉	통과 (0.54ms, 32.1MB)
테스트 14 〉	통과 (0.36ms, 33.5MB)
테스트 15 〉	통과 (0.26ms, 33.4MB)
테스트 16 〉	통과 (0.27ms, 33.5MB)
테스트 17 〉	통과 (0.32ms, 33.6MB)
테스트 18 〉	통과 (0.25ms, 33.6MB)
테스트 19 〉	통과 (0.31ms, 33.5MB)
*/

function solution(k, dungeons) {
  let max = 0;
  //순열을 구하는 방식으로 풀음
  const recursive = (arr, saveArr, fatigue) => {
    //모든 던전을 다돌았을때
    if (arr.length === 0) {
      max = dungeons.length;
    }
    for (let i = 0; i < arr.length; i++) {
      //피로도가 최소필요피로도보다 크거나 같을 때
      if (fatigue >= arr[i][0]) {
        const temp = arr.slice();
        //splice의 return 값을 배열임
        const [[need, use]] = temp.splice(i, 1);
        //두번쨰 인자는 어떤 던전을 돌았는지 보려고 배열도 같이 매개변수로 넣음. 문제풀이엔 필요없음.
        recursive(temp, [...saveArr, [need, use]], fatigue - use);
      } else {
        if (max < dungeons.length - arr.length)
          max = dungeons.length - arr.length;
      }
    }
  };
  recursive(dungeons, [], k);
  return max;
}
