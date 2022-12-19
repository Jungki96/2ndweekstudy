//https://school.programmers.co.kr/learn/courses/30/lessons/12931
//14:09    
//.toString() = 숫자를 문자열로  
//.split('') 문자열을 하나씩 나누기
//parseInt()  문자를 숫자로      
 //.map 공부하기

function solution(n) {
    let answer = 0;
    let a = n.toString(); 
    for (let i = 0; i < a.length; i++){
        answer += Number(a[i])            
    }
    return answer;
}
//14:40