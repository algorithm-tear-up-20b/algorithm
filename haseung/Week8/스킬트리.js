function solution(skill, skill_trees) {
  let count = 0;
  const skillSet = new Set(skill);
  // for (let i = 0; i < skill_trees.length; i++) {
  //   const tree = skill_trees[i]; // 스킬 트리
  //   let index = 0;
  //   let isValid = true; // 유효 여부 판단하는 플래그
  //   for (let j = 0; j < tree.length; j++) {
  //     const currentSkill = tree[j]; // 스킬트리 내에 있는 현재 스킬 트리
  //     // skill이 현재 스킬 트리에 포함되어 있는 경우
  //     // 현재 스킬 트리와 skill의 각 요소가 동일할 경우 index 증가
  //     // 아니면 isValid를 false로 바꾸고 반복문 빠져나오기

  //     if (skillSet.has(currentSkill)) {
  //       if (currentSkill != skill[index]) {
  //         isValid = false;
  //         break;
  //       } else index++;
  //     }
  //   }
  //   if (isValid) count++; // isValid가 true일 경우 index 증가
  // }

  skill_trees.forEach((tree) => {
    let index = 0;
    let isValid = true;
    for (let i = 0; i < tree.length; i++) {
      const currentSkill = tree[i];
      if (skillSet.has(currentSkill)) {
        if (currentSkill != skill[index]) {
          isValid = false;
          break;
        } else index++;
      }
    }
    if (isValid) count++;
  });
  return count;
}

/*정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.2MB)
테스트 2 〉	통과 (0.13ms, 33.5MB)
테스트 3 〉	통과 (0.17ms, 33.1MB)
테스트 4 〉	통과 (0.18ms, 33.4MB)
테스트 5 〉	통과 (0.18ms, 33.5MB)
테스트 6 〉	통과 (0.18ms, 33.4MB)
테스트 7 〉	통과 (0.19ms, 33.5MB)
테스트 8 〉	통과 (0.18ms, 33.4MB)
테스트 9 〉	통과 (0.18ms, 33.5MB)
테스트 10 〉	통과 (0.18ms, 33.4MB)
테스트 11 〉	통과 (0.18ms, 33.5MB)
테스트 12 〉	통과 (0.19ms, 33.4MB)
테스트 13 〉	통과 (0.18ms, 33.6MB)
테스트 14 〉	통과 (0.19ms, 33.6MB) */
