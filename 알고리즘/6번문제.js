// 음양더하기
//14:52
function solution(numbers) {
    let answer = 0;
    for(let i=0; i<10; i++){
        if(!numbers.includes(i)) answer += i;
    } 
    return answer;
}

//15:14


// 다시풀자 이거 내가 푼거아니다 정기야
// numbers.includes() TIL