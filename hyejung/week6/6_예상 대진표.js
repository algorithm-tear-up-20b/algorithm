/*
[PGS] 예상대진표 /LV.2/60분
풀이 시간 :60분
통과 여부 : O
*/

// reference 참고
function ref(n, a, b) {
  let A = a;
  let B = b;
  // 카운트를 0부터 시작
  let count = 0;

  // 나누기를 반복하면 A와 B가 같아지는 시점이 온다.
  // 예를들어 A = 4, B = 7 일 때
  // 1회 : A => 2, B => 4
  // 2회 : A => 1, B => 2
  // 3회 : A => 1, B => 1이 된 상태로 다음 while문에 진입하려고 하기 때문에 A!==B 조건에 걸려서 반복이 종료된다.
  while (A !== B) {
    count++;
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    console.log(A, B);
  }

  return count;
}

// 2번째 풀이
function solution(n, a, b) {
  let A = a;
  let B = b;
  let flag = false;
  let count = 1;

  while (!flag) {
    count++;
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    if (Math.abs(A - B) === 1) {
      flag = true;
      break;
    }
  }

  return count;
}

// 1번째 풀이 : 1,7, 9, 25, 26, 27, 33 실패 (시간초과 포함)
function fail(n, a, b) {
  let A = a;
  let B = b;
  let flag = false;
  let count = 1;

  while (!flag) {
    count++;
    A = isOdd(A) ? parseInt(A / 2) + (A % 2) : parseInt(A / 2);
    B = isOdd(B) ? parseInt(B / 2) + (B % 2) : parseInt(B / 2);
    if (A - 1 === B || A + 1 === B) {
      flag = true;
      break;
    }
  }

  return count;
}

function isOdd(num) {
  if (num % 2) return true;
  return false;
}

console.log(ref(8, 4, 7));

/*
* 1~N까지 차례로 배정
* 1-2, 3-4 붙어서 이긴 사람들끼리 다시 번호를 부여받게됨
* 처음 라운드에서 A번을 가진 참가자가 B번이랑 붙게 되면 몇 번째 라운드에서 만날까
=> 승부를 거듭해서 A -1 === B 가 되는 경우가 몇번째에 일어나는지.

* A,B의 다음 순번은 1부터 N까지의 숫자 중 몇 번째 홀수, 몇 번째 짝수이냐임. (1-2 => 1번째 홀수 || 1번째 짝수, 3-4 => 2번째 홀수, 2번째 짝수)

* 몇 번째 홀수, 몇 번째 짝수인지를 구하는 것을 A -1 === B 가 될 때 까지 반복하면서 카운트를 세어주면 된다.

* 몇 번째 홀수, 몇 번째 짝수인지는 어떻게 구할 수 있을까... 
- 짝수라면 ... x를 2로 나눈 몫
- 홀수라면 ... x를 2로 나눈 몫 + 나머지 => 올림처리

1,2,3,4,5,6,7,8,9,10,11,12

* 아니면 반복을 거듭할수록 탐색 범위가 절반으로 줄어드니까... 이진 탐색을 적용할 수도..? => 당장 로직이 떠오르진 않는다.

* 몇 번째 홀수, 몇 번째 짝수인지를 구하는 방법이 틀렸나? => 홀수일 때 나머지를 더하지 말고 올림 처리를 하면 될 것 같다. 나누어 떨어지는 경우에는 숫자 그대로, 나누어 떨어지지 않으면 나머지가 더해지는 것과 마찬가지가 됨.

* while문의 break 조건이 잘못되었나? A - B 를 한 절댓값이 1이면 붙는다고 봐야겠지? => 하지만 여전히 1번째 풀이와 마찬가지로 시간초과가 뜨는 몇몇 테스트케이스가 존재한다...

* 

*/
