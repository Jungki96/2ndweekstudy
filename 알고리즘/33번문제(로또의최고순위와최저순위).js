//https://school.programmers.co.kr/learn/courses/30/lessons/77484
//11:44

function solution(lottos, win_nums) {
    let answer = [];
    
    let correct = lottos.filter(lotto => win_nums.includes(lotto)).length;   
    let zeros = lottos.filter(lotto => lotto === 0).length;
    
    let min = 7-correct >= 6 ? 6 : 7-correct;
    let max = min-zeros < 1 ? 1 : min-zeros;
    
    answer = [max, min]
    return answer;
}

//
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}