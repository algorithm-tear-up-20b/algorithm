const wordsCanBabble = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    if (canPronounce(babbling[i])) count++;
  }

  return count;
}

const canPronounce = (word) => {
  let nowWord = word;
  let contain, double;

  for (let i = 0; i < wordsCanBabble.length; i++) {
    double = new RegExp(`(${wordsCanBabble[i]}){2,}`, "g");
    if (double.test(nowWord)) return false;

    contain = new RegExp(`${wordsCanBabble[i]}`, "g");
    nowWord = nowWord.replace(contain, "_");
  }

  if (/[a-z]/g.test(nowWord)) return false;
  return true;
};

/*
정확성  테스트
테스트 1 〉	통과 (0.36ms, 33.4MB)
테스트 2 〉	통과 (0.41ms, 33.4MB)
테스트 3 〉	통과 (0.36ms, 33.4MB)
테스트 4 〉	통과 (0.34ms, 33.6MB)
테스트 5 〉	통과 (0.34ms, 33.5MB)
테스트 6 〉	통과 (0.39ms, 33.5MB)
테스트 7 〉	통과 (0.46ms, 33.5MB)
테스트 8 〉	통과 (0.35ms, 33.5MB)
테스트 9 〉	통과 (0.49ms, 33.5MB)
테스트 10 〉	통과 (0.38ms, 33.6MB)
테스트 11 〉	통과 (0.37ms, 33.5MB)
테스트 12 〉	통과 (0.51ms, 33.5MB)
테스트 13 〉	통과 (0.64ms, 33.5MB)
테스트 14 〉	통과 (0.59ms, 33.7MB)
테스트 15 〉	통과 (0.47ms, 33.6MB)
테스트 16 〉	통과 (0.61ms, 33.5MB)
테스트 17 〉	통과 (0.55ms, 33.6MB)
테스트 18 〉	통과 (0.49ms, 33.6MB)
테스트 19 〉	통과 (0.50ms, 33.5MB)
테스트 20 〉	통과 (0.86ms, 33.7MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
