function solution(people, limit) {
    const sortedPeople = people.slice().sort((a, b) => b - a);
    let boat = 0;
    let heavy = 0, light = people.length - 1;
    
    for (heavy; heavy <= light; heavy++) {
        if (sortedPeople[heavy] + sortedPeople[light] <= limit) {
            light--;
        }
        boat++;
    }
    
    return boat;
}

/*
정확성  테스트
테스트 1 〉	통과 (1.88ms, 35.5MB)
테스트 2 〉	통과 (1.07ms, 33.6MB)
테스트 3 〉	통과 (1.16ms, 33.5MB)
테스트 4 〉	통과 (1.07ms, 33.5MB)
테스트 5 〉	통과 (0.68ms, 33.6MB)
테스트 6 〉	통과 (0.41ms, 33.6MB)
테스트 7 〉	통과 (0.60ms, 33.5MB)
테스트 8 〉	통과 (0.16ms, 33.6MB)
테스트 9 〉	통과 (0.20ms, 33.5MB)
테스트 10 〉	통과 (1.06ms, 33.5MB)
테스트 11 〉	통과 (0.95ms, 33.4MB)
테스트 12 〉	통과 (0.88ms, 33.5MB)
테스트 13 〉	통과 (1.13ms, 33.6MB)
테스트 14 〉	통과 (1.25ms, 33.6MB)
테스트 15 〉	통과 (0.22ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (13.13ms, 38.3MB)
테스트 2 〉	통과 (11.79ms, 38.2MB)
테스트 3 〉	통과 (12.83ms, 38.1MB)
테스트 4 〉	통과 (10.62ms, 38.5MB)
테스트 5 〉	통과 (11.39ms, 38.1MB)
채점 결과
정확성: 75.0
효율성: 25.0
합계: 100.0 / 100.0
*/
