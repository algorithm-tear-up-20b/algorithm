function solution(k, score) {
    // 1. 연결 리스트 구현
    // 2. 배열로 구현
    //    splice를 이용하면 배열 중간에 값 삽입 가능
    
    let hof = [score[0]];
    let lasts = [score[0]];
    
    for (let i = 1; i < score.length; i++) {
        lasts.push(inductHof(score[i], hof, k));
    }
    
    return lasts;
}

const inductHof = (score, hof, k) => {
    // hof 오름차순 정렬 유지 [0, 40, 300, 300]
    let inducted = false;
    for (let i = 0; i < hof.length; i++) {
        if (score >= hof[i]) {
            hof.splice(i, 0, score);
            inducted = true;
            break;
        }
    }
    if (!inducted) hof.push(score);
    return hof.slice(0, k).at(-1);
}
