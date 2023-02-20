/*
[PGS] 압축 /LV.2 / 40분
*/

/*
[문제]
카톡 전송 메시지 압축하여 전송 효율 높이기.
압축 전의 정보 완벽 복원 가능한 무손실 압축 알고리즘

LZW 압축 구현
1. 길이가 1인 모든 단어 포함하도록 사전 초기화
2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 W를 찾는다.
3. W에 해당하는 사전의 색인 번호 출력, 입력에서 W를 제거
4. 입력에서 처리되지 않은 다음 글자가 남은 경우(C), W+C 에 해당하는 단어 사전등록
5. 단계 2로 들어간다. 

[예시]
알파벳 대문자 + 색인번호 => 사전
KAKAO
1. K는 등록, KA 는 미등록
=> K 색인 출력, KA 를 사전에 추가.
2. A는 등록, AK 는 미등록
=> A 색인 출력, AK를 사전에 추가
3. 세번째에서 시작하는 KA가 사전에 있음, KAO는 없음
=> KA 색인 출력, KAO 사전 등록
4. 마지막 글자 O는 등록
=> O 색인 출력

1. 현재입력이 사전에 있는지 확인
2. 현재 입력 + 다음입력이 사전에 있는지 확인
3. 없는 경우 현재 + 다음을 사전에 등록하고 다음 입력으로 넘어감.

[접근]
1. A ~ Z 배열 생성, 색인은 index + 1이 됨.
2. msg 길이만큼 반복
3. 사전에 단어가 있는지 확인
- start,end 두 개의 포인터를 생성, 현재 i로 초기화
- start에서 시작해 end를 하나씩 더하며 각 단어가 사전에 존재하는지 확인
- 존재하지 않는 경우가 나오면 
    1. 해당 단어를 사전에 push
    2. 직전까지 누적된 str의 색인번호 출력
4. 다음 반복으로 넘어간다.
*/

function solution(msg) {
  const answer = [];
  // 기본 알파벳으로 사전 배열 생성
  const dict = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65));

  // msg 의 길이만큼 start 반복
  for (let start = 0; start < msg.length; start++) {
    // end는 start에서 출발
    let end = start;
    let query = '';
    let index = 0;

    while (true) {
      // 사전에서 query를 찾을 수 없을 때까지 msg[end]를 누적
      query += msg[end++];

      // 현재 query를 사전에서 찾는다.
      let indexNow = dict.indexOf(query);
      // 사전에 존재하지 않는 경우
      if (indexNow === -1) {
        dict.push(query);

        // 사전에서 찾은 단어 바로 다음부터 query가 시작됨.
        start = query.length > 2 ? (start += query.length - 2) : start;
        break;
      }
      // 사전에 존재하는 경우
      else {
        index = indexNow;
      }
    }

    answer.push(index + 1);
  }

  return answer;
}

console.log(solution('TOBEORNOTTOBEORTOBEORNOT'));

/*
테스트 1 〉	통과 (0.09ms, 33.5MB)
테스트 2 〉	통과 (0.19ms, 33.4MB)
테스트 3 〉	통과 (0.18ms, 33.4MB)
테스트 4 〉	통과 (0.43ms, 33.5MB)
테스트 5 〉	통과 (0.19ms, 33.6MB)
테스트 6 〉	통과 (0.48ms, 33.6MB)
테스트 7 〉	통과 (0.39ms, 33.6MB)
테스트 8 〉	통과 (0.41ms, 33.5MB)
테스트 9 〉	통과 (0.09ms, 33.5MB)
테스트 10 〉	통과 (0.48ms, 33.5MB)
테스트 11 〉	통과 (0.53ms, 33.6MB)
테스트 12 〉	통과 (0.48ms, 33.5MB)
테스트 13 〉	통과 (1.09ms, 33.7MB)
테스트 14 〉	통과 (1.01ms, 33.6MB)
테스트 15 〉	통과 (1.00ms, 33.6MB)
테스트 16 〉	통과 (0.71ms, 33.6MB)
테스트 17 〉	통과 (0.44ms, 33.5MB)
테스트 18 〉	통과 (0.25ms, 33.5MB)
테스트 19 〉	통과 (0.27ms, 33.5MB)
테스트 20 〉	통과 (0.46ms, 33.6MB)
*/
