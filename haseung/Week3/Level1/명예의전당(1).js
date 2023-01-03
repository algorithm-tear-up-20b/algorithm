function solution(k, score) {
  const honor = [];

  const result = [];

  for (let i = 0; i < score.length; i++) {
    if (i < k) honor.push(score[i]);

    if (score[i] > min) {
      honor.pop();
      honor.push(score[i]);
      honor.sort((a, b) => b - a);
    }
    result.push(honor.at(-1));
  }
  // return result;
  // score.map((el,key)=>{
  //         if(key<k) honor.push(el);
  //         if(el>Math.min(...honor)){
  //             honor.pop();
  //             honor.push(el);
  //             honor.sort((a,b)=>b-a);
  //         }
  //         result.push(honor.at(-1));
  //     })
  return result;
  // score 정렬
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));

/*정확성  테스트
테스트 1 〉	통과 (0.21ms, 33.4MB)
테스트 2 〉	통과 (0.07ms, 33.3MB)
테스트 3 〉	통과 (0.08ms, 33.4MB)
테스트 4 〉	통과 (0.08ms, 33.3MB)
테스트 5 〉	통과 (0.17ms, 33.3MB)
테스트 6 〉	통과 (0.08ms, 33.3MB)
테스트 7 〉	통과 (0.17ms, 33.4MB)
테스트 8 〉	통과 (0.18ms, 33.4MB)
테스트 9 〉	통과 (0.20ms, 33.4MB)
테스트 10 〉	통과 (0.17ms, 33.4MB)
테스트 11 〉	통과 (0.25ms, 33.5MB)
테스트 12 〉	통과 (1.51ms, 33.9MB)
테스트 13 〉	통과 (1.22ms, 34MB)
테스트 14 〉	통과 (0.85ms, 33.8MB)
테스트 15 〉	통과 (1.65ms, 34.1MB)
테스트 16 〉	통과 (2.71ms, 34.1MB)
테스트 17 〉	통과 (1.80ms, 34.1MB)
테스트 18 〉	통과 (1.82ms, 34.1MB)
테스트 19 〉	통과 (0.36ms, 33.7MB)
테스트 20 〉	통과 (0.37ms, 33.6MB)
테스트 21 〉	통과 (0.42ms, 33.7MB)
테스트 22 〉	통과 (0.41ms, 33.5MB)
테스트 23 〉	통과 (0.40ms, 33.7MB)
테스트 24 〉	통과 (0.43ms, 33.6MB)
테스트 25 〉	통과 (0.44ms, 33.6MB)
테스트 26 〉	통과 (0.06ms, 33.3MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0*/
