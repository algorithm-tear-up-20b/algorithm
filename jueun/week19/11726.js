const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/11726.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const tiles = [BigInt(0), BigInt(1), BigInt(2)];

const tiling = (n) => {
  if (tiles[n]) return tiles[n];
  tiles.push(tiling(n - 1) + tiling(n - 2));

  return tiles[n];
};

console.log(String(tiling(n) % BigInt(10007)));
