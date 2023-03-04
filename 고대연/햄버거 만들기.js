/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.5MB)
테스트 3 〉	통과 (11.87ms, 53.1MB)
테스트 4 〉	통과 (23.87ms, 73.2MB)
테스트 5 〉	통과 (25.65ms, 76.6MB)
테스트 6 〉	통과 (21.07ms, 53.7MB)
테스트 7 〉	통과 (18.94ms, 64.7MB)
테스트 8 〉	통과 (17.46ms, 53.9MB)
테스트 9 〉	통과 (12.37ms, 54.1MB)
테스트 10 〉	통과 (2.95ms, 37.1MB)
테스트 11 〉	통과 (9.55ms, 51.1MB)
테스트 12 〉	통과 (50.37ms, 90.9MB)
테스트 13 〉	통과 (0.04ms, 33.5MB)
테스트 14 〉	통과 (0.05ms, 33.6MB)
테스트 15 〉	통과 (0.04ms, 33.4MB)
테스트 16 〉	통과 (0.07ms, 33.5MB)
테스트 17 〉	통과 (0.04ms, 33.5MB)
테스트 18 〉	통과 (0.05ms, 33.5MB)
*/
function solution(ingredient) {
  let stack = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (stack.length >= 4) {
      if (
        stack[stack.length - 4] === 1 &&
        stack[stack.length - 3] === 2 &&
        stack[stack.length - 2] === 3 &&
        stack[stack.length - 1] === 1
      ) {
        count++;
        stack.splice(stack.length - 4, 4);
      }
    }
  }
  return count;
}

/*
function solution(ingredient) {
  let ingredients = ingredient.join('');
  const regex = new RegExp(/(1231)/);
  
  let count = 0;
  let temp = '';
  for(;;){
      temp = ingredients;
      ingredients = ingredients.replace(regex,'');  
      if(temp === ingredients) break;
      count++;
  }
  
  return count;
}
*/
