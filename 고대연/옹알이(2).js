/*
정확성  테스트
테스트 1 〉	통과 (0.21ms, 33.5MB)
테스트 2 〉	통과 (0.29ms, 33.4MB)
테스트 3 〉	통과 (0.21ms, 33.4MB)
테스트 4 〉	통과 (0.20ms, 33.5MB)
테스트 5 〉	통과 (0.22ms, 33.5MB)
테스트 6 〉	통과 (0.21ms, 33.4MB)
테스트 7 〉	통과 (0.21ms, 33.5MB)
테스트 8 〉	통과 (0.23ms, 33.4MB)
테스트 9 〉	통과 (0.26ms, 33.4MB)
테스트 10 〉	통과 (0.26ms, 33.5MB)
테스트 11 〉	통과 (0.28ms, 33.5MB)
테스트 12 〉	통과 (0.34ms, 33.5MB)
테스트 13 〉	통과 (0.34ms, 33.5MB)
테스트 14 〉	통과 (0.32ms, 33.5MB)
테스트 15 〉	통과 (0.32ms, 33.5MB)
테스트 16 〉	통과 (0.33ms, 33.5MB)
테스트 17 〉	통과 (0.32ms, 33.6MB)
테스트 18 〉	통과 (0.30ms, 33.5MB)
테스트 19 〉	통과 (0.28ms, 33.5MB)
테스트 20 〉	통과 (0.31ms, 33.5MB)
(aya(?!(aya))|ye(?!(ye))|woo(?!(woo))|ma(?!(ma)))+
*/
function solution(babbling) {
  let count = 0;
  babbling.forEach((el) => {
    if (!isRepeat(el)) {
      if (isContain(el)) {
        count++;
      }
    }
  });
  return count;
}

function isRepeat(word) {
  const regex = new RegExp("ayaaya|yeye|woowoo|mama", "g");
  return word.match(regex);
}

function isContain(word) {
  const regex = new RegExp("aya|ye|woo|ma", "g");

  word = word.replace(regex, "");
  return word.length === 0;
}
