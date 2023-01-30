/*
[PGS] 뉴스 클러스터링 /LV.2 / 60분
*/

/*
[문제]
- 자카드 유사도 : J(A,B) => 교집합 크기 / 합집합 크기
- A, B 가 공집합인 경우 J(A,B) = 1

- 두 문자열이 주어질 경우 2개씩 잘라 다중집합 원소로 만든다.
- 영문자 쌍만 유효, 공백/숫자/특수문자 포함된 경우 해당 글자 쌍을 버림. 대소문자 구분 x
=> FRANCE ~ FR,RA,AN,NC,CE
- J(str1, str2) * 65536 ~ 소수점 버림

[접근]
1. 문자열 변환 및 다중집합화
- 대문자로 변환
- 각 문자열에 map 메서드 적용, 현재 문자열 + 다음 문자열 추가.
- filter 공백, 특수문자, 숫자 포함된 문자열 제거
2. 교집합 
- 두 배열을 set으로 만든다.
- 교집합을 set으로 구현한다.
- const intersection = new Set([...setA].filter(x => setB.has(x)));
=> 위 방식을 사용하면 Set 때문에 여러개가 해당되어도 하나의 원소만 적용됨
=> 그러면 Map 을 활용해보자.

3. 합집합
- 두 배열을 길이를 더해서 구한다.
*/

// 조건에 따라 다중 집합을 만드는 함수
function getMultiSet(str) {
  str = str.toUpperCase();
  str = str
    .split('')
    .map((s, i) => s + str[i + 1])
    .filter(set => set.match(/[A-Z]{2,}/g));

  return str;
}

// 원소의 갯수가 카운팅된 객체를 만드는 함수
function getMap(arr) {
  const arrMap = {};

  arr.forEach(el => {
    if (arrMap[el]) {
      arrMap[el]++;
    } else {
      arrMap[el] = 1;
    }
  });

  return arrMap;
}

function solution(str1, str2) {
  const str1Arr = getMultiSet(str1);
  const str2Arr = getMultiSet(str2);

  const str1Map = getMap(str1Arr);
  const str2Map = getMap(str2Arr);

  // 두 문자열에 등장하는 전체 원소를 구한다.
  const keys = new Set([...Object.keys(str1Map), ...Object.keys(str2Map)]);

  let intersection = 0;
  let union = 0;

  // 전체 원소를 하나씩 반복한다.
  for (let key of keys) {
    // 두 문자열에 모두 포함된 경우
    if (str1Map[key] && str2Map[key]) {
      // 교집합에는 공통으로 포함되는 값(최소값)
      intersection += Math.min(str1Map[key], str2Map[key]);
      // 합집합에는 교집합을 포함하는 값(최대값)
      union += Math.max(str1Map[key], str2Map[key]);
    }
    // 어느 한 문자열에만 포함되는 원소는 등장하는 횟수를 각각 합집합에 합산
    else if (str1Map[key]) {
      union += str1Map[key];
    } else if (str2Map[key]) {
      union += str2Map[key];
    }
  }

  // 교집합, 합집합이 둘 다 공집합인 경우 예외처리
  return !intersection && !union
    ? 65536
    : Math.floor((intersection / union) * 65536);
}

console.log(solution('di mi mi mi mi', 'di di di go'));

/*
테스트 1 〉	통과 (0.32ms, 33.4MB)
테스트 2 〉	통과 (0.34ms, 33.6MB)
테스트 3 〉	통과 (0.31ms, 33.4MB)
테스트 4 〉	통과 (1.24ms, 34MB)
테스트 5 〉	통과 (0.32ms, 33.4MB)
테스트 6 〉	통과 (0.33ms, 33.6MB)
테스트 7 〉	통과 (0.48ms, 33.6MB)
테스트 8 〉	통과 (0.33ms, 33.4MB)
테스트 9 〉	통과 (0.45ms, 33.6MB)
테스트 10 〉	통과 (0.53ms, 33.5MB)
테스트 11 〉	통과 (0.65ms, 33.7MB)
테스트 12 〉	통과 (0.28ms, 33.6MB)
테스트 13 〉	통과 (0.42ms, 33.5MB)
*/

// 다른 사람 풀이
function ref(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  // 전체 원소를 파악하기 위해 set 객체 생성
  // 내 풀이의 경우 객체의 키값을 사용했는데, 이렇게 하면 굳이 Object.keys 로 확인할 필요 없음.
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    // 각 집합에서 원소 갯수의 최댓값
    // 어차피 최댓값이기 때문에 한 쪽이 원소를 가지고 있지 않다고해도 합집합에 정확히 합산됨
    union += Math.max(has1, has2);
    // 최솟값 합산
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
