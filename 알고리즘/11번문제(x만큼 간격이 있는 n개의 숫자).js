//https://school.programmers.co.kr/learn/courses/30/lessons/12954
//00:23

function solution(x, n){
    let answer = [];
    for (let i = 1; i < n+1; i++){
        answer.push(answer[i*x]);
    }
    return answer;
}

//00:34

//1안 나쁘지않음 근데 작동 안됨 고쳐보쟈!
function solution(x, n) {
    for (let i=0, arr=[]; i<n; i++) arr.push(x + x*i);
    return arr;
}