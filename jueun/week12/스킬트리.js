function solution(skill, skill_trees) {
  let possible = 0;

  let skillMap = new Map();

  skill.split("").map((val, idx) => {
    skillMap.set(val, idx);
  });

  let step;
  const isPossible = (tree) => {
    // console.log(skillMap);

    let now = -1; // C: 0, B: 1, D: 2
    for (let val of tree) {
      step = skillMap.get(val);
      // console.log(step, now);
      if (step !== undefined) {
        if (step === now + 1) now++;
        else return false;
      }
    }
    return true;
  };

  skill_trees.map((tree) => {
    if (isPossible(tree)) possible++;
  });

  // console.log(possible);

  return possible;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
