//https://school.programmers.co.kr/learn/courses/30/lessons/68644
// 11:02

function solution(numbers) {
    let answer = [];
    for (let i=0; i<numbers.length; i++){
        for (let j= i+1; j<numbers.length; j++){
            answer.push(numbers[i]+numbers[j])
        }
    }
    let set = new Set(answer)       // 중복값이 있는 배열을 Set 객체로 만들어서 중복을 제거
    let myanswer = [...set];        //이렇게 표현해서 srt객체가 배열로 변환  //let myanswer = [...new Set(answer)] 이렇게도 가능
    return myanswer.sort((a,b)=>a-b); // 내림차순으로 정열  // let myanswer = [...new Set(answer)].sort((a,b)=>a-b) 이렇게도 가능
}
//11:30

//1안 원래 생각했던 방식 근데 답수정 귀찮 ( 밑에거 작동안됨)

function solution(numbers) {
    let answer = [];
    for(var i = 0; i < numbers.length; i++){
        for(var j = j+1; j < numbers.length; j++){
            if(!answer.includes(numbers[i]+numbers[j])){
                answer.push(numbers[i]+numbers[j]);
            }
        }
    }
    let myanswer = answer.sort((a,b)=>a-b)
    return myanswer;
}