//https://school.programmers.co.kr/learn/courses/30/lessons/12906
// 22:41
function solution(arr){
    let answer = [arr[0]];
    for (let i = 1; i < arr.length; i++)
        if(arr[i-1] != arr[i]){      //if(arr[i-1] = arr[i]){ continue} 도 가능한줄만 알자!
            answer.push(arr[i])
        } 
    return answer;
}
//22: 48

// 중복숫자 다뺄때 쓰자!
function solution(arr){
 let answer = [];
 arr.forEach((number) => {
    if (!answer.includes(number)) 
    {answer.push(number);
    }});
 return answer;
}

// 1안 반복문 조건이 다르다? 확인정도?
function solution(arr) {
    let answer = [arr[0]];
    for (let i=1; i<arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}