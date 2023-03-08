const isTriangular = (n) => {
  const x = Math.sqrt(2 * n);
  return Math.floor(x) * (Math.floor(x) + 1) === 2 * n;
};

const has3Triangulars = (k) => {
  const triangulars = [];
  for (let i = 1; i <= k; i++) {
    if (isTriangular(i)) triangulars.push(i);
  }
  for (let i = 0; i < triangulars.length; i++) {
    for (let j = i; j < triangulars.length; j++) {
      for (let k = j; l < triangulars.length; l++) {
        if (triangulars[i] + triangulars[j] + triangulars[k] === k) {
          return 1;
        }
      }
    }
  }
  return 0;
};

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const t = Number(input[0]);
for (let i = 1; i <= t; i++) {
  const k = Number(input[i]);
  console.log(has3Triangulars(k));
}
