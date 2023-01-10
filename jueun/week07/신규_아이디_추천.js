function solution(new_id) {
  let real_id = new_id;

  // step 1
  real_id = real_id.toLowerCase();

  // step 2
  real_id = real_id.replace(/[^0-9^a-z^\-\_\.\^]/g, "").replace(/\^/g, "");

  // step 3
  for (let i = real_id.length; i > 1; i--) {
    real_id = real_id.split(".".repeat(i)).join(".");
  }

  // step 4
  if (real_id[0] === ".") real_id = real_id.slice(1);
  if (real_id.slice(-1)[0] === ".") real_id = real_id.slice(0, -1);

  // step 5
  if (real_id.length === 0) real_id = "a";

  // step 6
  if (real_id.length >= 16) real_id = real_id.substr(0, 15);

  // step 7
  if (real_id.length === 2) real_id += real_id.slice(-1)[0];
  else if (real_id.length === 1) real_id = real_id[0].repeat(3);

  if (new_id === real_id) return new_id;
  else return solution(real_id);
}
