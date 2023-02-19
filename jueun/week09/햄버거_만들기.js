function solution(ingredient) {
  let burger = 0;
  const stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (canMakeBurger(stack)) {
      makeBurger(stack);
      burger++;
    }
  }

  return burger;
}

const canMakeBurger = (stack) => {
  const burgerOrder = [1, 2, 3, 1];
  for (let i = 4; i > 0; i--) {
    if (stack[stack.length - i] !== burgerOrder[4 - i]) return false;
  }
  return true;
};

const makeBurger = (stack) => {
  for (let i = 0; i < 4; i++) {
    stack.pop();
  }
};
