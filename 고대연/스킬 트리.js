// skill이 아닌것만 문자열에서 제거하고, 제거하고 남은 값들과 skill과 순서를 비교해서 맞는것만 추림
function solution(skill, skill_trees) {
  const regex = new RegExp(`[^${skill}]`, "g");
  return skill_trees
    .map((skill_tree) => skill_tree.replace(regex, ""))
    .filter((skill_tree) => {
      for (let i = 0; i < skill_tree.length; i++) {
        if (skill_tree[i] !== skill[i]) return false;
      }
      return true;
    }).length;
}

//처음 풀이
function solution(skill, skill_trees) {
  // skill에 없는 스킬은 상관없음.
  let count = 0;
  for (let j = 0; j < skill_trees.length; j++) {
    let flag = true;
    let acquiredSkill = "";
    const skill_tree = skill_trees[j];
    for (let i = 0; i < skill_tree.length && flag; i++) {
      //스킬에 포함이 되어있다면
      if (skill.includes(skill_tree[i])) {
        //획득스킬이 0 일때
        if (acquiredSkill.length === 0) {
          if (skill[0] === skill_tree[i]) acquiredSkill = skill_tree[i];
          else flag = false;
        }
        //획득스킬이 1개이상 일때
        else {
          //배울 스킬의 인덱스는 acquiredSkill의 길이에 해당하는 값이랑 같음
          if (skill[acquiredSkill.length] === skill_tree[i])
            acquiredSkill = acquiredSkill + skill_tree[i];
          else flag = false;
        }
      }
    }
    if (flag) count++;
  }
  return count;
}