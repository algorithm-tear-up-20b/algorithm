/*
[PGS] 키패드 누르기 /LV.1/1시간 30분
풀이 시간 : 1시간 30분
통과 여부 : O
*/

// 두 번째 풀이 : 레퍼런스를 참조
// 각 번호에 대한 위치 좌표를 가지고 계산을 하는 방법이 더 효율적인 것 같다.
function calcDist(num, ltNow, rtNow, hand, positions) {
  const X = 0,
    Y = 1;
  const ltDist =
    Math.abs(positions[ltNow][X] - positions[num][X]) +
    Math.abs(positions[ltNow][Y] - positions[num][Y]);
  const rtDist =
    Math.abs(positions[rtNow][X] - positions[num][X]) +
    Math.abs(positions[rtNow][Y] - positions[num][Y]);

  if (ltDist === rtDist) return hand === 'right' ? 'R' : 'L';
  return ltDist < rtDist ? 'L' : 'R';
}
function solution(numbers, hand) {
  const positions = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  let rtNow = '#';
  let ltNow = '*';
  let answer = '';

  for (let num of numbers) {
    if (num % 3 === 1) {
      answer += 'L';
      ltNow = num;
    } else if (num !== 0 && num % 3 === 0) {
      answer += 'R';
      rtNow = num;
    } else {
      answer += calcDist(num, ltNow, rtNow, hand, positions);
      answer[answer.length - 1] === 'L' ? (ltNow = num) : (rtNow = num);
    }
  }
  return answer;
}

/* 효율성
테스트 1 〉	통과 (0.08ms, 33.5MB)
테스트 2 〉	통과 (0.11ms, 33.6MB)
테스트 3 〉	통과 (0.11ms, 33.6MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.13ms, 33.5MB)
테스트 6 〉	통과 (0.11ms, 33.5MB)
테스트 7 〉	통과 (0.12ms, 33.4MB)
테스트 8 〉	통과 (0.19ms, 33.4MB)
테스트 9 〉	통과 (0.12ms, 33.5MB)
테스트 10 〉	통과 (0.12ms, 33.4MB)
테스트 11 〉	통과 (0.22ms, 33.5MB)
테스트 12 〉	통과 (0.22ms, 33.5MB)
테스트 13 〉	통과 (0.23ms, 33.5MB)
테스트 14 〉	통과 (0.27ms, 33.5MB)
테스트 15 〉	통과 (0.37ms, 33.6MB)
테스트 16 〉	통과 (0.36ms, 33.5MB)
테스트 17 〉	통과 (0.69ms, 33.8MB)
테스트 18 〉	통과 (0.54ms, 33.7MB)
테스트 19 〉	통과 (0.60ms, 33.7MB)
테스트 20 〉	통과 (0.71ms, 33.8MB)
*/

// 첫 번째 풀이 : 통과 X
// 모든 경우에 대해서 if..else로 예외처리를 했는데 예외상황이 너무 많음
// 첫번째 시작점에 대한 위치를 특정지을 수 없어서 절댓값으로 위치를 계산하기가 힘들었음.
/*
function getPosition(num) {
  if (num === 2 || num === 4) return 2;
  else if (num === 0 || num === 1 || num === 3 || num === 8) return 1;
  else return 3;
}

function getZeroPosition(num) {
  if (num === 8) return 1;
  else if (num === 7 || num === 9 || num === 5) return 2;
  else if (num === 6 || num === 4 || num === 2) return 3;
  else return 4;
}

function solution(numbers, hand) {
  let answer = '';
  let leftPos = 0;
  let rightPos = 0;
  let ltAbs = 0;
  let rtAbs = 0;

  for (let num of numbers) {
    console.log(num, leftPos, rightPos);
    if (num === 1 || num === 4 || num === 7) {
      answer += 'L';
      leftPos = num;
      continue;
    } else if (num === 3 || num === 6 || num === 9) {
      answer += 'R';
      rightPos = num;
      continue;
    } else if (num === 0 && (leftPos === 0 || rightPos === 0)) {
      if (!leftPos) {
        answer += 'L';
      } else {
        answer += 'R';
      }
    } else {
      if (leftPos === 0) {
        ltAbs = getZeroPosition(num);
      } else if (rightPos === 0) {
        rtAbs = getZeroPosition(num);
      } else {
        ltAbs = getPosition(Math.abs(num - leftPos));
        rtAbs = getPosition(Math.abs(num - rightPos));
      }
      if (ltAbs < rtAbs) {
        answer += 'L';
        leftPos = num;
      } else if (rtAbs < ltAbs) {
        answer += 'R';
        rightPos = num;
      } else if (rtAbs === ltAbs) {
        answer += hand === 'right' ? 'R' : 'L';
      }
    }
  }
  return answer;
}

*/
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
