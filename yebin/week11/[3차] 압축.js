/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.10ms, 33.5MB)
테스트 2 〉	통과 (0.23ms, 33.6MB)
테스트 3 〉	통과 (0.11ms, 33.4MB)
테스트 4 〉	통과 (0.72ms, 33.7MB)
테스트 5 〉	통과 (0.25ms, 33.5MB)
테스트 6 〉	통과 (0.76ms, 33.5MB)
테스트 7 〉	통과 (0.43ms, 33.6MB)
테스트 8 〉	통과 (0.72ms, 33.5MB)
테스트 9 〉	통과 (0.06ms, 33.6MB)
테스트 10 〉	통과 (0.44ms, 33.5MB)
테스트 11 〉	통과 (0.44ms, 33.6MB)
테스트 12 〉	통과 (0.51ms, 33.5MB)
테스트 13 〉	통과 (0.73ms, 33.8MB)
테스트 14 〉	통과 (0.69ms, 33.7MB)
테스트 15 〉	통과 (0.67ms, 33.7MB)
테스트 16 〉	통과 (0.59ms, 33.7MB)
테스트 17 〉	통과 (0.49ms, 33.6MB)
테스트 18 〉	통과 (0.34ms, 33.6MB)
테스트 19 〉	통과 (0.63ms, 33.6MB)
테스트 20 〉	통과 (0.48ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(msg) {
  const dict = {};
  const ans = [];
  // 'A'.charCodeAt(0) === 65
  // 'A'의 코드를 1로 만들기 위해 defaultCharCode 선언
  const defaultCharCode = 64;
  // 새로 사전에 추가될 인덱스
  let currentIdx = 27;
  for (let i = 0; i < msg.length; i++) {
    if (i === 0) {
      ans.push(msg.charCodeAt(i) - defaultCharCode);
      if (msg[i + 1]) {
        dict[msg[i] + msg[i + 1]] = currentIdx;
        currentIdx++;
      }
      continue;
    }
    // currentString = w + c
    const currentString = getCurrentStr(msg.slice(i), dict);
    // dict[w]
    const prtIdx = dict[currentString.slice(0, currentString.length - 1)];
    ans.push(prtIdx ? prtIdx : currentString.charCodeAt() - defaultCharCode);
    dict[currentString] = currentIdx;
    currentIdx++;
    // w의 길이만큼 i가 건너뛰어야 하므로 i 재조정
    if (currentString.length > 1) i += currentString.length - 2;
  }
  return ans;
}

/**
 * 사전에 없는 currentString(w + c)을 구하는 함수
 */
function getCurrentStr(string, dict) {
  if (string.length <= 1) return string;
  let result = string[0] + string[1];
  let i = 2;
  while (dict[result]) {
    // string[i]가 없는 경우 msg가 끝난다는 의미로 'X'를 붙인다. (line 49에서 prtIdx를 구하기 위함)
    result += string[i] || "X";
    i++;
  }
  return result;
}

//다른 사람의 풀이
function solution(msg) {
  var list = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var dic = list.reduce((d, a, i) => ((d[a] = i + 1), d), {});

  var result = [];

  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    var c = msg[i + 1];
    while (dic[w + c] && i < msg.length - 1) {
      i++;

      w = w + c;
      c = msg[i + 1];
    }

    result.push(dic[w]);

    list.push(dic[w + c]);
    dic[w + c] = list.length;
  }

  return result;
}
