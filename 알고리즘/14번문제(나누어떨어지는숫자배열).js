//https://school.programmers.co.kr/learn/courses/30/lessons/12910
//11:15
function solution(arr, divisor) {
    let answer = [];
    for (i = 0; i < arr.length;i++){
        if((arr[i]) % divisor === 0){
            answer.push(arr[i])
        }
    }
    if(answer.length === 0){
        answer.push(-1)
    }
    answer.sort((a,b) => a - b)
    return answer;
}
//11:48

function solution(arr, divisor) {
    let answer = [];
    for (i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0)
            answer.push(arr[i])     
    }
    return answer.length < 1 ? [-1] :answer.sort((a,b) => a - b)
}
//다른 답 11:52

//1안
// 딱히 없어보임
