function solution(str1, str2) {
  //집합을 만듬
  str1 = makeSet(str1);
  str2 = makeSet(str2); 

  //영문자로된 글자쌍만 필터
  str1 = regTest(str1);
  str2 = regTest(str2);

  //교집합 생성
  const intersection = makeIntersection(str1, str2);

  //합집합 생성
  const union = makeUnion(str1, str2, intersection);

  //집합 A와 집합 B가 모두 공집합일경우
  if (intersection.length === 0 && union.length === 0) return 65536;
  //자카드 유사도 값 리턴
  return Math.floor((65536 * intersection.length) / union.length);
}

function makeSet(str) {
  const arr = [];
  for (let i = 1; i < str.length; i++) {
    arr.push(str[i - 1] + str[i]);
  }

  return arr;
}

function makeIntersection(str1, str2) {
  const intersection = [];
  str2 = str2.slice();
  for (let i = 0; i < str1.length; i++) {
    let index = str2.indexOf(str1[i]);
    if (index !== -1) {
      str2.splice(index, 1);
      intersection.push(str1[i]);
    }
  }
  return intersection;
}

function makeUnion(str1, str2, intersection) {
  let set = [...str1, ...str2];
  for (let i = 0; i < intersection.length; i++) {
    const index = set.indexOf(intersection[i]);
    if (index !== -1) set.splice(index, 1);
  }

  return set;
}

function regTest(str) {
  const regex = new RegExp(/[A-Za-z]{2}/);
  return str.filter((el) => regex.test(el)).map((el) => el.toUpperCase());
}

/*
정확성  테스트
테스트 1 〉	통과 (0.35ms, 33.4MB)
테스트 2 〉	통과 (0.31ms, 33.4MB)
테스트 3 〉	통과 (0.30ms, 33.6MB)
테스트 4 〉	통과 (1.19ms, 33.8MB)
테스트 5 〉	통과 (0.30ms, 33.5MB)
테스트 6 〉	통과 (0.25ms, 33.6MB)
테스트 7 〉	통과 (0.38ms, 33.4MB)
테스트 8 〉	통과 (0.33ms, 33.4MB)
테스트 9 〉	통과 (0.36ms, 33.5MB)
테스트 10 〉	통과 (0.43ms, 33.5MB)
테스트 11 〉	통과 (0.52ms, 33.5MB)
테스트 12 〉	통과 (0.28ms, 33.5MB)
테스트 13 〉	통과 (0.33ms, 33.4MB)
1시간
*/
