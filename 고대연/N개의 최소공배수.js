/*정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.5MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.06ms, 33.5MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.06ms, 33.4MB)
테스트 8 〉	통과 (0.06ms, 33.5MB)
테스트 9 〉	통과 (0.06ms, 33.5MB)
테스트 10 〉	통과 (0.13ms, 33.4MB)
*/

function solution(arr) {
  /*
    arr를 순회하면서 두수를 비교해가며 최소 공배수를 구한다.
    마지막에 도출되는 최소공배수가 모든수의 최소공배수 이다.
    최소공배수는 두수의곱/최대공약수와 같다.
  */

  const gcd = (a, b) => {
    if (a < b) {
      let temp = a;
      a = b;
      b = temp;
    }

    while (b > 0) {
      let c = a % b;
      a = b;
      b = c;
    }
    return a;
  };

  let lcm = 1;

  for (let i = 0; i < arr.length; i++) lcm = (lcm * arr[i]) / gcd(lcm, arr[i]);
  return lcm;
}
