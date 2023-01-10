function solution(babbling) {
  //같은 알파벳이 나오면 발음을 못하기 때문에 'yee','maa','yeye' 같은 경우는 패스
  const sound = ["aya", "ye", "woo", "ma"];
  let result = 0;
  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];
    for (let j = 0; j < sound.length; j++) {
      if (babble.includes(sound[j].repeat(2))) break;
      babble = babble.split(sound[j]).join(" ");
    }
    if (babble.split(" ").join("").length === 0) result++;
  }
  return result;
}

/*정확성  테스트
테스트 1 〉	통과 (0.16ms, 33.6MB)
테스트 2 〉	통과 (0.17ms, 33.5MB)
테스트 3 〉	통과 (0.17ms, 33.7MB)
테스트 4 〉	통과 (0.07ms, 33.7MB)
테스트 5 〉	통과 (0.15ms, 33.6MB)
테스트 6 〉	통과 (0.15ms, 33.7MB)
테스트 7 〉	통과 (0.15ms, 33.7MB)
테스트 8 〉	통과 (0.07ms, 33.6MB)
테스트 9 〉	통과 (0.18ms, 33.8MB)
테스트 10 〉	통과 (0.18ms, 33.5MB)
테스트 11 〉	통과 (0.18ms, 33.6MB)
테스트 12 〉	통과 (0.35ms, 33.6MB)
테스트 13 〉	통과 (0.48ms, 33.7MB)
테스트 14 〉	통과 (0.43ms, 33.7MB)
테스트 15 〉	통과 (0.30ms, 33.5MB)
테스트 16 〉	통과 (0.44ms, 33.7MB)
테스트 17 〉	통과 (0.38ms, 33.5MB)
테스트 18 〉	통과 (0.32ms, 33.8MB)
테스트 19 〉	통과 (0.33ms, 33.5MB)
테스트 20 〉	통과 (0.32ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
