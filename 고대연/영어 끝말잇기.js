/*
정확성  테스트
테스트 1 〉	통과 (0.10ms, 33.4MB)
테스트 2 〉	통과 (0.21ms, 33.5MB)
테스트 3 〉	통과 (0.08ms, 33.4MB)
테스트 4 〉	통과 (0.19ms, 33.5MB)
테스트 5 〉	통과 (0.21ms, 33.4MB)
테스트 6 〉	통과 (0.09ms, 33.4MB)
테스트 7 〉	통과 (0.19ms, 33.4MB)
테스트 8 〉	통과 (0.09ms, 33.5MB)
테스트 9 〉	통과 (0.10ms, 33.6MB)
테스트 10 〉	통과 (0.21ms, 33.5MB)
테스트 11 〉	통과 (0.21ms, 33.4MB)
테스트 12 〉	통과 (0.20ms, 33.5MB)
테스트 13 〉	통과 (0.09ms, 33.5MB)
테스트 14 〉	통과 (0.09ms, 33.5MB)
테스트 15 〉	통과 (0.07ms, 33.4MB)
테스트 16 〉	통과 (0.07ms, 33.5MB)
테스트 17 〉	통과 (0.09ms, 33.5MB)
테스트 18 〉	통과 (0.10ms, 33.5MB)
테스트 19 〉	통과 (0.09ms, 33.5MB)
테스트 20 〉	통과 (0.25ms, 33.4MB)
*/

function solution(n, words) {
  let obj = {};
  let lastword = words[0][0]; //끝말잇기가 잘되는지판단하기 위함
  let firstword = "";

  for (let i = 0; i < words.length; i++) {
    firstword = words[i][0];

    if (firstword !== lastword) {
      return who(n, i);
    } else {
      lastword = words[i][words[i].length - 1]; //해당인덱스의 단어의 마지막알파벳저장

      //단어가중복으로 나왔는지 검사
      if (obj[words[i]]) {
        //두번째단어의 인덱스를 찾기위해 ->첫번째 단어의 인덱스 찾고 그인덱스의 +1을해서 거기서부터 탐색
        return who(n, words.indexOf(words[i], words.indexOf(words[i]) + 1));
      } else obj[words[i]] = true;
    }
  }
  return [0, 0];
}

function who(n, index) {
  // 번호(누가걸린지)는 나머지이고 나머지가 0이면 인원수의 마지막사람.
  // 차례(몇번째코스)는 인덱스를 인원수로 나눈거의 올림
  index = index + 1; //index는 실제나온 번호의 -1이므로 +1해줌
  let num = 0;
  let turn = 0;
  let remainder = index % n;

  num = remainder === 0 ? n : remainder;

  turn = n >= index ? 1 : Math.ceil(index / n);

  return [num, turn];
}
