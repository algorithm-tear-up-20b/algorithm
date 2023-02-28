/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.14ms, 33.4MB)
테스트 2 〉	통과 (0.17ms, 33.5MB)
테스트 3 〉	통과 (0.15ms, 33.5MB)
테스트 4 〉	통과 (0.15ms, 33.4MB)
테스트 5 〉	통과 (0.17ms, 33.5MB)
테스트 6 〉	통과 (0.22ms, 33.4MB)
테스트 7 〉	통과 (0.16ms, 33.4MB)
테스트 8 〉	통과 (0.15ms, 33.5MB)
테스트 9 〉	통과 (0.16ms, 33.4MB)
테스트 10 〉	통과 (0.18ms, 33.4MB)
테스트 11 〉	통과 (0.16ms, 33.5MB)
테스트 12 〉	통과 (0.18ms, 33.4MB)
테스트 13 〉	통과 (0.21ms, 33.5MB)
테스트 14 〉	통과 (0.15ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(skill, skill_trees) {
  const regExp = new RegExp(`[${skill}]`, "g");

  skill_trees = skill_trees.map((skillTree) => {
    const matched = skillTree.match(regExp);
    return matched ? matched.join("") : "";
  });

  let count = 0;
  for (let skillTree of skill_trees) {
    if (!skillTree.length) count++;
    else if (skill.slice(0, skillTree.length) === skillTree) count++;
  }
  return count;
}

//다른 사람의 풀이
// indexOf 메서드를 사용해서 쉽게 풀 수 있었습니다.
function solution(skill, skill_trees) {
  var regex = new RegExp(`[^${skill}]`, "g");

  return skill_trees
    .map((x) => x.replace(regex, ""))
    .filter((x) => {
      return skill.indexOf(x) === 0 || x === "";
    }).length;
}
