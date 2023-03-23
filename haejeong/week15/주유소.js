const input = ["4", "2 3 1", "5 2 4 1"];
// const input = ["4", "3 3 4", "1 1 1 1"];
// const input = ["4", "2 2 2", "2 4 1 2"];

const [N, km, prices] = [input[0], input[1].split(" ").map(BigInt), input[2].split(" ").map(BigInt)];

const solution = (prices, km) => {
  let minPrice = prices[0];
  let cost = 0n;

  for (let i = 0; i < km.length; i++) {
    if (minPrice > prices[i]) minPrice = prices[i];
    cost += minPrice * km[i];
  }

  return String(cost);
};

console.log(solution(prices, km));
