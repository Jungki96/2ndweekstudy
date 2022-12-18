//https://school.programmers.co.kr/learn/courses/30/lessons/12930
//20:31
function solution(s) {
    let answer = '';
    let a = s.split(' ')
    for (let i=0; i < a.length; i++){
        for(let j=0 ; j < a[i].length; j++){
            if(j%2 === 0){
               answer += a[i][j].toUpperCase()
            }else{
                answer += a[i][j]
            }
        } 
        if(i < a.length - 1){
            answer += ' '
        }       
    }return answer.slice(0,answer.length);
}
//21:32 1안 forin문 공부하기

function solution(s){
    var answer = '';
    var a = s.split(' ');

    for(var i in a){
        for(var j=0; j<a[i].length; j++){
            var t = a[i][j]; 
            answer += (j % 2 === 0) ? t.toUpperCase() : t.toLowerCase();
        }
        answer += ' ';
    }
    return answer.slice(0, answer.length-1);
}