//https://school.programmers.co.kr/learn/courses/30/lessons/42576
//19:55  검색어 배열 교집합

function solution(participant, completion) {
    let a = participant.filter(x => completion.includes(x)) // 교집합
    let b = participant.filter(x => !completion.includes(x)) // 차집합
    console.log(a)
    console.log(b)
    console.log(participant)
//    return participant.filter(x => !completion.includes(x));
}
//20:28
function solution(participant, completion) {
    participant.sort();
    completion.sort();	
    for(let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) 
        return participant[i];
    }
}

// .sort()  문자 정열