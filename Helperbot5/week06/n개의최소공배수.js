function solution(arr) {
  // 최대 공약수를 위해 내림차순으로 정렬해준다.
  arr.sort((a, b) => b - a);
  let r,
    m,
    n = 0,
    acc = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    // 유클리드 호제법으로 두 수의 최대공약수를 구한다.
    m = acc; // 큰 수
    n = arr[i]; // 작은 수
    while (0 < n) {
      r = m % n;
      m = n;
      n = r;
    }
    // m은 두 수의 최대공약수, acc에 두 수의 최소공배수를 누적시킨다.
    acc = (acc * arr[i]) / m;
  }
  return acc;
}

/*function solution(arr) {
    let answer = 0;
    
    // 한 숫자를 계속 곱해주고, 나눈 나머지의 값이 모두 0으로 떨어지면
    // 모든 값의 최소공배수가 구해진다.
    let n = 1, flag = false;
    while(!flag)
    {
        n++;
        for(let i = 1; i < arr.length; ++i){
            if((arr[0] * n) % arr[i]  === 0){
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }
    
    answer = arr[0] * n;
    return answer;
}
*/
// x * y / 최대공약수 = 최소공배수
