//DFS의 전위 탐색으로 풀이

function solution(numbers, target) {
  let count = 0;
  const recursive = (sum, i) => {
    if (i < numbers.length) {
      recursive(sum + numbers[i], i + 1);
      recursive(sum - numbers[i], i + 1);
    } else {
      if (sum === target) count++;
    }
  };

  recursive(0, 0);
  return count;
}
