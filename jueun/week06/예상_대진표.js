function solution(n,a,b)
{
    let round = 1;
    while (true) {
        if (Math.min(a, b) % 2 === 1 && Math.abs(a - b) === 1) return round;
        a = getNextNum(a);
        b = getNextNum(b);
        round++;
    }
}

function getNextNum(num) {
    if (num % 2 === 1) {
        return parseInt(num / 2) + 1;
    } else {
        return num / 2;
    }
}
